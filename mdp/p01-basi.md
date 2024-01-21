![](images/algo/rubik-cube.png)
# Basi
## Introduzione alla programmazione

---

# Problemi e algoritmi

---

![](images/hist/polya.jpg)
# 💡️ Problem solving

- George Polya, [“How to solve it”](https://www.dropbox.com/s/86ua0v7mbr6tkgm/Polya_How-to-solve-it.pdf?dl=1), 1945
- Soluzione di problemi (matematici): processo raramente lineare

> Esempio. Trovare la diagonale di un parallelepipedo rettangolo, di cui sono note lunghezza, larghezza e altezza. *(Polya, pag. 23)*

---

![](images/dev/problem-solving.svg) ![](images/misc/space-diagonal.svg)
# 💡 Analisi del problema

- **➊ See.** Capire il problema
    - Quali dati, incognite, condizioni?
    - Figure, notazione… *modello*

> Bisognerebbe rendere tutto il più semplice possibile, ma non troppo semplice. *(A. Einstein)*

> Per ogni problema complesso c'è sempre una soluzione chiara, semplice… e sbagliata! *(H.L. Mencken)*

Ad esempio, per il calcolo della diagonale di un parallelepipedo, <br> una buona figura può dare suggerimenti importanti

---

![](images/dev/problem-solving.svg)
# 💡 Dal problema alla soluzione

- **➋ Plan.** Elaborare un progetto
    - Mettere in relazione dati e incognite
    - Riduzione, analogia, divide et impera, composizione, astrazione… *Pensiero computazionale*
    - Cominciare a risolvere un problema *più semplice*
- **➌ Do.** Implementare il progetto
    - Realizzare il sistema da sperimentare

> Se non riesci a risolvere un problema, ce ne sarà uno più facile che puoi risolvere: trovalo. *(G. Polya)*

> [La risposta è dentro di te… (Quelo)](https://www.youtube.com/watch?v=WGQ7JZRZ65M)

---

![](images/dev/problem-solving.svg) ![](images/hist/david-michelangelo.png) David di Michelangelo
# 💡 … E ritorno

- **➍ Check.** Controllare la soluzione
    - Corretta? Ottenibile in altro modo?
    - Metodo utile per altri problemi?

> Vi scrivo una lunga lettera perché non ho tempo di scriverne una breve. *(Voltaire)*

> La perfezione si raggiunge non quando non c'è più niente da aggiungere, ma quando non c'è più niente da togliere. *(De Saint-Exupéry)*

> La scultura è quella che si fa per forza di levare. *(Michelangelo)*

Una soluzione più breve e chiara si ottiene dopo più iterazioni

---

![large](images/algo/origami.svg) Gli origami sono algoritmi
# 💡️ Elementi di un algoritmo

- 🤖️ *Algoritmo*: procedimento che risolve un determinato problema attraverso un numero finito di passi elementari (al-Khwarizmi, ~800)
- **Dati**: iniziali (istanza problema), intermedi, finali (soluzione)
- **Passi** elementari: azioni atomiche non scomponibili in azioni più semplici
- **Processo**, o anche esecuzione: sequenza ordinata di passi
- *Proprietà*: finitezza, non ambiguità, realizzabilità, efficienza…

>

<https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi>

---

![](images/algo/spaghetti-flowchart.svg)
# 💡️ Diagramma di flusso

- **Flow-chart**: *grafo orientato*, nodi + archi
    - Passi di un algoritmo + loro sequenza
- Rappresentazione *grafica* anzichè verbale
    - Più efficace, meno ambigua
- Tre tipi di nodi
    - I/O: lettura e scrittura dati
    - Operazioni aritmetico-logiche
    - Controllo del flusso di esecuzione

![small](images/algo/nodes.svg)

---

![](images/algo/recipe.png)
# ⭐️ Programmazione strutturata

![](images/algo/structures.svg)

> Si può implementare qualunque algoritmo con queste sole strutture *(Böhm-Jacopini, 1966)*

> Goto considered harmful *(Dijkstra, 1968)*

- ❗ Strutture con: 1 ingresso, 1 uscita
- 🧑‍🍳 Ricette: algoritmi quotidiani, con `if` e `while`
    - “Se non c'è il lievito, usare due cucchiaini di bicarbonato”
    - “Battere gli albumi finché non montano”


---

# 🧪 Programmazione a blocchi

![large](images/algo/blockly.png)

>

<https://blockly.games/maze?lang=it>

---

# Python

---

![large](images/dev/python-cases.png) Web, data science, machine learning, scripting, teaching, games, hardware, multiplatform…
# 💡️ Python is fun!

![](images/algo/antigravity.png)

>

<https://xkcd.com/353/>

---

# 🧪 Shell interattiva

- Installare [Thonny](https://thonny.org/) o usare il [Playground](https://tomamic.github.io/pyodide/) online
    - In basso, interfaccia interattiva *REPL* (Read-Eval-Print Loop)
- **Tipo di dato** : insieme di *valori* + *operazioni* ammesse
- Tipi numerici: **`int`** o **`float`**, per numeri interi o razionali
    - Operazioni di base: `+, -, *, /`
    - Divisione intera, resto, potenza: `//, %, **`
- Commenti descrittivi, dopo `#` : non valutati

``` py
>>> 9 / 4
2.25
>>> 9 // 4  # floor division: ⌊9/4⌋, try also -9 // 4
2
>>> 9 % 4  # reminder is always positive
1
>>> 2 ** 1000  # no limits (but memory)
107150860718626[…]837205668069376
```

---

# 🧪 Valori booleani

- Tipo **`bool`**, per valori booleani: `True, False`
    - Operatori logici: `and, or, not` (→ [Logica](t01-logica.html))
- Confronti: `==, !=, <, <=, >, >=`
    - Solo tra valori omogenei; risultato booleano
    - Confronti concatenabili, sottinteso `and`

``` py
>>> 4 == 5
False
>>> 4 != 5 and not False
True
>>> 3 < 5 < 7
True
>>> 3 < 5 and 5 < 7  # idem
True
```

---

![large](images/algo/assign.png)
# ⭐ Assegnamento

- Una **variabile** serve per ricordare un risultato utile
- *Assegnamento* : operatore **`=`**
    - Alla sinistra un *nome*
    - Alla destra una espressione (→ *valore*)
- **⚠️ Non confondere**
    - Confronto di *uguaglianza* : operatore **`==`**

``` py
>>> pi = 3.14  # Assignment
>>> radius = 2.2
>>> area = pi * (radius ** 2)
>>> area
15.1976
>>> radius = radius + 1  # guess radius… and area!
```

---

![](images/algo/var-label.svg)
# 🔬 Variabile

- **Nome** associato a un certo **valore**
    - 🏷️ *Etichetta* → *oggetto*
- Oggetto assegnato a più variabili
    - Non viene copiato, ma riceve più etichette
- Il **tipo** dipende dal valore attualmente assegnato
    - Una var non dev'essere *dichiarata*
    - Ma dev'essere *inizializzata* prima dell'uso
- *Riassegnamento* : nuovo valore a var già esistente

``` py
>>> x = 100            # Variables: all_lower_case
>>> next_position = x  # Use explicative names!
>>> DELTA_X = 5        # Constants: ALL_UPPER_CASE
>>> x += DELTA_X       # Shortcut for: `x = x + DELTA_X`
>>> a, b = 5, 8        # Multiple assignments
```

---

# 🧪 Stringhe di testo

- Tipo **`str`** per sequenze di caratteri *Unicode*
- Racchiuse tra apici doppi, o singoli
- Concatenazione: operatore `+`
- Test di appartenenza (sottostringa): operatore `in`
- Lunghezza: *funzione* `len`

``` py
>>> str1 = "Monty Python's "
>>> str2 = 'Flying Circus'
>>> result = str1 + str2
>>> result
"Monty Python's Flying Circus"
>>> "Py" in result
True
>>> len(result)
28
```

---

# ⭐ Funzioni predefinite

- Funzioni [built-in](https://docs.python.org/3/library/functions.html): `max, min, abs, len`…
- Funzioni per conversione di tipo (*cast*): `int, float, str`…
- Parametri tra *parentesi*, separati da *virgola*
- Tipicamente, risultato assegnato a variabile

``` py
>>> max(3, 5)
5
>>> m = min(6, 4)
>>> m
4
>>> "5" + 3
TypeError: can only concatenate str (not "int") to str
>>> int("5") + 3
8
>>> "5" + str(3)
"53"
```

---

# ⭐ Metodi

- In Python tutti i valori sono *oggetti*
    - Tipi diversi → operazioni diverse, come *metodi*
- Attivazione di un metodo su un oggetto
    - Oggetto e metodo separati da “`.`”
    - Poi parametri tra parentesi
    - Tipicamente, risultato assegnato a variabile
- [Metodi di oggetti `str`](https://docs.python.org/3/library/stdtypes.html#string-methods): `upper`, `lower`…

``` py
>>> txt = "Monty Python"
>>> uc = txt.upper()  # new string returned, `txt` unchanged
>>> uc
"MONTY PYTHON"
>>> lc = txt.lower()
>>> lc
"monty python"

---

![](images/fun/shopping-list.png)
# ⭐ Lista

- Sequenza *mutabile* di valori *omogenei*
- Elementi tra **quadre**, separati da *virgole*
- Aggiunta, rimozione: `append, remove`
- Lunghezza: `len` ­– Test di appartenenza: `in`

``` py
>>> grocery = ["spam", "egg", "beans"]
>>> grocery.append("sausage")  # add "sausage" at the end
>>> len(grocery)  # size has grown
4
>>> "egg" in grocery  # membership test
True
>>> grocery.remove("egg")  # remove "egg"
>>> len(grocery)  # size has shrunk
3
>>> grocery
["spam", "beans", "sausage"]
```

---

![large](images/algo/holy-grail.jpg)
# 🧪 Leggere e scrivere

- **`input`** legge una riga di *testo*, inserita dall'utente, in una *variabile*
    - Prima mostra un messaggio
    - Risultato di tipo `str`
- **`print`** scrive una serie di valori su una riga
    - Inserisce spazio tra i valori (parametri)

``` py
>>> quester = input("What is your name? ")
What is your name? Lancelot
>>> print("Right. Off you go,", quester, ".")
Right. Off you go, Lancelot .
```

>

<https://www.youtube.com/watch?v=Xel0c6mpqPA>

---

![](images/algo/sum3.svg)
# 🧪 Somma di tre numeri

- **⚠️ Attenzione ai tipi**
    - ❓ Cosa succede, senza conversione in `float`?

``` py
# File sum3.py - to run: python3 sum3.py

a = float(input("Insert 1st val: "))
b = float(input("Insert 2nd val: "))
c = float(input("Insert 3rd val: "))

total = a + b + c

print("The sum is", total)
```

>

<https://tomamic.github.io/pyodide/?p01_sum3.py>

---

# Moduli

---

![large](images/oop/raster-coord.png) ![large](images/repr/color-mixing.svg)
# ⭐ Disegno su canvas

- **Coordinate raster**
    - Origine in alto a sinistra
- **Sintesi additiva dei colori**
    - Primari: *Red, Green, Blue*
- Useremo un modulo *ad-hoc*: `g2d`
    - Definisce funzioni di disegno
- Nel [playground](https://tomamic.github.io/pyodide/?p01_draw.py), versione integrata
- *Esecuzione locale*
    - Copiare nella cartella di lavoro <br> il file `g2d.py`, dal [repository fondinfo](https://github.com/tomamic/fondinfo/archive/master.zip)
- [**Documentazione g2d**](https://github.com/tomamic/fondinfo#g2d)

---

![large](images/repr/pixel-grid.png)
# ⭐ Tupla

- Sequenza **immutabile** di valori
    - Anche di *tipo diverso*
- Spesso tra parentesi
    - Per separarla da altro codice
- Utili anche per grafica:
    - *Posizione*: `(x, y)`
    - *Dimensione*: `(width, height)`
    - *Colore*: `(red, green, blue)` <br> Ogni componente nel range `0..255`

``` py
center_pt = (320, 240)  # packing
window_size = (640, 480)
bluette_color = (47, 102, 207)
x, y = center_pt  # unpacking
```

---

# 🧪 Rettangoli e cerchi

``` py
import g2d

g2d.init_canvas((600, 400))  # width, height

g2d.set_color((255, 255, 0))  # red + green = yellow
g2d.draw_rect((150, 100), (250, 200))  # left-top, size

g2d.set_color((0, 0, 255))
g2d.draw_circle((400, 300), 20)  # center, radius

g2d.main_loop()  # manage the window/canvas
```

---

![](images/repr/p1_draw.png)
# 🧪 Linee e testi

``` py
import g2d

g2d.init_canvas((600, 400))

# draw_rect, draw_circle…

g2d.set_color((0, 255, 0))
g2d.draw_line((150, 100), (400, 300))   # pt1, pt2

g2d.set_color((255, 0, 0))
g2d.draw_text("Hello", (150, 100), 40)  # text, left-top, font-size

g2d.main_loop()
```

>

<https://tomamic.github.io/pyodide/?p01_draw.py>

---

# 🧪 Finestre di dialogo

- `g2d.prompt`: richiesta di *input*, in finestra, risultato `str`
- `g2d.alert`: visualizzazione *messaggio*, singolo parametro `str`
- `g2d.confirm`: richiesta di *conferma*, risultato `bool`

``` py
import g2d

g2d.init_canvas((600, 400))

name = g2d.prompt("What's your name?")
g2d.alert("Hello, " + name + "!")

g2d.main_loop()
```

- [**Documentazione g2d**](https://github.com/tomamic/fondinfo#g2d)

---

![](images/misc/sin-cos-tan-1.svg) ![](images/misc/sin-cos-tan-2.svg)
# 🧪 Battery included 🔋

- Python ha già molti moduli inclusi
    - Non necessitano d'installazione
- **`import …`** : importa intero *namespace* del modulo
- **`from … import …`** : importa solo alcuni nomi
- `import` all'inizio, per evidenziare dipendenze

``` py
import math  # use namespace `math` as prefix
y = math.sin(math.pi / 6)  # 30°
print(y)  # 1 / 2
```

``` py
from math import cos, pi  # no prefix for `cos`, `pi`
print(cos(pi / 6))  # √3 / 2
```

---

![](images/misc/dice.png)
# 🧪 Random 🎲

- *Python Standard Library*
    - <http://docs.python.org/library/>
    - `randint`, `randrange`, `random`, `choice`…

``` py
from random import randint, randrange, choice

die1 = randint(1, 6)  # like rolling a die
die2 = randint(1, 6)  # like rolling a die

one_of_three = randrange(3)  # 0, 1, or 2

letter = choice("abc")  # "a", "b", or "c" -- any kind of sequence
```

---

# ⭐ Strutture di controllo

---

![](images/algo/if.svg)
# ⭐ Selezione: if

- Corpo di `if` o `else`: **indentazione**
    - Richiesta per *sintassi*, non opzionale
    - Può contenere qualsiasi istruzione
    - Anche altri blocchi `if` o `while` annidati!

> Readability counts *(The Zen of Python)*

``` py
r = int(g2d.prompt("Radius? [50-99]"))

if 50 <= r and r <= 99:
    g2d.set_color((0, 0, 255))
    g2d.draw_circle((200, 200), r)

g2d.set_color((255, 255, 0))
g2d.draw_circle((200, 200), 25)
```

---

![](images/algo/if-else.svg)
# ⭐ Selezione: else

- Clausola `else`: opzionale
    - Eseguita sse la condizione non è verificata

``` py
r = int(g2d.prompt("Radius? [50-99]"))

if 50 <= r <= 99:  # i.e.: 50 <= r and r <= 99
    g2d.set_color((0, 0, 255))
    g2d.draw_circle((200, 200), r)
else:
    g2d.alert("Out of range!")

g2d.set_color((255, 255, 0))
g2d.draw_circle((200, 200), 25)
```

>

I confronti possono essere concatenati; `and` sottinteso
<br>
<https://tomamic.github.io/pyodide/?p01_ifelse.py>

---

![](images/algo/dice.svg)
# ⭐ Selezione: elif

- `elif` : contrazione di `else if`
    - Selezione tra *molteplici* alternative
    - Se nessuna condizione vera, eseguito `else`
- Es. Lancio di *due dadi* → 3 alternative
    - Vittoria del 1° dado, del 2°, o pareggio

``` py
from random import randint
a, b = randint(1, 6), randint(1, 6)  # roll 2 dice
if a > b:
    print("The first die wins.")
elif a < b:
    print("The second die wins.")
else:
    print("The dice are equal. It's a draw.")
```

---

![](images/algo/while.svg)
# ⭐ Iterazione: while

- Condizione di *permanenza* nel ciclo
    - Controllo *preliminare*
    - Possibile che il corpo non sia mai eseguito

``` py
r = int(g2d.prompt("Radius? [50-99]"))

while r < 50 or r > 99:
    g2d.alert("Out of range!")
    r = int(g2d.prompt("Radius? [50-99]"))

g2d.set_color((0, 0, 255))
g2d.draw_circle((200, 200), r)
```

>

<https://tomamic.github.io/pyodide/?p01_while.py>

---

![](images/misc/rock-cubes.png)
# ⭐ Iterazione: for

- Opera solo su **sequenze e iterabili**
    - `list, tuple, str, range`…
    - Num. iterazioni = lunghezza sequenza
- Variabile di iterazione
    - A ogni iterazione, nuovo valore da sequenza

``` py
values = [2, 3, 5, 7, 11]
for val in values:  # list
    print(val ** 3)  # 8 27 125 343 1331
```

``` py
for r in (200, 175, 150):  # tuple
    color = (randrange(256), randrange(256), randrange(256))
    g2d.set_color(color)
    g2d.draw_circle((200, 200), r)
```

---

# ⭐ Intervallo di valori

- **`range`** : intervallo di valori aperto a destra
    - Estremi: inferiore *incluso* (0), superiore *escluso*
    - Se estremo inferiore ≠ 0, servono due parametri
- *`reversed`* : sequenza rovesciata

``` py
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
```

``` py
for i in reversed(range(5)):  # 4, 3, 2, 1, 0
    print(i)
```

---

![](images/misc/red-squares.svg)
# 🧪 Sequenza di quadrati

``` py
import g2d

g2d.init_canvas((500, 500))

for i in range(4):  # 0, 1, 2, 3
    red = i * 85    # proportional to i
    g2d.set_color((red, 0, 0))

    pos = i * 100   # proportional to i
    g2d.draw_rect((pos, pos), (200, 200))

g2d.main_loop()
```

- ❓ Cosa succede se usiamo `reversed` nel `for`?

>

<https://tomamic.github.io/pyodide/?p01_squares.py>

---

# 🏊 Esercizi

---

![](images/misc/handshake.svg)
# Hello, admin!

- Scrivere un programma in un file `hello.py`
- Chiedere il nome all'utente
- Inserire tale nome in un messaggio di saluto, p.es.:

``` txt
What's your name? Adam
Hello, Adam!
```

- Se il nome dell'utente è “`admin`”…
    - Mostrare inoltre il messaggio speciale “`At your command`”

---

![](images/misc/greek-pi.png)
# Cerchio

- Chiedere all'utente il valore del raggio `r` di un cerchio
    - `r` razionale compreso tra 0 e 200
- Se `r` è valido
    - Visualizzare il cerchio, al centro del canvas
    - Mostrare il valore dell'area e della circonferenza
- Se invece `r` è fuori range
    - Mostrare un messaggio d'errore

---

![large](images/algo/holy-grail.jpg)
# The Bridge of Death

- Porre tre domande all'utente:
    - `"What is your name?"`
    - `"What is your quest?"`
    - `"What is your favorite color?"`
- Se le risposte sono `"Lancelot"`, `"Holy Grail"` e `"Blue"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

>

Prima versione: chiedere e controllare solo il nome

---

![](images/misc/calendar-cols.jpg)
# Calcolo dell'età

- Chiedere all'utente la sua data di nascita
    - Anno, mese e giorno
- Chiedere all'utente la data di oggi
    - Anno, mese e giorno
- Comunicare l'età esatta attuale
    - Numero di compleanni già compiuti

>

Nell'anno corrente, l'utente ha già avuto il compleanno?
<br>
Espressione booleana composta con `and`, `or`, `not`…

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

---

![](images/misc/random-squares.svg)
# Quadrati casuali

- Chiedere all'utente un numero `n`
- Disegnare `n` quadrati
    - Tutti con lato di 100 pixel
    - Ciascuno in posizione casuale
    - Ciascuno con un colore casuale

>

Cominciare a disegnare un solo quadrato grigio, in posizione casuale

---

![](images/misc/diagonal-squares.svg)
# Quadrati in diagonale

- Chiedere all'utente un numero `n`
- Su un canvas 500×500, disegnare `n` quadrati
    - Tutti con lato di 50 pixel
    - Disposti lungo la diagonale, in modo da condividere sempre un vertice
    - Ciascuno con un colore casuale
- Opzionalmente, determinare il lato in modo da occupare tutta la diagonale
