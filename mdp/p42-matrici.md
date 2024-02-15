![](images/misc/tic-tac-toe.svg)
# Matrici
## Introduzione alla programmazione

---

![large](images/repr/matrix.svg)
# ⭐ Matrice in lista singola

- Righe concatenate in una lista singola
- Un solo indice: `i = x + y*cols`

``` py
>>> data = ["A", "B", "C", "D",
            "E", "F", "G", "H",
            "I", "J", "K", "L"]
>>> cols, rows = 4, 3
>>> x, y = 1, 2
>>> data[x + y*cols]
"J"
```
- Viceversa: `x, y = i % cols, i // cols`
- La `y` conta quante righe intere precedono un elemento
- La `x` quante celle precedono l'elemento, sulla sua riga

---

# Stampare una matrice

- Stampa di una riga, da sinistra verso destra
- Va tutto ripetuto per ogni riga, dall'alto verso il basso

``` py
for y in range(rows):
    for x in range(cols):
        print(data[x + y*cols], end="\t")
    print()
```

- Inizializzare matrice, come lista singola: *list repetition*
- Elementi tutti a `"-"` (o altro valore…)

``` py
matrix = ["-"] * (rows*cols)
```

---

# 🧪 Operazioni su matrice

- Somma, colonna per colonna
- Oltre alla lista, bisogna conoscere almeno `cols` (o `rows`)

``` py
matrix = [2, 4, 3, 8,
          9, 3, 2, 7,
          5, 6, 9, 1]
cols, rows = 4, 3
# rows = len(matrix) // cols

for x in range(cols):
    total = 0
    for y in range(rows):
        val = matrix[x + y*cols]   # 2D -> 1D
        total += val
    print("Col #", x, "sums to", total)
```

---

# Giochi su matrice

---

# ⭐ Gioco astratto

``` py
def abstract():
    raise NotImplementedError("Abstract method")

class BoardGame:
    def play(self, x: int, y: int, action: str): abstract()
    def read(self, x: int, y: int) -> str: abstract()
    def finished(self) -> bool: abstract()
    def status(self) -> str: abstract()
    def size(self) -> tuple[int, int]: abstract()
```

>

*BoardGame*: <https://tomamic.github.io/pyodide/?boardgame.py>

---

# ⭐ Ciclo di gioco

``` py
def print_game(game: BoardGame):
    cols, rows = game.size()
    for y in range(rows):
        for x in range(cols):
            print(game.read(x, y), end="\t")
        print()
    print(game.status())

def console_play(game: BoardGame):
    print_game(game)
    while not game.finished():
        x, y, action = input("x y action?\n").split()
        game.play(int(x), int(y), action)
        print_game(game)
```

>

*Gui*: <https://tomamic.github.io/pyodide/?boardgamegui.py>

---

![](images/qt/fifteen-puzzle.jpg)
# 🧪 Fifteen - Costruttore

``` py
class Fifteen(BoardGame):
    def __init__(self, w: int, h: int):
        self._w, self._h = w, h

        # init game board with sorted tiles: [1 2 ... 14 15 0]
        self._bd = list(range(1, w * h)) + [0]
        self._solution = self._bd[:]
        self._x0, self._y0 = w - 1, h - 1  # blank

        # then, random walk of the blank tile, until most tiles change
        while self._bd[-1] != 1:
            dx, dy = choice([(0, -1), (1, 0), (0, 1), (-1, 0)])
            self.play(self._x0 + dx, self._y0 + dy, "")
```

>

<https://en.wikipedia.org/wiki/15_puzzle#Solvability>

---

# 🧪 Fifteen - Mosse

