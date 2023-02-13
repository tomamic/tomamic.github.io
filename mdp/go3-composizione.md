![](images/oop/lego-blocks.png)
# Liste e composizione
## Introduzione alla programmazione

---

![](images/fun/shopping-list.png)
# Slice

- Sequenza di elementi, dello stesso **tipo**
    - L'intera lista (*slice*) può essere assegnata ad una variabile, così diamo un **nome** alla lista
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

- **Attenzione ad usare indici validi!**
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
# Cicli su liste: for

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

- Ad ogni iterazione, a `value` è assegnato un diverso elemento della lista `grocery`
- `index` e/o `value` possono essere omessi (sostituiti con `_`)

---

# 🥷 Cicli su stringhe: for

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
# 🥷 Porzioni di lista

- Selezione degli elementi tra...
    - il primo indice (*compreso*)...
    - ed il secondo indice (*escluso*)

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

---

# 🥷 Concatenazione, rimozione

``` go
grocery := []string{"spam", "eggs", "beans"}
Println(grocery)

grocery = append(grocery, "bacon")          // add to the end
Println(grocery)

moreStuff := []string{"sausage", "mushrooms"}
grocery = append(grocery, moreStuff...)     // concatenation
Println(grocery)

grocery = append(grocery[:2], grocery[3:]...)  // remove val @ 2
Println(grocery)
```

>

<https://github.com/golang/go/wiki/SliceTricks>

---

# 🥷 Stringhe e liste

- **`Join`** e **`Split`**, da lista a stringa e viceversa
    - Nel package *`strings`*

``` go
someDays := []string{"tue", "thu", "sat"}
someTxt := strings.Join(someDays, "|")
// a single string: "tue|thu|sat"

otherTxt := "mon|wed|fri|sun"
otherDays := strings.Split(otherTxt, "|")
// a list of strings: {"mon", "wed", "fri", "sun"}
```

---

# Composizione

---

# Lista di palline

``` go
var balls = []*Ball{NewBall(Point{40, 80}),
                    NewBall(Point{80, 40})}

func tick() {
    ClearCanvas() // BG
    for _, b := range balls {
        b.Move()
        FillRect(b.Position()) // FG
    }
}
func main() {
    InitCanvas(screen)
    MainLoop(tick)
}
```

>

