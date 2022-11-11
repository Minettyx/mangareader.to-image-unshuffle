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

/*
The MIT License (MIT)

Copyright (c) 2015 Andre Caetano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// https://github.com/webcaetano/shuffle-seed/blob/995ad28586edb788b1037c53e6ef86dfd842e228/shuffle-seed.js#L44
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
