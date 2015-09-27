package main

import "fmt"

const sqncEnd = 100

func fibonacci() func() int {
	a, b := 0, 1
	return func() int {
		tmpA := a
		a = b
		b = tmpA+b
		return b
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < sqncEnd; i++ {
		fmt.Println(f())
	}
}
