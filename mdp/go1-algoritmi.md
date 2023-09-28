![](images/algo/rubik-cube.png)
# Algoritmi in Go
## Introduzione alla programmazione

---

# Less is exponentially more

- Progetto avviato nel ~2007 presso Google, partendo dal C
    - Pionieri di Unix: Rob *Pike* e Ken *Thompson*, con Robert Griesemer
    - Libro: “The Go Programming Language” by Brian W. *Kernighan*, Alan Donovan
- Pochi concetti, tra loro ortogonali
    - Senza *eccezioni*, né *template*, né *ereditarietà*
    - *Interfacce* e *duck typing*, *Type inference*
    - *Garbage collection*, ma codice *nativo* (senza macchina virtuale)
    - *Communicating sequential processes*

>

Dopo una presentazione di 35 nuove caratteristiche del C++11, durante le pause per compilare codice C++...
<https://commandcenter.blogspot.it/2012/06/less-is-exponentially-more.html>

---

![](images/algo/helloworld.png)
# Hello, browser!

- Esecuzione parte da funzione **`main`** in modulo `main`
- Modulo speciale **`g2d`** per disegno ecc.
- **`g2d.Alert`**: *messaggio in finestra di dialogo*

``` go
package main

import . "g2d"

func main() {
    Alert("Hello, browser!")
}
```

>

<http://www.ce.unipr.it/gopherjs>

---

# Tipi di dato

- **Tipo di dato**: un insieme di *valori* e le *operazioni* ammesse
    - `int, float64, bool, string`
    - Operazioni aritmetiche e logiche, confronti
- **`int`** o **`float64`**, per numeri interi o reali
    - Operazioni di base: `+, -, *, /, %`
    - Divisione tra interi dà risultato intero
    - Confronti: `<, <=, >, >=, ==, !=`
-  **`bool`**, per valori booleani: `true, false`
    - Operazioni consentite: `&&, ||, !`
    - I confronti danno un risultato booleano

---

# Valori numerici e booleani

- **`g2d.Println`**: *scrittura dei risultati parziali*

``` go
package main

import . "g2d"

func main() {
    Println(3.0 / 2)  // 1.5
    Println(3 / 2)    // 1, truncated
    Println(3 % 2)    // 1, reminder
    Println(4 == 5)   // false, do not confuse with assignment!
    Println(2 < 3 || ! true)  // true
}
```

---

![](images/algo/my-shoes.png)
# Variabile

- Le comuni variabili sono *contenitori* di dati
- Occorrono **dichiarazioni** di tipo
    - Valore iniziale `0` o `""`, quando non specificato
- Possibile *type inference* (`:=`)
    - *Tipo* inferito dal valore di inizializzazione

``` go
var i, j int = 1, 2  // no type inference

k := 3.2
ans, txt := true, "no!"

Println(i, j, k, ans, txt)
```

---

![large](images/algo/assign.png)
# Riassegnamento

- Riassegnamento, operatore `=`
    - Alla sinistra una variabile *già definita*
    - Alla destra un valore
- *Non confondere* con confronto di uguaglianza `==`

``` go
pi := 3.14       // definition and initialization
radius := 2.2
area := pi * (radius * radius)
Println(area)    // 15.1976
radius = radius + 1
Println(radius)  // guess radius now
Println(area)    // ... and area!
```

---

# Stringhe di testo

- **`string`** per sequenze di caratteri *Unicode*
- Ogni carattere è di tipo `rune` (`int32`)
- Primi 128 codici *Unicode* == *ASCII*
- Confronto, in ordine *lessicografico*

``` go
str1 := "Hello,"
str2 := " 🌐"
result := str1 + str2
Println(result)              // "Hello, 🌐"

Println("first" < "second")  // true
Println("Second" < "first")  // true
Println('🌐' == 127760)      // true
```

---

# ⚙️ Tabella ASCII

![large](images/repr/ascii.svg)

