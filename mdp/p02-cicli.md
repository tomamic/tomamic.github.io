![](images/algo/rubik-cube.png)
# Cicli
## Introduzione alla programmazione

---

# 🧪 Conteggio naïve

- Primo tentativo, ma conta il programmatore

``` py
print(1)
print(2)
print(3)  # ...
```

- Secondo tentativo, un po' meglio

``` py
count = 1

print(count)
count = count + 1

print(count)
count = count + 1  # ...
```

---

![](images/algo/count.svg)
# 🧪 Iterazione: conteggio

``` py
n = int(input("n?"))
count = 1

while count <= n:
    print(count)
    count += 1
```

---

![](images/algo/sum1n.svg)
# 🧪 Somma numeri consecutivi

- *Problem solving*: sommare i numeri da 1 ad `n`
    - Devo almeno saper contare fino ad `n`
- Occorre tenere traccia del *totale parziale*

``` py
# Sum of the numbers from 1 to n
n = int(input("n? "))
total = 0
count = 1
while count <= n:
    total += count
    count += 1

print("The sum is", total)
```

>

<http://it.wikipedia.org/wiki/Gauss#Biografia>
<br>
<https://tomamic.github.io/pyodide/?p02_sumn.py>

---

![](images/algo/average.svg)
# 🧪 Media n campioni

- Non numeri consecutivi
- Ma `n` valori forniti dall'utente

``` py
n = int(input("How many values? "))
total = 0
count = 0

while count < n:
    val = int(input("Val? "))
    total += val
    count += 1

if count != 0:
    print("The average is", total / count)
```

>

<https://tomamic.github.io/pyodide/?p02_average.py>

---

![](images/algo/sentinel.svg)
# ⭐ Ciclo con sentinella

- Sommare valori, senza sapere quanti
- Valore sentinella `-1` per terminare

``` py
total = 0
count = 0
val = int(input("Val? (-1 to finish) "))

while val != -1:
    total += val
    count += 1
    val = int(input("Val? (-1 to finish) "))

if count != 0:
    print("The average is", total / count)
```

>

<https://tomamic.github.io/pyodide/?p02_sentinel.py>

---

![](images/algo/sum1n.svg)
# 🧪 Ciclo di conteggio

- Più comodo e leggibile contare con un `for`
- Consigliato, in caso di sequenze o intervalli noti
- Non adatto ai cicli con sentinella

``` py
# Add up numbers from 1 to n
n = int(input("How many values? "))

total = 0
for i in range(1, n + 1):
    total += i

# total = 0
# i = 1
# while i < n + 1:
#     total += i
#     i += 1
```

---

![](images/algo/dice.svg)
# 🧪 Due dadi

- Vittoria del primo, del secondo, oppure pareggio
- Se il primo non vince, c'è un'altra condizione
- `if` annidato

``` py
from random import randint
a = randint(1, 6)
b = randint(1, 6)
print(a, b)

if a > b:
    print("The first die wins.")
else:
    if a < b:
        print("The second die wins.")
    else:
        print("The dice are equal. It's a draw.")
```

---

![](images/algo/dice.svg)
# 🧪 elif

- `elif` : contrazione di `else if`
- Permette di ridurre l'annidamento
- Varie condizioni alternative allo stesso livello
- Se nessuna condizione vera, eseguito `else`


```
# …
if a > b:
    print("The first die wins.")
elif a < b:
    print("The second die wins.")
else:
    print("The dice are equal. It's a draw.")
```

---

# 🧪 Confronto tra stringhe

- Confronto tra stringhe, in ordine *lessicografico*
    - `<, <=, >, >=, ==, !=`
    - Confronto deciso dal primo carattere diverso
- Primi 128 codici *Unicode* == *ASCII*
    - Prima le cifre, poi le maiuscole, infine le minuscole

``` py
>>> "art" < "arc"
False
>>> "first" < "second"
True
>>> "Second" <  "first"
True
>>> chr(83)
'S'
>>> ord("S")
83
```

---

# 🔬 Tabella ASCII

![large](images/repr/ascii.svg)

- In ogni riga 16 caratteri con codici consecutivi
- Codice di un carattere: si contano tutti quelli che lo precedono
    - Es. `S` @ `x=3`, `y=5` ⇒ `ord("S") == y * 16 + x == 83`

