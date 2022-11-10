package random

import (
	"math"
)

func randomBetween(exe func() float64, min int, max int) int {
	return int(math.Floor(exe()*float64(max-min+1))) + min
}

func remove[T any](slice []T, s int) []T {
	return append(slice[:s], slice[s+1:]...)
}

func Unshuffle[T any](arr []T) []T {
	size := len(arr)
	rng := LookupRandom()
	resp := make([]T, size)
	keys := []int{}

	for i := 0; i < size; i++ {
		keys = append(keys, i)
	}

	for i := 0; i < size; i++ {
		r := randomBetween(rng, 0, len(keys)-1)
		g := keys[r]
		keys = remove(keys, r)
		// println(r)
		resp[g] = arr[i]
	}

	return resp
}
