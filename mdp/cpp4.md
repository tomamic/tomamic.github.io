![](images/dev/cpp.svg)
# C++ internals
## Object oriented programming in C++

---

# Function pointers

---

# Initializing function pointers

- **Declarating a function pointer.** Write out the declaration of a function, but with `(*func_name)` where you'd normally just put `func_name`
- **Initializing.** Give it the address of a function in your program; the syntax is like any other variable

``` cpp
void my_int_func(int x) {
    cout << x << endl;
}

int main() {
    void (*foo)(int);
    foo = &my_int_func;
}
```

---

# Using a function pointer

- **Calling the pointed function.** Treat the function pointer as though it were the name of the function
    - The act of calling it performs the dereference; there's no need to do it yourself

``` cpp
int main() {
    void (*foo)(int);
    foo = &my_int_func;

    /* call my_int_func */
    foo(2);

    /* no need to write (*foo)(2), but you can */
    (*foo)(2);
}
```

---

# Example of a callback

``` cpp
void qsort(void *base, size_t nmemb, size_t size,
            int(*compar)(const void *, const void *));
```

- `compar` is a function pointer (*callback*)
    - Negative result if 1st < 2nd arg
    - Zero if they are equal
    - Positive result if 1st > 2nd arg

---

# A comparison function

``` cpp
int int_sorter(const void * a, const void * b) {
    return *(int*)a - *(int*)b;
}

int main() {
    int array[10];
    for (int i = 0; i < 10; ++i) {
        array[ i ] = 10 - i;
    }
    qsort(array, 10, sizeof(int), int_sorter);
    for (int i = 0; i < 10; ++i) {
        cout << array[i] << endl;
    }

}
```

---

# Function pointers summary

- **Declaring.** As though you were declaring a function, except with a name like `*foo` instead of just `foo`

``` cpp
void (*func_pointer)(int);
```

- **Initializing.** Get the address of a function simply by naming it

``` cpp
void foo();
func_pointer = foo;
```

- Or, *optionally*, by prefixing the name with an ampersand

``` cpp
void foo();
func_pointer = &foo;
```

---

# Function pointers summary

- **Invoking.** Just as if you were calling a function

``` cpp
func_pointer( arg1, arg2 );
```

- Or, optionally *dereferencing* the function pointer before calling

``` cpp
(*func_pointer)( arg1, arg2 );
```

---

# Function objects

- C++ allows you to overload `operator()`, the *function call* operator
    - Flexible: it can take any number of arguments of any types and return anything it wishes to
    - All the other operators have a fixed number of arguments
- Mechanism to create *function objects*, aka *functors*
    - Treated as though they are a function or function pointer
    - Use a a functor's constructor to embed information that is later used inside the implementation of `operator()`

---

# Functor example

``` cpp
class MyFunctorClass {
public:
    MyFunctorClass (int x) : x_(x) {}
    int operator() (int y) { return x_ + y; }
private:
    int x_;
};

int main() {
    MyFunctorClass addFive(5);
    std::cout << addFive(6);
    return 0;
}
```

---

# Lambda functions

- `[ capture-list ] ( params ) { body }`
- *Capture list*, for variables to be used in body of lambda
    - `[a,&b]`, captures `a` by *copy*, and `b` by *reference*
    - `[&]`, captures everything by *reference*
    - `[=]`, captures everything by *copy*
    - `[]` captures nothing

``` cpp
vector<int> c = {1, 2, 3, 4, 5, 6, 7};
int x = 5;
c.erase(remove_if(c.begin(), c.end(),
    [x](int n) { return n < x; }), c.end());
```

>

<https://github.com/tomamic/paradigmi/blob/master/cpp2016/queens/gamegui.cpp>

---

# C++, or C with classes

---

![](images/sys/under-hood.png)
# C++: Under the Hood

- *Jan Gray*, March 1994
    - Engineer @ Microsoft Visual C++ compiler unit
