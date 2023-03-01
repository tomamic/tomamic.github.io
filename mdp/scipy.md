![](images/oop/modules.png)
# Python for data analysis
## NumPy, Pandas, PyPlotLib

---

![large](images/dev/python-powered.png)
# Python applications

- Web
- Data analysis
- Machine learning
- Scripting
- Teaching
- Games
- Hardware
- Multiplatform...

---

![](images/algo/perfect-square.svg)
# Readability counts

``` py
n = 0
while n <= 0:
    n = int(input("Positive val? "))

ans = 1
while ans * ans < n:
    ans += 1

if ans * ans == n:
    print("Square root:", ans)
else:
    print("Not a perfect square")
```

>

<http://www.ce.unipr.it/brython/?p1_perfect_square.py>

---

![](images/fun/function.png)
# Functions

- **`def`**, to define a function
- **`return`**, to (optionally) return the result
- Then, you **call** a function to execute it
- Type *annotations* for params and return value are optional and not verified

``` py
def hypotenuse(leg1: float, leg2: float) -> float:
    hyp = (leg1 ** 2 + leg2 ** 2) ** 0.5
    return hyp

result = hypotenuse(3, 4)  # 5.0
```

---

![](images/fun/month-list.svg)
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

![](images/fun/wile-coyote.png)
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

![](images/fun/shopping-list.png)
# Insertion and removal

``` py
grocery = ["spam", "egg", "beans"]

grocery[0] = "sausage"      # replace an element

grocery.append("bacon")     # add an element to the end
grocery.pop()               # remove (and return) last element

grocery.insert(1, "bacon")  # other elements shift
removed = grocery.pop(1)    # remove (and return) element at index

if "egg" in grocery:       # True, grocery contains "egg"
    grocery.remove("egg")  # remove an element by value
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

# In place operations

- List concat `+` produces a new list
- But `+=` works *in place*

``` py
a = [1, 2, 3]
b = a
b = b + [4, 5]  # guess b? guess a?
```

``` py
a = [1, 2, 3]
b = a
b += [4, 5]  # guess b? guess a?
```

---

# Strings and lists

- **String**: *immutable* sequence of chars
- **`join`** and **`split`**: from list to string and viceversa

``` py
txt = "Monty Python's Flying Circus"
txt[3]    # 't'
txt[-2]   # 'u'
txt[6:12] # "Python"
txt[-6:]  # "Circus"
```

``` py
days = ["tue", "thu", "sat"]
txt = "|".join(days)  # "tue|thu|sat"
```

``` py
txt = "mon|wed|fri"
days = txt.split("|")  # ["mon", "wed", "fri"]
```

---

# Tuple

- **Immutable** sequence of values, even of *different type*
- Usually enclosed in parenthesis

``` py
# Tuple packing
pt = 5, 6, "red"
pt[0]  # 5
pt[1]  # 6
pt[2]  # "red"

# multiple assignments, from a tuple
x, y, colour = pt  # sequence unpacking
a, b = 3, 4
a, b = b, a
```

---

# Loops on sequences: for

``` py
grocery = ["spam", "egg", "bacon", "sausage"]
for product in grocery:
    print(product)
```

``` py
for val in range(0, 5):
    print(val * val, end=" ")  # 0 1 4 9 16
```

- At each iteration, a different element of `grocery` is assigned to `product`
- A `for` loop can be used on any kind of sequence: list, string, tuple, range...
- **`range`** : range of consecutive values
    - Lower end *included* (defaults to 0)
    - Upper end *excluded*

---

# Functions on lists

``` py
def limit_values(values, max_val):
    # procedure: process data, no direct result
    for i in range(len(values)):
        if values[i] > max_val:
            values[i] = max_val

    # the pythonic way: for i, val in enumerate(values): ...

def main ():
    data = [5, 4, 2]
    limit_values(data, 4)
    print(data)

main()
```

---

# 🥷 Formatted strings

- *f-strings*, with `f` before quotation marks
- Include expressions, in braces
- Formatting specs, after `:`

``` py
for a in [0, 45, 90, 135]:
    v = math.sin(a * math.pi / 180)
    print(f"Angle: {a:3}; Sin: {v:4.2f}")
```

``` text
Angle:   0; Sin: 0.00
Angle:  45; Sin: 0.71
Angle:  90; Sin: 1.00
Angle: 135; Sin: 0.71
```

>

<https://docs.python.org/3/tutorial/inputoutput.html>

---

# 🥷 Instructions and expressions

- **Expression**: code whose evaluation produces a value
    - Fit for the right side of an assignment (*rvalue*)
- Many Python **instructions** do not correspond to a value
    - `if`, `while`, `for`, `def`, `class` are *not* expressions
    - Assignments `=`, `+=`, etc. are *not* expressions
- There is a special `if`, being an expression

``` py
val = "boom" if 5 % 2 == 0 else "bang"
```

- Since v3.8: special `:=` *assignment*, as an expression

``` py
while (v := float(input("val? "))) >= 0:  # sentinel
    print(v ** .5)
```

---

![](images/dev/computer-ninja.svg)
# List comprehension

- Terse way to create a list
- Each element: result of an *output expression* on a member of an *input iterable*
- Optional *condition* on elements

``` py
squares = [x ** 2 for x in range(12)]
# squares = []
# for x in range(12):
#    squares.append(x ** 2)
```

``` py
even_nums = [str(x) for x in range(12) if (x % 2) == 0]
```

- *Lazy* generator comprehension

``` py
even_nums = (str(x) for x in range(12) if (x % 2) == 0)
```

---

# Examples of comprehensions

``` py
>>> xs = range(7, 14)
>>> ["BOOM!" if x < 10 else "BANG!" for x in xs if x % 2]
["BOOM!","BOOM!","BANG!","BANG!"]
```

``` py
>>> txt = "IdontLIKEFROGS"
>>> "".join(c for c in txt if 'A' <= c <= 'Z')
"ILIKEFROGS"
```
---

# More comprehensions

- We can include several predicates

``` py
>>> [x for x in range(10, 21) if x != 13 if x != 15 if x != 19]
[10, 11, 12, 14, 16, 17, 18, 20]
```

- We can also draw from several lists
    - Produce the *cartesian product* of the input lists
    - Then join them by the output expression

``` py
>>> [x*y for x in (2, 5, 10) for y in (8, 10, 11)]
[16, 20, 22, 40, 50, 55, 80, 100, 110]
```

---

# Pythagoras with comprehensions

- **Exercise** : which right triangle...
    - that has integers for all sides...
    - and all sides equal to or smaller than 10...
    - has a perimeter of 24?

---

![](images/repr/child-fingers.png)
# Enumerate

- Couple each value of a sequence with its index
- It generates a sequence of tuples (pairs)
- In `for` cycles, using both value and index

``` py
>>> grocery = ["spam", "egg", "bacon", "sausage"]
>>> list(enumerate(grocery))
[(0, "spam"), (1, "egg"), (2, "bacon"), (3, "sausage")]
```

``` py
grocery = ["spam", "egg", "bacon", "sausage"]
for i, val in enumerate(grocery):
    print(i, val)
