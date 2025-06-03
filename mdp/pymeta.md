![](images/metaprogramming.png)
# Metaprogramming in Python

---

# Metaprogramming

- Programming technique in which computer programs have the ability to…
    - **Treat programs as their data**
- A (meta)program can be designed to:
    - Read or analyse other programs
    - Generate or transform other programs
    - Even modify itself while running
- *Metalanguage* : language in which the metaprogram is written
- *Reflection* : ability of a programming language to be its own metalanguage

>

<https://en.wikipedia.org/wiki/Metaprogramming>

---

# Quine

- Generative programming (code generation)
    - *Quine* (self-generating program)

``` py
>>> s = "s = %r\nprint(s%%s)"
>>> print(s%s)

s = "s = %r\nprint(s%%s)"
print(s%s)
```

---

# Generative programming

- Run time code generation or evalutation
    - `exec` : execute any code (w/o direct result)
    - `eval` : evaluate a single *expression*

``` py
>>> exec("d = {'code': 'run time created!'}")
>>> d["code"]
"run time created!"
```

``` py
>>> s = "{'code': 'evaluated'}"
>>> d = eval(s)
>>> d["code"]
"evaluated"
```

---

# Other language generation

``` py
s = "<?php\n"
s +="    $x = 0;\n"
for i in range(1, 4):
    s += f"    $x = $x + {i};\n"
s += "    print($x);\n ?>"
open("dummy.php", "w").write(s)
```

``` php
<?php
    $x = 0;
    $x = $x + 1;
    $x = $x + 2;
    $x = $x + 3;
    print($x);
 ?>
```

---

# Program generators

- Programs to generate code (for example classes)

``` py
class_name = "User"
class_code = f"""

class {class_name}:

    def __init__(self, id=""):
        self.__id = id

    def __repr__(self):
        return "I’m a {class_name} instance; my id is " + self.__id
"""

print(class_code)
```

---

# Generated code

``` py
class User:

    def __init__(self, id=""):
        self.__id = id

    def __repr__(self):
        return "I’m a User instance; my id is" + self.__id
```

---

# More metaprogramming

- But metaprogramming is much more…
    - **Reflection**
    - **Self-modifying code**
    - **Meta-classes**
    - **Descriptors**
- Simply, doing things on code

---

# Reflection

---

![](images/dev/reflection.png)
# Reflection

- Ability of a computer program
- to **examine**, **inspect**, and **modify**
- its own structure and behaviours
- at ***runtime***

---

# How are we made?

- Discover the type of an object
- Discover other info about an object
- Discover the methods of a class…

``` py
>>> x = 1
>>> x.__class__  # or: type(x)
<class "int">
>>> x.__class__.__name__
"int"
>>> x.__class__.__class__
<class "type">
>>> x.__class__.__class__.__class__
<class "type">
>>> …
```

- `type` is a *type* ; its *type* is `type`

---

# A dummy class

``` py
class Dummy:
    """DOCSTRING::: Dummy class. It manages just a variable."""

    def __init__(self, x):
        self.__x = x

    def get_x(self):
        return self.__x

    def set_x(self, x):
        self.__x = x
```

---

# Class inspection

``` py
p = Dummy(5)
print("Instance class   = ", p.__class__)  # or: type(p)
print("Instance content = ", p.__dict__)   # or: vars(p)
print()
for k, v in vars(Dummy).items():
    print(k, v)
print()
print("Class methods (supporting __call__)")
for k, v in vars(Dummy).items():
    if callable(v):
        print("Method : ", v)
```

---

# Result of inspection

``` txt
Instance class   =  <class "__main__.Dummy">
Instance content =  {"_Dummy__x": 5}

__module__ __main__
__weakref__ <attribute "__weakref__" of "Dummy" objects>
set_x <function Dummy.set_x at 0x7fcf4f373400>
__doc__ DOCSTRING::: Dummy class. It manages just a variable
__init__ <function Dummy.__init__ at 0x7fcf4f3730d0>
__dict__ <attribute "__dict__" of "Dummy" objects>
get_x <function Dummy.get_x at 0x7fcf4f373378>

Class methods (supporting __call__)
Method :  <function Dummy.set_x at 0x7fcf4f373400>
Method :  <function Dummy.__init__ at 0x7fcf4f3730d0>
Method :  <function Dummy.get_x at 0x7fcf4f373378>
```

---

# Self-modifying code

- Adding methods dinamically to a class

``` py
>>> p = Dummy(5)
>>> g = Dummy(10)
>>> def inc_x(self):
        self.set_x(self.get_x() + 1)
```

``` py
>>> Dummy.inc_x = inc_x
>>> p.inc_x()
>>> p.get_x()
6
>>> g.inc_x()
>>> g.get_x()
11
```

---

# Modify a single instance

- Adding methods dinamically to an instance

``` py
>>> p.inc_x = inc_x  # p, g, inc_x: same as before
>>> p.inc_x()
TypeError: inc_x() missing 1 required positional argument: "self"
```