``` py
class Fifteen(BoardGame):
    #...
    def _get(self, x, y) -> int:  # -1 if outside of board
        w, h = self.size()
        return self._bd[x + y*w] if (0<=x<w and 0<=y<h) else -1

    def play(self, x: int, y: int, action: str):
        v, x0, y0 = self._get(x, y), self._x0, self._y0
        if v > 0 and abs(x - x0) + abs(y - y0) == 1:
            self._bd[x0 + y0*self._w] = v
            self._bd[x + y*self._w] = 0
            self._x0, self._y0 = x, y  # tile @ (x, y) ⇆ blank

---

# 🧪 Fifteen - Metodi getter

``` py
class Fifteen(BoardGame):
    #...
    def read(self, x: int, y: int) -> str:
        v = self._get(x, y)
        return str(v) if v > 0 else ""

    def finished(self) -> bool:
        return self._bd == self._solution

    def status(self) -> str:
        return "Puzzle solved!" if self.finished() else "Playing"

    def size(self) -> tuple[int, int]:
        return self._w, self._h
```

>

<https://tomamic.github.io/pyodide/?p42_fifteen.py>

---

# Lista di liste

---

# 🧪 Matrice in lista di liste

- Possibile rappresentazione di una *matrice*: lista di liste
- ⚠️ Spesso, la gestione è più complessa
    - In generale, preferibile una lista semplice
- Accesso agli elementi: due indici (`y` e `x`)
    - ⚠️ *Primo indice* seleziona la riga: `y`
    - *Secondo indice* seleziona la colonna: `x`

``` py
>>> a = [["A", "B", "C", "D"],
         ["E", "F", "G", "H"],
         ["I", "L", "M", "N"]]
>>> a[2]
["I", "L", "M", "N"]
>>> a[2][1]  # x, y = 1, 2
"L"
```

---

# 🧪 Operazioni su liste di liste

- Somma, colonna per colonna
- Dalla lista di liste, si possono ricavare `rows` e `cols` 👍

``` py
matrix = [[2, 4, 3, 8],
          [9, 3, 2, 7],
          [5, 6, 9, 1]]
rows = len(matrix)
cols = len(matrix[0])

for x in range(cols):
    total = 0
    for y in range(rows):
        val = matrix[y][x]
        total += val
    print("Col #", x, "sums to", total)
```

---

# 🔬 Creare matrice rows x cols

- Inizializzare matrice, come lista singola: *list repetition*
- Inizializzare una lista di liste: due *comprehension* annidate ⚠️
    - Attenzione anche alle operazioni di copia ⚠️
    - [Python FAQ: multidimensional list](https://docs.python.org/3/faq/programming.html#faq-multidimensional-list)

``` py
unidim = ["-"] * (rows*cols)  # suggested way

multidim = [["-" for x in range(cols)] for y in range(rows)]

# multidim = []
# for y in range(rows):
#     new_row = []
#     for x in range(cols):
#         new_row.append("-")
#     multidim.append(new_row)
```

---

# Flussi di dati

---

![](images/fun/cassette-tape.png)
# 💡️ Stream

- Astrazione per flussi di informazione
    - Lettura o scrittura di informazioni su *qualunque* dispositivo I/O (*file, ma non solo*)
- **File di testo**
    - Varie codifiche (*UTF-8* o altro)
    - Conversioni automatiche, es. `"\n"` → `"\r\n"`
- **File binari**
    - I/O preciso byte a byte, senza nessuna conversione
    - Qualsiasi file... anche di testo!

>

[docs.python.org/tutorial](https://docs.python.org/3/tutorial/inputoutput.html#tut-files)

---

![](images/hist/typewriter.png)
# ⭐ Scrittura su file

- Funzione **`open`** per accedere a un file (di testo)
    - Modalità *scrittura* o *lettura*: `"w"`, o `"r"`
- Blocco **`with`**: alla fine *chiude* il file
    - Anche in caso di errore
    - File di nuovo disponibile per altre app.
- Scrittura su file: funzione **`print`**

``` py
with open("squares.txt", "w") as squares:
    for x in range(10):
        print(x, x ** 2, file=squares)