---

![](images/algo/hello-user.svg)
# Leggere e scrivere

- **`g2d.Prompt`**: *ricezione di input dall'utente*
    - Mostra un messaggio
    - Poi blocca il programma in attesa
    - Risultato sempre di tipo `string`

``` go
user := Prompt("What's your name?")
Alert("Hello, ", user)
```

---

![](images/algo/sum3.svg)
# Somma di tre numeri

- **`g2d.ToInt`**: conversione da `string` a `int`
- **`g2d.ToFloat`**: conversione da `string` a `float64`

``` go
a := ToFloat(Prompt("Insert 1st val"))
b := ToFloat(Prompt("Insert 2nd val"))
c := ToFloat(Prompt("Insert 3rd val"))

total := a + b + c
Alert("The sum is ", total)
```

>

<http://www.ce.unipr.it/gopherjs/?p1_sum3.go>

---

![](images/repr/additive-color.svg)
# Strutture per grafica

- Strutture e funzioni definite nel modulo `g2d`

``` go
type Point struct{ X, Y int }
type Color struct{ R, G, B int }
```

``` go
center := Point{320, 240}     // x, y
size := Point{640, 480}       // width, height
myBlue := Color{10, 10, 200}  // each component in 0..255
```

---

![](images/oop/raster-coord.png)
# Disegno nel browser

``` go
// width, height
InitCanvas(Point{640, 480})

// red + green = yellow
SetColor(Color{255, 255, 0})
// left, top, width, height
FillRect(Point{150, 100}, Point{250, 200})

SetColor(Color{0, 0, 255})
// center, radius
FillCircle(Point{400, 300}, 20)

// manage the window/canvas
MainLoop()
```

---

![](images/oop/raster-coord.png)
# Linee e testi

``` go
SetColor(Color{0, 255, 0})
// from, to
DrawLine(Point{150, 100}, Point{400, 300})

SetColor(Color{255, 0, 0})
// text, left-top corner, font-size
DrawText("Hello", Point{150, 100}, 40)
```

>

<http://www.ce.unipr.it/gopherjs/?p1_draw.go>

---

# Strutture di controllo

---

![](images/algo/if.svg)
# Selezione: if

- Corpo di `if` o `else` tra graffe
    - *Indentazione* per migliore leggibilità
    - Può contenere qualsiasi istruzione
    - Anche altri blocchi `if` o `for` annidati!

``` go
radius := ToInt(Prompt("Radius? [50-99]"))

if 50 <= radius && radius <= 99 {
    SetColor(Color{0, 0, 255})
    FillCircle(Point{200, 200}, radius)
}

SetColor(Color{255, 255, 0})
FillCircle(Point{200, 200}, 25)
```

---

![](images/algo/if-else.svg)
# Selezione: else

- Clausola `else`: opzionale
    - Eseguita sse la condizione non è verificata

``` go
radius := ToInt(Prompt("Radius? [50-99]"))

if 50 <= radius && radius <= 99 {
    SetColor(Color{0, 0, 255})
    FillCircle(Point{200, 200}, radius)
} else {
    Alert("Out of range!")
}

SetColor(Color{255, 255, 0})
FillCircle(Point{200, 200}, 25)
```

>

<http://www.ce.unipr.it/gopherjs/?p1_if_else.go>

---

![](images/algo/words.svg)
# Confronto tra parole

``` go
a := Prompt("First word?")
b := Prompt("Second word?")

if a < b {
    Alert("The words are ordered")
} else if a > b {
    Alert("The words are inverted")
} else {
    Alert("The words are equal")
}
```

---

![](images/algo/calc.svg)
# ⏩ Operazioni aritmetiche

``` go
a := ToFloat(Prompt("a?"))
b := ToFloat(Prompt("b?"))
op := Prompt("op?")

if op == "+" {
    Alert(a + b)
} else if op == "-" {
    Alert(a - b)
} else if op == "*" {
    Alert(a * b)
} else if op == "/" && b != 0 {
    Alert(a / b)
} else {
    Alert("Operation not allowed")
}
```