``` py
>>> import types
>>> type(p.get_x) == types.MethodType
True
>>> p.inc_x = types.MethodType(inc_x, p)  # ~ partial application
>>> p.inc_x()
>>> p.get_x()
6
>>> g.inc_x()
AttributeError: "Dummy" object has no attribute "inc_x"

---

# Decorators

---

![](images/dev/decorator.jpg)
# Decorator

- A function that creates a wrapper around another function
- The wrapper is a *new function*
    - Same signature of the original function <br> (Same arguments, same return value)
    - But some kind of *extra processing* is carried out

---

# Print debugging

- A simple problem of debugging, to explain the basics
    - We have a simple function…
    - And the same function with debugging
- Uhm… it looks like a speedy way to debug

``` py
def add(x, y):
    return x + y
```

``` py
def add(x, y):
    print("Add")
    return x + y
```

---

![](images/misc/bleah.jpg)
# Too much printing

- Many functions with debug…

``` py
def add(x, y):
    print("Add")
    return x + y

def sub(x, y):
    print("Sub")
    return x - y

def mul(x, y):
    print("Mul")
    return x * y

def div(x, y):
    print ("Div")
    return x / y
```

---

# Function decorator

- A **decorator** creates a *wrapper* function
    - Gets another function as argument
    - Creates a debugging wrapper
    - Returns the wrapper
- `@wraps` copies metadata
    - Name, doc string and function attributes

``` py
from functools import wraps
def debug(func):
    msg = func.__qualname__
    @wraps(func)    ## mandatory or weird things happen!
    def wrapper(*args, **kwargs):
        print(msg)
        return func(*args, **kwargs)  * func by closure
    return wrapper
```

---

# Decorator syntax

- Function definition and wrapping often occur together
- It’s the same as using
    - `func = debug(func)`

``` py
@debug
def add(x,y):
    return x + y
```

``` py
def add(x,y):
    return x + y
add = debug(add)
```

---

# Decorator with arguments

```
@decorator(args)
def func():
    pass
```

- Evaluated as

``` py
func = decorator(args)(func)
```

- We define a function…
    - Which returns a decorator…
    - Which finally returns a wrapper

---

# Example of decorator with arguments

- Debug with prefixes

``` py
def debug(prefix=""):
    def decorate(func):
        msg = prefix + " ::: " + func.__qualname__
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(msg)
            return func(*args, **kwargs)
        return wrapper
    return decorate

@debug(prefix="ADD")
def add(x, y):
    return x + y
```

---

![](images/dev/metaprogramming.png)
# Metaclasses

---

# Class decorators

- How to decorate all methods at once?

``` py
@classdecorator
class Spam:
    def grok(self):
        pass
    def bar(self):
        pass
    def foo(self):
        pass
```

---

# Decorate all methods

- One decorator application
    - Covers all definitions within the class
- It even mostly works
    - Walk through class dictionary
    - Identify each callable (e.g., method)
    - Wrap it with a decorator

``` py
def debugmethods(cls):
    for name, val in vars(cls).items():
        if callable(val):
            setattr(cls, name, debug(val))
    return cls
```

---

![](images/dev/bleah.jpg)
# Decorating many classes

- What if I have more classes ?

``` py
@debugmethods
class Base:
    pass

@debugmethods
class First(Base):
    pass

@debugmethods
class Second:
    pass

@debugmethods
class Third:
    pass
```

---

# Solution: a metaclass

- What is a **metaclass** ?
    - The class of a class
- A class is an instance of a metaclass
    - Like a *class* defines how its instances behave
    - A *metaclass* defines how its classes behave

![](images/dev/metaclass.png)

---

# Inquire about the type

- For a built-in type?

``` py
>>> x = 1
>>> type(x)
<class "int">
>>> type(int)  # type(type(x))
<class "type">
```

- And for a custom class?

``` py
>>> d = Dummy(10)
>>> type(d)
<class "classes.Dummy">
>>> type(Dummy)  # type(type(d))
<class "type">
```

---

# Default metaclass: type

- `type` is itself a class and it is its own type
- A metaclass is most commonly used as a class-factory
    - Like you create an instance of the class by using the class
    - Python creates a **new class** by using the **metaclass**
- We can do “extra things” when creating a class!

---

# Creating types

``` py
class Base:
    pass

class Example(Base):
    def __init__(name):
        self.name = name
    def whoami():
        return "I’m " + self.name
```

``` py
>>> print ("Base class = ", Base.__class__)
("Base class = ", <type "type">)
>>> print ("Example class = ", Example.__class__)
("Example class = ", <type "type">)
```

---

# Class deconstructing

- Consider the class `Example`

``` py
class Example(Base):
    def __init__(name):
        self.name = name
    def whoami():
        return "I’m " + self.name