```

>

Results in a list: only (!) to visualize them <br>
Otherwise, Python doesn't generate results immediately (*lazy*)

---

![](images/fun/zip.png)
# Zip

- Couples elements of two (or *more*) sequences
- It generates a sequence of tuples (pairs)
- The result has the len of the shortest sequence

``` py
>>> grocery = ["spam", "egg", "bacon", "sausage"]
>>> quantities = ["100 g", "6 pc", "200 g", "500 g", "too much"]
>>> list(zip(grocery, quantities))
[("spam", "100 g"), ("egg", "6 pc"), ("bacon", "200 g"),
("sausage", "500 g")]
```

>

Results in a list: only (!) to visualize them

---

![](images/fun/legomap.png)
# Map

- Takes a function and a sequence (or *more*) as params
- *Higher order function*
- Applies the function to each value
- Returns the sequence of results

``` py
>>> from math import sqrt
>>> values = [0, 1, 2, 3, 4]
>>> list(map(sqrt, values))
[0.0, 1.0, 1.4142, 1.7320, 2.0]
```

``` py
>>> list(map(pow, range(3), (2, 3, 4)))
[0, 1, 16]
```

>

Results in a list: only (!) to visualize them

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

`multithreading.Pool` is similar but incurs in [GIL](https://en.wikipedia.org/wiki/Global_interpreter_lock)

---

# Sort and reverse

``` py
>>> grocery = ["spam", "egg", "bacon", "sausage"]
>>> sorted(grocery)
['bacon', 'egg', 'sausage', 'spam']
>>> sorted(grocery, key=len)  # lengths of elements are compared
['egg', 'spam', 'bacon', 'sausage']
>>> list(reversed(grocery))
['sausage', 'bacon', 'egg', 'spam']
>>> grocery
['spam', 'egg', 'bacon', 'sausage']
```

``` py
>>> grocery.sort()     # in-place
>>> grocery.reverse()  # in-place
>>> grocery
['spam', 'sausage', 'egg', 'bacon']
```

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

---

# Multidim lists
- Lists of lists of ...
    - Access to elements: two or more indices (or *dimensions*)
    - If bidimensional, called *matrices*

``` py
a = [['A', 'B', 'C', 'D'],
     ['E', 'F', 'G', 'H'],
     ['I', 'L', 'M', 'N']]          # 2D

b = ['A', 'B', 'C', 'D',
     'E', 'F', 'G', 'H',
     'I', 'L', 'M', 'N']            # 1D

i = y * cols + x                    # 2D -> 1D

y, x = i // cols, i % cols                        # 1D -> 2D
```

>

Try and print `a[2]`, `a[2][1]`, etc.

---

# Sum of columns: matrix

``` py
matrix = [[2, 4, 3, 8],
          [9, 3, 2, 7],
          [5, 6, 9, 1]]
rows = len(matrix)
cols = len(matrix[0])

for x in range(cols):
    total = 0
    for y in range(rows):
        val = matrix[y][x]  # ⚠️ 1st index for the row, 2nd for the col
        total += val
    print("Col #", x, "sums to", total)
```

``` py
rows, cols = 3, 4
matrix = [[randrange(100) for x in range(cols)] for y in range(rows)]
```

---

# List as pseudo-matrix

``` py
matrix = [2, 4, 3, 8,
          9, 3, 2, 7,
          5, 6, 9, 1]
rows = 3  # Cannot be guessed from matrix alone
cols = len(matrix) // rows

for x in range(cols):
    total = 0
    for y in range(rows):
        val = matrix[y * cols + x]   # 2D -> 1D
        total += val
    print("Col #", x, "sums to", total)
```

``` py
rows, cols = 3, 4
matrix = [randrange(100) for i in range(cols*rows)]
```

---

# Matrix allocation

``` py
matrix = [[0 for x in range(cols)] for y in range(rows)]
# all elements are inited as 0 -- your need may vary
```

``` py
matrix = []
for y in range(rows):
    new_row = []
    for x in range(cols):
        new_row.append(0)
    matrix.append(new_row)
```

- ⚠️ **Don't** use repetitions to create lists of lists

``` py
not_a_matrix = [[0] * 4] * 3  # DON'T do this
not_a_matrix[1][2] = 1        # guess not_a_matrix?
```

---

![](images/fun/dictionary.png)
# 🥷 Dictionary

- Sometimes called *map* or *associative array*
- *Unordered* set of **key**-**value** pairs
- Key: *index* to access the value
    - Keys are *unique* (~ `list`)
    - Type: *`str`*, or other immutable type

``` py
tel = {"john": 4098, "terry": 4139}  # dict[str, int]
if "john" in tel:
    print(tel["john"])  # 4098, ⚠️ error for a missing key
tel["graham"] = 4127
for k, v in tel.items():
    print(k, v, end=" § ")
## john 4098 § terry 4139 § graham 4127 §
```

>

<https://docs.python.org/3/library/stdtypes.html#dict>

---

![](images/fun/sparse-matrix.svg)
# 🥷 Sparse matrix

- Matrix with many “empty” cells
- Or sparse, non numeric keys
- Dictionary with keys of type *tuple*
- `dict.get` method with *default* value

``` py
values = {(0, 0): 5, (1, 1): 8,
          (2, 2): 3, (3, 1): 6}  # dict[(int, int), int]

y = int(input("Row? "))
x = int(input("Col? "))
val = values.get((y, x), 0)  # key not found → default 0
print(val)
```

>

<https://docs.python.org/3/library/stdtypes.html#dict>

---

![large](images/fun/rollinz.jpg)
# 🥷 Set

- Collection of elements *without repetitions*
    - No keys or indices
- `add` and `discard` methods, to add and remove
- `in`, `|` and `&` operators, for membership, union and intersection

``` py
numbers = {1, 4, 5}
numbers.add(4)  # {1, 4, 5}
few = numbers & {4, 5, 6}  # {4, 5}, intersection
many = numbers | {3, 4}  # {1, 3, 4, 5}, union

empty_set = set()  # ⚠️ {} is an empty dict
```

>

<https://docs.python.org/3/library/stdtypes.html#set>

---

# 🥷 Truthy value

- Any object can be converted to `bool`
- *Falsy* constants and numbers
    - `None`, `False`, `0`, `0.0`, etc.
- *Falsy* collections
    - `''`, `()`, `[]`, `{}`, `set()`, `range(0)`
- Other objects, normally *truthy*
    - Decided by method `__bool__`, or `__len__`

``` py
while v := input("val? "):  # sentinel, "" is falsy
    print(float(v) ** 2)
