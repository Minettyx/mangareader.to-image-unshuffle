package mangareader_unshuffle

import (
	image_pkg "image"
	"math"

	"image/draw"

	"github.com/Minettyx/mangareader.to-image-unshuffle/random"
)

type slice_type struct {
	x      int
	y      int
	width  int
	height int
}

type group_type struct {
	slices int
	cols   int
	raws   int
	x      int
	y      int
}

// ported from https://github.com/pandeynmn/nmns-extensions/blob/0bc45593ee3c16f4da38595fe5a4b52e71310ef4/src/MangaReaderTo/interceptors/ImageInterceptor.ts under GPL-v3
func Unshuffle(image image_pkg.Image) *image_pkg.RGBA {
	sliceSize := 200

	canvas := image_pkg.NewRGBA(image_pkg.Rectangle{image_pkg.Point{0, 0}, image_pkg.Point{image.Bounds().Dx(), image.Bounds().Dy()}})

	totalParts := int(math.Ceil(float64(image.Bounds().Dx())/float64(sliceSize)) * math.Ceil(float64(image.Bounds().Dy())/float64(sliceSize)))

	noOfHoriSeg := int(math.Ceil(float64(image.Bounds().Dx()) / float64(sliceSize)))
	someArray := make(map[int][]slice_type)

	for i := 0; i < totalParts; i++ {
		row := int(math.Floor(float64(i) / float64(noOfHoriSeg)))
		slice := slice_type{
			x:      (i - row*noOfHoriSeg) * sliceSize,
			y:      row * sliceSize,
			width:  0,
			height: 0,
		}

		var temp int
		if (slice.x + sliceSize) <= image.Bounds().Dx() {
			temp = 0
		} else {
			temp = slice.x + sliceSize - image.Bounds().Dx()
		}
		slice.width = sliceSize - temp

		if (slice.y + sliceSize) <= image.Bounds().Dy() {
			temp = 0
		} else {
			temp = slice.y + sliceSize - image.Bounds().Dy()
		}
		slice.height = sliceSize - temp

		if _, ok := someArray[slice.width-slice.height]; ok == false {
			someArray[slice.width-slice.height] = []slice_type{}
		}

		someArray[slice.width-slice.height] = append(someArray[slice.width-slice.height], slice)

	}

	for property := range someArray {
		baseRangeArray := baseRange(0, len(someArray[property]), 1, false)
		shuffleInd := random.Unshuffle(baseRangeArray)
		groups := getGroup(someArray[property])

		for key, slice := range someArray[property] {
			s := shuffleInd[key]

			row := int(math.Floor(float64(s) / float64(groups.cols)))
			col := s - row*groups.cols
			x := col * slice.width
			y := row * slice.height

			draw.Draw(
				canvas,
				image_pkg.Rectangle{
					image_pkg.Point{slice.x, slice.y},
					image_pkg.Point{slice.x + slice.width, slice.y + slice.height},
				},
				image,
				image_pkg.Point{groups.x + x, groups.y + y},
				draw.Op(0))
		}
	}

	return canvas
}

func getColsInGroup(slices []slice_type) int {

	if len(slices) == 1 {
		return 1
	}
	var t int
	var i int
	for i = 0; i < len(slices); i++ {
		if i == 0 {
			t = slices[i].y
		}
		if t != slices[i].y {
			return i
		}
	}

	return i
}

func getGroup(slices []slice_type) group_type {
	group := group_type{
		slices: len(slices),
		cols:   getColsInGroup(slices),
		raws:   0,
		x:      slices[0].x,
		y:      slices[0].y,
	}

	group.raws = len(slices) / group.cols
	return group
}

func baseRange(start int, end int, step int, fromRight bool) []int {
	// println(start, end, step, fromRight)
	index := -1
	length := int(math.Max(math.Ceil(float64(end-start)/float64(step)), 0))
	result := make([]int, length)

	for length > 0 {
		length -= 1
		var temp int
		if fromRight {
			temp = length
		} else {
			index += 1
			temp = index
		}
		// print(temp)
		result[temp] = start
		start += step
	}

	return result
}