<http://www.ce.unipr.it/gopherjs/?p3_oop_balls.go>

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
    for i, b := range a.balls { b.Move() }
}
func main() {
    arena := &BallArena{}
    arena.Spawn(NewBall(Point{40, 80})) // ...
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

>

<http://www.ce.unipr.it/gopherjs/?p3_oop_animals.go>

---

![](images/oop/polymorphism.png)
# Classi concrete

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
p1 := NewPig("Peppa")
p2 := NewPig("George")
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

---

![](images/oop/actors.svg)
# Interfacce

- `Actor`: *interfaccia*
    - Dichiara un metodo `move` ecc.
- Vari attori: *classi implementazione*
    - Implementano caratteristiche di `Actor`
    - Definiscono comportamenti specifici

``` go
type Actor interface {
    Move()
}
```

---

# Generalizzazione e riuso

``` go
type Arena struct { actors []Actor }
func (a *Arena) Add(c Actor) {
    a.actors = append(a.actors, c)
}
func (a *Arena) MoveAll() {
    for i, c := range a.actors {
        c.Move()
    }
}
```

- Codice dipendente dalle classi più astratte, più in alto nella gerarchia
    - `Arena` riutilizzabile creando nuove classi derivate di `Actor`

---

![](images/oop/actor.svg)
# Sostituzione

``` go
arena.Spawn(NewBall(Point{40, 80}))
arena.Spawn(NewGhost(Point{120, 40})) // ...
arena.Tick()
```

- Principio di **sostituzione** di Liskov
    - Si può sempre usare un oggetto di una *classe implementazione*, al posto di uno della *interfaccia*
- Relazione *has-a* tra un oggetto `Arena` e gli oggetti `Actor` che contiene
- Relazione *is-a* tra classi implementazione (`Ball` e `Ghost`) e interfaccia (`Actor`)

>

<http://www.ce.unipr.it/gopherjs/?g2d/actor.go>

---

# Ereditarietà e polimorfismo

- **Classe implementazione**
    - Implementa le caratteristiche della interfaccia
    - Può definire nuove caratteristiche specifiche
- **Metodo polimorfo**
    - Definito in modo diverso nelle classi implementazione
    - Attori diversi possono muoversi in modo diverso

``` go
type Ghost struct { x, y int }  // ...
func (g *Ghost) Move() {
    dx := 5 * RandInt(-1, 1)
    dy := 5 * RandInt(-1, 1)
    g.x = (g.x + dx + screen.W) % screen.W
    g.y = (g.y + dy + screen.H) % screen.H
}
```

---

# Attori e arena

``` go
type Ghost struct {
    arena *Arena
    x, y  int
}
func NewGhost(arena *Arena, x, y int) *Ghost {
    g := &Ghost{arena, x, y}  // save a ref to the arena
    arena.Spawn(g)              // register yourself into the arena
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

# Animazione dei personaggi

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

<http://www.ce.unipr.it/gopherjs/?p3_oop_bounce.go>

---

![](images/oop/collision.svg) ![](images/oop/reflection.png)
# Collisioni

- Molti algoritmi di *collision detection*
    - Casi semplici: intersezione di rettangoli
- In caso di collisione, `Arena`...
    - Invoca il metodo `collide` di entrambi gli oggetti
    - Collisione tra personaggio `self` e personaggio `other` (secondo parametro)
- Possibili errori nel calcolo del rimbalzo
    - Di solito accettabili
    - Altrimenti, applicare correzioni

---

# Urti delle palline

``` python
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
    - Restituisce un riferimento a `Ghost` ed un `bool`

---

# Esercizi

---

![](images/misc/histogram-rot.svg)
# 3.1 Istogramma con barre orizzontali

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Mostrare un istogramma
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile

---

![](images/misc/dice.png)
# 3.2 Risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
- Contare quante volte si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due dadi

>

Per conteggiare i vari risultati, usare una lista di (almeno) 11 valori

---

![](images/misc/frogger.png)
# 3.3 Veicoli nell'arena

- Partire dalla classe `Vehicle`
    - [x2_oop_vehicle.go](http://www.ce.unipr.it/gopherjs/?x2_oop_vehicle.go)
- Renderla una implementazione concreta di `Actor`
    - Aggiungere i metodi `symbol` e `collide`, anche solo vuoti
- Aggiungere i veicoli all'arena
    - Chiamare `arena.Spawn`
    - Poi, in `tick` chiamare `arena.Tick`

---

![](images/misc/frogger.png)
# 3.4 Rana in arena

- Partire dalla classe `Turtle`, per creare un personaggio `Frog`
    - [p3_oop_bounce.go](http://www.ce.unipr.it/gopherjs/?p3_oop_bounce.go)
- Modificare per conteggiare i frame di un salto
    - Es. spostare la rana di 4px, per 8 frame
- Dopo un salto la rana si ferma
- Mentre è in salto, la rana non accetta altri comandi

---

![](images/misc/frogger.png)
# 3.5 Rana investita

- Scrivere il metodo `collide` della rana
- Se si scontra con un veicolo, la rana muore
    - La riportiamo alla posizione di partenza; oppure...
    - La togliamo dall'arena e terminiamo il gioco

---

![](images/misc/space-invaders-school.png)
# 3.6 Alieni nell'arena

- Partire dalla classe `Alien`
    - [x2_oop_alien.go](http://www.ce.unipr.it/gopherjs/?x2_oop_alien.go)
- Renderla una implementazione concreta di `Actor`
    - Aggiungere i metodi `symbol` e `collide`, anche solo vuoti
- Aggiungere gli alieni all'arena
    - Chiamare `arena.Spawn`
    - Poi, in `tick` chiamare `arena.Tick`

---

![](images/misc/space-invaders-school.png)
# 3.7 Pallottole

- Continuare l'es. precedente
    - [x3_oop_alien.go](http://www.ce.unipr.it/gopherjs/?x3_oop_alien.go)
- Aggiungere un attore `Bullet`
    - Parte dal fondo e si muove verso l'alto
    - Se esce dallo schermo, si rimuove dal gioco
    - Se si scontra con un alieno, entrambi si rimuovono dal gioco
- Nella funzione `update`, generare casualmente dei `Bullet`

---

# 🥷 3.8 Mario

- Modificare l'esempio `Turtle`
- Cosiderare l'accelerazione *costante* `g` di gravità (es. `0.5`)
- Ad ogni mossa, aggiurere `g` a `dy`
- Permettere a `Mario` di saltare solo quando è sul fondo

---

# 🥷 3.9 Piattaforme

- Aggiungere all'esercizio 3.8 un classe `Wall`
    - Rettangolo immobile
- Quando Mario collide con una piattaforma...
    - Si sposta al bordo della piattaforma più vicino
    - Se atterra sul bordo superiore, da lì può saltare
