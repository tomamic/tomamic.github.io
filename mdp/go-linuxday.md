![](images/dev/golang.svg)
# Il linguaggio Go
## Introduzione al linguaggio con lo sviluppo di giochi 2D <br> Parma, Linux Day 2019

---

![](images/dev/gopher.svg)
# Dal C al Cloud

- Avvio in Google ~2007, radici nel *C*
    - Rob *Pike* e Ken *Thompson* (pionieri Unix), con Robert Griesemer
    - “The Go Programming Language”, libro di Brian W. *Kernighan*, Alan Donovan
- Avversione per il *C++*
    - Dopo presentazione di 35 caratteristiche del C++11
    - Durante lunghe pause per compilare codice C++
- Open source, licenza BSD-style
    - Docker, Kubernetes, Golang
    - Google, Facebook, Netflix , Dropbox etc.
    - Sviluppo di applicazioni distribuite, web e cloud

>

<https://commandcenter.blogspot.it/2012/06/less-is-exponentially-more.html>

---

# Less is exponentially more

- Pochi concetti, tra loro ortogonali
    - Senza *eccezioni*, né *template*, né *ereditarietà*
    - *Interfacce* e *duck typing*
    - *Type inference*: inizializzazione con operatore `:=`
    - *Garbage collection*, ma codice *nativo* (senza macchina virtuale)
    - *Communicating sequential processes*
- Sintassi semplice e compilazione immediata
    - *Static, but feels dynamic*

---

![](images/algo/helloworld.png)
# Hello, browser!

- Avvio da funzione **`main`** in modulo `main`
- Modulo speciale **`g2d`** per disegno ecc.

``` go
package main

import "g2d"  // import . "g2d" -- to skip the prefix

func main() {
    g2d.Alert("Hello, browser!")      // msg in a dialog
}
```

``` cppmd
go get -u github.com/tomamic/fondinfo/go/g2d
go run hello.go
```

>

*Playground:* <http://www.ce.unipr.it/gopherjs>

---

![](images/repr/additive-color.svg)
# Strutture per grafica

- Strutture e funzioni definite nel modulo `g2d`

``` go
type Point struct{ X, Y int }
type Rect struct{ X, Y, W, H int }
type Color struct{ R, G, B int }
```

``` go
center := Point{150, 100}
rectangle := Rect{150, 100, 200, 200}  // square
myBlue := Color{10, 10, 200}  // each component in 0..255
```

>

*Documentazione del modulo g2d:*

<https://github.com/tomamic/fondinfo/tree/master/go/g2d>

---

![large](images/oop/raster-coord.png)
# Disegno nel browser

``` go
// width, height
InitCanvas(Point{640, 480})

// red + green = yellow
SetColor(Color{255, 255, 0})
// left, top, width, height
FillRect(Rect{150, 100, 250, 200})

SetColor(Color{0, 0, 255})
// center, radius
FillCircle(Point{400, 300}, 20)

// manage the window/canvas
MainLoop()
```

>

<http://www.ce.unipr.it/gopherjs/?p1_draw.go>

---

![](images/algo/if-else.svg)
# ⏩ Selezione: if ... else

- Corpo di `if` o `else` tra graffe
- Clausola `else`: opzionale

``` go
radius := ToInt(Prompt("Radius? [50-99]"))

if r := radius; 50 <= r && r <= 99 {
    SetColor(Color{0, 0, 255})
    FillCircle(Point{200, 200}, r)
} else {
    Alert("Out of range!")
}

SetColor(Color{255, 255, 0})
FillCircle(Point{200, 200}, 25)
```

>

<http://www.ce.unipr.it/gopherjs/?p1_if_else.go>

---

![](images/misc/red-squares.svg)
# ⏩ Iterazione: for

- Versione più semplice: sostituisce `while`, assente
- Condizione di *permanenza* nel ciclo
- Controllo *preliminare*

``` go
i := 0
for i < 5 {
    x, y, red := i * 40, i * 40, i * 60
    SetColor(Color{red, 0, 0})
    FillRect(Rect{x, y, 140, 140})
    i++
}
```

---

![](images/misc/red-squares.svg)
# ⏩ Sequenza di quadrati

