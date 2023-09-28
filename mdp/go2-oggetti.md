![](images/oop/balls.png)
# Funzioni e oggetti
## Introduzione alla programmazione

---

![](images/fun/function.png)
# Definizione di funzioni

- **Funzione**: operatore, applicato a operandi, per ottenere un risultato
    - **`func`** per definire una funzione
    - **`return`** per terminare la funzione e restituire un risultato

``` go
func Hypotenuse(a, b float64) float64 {
    c := math.Sqrt(a*a + b*b)
    return c
}
```

---

# Chiamata di funzioni

- **`func`** definisce una funzione, ma non la esegue!
- Bisogna *chiamarla*
- Esecuzione di una f.: nuovo *spazio di nomi*
    - Param. e var. hanno **ambito locale**
    - Non visibili nel resto del programma
    - Nomi uguali, definiti altrove, restano distinti

``` go
func main() {
    side1 := ToFloat(Prompt("1st leg?"))
    side2 := ToFloat(Prompt("2st leg?"))
    side3 := Hypotenuse(side1, side2)
    Println("3rd side: ", side3)
}
```

---

# Parametri di funzioni

- **Parametri formali**: nomi usati nella *definizione*
- **Parametri effettivi**: valori passati alla funz.
- Parametri passati “*per copia*”
    - Variabili e valori all'esterno: non vengono modificati
    - (Slice e oggetti passati per puntatore: modifiche *permanenti*)
- Si possono restituire più valori, come *tupla*
    - `return 7, 5, "black"`

---

# Passaggio per copia

``` go
func Inc(a int) int {
    a += 1
    Println(a)  // just for debug
}

func main() {
    x = 10
    Inc(x)
    Println(x)      // just for debug
}
```

---

# ⏩ Documentazione di funzioni

- Solo le funzioni denominate con la maiuscola sono pubbliche
- Altrimenti, usabili solo all'interno dello stesso modulo
- *Docstring*: descrizione testuale di una funzione
- *`go doc`*: comando per visualizzare la documentazione

``` go
// Return the hypotenuse of a right triangle,
// given both its legs (catheti).
func Hypotenuse(leg1, leg2 float64) float64 {
    return math.Sqrt(leg1*leg1 + leg2*leg2)
}
```

---

![](images/fun/times-table.svg)
# Cicli e annidamento

``` go
max := 10
y := 3
for x := 1; x <= max; x++ {
    Println(x * y)
    // Printf("%4d", x * y)
}
```

``` go
max := 10
for y := 1; y <= max; y++ {
    for x := 1; x <= max; x++ {
        Printf("%4d", x * y)  // width = 4, no newline
    }
    Println()
}
```


>

<http://www.ce.unipr.it/gopherjs/?p2_for_tables.go>

---

# 🥷 Scrittura con formattazione

- **`g2d.Printf`**: *scrittura con formattazione*
    - Primo parametro: *stringa di formato*
    - Segnaposto (`%`) per incorporare i parametri successivi
    - Usare `\n` per andare a capo

``` go
Printf("%2d", 3)     // " 3", int, width 2
Printf("%6.2f", 7.3) // "  7.30", float, width 6, precision 2
Printf("%d", '🌐')   // "127760", code
Printf("%c", '🌐')   // "🌐", char
Printf("%s", "hi!")  // "hi!", string
```

>

<https://golang.org/pkg/fmt>

---

# Procedura

- Funzione senza `return`, solo I/O ed effetti collaterali
    - *Astrazione*, per riuso e leggibilità
    - Riduce i livelli di annidamento

``` go
func printRow(y, size int) {
    for x := 1; x <= size; x++ {
        Printf("%4d", x * y)
    }
    Println()
}
func printTable(size int) {
    for y := 1; y <= size; y++ {
        printRow(y, size)
    }
}
```

---

# Animazione

