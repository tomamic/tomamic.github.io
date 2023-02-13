![](images/dev/gopher.svg)
# Go language
## Programming paradigms

---

# Less is exponentially more

- Made in ~2007 at Google, starting roughly from C
    - By the Unix pioneers Rob *Pike* and Ken *Thompson*, together with Robert Griesemer
    - Book: “The Go Programming Language” by Brian W. *Kernighan*, Alan Donovan
- Very few, orthogonal concepts
    - No exceptions, no template, no inheritance
    - Interfaces and duck typing
    - Type inference
    - Garbage collection, but native (no VM)
    - Communicating sequential processes

>

After a talk of 35 new features of C++11, and at pauses for compiling C++...
<https://commandcenter.blogspot.it/2012/06/less-is-exponentially-more.html>

---

# Hello, Gopher

- Program starts at function `main` in package `main`
- A package *exports* only names starting with a **capital letter**

``` go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Gopher")
}
```

``` shell
go run hello.go
```

---

# Variables

- Variables can be created with `var` (or `const`...)
    - If initial value, type can be omitted (**type inference**)
    - If no initial value, their *zero value* is assigned
- Variables can also be created with `:=`

``` go
func main() {
    var i, j int = 1, 2
    k := 3
    c, python, java := true, false, "no!"

    fmt.Println(i, j, k, c, python, java)
}
```

---

# Functions

- Type comes after variable name (or multiple names)
- Call by value

``` go
func hypotenuse(a, b float64) float64 {
    return math.Sqrt(a * a + b * b)
}

func main() {
    fmt.Println(hypotenuse(3, 4))
}
```

---

# For loops

- Only one looping construct, the **`for`** loop
- Init statement; condition; post statement
- All are optional...
- No parentheses, but mandatory braces

``` go
sum := 0
for i := 0; i < 10; i++ {
    sum += i
}
fmt.Println(sum)
```

---

# While and forever

``` go
sum := 1
for sum < 1000 {
    sum += sum
}
fmt.Println(sum)
```

``` go
for {
}
```

---

# Ranges

- Range `for` loop, to iterate over a **slice** (*explained later*)
- A couple of values at each iteration: index, element
- Drop the index using `_`, or drop the element entirely

``` go
pow := []int{1, 2, 4, 8, 16, 32, 64, 128}

for i, v := range pow {
    fmt.Printf("2**%d = %d\n", i, v)
}
```

---

# If selections

- Init statement; condition
- Init is optional
- No parentheses, but mandatory braces

``` go
func pow(x, n, lim float64) float64 {
    if v := math.Pow(x, n); v < lim {
        return v
    } else {
        fmt.Printf("%g >= %g\n", v, lim)
    }
    // can't use v here, though
    return lim
}
// test: pow(3, 2, 10), pow(3, 3, 20)
```

---

# Pointers

- Like C, *without* pointer arithmetics

``` go
i, j := 42, 2701

p := &i         // point to i
fmt.Println(*p) // read i through the pointer
*p = 21         // set i through the pointer
fmt.Println(i)  // see the new value of i

p = &j         // point to j
*p = *p / 37   // divide j through the pointer
fmt.Println(j) // see the new value of j
```

---

# Structs

- A `struct` is a collection of fields
- Fields accessed using a *dot*
- A package *exports* only names starting with a **capital letter**

``` go
type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    v.X = 4
    fmt.Println(v)
}
```

---

# Pointers to structs

- Access to fields: we could write `(*p).X`, or...
- Just `p.X`, without the explicit *dereference*

``` go
v := Vertex{1, 2}
p := &v             // has type *Vertex
p.X = 4
fmt.Println(v)
p1:= &Vertex{3, 4}  // also, has type *Vertex
```

- In general, fields can be intialized by name

``` go
v2 := Vertex{X: 1}  // Y:0 is implicit
v3 := Vertex{}      // X:0 and Y:0
```

---

# Duck typing
## Methods and interfaces

---

# Methods

- No classes, but methods on types
- A method is just a function with a *receiver* argument
- Receiver type must be defined in same *package*

``` go
type Vertex struct {
    X, Y float64
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}
```

---

# Pointer receivers