```

>

<https://docs.python.org/3/library/stdtypes.html#truth>

---

![](images/fun/magnetic-tape.png)
# Data streams

- **Stream**: abstraction for information stream
    - Reading and writing information on *any* I/O device (*file, and more*)
- **Text file**
    - Various encodings (*UTF-8*, or other)
    - Automatic conversions, e.g. `"\n"` → `"\r\n"`
- **Binary file**
    - Precise I/O, bytes are not converted
    - Any file... also a text file!

---

# Writing on file

- `open` function to access a file (text, by default)
    - Write or read mode: `"w"`, o `"r"` (def.)
- Writing to file: `print` funtion, or `write` method
- `with` section: at the end the file is closed (also in case of error)

``` py
with open("some_file.txt", "w") as f1:
    f1.write("First line\n")   # explicit newline
    f1.write("Second line\n")  # continue writing here...

with open("other_file.txt", "w") as f2:
    for x in range(10):
        print(x, x ** 2, file=f2)
```

---

# Reading from file

``` py
with open("some_file.txt", "r") as f1:
    first_line = f1.readline()
    second_line = f1.readline()
    # both strings contain '\n' at the end
    # at end of file, an empty string is read

with open("other_file.txt", "r") as f2:
    whole_text = f2.read()
    # do stg with whole_text

with open("last_file.txt", "r") as f3:
    for line in f3:
        # line contains '\n' at the end
        # strip() removes withespaces at both ends
        print(line.strip(), ':', len(line))
```

---

# Basic CSV files

``` py
matrix = []
cols, rows = 0, 0

with open("matrix.csv", "r") as file1:
    for line in file1:
        splitted = line.split(",")
        vals = [int(i) for i in splitted]
        matrix.append(vals)
        ## matrix += vals  # for a simple list
        rows += 1

if rows:
    cols = len(matrix[0])
```

>

Try to use `map`

---

# CSV module

``` py
import csv
matrix = []
with open("some.csv", newline="") as f:
    reader = csv.reader(f)
    for row in reader:
        matrix.append(row)
print(matrix)

with open("some.csv", "w", newline="") as f:
    writer = csv.writer(f)
    for row in matrix
        writer.writerow(row)
```

- Default reading: each line is a list of strings
- Default writing: quotes added only if necessary

>

<https://docs.python.org/3/library/csv.html>

---

# I/O for strings and console

- Strings as streams: `io.StringIO`
- Console as stream: `sys.stdin`, `sys.stdout`, `sys.stderr`

``` py
import io, sys

with io.StringIO() as output:
    output.write("First line.\n")
    print("Second line.", file=output)
    # Retrieve stream contents, i.e. "First line.\nSecond line.\n"
    contents = output.getvalue()
    sys.stdout.write(contents)
```

``` py
for line in sys.stdin:  # CTRL-D (Lin) or CTRL-Z (Win) to end the input
    print(len(line))    # notice '\n' at the end
```

---

![](images/fun/garbled-tape.png)
# Errors on file

- **Exceptions**: to handle unexpected cases separately
    - Error inside `try`: execution is interrupted immediately
    - `except` section is executed, to handle the specific type of error (multiple `except` sections are allowed)
    - A `with` section assures the file is closed

``` py
try:
    with open("other_file.txt", "r") as f:
        whole_text = f.read()
        # do stg with whole_text
except IOError as err:
    print("Oh, my!")
```

---

![](images/misc/merge-sign.png) ![](images/comp/merge.svg)
# Exercise: merge two sorted files

- Merge two files, *without* using lists
    - Each row contains a float value
    - Each file has its rows *already sorted*
    - The number of rows can vary
- Create a new file
    - It contains all values, from both files
    - All values are sorted
- Hint: at each step, just the two head values have to be compared
- To get example data, generate two random input files

---

![](images/misc/quiz.png)
# Exercise: courses' marks

- Analyze students' answers to questionnaires about courses
- Load a csv like one of these:
    - <https://www.dropbox.com/s/bfunquwvcg8mv09/report-2016-2017.csv?dl=1>
    - <https://www.dropbox.com/s/bj3rm90083d2rqz/report-2017-2018.csv?dl=1>
- Save a csv like this one:
    - <https://www.dropbox.com/s/0hud1kfeem2gtxz/marks.csv?dl=1>

---

# Scientific Python

---

# Python lists in memory

![large](images/scipy/python-list-list.svg)

---

# C arrays in memory

![large](images/scipy/c-array-array.svg)

---

# Number crunching in Python

- Inefficient **memory** layout
    - Multiple *dereferencing* steps
    - Each value is a “*fat*” object, an `int` takes dozens of bytes
    - Values are *not contiguous*, not cache friendly
- `a + b` executed as:
    - `a.__add__(b)`, or...
    - `b.__radd__(a)`, if `__add__` not found
- Python is **dynamic**
    - *Monkey patching*
    - Any method, special or not, can be changed or *decorated* at any time
    - Lookup at each call

---

# Method lookup

- In general, methods are handled as attributes
    - Complex lookup in multiple dictionaries
    - Starts with `a.__getattribute__("something")`
    - An *instance* has its own methods
    - A *class* has its own methods
    - A *base class* has its own methods
    - A *metaclass* may also alter the lookup
- “Special methods” are... *special*
    - Cannot be set for a single instance
    - Faster lookup
    - Still possibly going through multiple dictionaries

---

# Virtual environments

- Standard Python provides *virtual environments*
- To install different modules for different projects
- Ex.: *create* `myenv` env., *activate* it, *install* some modules

``` sh
$ python3 -m venv myenv
$ source myenv/bin/activate
$ python3 -m pip install numpy jupyter
```

- First command creates new folder, with a copy of CPython
- To change to another env, *deactivate* the current one
    - To delete an env, delete its folder
- On Windows, scripts are in the `Script` folder
    - `myenv\Scripts\activate.bat`

---

![large](images/dev/jupyter-notebook.png)
# Anaconda

- Popular open-source distribution of Python: <http://anaconda.com>
- Based on the Scipy.org ecosystem
- Modules for *data analysis* and *machine learning*
- Conda: package management
- Numba: JIT compiler, code vectorization
- Jupyter Notebook: browser-based REPL
    - `$ jupyter notebook`

---

# Anaconda environments

``` Shell
$ conda create --name myenv
$ conda install -n myenv numpy
$ conda activate myenv
...
$ conda deactivate myenv
$ conda remove --name myenv --all
```

- It is also possible to specify a Python version
    - `conda create -n myenv python=3.4`

---

# NumPy

---

![large](images/scipy/numpy-mem.svg) `np.zeros(shape=(2, 5), dtype=np.int32)`
# NumPy module

- Numeric, 1995; NumPy, 2006
- **N-dimensional array**
    - Homogeneously typed
    - Efficient memory layout (~ C)
- Efficient **algorithms**
    - Impl. Fortran, C/C++, Cython
    - Functionality comparable to basic *MATLAB*
- Base of *SciPy* ecosystem
    - MatPlotLib, SymPy, Pandas, Scikit-learn, Scikit-image
- Also used for *images*
    - In PyGame, Python bindings of OpenCV, etc.

---

# NumPy arrays

``` py
>>> import numpy as np
>>> a = np.array([2, 3, 4])  # type inference
>>> a
array([2, 3, 4])
>>> a.dtype
dtype('int64')
```

``` py
>>> b = np.array([1.2, 3.5, 5.1])  # type inference
>>> b.dtype
dtype('float64')
```

``` py
c = np.array([[1, 2], [3, 4]], dtype=np.float64)  # explicit type
>>> c
array([[1., 2.],
       [3., 4.]])
