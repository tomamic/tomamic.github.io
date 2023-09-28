![](images/dev/cpp.svg)
# Modern C++
## Introduzione alla programmazione

---

![small](images/dev/python-logo.svg) ![small](images/dev/cpp.svg)
# 💾 Strumenti software

- Strumenti open source, multi-piattaforma
    - Playground [C++](http://www.ce.unipr.it/cib/)
- Opzionalmente
    - [*MinGW*](https://nuwen.net/mingw.html), compilatore C++, con *librerie*
    - [*Termux*](https://wiki.termux.com/) e [Ubuntu](https://github.com/tuanpham-dev/termux-ubuntu) su Android
    - [*Ubuntu*](http://releases.ubuntu.com/22.10/) in una [VirtualBox](https://www.virtualbox.org/wiki/Downloads), [WikiHow](https://www.wikihow.com/Install-Ubuntu-on-VirtualBox)

``` sh
## Ubuntu, Debian etc.
sudo apt install build-essential libboost-dev geany
#pip3 install pygame cppyy
```

---

![](images/fun/books-stack.png)
# 📚 Testi per C++

- A.B. Downey: *How to Think Like a Computer Scientist C++ Version* - <http://greenteapress.com/thinkcpp/>
- C.S. Horstmann: *Fondamenti di C++*, McGraw-Hill 2003, 978-8838661051 (~43€, 768pp.)
- S.B. Lippman, J. Lajoie, B.E. Moo: *C++ Primer* 5e, Addison Wesley 2012, 978-0321714114 (~49€, 940pp.)
- M. Dawson: *Beginning C++ Through Game Programming* 4e, Course Tech. 2014, 978-1305109919 (~35€, 390pp.)
- Documentazione
    - [cplusplus.com](http://cplusplus.com/reference/) - [cppreference.com](http://cppreference.com/)

---

# Hello, C++

- Output su console : **`cout`**
- Operatore di *inserimento* : **`<<`**

``` cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!\n";
}
```

- File sorgente : `hello.cpp`

``` sh
g++ hello.cpp -o hello
```

>

[Strumenti software](intro.html#💾-strumenti-software)

---

![](images/algo/my-shoes.png)
# Tipizzazione statica

- Ogni variabile è un *contenitore* di dati
    - Occorre **dichiarare** il tipo
    - Per allocare memoria e controllare le operazioni
- Tipi principali
    - `int`, `double` e `float`, `bool`, `string` e `char`
- Funzioni di conversione
    - `to_string` : numero → stringa
    - `stoi`, `stod`, `stof` : stringa → numero

``` cpp
int x = 10;
double h = 3.7;
string txt = "hello";
```

---

![](images/algo/my-shoes.png)
# Type inference (auto)

- Se presente valore di inizializzazione…
    - Attribuito alla variabile lo stesso tipo
- La tipizzazione della varibile è sempre *statica*
    - Tipo attribuito una volta per tutte

``` cpp
auto x = 10;          // type inference
auto h = 3.7;
auto txt = "hello"s;  // recent compiler
```

---

# Operazioni di base

- Operazioni aritmetiche: `+, -, *, /, %`
    - ⚠️ La divisione tra interi dà risultato intero (`trunc`)
    - Il resto può essere negativo
- Assegnamento: `=, +=, -=` ...
    - Anche incremento e decremento unitario: `++, --`
- Confronti: `>, >=, <, <=, !=, ==`
    - ️⚠️ I confronti **non** si possono concatenare
- Operazioni booleane (and, or, not): `&&, ||, !`
    - Costanti `true` e `false`

``` cpp
cout << (3 < 5) << "\n";           // 1
cout << (3 < 5 < 4) << "\n";       // 1 ⚠️
cout << (3 < 5 && 5 < 4) << "\n";  // 0
```

---

# ⭐ Stringhe

- `string`: sequenza *mutabile* di byte (tipo `char`)
- Operazioni di *confronto* ; *concatenazione* : `+`
- ⚠️ Apici doppi per valori `string`, singoli per `char`

``` cpp
string a = "0123456789abcdefghij";
a[10] = 'A';
char c = a[10];  // 'A'
cout << c << " " << int(c) << "\n";  // A 65

string s1 = {'a'};  // char → string
string txt = to_string(15);  // number → string
int val = stoi("15");  // string → number; also `stod`, `stof`...

string sub1 = a.substr(5, 3);  // 567
string sub2 = a.substr(10);  // Abcdefghij
```

---

# Funzioni

``` cpp
#include <cmath>
#include <iostream>
using namespace std;

double hypotenuse(double a, double b) {  // ❗ pass by value
    auto c = sqrt(a * a + b * b);
    return c;
}

int main() {
    auto side1 = 3.0, side2 = 4.0;
    auto side3 = hypotenuse(side1, side2);
    cout << "3rd side: " << side3 << "\n";
}
```

>

[Funzioni in Python](p03-funzioni.html#/3)

---

# ⭐ Lettura intera riga

- Input da console : **`cin`**
- **`getline`** : lettura fino a `\n`

``` cpp
#include <iostream>
using namespace std;

string input(string message) {
    string result;
    cout << message;
    getline(cin, result);
    return result;
}
int main() {
    auto user = input("Full name and surname?\n");
    cout << "Hello, " << user << "\n";
}
```

---

![](images/algo/words.svg)
# Selezione

``` cpp
string a = input("First word?\n");
string b = input("Second word?\n")

if (a < b) {
    cout << "The words are ordered\n";
} else if (a > b) {
    cout << "The words are inverted\n";
} else {
    cout << "The words are equal\n";
}
```

>

[Selezioni in Python](p01-algoritmi.html#/31)
<br>
[Strutture di controllo in C++](https://cppguide.readthedocs.io/en/latest/cpp/control.html)

---

![](images/algo/sentinel.svg)
# Iterazione

``` cpp
int total = 0, count = 0;
int val = stoi(input("Val (-1 to finish)? "));
while (val != -1) {
    total += val;
    ++count;
    val = stoi(input("Val (-1 to finish)? "));
}
if (count > 0) {
    cout << "Avg: " << total / float(count) << "\n";
}
```

>

[Iterazioni in Python](p02-cicli.html#/5)
<br>
[Strutture di controllo in C++](https://cppguide.readthedocs.io/en/latest/cpp/control.html)

---

# ⭐ Cicli while e for

- Cicli tipici:
    - Inizializzazione della variabile di ciclo
    - Test sulla variabile di ciclo
    - Aggiornamento della variabile di ciclo

``` cpp
int i = 0;                     // for each i : 0 <= i < 5
while (i < 5) {
    cout << i * i << "\n";
    ++i;
}
```

``` cpp
for (int i = 0; i < 5; ++i) {  // for each i : 0 <= i < 5
    cout << i * i << "\n";
}
```

---

# Strutture in g2d

- Composizione di tipi elementari in strutture composte
    - Possibile alternativa alle tuple di Python
- Le seguenti `struct` sono già definite in `g2d/basic.hpp`

``` cpp
struct Point { int x, y; };
struct Color { int r, g, b; };
```

- Compilare un programma `g2d`
    - *Linux*: `g++ -pthread anim.cpp -o anim`
    - *Windows*: `g++ -O1 -o anim anim.cpp -lws2_32 -lwsock32`
    - [Compilare un programma g2d](https://github.com/tomamic/fondinfo/blob/master/cpp/README.md)
    - [Clang in browser](http://www.ce.unipr.it/cib)


---

# Grafica con g2d

``` cpp
#include "g2d/canvas.hpp"  // use your path!
auto x = 50, y = 50, dx = 5, dy = 0;

void tick() {
    if (g2d::mouse_clicked()) { dx = -dx; }
    g2d::clear_canvas();
    g2d::draw_image("ball.png", {x, y});
    x += dx;
}
int main() {
    g2d::init_canvas({480, 360});
    g2d::main_loop(tick);
}
```

>

Una procedura senza un valore di ritorno è di tipo `void`

---

# Numeri casuali

``` cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(nullptr));           // just once! (initial seed
                                    // for random numbers)
    for (int i = 0; i < 10; ++i) {
        int r = 1 + rand() % 90;    // random value: 1 <= r <= 90
        cout << r << "\n";
    }
}
```

>

In alternativa (con estremi inclusi): `g2d::randint(1, 90)`

---

![](images/fun/shopping-list.jpg)
# ⭐ Vector, array dinamici

``` cpp
#include <vector>
```

``` cpp
vector<int> rainfall_data = {13, 24, 18, 15};
```

``` cpp
vector<string> grocery = {"spam", "egg", "beans"};  // init list
cout << grocery[1] << "\n";  // egg
cout << grocery.size() << "\n";  // 3 -- also for strings
grocery[0] = "sausage";  // replace an elem

grocery.push_back("bacon");  // add elem to the end
grocery.pop_back();  // remove last elem
```

>

[Liste in Python](p02-cicli.html#/12)

---

# ⭐ For su sequenze dati

``` cpp
vector<int> values = {2, 3, 5, 7, 11};

for (auto val : values) {
    cube = val * val * val;
    cout << cube << "\t";
}
// 8   27  125 343 1331
```

``` cpp
string text = "eureka!";
for (auto c : text)  {  // for each char in text
    cout << c << " " << int(c) << "\n";
}
```

>

[Cicli su liste in Python](p02-cicli.html#/13)

---

# Vector come pseudo-matrice

``` cpp
vector<int> matrix = {2, 4, 3, 8,
                      9, 3, 2, 7,
                      5, 6, 9, 1};
auto cols = 4, rows = 3;  // rows = matrix.size() / cols;

for (auto x = 0; x < cols; ++x) {
    auto total = 0;
    for (auto y = 0; y < rows; ++y) {
        total += matrix[y * cols + x];
    }
    cout << "Col #" << x << " sums to " << total << "\n";
}
```

>

[Pseudo-matrice in Python](p09-matrici.html#/3)

---

# Allocazione e slicing di vector

- Metodo `assign` per allocare un `vector`
    - *Dimensione* nota
    - *Valore iniziale* uguale per tutti gli elementi

``` cpp
vector<string> some_list;
some_list.assign(10, ""); // some_list contains 10 strings
```

- *Iteratori* per *slicing*, inserimenti, rimozioni
    - Operazioni su *vector* e *string*

``` cpp
vector<int> vals = {0, 1, 2, 3, 4, 5};
vector<int> some = {vals.begin()+1 , vals.begin()+4};  // [1, 2, 3]
vector<int> last_two = {vals.end()-2 , vals.end()};  // [4, 5]
```

---

![large](images/fun/iterator.png)
# 🔬 Iteratori e algoritmi

``` cpp
// insert at index 1, other elems shift
grocery.insert(grocery.begin() + 1, "bacon");
// remove elem at index 1, other elems shift back
grocery.erase(grocery.begin() + 1);
```

``` cpp
#include <algorithm>  // count, find, sort etc.
```

``` cpp
auto pos = find(grocery.begin(), grocery.end(), "egg");
if (pos != grocery.end()) {
    grocery.erase(pos);  // grocery contains "egg", remove it
}
```

>

[Slice in Python](p07-sequenze.html#/5)

---

![](images/fun/magnetic-tape.png)
# 🔬 Scrittura e lettura di file

``` cpp
#include <fstream>
// ifstream, ofstream etc.
```

``` cpp
// output file stream, ~ cout
ofstream file1{"output.txt"};

file1 << "Hello, file!\n";
```

``` cpp
// input file stream, ~ cin
ifstream file2{"input.txt"};
string line;
while (getline(file2, line)) {  // for line in file2
    cout << line.size();
}
```

---

# ⚠️ Lettura singola parola

- Operatore di *estrazione* : **`>>`**
    - Lettura fino al primo *whitespace* (spazio o altro)

``` cpp
#include <iostream>
using namespace std;

int main() {
    float weight, height;
    cout << "Weight (kg) and height (m)?\n";
    cin >> weight >> height;
    cout << "Your BMI is " << weight / (height*height) << "\n";
}
```

- ⚠️ Attenzione a usare `getline` dopo estrazione (`>>`)
    - `cin` contiene subito `\n` ⇒ `getline` dà stringa vuota
    - Scartare `\n` residuo : `cin.ignore()`

---

# Oggetti

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# ⭐ Definizione di una classe

``` cpp
class Ball {
    int x_, y_;  // private data
    int dx_ = 5, dy_ = 5, w_ = 20, h_ = 20;
public:
    Ball(int x0, int y0) {  // constructor
        x_ = x0; y_ = y0;
    }
    void move() {
        if (x_+dx_ < 0 || x_+dx_+w_ > ARENA_W) {
            dx_ = -dx_;
        }
        x_ += dx_;  // ...
    }
    int pos_x() { return x_; }
    int pos_y() { return y_; }
};
```

---

![](images/oop/balls.png)
# ⭐ Creazione e uso degli oggetti

``` cpp
int main() {
    auto b1 = Ball{40, 80};
    auto b2 = Ball{80, 40};

    for (auto i = 0; i < 25; ++i) {
        b1.move();
        b2.move();
        cout << b1.pos_x() << " " << b1.pos_y() << "\n";
        cout << b2.pos_x() << " " << b2.pos_y() << "\n\n";
    }
}
```

>

[ball.cpp](https://github.com/tomamic/fondcpp/blob/main/ball.cpp)

---

# 🧪 Cppyy: Chiamare C++ da Python

``` sh
pip3 install cppyy
```

``` py
import cppyy
cppyy.include("ball.cpp")
from cppyy.gbl import Ball

b1 = Ball(40, 80)
b2 = Ball(80, 40)

for i in range(25):
    b1.move()
    b2.move()
    print(b1.pos_x(), b1.pos_y())
    print(b2.pos_x(), b2.pos_y())
```

>

[ball.py](https://github.com/tomamic/fondcpp/blob/main/ball.py)

---

# 🧪 Calcolo dell'integrale

![](images/fun/integral.svg)

- Approssimare l'integrale di una funzione `f`
- Dividere un intervallo `(a, b)` sulle ascisse in `n` segmenti
- Calcolare l'altezza di `f` all'inizio di ogni semento
- Sommare le `n` aree: `dx * f(a + dx * i)`

>

[integral.py](https://github.com/tomamic/fondcpp/blob/main/integral.py) -
[integral.cpp](https://github.com/tomamic/fondcpp/blob/main/integral.cpp)

---

# 🔬 Livelli di astrazione

---

![](images/oop/pointer.png)
# 🔬 Puntatori

- Ogni dato presente in memoria ha un indirizzo: variabile puntatore per memorizzarlo
    - Operatore `&` per indirizzo di un dato
    - Op. `*` per accesso a dato puntato (*dereferenziazione*)

``` cpp
char i = 56;  // a byte
char* p;      // a ptr to some byte (uninitialized)
p = &i;       // now p points to i
*p = *p + 1;  // ++i
p = nullptr;  // ptr to nothing
```

---

# 🔬 Allocazione dinamica

``` cpp
auto b1 = Ball{40, 80};      // Ball
auto b2 = new Ball{80, 40};  // Ball*
//Ball* alias1 = &b1;        // no new ball is created
//Ball* alias2 = b2;         // no new ball is created

for (auto i = 0; i < 25; ++i) {
    b1.move();
    b2->move();
    cout << b1.pos_x() << ", " << b1.pos_y() << "\n";
    cout << b2->pos_x() << ", " << b2->pos_y() << "\n\n";
}
delete b2;
```

- No *garbage collection*: a `new` deve corrispondere `delete`

---

![](images/oop/animals.png)
# 🔬 Fattoria parlante

- *Classe base* come **interfaccia astratta**
- Es. `Animal`:
    - Tutti fanno un verso (*interfaccia*)
    - Ognuno lo fa diverso (*polimorfismo*)

``` cpp
class Animal {
public:
    virtual void say() = 0;
};
```

- Un metodo `virtual` *può* essere (ri)definito dalle sottoclassi
- Un metodo `=0` *deve* essere definito dalle sottoclassi

---

![](images/oop/polymorphism.png)
# 🔬 Classi concrete

``` cpp
class Dog : public Animal {
    string name_;
public:
    Dog(string name) { name_ = name; }
    void say() {
        cout << "I am " << name_ << " Dog. "
             << "I say: WOOF!\n";
    }
};
class Cat : public Animal {
    /* ... */
    void say() {
        cout << "I am " << name_ << " Cat. "
             << "I say: MEOW!\n";
    }
};
```

---

![](images/oop/peppa.png)
# 🔬 Lista di puntatori a oggetti

``` cpp
auto d = Dog("Danny");
auto c = Cat("Candy");
auto p1 = Pig("Peppa");
auto p2 = Pig("George");
// polymorphism requires pointers to objects
vector<Animal*> animals = {&d, &c, &p1, &p2};
for (auto a : animals) { a->say(); }
```

``` text
I am Danny Dog. I say: WOOF!
I am Candy Cat. I say: MEOW!
I am Peppa Pig. I say: OINK!
I am George Pig. I say: OINK!
```

>

[animals.cpp](https://github.com/tomamic/fondcpp/blob/main/animals.cpp)

---

![](images/oop/actor.svg)
# 🔬 Metodi virtuali puri

- Es.: metodo `move` di `Actor`
    - `virtual`: il metodo può essere ridefinito nelle sottoclassi (*polimorfo*)
    - `= 0`: il metodo non è implementato qui (la classe è *astratta*)
    - Polimorfismo C++ funziona solo con puntatori a oggetti

``` cpp
class Actor {
    virtual void move() = 0;
    // ...
};
```

>

[basic.hpp](https://github.com/tomamic/fondcpp/blob/main/g2d/basic.hpp)
<br>
[bounce.hpp](https://github.com/tomamic/fondcpp/blob/main/bounce.hpp)
<br>
[bounce.cpp](https://github.com/tomamic/fondcpp/blob/main/bounce.cpp)

---

![](images/qt/fifteen-puzzle.jpg)
# 🔬 Fifteen - Gioco astratto

``` c++
class BoardGame {
public:
    virtual void play_at(int x, int y) = 0;
    virtual void flag_at(int x, int y) = 0;
    virtual int cols() = 0;
    virtual int rows() = 0;
    virtual string value_at(int x, int y) = 0;
    virtual bool finished() = 0;
    virtual string message() = 0;

    virtual ~BoardGame() {}
};
```

>

[boardgame.hpp](https://github.com/tomamic/fondcpp/blob/main/g2d/boardgame.hpp)
<br>
[fifteen.cpp](https://github.com/tomamic/fondcpp/blob/main/fifteen.cpp)
<br>
[lightsout.cpp](https://github.com/tomamic/fondcpp/blob/main/lightsout.cpp)

---

# 🔬 Compilazione separata

- C++: definizione della classe separata dalla implementazione dei metodi
    - Definizione fornita agli utenti
    - Implementazione compilata in libreria
- Sorgenti organizzati in 3 file:
    - `ball.h` – definizione della classe
    - `ball.cpp` – implementazione dei metodi
    - `main.cpp` – applicazione che usa la classe
    - Dall'ambiente di sviluppo: *Add new → C++ Class*

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# 🔬 Definizione: ball.h

``` cpp
#ifndef BALL_H  // to avoid multiple definitions
#define BALL_H

class Ball {
    int x_, y_;  // private stuff
    int dx_ = 5, dy_ = 5;
public:
    Ball(int x0, int y0);  // just declarations
    void move();
    int pos_x();
    int pos_y();
};

#endif // BALL_H
```

---

![](images/oop/anim-bounce.png)
# 🔬 Implementazione: ball.cpp

``` cpp
#include "ball.h"

const int ARENA_W = 480, ARENA_H = 360, BALL_W = 20, BALL_H = 20;

Ball::Ball(int x0, int y0) {
    x_ = x0; y_ = y0;
}
void Ball::move() {
    if (x_+dx_ < 0 || x_+dx_ > ARENA_W-BALL_W) dx_ = -dx_;
    if (y_+dy_ < 0 || y_+dy_ > ARENA_H-BALL_H) dy_ = -dy_;
    x_ += dx_; y_ += dy_;
}
int Ball::pos_x() { return x_; }
int Ball::pos_y() { return y_; }
```

---

![](images/oop/balls.png)
# 🔬 Applicazione: main.cpp

``` cpp
#include "ball.h"
// ...
int main() {
    Ball b1{40, 80}, b2{80, 40};

    for (auto i = 0; i < 25; ++i) {
        b1.move(); b2.move();
        cout << b1.pos_x() << ", " << b1.pos_y() << "\n";
        cout << b2.pos_x() << ", " << b2.pos_y() << "\n\n";
    }
}
```

``` sh
g++ -c ball.cpp
g++ -c main.cpp
g++ -o ball ball.o main.o
```

---

# 🔬 Swig: C++ per moduli Python

``` text
// file: ball.i
%module ball
%include "std_string.i"
%{
#include "ball.h"  // Include the header in the wrapper code
%}
%include "ball.h"  // Parse the header to generate wrappers
```

``` sh
swig -python -c++ ball.i
g++ -fPIC -shared *.cpp *.cxx -I/usr/include/python3.8 -o _$module.so
```

``` py
from ball import Ball
b = Ball(150, 200)
for i in range(10):
    b.move()
    print(b.pos_x(), b.pos_y())
```