``` go
for i := 0; i < 5; i++ {
    x, y, red := i * 40, i * 40, i * 60
    SetColor(Color{red, 0, 0})
    FillRect(Rect{x, y, 140, 140})
}
```

>

<http://www.ce.unipr.it/gopherjs/?p1_red_squares.go>

---

![](images/misc/color-grid.png) ![](images/oop/raster-tile.png)
# ⏩ Griglia di colori

``` go
for y := 0; y < rows; y++ {
    for x := 0; x < cols; x++ {
        SetColor(Color{0, y * dgreen, x * dblue})
        FillRect(Rect{x * w, y * h, w - 1, h - 1})
    }
}
```

>

<http://www.ce.unipr.it/gopherjs/?x2_color_grid.go>

---

![](images/fun/function.png)
# ⏩ Definizione di funzioni

- **`func`** per definire una funzione
    - Parametri passati “*per copia*”
- **`return`** per terminare la funzione e restituire un risultato
    - Possibile restituire più risultati, come tupla

``` go
func Hypotenuse(a, b float64) float64 {
    c := math.Sqrt(a*a + b*b)
    return c
}
```

---

# Animazione

``` go
var image = LoadImage("ball.png")
var x, y, dx = 50, 50, 5
var screen = Point{480, 360}

func tick() {
    //if KeyPressed("LeftButton") { ... }
    //if x + dx > screen.W { ... }
    ClearCanvas()                  // Draw background
    DrawImage(image, Point{x, y})  // Draw foreground
    x += dx                        // Update ball's position
}
func main() {
    InitCanvas(screen)
    MainLoop(tick)  // Call tick 30 times/second
}
```

<http://www.ce.unipr.it/gopherjs/?p2_fun_anim.go>

---

# ⏩ Tick, tastiera e mouse

- **`g2d.MainLoop`**: *ciclo di gestione degli eventi*
    - Parametro opzionale: funzione che sarà chiamata periodicamente
- **`g2d.KeyPressed`**: *controllo se un tasto è stato premuto*
    - Risultato: `bool`
    - Parametro: `string` nome del tasto
    - Es.: `"q", "1", "ArrowLeft", "Enter", "LeftButton"`
- **`g2d.KeyReleased`**: *controllo se un tasto è stato rilasciato*
    - Stessi parametri e risultato
- **`g2d.MousePosition`**: *posizione del mouse*
    - Risultato: `Point`

>

<https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values>

---

![](images/oop/anim-bounce.png)
# ⏩ Funzione per rimbalzi

- Le funzioni forniscono limitata astrazione
    - Incapsulano il comportamento
    - Ma espongono i dati

``` go
func moveBall(x, y, dx, dy int) (int, int, int, int) {
    if x + dx < 0 || x + dx + size.X > screen.X {
        dx = -dx
    }
    if y + dy < 0 || y + dy + size.Y > screen.Y {
        dy = -dy
    }
    return x + dx, y + dy, dx, dy
}
```

<http://www.ce.unipr.it/gopherjs/?p2_fun_ball.go>

---

# Oggetti

---

![](images/oop/pointer.png)
# ⏩ Puntatori

- Ogni dato in memoria ha un indirizzo
- Variabile puntatore per memorizzarlo
- *Referenziazione*: `&` per indirizzo di un dato
- *Dereferenziazione*: `*` per accesso a dato puntato

``` go
var i int8 = 56  // one byte
var p *int8      // a ptr to some byte (uninitialized)
p = &i           // now p points to i
*p = *p + 1      // i++
Println(*p, i)
p = nil          // ptr to nothing
```

>

Come in *C*, ma *senza* “aritmetica”

---

![](images/oop/basic-object.svg)
# Oggetto

- Rappresenta un *oggetto fisico* o un *concetto* del dominio
- Memorizza il suo **stato** interno in *campi privati*
    - *Incapsulamento (black box)*
- Offre un insieme di **servizi**, come *metodi pubblici*
    - Realizza un *tipo di dato astratto (ADT)*

---

![](images/oop/cookie-cutter.png)
# Tipi e oggetti