``` go
var image = LoadImage("ball.png")
var x, y, dx = 50, 50, 5
var screen = Point{480, 360}

func tick() {
    //if KeyPressed("Enter") { ... }
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

# Tick, tastiera e mouse

- **`g2d.MainLoop`**: *ciclo di gestione degli eventi*
    - Parametro opzionale: funzione che sarà chiamata periodicamente
- **`g2d.KeyPressed`**: *controllo se un tasto è stato premuto*
    - Risultato: `bool`
    - Parametro: `string` nome del tasto
    - Es.: `"q", "1", "ArrowLeft", "Enter", "Spacebar", "LeftButton"`
- **`g2d.KeyReleased`**: *controllo se un tasto è stato rilasciato*
    - Stessi parametri e risultato
- **`g2d.MousePosition`**: *posizione del mouse*
    - Risultato: `Point`

>

<https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values>

---

![](images/oop/anim-bounce.png)
# Funzione per rimbalzi

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

# 🥷 Effetti collaterali

- Operazioni di lettura/scrittura, modifica di variabili globali o oggetti passati per puntatore...
- Annullano la **trasparenza referenziale**
    - Impossibile semplificare, sostituendo una chiamata a funzione col suo valore di ritorno (es. presenti operazioni di I/O)
- Rendono la funzione **non idempotente**
    - Chiamata più volte, con gli stessi parametri, può restituire risultati diversi
- → Difficile fare verifiche matematiche
    - `z := f(Sqrt(2), Sqrt(2))`
    - `s := Sqrt(2)` <br> `z := f(s, s)`

---

# 🥷 Funzioni non idempotenti

- Esempio di semplificazione
    - `p := rq(x) + rq(y) * (rq(x) – rq(x))`
    - `p := rq(x) + rq(y) * (0)`
    - `p := rq(x) + 0`
    - `p := rq(x)`
- Ma se `rq` ha effetti collaterali, non si può!

``` go
var baseValue = 0  // global variable

func rq(x int) int {
    baseValue++
    return x + baseValue
}
```

>

Se `x, y = 3, 4`, ad esempio, i due risultati sono `-2` e `4`

---

# Oggetti

---

![](images/oop/pointer.png)
# Puntatori

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
# Classi e oggetti

- Ogni *oggetto* ha una **classe** di origine
    - La classe dà la stessa forma iniziale (campi e metodi) a tutti i suoi oggetti
- Ma ogni *oggetto* ha la sua **identità**
    - Stato e locazione in memoria distinti da quelli di altri oggetti
    - Sia instanze di classi diverse che della stessa classe

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# Definizione della classe

- **Incapsulamento** dei dati
    - Campi in minuscolo: visibilità limitata al modulo
    - Funzione costruttore in maiuscolo: esportata

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
var arenaW, arenaH = 480, 360

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
```

---

# Metodi getter

``` go
func (b *Ball) Position() Point {
    return Point{b.x, b.y}
}

func (b *Ball) Size() Point {
    return Point{b.w, b.h}
}
```

---

# Applicazione

``` go
func main() {
    b1 := NewBall(Point{40, 80})  // Create two objects,
    b2 := NewBall(Point{80, 40})  // instances of the Ball class

    for i := 0; i < 25; i++ {
        b1.Move()
        b2.Move()
        Println("Ball 1 @", b1.Position())
        Println("Ball 2 @", b2.Position())
    }
}
```

>

<http://www.ce.unipr.it/gopherjs/?p2_oop_ball.go>

---

# Animazione di due palline

``` go
var b1 = NewBall(Point{40, 80})
var b2 = NewBall(Point{80, 40})

func tick() {
    ClearCanvas()            // BG
    b1.Move()
    b2.Move()
    FillRect(b1.Position(), b1.Size())  // FG
    FillRect(b2.Position(), b2.Size())  // FG
}

func main() {
    InitCanvas(Point{arenaW, arenaH})
    //SetFrameRate(30)  // default
    MainLoop(tick)
}
```

---

# Variabili locali, parametri, campi

- *Campi*: memorizzano i dati caratteristici di una istanza
    - Ogni pallina ha la sua posizione `(x, y)` e la sua direzione `(dx, dy)`
- *Parametri*: passano altri valori a un metodo
    - Se alcuni dati necessari non sono nei campi
- *Variabili locali*: memorizzano risultati parziali
    - Generati durante l'elaborazione del metodo
    - Nomi cancellati dopo l'uscita dal metodo
- *Variabili globali*: definite fuori da tutte le funzioni
    - Usare sono se strettamente necessario
    - Meglio avere qualche parametro in più, per le funzioni

---

