![](https://fondinfo.github.io/images/fun/haskell-logo.svg)
# Haskell
## Functional programming

---

![small](https://fondinfo.github.io/images/fun/haskell-logo.svg) ![small](https://fondinfo.github.io/images/dev/python-logo.svg)
# About the course

- Various programming paradigms
    - Focus on Haskell
    - Comparison with Python -- inspired by Haskell
- Previous courses
    - Imperative, procedural, object-oriented paradigms
- This course
    - Functional paradigm
    - Generic programming
    - Metaprogramming
    - Lesser known aspects…

---

![](https://fondinfo.github.io/images/fun/rbfuller.jpg)
# Why learning a new language

- Because it makes easier to perform some tasks
- To land a (better) job
- To work with some other software / in some environment
- To learn a new way of thinking

> A language that does not affect the way you think about programming, is not worth knowing. *(Alan Perlis, 1966 Turing Award)*

> If you want to teach people a new way of thinking, don't bother trying to teach them. Instead, give them a tool, the use of which will lead to new ways of thinking. *(Buckminster Fuller, Architect 1970 gold medal AIA)*

---

![](https://fondinfo.github.io/images/fun/function.png)
# Functional paradigm

- Program execution: evaluation of *mathematical functions*
- No *side effects*: easier to verify correctness
- *Declarative* style: what the result is, vs. how to calculate it
- *Immutable* variables and values: fewer inter-dependences
- Optimizable: fit for *parallel programming*
- *Expression*-oriented, composable: everything is an expression, producing a value
- Functions are values, too: used as parameters and results of other, *higher-order*, functions

---

![](https://fondinfo.github.io/images/fun/dognap.png)
# Side effects

- Modifications of objects passed as parameters or global variables, I/O operations…
- Nullify **referential trasparency**
    - Impossible to simplify, sustituting a call to f. with its return value (e.g., if I/O ops are present)
- Make f. **non-idempotent**
    - Called repeatedly, with the same params, returns different results
- → Mathematical proofs are difficult
    - `z = f(sqrt(2), sqrt(2))`
    - `s = sqrt(2)` <br> `z = f(s, s)`

---

# Non-idempotent functions

- Example of simplification
    - `p = rq(x) + rq(y) * (rq(x) – rq(x))`
    - `p = rq(x) + rq(y) * (0)`
    - `p = rq(x) + 0`
    - `p = rq(x)`
- But if `rq` has side effects, you can't!

``` py
base_value = 0  # global variable

def rq(x: int) -> int:
    global base_value
    base_value += 1
    return x + base_value
```

---

# 🛠️ Integral approximation

![](https://fondinfo.github.io/images/fun/integral.svg)

- Approximate the integral of a function `f`
- Divide the `(a, b)` range on the x-axis in `n` segments
- Calculate the height of `f` for each segment
- Sum the `n` areas: `dx * f(a + dx * i)`

>

[integral.py](https://github.com/tomamic/paradigmi/blob/master/integral.py)
– [integral.cpp](https://github.com/tomamic/paradigmi/blob/master/integral.cpp)

---

# Integral in Python

``` py
def some_func(x: float) -> float:
    return x * x + x

def some_integral(a: float, b: float, n: int) -> float:
    """Estimate the area beneath the curve some_func, between the
    abscissas a and b; the region is approximated as n rectangles.
    """
    total = 0.0
    dx = (b - a) / n
    for i in range(n):
        total += dx * some_func(a + dx * i)
    return total

area = some_integral(1, 10, 1_000_000)
print(area)
```

---

# Function as parameter

``` py
def integral(f: typing.Callable[[float], float],
             a: float, b: float, n: int) -> float:
    """Estimate the area beneath the curve f, between a and b.
    """

    total = 0.0
    dx = (b - a) / n
    for i in range(n):
        total += dx * f(a + dx * i)
    return total

area_func = integral(some_func, 1, 10, 1_000_000)
area_sin = integral(math.sin, 0, math.pi, 1_000_000)
print(area_func, area_sin)
```

>

<https://docs.python.org/3/library/typing.html#callable>

---

# Function as result

``` py
def create_pow(exponent: float) -> Callable[[float], float]:
    """Create and return a function, which calculates a power.
    """
    def result(base: float) -> float:
        return base ** exponent  # closure over var `exponent`
    return result

root = create_pow(0.5)
cube = create_pow(3)

print(root(3))
print(root(4))

print(cube(3))
print(cube(4))
```

---

# Haskell

---

![](https://fondinfo.github.io/images/hist/haskell-curry.jpg) [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry), 1900-1982 <br> Mathematical logics
# Haskell

- **Pure functional language**
- Joint effort of the main research groups
    - [1987 Conf. FPCA, Portland, Oregon](https://simon.peytonjones.org/history-of-haskell/)
- Currently, most *popular* functional language
- Compiled to native code, no virtual machine
    - Concise, declarative, efficient
- Static typing, type inference
    - Type variables, typeclasses, type constraints
- Lazy evaluation, currying, pattern matching…
- **Vast influence on other languages**

---

![large](https://fondinfo.github.io/images/dev/lang-graph.png) <https://griffsgraphs.wordpress.com/?s=lang>
# Haskell influence graph

![](https://fondinfo.github.io/images/dev/haskell-graph.svg)

>

<https://programminglanguages.info/language/haskell/>

---

# Popular functional language

![](https://fondinfo.github.io/images/dev/lang-rank.png)

>

[Redmonk](https://redmonk.com/sogrady/2021/08/05/language-rankings-6-21/) -[Spectrum](https://spectrum.ieee.org/top-programming-languages/) - [PYPL](https://pypl.github.io/PYPL.html) - [Tiobe](https://www.tiobe.com/tiobe-index/) - [SO survey](https://insights.stackoverflow.com/survey/2021/#technology)

---

# Weekend programming

![](https://fondinfo.github.io/images/dev/so-weekend-2019.png)

>

[2017](https://stackoverflow.blog/2017/02/07/what-programming-languages-weekends/)
­– [2019](https://stackoverflow.blog/2019/10/28/research-update-coding-on-the-weekends/)

---

![](https://fondinfo.github.io/images/fun/haskell-xkcd.png) <https://xkcd.com/1312/>
# Haskell in industry

- <https://wiki.haskell.org/Haskell_in_industry>
    - FB, Google, Intel, MS, NVIDIA, Qualcomm…
- Declarative, fit for *optimization* algorithms
    - Finance, assets management
    - Electronics and hardware design
    - Activities and process scheduling
- Lists, for *data analysis* and *processing*
    - SQL and XML tools, Facebook anti-spam
    - Image, video, audio, 3D processing
    - Code analysis and build tools
- No side effects, *validation* and *parallelism*
    - Aeronautics, space, defence (weapons)
    - Reliable manufacturing
    - SW infrastructures, web back-ends

---

![](https://fondinfo.github.io/images/fun/learn-haskell.png) The textbook, free, online
# Interactive shell

- Install or try the “*Glasgow Haskell Compiler*”
    - `ghci` : *REPL* (Read-Eval-Print Loop)
    - <https://repl.it/languages/haskell>
- Expressions and operators
    - `+, -, *, /, ^, **`
    - `&&, ||, not`
    - `==, /=, <, <=, >, >=`

``` sh
$ sudo apt install ghc libghc-random-dev cabal-install
$ ghci
```

``` hs
ghci> 2 ^ 3
8
```

>

<http://learnyouahaskell.com/>
–
<http://www.haskell.org/>
–
<http://book.realworldhaskell.org/read/>

---

# Prefix and infix calls

- Function call: *prefix* notation
    - No parentheses: f. name and params separated by blanks
- Call with *infix* notation (binary)
    - Surround f. name with ticks (`)
- Operator: f. named with symbols, *infix* notation
    - Call with *prefix* notation, using parentheses

``` hs
ghci> div 5 3
1
ghci> 5 `div` 3
1
ghci> 5 `mod` 3
2
ghci> (/) 5 3
2.5
```

---

![](https://fondinfo.github.io/images/fun/fx.png)
# Defining functions

``` hs
doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y
```

- Save the previous code in a file: `baby.hs`
- In GHCi enter: `:l baby`

``` hs
ghci> :l baby
ghci> doubleMe 5
10
ghci> doubleUs 4 3
14
```

---

# Variables

- A function without params is a constant
    - I.e., an *immutable* variable

``` hs
greetings = "Hi, there!"
k = 11
k = k + 1    -- error!
```

- Optionally, use **`let`** to define functions directly in GHCi
    - Doing `let a = 1` inside GHCi is the equivalent of...
    - writing `a = 1` in a script and then loading it


``` hs
ghci> let doubleMe x = x + x
ghci> doubleMe 5
10
```

---

# Lists

---

![](https://fondinfo.github.io/images/dev/shopping-list.jpg)
# Lists

- Much like shopping lists in the real world, lists in Haskell are very useful
- Lists are denoted by square brackets and the values in the lists are separated by commas

``` hs
ghci> let lostNumbers = [12,99,37]
ghci> lostNumbers
[12,99,37]
```

![](https://fondinfo.github.io/images/fun/linked-list.svg)

---

# Homogeneous lists

- In Haskell, lists are a *homogenous* data structure
    - They store several elements of the same type
    - List of integers or a list of characters
    - A list cannot have a few integers and then a few characters
    - `[1,2,'a',3,'b','c',4]  -- error!`
- *Strings* are just lists of characters
    - `"hello"` is just syntactic sugar for `['h','e','l','l','o']`
    - List functions work also on strings, really handy

>

The character type is denoted as a character between single quotes

---

# List concatenation

- A common task is putting two lists together
- This is done by using the `++` operator

``` hs
ghci> [1,2,3,4] ++ [9,10,11,12]
[1,2,3,4,9,10,11,12]
ghci> [1,2,3] ++ [4]
[1,2,3,4]
ghci> "hello" ++ " " ++ "world"
"hello world"
ghci> ['w','o'] ++ ['o','t']
"woot"
```

>

Even if you're adding an element to the end of a list with `++`, you have to surround it with square brackets so it becomes a list

---

# Prepending an element

- *Cons* operator (`:`) for putting something at the beginning of a list
    - `:` takes a value and a list, whereas `++` takes two lists
- Watch out when repeatedly using the `++` operator on long strings
    - Internally, Haskell has to walk through (and duplicate) the whole list on the left side of `++`
    - Instead, prepending is “instantaneous”

``` hs
ghci> 'A':" SMALL CAT"
"A SMALL CAT"
ghci> 5:[1,2,3,4,5]
[5,1,2,3,4,5]
```

---

# Multiple concatenations

![](https://fondinfo.github.io/images/fun/list-concat.svg)

>

Remember: values are immutable, cannot change last pointer

---

# Multiple prependings

![](https://fondinfo.github.io/images/fun/list-prepend.svg)

>

The previous list stays unchanged, can be reused

---

# More on lists

- `[1,2,3]` is actually just syntactic sugar for `1:2:3:[]`
    - `[]` is an empty list
    - If we prepend `3` to it, it becomes `[3]`
    - If we prepend `2` to that, it becomes `[2,3]`, and so on
- Note that `[]`, `[[]]` and `[[],[],[]]` are all different things
    - The first one is an empty list
    - The seconds one is a list that contains one empty list
    - The third one is a list that contains three empty lists

---

# Get an element

- If you want to get an element out of a list by index, use `!!`
- The indices start at `0`

``` hs
ghci> "Steve Buscemi" !! 6
'B'
ghci> [9.4,33.2,96.2,11.2,23.25] !! 1
33.2
```

- But if you try to get the sixth element from a list that only has four elements, you'll get an error so be careful!

---

# Lists of lists

``` hs
ghci> let b = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
ghci> b
[[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
ghci> b ++ [[1,1,1,1]]
[[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3],[1,1,1,1]]
ghci> [6,6,6]:b
[[6,6,6],[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
ghci> b !! 2
[1,2,2,3,4]
```

- The lists within a list can't be of different types
    - Though, they can be of different lengths
- Just like you can't have a list that has some chars and some nums…
    - You can't have a list containing lists of chars and lists of nums

---

# List comparison

- Lists can be compared if the stuff they contain can be compared
- When using `<, <=, >, >=` to compare lists, they are compared in *lexicographical* order
    - First the heads are compared
    - If they are equal then the second elements are compared, etc.

``` hs
ghci> [3,2,1] > [2,1,0]
True
ghci> [3,2,1] > [3,10,100]
False
ghci> [3,4,2] > [3,4]
True
ghci> [3,4,2] == [3,4,2]
True
```

---

![](https://fondinfo.github.io/images/fun/list-monster.png)
# List monster

- If we think of a list as a monster, here's what's what
- `head` takes a list and returns its head
    - The head of a list is basically its first element
- `tail` takes a list and returns its tail
    - In other words, it chops off a list's head
- `last` takes a list and returns its last element
- `init` takes a list and returns everything except its last element

``` hs
ghci> head [5,4,3,2,1]
5
ghci> tail [5,4,3,2,1]
[4,3,2,1]
ghci> last [5,4,3,2,1]
1
ghci> init [5,4,3,2,1]
[5,4,3,2]
```

---

# List errors

``` hs
ghci> head []
*** Exception: Prelude.head: empty list
```

- When using `head, tail, last, init`, be careful not to use them on empty lists
- This error cannot be caught at compile time

---

# Size and reverse

- `length` takes a list and returns its length
- `null` checks if a list is empty (`True` / `False`)
- `reverse` reverses a list

``` hs
ghci> length [5,4,3,2,1]
5
ghci> null [1,2,3]
False
ghci> null []
True
ghci> reverse [5,4,3,2,1]
[1,2,3,4,5]
```

---

# Taking from a list

- `take` takes a number and a list
- It extracts that many elements from the beginning of the list
- Take more elements than those in the list → whole list
- Take `0` elements → empty list

``` hs
ghci> take 3 [5,4,3,2,1]
[5,4,3]
ghci> take 1 [3,9,3]
[3]
ghci> take 5 [1,2]
[1,2]
ghci> take 0 [6,6,6]
[]
```

---

# Dropping from a list

- `drop` takes a number and a list
- It drops the number of elements from the beginning of the list

``` hs
ghci> drop 3 [8,4,2,1,5,6]
[1,5,6]
ghci> drop 0 [1,2,3,4]
[1,2,3,4]
ghci> drop 100 [1,2,3,4]
[]
```

---

# Membership

- `elem` takes a thing and a list of things
    - Is that thing an element of the list?
    - Usually called as *infix* f.: easier to read

``` hs
ghci> 4 `elem` [3,4,5,6]
True
ghci> 10 `elem` [3,4,5,6]
False
```

---

# Aggregate functions

- `sum` takes a list of numbers and returns their sum
- `product` takes a list of numbers and returns their product
- `maximum` takes a list of stuff (that can be put in some kind of order) and returns the biggest element
- `minimum` returns the smallest

``` hs
ghci> sum [5,2,1,6,3,2,5,7]
31
ghci> product [6,2,1,2]
24
ghci> minimum [8,4,2,1,5,6]
1
ghci> maximum [1,9,2,3,4]
9
```

---

# Ranges

- A way of making lists that are arithmetic sequences
    - Elements that can be enumerated
    - Integers, characters…

``` hs
ghci> [1..10]
[1,2,3,4,5,6,7,8,9,10]
ghci> ['a'..'z']
"abcdefghijklmnopqrstuvwxyz"
ghci> ['K'..'Z']
"KLMNOPQRSTUVWXYZ"
```

---

# Ranges with step

- You can also specify a step
    - Separate the first two elements with a comma
    - Then specify what the upper limit is
    - Works only for arithmetic sequences

``` hs
ghci> [2,4..20]  -- Even numbers between 1 and 20
[2,4,6,8,10,12,14,16,18,20]
ghci> [3,6..20]  -- Every third number between 1 and 20
[3,6,9,12,15,18]
ghci> [5,4..1]   -- Negative step: you can't just do `[5..1]`
[5,4,3,2,1]
```

---

# Laziness

- By not specifying an upper limit, you create an **unbounded range**
    - `[13,26..]`
    - If you just try to display the result, it will go on forever
    - So you have to slice it off somewhere
- Haskell is **lazy**, it won't try to evaluate the *infinite list* immediately...
    - Otherwise it would never finish
    - It'll wait to see what you *really* want to get out of that infinite list
- E.g.: get the first 24 multiples of 13
    - `[13,26..24*13]`
    - `take 24 [13,26..]`

---

# List repetitions

- `cycle` takes a list and cycles it into an infinite list

``` hs
ghci> take 10 (cycle [1,2,3])
[1,2,3,1,2,3,1,2,3,1]
ghci> take 11 (cycle "LOL ")
"LOL LOL LOL"
```

---

# More list repetitions

- `repeat` takes an element and produces an infinite list of just that element
    - It's like cycling a list with only one element

``` hs
ghci> take 10 (repeat 5)
[5,5,5,5,5,5,5,5,5,5]
```

- Although it's simpler to just use the `replicate` function if you want some number of the same element in a list

``` hs
ghci> replicate 3 10
[10,10,10]
ghci> replicate 3 "LOL "
["LOL ","LOL ","LOL "]
ghci> concat (replicate 3 "LOL ")
"LOL LOL LOL "
```

---

# Exercise

---

# Python's corner

---

![](https://fondinfo.github.io/images/fun/month-list.svg)
# List

- **Mutable** sequence of elements
- *Usually* of the same *type*
- Current *length* of a list `x`: `len(x)`
- Elements *enumerated* from `0` to `len(x)-1`

``` py
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
```

``` py
num_days = [31, 28, 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31]
```

``` py
results_by_month = [0] * 12  # List repetition
```

---

![](https://fondinfo.github.io/images/fun/wile-coyote.png)
# Elements and slices

- **Attention: use valid indices!**
    - But *negative* indices counts from the end

``` py
n = len(months)            # 12
months[3]                  # 'Apr'
months[-2]                 # 'Nov', same as n - 2

spring = months[2:5]       # ['Mar', 'Apr', 'May']
quart1 = months[:3]        # ['Jan', 'Feb', 'Mar']
quart4 = months[-3:]       # ['Oct', 'Nov', 'Dec']
whole_year = months[:]     # Copy of the whole list

feb_apr = months[1:4:2]    # ['Feb', 'Apr']
q4_rev = months[11:8:-1]   # ['Dec', 'Nov', 'Oct']
```

>

Third value for step, possibly negative

---

![](https://fondinfo.github.io/images/fun/shopping-list.png)
# Insertion and removal

``` py
groceries = ["spam", "egg", "beans"]

groceries[0] = "sausage"      # replace an element

groceries.append("bacon")     # add an element to the end
groceries.pop()               # remove (and return) last element

groceries.insert(1, "bacon")  # other elements shift
removed = groceries.pop(1)    # remove (and return) element at index

if "egg" in groceries:       # True, groceries contains "egg"
    groceries.remove("egg")  # remove an element by value
```

---

# Equality and identity

``` py
a = ["spam", "egg", "beans"]
b = a[:]         # new list!
b == a           # True, they contain the same values
b is a           # False, they are two objects in memory
                 # (try and modify one of them...)
c = a
c is a           # True, same object in memory
                 # (try and modify one of them...)

# Lexicographical comparison of lists (or strings, tuples...)
# Compare the first two *different* elements
[2, 0, 0] > [1, 2, 0]  # True: 2 > 1
[2, 1, 0] > [2, 0, 1]  # True: 2 == 2, 1 > 0
```

---

![](https://fondinfo.github.io/images/misc/hiccup.png)
# D&D Character

- Let's create a **class** for some fantasy character
- It has a distinctive name
- It starts the game with random “hit points”
- The constructor requires just the name, as param

``` py
class Fighter:
    def __init__(self, name: str):
        self._name = name
        self._hp = randint(15, 30)  # hit points
        # private fields named with leading `_`

    def describe(self) -> str:
        return f"I'm {self._name}. I have {self._hp} hit points."

c = Fighter("Hero")  # use the class for instantiation
print(c.describe())
```

---

# 🧪 Methods for points

- When it's hit, the character looses some points
- When it's healed, it gets some points back
- It dies when it finishes its points
- It cannot be healed anymore

``` py
class Fighter: # …
    def hit(self, damage: int) -> None:
        self._hp = max(self._hp - damage, 0)

    def heal(self, cure: int) -> None:
        if self.alive():
            self._hp = min(self._hp + cure, 30)

    def alive(self) -> bool:
        return self._hp > 0
```

---

# Instantiation and use

- Let's inflic 3 wounds and a healing, randomly

``` py
c = Fighter("Hero")  # use the class for instantiation
print(c.describe())

for _ in range(3):
    c.hit(randint(5, 10))
    print(c.describe())

c.heal(randint(5, 10))
print(c.describe())

print(c.alive())
```

<https://fondinfo.github.io/play/?c06_dnd.py>

---

# The magical self

- 1st param of each method is conventionally named `self`
- Value of `self` is assigned *automatically*
- It represents the *object*, whose method is invoked
- In Python, a method call is interpreted this way:

``` py
c1 = Fighter("Hero")
c1.hit(7)
```

``` py
# ⚠️ Python internals, DON'T do this!
c1 = object.__new__(Fighter)
Fighter.__init__(c1, "Hero")
Fighter.hit(c1, 7)
```

---

# Dunder methods

- *Special* methods, like `__init__`
    - Names surrounded by double underscores
- Used by Python for conversions and operations
    - Operator overloading

``` py
class Fighter: # …
    def __str__(self) -> str:
        return self.describe()

c = Fighter("Hero")
print(c)  # instead of `c.describe()`
```

- Other special methods: [docs.python.org/3/reference](https://docs.python.org/3/reference/datamodel.html#special-method-names)

---

# Python ranges

- *Range*, to get some sequence of integers
    - Min val is included
    - Max val is excluded
    - Optional step
- Pyhton ranges are *lazy*, too

``` py
>>> r = range(5, 15, 2)
>>> r
range(5, 15, 2)
>>> for v in r: print(v, end=' ')
5 7 9 11 13
>>> list(r)
[5, 7, 9, 11, 13]
```

---

# Fibonacci's rabbits

![large](https://fondinfo.github.io/images/fun/fib-rabbits.png)

---

# Fibonacci list

``` py
def fib_list(stop):
    '''fill a list with Fibonacci numbers'''
    result = []

    a, b = 0, 1
    while a <= stop:
        result.append(a)
        a, b = b, a + b

    return result
```

- Problems
    - All values are stored in memory
    - The whole list is generate at once
    - Some values could be needed much later, or never

---

# Iterables and iterators

- **Iterable**: an object that implements `__iter__`
    - `__iter__` returns an *iterator* object
- **Iterator**: an object that implements `__next__`
    - `__next__` returns the next element of the iterable
    - Raises a `StopIteration` exception when no more elements are available
- *Simplest case*: iterable implements `__next__` itself and returns `self` in `__iter__`

``` py
>>> r = range(1, 4)  # dir(r)
>>> it = r.__iter__()  # dir(it)
>>> it.__next__()  # …
1
```

---

# Fibonacci iterator

``` py
class Fib:
    '''iterator that yields Fibonacci numbers'''
    def __init__(self, stop):
        self._stop = stop
        self._a = 0
        self._b = 1

    def __iter__(self):
        return self

    def __next__(self):
        fib = self._a
        if fib > self._stop:
            raise StopIteration
        self._a, self._b = self._b, self._a + self._b
        return fib
```

---

# Using an iterator

``` py
>>> f = Fib(13)
>>> f
<__main__.Fib object at 0x7fc31dbbdbe0>
>>> for v in f: print(v, end=' ')

0 1 1 2 3 5 8 13
>>> list(f)
[0, 1, 1, 2, 3, 5, 8, 13]
```

- Iterators are lazy, but have much boilerplate code

---

# Fibonacci generator

``` py
def fib(stop):
    '''generator that yields Fibonacci numbers'''
    a, b = 0, 1
    while a <= stop:
        yield(a)  # ~ append in fib_list, but lazy
        a, b = b, a + b
```

``` py
>>> f = fib(13)
>>> f
<generator object fib at 0x7fc31db9b308>
>>> list(f)
[0, 1, 1, 2, 3, 5, 8, 13]
>>> f.__iter__
<method-wrapper '__iter__' of generator object at 0x7fc31db9b308>
>>> f.__next__
<method-wrapper '__next__' of generator object at 0x7fc31db9b308>
```

---

# Unbounded sequences

``` py
def fib_unb():
    '''generator that yields Fibonacci numbers'''
    a, b = 0, 1
    while True:
        yield(a)
        a, b = b, a + b
```

``` py
>>> f = fib_unb()
>>> f
<generator object fib_unb at 0x7f5946caf4c0>
>>> from itertools import islice
>>> islice(f, 8)
<itertools.islice object at 0x7f594a2f7ea8>
>>> list(islice(f, 8))
[0, 1, 1, 2, 3, 5, 8, 13]
```

---

# Infinite iterators

- Much more, in the `itertools` module
    - See: <https://docs.python.org/3/library/itertools.html>
- `count(start, [step])`
    - `count(10, 2) --> 10 12 14 …`
- `cycle(p)`
    - `cycle('ABC') --> A B C A B C …`
- `repeat(elem [,n])`
    - `repeat(10) --> 10 10 10 …`
- `islice(iterable, stop)` <br> `islice(iterable, start, stop[, step])`
    - Params can be `None`

>

See also: <https://docs.python.org/3/library/functools.html>
<br>
See also: <https://docs.python.org/3/library/operator.html>

---

# Exercise

---

# List comprehensions

---

# List comprehensions

- In mathematics, set comprehensions are normally used for building more specific sets out of general sets
    - E.g.: set of first ten even natural numbers
    - `S = {2·x | x ∈ N, x ≤ 10}`

``` hs
ghci> [x*2 | x <- [1..10]]
[2,4,6,8,10,12,14,16,18,20]
```

- In Haskell, list comprehensions are very similar to set comprehensions
    - The part before the pipe is called the *output function*
    - `x` is the *variable*
    - `[1..10]` is the *input list*
    - For every element in `[1..10]` (which we have bound to `x`), we get that element, only doubled

---

# Filtered comprehensions

- Now let's add a condition (or a *predicate*) to that comprehension
    - Weeding out lists by predicates is also called *filtering*
- E.g.: all numbers from 50 to 100 whose remainder when divided with the number 7 is 3

``` hs
ghci> [x | x <- [50..100], x `mod` 7 == 3]
[52,59,66,73,80,87,94]
```

- *Python* also has comprehensions

``` py
>>> [x for x in range(50, 101) if  x % 7 == 3]
[52, 59, 66, 73, 80, 87, 94]
```

---

# Examples of comprehensions

``` hs
ghci> boomBangs xs = [if x < 10 then "BOOM!"
                             else "BANG!" | x <- xs, odd x]
ghci> boomBangs [7..13]
["BOOM!","BOOM!","BANG!","BANG!"]
```

``` hs
ghci> removeNonUppercase st = [c | c <- st,
                                      c `elem` ['A'..'Z']]
ghci> removeNonUppercase "IdontLIKEFROGS"
"ILIKEFROGS"
```

---

# More comprehensions

- We can include several predicates

``` hs
ghci> [x | x <- [10..20], x /= 13, x /= 15, x /= 19]
[10,11,12,14,16,17,18,20]
```

- We can also draw from several lists
    - Produce the *cartesian product* of the input lists
    - Then join them by the output function

``` hs
ghci> [x*y | x <- [2,5,10], y <- [8,10,11]]
[16,20,22,40,50,55,80,100,110]
```

- In *Python* too

``` py
>>> [x * y for x in (2, 5, 10) for y in (8, 10, 11)]
[16, 20, 22, 40, 50, 55, 80, 100, 110]
```

---

# Tuples

- Tuples are a way to store several values into a single value
    - Denoted with parentheses
    - Components separated by commas
- A list of numbers is… a list of numbers
    - That's its type
    - It can have only one number in it…
    - Or an infinite amount of numbers
- A tuple is different
    - You know exactly *how many* values you want to combine
    - And their *own type*
- A tuple can combine several types
    - Values don't have to be homogenous

---

# Functions on tuples

- Tuples can be compared with each other
    - If they have the same size
    - And their components can be compared
- The type of a tuple depends on:
    - *How many* components it has
    - And the *types* of the components
- → Can't write a general function to append an elem to a generic tuple
    - Each different size of tuple is its own type
- Two useful functions that operate on pairs (*and only pairs!*):
    - `fst` takes a pair and returns its first component
    - `snd` takes a pair and returns its second component

``` hs
ghci> fst (8,11)
8
ghci> snd ("Wow", False)
False
```

---

![](https://fondinfo.github.io/images/fun/zip.png)
# Zipping

- `zip` takes two lists and returns one list, by joining the matching elements into *pairs*
    - 1st element goes with 1st, 2nd with 2nd…
    - The two lists can contain different types
    - E.g.: to traverse two lists simultaneously

``` hs
ghci> zip [1,2,3,4,5] [5,5,5,5,5]
[(1,5),(2,5),(3,5),(4,5),(5,5)]
ghci> zip [1..5] ["one", "two", "three", "four", "five"]
[(1,"one"),(2,"two"),(3,"three"),(4,"four"),(5,"five")]
```

---

# Zipping infinite lists

- If a list is longer than the other, it gets *cut off*
- Haskell is *lazy*: zip finite lists with infinite lists

``` hs
ghci> zip [1..] ["apple", "orange", "cherry", "mango"]
[(1,"apple"),(2,"orange"),(3,"cherry"),(4,"mango")]
```

---

# Python's corner

---

# Zipping in Python

- Python's `zip` is *lazy*, too
- It can work on infinite sequences

``` py
>>> list(zip([0, 1, 2, 3], ['A', 'B', 'C', 'D']))
[(0, 'A'), (1, 'B'), (2, 'C'), (3, 'D')]
>>> list(zip(count(0), "ABCD"))
[(0, 'A'), (1, 'B'), (2, 'C'), (3, 'D')]
>>> list(enumerate("ABCD"))
[(0, 'A'), (1, 'B'), (2, 'C'), (3, 'D')]
>>> for i, v in enumerate([17, 21, 19]): print(i, v)
...
0 17
1 21
2 19
```

---

![](https://fondinfo.github.io/images/repr/child-fingers.png)
# 🥷 Enumerate

- It pairs a growing index with values in a sequence
- It generates a *lazy* sequence of pairs
- Iterations where both index and value are needed

``` py
groceries = ["spam", "egg", "bacon", "sausage"]

for i, val in enumerate(groceries):  # ~ zip(range(4), groceries)
    print(i, val, end=" § ")
# 0 spam § 1 egg § 2 bacon § 3 sausage §

e = list(enumerate(groceries))  # if you *really* need a list
[(0, "spam"), (1, "egg"), (2, "bacon"), (3, "sausage")]
```

---

# 🥷 Instructions and expressions

- **Expression**: code which produces a value, when executed
    - Fit for the right hand side of an assignment (*rvalue*)
- Many Python **instructions** do not correspond to a value
    - `if`, `while`, `for`, `def`, `class` are *not* expressions
    - Assignments `=`, `+=` etc. are *not* expressions
- A special `if` exists, as an expression

``` py
val = "boom" if 5 % 2 == 0 else "bang"`
```

- Since v3.8: special *assignment* `:=`, as an expression

``` py
while (v := float(input("val? "))) >= 0:  # sentinel
    print(v ** .5)
```

---

# 🥷 Thrutiness value

- Each object can be cast to `bool`
- *Falsy* constants and numbers
    - `None`, `False`, `0`, `0.0` ecc.
- *False* sequences
    - `""`, `()`, `[]`, `{}`, `set()`, `range(0)`
- Other objects, normally *truthy*
    - Decided by their `__bool__`, or `__len__` methods

``` py
while v := input("val? "):  # sentinel, "" is falsy
    print(float(v) ** 2)
```

>

<https://docs.python.org/3/library/stdtypes.html#truth>

---

# Aggregation functions

- Froma sequence to a single result
- Logic operations
    - **`all`** : logic *AND* on all *thruty* values
    - **`any`** : logic *OR* on all *thruty* values
- Numeric operazions
    - **`sum`, `max`, `min`, `len`**
    - **count** method on a sequence: number of occurrences of a value

``` py
>>> all((2, 1, 0, -1, ""))  # 0 and "" are falsy
False
>>> any([2, 1, 0, -1, ""])  # 2, 1 and -1 are truthy
True
>>> "abracadabra".count("a")
5
```

---

# Generator expressions

- Like comprehensions, but lazy
    - No square brackets
- Often in aggregation functions

``` py
>>> sum(1 for x in [1, 3, 4, 6, 7] if x % 2 == 1)
3
```

- Es. count mines arond a cell:
    - <https://fondinfo.github.io/play/?c09_mines.py>

---

# Exercise

---

# Types and typeclasses

---

# Types

- *Static type system*: type of every expression known at compile time
    - ⇒ Safe and efficient code
- *Type inference*: if we write a number…
    - We don't have to tell Haskell it's a number
- However, understanding the type system is very important
    - `:t` command tells us the type of an expression
    - `::` is read as “*has type of*”

``` hs
ghci> :t 'a'
'a' :: Char
ghci> :t 4 == 5
4 == 5 :: Bool
ghci> :t "HELLO!"
"HELLO!" :: [Char]
ghci> :t (True, 'a')
(True, 'a') :: (Bool, Char)
```

---

# Types of functions

- Functions are expressions
    - So they also have types and you can use `:t` on them
- We can give functions an explicit type declaration

``` hs
removeNonUppercase :: [Char] -> [Char]
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]
```

- `removeNonUppercase` has a type of `[Char] -> [Char]`
    - It takes one string as a param, returns another as result
    - In this case, the compiler can *infer* by itself
    - It's a function from a string to a string!

---

# Functions with several parameters

- The *parameters* are all separated with `->`
- The *return type* is the last item
- No special distinction between the params and the return type

``` hs
addThree :: Int -> Int -> Int -> Int
addThree x y z = x + y + z
```

- Python typing: params and result are separated

``` py
from typing import Callable
FunT = Callable[[int, int, int], int]
```

---

# Integer numbers

- `Integer` stands for *unbounded* integer
- `Int` stands for *bounded* integer
    - More efficient

``` hs
factorial :: Integer -> Integer
factorial n = product [1..n]

ghci> factorial 50
30414093201713378043612608166064768844377641568960512000000000000
```

---

# Real numbers

- `Float` is a real floating point with *single* precision
- `Double` is a real floating point with *double* precision

``` hs
circumference :: Float -> Float
circumference r = 2 * pi * r

circumference' :: Double -> Double
circumference' r = 2 * pi * r

ghci> circumference 4.0
25.132742
ghci> circumference' 4.0
25.132741228718345
```

---

# More types

- `Bool` is a boolean type, with only two possible values
    - `True` and `False`
- `Char` represents a single character
    - Denoted by single quotes
- `String` is an alias for a list of characters
    - Denoted by double quotes
- `Tuples` are types, which depend on…
    - Their length, as well as…
    - The types of their components
- *Conversion* between numerical types must be done explicitly
    - <https://wiki.haskell.org/Converting_numbers>
    - `fromIntegral`
    - `round, floor, ceiling, truncate`

---

# Type variables

- What is the type of the `head` function?

``` hs
ghci> :t head
head :: [a] -> a
```

- Types are written in capital case
    - So `a` isn't exactly a type
- It's actually a *type variable*
    - It can be of any type
    - Much like *generics* in other languages
- Functions that have type variables are called *polymorphic*
    - Compile-time polymorphism

---

# Type variables in C++

``` cpp
template <typename T>
T max2(T a, T b) {
    return a < b ? b : a;
}

int main () {
    int i1 = 19, i2 = 30;
    cout << "max2(i1, i2): " << max2(i1, i2) << endl;

    double d1 = 10.7, d2 = 23.5;
    cout << "max2(d1, d2): " << max2(d1, d2) << endl;
    //cout << "max2(d1, d2): " << max2<int>(d1, d2) << endl;

    string s1 = "Hello", s2 = "World";
    cout << "max2(s1, s2): " << max2(s1, s2) << endl;
}
```

---

# Multiple type variables

- What is the type of the `fst` function?

``` hs
ghci> :t fst
fst :: (a, b) -> a
```

- `fst` takes a tuple which contains two types
    - Result of the same type as first component
- Note : `a` and `b` are different type variables
    - But they don't have to be different types, necessarily

---

# Class constraint

- What's the type signature of the equality `==` function?
    - Takes any two values that are of the same type
    - Returns a `Bool`
- Everything before the `=>` symbol is called a *class constraint*
    - The type of those two values must be a member of `Eq`

``` hs
ghci> :t (==)
(==) :: (Eq a) => a -> a -> Bool
```

- Note : the equality operator, `==`, is a function
    - So are `+, *, -, /` and pretty much all operators
    - A f. named only with special chars is infix by default
    - Handle an op. as a normal f.: *surround it in parentheses*

---

# Typeclasses

- A *typeclass* is a sort of interface that defines some behavior
    - A *type* can be a part of a typeclass, if…
    - It implements the behavior the typeclass describes
    - Kind of as Java interfaces, with different aim (…)
- **`Eq`** typeclass
    - Interface for testing for equality
    - Its member types implement op.s `==` and/or `/=`
    - Most standard types are part of the `Eq` typeclass
- The `elem` f. has a type of
    - `(Eq a) => a -> [a] -> Bool`
    - In fact, it uses `==` over a list
    - To check whether some value is in it

---

# Ord typeclass

- **`Ord`** is for types that have an ordering
    - Member types implement comparing f.s
    - `>, <, >=, <=` and/or `compare`
    - A member of `Ord` must first be member of `Eq`
    - All types so far are part of `Ord` (except for f.s)
- The `compare` f. takes two `Ord` members of the same type
    - It returns an `Ordering`
    - A type that can be `GT, LT, EQ`

``` hs
ghci> :t (>)
(>) :: (Ord a) => a -> a -> Bool
ghci> "Abrakadabra" `compare` "Zebra"
LT
ghci> 5 `compare` 3
GT
```

---

# Show typeclass

- **`Show`** is for types that can be represented as strings
    - All types so far are part of `Show` (except for f.s)
    - Member types implement the `show` f.
- `show` takes a value (member of `Show`)
    - Returns its *string* representation

```haskell
ghci> show 3
"3"
ghci> show 5.334
"5.334"
ghci> show True
"True"
```

---

# Read typeclass

- **`Read`** is for types that can be extracted from strings
    - All types so far are part of `Read` (except for f.s)
    - Its member types implement the `read` f.
- `read` takes a *string* and returns a member of `Read`

``` hs
ghci> read "True" || False
True
ghci> read "8.2" + 3.8
12.0
ghci> read "5" - 2
3
ghci> read "[1,2,3,4]" ++ [3]
[1,2,3,4,3]
```

---

# Type annotations

- Explicitly saying what the type of an expression should be
    - Add `::` at the end of the expression and then specify a type

```haskell
ghci> read "5" :: Int
5
ghci> read "5" :: Float
5.0
ghci> (read "5" :: Float) * 4
20.0
ghci> read "[1,2,3,4]" :: [Int]
[1,2,3,4]
ghci> read "(3, 'a')" :: (Int, Char)
(3, 'a')
```

---

# Enum typeclass

- **`Enum`** members are sequentially ordered types
    - Which can be enumerated
    - Its types define `succ` and `pred` f.s
    - They can be used in list ranges
    - Types include: `Bool, Char, Ordering, Int, Integer…`

```haskell
ghci> ['a'..'e']
"abcde"
ghci> [LT..GT]
[LT,EQ,GT]
ghci> [3..5]
[3,4,5]
ghci> succ 'B'
'C'
```

---

# Other num classes

- **`Bounded`** members have upper and lower bounds
    - Its types define `maxBound` and `minBound` f.s
    - Types: `Int, Char, Bool…`
- **`Num`** is a numeric typeclass
    - Its types define `+, -, *` etc.
    - ~~They must also be in `Show` and `Eq`~~
    - Types: `Int, Integer, Float, Double`
- **`Integral`** typeclass: `Int` and `Integer` types
- **`Floating`** typeclass: `Float` and `Double` types

---

# Pattern matching

---

# Pattern matching

- Specify patterns to which some data should conform, and…
- Deconstruct the data according to those patterns
- Define separate function bodies for different patterns
    - Simple and readable code

``` hs
lucky :: (Integral a) => a -> String
lucky 7 = "LUCKY NUMBER SEVEN!"
lucky x = "Sorry, you're out of luck, pal!"
```

---

# Factorial

- Define a factorial function *recursively*, the way it is usually defined in mathematics
    - The factorial of `0` is `1`
    - The factorial of any positive integer is that integer multiplied by the factorial of its predecessor

``` hs
factorial :: (Integral a) => a -> a
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

- Checked from top to bottom
    - Specify the most specific patterns first and then the more general ones later
    - Pattern matching can also fail

---

# Matching on tuples

- Function that takes two vectors and adds them together
    - Vectors in a 2D space, in the form of *pairs*
    - Add their x components, and then their y components

``` hs
addVectors :: (Num a) => (a, a) -> (a, a) -> (a, a)
addVectors a b = (fst a + fst b, snd a + snd b)
```

``` hs
addVectors :: (Num a) => (a, a) -> (a, a) -> (a, a)
addVectors (x1, y1) (x2, y2) = (x1 + x2, y1 + y2)
```

---

# Extracting from triples

``` hs
first :: (a, b, c) -> a
first (x, _, _) = x

second :: (a, b, c) -> b
second (_, y, _) = y

third :: (a, b, c) -> c
third (_, _, z) = z
```

- We really don't care what a part is, so we just write a `_`

---

# Matching on lists

- The `x:xs` pattern is used a lot, especially with recursive f.s
- Bind the first 3 elements to variables and the rest of the list to another variable: `x:y:z:zs`
    - It will only match against lists with 3 elements or more
- E.g.: f. that tells us about first elements of a list

``` hs
tell :: (Show a) => [a] -> String
tell [] = "The list is empty"
tell (x:[]) = "The list has one element: " ++ show x
tell (x:y:[]) = "The list has two elements: " ++ show x ++ ", " ++ show y
tell (x:y:_) = "This long list starts with: " ++ show x ++ ", " ++ show y
```

---

# Length and sum of a list

``` hs
length' :: [a] -> Int
length' [] = 0
length' (_:xs) = 1 + length' xs
```

``` hs
sum' :: (Num a) => [a] -> a
sum' [] = 0
sum' (x:xs) = x + sum' xs
```

- First we defined the the edge condition
- Then in the second pattern we take the list apart by splitting it into a head and a tail

>

Let's see what happens if we call length' on "ham"…
<br>
In the end we have 1 + (1 + (1 + 0)).

---

# Patterns and whole values

- Break something up according to a pattern, binding it to names, but still keep a reference to the whole thing
    - Put a name and an `@` in front of a pattern
    - E.g.: `xs@(x:y:ys)` to get the whole list via `xs`

``` hs
capital :: String -> String
capital "" = "Empty string, whoops!"
capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x]
```

>

Note: you can't use ++ in patterns, like `xs ++ ys`. What would be in the first and what would be in the second list?

---

![](https://fondinfo.github.io/images/fun/guard.png)
# Guards

- Like an `if` statement, but more readable
- They play really nicely with patterns
- The `where` clause define names, across guards
- E.g.: a simple function that berates you differently depending on your “body mass index”

``` hs
bmiTell :: Float -> Float -> String
bmiTell weight height
    | bmi <= 18.5 = "Underweight, you emo, you!"
    | bmi <= 25.0 = "Normal. Pffft, I bet you're ugly!"
    | bmi <= 30.0 = "Fat! Lose some weight, fatty!"
    | otherwise   = "A whale, congratulations!"
    where bmi = weight / (height ** 2)
```

---

# Local definitions

``` hs
heron a b c =
    sqrt (s * (s - a) * (s - b) * (s - c))
    where s = (a + b + c) / 2

heron2 a b c =
    let s = (a + b + c) / 2
    in sqrt (s * (s - a) * (s - b) * (s - c))
```

- `let` bindings *are expressions* themselves
- `where` bindings are just syntactic constructs for f. definition
    - `where` bindings can be used across `guards`

---

# Exercise

---

# Python's corner

---

# Structural pattern matching

- Syntax addition to Python 3.10
    - Destructure values against matches
    - Wildcard `_`
- E.g., matching sequences

``` py
command = input("What are you doing next? ")
# analyze the result of command.split()

match command.split():
    case [action]:
        … # interpret single-verb action
    case [action, obj]:
        … # interpret action, obj
    case _ :
        print(f"Sorry, I couldn't understand {command!r}")
```

>

<https://www.python.org/dev/peps/pep-0636/>

---

# Specific values

``` py
match command.split():
    case ["quit"]:
        print("Goodbye!")
        quit_game()
    case ["look"]:
        current_room.describe()
    case ["get", obj]:
        character.get(obj, current_room)
    case ["go", direction]:
        current_room = current_room.neighbor(direction)
```

- *Or* pattern, *as* pattern

```
match command.split():
    case ["go", ("north" | "south" | "east" | "west") as direction]:
        current_room = current_room.neighbor(direction)
```

---

![small](https://fondinfo.github.io/images/fun/guard.png)
# Guards

``` py
match command.split():
    case ["go", direction] if direction in current_room.exits:
        current_room = current_room.neighbor(direction)
    case ["go", _]:
        print("Sorry, you can't go that way")
```

- Multiple values

``` py
match command.split():
    case ["drop", *objects]:
        for obj in objects:
            character.drop(obj, current_room)
```

---

# Matching a tuple

``` py
# point is an (x, y) tuple
match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"Y={y}")
    case (x, 0):
        print(f"X={x}")
    case (x, y):
        print(f"X={x}, Y={y}")
    case _ :
        raise ValueError("Not a point")
```

---

# Matching a dataclass

``` py
@dataclasses.dataclass
class Point:  # ~ struct, with init, repr… methods
    x: int
    y: int

def where_is(point):
    match point:
        case Point(x=0, y=0):
            print("Origin")
        case Point(x=0, y=y_):  # idiomatic: y=y
            print(f"Y={y_}")
        case Point(x=x_, y=0):  # idiomatic: x=x
            print(f"X={x_}")
        case Point():
            print("Somewhere else")
        case _ :
            print("Not a point")
```

---

# Matching a dict

``` py
for action in actions:
    match action:
        case {"text": message, "color": c}:
            ui.set_text_color(c)
            ui.display(message)
        case {"sleep": duration}:
            ui.wait(duration)
        case {"sound": url, "format": "ogg"}:
            ui.play(url)
        case {"sound": _ , "format": _ }:
            warning("Unsupported audio format")
```
