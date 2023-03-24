![](images/fun/haskell-logo.svg)
# Haskell
## Functional programming

---

![](images/fun/matryoshka.png)
# Recursion

> If you still don't know what recursion is, read this sentence

- Recursion is a way of defining f.s
    - The f. is applied inside its own definition
- Definitions in maths are often given recursively
    - An element defined non-recursively, for termination
- E.g., Fibonacci sequence
    - `F(0) = 0; F(1) = 1`  (*edge conditions*)
    - `F(n) = F(n-1) + F(n-2)`
    - ⇒ `F(3) = F(2)+F(1) = (F(1)+F(0))+F(1) = 2`
- No loops in Haskell
    - Recursion to *declare* what something is

---

# Maximum function

- Takes a list of things that can be ordered (`Ord` typeclass)
- Returns the biggest of them
- *Imperative paradigm*
    - A variable to hold the maximum value so far
    - Loop through the elements
- *Recursive definition*
    - *Singleton* list, edge condition: <br> The maximum is the only element in it
    - *Longer* list: <br> Find the maximum of the tail <br> Choose between head and maximum of tail

---

# Maximum with recursion

``` hs
maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs)
    | x > maxTail = x
    | otherwise = maxTail
    where maxTail = maximum' xs
```

- *Pattern* to split a list into head and tail
    - Common idiom when doing recursion with lists
    - Otherwise, a lot of `if-else` statements

>

Example list of numbers, check out how this would work on them: [2,5,1]

---

# Maximum with max

- `max` takes two values and returns the bigger

``` hs
maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs) = max x (maximum' xs)
```

![](images/fun/maxs.png)

---

# Take with recursion

- `take` takes a certain number of elements from a list
- For instance, `take 3 [5,4,3,2,1]` returns `[5,4,3]`
- Edge conditions
    - Take 0 or less elements from a list → empty list
    - Take anything from an empty list → empty list

``` hs
take' :: Int -> [a] -> [a]
take' n _
    | n <= 0   = []
take' _ []     = []
take' n (x:xs) = x : take' (n-1) xs
```

>

Guard, without an `otherwise` part: if `n > 0`, the matching falls through to the next pattern

---

# Reverse with recursion

- Edge condition: the empty list!
- Split a list to a head and a tail
- Result: reversed tail and then the head at the end

``` hs
reverse' :: [a] -> [a]
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]
```

---

# Zip with recursion

- `zip [1,2,3] [2,3]` returns `[(1,2),(2,3)]`
- Truncates the longer list to match the shorter
- Zip something with an empty list
    - → Empty list (*edge conditions*)

``` hs
zip' :: [a] -> [b] -> [(a,b)]
zip' _ [] = []
zip' [] _ = []
zip' (x:xs) (y:ys) = (x,y):zip' xs ys
```

>

Ex.: `zip [1,2,3] ['a','b']`

---

# Elem with recursion

- `elem` takes an element and a list and sees if that element is in the list
- If the head isn't the element, then check the tail
- If an empty list is reached, result is `False` (edge condition)

``` hs
elem' :: (Eq a) => a -> [a] -> Bool
elem' a [] = False
elem' a (x:xs)
    | a == x    = True
    | otherwise = a `elem'` xs
```

---

# Replicate with recursion

- `replicate` takes an `Int` and some element
- Returns a list with repetitions of same element
- For instance, `replicate 3 5` returns `[5,5,5]`
- Replicate something zero times (or less)
    - → Empty list (edge condition)

``` hs
replicate' :: Int -> a -> [a]
replicate' n x
    | n <= 0    = []
    | otherwise = x:replicate' (n-1) x
