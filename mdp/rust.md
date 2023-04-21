![](images/dev/rust.svg)
# Rust

---

![large](images/dev/rust-safety-control.svg)
# Why Rust

- Performance
    - No garbage collection
    - Zero-cost abstractions
- Memory management
- Memory safety
    - No null pointer dereferences
    - No dangling pointers
    - No memory leaks
    - No buffer overruns
- Trustworthy concurrency

>

<http://design.inf.unisi.ch/sites/default/files/seminar-niko-matsiakis-rustoverview.pdf>
<br>
<https://www.ibm.com/developerworks/library/os-developers-know-rust/index.html>

---

![large](images/dev/rust-genealogy.png) ![large](images/dev/rust-graph.svg)
# Origins

- History
    - 2006 - Graydon Hoare's personal project (he quits in 2013)
    - 2009 - Mozilla sponsors, for Servo
    - 2011 - Niko Matsakis, ownership
    - 2015 - Rust 1.0
    - 2021 - [Rust foundation](https://foundation.rust-lang.org/) <br/> AWS, Google, Huawei, MS, Meta, Mozilla
- Multiparadigm genealogy
    - Influenced by Cyclone (safer C-dialect)
    - Object-oriented features from C++
    - Functional features from Haskell and OCaml

>

<https://github.com/rust-lang/rust/graphs/contributors>

---

# Loved and wanted, in SO survey

![](images/dev/lang-rank.png)

>

[Redmonk](https://redmonk.com/sogrady/2021/08/05/language-rankings-6-21/)
– [Spectrum](https://spectrum.ieee.org/top-programming-languages/)
– [PYPL](https://pypl.github.io/PYPL.html)
– [Tiobe](https://www.tiobe.com/tiobe-index/)
– [SO survey](https://insights.stackoverflow.com/survey/2021/#technology)

---

# C-like syntax

``` rs
fn main() {
    println!("Hello, world!");
}
```

- `fn` defines a function
    - Signatures list parameters/results and their types
- `println!`: macro, metaprogramming
    - Variadic parameters

---

![](images/dev/get-started.svg)
# Getting started

- <https://www.rust-lang.org/learn/get-started>
- **`rustup`**
    - Installer
    - `curl -sSf https://sh.rustup.rs | sh`
- **`rustc`**
    - Compiler
    - `rustc hello.rs`
- **`cargo`**
    - Build tool
    - Package manager
- *Online playground*
    - <https://play.rust-lang.org/>

---

# Immutable variables

- Variables are immutable by default
    - Enforced by compiler
- Consts (vs immutable variables)
    - Set with static value (*compile time*)
    - Can be in global scope

``` rs
fn main() {
    let x = 1;  // type inference, `i32`
    println!("x = {}", x);
    x = x + 1;  // compile-time error
    println!("x = {}", x);
}
const MONTH_NUMBER: u8 = 12;
```

---

# Mutable variables

```
let mut x = 1;
x = 5;  // ok
```

- `mut` for mutable variables
    - Convey intent to future readers
    - Other parts of the code will change this variable
- *Shadowing*, i.e., redefine a variable
    - `let` with different type, or `mut` clause
- Global mutable variable → `unsafe`
    - Discouraged

```
let x = 6;
let x = x.to_string();  // ok, changing type is idiomatic
```

---

# Numeric types

- Signed
    - `i8, i16, i32, i64, i128`
    - `isize`, platform dependent
- Unigned
    - `u8, u16, u32, u64, u128`
    - `usize`, platform dependent, for indexing
- Floating point
    - `f32, f64`
- Type inference
    - Defaults to `i32`, or `f64`

---

# Primitives and arrays

- `char`
    - Unicode code-point, 4 bytes
- `bool`
    - Either `true`, or `false`
- Array, fixed size

``` rs
let a = [1, 2, 3, 4, 5];  // array, fixed size
println!("array's first value: {}\n", a[0]);

let mut b = [[0u8; 4]; 6];  // array of 6 arrays, of 4 bytes
b[0][1] = 42;
```

---

# Function

``` rs
fn abs(x: i32) -> i32 {
    if x >= 0 {
        return x;
    } else {
        return -x;
    }
}
```

- Last expression is returned implicitly (w/o semicolon)

``` rs
fn add_three(x: i32) -> i32{
    x + 3
}
```

---

# Code structures

``` rs
let mut number = 5;
while number > 0 {
    println!("{}!", number);
    number -= 1;
}
```

``` rs
let a = [10, 20, 30, 40, 50];
for element in a {
    println!("the value is: {}", element);
}
for number in (1..4).rev() {  // range, reversed
    println!("countdown {}!", number);  // 3 2 1
}
```

---

# Tuples

- Parentheses for packing / unpacking
    - Dot for indexing
- Values of different types
    - Product, for algebraic data types

``` rs
let tup_expl : (i32, f64, u8, char) = (500, 6.4, 1, 'a');
let tup_impl = (500, true);
println!("Tuple:{},{},{},{}", tup_expl.0, tup_expl.1, tup_expl.2, tup_expl.3);
let (a, b) = tup_impl;  // unpacking
```

---

# Pseudo-random

``` rs
fn rand_int(nmin: i32, nmax: i32, seed: u32) -> (i32, u32) {
    let range = (nmax + 1 - nmin) as u32;
    let val = nmin + (seed % range) as i32;
    let mut seed : u32 = seed;
    // From "Xorshift RNGs" by George Marsaglia
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    (val, seed)
}

fn time_seed() -> u32 {
    use std::time::SystemTime as st;
    let now = st::now().duration_since(st::UNIX_EPOCH).unwrap();
    now.as_millis() as u32
}
```

---

# Structs

- Similar to tuples, with named fields
    - Product, for *algebraic data types*

``` rs
struct User {
    username: String,
    sign_in_count: u64,
    active: bool,
}
fn main() {
    let user1 = User {
        username: String::from("tomamic"),
        active: true,
        sign_in_count: 1,
    };
    println!("username: {}", user1.username);
}
```

---

# Enums

- Both for *C*-like enums and unions
    - Sum, for *algebraic data types*

``` rs
enum IpAddrKind {  // simple enum
    V4,
    V6,
}

struct IpAddr { kind: IpAddrKind, address: String }
```

``` rs
enum Message {  // union-like enum; sum
    Quit,
    Move { x: i32, y: i32 },  // product, struct-like
    Write(String),
    ChangeColor(i32, i32, i32),  // product, tuple-like
}
```

---

# Nullable values

- `Option` enum to encapsulate nullable values
- Methods: `is_some, is_none`
- `unwrap, expect` to extract the value, but may `panic`
- `unwrap_or` extracts the value, or gives a default

``` rs
enum Option<T> {
    Some(T),
    None,
}
```

```
let some_number = Some(5);
let some_string = Some("a string");
let absent_number: Option<i32> = None;
let x = some_number.unwrap_or(0) + 3;
```

>

<https://doc.rust-lang.org/std/option/enum.Option.html>

---

# Result

- `Result` enum to encapsulate result values or errors
- Methods: `is_ok, is_err`
- `unwrap, expect` to extract the value, but may `panic`
- `unwrap_or` extracts the value, or gives a default

``` rs
pub enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

>

<https://doc.rust-lang.org/std/result/enum.Result.html>

---

# Vectors

- Dynamically sized array-like collection
- Access values
    - Subscripting, `[]`: may `panic`, runtime error
    - `get` method → `Option`

``` rs
let v = vec![1, 2, 3];  // convenient macro for init
// let mut v = Vec::new();
// v.push(1); v.push(2); v.push(3);

let val10: Option<&i32> = v.get(10);
println!("none? {}", val10.is_none());
let val10: i32 = v[10];  // panic
println!("{}", value10);
```

>

<https://doc.rust-lang.org/std/collections/index.html>

---

![large](images/dev/trpl04-06.svg)
# Slice

- A `String` or `Vec` owns its elements, allocated in the heap
- A slice is a view on these elements
    - A reference to a contiguous sequence of elements in a collection
- String slice: `&str`
    - Reference to part of a `String`
    - *Fat pointer* : address and length

``` rs
let s = String::from("hello world");
let hello: &str = &s[0..5];
let world: &str = &s[6..11];
```

---

# Pattern matching

- Value destructuring, for tuples and structs

``` rs
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

>

<https://doc.rust-lang.org/book/ch06-02-match.html>

---

# if let

- `match` must be exhaustive
- `if let` can be more concise

``` rs
let config_max = Some(3u8);
if let Some(max) = config_max {
    println!("The maximum is configured to be {}", max);
}
```

>

<https://doc.rust-lang.org/book/ch06-02-match.html>

---

# Expressions

- `if, while`
    - Conditions don’t have parentheses
    - Both can be used as expressions (w/o semicolon)

``` rs
let condition = true;
let number = if condition {
    println!("Five!");
    5
} else {
    6
};
```

---

# Closures

- Anonymous functions (*lambda*)
    - Can capture the enclosing environment
    - In this code, `i` is a param, `val` is captured from the context

``` rs
    let val = 1;
    let closure_annotated = |i: i32| -> i32 { i + val };
    let closure_inferred  = |i     |          i + val  ;

    let j = 2;
    println!("closure_annotated: {}", closure_annotated(j));
    println!("closure_inferred: {}", closure_inferred(j));

    let one = || 1;
    println!("closure returning one: {}", one());
```

---

# Mapping and folding

- Rust has many functional tools
    - `map, filter, fold…`
    - Iterators are lazy

``` rs
let numbers_iterator = [2,3,4,5].iter();
let sum = numbers_iterator.fold(0, |acc, x| acc + x);

let squared: Vec<i32> = (1..10).map(|x| x * x).collect();
```

---

# Functional example

```
fn main() {
    let vector = (1..)            // Infinite range of integers
        .filter(|x| x % 2 != 0)   // Collect odd numbers
        .take(5)                  // Only take five numbers
        .map(|x| x * x)           // Square each number
        .collect::<Vec<usize>>(); // Return as a new Vec<usize>
    println!("{:?}", vector);     // Print result
}
```

---

# Console input

``` rs
fn main() {
    use std::io::*;
    println!("What's your name?");
    let name = stdin().lock().lines().next().unwrap().unwrap();
    println!("Hello, {}!", name);

    for l in stdin().lock().lines() {
        println!("{}", l.unwrap().to_uppercase());
    }
}
```

---

# Parsing a string

- The `parse` method exploits the type inference of Rust
    - String converted into the inferred type
    - It must implement the `FromStr` trait (…)
- Otherwise, *turbofish sintax* `::<>`

``` rs
let parsed: i32 = "5".parse().unwrap();
let turbo_parsed = "10".parse::<i32>().unwrap();
```

- Splitting
    - Use `split` method (given a separtor char)
    - Otherwise, `split_whitespace`

---

# Reading a file

``` rs
use std::fs::File;
use std::io::BufReader;

fn main() {
    let file = File::open("foo.txt").unwrap();
    let reader = BufReader::new(file);

    for line in reader.lines() {
        println!("{}", line.unwrap());
    }
}
```

---

# Writing a file

``` rs
use std::fs::File;
use std::io::BufWriter;

fn main() {
    let data = "Some data!";
    let f = File::create("foo.txt").expect("Unable to create file");
    let mut f = BufWriter::new(f);
    f.write_all(data.as_bytes()).expect("Unable to write data");
}
```

---

# Memory mgmt

---

![large](images/fun/records.svg)
# Stack / heap

- *Code*
- *Global data*
    - Static allocation
- *Heap*
    - Dynamic allocation
    - Unkown data size
    - Slow
- *Stack*
    - Automatic allocation
    - LIFO
    - Data with fixed size
    - Pointers to data in heap
    - Fast

---

![large](images/dev/trpl04-01.svg)
# Variable scope

- Objects occupying space unknown at compile time: in the heap
- *Java, Python, Go* : Garbage collector (GC)
    - → Runtime overhead
- *C, C++* : Manual management (or `shared_ptr` etc.)
- *Rust* : memory returned once the *owner* variable goes out of scope

``` rs
fn main() {
    let s1 = String::from("hello");  // s is valid from this point forward
    println!("{}", s1);
}  // the scope is now over; s is no longer valid
```

---

# Ownership

- Set of rules enforced at compile time
- No cost at runtime

![large](images/dev/rust-owner.svg)

---

![large](images/dev/trpl04-02.svg)
# Move semantics

- Two variables cannot own the same object
- Assignment op has *move* semantics by default
- Note : *copy* semantics by default for primitve types

``` rs
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // take ownership
    println!("{}", s1);  // compile time error
}
```

---

# Function arguments

- Passing a value to a function has *move semantics*
- But passing a primitive type has *copy semantics*

```
fn main() {
    let s = String::from("hello");  // s comes into scope
    takes_ownership(s);  // value moved into the function, no longer valid here
    let x = 5;  // x comes into scope
    let y = add_five(x);  // primitive, copied
}  // x, y, s go out of scope; s value already moved, nothing special happens

fn takes_ownership(some_string: String) {  // some_string comes into scope
    println!("{}", some_string);
}  // some_string goes out of scope, the string is dropped

fn add_five(some_integer: i32) {  // some_integer comes into scope
    some_integer + 5
}  // some_integer goes out of scope
```

---

# Return values

- Returning values also transfer ownership
- A possible solution to the problem
- Verbose and noisy, with a lot of parameters

``` rs
fn takes_and_return_ownership(some_string: String) -> String {
    println!("{}", some_string);
    some_string  // some_string is returned (moved) to the calling function
}
```

``` rs
fn concat2(s1: String, s2: String) -> (String, String, String) {
    let mut result_str = String::new();
    result_str.push_str(&s1);
    result_str.push_str(&s2);
    (result_str, s1, s2)
}
```

---

![large](images/dev/trpl04-05.svg)
# Borrowing

- A *reference* allows *borrowing* some value
    - Without taking ownership of it
    - Value not dropped when ref goes out of scope
    - Immutable by default
- A function can *borrow* a parameter, through a ref
    - Value still valid at the calling site

``` rs
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}
fn calculate_length(s: &String) -> usize {
    s.len()
}
```

---

# Borrowed values

- Values cannot be modified through their owner variable, while being borrowed

``` rs
let mut x = 5;
let alias = &x;

x = 6;  // compile time error
println!("{}", alias);
```

- Enclose the `alias` ref in a block `{ … }`
- After `alias` goes out of scope, `x` is available again

---

# Mutable reference

- A mutable ref allows to modify a variable
- Add `mut` to
    - Variable definition
    - Reference definition
    - Function parameter, if needed

``` rs
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

---

# Borrowing rules

- Any data can be borrowed into…
    - **①** Either, *any number of immutable references*
    - **②** Or, *only one mutable reference*
    - (But not both)
- Rules enforced by the *borrow checker*
    - At compile time

---

# Dangling pointer

- Error: freeing some memory, while preserving a reference to it
- Rust compiler: *lifetime* analysis
    - Reference lifetime cannot exceed data lifetime

``` rs
fn main() {
    let reference_to_nothing = dangle();
}
fn dangle() -> &String {
    let s = String::from("hello");
    &s  // lifetime error
}
```

``` rs
fn no_dangle() -> String {  // solution: move out the String, directly
    let s = String::from("hello");
    s
}
```

---

# Null references

- Dereferencing a null pointer: very common error
- `Option` enum to encapsulate nullable refs

> Null reference has led to innumerable errors, vulnerabilities, and system crashes, which have probably
caused a billion dollars of pain and damage in the last forty years (Tony Hoare, 2009, inventor of null reference, in Algol)

---

# Guess - Is this code safe?

``` rs
let mut v = vec![1, 2, 3, 4, 5];
let first = &v[0];  // ref to the first element
v.push(6);
println!("{}", first);
```

- The borrow checker is your friend
    - What if the vector needs reallocation?
    - Enclose the `first` ref in a block `{ … }`

---

# Lifetime

``` rs
{
    let r;                // ---------+-- 'a
    {                     //          |
        let x = 5;        // -+-- 'b  |
        r = &x;           //  |       |
    }                     // -+       |
    println!("r: {}", r); //          |
}                         // ---------+
```

- Lifetime of `r` annotated with `'a`
- Lifetime of `x` annotated with `'b`
- Ref lifetime is longer than value lifetime
- Solution: remove inner scope `{}`

---

# Lifetime of function result

- Compiler's dilemma
    - Result will have lifetime of `x`, or `y`?

``` rs
fn longest(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}
```

- Function has to be annotated
    - Result lifetime limited by both `x` and `y`
    - If result refs a single param → lifetime *elision*

``` rs
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

---

# Function with lifetime

``` rs
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
fn main() {
    let string1 = String::from("long string is long");
    let result;
    {
        let string2 = String::from("xyz");
        result = longest(string1.as_str(), string2.as_str());
    }
    println!("The longest string is {}", result);  // lifetime error
}
```

- Solution: remove inner scope `{}`

>

<https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html>

---

# Struct with lifetime

``` rs
struct ImportantExcerpt<'a> {
    part: &'a str,
}
fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'");
    let i = ImportantExcerpt {
        part: first_sentence,
    };
}
```

- An instance of `ImportantExcerpt` can’t outlive ref in its `part` field

---

# Further documentation

- *Rust book* : <https://doc.rust-lang.org/book>
- *Rust by example* : <https://doc.rust-lang.org/rust-by-example>
- Ref documentation : <https://doc.rust-lang.org/std/index.html>
- Presentation on ownership system : <https://www.slideshare.net/KuoE0/ownership-system-in-rust>
- `String` vs `&str` : <http://www.ameyalokare.com/rust/2017/10/12/rust-str-vs-String.html>

---

# Object model

---

# Object

- Just structs and associated methods
    - `self`, first param without explicit type, the object
    - `pub` for visibility from other *modules*

``` rs
pub struct Place {
    name: String
}
impl Place {
    pub fn greet(self) {
        println!("Welcome to {}", self.name)
    }
}
fn main() {
    let p = Place{ name: String::from("Parma") };
    p.greet();
}
```

---

# Enum object

``` str
pub enum Animal {
    Dog(String),  // tuple-like, unnamed field
    Cat(String),
    Pig(String),
}
impl Animal {
    pub fn say(&self) {
        match self {
            Animal::Dog(name) => println!("I'm {} Dog. I say WOOF!", name),
            Animal::Cat(name) => println!("I'm {} Cat. I say MEOW!", name),
            Animal::Pig(name) => println!("I'm {} Pig. I say OINK!", name),
        }
    }
}
```

---

# Vec of objects

``` rs
fn main() {
    let v = vec![Animal::Dog(String::from("Danny")),
                 Animal::Cat(String::from("Candy")),
                 Animal::Pig(String::from("Peppa"))];
    for a in v {
        a.say();
    }
}
```

- *Exercise* : make the enum variants struct-like, with a named field
- *Exercise* : change `String` to `&str`

---

# Trait

- A `trait` defines an abstract interface
    - A list of method signatures
- Implementing types may vary

``` rs
pub trait Animal {
    fn say(&self);
}
```

---

# Trait implementation

``` rs
pub struct Dog {
    name: String
}
impl Animal for Dog {
    fn say(&self) {
        println!("I'm {} Dog. I say WOOF!", self.name);
    }
}
```

- Same for `Cat, Pig`

---

# Boxed abstract objects

- Types implementing a trait may have different size
    - Stack allocation not possible (size unknown to compiler)
    - Thus, they are often “boxed”
- A “box” takes *ownership* of data in the *heap*
    - When a box goes out of scope, its content is dropped
    - Similar to *C++* `unique_ptr`

``` rs
fn main() {
    let v: Vec<Box<dyn Animal>> = vec![
        Box::new(Dog{ name: String::from("Danny") }),
        Box::new(Cat{ name: String::from("Candy") }),
        Box::new(Pig{ name: String::from("Peppa") })];
    for a in v { a.say(); }
}
```

---

# More ref types

- `Rc`
    - Reference counting, for a shared resource
    - Similar to *C++* `shared_ptr`
- `Arc`
    - Atomic reference counting
    - Safe for multi-threading
- `RefCell`
    - Borrowing rules enforced *at runtime*
    - `borrow, borrow_mut` methods to access the value
    - The program may `panic`

---

# Modules and crates

- In a project folder, each `rs` file is implicitly a module
    - E.g. `actor.rs`
- In the file `main.rs` (or `lib.rs`, for library projects)
    - Add a line: `pub mod actor`
- Other files can also use the new module
    - In `bounce.rs`, add a line: `use crate::actor;`
- Projects without external *crates* just need `rustc`
    - `rustc main.rs`

>

<https://doc.rust-lang.org/book/ch01-02-hello-world.html>

---

# Cargo

- Build system and package manager
    - `cargo new hello-cargo`
    - `cargo build`
- To use external [crates](https://crates.io) (modules)
    - List dependencies and versions in `Cargo.toml`
    - E.g. Including the popular `rand` *crate*

``` txt
[package]
name = "hello-cargo"

[dependencies]
rand = "0.8.5"
```

>

<https://doc.rust-lang.org/book/ch01-03-hello-cargo.html>

---

![](images/dev/wasm.svg)
# Wasm

- *WebAssembly* (Wasm)
    - Binary instruction format for a virtual machine
- Safe, sandboxed execution environment
- Portable compilation target
    - Deployment on the web <br> Running in browsers, alongside *JS*
    - Also, non-web embeddings (see [WASI](https://github.com/WebAssembly/WASI))
- Efficient and fast
    - Stack machine, near native speed
    - Compact binary format
- Debuggable [textual format](https://webassembly.github.io/spec/core/text/instructions.html#folded-instructions)

>

<https://en.wikipedia.org/wiki/WebAssembly> - <https://webassembly.org/>

---

# Wasm example

``` txt
(module
  (func $factorial (param $n i64) (result i64)
    (if (result i64)
      (i64.eqz
        (local.get $n))
      (then                 ;; if n == 0 { 1 }
        (i64.const 1))
      (else                 ;; else { n * factorial(n - 1) }
        (i64.mul
          (local.get $n)
          (call $factorial  ;; recursive call
            (i64.sub
              (local.get $n)
              (i64.const 1))))))))
```

---

# Rust to WASM

``` rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);  // JS function, available to Rust
}

#[wasm_bindgen]
pub fn greet(name: &str) {  // Rust, available to JS
    alert(&format!("Hello, {}!", name));
}
```

``` sh
$ cargo install wasm-pack --no-default-features
$ wasm-pack build --target web
```

>

<https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm>

---

# Concurrency

---

# Fearless concurrency

- Fearless
    - Fix your code while you’re working on it
    - Rather than after shipped to production
- Objective : write code free of subtle bugs
    - Easy to refactor w/o introducing new bugs
- Tools for modeling concurrent problems
    - Message passing concurrency
    - Shared state concurrency
    - More solutions implemented as crates

---

# Spawn and join

``` rs
use std::thread;
use std::time::Duration;
fn main() {
    let handle = thread::spawn(|| { //  Anonymous function (Closure)
        // Code in async thread
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(100));
        }
    });
    // Code in main thread
    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(100));
    }
    handle.join().unwrap(); //wait for async thread ends
}
```

---

# Shared state concurrency

- *Mutex* : allowing only one thread to access some data at any given time
- First, *lock* the mutex
    - Method `lock()` returns a `MutexGuard` object
- Finally, the mutex is *unlocked automatically*
    - When the `MutexGuard` object goes out of scope

---

# Shared state example

- Share a value among 10 threads
- Each thread increments a counter value by 1
- This example does **not** work
    - A mutex cannot be copied ⇒ `m` is moved away

``` rs
let m = Mutex::new(0); // Create a Mutex
let mut handles = vec![];
for _ in 0..10 {
    let handle = thread::spawn(move || {
        let mut counter = m.lock().unwrap();
        *counter += 1;
    });
    handles.push(handle);
}
// **Error!**
```

---

# Multiple owners

- Cases when a single value might have multiple owners
- `Arc` : reference counting
    - Tracking the number of references to a value
    - To know if a value is still in use
    - Zero references ⇒ value cleaned up

``` rs
let five = Arc::new(String::from("Number five"));
for _ in 0..10 {
    let five_ref = Arc::clone(&five);
    thread::spawn(move || {
        println!("{}", five_ref);
    });
}
```

---

# Sharing a mutex

``` rs
let m = Arc::new(Mutex::new(0));  // multiple owners
let mut handles = vec![];
for _ in 0..10 {
    let m_ref = Arc::clone(&m);  // increment the count of owners
    let handle = thread::spawn(move || {
        let mut counter = m_ref.lock().unwrap();
        *counter += 1;
    });
    handles.push(handle);
}
```

---

# Data race

- These three behaviors occur, together:
    - Two or more pointers access the same data at the same time
    - At least one of the pointers is being used to write to the data
    - There’s no mechanism being used to synchronize access to the data
- Data races cause undefined behavior
- Difficult to diagnose and fix
    - Especially when tracked down at runtime
- Rust prevents this problem from happening
    - Won’t even compile code with possible data races!
- Errors may be frustrating at times
    - Rust compiler points out a potential bug early!
    - At compile time rather than at runtime
    - Shows exactly where the problem is

---

# Message-based communication

- **Channels** : multi-producer, single-consumer FIFO queue

``` rs
use std::thread; use std::sync::mpsc::channel;
```

``` rs
// Create a shared channel that can be sent along from many threads
// `tx` is the sending half, `rx` is the receiving half
let (tx, rx) = channel();
for i in 0..10 {
    let tx = tx.clone();
    thread::spawn(move || {
        tx.send(i).unwrap();
    });
}
for _ in 0..10 {
    let j = rx.recv().unwrap();
    assert!(0 <= j && j < 10);
}
```

---

# More Rust

- Error handling
- Smart pointers
    - Box, reference counting
- Interior mutability
- Deref e Drop traits
- Concurrency
- Unsafe Rust (Rustonomicon)
- …
- [Compare C to RUST](http://slideplayer.com/slide/12176638/)
- [Examples on GitHub](https://github.com/smike86/RUSTExamples)