```

---

# Zeros, ones, ranges

``` py
>>> np.zeros(4)  # default dtype is np.float64
array([0., 0., 0., 0.])

>>> np.ones((2, 3), dtype=np.int16)  # dtype can also be specified
array([[1, 1, 1],
       [1, 1, 1]], dtype=int16)

>>> np.empty((2, 3))  # uninitialized, output may vary
array([[3.73603959e-262, 6.02658058e-154, 6.55490914e-260],
       [5.30498948e-313, 3.14673309e-307, 1.00000000e+000]])

>>> np.arange(10, 30, 5)  # from 10, to 30, step 5
array([10, 15, 20, 25])

>>> np.linspace(0, 2, 5)  # 5 numbers from 0 to 2
array([0, 0.5, 1, 1.5, 2])
```

---

# Reshape and resize

- **Shape**: the number of elements along each axis

``` py
>>> a = np.arange(12)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
>>> b = a.reshape(3, 4)  # a new array
>>> b
array([[0, 1, 2, 3],
       [4, 5, 6, 7],
       [8, 9, 10, 11]])
>>> b.shape
(3, 4)

>>> a.resize(2, 6)  # modifies the array in-place
>>> a
array([[0, 1, 2, 3, 4, 5],
       [6, 7, 8, 9, 10, 11]])
```

---

![large](images/scipy/stdev.svg) 68-95-99.7 rule
# Random

``` py
>>> # normal Gaussian, mean=0, stddev=1
>>> np.random.randn(2, 3)
array([[-0.452, -1.295, 0.379],
       [1.134, -0.554, -1.007]])

>>> np.random.rand(2, 3)  # uniform in [0.0, 1.0)
array([[0.152, 0.002, 0.219],
       [0.668, 0.840, 0.236]])

>>> np.random.randint(0, 10, (2, 3))  # discrete uniform in [0, 10)
array([[1, 9, 3],
       [3, 8, 9]])
```

>

https://docs.scipy.org/doc/numpy-1.16.0/reference/routines.random.html
<br>
`np.random.normal(mean, stddev, size=(2, 3))` ::= <br> `stddev * np.random.randn(2, 3) + mean`

---

# Shuffle and choice

``` py
>>> a = np.arange(6)
>>> np.random.shuffle(a)  # modifies the array itself
array([5, 3, 2, 4, 1, 0]])

>>> np.random.choice(["one", "two"], (2, 3))
>>> array([['two', 'one', 'one'],
   ['two', 'two', 'one']], dtype='<U3')
```

---

![](images/misc/memory.png)
# Exercise - Memory game

- `np.tile(a, reps)` repeats the whole `a`
    - `reps` can be a tuple
- `np.repeat(a, reps)` repeats each element of `a`
    - `a` is flattened
    - There's also a method of `ndarray`
- *Exercise*: create a matrix with couples
    - Given `n = rows * cols`
    - `n / 2` different values, each repeated twice
    - But random positions

---

# Vector data

- Each sample encoded as a 1D vector
- A *batch* of data encoded as a **2D tensor**
    - First axis: samples
    - Second axis: features
- Example: *actuarial dataset of people*
    - Each person has 3 features: age, ZIP code, income
    - Dataset of 100,000 people has shape (100000, 3)
- Example: *dataset of text documents*
    - Each document encoded as a vector of 20,000 values
    - Occurrences of each word, from a dict. of 20,000
    - Dataset of 500 documents: shape `(500, 20000)`

---

![large](images/scipy/tensor-timeseries.png)
# Timeseries or sequence data

- Each sample encoded as a 2D tensor: time sequence of vectors
- A *batch* of data encoded as a **3D tensor**
    - First axis: samples
    - Second axis: always the time axis (#1), by convention
- Example: *dataset of stock prices*
    - Each minute encoded as a vector of 3 values
    - Current price of stock, highest and lowest price in the past minute
    - Each sample, an entire day of trading: shape `(390, 3)`
    - 250 days’ worth of data: shape `(250, 390, 3)`

---

![large](images/scipy/tensor-image.png)
# Image data

- By convention, image tensors are always 3D
    - Height, width, color depth
    - 1D color channel for grayscale images
- A *batch* of data encoded as **4D tensor**
    - 128 grayscale 256x256 images: shape `(128, 256, 256, 1)`
    - 128 color images: shape `(128, 256, 256, 3)`
- Two conventions
    - *Channels-last* (TensorFlow): samples, height, width, color depth
    - *Channels-first* (Theano): samples, color depth, height, width

---

# Video data

- Each frame is a color image: 3D tensor
- Each video is a sequence of frames: 4D tensor
- A *batch* of data encoded as **5D tensor**
    - Samples, frames, height, width, color depth
- Example: *dataset of YouTube videos*
    - 144×256 video clip with 240 frames
    - 60-second video, sampled at 4 fps
    - A batch of four such video clips: shape `(4, 240, 144, 256, 3)`
    - If `dtype` is `float32`: 405 MB

---

# NumPy internals

- NumPy arrays consist of two major components
- Raw array data, **data buffer**
    - Contiguous (and fixed) block of memory
    - As arrays in *C* or *Fortran*
- Information about data, **metadata**
    - Start of data within buffer (offset)
    - Number of dimensions, size of each dimension
    - Separation between elements for each dimension, *stride*
    - Interpretation of data buffer, *dtype*
    - C-order (row major, default) or Fortran-order (column major)

---

# Multiple array views

- Possible to create a new array metadata object
    - Same data buffer, shared
    - New view, interpretation of that data buffer
- Slice, transpose, reshape etc.: data doesn't move
    - Different array object (metadata)
    - Different shape, offset, byte order, strides, etc.
    - But same *shared data buffer*
- New and independent array: `copy()` method

---

# Data type objects

- `dtype`: interpretation of the array buffer
    - *No rearrangement* of the data!
- Predefined types (i.e. `np.int32`), or string definitions
    - Examples: `"i2"`, `"f4"`, `"U10"` (10 chars), `"O"` (Py obj)
    - `"<"` little endian, `">"` big endian

``` py
a = np.array([1, 2, 3, 4], dtype="<i2")
a  # array([1, 2, 3, 4], dtype=int16)
a.data.tobytes()  # b'\x01\x00\x02\x00\x03\x00\x04\x00'
a.dtype = ">i2"
a  # array([256, 512, 768, 1024], dtype=int16)
a.dtype = "f2, 2i1"
a  # array([(6.e-08, [2, 0]), (2.e-07, [4, 0])],
   #       dtype=[('f0', '<f2'), ('f1', 'i1', (2,))])
   # aka: field named f0 holds a float16, field f1 holds two int8s