---

![](images/algo/words.svg)
# 🧪 Selezione: elif

``` py
a = input("First word? ")
b = input("Second word? ")

if a < b:
    print("The words are ordered")
elif a > b:
    print("The words are inverted")
else:
    print("The words are equal")
```

- `elif`: clausola `else` che contiene un altro `if`
- No `switch`, no `do-while`

> There should be one -- and preferably only one -- obvious way to do it *(ZoP)*

---

![](images/algo/calc.svg)
# 🧪 Operazioni aritmetiche

``` py
a = float(input())
b = float(input())
op = input()

if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
elif op == "*":
    print(a * b)
elif op == "/" and b != 0:
    print(a / b)
else:
    print("Operation not allowed")
```

---

![](images/misc/characters.png)
# 🧪 Cicli su stringhe

- Il ciclo `for` scorre i valori di qualsiasi sequenza
- Una stringa è una sequenza di caratteri

``` py
line = input("Text? ").lower()
digits, vowels = 0, 0

for c in line:
    if "0" <= c <= "9":  # char comparison
        digits += 1
    elif c in "aeiou":  # membership test
        vowels += 1
```

>

<https://tomamic.github.io/pyodide/?p02_vowels.py>

---

# 💡 Stringhe formattate

- Concatenazione di stringhe : op. `+`
    - Complesso comporre stringhe con molti dati
- Alternativa : *stringhe formattate*, o *f-string*
    - `f` prima di virgolette
    - Espressioni in stringa, tra graffe
    - Sostituite da loro rappesentazione testuale

``` py
radius = 2.5
area = math.pi * radius**2
# msg = ("The area of the circle with radius " + str(radius) +
#        " is " + str(area) + ".")
msg = f"The area of the circle with radius {radius} is {area}."
print(msg)
```

---

![](images/fun/shopping-list.png)
# ⭐ Lista

- Sequenza *mutabile* di valori *omogenei*
- Lunghezza variabile nel tempo, non fissata

``` py
>>> grocery = ["spam", "egg", "beans"]
>>> grocery.append("sausage")  # add "sausage" at the end, size grows
>>> len(grocery)
4
>>> "egg" in grocery  # membership test
True
>>> grocery.remove("egg")  # remove "egg", size shrinks
>>> len(grocery)
3
>>> grocery
["spam", "beans", "sausage"]
```

---

![](images/misc/rock-cubes.png)
# ⭐ Cicli su liste: for

``` py
values = [2, 3, 5, 7, 11]

for val in values:
    cube = val ** 3
    print(cube, end="\t")
```

``` text
8   27  125 343 1331
```

- Ciclo `for` per qualsiasi tipo di sequenza
    - `list`, `str`, `tuple`, `range`…
- Ad ogni iterazione, a `val` è assegnato un elemento di `values`

---

![](images/fun/times-table.svg)
# 🧪 Cicli e annidamento

- Stampare la tavola pitagorica
- Primo passo: stampare una sola riga

``` py
y = int(input("Insert a value: "))
for x in range(1, 11):
    print(x * y, end="\t")  # ends with tabulation
```

``` py
for y in range(1, 11):
    for x in range(1, 11):
        print(x * y, end="\t")
    print()  # normally, ends with newline
```

>

<https://tomamic.github.io/pyodide/?p02_tables.py>

---

![](images/misc/sin-cos-tan-1.svg) ![](images/misc/sin-cos-tan-2.svg)
# 🧪 Coordinate polari

- Noti ipotenusa e angolo di un triangolo rettangolo
    - Con `cos` e `sin` si ricavano i cateti
- **Coordinate polari** di un punto: `$(r, \theta)$`
    - Noti distanza dall'origine e angolo…
    - Si ricavano le *coordinate cartesiane* `$(x, y)$`
    - `$x = r\cdot cos\theta$` <br> `$y = r\cdot sin\theta$`
- Se spostamento `$(r, \theta)$` avviene <br> rispetto a un punto `$(x_0, y_0)$` ≠ origine
    - ⇒ *Traslazione* : aggiungere costanti ad `$x, y$`
    - `$x = x_0 + r\cdot cos\theta$` <br> `$y = y_0 + r\cdot sin\theta$`


---