- Methods with pointer receivers can modify the receiver obj
- Convenience referencing and dereferencing
    - A method with pointer rec. can be used on a value
    - A method with value rec. can be used on a pointer

``` go
func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func main() {
    v := Vertex{3, 4}
    v.Scale(10)
    fmt.Println(v.Abs())
}
```

---

# Value or pointer receiver?

- Two reasons to use a pointer receiver
    - Modify the pointed value
    - Avoid copying value at call, for efficiency
- In general, all methods on a given type should have:
    - *Either* value, or pointer receivers
    - But **not a mixture** of both
    - Problems with *interfaces*...

---

# Vertex, the way to go

- `Vertex`: pointer receiver for both `Abs` and `Scale`

``` go
type Vertex struct {
    X, Y float64
}

func (v *Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}
```

---

# Interface

- A set of method signatures
    - Methods, not ordinary functions
    - A value of interface type can hold any value...
    - That implements all those methods (*duck typing*)
- A type implements an interface by implementing its methods
    - No explicit declaration, no `implements` keyword
    - Definition of interface decoupled from implementation
    - Different packages, no pre-arrangement

---

# Dogs and pigs

``` go
type Dog struct {
    Name string
}

type Pig struct {
    Name string
}

func (d *Dog) Say() {
    fmt.Println("I'm " + d.Name + " and I say: WOOF!")
}

func (p *Pig) Say() {
    fmt.Println("I'm " + p.Name + " and I say: OINK!")
}
```

---

# Animals

``` go
type Animal interface {
    Say()
}

func main() {
    // a1 Animal := Pig{"George"} // error, a pointer is needed

    animals := []Animal{ &Pig{"Peppa"}, &Dog{"Danny"} }
    for _, a := range animals {
        a.Say()
    }
}
```

---

# The empty interface

- Empty interface
    - Specifies zero methods
    - May hold values of any type

``` go
interface{}
```

- Used by code that handles values of *unknown type*
    - For example, `fmt.Print`
    - Any number of arguments of type `interface{}`
- Used for *generic* but *unsafe* code
    - **No templates** , but in latest version

---

# No inheritance, but composition

- No *inheritance*, but only *interfaces* and *composition*

``` go
type User struct {
    Name string
    Email string
}
func (u *User) Notify() error {
    fmt.Printf("Sending email to %s <%s>\n", u.Name, u.Email)
    return nil
}
type Admin struct {
    Inner User
    Level string
}
```

---

# Explicit delegation

- If a method of an embedded object has to be exposed...
- Define it again and *delegate* execution to embedded object

``` go
func (a *Admin) Notify() error {
    return a.Inner.Notify()
}
func main() {
    admin := &Admin {
        Inner: User { "john smith", "john@email.com"},
        Level: "super",
    }
    admin.Notify()
}
```

---

# Anonymous embedding

- Delegation can be tedious...
- *Anonymous embedding* allows automatical delegation
- In case of ambiguity, you solve it

``` go
type Admin struct {
    User
    Level string
}
func main() {
    admin := &Admin {
        User: User { "john smith", "john@email.com"},
        Level: "super",
    }
    admin.Notify()  // Not redefined!
}
```

---

# More to Go

---

# Packages

- Import statements can be separated, or *factored*
- *Package name* = last element of *import path*

``` go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())
    fmt.Println("My favorite number is", rand.Intn(10))
}
```

---

# Multiple results

- Go does *not* have built-in *tuples*
- But functions can return multiple values
- Often used to return value and error

``` go
func swap(x, y string) (string, string) {
    return y, x
}

func main() {
    a, b := swap("hello", "world")
    fmt.Println(a, b)
}
```

---

# Named return values

- Go's return values may be named (~ local variables)
- To document the meaning of return values
- *Naked return*

``` go
func coords(index, width int) (x, y int) {
    x = index % width
    y = index / width
    return
}

func main() {
    fmt.Println(coords(15, 6))
}
```

---

# Basic types

- `bool`
- `string` - Sequence of bytes, source is *utf-8*
- `int, uint` - 32 or 64 bits, system-dependent
- `int8, int16, int32, int64`
- `uint8, uint16, uint32, uint64`
- `float32, float64`
- `complex64, complex128`
- `byte` - Alias for `uint8`
- `rune` - Alias for `int32`, a *Unicode code point*
    - Obtained for example through a *for range*...