```

---

# Strides

![large](images/scipy/strides.png)

``` py
a = np.zeros(shape=(3, 3), dtype=np.int32)
a.strides  # (12, 4)
```

- Problem: byte-address of cell @ `(y, x)`?
    - `data + y * 12 + x * 4`

---

# Shape manipulation

``` py
>>> a = np.array([[2, 8, 0],
                  [4, 5, 1]], dtype=np.int64)
>>> a.strides
(24, 8)
>>> b = a.reshape(3, 2)  # new view, different shape
>>> b
array([[2, 8],
       [0, 4],
       [5, 1]])
>>> b.strides
(16, 8)
>>> b.ravel()  # flat view
array([2, 8, 0, 4, 5, 1])
```

>

`ravel` has optional param for `order`: "K" (as in memory), or "C" (default), or "F"

---

# Transposition

``` py
>>> a = np.array([[2, 8, 0],
                  [4, 5, 1]], dtype=np.int64)
>>> a.shape, a.strides
((2, 3), (24, 8))
>>> a.T  # transposed view, same as a.transpose()
array([[2, 4],
       [8, 5],
       [0, 1]])
>>> a.T.shape, a.T.strides
((3, 2), (8, 24))
>>> a.T.ravel()
array([2, 4, 8, 5, 0, 1])
>>> a.T.ravel("K")  # real order of data in memory!
array([2, 8, 0, 4, 5, 1])
```

---

![](images/scipy/row-col-major.svg)
# Row or column-major

- C-order, row-major: a row is contiguous
- F-order, col-major: a col is contiguous
- Strides: *indexing is invariant* wrt ordering
- But *cache efficiency* may be different

``` py
a = np.array([[1, 2], [3, 4]], order="C", dtype="i1")
a  # array([[1, 2], [3, 4]], dtype=int8)
a.strides  # (2, 1)
a.ravel("K")  # array([1, 2, 3, 4], dtype=int8)
```

``` py
a = np.array([[1, 2], [3, 4]], order="F", dtype="i1")
a  # array([[1, 2], [3, 4]], dtype=int8)
a.strides  # (1, 2)
a.ravel("K")  # array([1, 3, 2, 4], dtype=int8)
```

---

# Elementwise operations

- Most operators apply elementwise
- A new array holds the result
- Some ops act *in place* : `+=`, `*=`, ...

``` py
>>> a = np.arange(4)
>>> a ** 2
array([0, 1, 4, 9])
>>> a
array([0, 1, 2, 3])

>>> data = np.array([1.5, 2.5, 2.5])
>>> pred = np.array([1, 2, 3])
>>> data - pred
array([ 0.5,  0.5, -0.5])
>>> np.mean((data - pred) ** 2)  # mean squared error
0.25
```

---

# Universal functions

- Math funcs provided as “*universal functions*” (*ufunc*)
    - Operate elementwise and return an array
    - `sin`, `cos`, `exp` etc.

``` py
>>> a = np.linspace(0, np.pi/2, 4)
>>> np.sin(a)
array([0, 0.5, 0.8660254, 1])
```

``` py
>>> b = np.arange(3)
>>> b
array([0, 1, 2])
>>> np.exp(b)
array([1, 2.71828183, 7.3890561])
>>> np.sqrt(b)
array([0, 1, 1.41421356])
```

---

# Selection

``` py
>>> a = np.array([10, 11, 12, 13, 14])
>>> a[[True, False, True, False, False]]
array([10, 12])

>>> sel = a % 2 == 0  # Elementwise ops
>>> sel
array([True, False, True, False, True])

>>> a[sel]
array([10, 12, 14])

>>> a[a >= 12]
array([12, 13, 14])
```

---

# Operations by column or row

- Operations with a horizontal or vertical vector
- Each value in the vector is applied to a whole column, or row in the matrix

``` py
>>> b = np.array([[1, 2, 3],
                  [4, 5, 6]])
>>> b * np.array([1, 2, 3])  # [[1, 2, 3], [1, 2, 3]]
array([[ 1,  4,  9],
       [ 4, 10, 18]])
>>> b * np.array([[1], [2]])  # [[1, 1, 1], [2, 2, 2]]
array([[ 1,  2,  3],
       [ 8, 10, 12]])
```

---

![](images/scipy/matrix-mult.svg)
# Matrix multiplication

``` py
>>> A = np.array([[1, 1],
...               [0, 1]])
>>> B = np.array([[2, 0],
...               [3, 4]])
>>> A * B                 # elementwise product
array([[2, 0],
       [0, 4]])
>>> A @ B                 # matrix product (Py3.5)
array([[5, 4],
       [3, 4]])
>>> A.dot(B)              # another matrix product
array([[5, 4],
       [3, 4]])
```

---

# Aggregate functions

- `sum`, `prod`, `mean`, `median`, `std`, `var`, ...
- By default, array handled as a list of numbers, regardless of shape
- Aggegation can also be performed along a given axis

``` py
>>> b = np.arange(12).reshape(3, 4)
>>> b
array([[0, 1, 2, 3],
       [4, 5, 6, 7],
       [8, 9, 10, 11]])
>>> b.sum()              # guess also min and max
66
>>> b.sum(axis=1)        # sum of each row
array([6, 22, 38])
```

---

![](images/scipy/normalization.png)
# Normalizing and standardizing

- **Rescaling** a vector: add/sub a constant, then mult/div by a constant; e.g. `celsius = (fahrenheit - 32) * 5/9`
- **Normalizing** : rescaling by the *min* and *range* of the vector, to bring all the elements to a common `(0, 1)` interval
    - SVM, K-means etc.: Euclidean distance between points
    - Features with broader ranges would dominate; e.g. age vs. income
- **Standardizing** : rescaling by the *mean* and *stddev* of the vector, to get *normal* distributions (mean `0`, stddev `1`)

``` py
x = randn(1000) * 10
y = np.concatenate([randn(500), randn(500) + 5])
```

---

# Normalization by column

- Normalization and standardization by column
- To work by row, transpose data

``` py
>>> b = np.arange(12).reshape(3, 4)
>>> b_min = b.min(axis=0)
>>> b_range = b.max(axis=0) - b_min
>>> (b - b_min) / b_range
array([[0. , 0. , 0. , 0. ],
       [0.5, 0.5, 0.5, 0.5],
       [1. , 1. , 1. , 1. ]])
```

``` py
>>> (b - b.mean(axis=0)) / b.std(axis=0)
array([[-1.22474487, -1.22474487, -1.22474487, -1.22474487],
       [ 0.        ,  0.        ,  0.        ,  0.        ],
       [ 1.22474487,  1.22474487,  1.22474487,  1.22474487]])
```

---

# Indexing and slicing

- Multidimensional arrays: one index per axis
    - Indices are given in a tuple separated by commas

``` py
>>> def f(y, x): return 10 * y + x
>>> b = np.fromfunction(f, (3, 4), dtype=int)
>>> b
array([[0, 1, 2, 3],
       [10, 11, 12, 13],
       [20, 21, 22, 23]])
>>> b[2, 3]
23
>>> b[:, 1]  # each row in the second column of b
array([1, 11, 21])
>>> b[1:3, 0:2]
array([[10, 11],
       [20, 21]])