- Ogni *oggetto* ha un tipo *`struct`* di origine, ~ *classe*
    - Stessa forma iniziale (campi e metodi) a tutti i suoi oggetti
- Ma ogni *oggetto* ha la sua **identità**
    - Stato e locazione in memoria distinti da quelli di altri oggetti
    - Sia instanze di tipi diversi che dello stesso tipo

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# Definizione del tipo

- **Incapsulamento** dei dati
    - Campi in *minuscolo*: visibilità limitata al modulo
    - Funzione costruttore in *maiuscolo*: esportata

``` go
type Ball struct {
    x, y    int
    w, h    int
    dx, dy  int
}

func NewBall(pos Point) *Ball {
    b := &Ball{pos.X, pos.Y, 20, 20, 5, 5}
    return b
}
```

---

![](images/oop/bob-builder.jpg)
# Costruzione oggetti

- **`NewBall`**: funzione *costruttore*
    - Invocata per creare un oggetto
    - *Instantiation is initialization*
    - Restituisce un puntatore all'oggetto

``` go
ball := NewBall(Point{40, 80})  // Allocation and initialization
```

---

# Metodi

- Espongono *servizi* ad altri oggetti
- Bisogna indicare l'*oggetto ricevitore*, come puntatore

``` go
func (b *Ball) Move() {
    if !(0 <= b.x+b.dx && b.x+b.dx <= arenaW-b.w) {
        b.dx = -b.dx
    }
    if !(0 <= b.y+b.dy && b.y+b.dy <= arenaH-b.h) {
        b.dy = -b.dy
    }
    b.x += b.dx
    b.y += b.dy
}
func (b *Ball) Position() Rect {
    return Rect{b.x, b.y, b.w, b.h}
}
```

---

# Animazione di due palline

``` go
var b1 = NewBall(Point{40, 80})
var b2 = NewBall(Point{80, 40})

func tick() {
    ClearCanvas()            // BG
    b1.Move()
    b2.Move()
    FillRect(b1.Position())  // FG
    FillRect(b2.Position())  // FG
}

func main() {
    InitCanvas(Point{arenaW, arenaH})
    MainLoop(tick)
}
```

>

<http://www.ce.unipr.it/gopherjs/?p2_oop_ball_anim.go>

---

# Liste e composizione

---

![](images/fun/shopping-list.png)
# Slice

- Sequenza di elementi, dello stesso **tipo**
    - L'intera lista (*slice*) può essere assegnata a una variabile, così diamo un **nome** alla lista
- I singoli elementi sono **numerati**
    - Gli indici partono da 0!

``` go
grocery := []string{"spam", "eggs", "beans"}
```

``` go
rainfallData := []int{13, 24, 18, 15}
```

``` go
resultsByMonth := make([]int, 12)  // 12 times 0
```

---

![](images/fun/wile-coyote.png)
# Accesso agli elementi

- **Attenzione a usare indici validi!**
    - *Lunghezza* attuale di una lista `s`: `len(s)`
    - Elementi *numerati* da `0` a `len(s)-1`

``` go
grocery := []string{"spam", "eggs", "beans"}
n := len(grocery)      // 3
grocery[1] = "bacon"   // replace a value, len is still 3

Println(grocery[0])    // "spam"
Println(grocery[1])    // "bacon"
Println(grocery[n-1])  // "beans"


grocery = append(grocery, "sausage")  // add to the end, len is 4
Println(grocery)                      // guess!
```

---

![](images/fun/shopping-list.jpg)
# Range loop su liste

``` go
grocery := []string{"spam", "eggs", "beans"}

Println("Your grocery list contains:")

for _, value := range grocery {
    Println(value)
}
// for index, value := range grocery {
//    Println(index, value)
// }
```

- A ogni iterazione, a `value` è assegnato un diverso elemento della lista `grocery`
- `index` e/o `value` possono essere omessi (sostituiti con `_`)

---

# ⏩ Range loop su stringhe

- Si può usare un ciclo `for` su qualsiasi sequenza
- Anche su *stringa*: sequenza *immutabile* di caratteri (UTF-8)