- `uintptr` - An int representing a pointer, unsafe
- *Note* : casts are always *explicit* .

---

# Switch selections

- Optional init statement and condition
- Implicit break, unless `case` ends with `fallthrough`

``` go
fmt.Print("Go runs on ")
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("OS X.")
case "linux":
    fmt.Println("Linux.")
default:
    // freebsd, openbsd,
    // plan9, windows...
    fmt.Printf("%s.", os)
}
```

---

# Switch w/o condition

- Clean chain of selections

``` go
t := time.Now()
switch {
case t.Hour() < 12:
    fmt.Println("Good morning!")
case t.Hour() < 17:
    fmt.Println("Good afternoon.")
default:
    fmt.Println("Good evening.")
}
```

---

# Defer

- Statement to defer execution of a function...
- Until the surrounding function ends
- Deferred functions are pushed in a stack (*LIFO*)
- Arguments are evaluated immediately

``` go
func main() {
    defer fmt.Println("world")

    fmt.Println("hello")
}
```

---

# Arrays

- A numbered sequence of elements of a single type with a fixed length

``` go
var a [2]string
a[0] = "Hello"
a[1] = "World"
fmt.Println(a[0], a[1])
fmt.Println(a)

primes := [6]int{2, 3, 5, 7, 11, 13}
fmt.Println(primes)
```

---

# Slices

- A segment of an underlying array
- It does not store any data
- Changes are applied to the underlying array
- Visible to other slices sharing the same array

``` go
primes := [6]int{2, 3, 5, 7, 11, 13}  // an array

var s []int = primes[1:4]             // a slice
fmt.Println(s)
```

- Slice literal: create an array and get a slice over it

``` go
q := []int{2, 3, 5, 7, 11, 13}
```

---

# Multiple slices

``` go
names := [4]string{
    "John",
    "Paul",
    "George",
    "Ringo",
}
fmt.Println(names)

a := names[0:2]
b := names[1:3]
fmt.Println(a, b)

b[0] = "XXX"
fmt.Println(a, b)
fmt.Println(names)
```

---

# Length and capacity

- Length of a slice `s`: number of elements it contains, `len(s)`
- Capacity of a slice `s`: number of elements in the underlying array, `cap(s)`
- `nil`: slice with `0` for both len and cap
- *Note* : when slicing, high or low bounds can be omitted

``` go
func printSlice(s []int) {
    fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```

---

# Re-slicing

``` go
s := []int{2, 3, 5, 7, 11, 13}
printSlice(s)

s = s[:0]  // Slice the slice to give it zero length
printSlice(s)

s = s[:4]  // Extend its length
printSlice(s)

s = s[2:]  // Drop its first two values
printSlice(s)
```

---

# Slices of slices

``` go
// Create a tic-tac-toe board.
board := [][]string{
    []string{"_", "_", "_"},
    []string{"_", "_", "_"},
    []string{"_", "_", "_"},
}

// The players take turns.
board[0][0] = "X"
board[2][2] = "O"
board[1][2] = "X"
board[1][0] = "O"
board[0][2] = "X"

for i := 0; i < len(board); i++ {
    fmt.Printf("%s\n", board[i])
}
```

---

# Appending to a slice

- `append`: returns a slice containing all original elements, plus provided value(s)
- If the backing array is too small, a bigger array will be *allocated*

``` go
var s []int
printSlice(s)

s = append(s, 0)  // append works on nil slices
printSlice(s)

s = append(s, 1)  // The slice grows as needed
printSlice(s)

s = append(s, 2, 3, 4)  // Add more elements
printSlice(s)
```

---

# Maps

- An unordered collection of key-value pairs
- Aka associative array, hash table, or dictionary

``` go
x := make(map[string]int)
x["key"] = 10
fmt.Println(x["key"])
```

---

# Map literals

``` go
m := map[string]Vertex{
    "Bell Labs": {40.68433, -74.39967},
    "Google":    {37.42202, -122.08408},
}
```

- Delete an element: `delete(m, key)`
- Test that a key is present: `elem, ok := m[key]`
    - If `key` is not in the map, then `elem` is the zero value and `ok` is `false`

---