```

---

# Dots

- Dots (`...`) represent as many colons as needed
    - ... to produce a complete indexing tuple

``` py
>>> c = np.array( [[[0, 1, 2],       # a 3D array
                    [10, 12, 13]],
                   [[100,101,102],
                    [110,112,113]]])
>>> c.shape
(2, 2, 3)
>>> c[1,...]  # same as c[1,:,:] or c[1]
array([[100, 101, 102],
       [110, 112, 113]])
>>> c[...,2]  # same as c[:,:,2]
array([[2, 13],
       [102, 113]])
```

---

# Iterating

- Iterating over a multidim. array: wrt the first axis
- The `flat` attribute is an iterator over all the elements

``` py
>>> b
array([[0, 1, 2, 3],
       [10, 11, 12, 13],
       [20, 21, 22, 23]])
>>> for row in b: print(row)
[0 1 2 3]
[10 11 12 13]
[20 21 22 23]
>>> for val in b.flat: print(val, end=" ")
0 1 2 3 10 11 12 13 20 21 22 23
```

---

# Unique

``` py
>>> a = np.array([11, 11, 12, 14, 14, 14, 15, 15])
>>> np.unique(a)
array([11, 12, 14, 15])
>>> np.unique(a, return_counts=True)
(array([11, 12, 14, 15]), array([2, 1, 3, 2]))

>>> b = np.array([[1,  2,  3,  4],
                  [5,  6,  7,  8],
                  [9, 10, 11, 12],
                  [1,  2,  3,  4]])
>>> np.unique(b)  # get values, from flatten array
array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
>>> np.unique(b, axis=0)  # unique rows
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

---

![](images/misc/dice.png)
# Ex. - Rolling dice with Numpy

- Roll a pair of dice and get the result (sum)
- Repeat 1000 times
- Get the distribution of results
- How many times have you gotten 2, 3, 4, etc.

---

# Stacking

``` py
>>> a = np. array([[8, 8],
                   [0, 0]])
>>> b = np.array([[1, 8],
                  [0, 4]])
>>> np.vstack((a, b))
array([[8, 8],
       [0, 0],
       [1, 8],
       [0, 4]])
>>> np.hstack((a, b))
array([[8, 8, 1, 8],
       [0, 0, 0, 4]])
```

---

# Splitting into several arrays

- `hsplit` splits an array along its horizontal axis
    - Specify num of equally shaped arrays to return, or...
    - Specifying columns where division should occur
- `vsplit` works on the vertical axis

``` py
>>> a = np.array([[9, 5, 6, 3, 6, 8, 0, 7, 9],
                  [1, 4, 9, 2, 2, 1, 0, 6, 2]])
>>> np.hsplit(a, 3)   # Split a into 3
[array([[9, 5, 6], [1, 4, 9]]),
 array([[3, 6, 8], [2, 2, 1]]),
 array([[0, 7, 9], [0, 6, 2]])]
>>> np.hsplit(a, (3, 4))   # Split after 3rd and 4th column
[array([[9, 5, 6], [1, 4, 9]]),
 array([[3], [2]]),
 array([[6, 8, 0, 7, 9], [2, 1, 0, 6, 2]])]
```

---

# Linear algebra

- `linalg` submodule, imported *automatically* with `numpy`

``` py
>>> a = np.array([[1.0, 2.0],
                  [3.0, 4.0]])
>>> np.linalg.det(a)
-2.0
>>> b = np.linalg.inv(a)
>>> b
array([[-2., 1. ],
       [1.5, -0.5]])
>>> a @ b
array([[1., 0.],
       [0., 1.]])
>>> np.eye(2)  # unit 2x2 matrix; "eye" represents "I"
array([[1., 0.],
       [0., 1.]])
```

---

![large](images/misc/fair-tickets.jpg)
# Exercise - Fair tickets

- Cost of a ticket for a fair
    - 4.00€ for adults
    - 1,50€ for children
- At the end of the day
    - 2200 visitors have entered ( *b1* )
    - 5050€ have been collected ( *b2* )
- How many adults ( *x1* ) and how many children ( *x2* ) have entered?
    - Linear system: *`a @ x = b`*
    - Solve with matrix operations

---

# Solve a linear system

- Linear system
    - *`a @ x = b`*
- Solution
    - *`inv(a) @ a @ x = inv(a) @ b`*
    - *`x = inv(a) @ b`*

``` py
>>> a = np.array([[1., 1.],
                  [4., 1.5]])
>>> b = np.array([2200., 5050.])
>>> np.linalg.inv(a) @ b  # b: 1D, as column vector
array([700., 1500.])
>>> np.linalg.solve(a, b)
array([700., 1500.])
```

---

# Eigenvalues and eigenvectors

``` py
>>> a = np.array([[1.0, 2.0],
                  [3.0, 4.0]])
>>> w, v = np.linalg.eig(a)
>>> w  # eigenvalues
array([-0.37228132, 5.37228132])
>>> np.linalg.det(w[0] * np.eye(2) - a)  # det(λI − A) = 0
0.0
>>> v  # eigenvectors: normalized, in columns (⚠️)
array([[-0.82456484, -0.41597356],
       [ 0.56576746, -0.90937671]])
>>> np.sum(v**2, axis=0)  # magnitude = 1
array([1., 1.])
>>> a @ v.T[0] - w[0] * v.T[0]  # ∀i, A·vᵢ == λᵢvᵢ
array([0, 0])
```

---

# Pandas

---

# Aims of Pandas

- Library of data *structures* and data *analysis tools*
    - **Tabular data**: use cases similar to *R*-lang and *Excel*
    - High-performance, easy-to-use: built on top of *NumPy*
- Often used with *Jupyter Notebook*, Web app to create and share documents
    - Fragments of code in various languages
    - Can be executed and modified
    - Equations, visualizations, text
    - Useful for data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, etc.

---

![](images/misc/sidewinder.jpg)
# Creating a DataFrame

- **DataFrame** : ~ Excel worksheet
- *Values* as `np.array` + *indexes* for rows and cols

``` py
>>> import pandas as pd
```

``` py
>>> df = pd.DataFrame([[1, 2], [4, 5], [7, 8]],
                      index=['cobra', 'viper', 'sidewinder'],
                      columns=['max_speed', 'shield'])
>>> df
            max_speed  shield
cobra               1       2
viper               4       5
sidewinder          7       8
```

---

# Data summary

- Show top or bottom rows: `df.head()`, `df.tail()`
- Access values, index, columns: `df.values`, `df.index`, `df.columns`
- Transposed view: `df.T` (mind the column types ⚠️)

``` py
>>> df.describe()  # show static summary
       max_speed  shield
count        3.0     3.0
mean         4.0     5.0
std          3.0     3.0
min          1.0     2.0
25%          2.5     3.5
50%          4.0     5.0
75%          5.5     6.5
max          7.0     8.0
```

---

# Projection of columns

- Each column is a **`Series`**
    - *Values* as `np.array` + *name* + *index*