``` go
for index, value := range "Hello, 🌐!" {
    Println(index, value)
}

for _, x := range "Hello, 🌐!" {
    Printf("%c  ", x)
    Printf("%d\n", x)
}
```

---

![](images/fun/month-list.svg)
# ⏩ Porzioni di lista

- Selezione degli elementi tra...
    - il primo indice (*compreso*)...
    - e il secondo indice (*escluso*)

``` go
months := []string{"Jan", "Feb", "Mar",
                   "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep",
                   "Oct", "Nov", "Dec"}

spring := months[2:5]       // [Mar Apr May]
quart1 := months[:3]        // [Jan Feb Mar]
quart4 := months[9:]        // [Oct Nov Dec]
wholeYear := months[:]      // The whole list
```

>

Funzioni `strings.Join` e `strings.Split`

---

![](images/oop/ball-arena.svg)
# Composizione

- Associazione **has-a**, **part-of** tra oggetti
    - Una arena *contiene* diverse palline

``` go
type BallArena struct { balls []*Ball }
func (a *BallArena) Add(b *Ball) {
    a.balls = append(a.balls, b)
}
func (a *BallArena) MoveAll() {
    for _, b := range a.balls { b.Move() }
}
func main() {
    arena := &BallArena{}
    arena.Add(NewBall(Point{40, 80})) // ...
    arena.MoveAll() // ...
}
```

---

# Interfacce

---

![large](images/oop/carnivora.png)
# 🌱️ Relazione is-a

- **Classificazione**, es. in biologia
    - *Vertebrati* sottoclasse di *animali*
    - *Mammiferi* sottoclasse di *vertebrati*
    - *Carnivori* sottoclasse di *mammiferi*
    - *Felini* sottoclasse di *carnivori*
    - *Gatti* sottoclasse di *felini*
- Relazione **is-a** tra classi: ogni sottoclasse...
    - Eredita i caratteri della classe base
    - Ma introduce delle specializzazioni
- In **Go** non c'è *ereditarietà*, ma **interfacce**

---

![](images/oop/animals.png)
# Fattoria parlante

- Noi definiremo una **interfaccia** come astrazione di base
- Es. `Animal`:
    - Tutti gli animali fanno un verso (*interfaccia*)
    - Ogni animale fa un verso diverso (*polimorfismo*)

``` go
type Animal interface {
    Say()
}
```

---

![](images/oop/polymorphism.png)
# Duck typing

- Basta che i *tipi concreti* implementino i metodi dell'interfaccia!

``` go
type Dog struct { name string }
func NewDog(name string) *Dog { return &Dog{name} }
func (d *Dog) Say() {
    Println("I'm " + d.name + " Dog. I say: WOOF!")
}

type Cat struct { name string }
func NewCat(name string) *Cat { return &Cat{name} }
func (c *Cat) Say() {
    Println("I'm " + c.name + " Cat. I say: MEOW!")
}
```

---

![](images/oop/peppa.png)
# Lista di oggetti

``` py
d := NewDog("Danny")
c := NewCat("Candy")
p1, p2 := NewPig("Peppa"), NewPig("George")
animals := []Animal{d, c, p1, p2}

for _, a := range animals {
    a.Say()
}
```

``` output
I am Danny Dog. I say: WOOF!
I am Candy Cat. I say: MEOW!
I am Peppa Pig. I say: OINK!
I am George Pig. I say: OINK!
```

>

<http://www.ce.unipr.it/gopherjs/?p3_oop_animals.go>

---

![](images/oop/actors.svg)
# Interfaccia dei personaggi

- `Actor`: *interfaccia*
    - Dichiara un metodo `move` ecc.
- Vari attori: *tipi concreti, implementazione*
    - Implementano caratteristiche di `Actor`
    - Definiscono comportamenti specifici

``` go
type Actor interface {
    Move()
    // ...
}
```

---

# Generalizzazione e riuso

``` go
type Arena struct { actors []Actor }
func (a *Arena) Add(actor Actor) {
    a.actors = append(a.actors, actor)
}
func (a *Arena) MoveAll() {
    for _, actor := range a.actors {
        actor.Move()
    }
}
```

