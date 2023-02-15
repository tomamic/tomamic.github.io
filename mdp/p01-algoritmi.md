![](images/algo/rubik-cube.png)
# Algoritmi in Python 3
## Introduzione alla programmazione

---

# Problemi ed algoritmi

---

![](images/dev/problem-solving.svg) ![](images/hist/polya.jpg)
# 💡️ Problem solving

- George Polya, [“How to solve it”](https://www.dropbox.com/s/86ua0v7mbr6tkgm/Polya_How-to-solve-it.pdf?dl=1), 1945
- Soluzione di problemi (matematici): processo raramente lineare

> Example. Find the diagonal of a rectangular parallelepiped of which the length, the
width, and the height are known. *(Polya, pag. 23)*

---

![](images/dev/problem-solving.svg) ![](images/dev/parallelepiped.png)
# 💡 Analisi del problema

- **➊ See.** Capire il problema
    - Quali dati, incognite, condizioni?
    - Figure, notazione… *modello*

> Make things as simple as possible, but not simpler. *(A. Einstein)*

> For every complex problem there is an answer that is clear, simple… and wrong. *(H.L. Mencken)*

---

![](images/dev/problem-solving.svg)
# 💡 Dal problema alla soluzione

- **➋ Plan.** Elaborare un progetto
    - Mettere in relazione dati e incognite
    - Riduzione, analogia, divide et impera, composizione, astrazione… *Pensiero computazionale*
    - Cominciare a risolvere un problema *più semplice*
- **➌ Do.** Implementare il progetto
    - Realizzare il sistema da sperimentare

> If you can't solve a problem… then there is an easier problem you can solve: find it. *(G. Polya)*

> [La risposta è dentro di te… (Quelo)](https://www.youtube.com/watch?v=WGQ7JZRZ65M)

---

![](images/dev/problem-solving.svg) ![](images/hist/david-michelangelo.png) David di Michelangelo
# 💡 … E ritorno

- **➍ Check.** Controllare la soluzione
    - Corretta? Ottenibile in altro modo?
    - Metodo utile per altri problemi?

> Vi scrivo una lunga lettera perché non ho tempo di scriverne una breve. *(Voltaire)*

> Perfection is reached not when there is no longer anything to add, but when there is no longer anything to take away. *(De Saint-Exupéry)*

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

![](images/algo/spaghetti-flowchart.svg) ⚠️ **Spaghetti code** <br> Don't do this!
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

![](images/comp/haystack.png)
# 💡️ Indovina la parola

- L'utente sceglie una parola segreta dal dizionario
- Il programma deve indovinarla

``` text
X = Prima parola nel dizionario
Finchè non hai indovinato:
    Chiedi all'utente: “È {X} la tua parola segreta?”
    Se “Sì!”: Finito!
    Altrimenti: X = Parola successiva
```

>

In un dizionario di 100k parole, alla peggio si provano tutte

---

![large](images/comp/binary-search.svg)
# 💡️ Ricerca binaria

- Dizionario: parole *ordinate*
- Approccio più intelligente: ad ogni passo si dimezza lo spazio di ricerca

``` text
SpazioDiRicerca = Intero dizionario
Finchè non hai indovinato:
    X = Parola a metà di SpazioDiRicerca
    Chiedi: “È {X} la parola segreta?”
    Se “Sì!”: finito!
    Altrimenti:
        Chiedi: “{X} vieno dopo di essa?”
        Se “Sì”: Scarta 2ᵃ metà di SpazioDiRicerca
        Altrimenti: Scarta 1ᵃ metà di SpazioDiRicerca
```

>

Un dizionario di 100k parole si può dimezzare solo 17 volte (2¹⁷ > 100k)

---

![](images/comp/orders.svg)
# 💡️ Complessità e calcolabilità

- **Complessità**
    - Relazione tra la quantità di dati in ingresso ed il **costo di elaborazione**
    - Costo in termini di risorse: tempo, memoria ecc.
    - Algoritmi *non trattabili*: costo esponenziale
- **Calcolabilità**
    - Distinguere i problemi **non risolvibili**
    - Paradossi: “*Questa frase è falsa*”
    - Indecidibilità della *terminazione*

---

![large](images/dev/python-cases.png) Web, data science, machine learning, scripting, teaching, games, hardware, multiplatform…
# 💡️ Python is fun!

![](images/algo/antigravity.png)

>

<https://xkcd.com/353/>

---

# 🧪 Shell interattiva

- Installare [Thonny](https://thonny.org/) o usare il [Playground](https://tomamic.github.io/pyodide/) online
- Python si presenta con una [interfaccia REPL](https://pyodide.org/en/stable/console.html)
    - Read-Eval-Print Loop
- Un **tipo di dato** specifica un insieme di *valori* e le *operazioni* ammesse
    - `int, float, bool, str`
    - Operazioni aritmetiche e logiche, confronti

``` py
>>> 3 + 4
7
>>> 3 / 4
0.75
>>> 4 == 5  # Do not confuse with assignment!
False
>>> 2 < 3 or not True
True
```

---

# 🧪 Valori numerici e booleani

- Tipi **`int`** o **`float`**, per numeri interi o reali
    - Operazioni di base: `+, -, *, /`
    - Divisione intera, resto, potenza: `//, %, **`
    - Confronti: `==, !=, <, <=, >, >=`
- Tipo **`bool`**, per valori booleani: `True, False`
    - Operazioni consentite: `and, or, not`
    - I confronti danno un risultato booleano

``` py
>>> -7 // 3    # floor division: ⌊-7/3⌋
-3
>>> -7 % 3     # reminder is always positive
2
>>> 2 ** 1000  # no limits (but memory)
107150[…]069376
```

---

![large](images/algo/assign.png)
# ⭐ Assegnamento

- Una **variabile** serve per ricordare il risultato di una *espressione*
- *Assegnamento* : operatore **`=`**
    - Alla sinistra un *nome*
    - Alla destra un *valore*
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

- **Nome** associato ad un certo **valore**
    - 🏷️ *Etichetta* → *oggetto*
- Oggetto assegnato a più variabili
    - Non viene copiato, ma riceve più etichette
- Il **tipo** dipende dal valore attualmente assegnato
    - Una var. non dev'essere *dichiarata*
    - Ma dev'essere *inizializzata* prima dell'uso
- *Riassegnamento*
    - Var. già esistente, associata a nuovo valore

``` py
>>> x = 100            # Variables: all_lower_case
>>> next_position = x  # Use explicative names!
>>> DELTA_X = 5        # Constants: ALL_UPPER_CASE
>>> x += DELTA_X       # Shortcut for: `x = x + DELTA_X`
```

---

# 🧪 Stringhe di testo

- Tipo **`str`** per sequenze di caratteri *Unicode*
- Racchiuse tra apici doppi, o singoli
- Sequenza speciale `\n` per carattere “*a capo*”
- Concatenazione: `+`
- Lunghezza: `len`

``` py
>>> str1 = "Monty Python's "
>>> str2 = 'Flying Circus'
>>> result = str1 + str2
>>> result
"Monty Python's Flying Circus"
>>> len(result)
28
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
- [**Documentazione**](https://github.com/tomamic/fondinfo#g2d)

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
center_pt = (320, 240)
window_size = (640, 480)
bluette_color = (47, 102, 207)
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
- In `random`, ci sono anche:
    - `randrange`, `random`, `choice`…

``` py
from random import randint
die1 = randint(1, 6)  # like rolling a die
die2 = randint(1, 6)  # like rolling a die
print(die1, die2)
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
radius = int(g2d.prompt("Radius? [50-99]"))

if 50 <= radius and radius <= 99:
    g2d.set_color((0, 0, 255))
    g2d.draw_circle((200, 200), radius)

g2d.set_color((255, 255, 0))
g2d.draw_circle((200, 200), 25)
```

---

![](images/algo/if-else.svg)
# ⭐ Selezione: else

- Clausola `else`: opzionale
    - Eseguita sse la condizione non è verificata

``` py
radius = int(g2d.prompt("Radius? [50-99]"))

if 50 <= radius and radius <= 99:
    g2d.set_color((0, 0, 255))
    g2d.draw_circle((200, 200), radius)
else:
    g2d.alert("Out of range!")

g2d.set_color((255, 255, 0))
g2d.draw_circle((200, 200), 25)
```

>

<https://tomamic.github.io/pyodide/?p01_else.py>

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

# ⭐ Ciclo su sequenza: for

- Numero di iterazioni = lunghezza della sequenza
    - Opera su tuple, stringhe, intervalli…
- Variabile di iterazione
    - Ad ogni iterazione, assegnato un valore dalla sequenza

``` py
for r in (200, 175, 150):
    print(r)
```

``` py
for r in (200, 175, 150):
    g2d.set_color((randint(0, 255), randint(0, 255), randint(0, 255)))
    g2d.draw_circle((200, 200), r)
```

---

# ⭐ Intervallo di valori

- **`range`** : intervallo di valori aperto a destra
    - Estremi: inferiore *incluso* , superiore *escluso*
    - Con un solo parametro, l'intervallo parte da `0`
- *`reversed`* : sequenza rovesciata

``` py
for i in range(1, 6):  # (1, 2, 3, 4, 5)
    print(i)
```

``` py
for i in reversed(range(1, 6)):  # (5, 4, 3, 2, 1)
    print(i)
```

---

![](images/misc/red-squares.svg)
# 🧪 Sequenza di quadrati

``` py
import g2d

g2d.init_canvas((500, 500))

for i in range(4):  # (0, 1, 2, 3)
    red = i * 85
    pos = i * 100
    g2d.set_color((red, 0, 0))
    g2d.draw_rect((pos, pos), (200, 200))

g2d.main_loop()
```

- ❓ Cosa succede se usiamo `reversed` nel `for`?

>

<https://tomamic.github.io/pyodide/?p01_squares.py>

---

![](images/misc/red-squares.svg)
# 💡 Linearità

- Legame lineare tra una grandezza (es. $pos$) ed $i$

$$result = m \cdot i + q$$

- Per determinare $q$, si valuta il primo caso, $i = 0$
- Per determinare $m$, si valuta l'ultimo caso, $i = n - 1$
- Con $i$ intero, $m$ è la differenza tra due istanze
    - Ad es. la distanza tra due quadrati

. . .

- ❓ Ricavare i valori di $q$ ed $m$ per l'esempio dei quadrati
    - Primo quadrato: $pos = 0$; ultimo: $pos = L - l$
    - $L$: lato del canvas noto, $l$: lato dei quadrati noto

---

# 🏊 Esercizi

---

![](images/misc/handshake.svg)
# Hello, admin!

- Programma che scrive “`Hello world`”
- In una versione successiva del programma…
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![](images/misc/greek-pi.png)
# Cerchio

- Chiedere all'utente il valore del raggio `r` di un cerchio
    - `r` reale compreso tra 0 e 200
- Se `r` è valido
    - Visualizzare il cerchio, al centro del canvas
    - Mostrare il valore dell'area e della circonferenza
- Se invece `r` è fuori range
    - Mostrare un messaggio d'errore

>

<https://tomamic.github.io/pyodide/?x01_circle.py>

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

# Calcolo dell'età

- Chiedere all'utente la data di nascita
    - Anno, mese e giorno
- Comunicare l'età esatta attuale
    - Numero di compleanni già compiuti

``` py
from datetime import date
now = date.today()
print(now.year, now.month, now.day)
```

>

Nell'anno corrente, l'utente ha già avuto il compleanno?
<br>
Espressione booleana composta con `and`, `or`, `not`…
<br>
<https://tomamic.github.io/pyodide/?p01_age.py>

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
<br>
<https://tomamic.github.io/pyodide/?p01_randsquares.py>

---

![](images/misc/green-col.svg)
# Quadrati in colonna

- Chiedere all'utente un numero `n`
- Disegnare una colonna verticale di `n` quadrati
    - Sfruttare tutta l'altezza del canvas
    - Lasciare un pixel vuoto tra l'uno e l'altro
- Il colore varia gradualmente dal nero fino al verde saturo
    - Dall'alto verso il basso

>

<https://tomamic.github.io/pyodide/?p01_greencol.py>

---

# Cerchi in riga

- Chiedere all'utente un numero `n`
- Disegnare una fila orizzontale di `n` cerchi
    - Sfruttare tutta la larghezza del canvas
- Il colore varia gradualmente dal nero fino al blu saturo
    - Da sinistra verso destra

![](images/misc/blue-row.svg)

>

<https://tomamic.github.io/pyodide/?p01_bluerow.py>

---

![](images/misc/red-circles.svg)
# Cerchi concentrici

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio gradualmente decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
    - Dal rosso del livello più esterno
    - Fino al nero del livello più interno
- Prima del ciclo, determinare di quanto cambiare raggio e colore ad ogni passo

>

Per iniziare, inserire l'operazione di disegno un ciclo, togliendo ad ogni passo `10` (p.es.) al raggio e al livello di rosso
<br>
<https://tomamic.github.io/pyodide/?p01_redcircles.py>