```

---

![](images/fun/shopping-list.png)
# ⭐ Ciclo di lettura da file

- Apertura file in lettura con **`open`**
- Blocco **`with`**: all'uscita chiude sempre il file
- File *iterabile* riga per riga con un ciclo **`for`**
    - *Similmente* a lista di stringhe

``` py
with open("shopping_list.txt") as groceries_file:
    for line in groceries_file:
        # process line
        # line = line.strip()
        print(line, ":", len(line))
```

- ⚠️ Ciascuna riga è di tipo `str`, terminante con `"\n"`
    - `strip()` toglie spaziature iniziali e finali

---

# 🔬 Lettura di una riga

- **`read`** legge tutto il file come unica stringa
- **`readline`** legge e “*consuma*” una sola riga
- Letture successive saltano le righe già “*consumate*”
    - Il “*nastro*” del file avanza sotto la “*testina di lettura*”
- Alla fine del file, viene letta una stringa vuota
    - Valore *sentinella*

``` py
with open("some_file.txt", "r") as f:
    first_line = f.readline()
    second_line = f.readline()
    remaining_text = f.read()
    # both strings contain '\n' at the end
```

---

# 🥷 Gestione errori

- **Eccezioni**: per gestire separatamente i casi inattesi
- In caso di errore all'interno del `try`
    - L'esecuzione del `try` si interrompe subito
    - Viene eseguito il blocco `except`

``` py
x = None
while x is None:
    try:
        x = int(input("Please enter a number: "))  # ValueError?
        print("That's fine")
    except:
        print("Oops! That was no valid number. Try again...")
print("The square is", x ** 2)
```

---

![](images/fun/tape-pencil.png)
# 🥷 Errori con i file

- Per un `try`, possibili vari blocchi `except`
    - Ciascuno gestisce solo un tipo di errore
    - Altrimenti, il programma termina
- `with`: file chiuso anche in caso di errore

``` py
try:
    with open("file.txt", "r") as f:   # OSError?
        whole_text = f.read()          # OSError?
        print(int(whole_text[10:15]))  # IndexError? ValueError?
except OSError as e:
    print("Ouch!\n", e)
except IndexError:
    print("Oh, my!")
# if ValueError is raised: unhandled, abrupt termination
```

---

# 🥷 Console come stream

- Console come stream di *input*: `sys.stdin`
- Console come stream di *output*: `sys.stdout`, `sys.stderr`
- Metodo **`write`** dei file, in alternativa a `print`
    - Un solo valore `str` come parametro
    - Non aggiunge `\n` implicito

``` py
import sys

sys.stdout.write("CTRL-D (Lin) or CTRL-Z (Win) ")
sys.stdout.write("to close the input\n")  # print("...")
for line in sys.stdin:
    print(len(line))  # line includes a trailing '\n'
```

---

# 🥷 Stringhe formattate

- Stringhe con `f` prima delle virgolette
- Possono includere espressioni, tra graffe
- Specifiche di formattazione, dopo `:`

``` py
for a in [0, 45, 90, 135]:
    v = math.sin(a * math.pi / 180)
    print(f"Angle: {a:3}; Sin: {v:4.2f}")