- Understand how your language is implemented
    - No wonder of “What on earth is the compiler doing here?”
    - Confidence to use the new features
    - Insight when debugging and learning other language features
    - Relative costs of different coding choices

>

<https://www.dropbox.com/s/vkzs4480u3e26mo/jangrayhood.pdf?dl=1>
<br>
<https://www.drdobbs.com/cpp/multiple-inheritance-considered-useful/184402074>

---

# Simple C++ class

``` cpp
class Accumulator {
private:
    int value = 0;
public:
    void add(int inc) { value += inc; }
    int get_val() { return value; }
};
```

``` cpp
int main() {
    Accumulator a;
    a.add(10);
    cout << a.get_val() << "\n";
}
```

---

# The traditional C-like way

``` cpp
struct Accumulator {
    int value;
};
void Accumulator__add(Accumulator* thiz, int inc) {
    (*thiz).value += inc;
}
int Accumulator__get_val(Accumulator* thiz) {
    return (*thiz).value;
}
```

``` cpp
int main() {
    Accumulator a; a.value = 0;
    Accumulator__add(&a, 10);
    cout << Accumulator__get_val(&a) << "\n";
}
```

---

# Hidden this, exposed

- When we call `a.add(10)`, compiler actually calls stg. like `Accumulator__add(&a, 10)`
    - Real name mangling is more complicated and proprietary
- Inside `add` f., pointer `this` holds address of object `a`
    - Any member variables inside `add` f. are prefixed with `this->`
    - So when we say `value += inc` …
    - Compiler actually executes `this->value += inc`

---

![](images/oop/cpp-struct-layout-a.png)
# C++ class layout

- C-like structs
    - C++ mostly upwards-compatible with C
    - Same simple struct layout rules
    - Members laid out in their declaration order
    - Implementation defined alignment padding
- *Note* : C++ structs are like classes
	- But defaulting to `public`

``` cpp
struct A {  // or class
    char c;
    int i;
};
```

---

![](images/oop/cpp-struct-layout-b.png)
# More members

``` cpp
struct B {  // or class
public:
    int bm1;
protected:
    int bm2;
private:
    int bm3;
    static int bsm;
    void bf();
    static void bsf();
    typedef void* bpv;
    struct N { };
};
```

- Only the *non-static data members* occupy space in each instance

---

# Inheritance

---

# Single inheritance

``` cpp
struct C {
    int c1;
    void cf();
};

struct D : C {
    int d1;
    void df();
};
```

- Derived class inherits all features of base class
- Each instance of `D` must contain a complete copy of the instance data of `C`

---

![](images/oop/cpp-struct-layout-c.png) ![](images/oop/cpp-struct-layout-d.png)
# Upcast for single inheritance

``` cpp
struct C {
    int c1;
    void cf();
};
struct D : C {
    int d1;
    void df();
};
```

- New instance data of `D` is simply *appended* to layout of `C`
    - Layout used by *all* known C++ *implementations*
- Address of `C` object within `D` == first byte of `D` object
    - No displacement for *upcasting*, to obtain address of embedded `C`

---

# Multiple inheritance

- Model for an organization that has:
    - A class `Manager` (who delegates), and
    - A class `Worker` (who actually does the work)
- How can we model a class `MiddleManager`?
    - Like a `Worker`, accepts work assignments from manager
    - Like a `Manager`, delegates work to employees

``` cpp
struct Manager ... { ... };
struct Worker ... { ... };
struct MiddleManager : Manager, Worker { ... };
```

---

![](images/oop/cpp-struct-layout-e.png) ![](images/oop/cpp-struct-layout-f.png)
# Multiple inheritance layout

``` cpp
struct E {
    int e1;
    void ef();
};
struct F : C, E {
    int f1;
    void ff();
};
```

- Struct `F` multiply inherits from `C` and `E`
- As with single inheritance, `F` contains a copy of instance data of each base class
- Here, address of embedded `E` within `F` ≠ address of `F` itself
- Displacement leads to a small overhead, for casting

