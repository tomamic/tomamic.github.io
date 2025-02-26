![](https://fondinfo.github.io/images/comp/c3po.png)
# Paradigms and languages

---

# Course outline

- ① Introduction to **formal languages**
    - ⇒ Learn to work correctly with code and text
- ② Programming **paradigms**
    - ⇒ Think and develop with a multi-paradigm mindset
    - Fit for Big Data, distributed and parallel systems

---

![](https://fondinfo.github.io/images/comp/attack.svg)
# ① Formal languages

- Regular expressions
- Formal grammars for code and text
- *Lab* on parsing

---

![](https://fondinfo.github.io/images/fun/functional-xkcd.png)
# ② Programming paradigms

- Functional programming
    - Haskell, Python
- Some blends of OOP
    - Rust, possibly Go
- Generic programming
    - Haskell etc.
- Meta-programming
    - Python
- *Lab* on Haskell, Rust, Python etc.

---

# Texts and material

- **Slides**
    - <https://tomamic.github.io/#paradigmi>
    - Linguaggi formali (in italiano): [Regex](https://fondinfo.github.io/slides/t41-regex.html#/1)- [Grammatiche](https://fondinfo.github.io/slides/t42-grammatiche.html)
- **Textbooks**
    - M. Gabbrielli, S. Martini (2011) - *Linguaggi di programmazione - Principi e paradigmi* - ISBN:978-8838665738
    - M. Lipovača (2011) - *Learn You a Haskell for Great Good* - ISBN:978-1593272838 - <http://learnyouahaskell.com/>
    - S. Klabnik, C. Nichols (2023) - *The Rust Programming Language* - ISBN:978-1718503106 - <https://doc.rust-lang.org/book/>

---

# Exam

- ① **Optional project**, on arguments related to the course
    - Can be devoloped in tandem with another student
    - To be presented to the class, during the lessons period
- ② **Test** about the course matters
    - Final test ~ 3h, including coding exercises in Haskell and Rust
    - Or… active and continuous participation into lab activities and classes during the lessons period

---

# Paradigms and languages

---

![](https://fondinfo.github.io/images/dev/lang-pypl.png)
# Why so many languages?

- Programmers use so many different languages…
    - Yet, they are all *Turing-complete*
    - Thus theoretically equivalent
- Then, why so many? Which one is the best?
    - Several factors, both *intrinsic and extrinsic*
    - Evolution of the hardware platform (parallelism, distribution)
    - Evolution of the application tasks

---

# Language popularity

![large](https://fondinfo.github.io/images/dev/lang-github.svg)

>

[Octoverse](https://octoverse.github.com/)
— [SO survey](https://survey.stackoverflow.co/)
— [Redmonk](https://redmonk.com/sogrady/)
— [PYPL](https://pypl.github.io/PYPL.html)
— [Spectrum](https://spectrum.ieee.org/top-programming-languages/)
— [Tiobe](https://www.tiobe.com/tiobe-index/)

---

# Efficiency

![large](https://fondinfo.github.io/images/dev/lang-time.svg)

>

[Energy Efficiency across Programming Languages](https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf)

---

# Energy consumption

![large](https://fondinfo.github.io/images/dev/lang-energy.svg)

>

[Energy Efficiency across Programming Languages](https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf)

---

![large](https://fondinfo.github.io/images/dev/assembly.png)
# Low-level languages

- Closer to the machine architecture, than the problem model
- **Machine languages**: only instructions that the computer can execute directly
    - Very simple instruction set, architecture dependent, binary format
- **Assembly languages**: first evolution, binary → mnemonic code

---

![small](/images/hist/1961-hopper.jpg) Grace Hopper
# High-level languages

- Invented to ease writing programs
    - Define solutions in more intuitive way
    - *Cobol* : English-like syntax
- A certain level of **abstraction**
    - From the computer architecture, eventually executing the program
- Yet, they must be translated to some machine language
    - Need for compilers

---

# History of languages

![large](https://fondinfo.github.io/images/dev/languages-timeline.svg)

>

[O’Reilly Language Poster](https://www.cs.toronto.edu/~gpenn/csc324/PLhistory.pdf)
<br>
[Updated poster](http://www.levenez.com/lang/history.html)
<br>
[History of Computer Programming Languages, by A. Ferguson](https://cs.brown.edu/~adf/programming_languages.html)
<br>
[The Development of the C Language](https://www.bell-labs.com/usr/dmr/www/chist.html)

---

![large](https://fondinfo.github.io/images/dev/languages-timeline.svg) ![](/images/hist/algol-committee.png) [Algol committee](http://www-formal.stanford.edu/jmc/pictures.html)
# 1950s - Early languages

- First languages are task specific - First compilers
    - *Fortran* (John Backus), for scientific computation
    - *Cobol* (Grace Hopper), for business applications
- *Lisp* (John McCarthy) emerges early, as ancestor of functional languages
- *Algol* has the first formal grammar (Backus-Naur Form)

---

![large](https://fondinfo.github.io/images/dev/languages-timeline.svg) ![](/images/hist/thompson-ritchie.png) Dennis Ritchie, Ken Thompson
# System languages

- 1970s: Intel 4004, first microprocessor
    - Computers start to become affordable
    - Need for operating systems, Unix
    - *Pascal, C*
- Before of them, *Simula* opens the way for OOP languages
- *Prolog* and “strong AI” promise (…) more intelligent systems
- 1980s: OOP fits the need of GUI-based systems
    - *C++*, “C with classes”

---

![large](https://fondinfo.github.io/images/dev/languages-timeline.svg)
# Internet and cloud languages

- 1990s: the Internet and the Web
    - *Java, JS, PHP* power the Web
    - *Python* sustained by a motivated online community
- *Haskell* unites the academic functional community
- 2010s: Mobile systems, Cloud Computing, Big Data
    - *Go, Rust, Kotlin, C#, Swift, Dart*

> NSA advises organizations to consider making a strategic shift
from languages that provide little or no inherent memory protection, such as
C/C++, to a memory safe language when possible.
Some examples… are C#, Go, Java, Ruby, and Swift.
[NSA 2022 - Software Memory Safety](https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF)

---

![large](https://fondinfo.github.io/images/dev/lang-graph.png) <https://griffsgraphs.wordpress.com/?s=lang>
# Influence of languages

- Arcs represent influence among languages
    - `influenced-by` relation in *wikidata*
    - E.g. [Python page](https://www.wikidata.org/wiki/Q28865)
- Larger nodes have more influence
    - Higher degree

---

# Python influence graph

![](https://fondinfo.github.io/images/dev/python-graph.svg)

>

<https://programminglanguages.info/language/python/>

---

# Haskell influence graph

![](https://fondinfo.github.io/images/dev/haskell-graph.svg)

>

<https://programminglanguages.info/language/haskell/>

---

# Rust influence graph

![](https://fondinfo.github.io/images/dev/rust-graph.svg)

>

<https://programminglanguages.info/language/rust/>

---

# Programming paradigm

- Define an approach to programming
    - Based on a coherent set of principles, or a mathematical theory
- Define the abstract concept of computation
    - Provide philosophy and methodology to write programs
    - A different way of thinking
- Each language promotes the adoption of some particular paradigm
    - Languages with the same paradigm are conceptually similar
    - They may draw tracts from different paradigms

![](https://fondinfo.github.io/images/dev/paradigms.svg)

---

![large](https://fondinfo.github.io/images/dev/paradigm-graph.png) <https://griffsgraphs.wordpress.com/?s=lang>
# Languages and paradigms

- **Imperative / procedural**
    - Cobol, Fortran, Algol, C, Pascal
    - Basic, Perl
- **Object-oriented**
    - Simula, Smalltalk, Eiffel, Delphi
    - C++, Java, C#, Go, Swift, Rust
    - PHP, Javascript, Python…
- **Functional**
    - Lisp, Scheme, ML, Haskell, Erlang
- **Logic**
    - Prolog...

---

![](https://fondinfo.github.io/images/dev/imperative.svg)
# Imperative programming

- Prescriptive style
    - Define the instructions to execute and their precise order
- Instructions can…
    - Modify the content of memory (*re-assignment*)
    - Jump to other instructions
- *Program = Data + Algorithm*
    - Declare all variables and their data type
    - Define the instructions to process data

---

![](https://fondinfo.github.io/images/dev/imperative.svg)
# Structured programming

- Program composed by simple blocks
    - One way in, one way out
    - No arbitrary jumps
    - Easier to understand
- Many common languages are imperative and structured
    - *Pascal, Basic, Fortran, C, Cobol*

![](https://fondinfo.github.io/images/algo/structures.svg)

---

![](https://fondinfo.github.io/images/dev/imperative.svg) ![](https://fondinfo.github.io/images/hist/mcnulty.png) Kay McNulty
# Procedural programming

- Based on the concept of *subroutine*
    - [Kay McNulty](https://en.wikipedia.org/wiki/Kathleen_Antonelli), programmer of the ENIAC
- *Algol-60* specs support *recursion*
    - Call stack in [Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)'s compiler
- McCarthy's *Lisp* notation also supports recursion
    - Interpreter by [Steve_Russell](https://en.wikipedia.org/wiki/Steve_Russell_(computer_scientist))

---

![](https://fondinfo.github.io/images/dev/imperative.svg)
# Object-oriented programming

- Objects incapsulate both state and behaviour
    - *Abstract data type*
- Program realized through *message passing* among objects
- Encapsulation, composition, inheritance, polimorphism
    - Nowadays, composition is favored over inheritance
- *Simula, Smalltalk, C++, Java*
- *SmallTalk* has no syntax for selections and repetitions
    - No `if`, no `while`, no `for` as instructions
    - Messages on booleans or ranges

---

![large](https://fondinfo.github.io/images/dev/paradigms.svg)
# Declarative programming

- Programming: stating *properties of the result*
    - Just say what result you want
    - A vision for the future
    - Use of mathematics in programming
- The system figures out how to get there
    - More support required from the computer
- Programming *without state*
    - Variables and objects can’t be updated
    - Verification is much simplified
- Declarative vs imperative
    - **Properties vs commands**
    - **Stateless vs stateful**

---

# Logic programming

- Program: demonstrating or confuting an assertion
- No instructions, but *facts* and *rules*
    - Program = knowledge + control
- Some level of *non-determism*
    - The execution flow may be unknown
    - The system activates some rules for achieving a goal
    - It has to find relevant facts and rules
- Techniques
    - Pattern matching, unification
    - Backtracking
- *Prolog*

---

# Functional programming

- Program: calculating the result of a *function*
    - Each value in domain → unique value in codomain
    - No side effects, referential integrity
    - Idempotence
- Variable: name for an *immutable* value
    - No re-assignment instructions
- Techniques
    - *Higher-order* functions (functions as parameters / return values)
    - Recursion
    - Linked lists
- *Lisp, Caml, Haskell*

---

# Other paradigms

- **Parallel / concurrent**
    - Mechanisms for identifying and syncronizing concurrent tasks
    - Channels, async messaging, RMI, coroutines, threads, actors, agents…
    - *Go, Scala, Erlang*
- **Event driven**
    - No sequence of instructions
    - Reactions to events, either internal or external
    - Rule-based systems

---

# Visual and scripting paradigms

- **Atypical**
    - E.g. in *spreadsheets*, temporal relations substitued by spatial relations
    - A cell's value depend on other cells' values
- **Visual**
    - Flowchart, block programming
    - *LabVIEW, Simulink* for scientific programming
    - *Scratch* for education
- **Scripting**
    - Dynamic typing
    - DRY principle - Don't Repeat Yourself
    - *JavaScript, Python, PHP, Ruby, Shell, Lua*

---

# Jungle of paradigms

![](https://fondinfo.github.io/images/dev/vanroy-jungle.svg)

- Fewer than languages, but still many paradigms
    - Van Roy lists 27 paradigms
    - All with implementations and practical applications

>

<https://www.info.ucl.ac.be/~pvr/VanRoyChapter.pdf>

---

# Languages, paradigms, concepts

![](https://fondinfo.github.io/images/dev/vanroy-concepts.svg)

- Fortunately, paradigms are connected
    - They share common concepts

---

![small](https://fondinfo.github.io/images/dev/vanroy-fun-oop.svg)
# Concepts

- Paradigm
    - A set of concepts
    - Organized as a *kernel language*
- Taxonomy of paradigms
    - Kernel languages of different paradigms are related
    - Link if two paradigms differ in exactly one concept

>

<https://en.wikipedia.org/wiki/Programming_paradigm>

---

# Taxonomy of paradigms

![large](https://fondinfo.github.io/images/dev/wiki-paradigms.svg)

---

# Concepts and languages

![large](https://fondinfo.github.io/images/dev/vanroy-languages.svg)

---

# Creative extension principle

- Programs may get complicated, using a given paradigm
    - For technical reason
    - Not correlated to the problem at hand
    - → Need for non local transformations
- Adding a new concept, programs remain simple
    - E.g. concurrency: if not supported by the paradigm…
    - It has to be resolved by hand, in the program

---

# Confronting languages

- Questionable, if a language is better in general
- But a language may fit a problem better
    - Some programming concepts may help solving a problem
    - → Paradigm with the useful concepts
- Choose a language according to the problem type
    - E.g. *Lisp* fit for symbolic computation

> I speak Spanish to God, Italian to women, French to men, and German to my horse (Charles V, Holy Roman Emperor, ~1500)

---

# Intrinsics and extrinsics

- Some features are not bound to the paradigm
- **Intrinsic factors**
    - Syntax and paradigm
- **Extrinsic factors**
    - Available hardware, libraries, popularity, community
    - May change over time, even if the language doesn't
- **Mixed factors**
    - Depend on *both* the language and the context

---

# Language adoption

![large](https://fondinfo.github.io/images/dev/lang-adoption.svg)

>

<https://lmeyerov.github.io/projects/socioplt/papers/oopsla2013.pdf>
<br>
1679 users of Slashdot

---

# Extrinsics dominate

- *Open source libraries*
    - Most influential factor for language choice
- *Social factors* outweigh intrinsics
    - Existing code or expertise, 4/5 top factors
- *Domain specialization*
    - Factors often associated with particular application domains
- *Company size matters*
    - At larger companies, more value on legacy code and knowledge
    - More value on correctness, less on dev speed and simplicity
- Implementation attributes (performance, tools…)
    - Both intrinsic and extrinsic components
    - Some langs: easier high-performance implementation

---

![](https://fondinfo.github.io/images/dev/lang-learn.svg) Speed of language acquisition <br> 1679 users of Slashdot
# Intrinsics, simplicity

- Simple definition vs. simple effective use
    - *C*: simple definition, hard to use
    - *Python*: complex definition, simple to use
- Readability
- Expressive power
    - Breadth of ideas that can be represented and communicated
    - Time and effort to solve a certain problem
- Learnability
    - Language complexity
    - Required cultural background
    - Books and guides (extrinsic)
- Pedagogical qualities
    - Tool to teach (some aspects of) programming

---

# Other intrinsics

- Standardization, well defined concepts, coherence
    - Dialects, non-orthogonal features
- Safety, correctness
    - Typing, memory mgmt
- Maintainability
    - Modularity, abstraction
- Extendability
    - Modify or extend the language
    - Operator overloading, decorators, metaprogramming
- Generality
    - Solve problems in many fields
    - E.g. *Cobol* limited to business applications

---

# Extrinsics

- Popularity
    - → Docs, libs, communities, tools
    - → Performance, etc.
- Existing code, previous knowledge
- Portability
    - Available on multiple platforms
    - Standardization, abstraction level

---

# Mixed factors

- Efficiency, performance
    - Depend on implementation, may change
    - Helped by language features (e.g. static typing)
- Development speed
    - Simplicity, community, tools, experience…
- Integration with other software
- Libraries and tools
    - Depend on community, may change
    - Helped by language features (e.g. *C* calling convention)

---

![large](https://fondinfo.github.io/images/dev/lang-features.svg)
# Feature preferences

- Libraries
- Performance
- Object-oriented features
    - Interfaces w/o static types?
- Correctness and safety, undervalued
    - Functional purity
    - Static types

>

415 participants in a MOOC