![](images/misc/sin-cos-tan-1.svg) ![](images/misc/sin-cos-tan-2.svg)
# 🧪 Angoli sul canvas

- In alcuni problemi, variabili come *coordinate polari*
    - Coord. cartesiane alla fine, per disegnare
- Sul piano *raster*, la `y` cresce verso il basso
    - Angoli misurati *sotto* l'asse delle ascisse

``` py
r = 100
for i in range(5):
    angle = i * (pi / 18)  # 10°
    x, y = r * cos(angle), r * sin(angle)
    g2d.draw_circle((x, y), 2)
```

>

<https://tomamic.github.io/pyodide/?p02_angles.py>

---

# 🏊 Esercizi

---

![](images/misc/resistors.png)
`$R_s = \Sigma R_i$` <br>
`$\frac{1}{R_p} = \Sigma \frac{1}{R_i}$`

# Resistenze con sentinella

- Leggere, attraverso un ciclo, una sequenza di valori di resistenze elettriche
- La sequenza termina quando l'utente immette il valore 0
- Alla fine, visualizzare la resistenza equivalente, sia nel caso di resistenze disposte in serie, che in parallelo

>

<https://tomamic.github.io/pyodide/?p02_resistors.py>

---

![](images/misc/three-brothers.png)
# Minore e maggiore

- Generare e stampare tre numeri interi casuali: `a`, `b`, `c`
- Ciascuno compreso tra 1 e 6
- Determinare e mostrare qual è il minore dei tre

>

Controllare prima di tutto se `a` è minore degli altri due
<br>
Altrimenti controllare se `b` è minore di `c`
<br>
Altrimenti…
<br>
<https://tomamic.github.io/pyodide/?py1_min3.py>

---

![](images/misc/perfect-squares.svg)
# Quadrato perfetto

- Chiedere all'utente un numero intero
- Dire se il numero è un quadrato perfetto
    - La sua radice quadrata è un numero naturale?
- In questo caso, comunicare anche la sua radice perfetta

>

Naturalmente, senza usare `math.sqrt`

<https://tomamic.github.io/pyodide/?p02_perfect.py>

---

![](images/misc/color-grid.svg) ![](images/oop/raster-tile.png)
# Griglia di colori

- Chiedere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- In orizzontale, aumentare gradatamente la componente di blu
- In verticale, aumentare gradatamente la componente di verde

>

Cominciare a creare una riga di riquadri tutti neri
<br>
Poi creare una griglia, con due cicli annidati
<br>
Lasciare tra i riquadri un piccolo margine
<br>
<https://tomamic.github.io/pyodide/?p02_grid.py>

---

![](images/misc/classical-watch.jpg) ![](images/misc/trigonometry.svg)
# 🥷 Orologio classico

- Disegnare 12 tacche a raggiera, come in un orologio classico
- Miglioramento: disegnare anche le tacche dei minuti, più piccole

>

Usare `math.sin` e `math.cos` per determinare le posizioni in cui disegnare
<br>
<https://tomamic.github.io/pyodide/?p02_watch.py>

---

![](images/misc/bingo-balls.png)
# Numero segreto

- Generare all'inizio del programma un numero “segreto” a caso tra 1 e 90
- Chiedere ripetutamente all'utente di immettere un numero, finché non indovina quello generato
- Ad ogni tentativo, dire se il numero immesso è maggiore o minore del numero segreto

>

<https://tomamic.github.io/pyodide/?p01_secret.py>

---

![](images/misc/monster.png)
# 🥷 La stanza del mostro

- Il giocatore si muove su una scacchiera di 5x5 celle, partendo da un angolo
    - Le righe e le colonne sono numerate da 0 a 4
- Un tesoro ed un mostro sono nascosti in due posizioni casuali *diverse*, all'inizio del gioco
    - Non si sovrappongono tra loro, nè con l'angolo del giocatore
- Ad ogni turno:
    - Chiedere al giocatore una direzione (`w/a/s/d`)
    - Se capita sulla cella del tesoro, ha vinto
    - Se capita sulla cella del mostro, ha perso

>

Basta memorizzare tre coppie di coordinate cartesiane
<br>
Non è richiesto l'uso della grafica
<br>
<https://tomamic.github.io/pyodide/?p02_monster.py>