---

![](images/oop/diamond-inheritance.svg)
# Diamond problem

- What if both `Manager` and `Worker` are derived from `Employee`?

``` cpp
struct Employee { int id; ... };
struct Manager : Employee { ... };
struct Worker : Employee { ... };
struct MiddleManager : Manager, Worker { ... };
```

- They each contain a copy of `Employee` instance data
- `MiddleManager` will contain two instances of `Employee`, one from each base
- Duplication = storage overhead, inconsistencies

---

# Virtual inheritance

In C++, this “sharing inheritance” is (unfortunately) called *virtual inheritance*

``` cpp
struct Employee { int id; ... };
struct Manager : virtual Employee { ... };
struct Worker : virtual Employee { ... };
struct MiddleManager : Manager, Worker { ... };
```

- More expensive to implement and use
- No fixed displacement from the address point of the derived class to its virtual base
- If derived class is further derived from, shared base placed at different offset

---

![large](images/oop/cpp-struct-layout-g.png) ![large](images/oop/cpp-struct-layout-h.png) ![large](images/oop/cpp-struct-layout-i.png)
# Virtual base table pointer

``` cpp
struct G : virtual C {
    int g1; void gf();
};
struct H : virtual C {
    int h1; void hf();
};
struct I : G, H {
    int i1; void _if();
};
```

- *Visual C++*: hidden `vbptr`
    - Pointer to a (*per-class*) table of displacements
    - From address of `vbptr`, to virtual base(s)
    - 32-bit platform: `GdGvbptrC` is `8`, `IdGvbptrC` is `20` (bytes)

---

![](images/oop/cpp-struct-layout-c.png) ![](images/oop/cpp-struct-layout-d.png) ![](images/oop/cpp-struct-layout-e.png) ![](images/oop/cpp-struct-layout-f.png)
# Data member access

- No inheritance, like C lang

``` cpp
C* pc;
pc->c1; // *(pc + dCc1)
```

- Single inheritance, displacement is `0`

``` cpp
D* pd;  // struct D : C
pd->c1; // *(pd + dDC + dCc1) ; *(pd + dCc1)
pd->d1; // *(pd + dDd1)
```

- Multiple inheritance, constant displacement

``` cpp
F* pf;  // struct F : C, E
pf->c1; // *(pf + dFC + dCc1) ; *(pf + dFc1)
pf->e1; // *(pf + dFE + dEe1) ; *(pf + dFe1)
pf->f1; // *(pf + dFf1)
```

---

![large](images/oop/cpp-struct-layout-g.png) ![large](images/oop/cpp-struct-layout-h.png) ![large](images/oop/cpp-struct-layout-i.png)
# Access to virtual base

- Virtual inheritance, access to virtual base is comparatively expensive
    - Fetch the vbptr
    - Fetch a vbtable entry
    - Add that displacement to vbptr address
- For other members, it's just a constant displacement

``` cpp
I* pi;
pi->g1; // *(pi + dIG + dGg1) ; *(pi + dIg1)
pi->h1; // *(pi + dIH + dHh1) ; *(pi + dIh1)
pi->i1; // *(pi + dIi1)
pi->c1; // *(pi + dIG + (*(pi + dIG))[1] + dCc1)
        // *(pi + dIH + (*(pi + dIH))[1] + dCc1)
I i;
i.c1; // *(&i + IdIC + dCc1) ; *(&i + IdIc1)
```

---

# Casts

- Inexpensive to cast pointers, in case of derived classes
    - Add displacement (often 0) for upcasting
    - Subtract for downcasting
    - Except for classes with virtual bases

``` cpp
F* pf;
(C*)pf;  // (C*)(pf ? pf + dFC : 0) ; (C*)pf
(E*)pf;  // (E*)(pf ? pf + dFE : 0)
```

>

Plain downcasts are unsafe; `dynamic_cast` is safe, using RTTI

---

# Cast with virtual base