```

- What are its components?
    - Name : `"Example"`
    - Base classes, through `__mro__` : `(Base,)` <br> (*MRO*: Method Resolution Order)
    - Functions : `(__init__,whoami)`
- **What happens during class definition?**

---

# Class definition: step 1

- Body of class is isolated

``` py
body = """
    def __init__(self, name):
        self.name = name
    def whoami(self):
        return "I’m a Example object"
"""
```

---

# Class definition: step 2

- Class dictionary is created

``` py
clsdict = type.__prepare__("Example", (Base,))
```

- This dictionary serves as local namespace
    - For statements in the class body
    - By default, it’s a simple dictionary (more, later)

---

# Class definition: step 3

- Body is executed, in the context of `clsdict`

``` py
exec(body, globals(), clsdict)
```

- Consequently, `clsdict` is populated

``` py
>>> clsdict
{"whoami": <function whoami at 0x7f4cd58a2598>,
 "__init__": <function __init__ at 0x7f4cd77dae18>}
>>> ne = Example("myname")
>>> ne.whoami()
I’m a Example object
```

---

# Changing the metaclass

- **`metaclass`** keyword argument
- Sets the metaclass used for creating the type
- By default, it’s set to `type`
- But you can change it to something else

``` py
class Example(Base, metaclass=type):
    def __init__(name):
        self.name = name
    def whoami():
        return "I’m " + self.name
```

---

# Define a new metaclass

- Typically, inherit from `type`
- Redefine `__new__` (the new class is created)
- And/or `__init__` (the class already exists)

``` py
class MyType(type):
    def __new__(cls, name, bases, clsdict):
        clsobj = super().__new__(cls, name, bases, clsdict)
        return clsobj

    def __init__(self, name, bases, dict):
        super().__init__(self, name, bases, dict)
```

---

# Using a metaclass

- Metaclasses act at the time of class definition
    - Can inspect class data
    - Can modify class data
- Question: why would you use one?
    - Metaclasses propagate down hierarchies
    - Think of it as a genetic mutation

---

# Metaclass for decorating classes

- Class gets created normally
- Immediately wrapped by class decorator

``` py
def debugmethods(cls):
    for name, val in vars(cls).items():
        if callable(val):
            setattr(cls, name, debug(val))
    return cls

class DebugMeta(type):  # metaclass
    def __new__(cls, clsname, bases, clsdict):
        clsobj = super().__new__(cls, clsname, bases, clsdict)
        clsobj = debugmethods(clsobj)
        return clsobj
```

---

# Boring operations

``` py
class Stock:
    def __init__(self, name, shares, price):
        self.name = name
        self.shares = shares
        self.price = price

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Host:
    def __init__(self, address, port):
        self.address = address
        self.port = port
```

---

# Inheritance and reflection

``` py
class Structure:
    _fields = []
    def __init__(self, *args):
        if len(args) != len(self._fields):
            raise TypeError("Wrong # args")
        for name, val in zip(self._fields, args):
            setattr(self, name, val)

class Stock(Structure):
    _fields = ["name", "shares", "price"]

class Point(Structure):
    _fields = ["x", "y"]

class Host(Structure):
    _fields = ["address", "port"]
```

---

![](images/misc/idea.jpg)
# Setter and getter

``` py
class P:
    def __init__(self,x):
        self.__x = x
    def get_x(self):
        return self.__x
    def set_x(self, x):
        self.__x = x

p1 = P(5)
p2 = P(10)
p1.set_x(p1.get_x() + p2.get_x())
```

---

# Decorators for properties

``` py
class P:
    def __init__(self, x):
        self.__x = x

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, x):
        self.__x = x

p1 = P(5)
p2 = P(10)
p1.x = p1.x + p2.x
```

---

![](images/rel_users_groups.png)
# Metaclasses in Django

- Django is a MVC framework in Python
- Model layer, *ORM*: Object–Relational Mapping
    - Maps DB tables into classes
    - Maps DB relations into classes-relations
- *Scaffolding*: basic views for CRUD ops etc.
- Example:

``` py
class Group(models.Model):
    name = models.CharField(max_length=200)

class User(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=200)
    group = models.ForeignKey(Group, related_name="group_users")
```

---

# Simplified ModelBase

- Metaclass for all model classes, ~ Django

``` py
def save_func(self):
    for elem in vars(self):
        print(elem, getattr(self, elem))

class ModelBase(type):
    """Metaclass for all models.
    """
    def __new__(cls, name, bases, attrs):
        super_new = super(ModelBase, cls).__new__
        module = attrs.pop("__module__")
        new_class = super_new(cls, name, bases, {"__module__": module})
        setattr(new_class, "save", save_func)
        return new_class
```

---

# Simplified Model

``` py
class Model(metaclass=ModelBase):
    # …

class Book(Model):
    isbn = None
    title = None
    price = None
    # …

b = Book()
b.title = "Python metaprogramming"
b.price = 10.99
b.isbn = "ABC9392345678"
b.save()
```

---

# Metaprogramming uses

- Decorators used in many popular modules
    - *Cython* - Static compiler for Python code
    - *Numba* - Jit compiler for Python code
    - *`functools.lru_cache`* - Memoization
- Metaclasses used in many popular frameworks
    - *Django*, *Flask*, etc. - Web apps
    - *`abc.ABCMeta`* - Abstract Base Class (i.e., *interface*)