---

![](images/algo/count.svg)
# Iterazione: for

- Condizione di *permanenza* nel ciclo
- Controllo *preliminare*: possibile che il corpo non sia mai eseguito
- *Problem solving*: sommare tutti i numeri da 1 a `n`
    - Devo almeno saper contare fino a `n`

``` go
n := ToInt(Prompt("n?"))
count := 1

for count <= n {
    Alert(count)
    count = count + 1
}
```

---

![](images/algo/sum1n.svg)
# Somma di numeri consecutivi

- Occorre tenere traccia del *totale parziale*

``` go
// Sum of the numbers from 1 to n
n := ToInt(Prompt("n?"))
total := 0
count := 1

for count <= n {
    total = total + count
    count = count + 1
}
Alert("The sum is ", total)
```

>

<http://it.wikipedia.org/wiki/Gauss#Biografia>

---

![](images/algo/average.svg)
# Media di N campioni

``` go
n := ToInt(Prompt("How many values?"))
total := 0
count := 0

for count < n {
    val := ToInt(Prompt("Val?"))
    total += val  // total = total + val
    count += 1    // count = count + 1
}
if count != 0 {
    Alert("The average is ",
          float64(total) / float64(count))
}
```

- **Cast**: `int(x)` oppure `float64(x)` ecc.
- Conversione di un numero `x` nel tipo corretto

---

![](images/algo/sentinel.svg)
# Ciclo con sentinella

``` go
count := 0
total := 0
val := ToInt(Prompt("Val? (-1 to finish)"))

for val != -1 {
    total += val
    count += 1
    val = ToInt(Prompt("Val? (-1 to finish)"))
}
if count != 0 {
    Alert("The average is ",
          float64(total) / float64(count))
}
```

>

<http://www.ce.unipr.it/gopherjs/?p1_average.go>

<http://www.ce.unipr.it/gopherjs/?p1_sentinel.go>

---

![](images/algo/perfect-square.svg)
# 🥷 Quadrato perfetto

``` go
n := ToInt(Prompt("n?"))

i := 1
for i*i < n {
    i += 1
}
if i*i == n {
    Alert(i)
} else {
    Alert("No")
}
```

>

<http://www.ce.unipr.it/gopherjs/?p1_perfect_square.go>

---

![](images/algo/sum10.svg)
# Cicli su intervalli

- Incremento e decremento: `++`, `--`

``` go
// Add up numbers from 1 to 10

total := 0
for i := 1; i < 11; i++ {
    total += i
}

// total := 0
// i := 1
// for i < 11 {
//     total = total + i
//     i = i + 1  // i++
// }
```

---

![](images/misc/red-squares.png)
# Sequenza di quadrati

``` go
InitCanvas(Point{300, 300})

for i := 0; i < 5; i++ {
    x := i * 40
    y := x
    red := i * 60
    SetColor(Color{red, 0, 0})
    FillRect(Point{x, y}, Point{140, 140})
}
```

>

<http://www.ce.unipr.it/gopherjs/?p1_red_squares.go>

---

# Moduli

``` go
package main

import "math"   // Math functions, use prefix
import . "g2d"  // Import everything, skip prefix

func main() {
    y := math.Sin(math.Pi / 4.0)
    Println(y)
}
```

``` shell
go run hello.go
```

>

Sono esportati dai moduli solo i nomi con la prima lettera **maiuscola** <br>

<https://golang.org/pkg/fmt> - <https://golang.org/pkg/math>

---

![](images/misc/dice.png)
# Valori casuali

- **`g2d.RandInt`**: *generazione di numeri casuali*
    - Risultato compreso tra i due valori specificati

``` go
package main

import . "g2d"

func main() {
    die1 := RandInt(1, 6)  // like rolling a die
    die2 := RandInt(1, 6)  // like rolling a die
    Println(die1, die2)
}
```