- Casting over a virtual inheritance path is relatively expensive
- About the same cost as accessing a member of a virtual base

``` cpp
I* pi;
(G*)pi;  // (G*)pi
(H*)pi;  // (H*)(pi ? pi + dIH : 0)
(C*)pi;  // (C*)(pi ? (pi+dIG + (*(pi+dIG))[1]) : 0)
```

>

Plain or static downcasting from a virtual base is *prohibited*

---

# Virtual functions

---

![large](images/oop/cpp-struct-layout-p.png)
# Member functions

- Virtual member functions incur an instance size hit
- They require a pointer to a ( *per-class* ) **virtual function table**

``` cpp
struct P {
    int p1;
    void pf();           // new
    virtual void pvf();  // new
};
```

---

# The hidden this

- Each (non-static) member function of a class `X` receives a special hidden `this` parameter of type `X* const`
- Implicitly initialized from the object the member function is applied to
- Within the body of a member function, member access off the `this` pointer is implicit

``` cpp
void P::pf() {  // void P::pf([P *const this])
    ++p1;       // ++(this->p1);
}
```

---

![large](images/oop/cpp-struct-layout-q.png)
# Overriding methods

- A derived class can override, or replace, an inherited function definition
- Type of override depends upon whether the method is `virtual`
    - *Static override*: determined at compile time
    - *Dynamic override*: determined at run-time, by concrete object addressed by object pointer

``` cpp
struct Q : P {
    int q1;
    void pf();           // overrides P::pf
    void qf();           // new
    void pvf();          // overrides P::pvf
    virtual void qvf();  // new
};
```

---

# Non-virtual override

``` cpp
P p; P* pp = &p; Q q; P* ppq = &q; Q* pq = &q;
pp->pf();   // pp->P::pf();   // P::pf(pp);
ppq->pf();  // ppq->P::pf();  // P::pf(ppq);
pq->pf();   // pq->Q::pf();   // Q::pf((P*)pq);
pq->qf();   // pq->Q::qf();   // Q::qf(pq);
```

- For non-virtual function calls, member function to call is statically determined, at compile time
- By type of pointer expression at left of `->` operator
- `ppq` points to a `Q`, but `ppq->pf()` calls `P::pf()`
- Pointer expression at left of `->` passed as hidden `this` parameter

---

# Virtual override

``` cpp
pp->pvf();  // pp->P::pvf();  // P::pvf(pp);
ppq->pvf(); // ppq->Q::pvf(); // Q::pvf((Q*)ppq);
pq->pvf();  // pq->Q::pvf();  // Q::pvf(pq);
```

- For virtual function calls, member function to call is determined at run-time
- Appropriate to actual instance addressed by pointer
- `ppq` has type `P*`, but it addresses a `Q`, and so `Q::pvf()` is called

---

![large](images/oop/cpp-struct-layout-r.png) ![large](images/oop/cpp-struct-layout-s.png)
# Multiple inheritance of virtual f.s

``` cpp
struct R {
    int r1;
    virtual void pvf(); // new
    virtual void rvf(); // new
};
struct S : P, R {
    int s1;
    void pvf(); // overrides P::pvf and R::pvf
    void rvf(); // overrides R::rvf
    void svf(); // new
};
```

- If class inherits them from multiple bases, each with virtual functions
	- → More than one `vfptr`

---

# Semantics of virtual calls

``` cpp
S s; S* ps = &s; P* pps = &s; R* prs = &s;
pps->pvf();  // (pps->P::vfptr[0])((S*)pps)
prs->pvf();  // (prs->R::vfptr[0])((S*)prs)  // thunk
ps->pvf();   // one of the above; calls S::pvf()
```

- Base `R` has a different address point than do `P` and `S`, as expected with multiple inheritance
- `S::pvf()` an `S*` as `this` parameter
- Automatically convert `R*` at call site into `S*` at callee
- In `vftable`, `pvf` slot points to an adjuster *thunk*