```

``` text
Angle:   0; Sin: 0.00
Angle:  45; Sin: 0.71
Angle:  90; Sin: 1.00
Angle: 135; Sin: 0.71
```

>

[docs.python.org/tutorial](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings)

---

# 🏊 Esercizi

---

![](images/misc/merge-sign.png)
# Fusione

- Due file di testo contengono sequenze di numeri
    - Un valore per ogni riga
    - In ciascun file, i valori sono già ordinati
- Scrivere in output i valori di entrambi i file
    - Sequenza di output tutta in ordine

>

Ciclicamente, confrontare la coppia dei primi valori (ciascuno proveniente da uno dei due stream)
<br>
Scrivere il minore dei due sul file di uscita
<br>
Non estrarre un nuovo valore da uno stream, se quello precedente non è ancora stato scritto in output
<br>
<https://tomamic.github.io/pyodide/?p42_merge.py>

---

# File CSV

- Leggere una matrice di interi da un file testuale CSV
    - *Comma Sep. Values*: valori riga per riga, separati da virgola

``` text
5,7,2,11
1,3,12,9
4,6,10,8
```

- Memorizzare i dati in una lista semplice
    - Contare: num. righe del file, num. valori in una riga
- Elevare a quadrato valori su diagonale, da basso destra
    - Nell'esempio: `8`, `12`, `7` (celle dove `cols-x == rows-y`)
- Salvare in CSV la matrice modificata

>

<https://tomamic.github.io/pyodide/?p42_csv.py>

---

# Incolonnamento dati

- Visualizzare due tabelle con i caratteri ASCII
    - 4 righe x 24 colonne, codici da 32 a 126
- Tabella 1: mostrare in ordine i caratteri, colonna per colonna
- Tabella 2: mostrare in ordine i caratteri, riga per riga

``` text
 $(,048<@DHLPTX\`dhlptx|
!%)-159=AEIMQUY]aeimquy}
"&*.26:>BFJNRVZ^bfjnrvz~
#'+/37;?CGKOSW[_cgkosw{
```

>

Usare sempre due cicli `for` annidati: esterno su `y`, interno su `x`
<br>
In ogni posizione, calcolare il carattere da visualizzare: `x * ROWS + y`...
<br>
<https://tomamic.github.io/pyodide/?p42_ascii.py>

---

![](images/hist/scytale.png)
# Scitala spartana

- Leggere un intero file di testo
- Inserire in una matrice i primi W×H caratteri
    - W colonne × H righe, valori prefissati
    - Riempire una riga della matrice dopo l'altra
    - Da destra a sinistra, una riga alla volta (→, ↓)
- Scrivere il contenuto della matrice su console
    - Scrivere una colonna della matrice dopo l'altra
    - Prima riga su console = prima colonna della matrice...
    - Dall'alto verso il basso, una colonna alla volta (↓, →)

>

<https://tomamic.github.io/pyodide/?p42_scytale.py>

---

![](images/fun/neighborhood4.png)
# Funzione di smooth

- Scrivere una funzione `smooth`
    - Parametro: matrice iniziale, di float
    - Risultato: nuova matrice con *smooth*
    - Matrici rappresentate come liste di liste
- **Smooth**: per ogni cella in matrice iniziale
    - Il risultato è la *media* dell'intorno
    - 5 valori: cella stessa e 4 adiacenti
- Attenzione alle celle esterne
    - Sommare e contare solo i valori disponibili
    - 4 valori ai bordi, 3 valori agli angoli
- Verificare la funzione con alcune matrici di test

>

<https://tomamic.github.io/pyodide/?p42_smooth.py>

---

![](images/misc/spiral.png)
# Spirale

- Scrivere una funzione per riempire di numeri crescenti una matrice quadrata (o rettangolare)
- Seguire il percorso a spirale suggerito nella figura a fianco
- Dimensioni della matrice indicate dall'utente a runtime

>

Tenere traccia della direzione attuale (∆y, ∆x)
<br>
Avanzare fino al bordo o a una cella già visitata,
<br>
poi cambiare la direzione in senso orario
<br><br>
Coordinate raster, rotazione oraria di 90°: `(x', y') = (-y, x)`
<br>
In generale: `(x', y') = (x⋅cos(θ) - y⋅sin(θ), x⋅sin(θ) + y⋅cos(θ))`
<br>
<https://tomamic.github.io/pyodide/?p42_spiral.py>

---

![large](images/misc/lightsout.svg)
# Lights out

- Gioco basato su una griglia di luci
- All'avvio alcune luci casuali sono accese
- Se si clicca su una luce
    - Questa cambia stato
    - Assieme alle 4 luci adiacenti (`←→↑↓`)
- L'obiettivo è di spegnere tutte le luci
    - Possibilmente col numero minimo di mosse

>

<https://en.wikipedia.org/wiki/Lights_Out_(game)>
<br>
<https://tomamic.github.io/pyodide/?p42_lightsout.py>