``` py
>>> df['max_speed']  # or simply df.max_speed
cobra         1
viper         4
sidewinder    7
Name: max_speed, dtype: int64

>>> df[['max_speed', 'shield']]
            max_speed  shield
cobra               1       2
viper               4       5
sidewinder          7       8
```

---

# Selection of rows

- With brackets, a slice of rows can be selected
    - Provide both start and stop, not a single position or label
    - ⚠️ With labels, *the stop label is included*

``` py
>>> df[1:3]
            max_speed  shield
viper               4       5
sidewinder          7       8

>>> df['viper':'sidewinder']
            max_speed  shield
viper               4       5
sidewinder          7       8
```

---

# Slicing in both axis

- Slicing by labels (*the stop label is included!*)

``` py
>>> df.loc['viper':'sidewinder', 'max_speed':'shield']
            max_speed  shield
viper               4       5
sidewinder          7       8
```

- Slicing by positions (*the stop position is not included!*)

``` py
>>> df.iloc[1:3, 0:2]
            max_speed  shield
viper               4       5
sidewinder          7       8
```

---

# Boolean filtering

``` py
>>> df[[False, False, True]]
            max_speed  shield
sidewinder          7       8

>>> df[df['shield'] > 6]
            max_speed  shield
sidewinder          7       8

>>> df.loc[df['shield'] > 6, 'max_speed']
            max_speed
sidewinder          7
```

---

# Setting

``` py
>>> df2 = df.copy()
>>> df2.loc[['viper', 'sidewinder'], ['shield']] = 50
>>> df2
            max_speed  shield
cobra               1       2
viper               4      50
sidewinder          7      50
```

---

# Adding a column, is-in

``` py
>>> df2 = df.copy()
>>> df2['label'] = ['one','two','three']
>>> df2
            max_speed  shield  label
cobra               1       2    one
viper               4       5    two
sidewinder          7       8  three

>>> df2[df2['label'].isin(['one','two'])]
            max_speed  shield  label
cobra               1       2    one
viper               4       5    two
```

---

# Sorting by value or index

``` py
>>> df.sort_values(by='shield')  # asc values of shield
            max_speed  shield
cobra               1       2
viper               4       5
sidewinder          7       8

>>> df.sort_index(axis=1, ascending=False)  # desc column names
            shield  max_speed
cobra            2          1
viper            5          4
sidewinder       8          7
```

---

# DataFrame from a dict, csv, xlsx

``` py
df1 = pd.DataFrame({
            'shield': np.array([2, 5, 8], dtype='int32'),
            'max_speed': np.array([1, 4, 7], dtype='int32') },
        index=['cobra', 'viper', 'sidewinder'])

df2 = pd.read_csv('data.csv')
df2.to_csv('data.csv')

df3 = pd.read_excel('data.xlsx')
df3.to_excel('data.xlsx')
```

---

# Histogramming

``` py
>>> s = pd.Series(np.random.randint(6, size=10))  # [0, 6)
>>> s
0    4
1    2
2    1
3    2
...
dtype: int64
>>> s.value_counts()  # result is also a Series
4    5
6    2
2    2
1    1
dtype: int64
```

---

![](images/misc/dice.png)
# Ex. - Rolling dice with Pandas

- Roll a pair of dice and get the result (sum)
- Repeat 1000 times
- Get the distribution of results
- How many times have you gotten 2, 3, 4, etc.

---

# Concat and merge

- Take multiple pandas and put them together
- `concat()`: one dataframe or series below the other
    - `join`: one of `'outer'`, `'inner'`
    - Default is `'outer'`, return all columns
- `merge()`: rows are joined when they have the same *key*
    - `how`: one of `'left'`, `'right'`, `'outer'`, `'inner'`
    - Default is `inner`: *key* must occurr in *both* frames

``` py
>>> l = pd.DataFrame({'key': ['foo', 'bar'], 'lval': [1, 2]})
>>> r = pd.DataFrame({'key': ['foo', 'bar', 'baz'], 'rval': [3, 4, 5]})
>>> pd.merge(l, r, on='key')
   key  lval  rval
0  foo     1     4
1  bar     2     5
```

---

# Group-by

- Split data into groups based on some criteria
- Apply a function to each group independently
- Combine the results into a data structure

``` py
>>> df = pd.DataFrame({'A' : ['foo', 'bar', 'foo', 'bar',
                              'foo', 'bar', 'foo', 'foo'],
                       'B' : ['one', 'one', 'two', 'three',
                              'two', 'two', 'one', 'three'],
                       'C' : np.random.randn(8),
                       'D' : np.random.randn(8)})
>>> df.groupby('A').sum()  # only numeric data
            C        D
A
bar -2.802588  2.42611
foo  3.146492 -0.63958
```

---

# Pivot table

- Transform the dataframe
    - Using values as new rows and columns titles
    - Cells contain *averages*, i.e., `aggfunc=np.mean`

``` py
>>> df = pd.DataFrame({
        'A' : ['one', 'one', 'two', 'three'] * 3,
        'B' : ['foo', 'foo', 'foo', 'bar', 'bar', 'bar'] * 2,
        'C' : np.random.randn(12)})
>>> pd.pivot_table(df, index='A', columns='B', values='C')
B           bar       foo
A
one    0.463952  0.419066
three -0.660418  0.991739
two    0.091446  0.236650
```

---

# MatPlotLib

---

![large](images/scipy/pyplot-1.png) ![](images/scipy/pyplot-2.png)
# MatPlotLib plots

- Plotting library, based on *NumPy*

``` py
import matplotlib.pyplot as plt
```

``` py
plt.plot([1, 2, 3, 4])
plt.ylabel('some numbers')
plt.show()
```

``` py
# plot x versus y
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.show()
```

>

[matplotlib.org](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)

---

![large](images/scipy/pyplot-3.png)
# Formatting the plot

``` py
plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'ro')
plt.axis((0, 6, 0, 20)) # xmin, xmax, ymin, ymax
plt.show()
```

``` py
# example format strings
'b'    # blue markers with default shape
'ro'   # red circles
'g-'   # green solid line
'--'   # dashed line with default color
'k^:'  # black triangle_up markers connected by a dotted line
```

>

<https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html>
<br>
<https://www.mathworks.com/help/matlab/ref/linespec.html>

---

![large](images/scipy/pyplot-4.png)
# Plotting NumPy arrays

``` py
# evenly sampled time at 200ms steps
t = np.arange(0, 5, 0.2)

# red dashes, blue squares and green triangles
plt.plot(t, t, 'r--',
         t, t**2, 'bs',
         t, t**3, 'g^')
plt.show()
```

>

To use a logarithmic scale: `plt.yscale('log')`

---

![large](images/scipy/pyplot-5.png)
# Plotting data from dict

``` py
rnd = np.random
data = {'a': np.arange(50),
        'c': rnd.randint(0, 20, 50),
        'd': 100 * abs(rnd.randn(50))}
data['b'] = data['a'] + 10 * rnd.randn(50)

plt.scatter('a', 'b', c='c', s='d', data=data)
plt.xlabel('entry a')
plt.ylabel('entry b')
plt.show()

# s for size, c for color
# 'c': one int out of 20 (index for a color-map)
```

