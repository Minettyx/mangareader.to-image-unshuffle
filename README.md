# Mangareader.to Image Unshuffle

Go library to unshuffle the images from [mangareader.to](https://mangareader.to/)

* The random number generation is done using a lookup table of 500 elements (maximum image area of 20000000px)

* Unshuffle alghoritm ported to Go from ([https://github.com/pandeynmn/nmns-extensions/blob/main/src/MangaReaderTo/interceptors/ImageInterceptor.ts](https://github.com/pandeynmn/nmns-extensions/blob/main/src/MangaReaderTo/interceptors/ImageInterceptor.ts))


![](https://img.0kb.eu/vCBVtWla.png)

## Install

```
go get github.com/Minettyx/mangareader.to-image-unshuffle
```

## Usage

Example

```go
package main

import (
	"image/jpeg"
	"os"

	mangareader_unshuffle "github.com/Minettyx/mangareader.to-image-unshuffle"
)

func main() {
	input_file, err := os.Open("input.jpg")
	if err != nil {
		panic(err)
	}

	input_image, err := jpeg.Decode(input_file)
	if err != nil {
		panic(err)
	}

	output_image := mangareader_unshuffle.Unshuffle(input_image)

	output_file, err := os.Create("output.jpg")
	if err != nil {
		panic(err)
	}

	jpeg.Encode(output_file, output_image, nil)
}

```