- Codice dipendente dal tipo più astratto, più in alto nella gerarchia
    - `Arena` riutilizzabile creando nuovi tipi, implementazioni di `Actor`

---

# ⏩ Implementazioni e polimorfismo

- **Tipo concreto, implementazione**
    - Implementa le caratteristiche della interfaccia
    - Può definire nuove caratteristiche specifiche
- **Metodo polimorfo**
    - Definito in modo diverso nei vari tipi concreti
    - Attori diversi possono muoversi in modo diverso

``` go
type Ghost struct { x, y int }  // ...
func (g *Ghost) Move() {
    // ...
}
```

---

![](images/oop/actor.svg)
# ⏩ Sostituzione

``` go
arena.Add(NewBall(Point{40, 80}))
arena.Add(NewGhost(Point{120, 40})) // ...
arena.MoveAll()
```

- Principio di **sostituzione** di Liskov
    - Si può sempre usare un oggetto di un *tipo concreto*, quando è richiesta una *interfaccia*
- Relazione *has-a* tra un oggetto `Arena` e gli oggetti `Actor` che contiene
- Relazione *is-a* tra tipi concreti (`Ball` e `Ghost`) e interfaccia (`Actor`)

>

<http://www.ce.unipr.it/gopherjs/?g2d/actor.go>

---

# Attori e arena

``` go
type Ghost struct {
    arena *Arena
    x, y  int
}
func NewGhost(arena *Arena, x, y int) *Ghost {
    g := &Ghost{arena, x, y}  // save a ref to the arena
    arena.Add(g)              // register yourself into the arena
    return g
}
func (g *Ghost) Move() {
    dx, dy := 5 * RandInt(-1, 1), 5 * RandInt(-1, 1)
    as := g.arena.Size()      // ref to arena
    g.x = (g.x + dx + as.X) % as.X
    g.y = (g.y + dy + as.Y) % as.Y
}
```

>

<http://www.ce.unipr.it/gopherjs/?p3_oop_bounce.go>

---

![](images/oop/collision.svg) ![](images/oop/reflection.png)
# Collisioni

- Molti algoritmi di *collision detection*
    - Casi semplici: intersezione di rettangoli
- In caso di collisione, `Arena`...
    - Invoca il metodo `collide` di entrambi gli oggetti
    - Collisione tra personaggio e `other` (parametro)

``` go
type Actor interface {
    Move()
    Collide(other Actor)
    Position() Rect
    Symbol() Rect
}
```

>

<http://www.ce.unipr.it/gopherjs/?g2d/actor.go>

---

# Urti delle palline

``` go
func (b *Ball) Collide(other Actor) {
    _, ok := other.(*Ghost)
    if !ok {
        op := other.Position()
        if op.X < b.x { b.dx = b.speed }
        else { b.dx = -b.speed }
        if op.Y < b.y { b.dy = b.speed }
        else { b.dy = -b.speed }
    }
}
```

- *Downcast*: `other.(*Ghost)`
    - Converte l'oggetto `other` come istanza di `Ghost`
    - Restituisce un riferimento a `Ghost` e un `bool`

---

# Rimbalzi nel browser

``` go
var sprites = LoadImage("sprites.png")
var arena = NewArena(Point{480, 360})
var hero = NewTurtle(arena, Point{80, 80})  // actor knows the arena
func tick() {
    // ...
    arena.MoveAll()  // Game logic
    ClearCanvas()
    for _, a := range arena.Actors() {
        // Cut an area from a larger image
        DrawImageClip(sprites, a.Symbol(), a.Position())
    }
}
func main() {
    NewGhost(arena, Point{120, 80}); NewBall(arena, Point{40, 80}) // ...
    InitCanvas(arena.Size())
    MainLoop(tick)
}
```

---

![](images/oop/bounce.png)
# Controllo da tastiera

``` go
func tick() {
    if KeyPressed("ArrowUp") {
        hero.GoUp(true)
    } else if KeyReleased("ArrowUp") {
        hero.GoUp(false)
    }
    // ...
}
```

>

http://www.ce.unipr.it/gopherjs/?p3_oop_bounce.go
<br>
[**Esempi di progetti**](intro.html#🏊️-esempi-di-progetti)