# Esercizi

---

![](images/misc/ellipse.svg)
# 2.1 Area di un'ellisse

- Definire una *funzione* `EllipseArea` che:
    - Riceve come *parametri* i semiassi di una ellisse: `a`, `b`
    - Restituisce come risultato l'area dell'ellisse: `π⋅a⋅b`
- Definire una *funzione* `main` che:
    - Chiede all'utente due valori
    - Invoca la funzione `EllipseArea` con questi parametri
    - Stampa il risultato ottenuto

---

![](images/misc/color-grid.png) ![](images/oop/raster-tile.png)
# 2.2 Griglia di colori

- Chiedere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- In orizzontale, aumentare gradatamente la componente di blu
- In verticale, aumentare gradatamente la componente di verde

>

Cominciare a creare una griglia di riquadri tutti neri, con due cicli annidati

Lasciare tra i riquadri un piccolo margine

---

![](images/misc/frogger.png)
# 2.3 Movimento orizzontale

- Mostrare una pallina che si muove in orizzontale
    - Variabile `dx` indica lo spostamento da effettuare a ogni ciclo
- La pallina riappare dal bordo opposto, dopo un po' di tempo
    - Permettere alla `x` della pallina di superare i bordi laterali
    - Fissare dei margini esterni di `100px` (p.es.) rispetto ai bordi dell'arena
    - Se però la `x` raggiunge uno dei margini esterni, viene riportata al margine opposto
- Alla pressione del tasto `Enter`, la pallina inverte la direzione

---

![](images/misc/frogger.png)
# 2.4 Movimento per 5 fotogrammi

- Riprendere l'esercizio 2.3
- La pallina si muove solo dopo la pressione del tasto `Enter`
- Esegue i suoi comportamenti già definiti, ma solo per 5 fotogrammi
- Dopo 5 fotogrammi si ferma, in attesa di una nuova pressione del tasto

>

Incrementare (o decrementare) un contatore a ogni chiamata a `tick`

---

![](images/misc/ellipse.svg)
# 2.5 Classe per ellisse

- Classe che modella un'ellisse
- Campi privati (parametri del costruttore)
    - Semiassi: `a, b`
- Metodi pubblici per ottenere...
    - Area: `π⋅a⋅b`
    - Distanza focale: `2⋅√|a² - b²|`
- Nel corpo principale del programma...
    - Creare un oggetto con dati forniti dall'utente
    - Visualizzare area e distanza focale dell'ellisse

---

![](images/misc/frogger.png)
# 2.6 Animazione di un veicolo

- Partire dalla classe `Ball` vista a lezione
- Eseguire l'animazione
    - Per ogni frame, chiamare il metodo `move` della pallina
    - Rappresentare un rettangolo nella posizione aggiornata della pallina
- Modificare però il metodo `Move`
    - La pallina si sposta sempre di pochi pixel, solo in orizzontale
    - Se supera 100px oltre il bordo destro, ricompare a 100px prima del bordo sinistro e viceversa

---

![](images/misc/frogger.png)
# 2.7 Pallina con conteggio

- Partire di nuovo dalla classe `Ball` vista a lezione
- La pallina si muove solo dopo la pressione del tasto `Enter`
- Esegue i suoi comportamenti già definiti, ma solo per 5 fotogrammi
- Dopo 5 fotogrammi si ferma, in attesa di una nuova pressione del tasto

---

![](images/misc/space-invaders-school.png)
# 2.8 Animazione di un alieno

- Partire di nuovo dalla classe `Ball` vista a lezione
- Il movimento di base però è solo orizzontale
- Arrivato al bordo, il personaggio:
    - Si sposta di qualche pixel verso il basso
    - Poi cambia direzione orizzontale
- Fare in modo che, in ogni frame, lo spostamento sia solo orizzontale, o solo verticale, ma *non* diagonale

---

![](images/misc/spiral-circles.png)
# 🥷 2.9 Spirale a oggetti

- Mostrare l'*animazione* di un cerchio lungo una spirale
- Realizzare una classe per gestire dati e comportamento del cerchio
- Implementare il movimento in un metodo `Move()`
- Campi: `xc`, `yc`, `i`
    - `i` conta i passi; se eccede il limite, torna a 0