```

- Guards instead of patterns: testing for a boolean condition

---

# Infinite recursion

- Haskell is *lazy* and supports infinite lists
- Recursion without edge condition
- `repeat` takes an element and returns an infinite list...

``` hs
repeat' :: a -> [a]
repeat' x = x:repeat' x
```

- `repeat 3` evaluates like
    - `3:repeat 3`
    - `3:(3:repeat 3)`...
- `repeat 3` gives us a list that
    - Starts with 3
    - Then has an infinite amount of 3's as a tail
- `take 5 (repeat 3)` will give us a list of five 3's
    - Essentially it's like doing `replicate 5 3`

---

![large](images/fun/quicksort.png)
# Quicksort

- List of comparable things (`Ord`)
- Edge condition: empty list
- Algorithm:
    - All values `≤` head, in front (and those values are sorted)
    - Then, head (*pivot*) in the middle
    - Then, all values `>` head (they're also sorted)
- Idea:
    - We said “sorted” two times in this definition: recursion
    - Filter to get only some elements: list comprehensions

``` hs
quicksort :: (Ord a) => [a] -> [a]
```

---

# Haskell poster child

``` hs
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in  smallerSorted ++ [x] ++ biggerSorted
```

``` hs
ghci> quicksort [5,1,9,4,6,7,3]
[1,3,4,5,6,7,9]
ghci> quicksort "the quick brown fox jumps over the lazy dog"
"        abcdeeefghhijklmnoooopqrrsttuuvwxyz"
```

---

# Thinking recursively

- Thought pattern
    - Usually you define an edge case, ...
    - then you define a f., operating on some element and...
    - the same f. applied to the rest
- Examples
    - Sum: the first element plus the sum of the rest
    - Product: the first element times the product of the rest
    - Length of a list: one plus the length of the tail
- With lists, edge case is most often the empty list
- With numbers, edge case is often an identity

---

![large](images/comp/merge.svg)
# Merging in Python

- Take two *sorted* lists
- Produce a sorted list, with all the elems
- At each step, choose one of the two head elements

``` py
def merge(v1: list, b1, e1,  # beg, end
          v2: list, b2, e2) -> list:
    result = []  # required extra memory
    while b1 < e1 or b2 < e2:
        if b1 < e1 and (b2 == e2 or v1[b1] <= v2[b2]):
            result.append(v1[b1]); b1 += 1
        else:
            result.append(v2[b2]); b2 += 1
    return result
```

---

![large](images/comp/merge-sort.svg) Split is red; merge is green
# Merge Sort in Python

- Take a list, split it at half
- *Sort* each part, recursively
- *Merge* the two sorted parts

``` py
def merge_sort(v: list, beg, end: int):
    if end - beg <= 1: return
    mid = (beg + end) // 2
    merge_sort(v, beg, mid)
    merge_sort(v, mid, end)
    v[beg:end] = merge(v, beg, mid, v, mid, end)
```

---

![](images/comp/divide-et-impera.svg)
# Divide et impera

- At each step, the problem space is halved
- Complexity is optimal
- But merge requires additional memory

>

<https://visualgo.net/en/sorting?slide=11>

---

![](images/fun/stack.svg)
# Traditional recursion example

``` hs
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

``` hs
ghci> factorial 3
6
```

- Perform recursive call first
- Then use its result to calculate the new result

---

![](images/fun/stack-tr.svg)
# Tail recursion example

``` hs
fact_tr 0 acc = acc
fact_tr n acc = fact_tr (n - 1) (n * acc)

factorial' n = fact_tr n 1
```

``` hs
ghci> factorial' 3
6
ghci> fact_tr 3 1
6
```

- Perform calculations first
- Then perform recursive call, passing current results to the next recursive step
- Return val of any recursive step is the same

---

![](images/fun/stack-tr.svg)
# Tail recursion optimization

``` c
int fact_tr(int n, int acc) {
loop:
    if (n == 0) return acc;
    return fact_tr(n - 1, acc * n);
    // n = n - 1; acc = acc * n; goto loop;
}
```

- Observe last statement, with recursive call
    - Once ready to perform the next recursive step...
    - The current *stack frame* is not needed any more!
- **Optimization**: *the compiler reuses the frame* for the next recursive step

---

# Exercise

---

# Higher order functions

---

# Higher order functions

- **Higher order functions**
    - Haskell functions can take functions as parameters and return functions as return values
    - A function that does either of those is called a *higher order function*
    - Essential feature of the language, indispensable for the functional paradigm
- **Curried functions**
    - Every function in Haskell officially only takes one parameter (!)
    - What's the “trick” for functions that take more than one parameter?
    - All the functions that accepted several parameters so far have been *curried* functions

---

# Curried functions

- Apparently... the `max` function takes two `Ord` parameters and returns the one that's bigger
- In reality, the following two calls are equivalent:

``` hs
ghci> max 4 5
5
ghci> (max 4) 5
5
```

- `max 4 5` first creates a f. that takes a param
- Returns either 4 or that param, depending on which is bigger
- Then, 5 is applied and that f. produces our desired result

>

The space is like an operator, for function application, which has the highest precedence

---