---

# Esercizi

---

![](images/misc/greek-pi.png)
# 1.1 Cerchio

- Chiedere all'utente il valore del raggio `r` di un cerchio
    - `r` reale compreso tra 0 e 200
- Se `r` è valido
    - Visualizzare il cerchio
    - Mostrare il valore dell'area e della circonferenza
- Se invece `r` è fuori range
    - Mostrare un messaggio d'errore

---

![](images/misc/three-brothers.png)
# 1.2 Minore e maggiore

- Generare e stampare tre numeri interi casuali: `a`, `b`, `c`
- Ciascuno compreso tra 1 e 6
- Determinare e mostrare qual è il minore dei tre

>

Controllare prima di tutto se `a` è minore degli altri due <br>
Altrimenti controllare se `b` è minore di `c` <br>
Altrimenti ...

---

# 1.3 Calcolo dell'età

- Chidere all'utente
    - Anno, mese e giorno della data di nascita
    - Anno, mese e giorno corrente
- Comunicare l'età esatta
    - Numero di compleanni già compiuti

>

Nell'anno corrente, l'utente ha già avuto il compleanno?

Espressione booleana composta con **AND**, **OR**, **NOT**

---

![](images/misc/random-squares.png)
# 1.4 Quadrati casuali

- Chiedere all'utente un numero `n`
- Disegnare `n` quadrati
    - Tutti con lato di 100 pixel
    - Ciascuno in posizione casuale
    - Ciascuno con un colore casuale

>

Cominciare a disegnare un solo quadrato grigio, in posizione casuale

---

![](images/misc/red-circles.png)
# 1.5 Cerchi concentrici

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio gradualmente decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
      - Dal rosso del livello più esterno
      - Fino al nero del livello più interno
- Prima del ciclo, determinare di quanto cambiare raggio e colore a ogni passo

>

Per iniziare, inserire l'operazione di disegno un ciclo, togliendo a ogni passo `10` (p.es.) al raggio e al livello di rosso

---

![](images/misc/bingo-balls.png)
# 1.6 Numero segreto

- Generare all'inizio del programma un numero “segreto” a caso tra 1 e 90
- Chiedere ripetutamente all'utente di immettere un numero, finché non indovina quello generato
- A ogni tentativo, dire se il numero immesso è maggiore o minore del numero segreto

---

![](images/misc/resistors.png)
# 🥷 1.7 Resistenze, ciclo

- Leggere, attraverso un ciclo, una sequenza di valori di resistenze elettriche
- La sequenza termina quando l'utente immette il valore 0
- Alla fine, visualizzare la resistenza equivalente, sia nel caso di resistenze disposte in serie, che in parallelo

>

Formule utili:

Rₛ = ∑ Rᵢ

1/Rₚ = ∑ (1/Rᵢ)

---

![](images/misc/classical-watch.jpg)
# 🥷 1.8 Orologio classico

- Disegnare 12 tacche a raggiera, come in un orologio classico
- Miglioramento: disegnare anche le tacche dei minuti, più piccole

>

Usare `math.Sin` e `math.Cos` per determinare le posizioni in cui disegnare

---

![](images/misc/monster.png)
# 🥷 1.9 La stanza del mostro

- Il giocatore si muove su una scacchiera di 5x5 celle, partendo da un angolo
    - Le righe e le colonne sono numerate da 0 a 4
- Un tesoro e un mostro sono nascosti in due posizioni casuali, all'inizio del gioco
- A ogni turno, il giocatore:
    - Sceglie una direzione verso cui spostarsi (alto, basso, sinistra, destra)
    - Se capita sulla cella del tesoro, ha vinto
    - Se capita sulla cella del mostro, ha perso

>

Basta memorizzare tre coppie di coordinate cartesiane

Non è richiesto di utilizzare la grafica