---

![large](images/scipy/pyplot-6.png)
# Subplots in row

- Compare `bar`, `scatter` and `plot`

``` py
names = ['group_a', 'group_b', 'group_c']
values = [1, 10, 100]

plt.figure(1, figsize=(9, 3))  # inches

plt.subplot(131)  # rows, cols, index
plt.bar(names, values)
plt.subplot(132)  # rows, cols, index
plt.scatter(names, values)
plt.subplot(133)  # rows, cols, index
plt.plot(names, values)
plt.suptitle('Categorical Plotting')
plt.show()
```

---

![large](images/scipy/pyplot-7.png)
# Subplots in column

``` py
def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)

t1 = np.arange(0.0, 5.0, 0.1)
t2 = np.arange(0.0, 5.0, 0.02)

plt.subplot(211)  # rows, cols, index
plt.plot(t1, f(t1), 'bo', t2, f(t2), 'k')

plt.subplot(212)  # rows, cols, index
plt.plot(t2, np.cos(2*np.pi*t2), 'r--')
plt.show()
```

---

# Figures

- Handle multiple separate figures at the same time
- Identified by a number or a label

``` py
t = np.arange(0, 5, 0.2)
fig = plt.figure("squares")
plt.plot(t, t, 'r--')
plt.plot(t, t**2, 'bs')

fig = plt.figure("cubes")
plt.plot(t, t, 'r--')
plt.plot(t, t**3, 'g^')

# save figures
for label in plt.get_figlabels():
    fig = plt.figure(label)
    fig.savefig(label + ".pdf")
```

---

![](images/scipy/dice-counts.png)
# Histogram of dicrete values

- Count some discrete values
- ❓ E.g.: roll two dice
    - Count the occurences of the results
- Pandas: `Series.value_counts`
- Numpy: `np.unique`

``` py
dice = np.random.randint(1, 7, 100)
dice += np.random.randint(1, 7, 100)
values, counts = np.unique(dice, return_counts=True)
print(f"{values=}\n{counts=}")
plt.bar(values, counts)
plt.show()
```

``` text
values=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
counts=[3, 5, 6, 13, 9, 16, 20, 13, 7, 7, 1]
```

---

![large](images/scipy/rugs.png) ![large](images/scipy/pyplot-8.png)
# Histogram and text

- Show the distribution of some continuous values (~ *Dirac deltas*)
- ❓ E.g.: Round-Trip Times

``` py
mu, sigma = 100, 15  # try with less data
x = mu + sigma * np.random.randn(10000)

# histogram of data, with normalized area
plt.hist(x, bins=50, density=True)

# plt.plot(x, [0]*len(x), "k|")
plt.xlabel('Smarts')
plt.ylabel('Probability')
plt.title('Histogram of IQ')
plt.text(60, .025, r'$\mu=100,\ \sigma=15$')
plt.grid(True, alpha=0.75)
plt.show()
```

---

![large](images/scipy/sns-distplot.png)
# Seaborn

- High level data visualization library based on *MatPlotLib*
- `distplot`: histogram + *kde (kernel density estimation)*
    - `int` opts.: `bins`
    - `bool` opts.: `kde`, `rug`, `hist`

``` py
import seaborn as sns
```

``` py
x = np.random.randn(100)
sns.displot(x, kde=True)  # try rug=True, kind="kde"
plt.show()
```

>

<http://courses.ieor.berkeley.edu/ieor165/lecture_notes/ieor165_lec10.pdf>

---

![large](images/scipy/sns-regplot.png)
# Linear regression

- Best fitting linear model
    - Minimize the *mean squared error*
    - Translucent bands: confidence interval
- *Correlation* coeff., *Pearson's r* : `[-1, 1]`
- Statistical significance, *p-value* : `≤0.05`
    - Same (≥) `r`, under *null hypotesis*?

``` py
from scipy import stats

tips = sns.load_dataset("tips")
sns.regplot(tips.total_bill, tips.tip)
plt.show()

x, y = tips.total_bill, tips.tip
## r_value, p_value = stats.pearsonr(x, y)
slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
```

---

# Fitting data wrt a model

- ➊ Define the model as a parametric function
- ➋ Find optimal parameters: `curve_fit`
- ➌ Measure the error

``` py
from scipy.optimize import curve_fit
## from sklearn.metrics import mean_squared_error
## from sklearn.metrics import mean_squared_log_error

x = np.arange(5); y_true = x ** 2  # data
def f(x, a, b): return a * x + b   # model

popt, _ = curve_fit(f, x, y_true)  # [4, -2]
y_pred = f(x, *popt)  # arguments unpacking
mse = ((y_true - y_pred) ** 2).mean()  # 2.8
```

---

![large](images/scipy/curve-fit.png)
# Comparing models

``` py
x = np.arange(5); y_true = x ** 2
plt.plot(x, y_true, "ro")

def f1(x, a, b): return a * x + b
def f2(x, a, b, c): return a * b ** x + c
models = [(f1, "b--"), (f2, "g--")]  # or lambdas

for f, style in models:
    popt, _ = curve_fit(f, x, y_true)
    y_pred = f(x, *popt)  # arguments unpacking
    mse = ((y_true - y_pred) ** 2).mean()
    print(style, mse, popt)
    plt.plot(x, y_pred, style)

plt.show()
```

---

![large](images/scipy/tips-kde.png)
# Laboratory 1

- Load the tips dataset of Seaborn
- Select and separate the tips at lunch and dinner
- Compare the two distributions of tips

---

![large](images/misc/quiz.png)
# Laboratory 2

- Students' answers to questionnaires about courses
    - Data transform to eval marks
    - Density plots of marks
    - Use of multiple figures
- Considering the units
    - Evaluate the linear regression and correlation
    - Average marks against number of students

>

<https://www.dropbox.com/s/bfunquwvcg8mv09/report-2016-2017.csv?dl=1>
<br>
<https://www.dropbox.com/s/bj3rm90083d2rqz/report-2017-2018.csv?dl=1>
<br>
<https://www.dropbox.com/s/shlodh26c06eaib/questionari.odp?dl=1>
<br>
<https://www.dropbox.com/s/w3yany4d2mzn4x0/questionario-stage-2018.xlsx?dl=1>

---

![](images/scipy/gilet-jaunes-graph.png) ![large](images/scipy/gilet-jaunes-degree.png)
# Laboratory 3

- Graphs of social network users
    - Evaluate the degree of each node
    - Evaluate and plot the distribution of degrees
- Compare the distributions with a power-law function
    - `y = a·x⁻ᵏ`, `2≤k≤3`

>

Users in the `#giletjaunes` channel of Twitter, splitted in communities; all edges are symmetrical (following ⇄)
<br>
<https://www.dropbox.com/s/4f23jhw7enfz7c8/gilet-jaunes.zip?dl=1>