# Currying and function types

- Let's examine the type of `max`:
    - `max :: (Ord a) => a -> a -> a`
    - `max :: (Ord a) => a -> (a -> a)  -- same as above`
- Read as:
    - `max` takes an `a`...
    - and returns (that's the `->`) a function...
    - that takes an `a` and returns an `a`
- Currying is the reason why the return type and the parameters of functions are all simply separated with arrows

---

# Partially applied functions

- If we call a f. with too few parameters, we get back a partially applied f.
- The returned f. takes as many parameters as we left out
- Using partial application is a neat way to create f.s on the fly

``` hs
multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z
```

- `multThree 3 5 9` or `((multThree 3) 5) 9`
    - First, `3` is applied to `multThree`; that creates a f. that takes one parameter and returns a f.
    - So then `5` is applied to that, which creates a f. that takes one parameter and multiply it by `15`
    - `9` is applied to that function, so the result is `135`

---

# Function types

``` hs
multThree :: (Num a) => a -> a -> a -> a
```

- The thing before the `->` is the parameter that a f. takes
- The thing after it is what it returns

``` hs
multThree :: (Num a) => a -> (a -> (a -> a))  -- same as above
```

- Our f. takes an `a` and returns a f. of type
    - `(Num a) => a -> (a -> a)`
- Similarly, this f. takes an `a` and returns a f. of type
    - `(Num a) => a -> a`
- And this f., finally, just takes an `a` and returns an `a`

---

# Partial application

- By calling functions with too few parameters, we're creating new functions on the fly

``` hs
ghci> let multTwoWith9 = multThree 9
ghci> multTwoWith9 2 3
54
ghci> let multWith18 = multTwoWith9 2
ghci> multWith18 10
180
```

---

# Currying for creating functions

``` hs
compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred x = compare 100 x
```

- Function that takes a number and compares it to 100
- Notice that the `x` is *on the right hand* on both sides of the equation
- However, `compare 100` returns a function, that takes a number and compares it with 100
- The type declaration stays the same

``` hs
compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred = compare 100
```

---

# Function sections

- Operators and infix functions can also be partially applied
    - **Section**: surround f. with parentheses and only supply a parameter on one side
    - That creates a f. that takes just one parameter (the missing operand)
- Examples:
    - Divide a number by 10
    - Check if a char is uppercase

``` hs
divideByTen :: (Floating a) => a -> a
divideByTen = (/10)

isUpperAlpha :: Char -> Bool
isUpperAlpha = (`elem` ['A'..'Z'])
```

---

# Defining higher-order functions

- F.s can take f.s as parameters and also return f.s
- Ex.: a f. that takes a f., and then applies it twice to something

``` hs
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)
```

- Type declaration: parentheses because `->` is naturally right-associative
    - The first parameter is a function that takes something and returns that same thing
    - The second parameter is something of that type also
    - The return value is also of the same type

---

# Example of high-order function

``` hs
ghci> applyTwice (+3) 10
16
ghci> applyTwice (++ " HAHA") "HEY"
"HEY HAHA HAHA"
ghci> applyTwice ("HAHA " ++) "HEY"
"HAHA HAHA HEY"
ghci> applyTwice (multThree 2 2) 9
144
ghci> applyTwice (3:) [1]
[3,3,1]
```

- Our f. requires us to pass it a f. that takes only one param
- We can just partially apply a f. to the point where it takes only one param and then pass it

---

# Mapping and filtering

---

# The map function

- It takes a f. and a list
- It applies that f. to every element in the list
- It produces a new list

``` hs
map' :: (a -> b) -> [a] -> [b]
map' _ [] = []
map' f (x:xs) = f x : map' f xs
```

---

# Using map

- `map` is a really versatile higher-order function, can be used in many different ways
- These could be achieved with a list comprehension, but `map` can be more readable

``` hs
ghci> map (+3) [1,5,3,1,6]
[4,8,6,4,9]
ghci> map (++ "!") ["BIFF", "BANG", "POW"]
["BIFF!","BANG!","POW!"]
ghci> map (replicate 3) [3..6]
[[3,3,3],[4,4,4],[5,5,5],[6,6,6]]
ghci> map (map (^2)) [[1,2],[3,4,5,6],[7,8]]
[[1,4],[9,16,25,36],[49,64]]
ghci> map fst [(1,2),(3,5),(6,3),(2,6),(2,5)]
[1,3,6,2,2]
```

---

# The filter function

- It takes a predicate (a f. that returns a bool) and a list
- It returns the list of elements that satisfy the predicate

``` hs
filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' p (x:xs)
    | p x       = x : filter' p xs
    | otherwise = filter' p xs
```

---

# Using filter

``` hs
ghci> filter (>3) [1,5,3,2,1,6,4,3,2,1]
[5,6,4]
ghci> filter even [1..10]
[2,4,6,8,10]
ghci> filter (`elem` ['a'..'z']) "u LaUgH aT mE BeCaUsE I aM diFfeRent"
"uagameasadifeent"
```

``` hs
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort (filter (<=x) xs)
        biggerSorted = quicksort (filter (>x) xs)
    in  smallerSorted ++ [x] ++ biggerSorted
```

---

# Map and filter

- Mapping and filtering is the bread and butter of every functional programmer
    - Imperative programming: nesting loops and testing
    - Functional programming: mapping and filtering (or comprehensions)
- Ex.: largest number under 100,000 that's divisible by 3829

``` hs
largestDivisible :: (Integral a) => a
largestDivisible = head (filter p [100000,99999..])
    where p x = x `mod` 3829 == 0
```

---

# The zipWith function

- In the standard library, `zipWith` takes a f. and two lists
- It joins the two lists by applying the f. between corresponding elements
    - 1st param is a f. that takes two things and produces a third thing
    - 2nd and 3rd parameter are lists (of types `a` and `b`)
    - Result is also a list (of type `c`)

``` hs
zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys
```

---

# Using zipWith

- Pretty similar to the normal zip, with a joining function

``` hs
ghci> zipWith (+) [4,2,5,6] [2,6,2,3]
[6,8,7,9]
ghci> zipWith max [6,3,2,1] [7,3,1,5]
[7,3,2,5]
ghci> zipWith (++) ["foo ", "bar ", "baz "]
                      ["fighters", "hoppers", "aldrin"]
["foo fighters","bar hoppers","baz aldrin"]
ghci> zipWith (zipWith (*)) [[1,2,3],[3,5,6],[2,3,4]]
                               [[3,2,2],[3,4,5],[5,4,3]]
[[3,4,6],[9,20,30],[10,12,12]]
```

---

# The flip function

- In the standard library, `flip` takes a f. and returns a f.
    - The returned f. is like the original one, only the first two arguments are flipped
    - It takes a f. that takes an `a` and a `b`
    - It returns a f. that takes a `b` and an `a`

``` hs
flip' :: (a -> b -> c) -> (b -> a -> c)
flip' f y x = f x y
```

``` hs
ghci> flip zip [1,2,3,4,5] "hello"
[('h',1),('e',2),('l',3),('l',4),('o',5)]
ghci> zipWith (flip div) [2,2..] [10,8,6,4,2]
[5,4,3,2,1]
```

---

# The takeWhile function

- It takes a predicate and a list
- It goes from the beginning of the list and returns its elements while the predicate holds true
- Once an element is found for which the predicate doesn't hold, it stops

``` hs
ghci> takeWhile (/=' ') "elephants know how to party"
"elephants"
```

---

# Collatz sequences

- Take a natural number `n`
- If `n` is even, divide it by `2`
- If it's odd, multiply it by `3` and then add `1`
- Take the resulting number and apply the same thing to it...

``` hs
collatz :: (Integral a) => a -> [a]
collatz 1 = [1]
collatz n
    | even n =  n:collatz (n `div` 2)
    | odd n  =  n:collatz (n*3 + 1)
```

---

![large](images/fun/collatz-xkcd.png)
# Collatz conjecture

- For all starting numbers
  - The chains finish at the number `1`
  - Edge: cycle `1-4-2-1`

>

https://www.jasondavies.com/collatz-graph/

---

# Using map to create functions

- So far, we've only mapped f.s that take one parameter over lists, like `map (*2) [0..]`
- We can also do `map (*) [0..]` without a problem
    - We get back a list of f.s that only take one param
    - `[(0*),(1*),(2*),(3*),(4*),(5*)`...
    - Applying only one param to a f. that takes two params...
    - Returns a f. that takes one param

``` hs
ghci> let listOfFuns = map (*) [0..]
ghci> (listOfFuns !! 4) 5
20
```

---

# Lambda

- An anonymous f., needed only once, e.g., to be passed to a higher-order f.
- A *lambda* starts with a `\` (~ greek letter lambda), followed by params, a `->`, finally the body
- Usually, surrounded by parentheses

``` hs
longWords :: String -> [String]
longWords ws = filter (\xs -> length xs > 3) (words ws)
```

``` hs
ghci> longWords "elephants know how to party"
["elephants","know","party"]
```

>

`words` splits a string on whitespaces

---

# Lambdas and currying

- The expression `(\xs -> length xs > 3)` returns a f.
- Functional programmers often replace lambdas with currying and partial application
    - `map (+3) [1,6,3,2]`
    - `map (\x -> x + 3) [1,6,3,2]`
- Like normal functions, lambdas can take any number of parameters:

``` hs
ghci> :set +m
ghci> let xs = zipWith (\a b -> (a * 30 + 3) / b)
|                  [5,4,3,2,1] [1,2,3,4,5]
|
ghci> xs
[153.0,61.5,31.0,15.75,6.6]
```

---

# Closure

- Lambdas can use *free variables*
    - Names that are not bounded as params
    - Mechanism often called *closure*

``` hs
map (\x -> x + 3) [1,6,3,2]

map (let n = 3 in \x -> x + n) [1,6,3,2]
```

``` hs
f a b c = a * b + c

f' a b = \c -> a * b + c
```

---

# Exercise

---

# Python's corner

---

# Partials

- Python has a `partial` f. in `functools` module
    - Returns a `partial` object, which is callable
    - “Freezes” some params, f. with simpler signature

``` py
>>> from functools import partial
>>> pow(2, 5)
32
>>> pow2 = partial(pow, 2)
>>> pow2(5)
32
>>> basetwo = partial(int, base=2)
>>> basetwo('10010')
18
```

---

# Callable objects

- Callable: any object with `__call__` method
- `foo()` is interpreted as `foo.__call__()`

``` py
class Multiplier:
    def __init__(self, to_mul):
        self._to_mul = to_mul

    def __call__(self, val):
        return self._to_mul * val
```

``` py
>>> triple = Multiplier(3)
>>> triple(5)
15
```

>

Also in C++, `operator()` can be overloaded, to create a so-called *function object* or “*functor*”

---

# Map function

- *Higher order f.*: takes as params a f. and a sequence
- Applies the f. to each value in the sequence
- Returns the (*lazy*) sequence of results

``` py
>>> from math import sqrt
>>> values = [0, 1, 2, 3, 4]
>>> list(map(sqrt, values))
[0.0, 1.0, 1.4142, 1.7320, 2.0]
```

``` py
>>> from math import sqrt
>>> list(map(sqrt, range(5)))
[0.0, 1.0, 1.4142, 1.7320, 2.0]
```

---


# Python operators as functions

- The `operator` module defines f.s representing operators

``` py
>>> from operator import add, mul
>>> add(2, 3)
5
>>> list(map(add, [3, 5, 2, 1], [2, 5, 3]))
[5, 10, 5]
>>> list(map(mul, [3, 5, 2, 1], [2, 5, 3]))
[6, 25, 6]
>>> list(map(pow, [3, 5, 2, 1], [2, 5, 3]))
[9, 3125, 8]
```

>

Used on multiple lists, `map` works ~ like `zipWith`

---

# Multiprocessing

- Module for working with multiple processes
- A `Pool` object represents a pool of processes
- Provides a `map` method for parallel application of a f.
    - Accepts a f., or...
    - Any callable object (with `__call__` method),
    - Including a `partial` object (“freezing” some params of a f.)
    - Note : *lambdas* are not *pickable*…
- `multithreading.Pool` is similar
    - But incurs in [GIL](https://en.wikipedia.org/wiki/Global_interpreter_lock)

---

![](images/fun/legomap.png)
# Mapping on processes

- Vectorize a task over a *pool* of processes

``` py
>>> from math import sqrt
>>> from multiprocessing import Pool
>>> values = [0, 1, 2, 3, 4]
>>> pool = Pool(3)
>>> pool.map(sqrt, values)
[0.0, 1.0, 1.4142, 1.7320, 2.0]
```

``` py
>>> pool.starmap(pow, zip(range(3), (2, 3, 4)))
[0, 1, 16]
```

>

Example: [PaNDEMON](https://github.com/tomamic/paradigmi/blob/master/python/pandemon.py)

---

# Lambda functions

- Anonymous function, body is a *single expression*
    - For a longer body, use a (nested) `def`
- Closure for referenced variables (*by ref*)
    - To get stg *by val*, add it as a default param

``` py
>>> sorted([3, -4, 5, -2])
[-4, -2, 3, 5]
>>> sorted([3, -4, 5, -2], key=abs)
[-2, 3, -4, 5]
>>> sorted([3, -4, 5, -2], key=lambda x: 1/x)
[-2, -4, 5, 3]
```

>

Example: [behaviours of GUI widgets](https://github.com/tomamic/paradigmi/blob/master/python/x6_boardgame_tk.py)

---

# Partial with built-ins

- In Python, most f.s accept indifferently *positional* params, or *keyword* params
- However, *some built-in f.s* and operators accept only positional params
    - Cannot partially apply (or even pass) params by name
- Ex. signature: `divmod(x, y, /)`
    - Params before `/` have to be passed in a fixed order

``` py
>>> def mydivmod(x, y): return x // y, x % y
>>> tenth = partial(mydivmod, y=10)
>>> tenth(185)
(18, 5)
>>> tenth = partial(divmod, y=10)
>>> tenth(185)
Traceback...
TypeError: pow() takes no keyword arguments
```

---

# Variadic functions

``` py
def func(required_arg, *args, **kwargs):
    print(required_arg)
    # args is a tuple of positional arguments,
    if args: # if not empty.
        print(args)
    # kwargs is a dictionary of keyword arguments,
    if kwargs: # if not empty.
        print(kwargs)
```

``` py
>>> func()
TypeError: func() takes at least 1 argument (0 given)
>>> func("required argument", 1, 2, '3', key1=4, key2="foo")
required argument
(1, 2, '3')
{'key2': 'foo', 'key1': 4}
```

---

# Parameters unpacking

- Call with `*` to unpack params out of a sequence
- Dictionaries can deliver keyword params with `**`

``` py
>>> int("14", 16)    # int(x, base=10)
20
```

``` py
>>> values = ["14", 16]
>>> int(*values)
20
```

``` py
>>> d = {"x":"14", "base":16}
>>> int(**d)
20
```

---

# Filtering in Python

- `filter` is a built-in feature
    - Takes a predicate and an iterable
- `takewhile` is defined in the `itertools` module
    - Takes a predicate and an iterable
- In many cases, a *comprehension* offers an alternative option

``` py
>>> "".join(takewhile(lambda x: x != " ",
                      "elephants know how to party"))
"elephants"
```

---

# Generator expression

- Sort of *lazy* list comprehension
- Same syntax, simply without squared brackes
- It requires parentheses, if not already present

``` py
>>> "".join(x for x in "IdontLIKEFROGS" if x.isupper())
"ILIKEFROGS"
```

---

# Folding

---

# Exercise

---

![](images/fun/foldl.png)
# Alternative sum function

``` hs
ghci> sum [3, 5, 2, 1]
11
```

- Define `sum'` as a normal recursive function
- Redefine `sum'` using tail recursion

---

# Folding

- Tail recursion on lists, common code structure
    - Usually empty list as edge case
    - `x:xs` pattern, action on head and recursion on rest
    - Accumulator param for partial result
- Behaviour encapsulated in *folding* f.s
    - Similar to the `map` f., only they reduce a list to some single value
- A fold takes a binary f., a starting value (accumulator) and a list
    - Binary f. is called with accumulator and head (or tail) and produces a new accumulator
    - Then, f. is called with new accumulator and new head (or tail)...
    - At the end, accumulator holds the result

---

![](images/fun/foldl.png)
# Left fold

- The `foldl` f. folds the list up from the left side
- Ex.: implement sum using a fold

``` hs
sum' :: (Num a) => [a] -> a
sum' xs = foldl (\acc x -> acc + x) 0 xs
```

``` hs
ghci> sum' [3,5,2,1]
11
```

``` hs
foldl' f z [] = z
foldl' f z (x:xs) = foldl' f (f z x) xs
```

---

# Currying to spare params

- The lambda `(\acc x -> acc + x)` is the same as `(+)`
- The `xs` param can be omitted
    - Calling `foldl (+) 0` returns a f. that takes a list
- In general, because of currying ...
    - A f. like `foo a = bar b a` ...
    - Can rewritten as `foo = bar b`

``` hs
sum' :: (Num a) => [a] -> a
sum' = foldl (+) 0
```

---

# Fold for membership

``` hs
elem' :: (Eq a) => a -> [a] -> Bool
elem' y ys = foldl (\acc x -> x == y || acc) False ys
-- if x == y then True else acc
```

- Accumulator is a `Bool`
    - Accumulator and result have always the same type, in a fold
    - It makes sense to start with `False`, assume the val isn't there
    - On an empty list, result stays `False`
- Then we check: current element is the val we're looking for?
    - Yes: set accumulator to `True`
    - No: leave accumulator unchanged (either `True` or `False`)

---

# Right fold

- With `foldr`, accumulator eats up values from the right
    - The binary f. has the accumulator as 2nd param
- Ex.: implementing `map` with a right fold
    - Accumulator is a list, accumulating the mapped elements one by one
    - Starting element is an empty list
    - E.g.: try mapping `(+3)` to `[1,2,3]`

``` hs
map' :: (a -> b) -> [a] -> [b]
map' f xs = foldr (\x acc -> f x : acc) [] xs
```

``` hs
foldr' f z [] = z
foldr' f z (x:xs) = f x (foldr' f z xs)
```

---

# Right vs. left fold

- Folding over `[3,4,5,6]`, with `f` and `z` (as f. and accumulator)
    - Right folding: `f 3 (f 4 (f 5 (f 6 z)))`
    - Left folding: `f (f (f (f z 3) 4) 5) 6`
- Ex.: left fold for `map`
    - The `++` f. is much more expensive than `:`
    - Prefer right folds when building up a new list

``` hs
map' f xs = foldl (\acc x -> acc ++ [f x]) [] xs
```

---

# Power of folds

- Along with maps and filters, folds are one of the most useful tools in functional programming
    - Folds can be used to implement any f. which...
    - traverse a list once, element by element...
    - and then return something based on that
- The `foldl1` and `foldr1` f.s are similar
    - The first (or last) element is the starting value
    - Runtime errors if called with empty lists

---

# Examples of folds

``` hs
maximum' = foldr1 (\x acc -> if x > acc then x else acc)

reverse' = foldl (\acc x -> x : acc) []
reverse'' = foldl (flip (:)) []

product' = foldr1 (*)

filter' p = foldr (\x acc -> if p x then x : acc else acc) []
```

---

![](images/fun/foldl.png)
# Python reduce

- `reduce` f. in `functools` module
    - Takes a f., a sequence and an (optional) initial value
    - The f. is applied repeatedly, on previous result and next value in sequence
    - Without initial value, f. is applied to first 2 elements
    - Similar to Haskell *folding*

``` py
>>> from functools import reduce
>>> reduce(lambda a, b: a + b, [3, 5, 2, 1], 0)
11
```

---

# Python reduce with operators

``` py
>>> from operator import add, mul
>>> add(2, 3)
5
>>> reduce(add, [3, 5, 2, 1])
11
>>> reduce(mul, [3, 5, 2, 1])
30
>>> reduce(pow, [2, 3, 4])
4096
```

>

Reducing with a non-associative f. is discouraged in Python

`(4 ** 3) ** 2 != 4 ** (3 ** 2)`

---

# Exercise

---

# 🥷 Scans

- `scanl` and `scanr` are like `foldl` and `foldr`
    - Only they report all the intermediate accumulator states in a list
    - `scanl`: final result is *last* element
    - `scanr`: final result is *first* element
    - There are also `scanl1` and `scanr1`

``` hs
ghci> scanl (+) 0 [3,5,2,1]
[0,3,8,10,11]
ghci> scanr (+) 0 [3,5,2,1]
[11,8,3,1,0]
ghci> scanl1 (\acc x -> if x > acc then x else acc) [3,4,5,3,7,9,2,1]
[3,4,5,5,7,9,9,9]
ghci> scanl (flip (:)) [] [3,2,1]
[[],[3],[2,3],[1,2,3]]
```

---

# 🥷 Example of scans

- How many elements does it take for the sum of the roots of all natural numbers to exceed 1000?
    - Roots of all natural numbers: `map sqrt [1..]`
    - Then, `scan` shows how the sum progresses
    - Easy to see how many sums are under 1000 (then +1)
    - `takeWhile`, since `filter` doesn't work on infinite lists

``` hs
sqrtSums :: Int
sqrtSums = length (takeWhile (<1000) (scanl1 (+) (map sqrt [1..]))) + 1

ghci> sqrtSums
131
ghci> sum (map sqrt [1..131])  -- try also 130
1005.0942035344083
```

---

# Function composition

---

# Dollar function

- The `$` f. is also called **function application**

``` hs
($) :: (a -> b) -> a -> b
f $ x = f x
```

- Normal f. application (putting a space between two things) has a really high precedence
- The `$` f. has the *lowest precedence* (and right associativity)
- It's mostly a convenience f., to spare so many parentheses
- Same as an opening parenthesis, closed at the far right side

---

# Using dollar

``` hs
sqrt (3 + 4 + 9)
sqrt $ 3 + 4 + 9

sum (map sqrt [1..130])
sum $ map sqrt [1..130]

sum (filter (> 10) (map (*2) [2..10]))
sum $ filter (> 10) $ map (*2) [2..10]
```

- Apart from getting rid of parentheses...
    - `$` means that f. application is *yet another* f.
    - Map f. application over a list of f.s

``` hs
ghci> map ($ 3) [(4+), (10*), (^2), sqrt]
[7.0,30.0,9.0,1.7320508075688772]
```

---

# Function composition

- In maths, two f.s can be composed to produce a *new* f.
    - `(f·g)(x) = f(g(x))`
    - Call `g` with param `x`, then call `f` with that result
- In Haskell, `.` does pretty much the same thing
    - `f.g` takes a param of the same type that `g` takes...
    - `f.g` returns a value of the same type that `f` returns
    - `f` takes a param of same type as `g`'s return value

``` hs
(.) :: (b -> c) -> (a -> b) -> a -> c
f . g = \x -> f (g x)
```

- Ex.: `negate . (* 3)` returns a function that takes a number, multiplies it by 3 and then negates it.

---

# Use of composition

- Composition: glue simple f.s together, form complex f.s
    - More readable: think about f.s instead of data
    - But long chains of f. composition is discouraged
- Making f.s on the fly, to pass to other f.s
    - Often, clearer and more concise than lambdas
    - Ex.: turn a list of numbers into negative numbers

``` hs
ghci> map (negate . abs) [5,-3,-6,7,-3,2]
[-5,-3,-6,-7,-3,-2]
ghci> map (\x -> negate (abs x)) [5,-3,-6,7,-3,2]
[-5,-3,-6,-7,-3,-2]
```

---

# Chained compositions

- F. composition is right-associative, so we can compose many f.s at a time
- `f (g (h x))` is equivalent to `(f . g . h) x`

``` hs
ghci> map (negate . sum . tail) [[1..5],[3..6],[1..7]]
[-14,-15,-27]
ghci> map (\xs -> negate (sum (tail xs))) [[1..5],[3..6],[1..7]]
[-14,-15,-27]
```

---

# Composition with several params

- Partially apply them so that each f. takes just one param
    - `sum (replicate 5 (max 6.7 8.9))`
    - `(sum . replicate 5 . max 6.7) 8.9`
    - `sum . replicate 5 . max 6.7 $ 8.9`
- To rewrite an expression with a lot of parentheses by using f. composition...
    - First put last param of the innermost f. after a `$`
    - Then compose all other f.s, without their last param
- Example:
    - `replicate 100 (product (map (*3) (zipWith max [1,2,3,4,5] [4,5,6,7,8])))`
    - `replicate 100 . product . map (*3) . zipWith max [1,2,3,4,5] $ [4,5,6,7,8]`

---

# Tacit programming

- Another common use of f. composition
- Defining f.s in the *point free style* (or *pointless style*)
- Problem if param in the f. body has parentheses after it

``` hs
sum' :: (Num a) => [a] -> a
-- sum' xs = foldl (+) 0 xs
sum' = foldl (+) 0
```

``` hs
-- fn x = ceiling (negate (tan (cos (max 50 x))))
fn = ceiling . negate . tan . cos . max 50
```

---

# Example of composition

- Ex.: sum of all odd squares that are smaller than 10,000

``` hs
oddSquareSum :: Integer
oddSquareSum = sum (takeWhile (<10000) (filter odd (map (^2) [1..])))

oddSquareSum' = sum . takeWhile (<10000) . filter odd . map (^2) $ [1..]

oddSquareSum'' =
    let oddSquares = filter odd $ map (^2) [1..]
        belowLimit = takeWhile (<10000) oddSquares
    in  sum belowLimit
```