# Higher order functions

- Functions are values too: they may be used as function arguments and return values

``` go
func compute(fn func(float64, float64) float64) float64 {
    return fn(3, 4)
}

func main() {
    hypotenuse := func(x, y float64) float64 {
        return math.Sqrt(x*x + y*y)
    }
    fmt.Println(hypotenuse(5, 12))

    fmt.Println(compute(hypotenuse))
    fmt.Println(compute(math.Pow))
}
```

---

# Closure

- A function referencing outside variables

``` go
// f. that returns a f. that returns an int
func fibonacci() func() int {
    curr, next := 0, 1
    return func() int {
        val := curr
        curr, next = next, next + curr  // captured by ref.
        return val
    }
}
func main() {
    f := fibonacci()
    for i := 0; i < 10; i++ {
        fmt.Println(f())
    }
}
```

---

# Abser

``` go
type Abser interface {
    Abs() float64
}

func main() {
    var a Abser
    v := Vertex{3, 4}

    a = &v // a *Vertex implements Abser
    // a = v // error! Vertex is not Abser; *Vertex is

    fmt.Println(a.Abs())
}
```

---

# Another abser

``` go
type MyFloat float64

func (f MyFloat) Abs() float64 {
    if f < 0 {
        return float64(-f)
    }
    return float64(f)
}

func main() {
    var a Abser
    f := MyFloat(-math.Sqrt2)

    a = f  // a MyFloat implements Abser

    fmt.Println(a.Abs())
}
```

---

# Methods vs. functions

- Only methods allow to implement interfaces
- Not ordinary functions

``` go
func Abs(v Vertex) float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Scale(v *Vertex, f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func main() {
    v := Vertex{3, 4}
    Scale(&v, 10)
    fmt.Println(Abs(v))
}
```

---

# Type assertions

``` go
var i interface{} = "hello"

s := i.(string)
fmt.Println(s)

s, ok := i.(string)
fmt.Println(s, ok)

f, ok := i.(float64)
fmt.Println(f, ok)

//f = i.(float64) // panic
fmt.Println(f)
```

---

# Type switches

``` go
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Twice %v is %v\n", v, v*2)
    case string:
        fmt.Printf("%q is %v bytes long\n", v, len(v))
    default:
        fmt.Printf("I don't know about type %T!\n", v)
    }
}

func main() {
    do(21)
    do("hello")
    do(true)
}
```

---

# Basic interfaces

``` go
type Stringer interface {
    String() string
}

type error interface {
    Error() string
}

type Reader interface {
    Read(p []byte) (n int, err error)
}
```

- Under the covers, interface value ~ tuple: `(value, type)`
    - Method of an interface value → method of its underlying type
    - Interface value holding a `nil`: itself is non-nil; its methods are callable

---

# Concurrency

---

# Goroutine

- A lightweight thread managed by the Go runtime
- Params are evaluated locally
- Access to shared memory must be synchronized (`sync` package)

``` go
func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("world")
    say("hello")
}
```

---

# Channels

- A typed conduit, to send and receive values
- Channel operator, `<-`

``` go
func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
            sum += v
    }
    c <- sum             // (blocking) send sum to c
}
func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)  // use `make` to create a channel
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    x, y := <-c, <-c     // (blocking) receive from c
    fmt.Println(x, y, x+y)
}
```

---

# Using channels

- By default, sends and receives block until the other side is ready
- Channels can be buffered
    - `ch := make(chan int, 100) // buffer for 100 ints`
    - Sends to a buffered channel block only when the buffer is full
    - Receives block when the buffer is empty
- A sender can close a channel: no more values
    - `close(c)`
- A receiver can test whether a channel has been closed
    - `v, ok := <-ch`

---

# Select

- Statement to wait on multiple communication operations
    - `default`, if no other case is ready

``` go
func fibonacci(c, quit chan int) {
    x, y := 0, 1
    for {
        select {
        case c <- x:
            x, y = y, x+y
        case <-quit:
            fmt.Println("quit")
            return
        }
    }
}
```

---

# Operating two channels

``` go
func main() {
    c := make(chan int)
    quit := make(chan int)
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Println(<-c)
        }
        quit <- 0
    }()
    fibonacci(c, quit)
}


