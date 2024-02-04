![](images/oop/lego-blocks.png)
# Sequenze
## Introduzione alla programmazione

---

# Liste e indici

---

![](images/fun/shopping-list.png)
# ⭐ Lista

- Sequenza mutabile di elementi omogenei

``` py
groceries = ["spam", "egg", "beans"]
rainfall_data = [13, 24, 18, 15]
```

- A volte serve una lista di dimensione già nota
- I valori saranno calcolati durante l'esecuzione

``` py
results_by_month = [0] * 12  # 12 times 0 (list repetition)
```

---

![](images/misc/rock-cubes.png)
# ⭐ Cicli su liste: for

``` py
values = [2, 3, 5, 7, 11]

print("Cubes:")

for val in values:
    cube = val ** 3
    print(cube, end="\t")
```

``` text
8   27  125 343 1331
```

- A ogni iterazione, a `val` è assegnato un elemento di `values`
- Ciclo `for` per qualsiasi tipo di sequenza
    - `list`, `str`, `tuple`, `range`…

---

![](images/fun/wile-coyote.png)
# ⭐ Accesso agli elementi

- **Attenzione a usare indici validi!**
    - *Lunghezza* attuale di una lista `s`: `len(s)`
    - Elementi *numerati* da `0` a `len(s)-1`

``` py
groceries = ["spam", "egg", "beans", "bacon"]
n = len(groceries)           # 4
groceries[0]                 # "spam"
groceries[1]                 # "egg"
groceries[n-1]               # "bacon"
groceries[1] = "ketchup"     # replace a value, len is still 4
groceries.append("sausage")  # add to the end, len is 5
groceries                    # guess!
```

---

![](images/fun/month-list.svg)
# 🧪 Elementi e slice

- Indici *negativi* contano dalla fine
    - Da `-1` (ultimo) a `-len(s)` (primo)

``` py
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
n = len(months)            # 12
months[3]                  # "Apr"
months[-2]                 # "Nov", same as n - 2
```

``` py
spring = months[2:5]       # ["Mar", "Apr", "May"]
quart1 = months[:3]        # ["Jan", "Feb", "Mar"]
quart4 = months[-3:]       # ["Oct", "Nov", "Dec"]
whole_year = months[:]     # Copy of the whole list
```

---

# 🧪 Inserimento e rimozione

``` py
groceries = ["spam", "egg", "beans"]

groceries[0] = "sausage"      # replace an element

groceries.append("bacon")     # add an element to the end
groceries.pop()               # remove (and return) last element

groceries.insert(1, "bacon")  # other elements shift
removed = groceries.pop(1)    # remove (and return) element at index

i = groceries.index("egg")    # 1, index of "egg" in groceries
if "egg" in groceries:        # True, groceries contains "egg"
    groceries.remove("egg")   # remove an element by value

groceries.clear()             # remove everything, groceries is empty now
```

---

# 🔬 Uguaglianza e identità

``` py
a = ["spam", "egg", "beans"]
b = a[:]         # new list!
b == a           # True, they contain the same values
b is a           # ❗ False, they are two objects in memory
                 # (try and modify one of them...)
c = a
c is a           # ❗ True, same object in memory
                 # (try and modify one of them...)
d = ["sausage", "tomato"]
groceries = c + d  # list concatenation --> new list!

# Lexicographical comparison of lists (or strings, tuples...)
# Compare the first two *different* elements
[2, 0, 0] > [1, 2, 0]  # True: 2 > 1
[2, 1, 0] > [2, 0, 1]  # True: 2 == 2, 1 > 0
```

---

# 🧪 Funzioni su liste

- Parametri passati *per assegnamento* (~ etichette)
    - ⇒ Modifiche agli oggetti: permanenti

``` py
def append_fib(data: list[int]):
    val = len(data)
    if val >= 2:
        val = data[-2] + data[-1]
    data.append(val)

def main():
    values = []
    for _ in range(12):
        append_fib(values)
        print(values)  # let's see what's going on
```

>

<https://tomamic.github.io/pyodide/?p07_fibonacci.py>

---

![](images/fun/fun-reset.svg)
# 🧪 Variabili e valori

- ❓ Qual è l'output del seguente programma?
- ❓ E se invece assegniamo a `data` una lista vuota?
    - Anzichè chiamare il suo metodo `clear`

``` py
def reset(data: list):
    data.clear()
    #data = []

def main():
    nums = [1, 2, 3]
    reset(nums)
    print(nums)

main()
```

>

<https://tomamic.github.io/pyodide/?p07_reset.py>

---

# 🧪 Stringhe e liste

- **Stringa**: sequenza *immutabile* di caratteri
- **`join`** e **`split`**: da lista a stringa e viceversa

``` py
txt = "Monty Python's Flying Circus"
txt[3]    # "t"
txt[-2]   # "u"
txt[6:12] # "Python"
txt[-6:]  # "Circus"

days = ["tue", "thu", "sat"]
txt = "|".join(days)  # "tue|thu|sat"

days = "mon|wed|fri".split("|")  # ["mon", "wed", "fri"]
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

![](images/fun/brackets.svg)
# 🧪 Testo tra marcatori

- Di un testo, trascrivere solo parti comprese tra `<` e `>`
    - Se manca `>` dopo `<`, trascrivere fino alla fine

``` py
text = input("Text? ")
inside = False

for c in text:
    if c == "<" and not inside:
        inside = True
    elif c == ">" and inside:
        inside = False
        print()
    elif inside:
        print(c, end="")
```

>

<https://tomamic.github.io/pyodide/?p07_brackets.py>

---

![](images/misc/numbers.png)
# 🧪 Lista di contatori

- Contare separatamente le cifre in un testo
    - Quanti `0`? Quanti `1`? …
    - `10` condizioni, `10` variabili contatore
    - Oppure lista di `10` elementi

``` py
text = input("Text? ")
counters = [0] * 10

for c in text:
    if "0" <= c <= "9":
        counters[int(c)] += 1

print(counters)
```

>

<https://tomamic.github.io/pyodide/?p07_counters.py>

---

# 🧪 Tupla

- Sequenza **immutabile** di valori, anche di *tipo diverso*

``` py
# Tuple packing
pt = 5, 6, "red"
pt[0]  # 5
pt[1]  # 6
pt[2]  # "red"

# Sequence unpacking (from a list, string, tuple...)
x, y, colour = pt
a, b = 3, 4
a, b = b, a
```

---

![](images/fun/shopping-list.png)
# 🧪 Ciclo di lettura da file

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

# 🥷 Funzioni su sequenze

---

![](images/dev/computer-ninja.svg)
# 🥷 List comprehension

- Modo conciso per creare una lista, rielaborando una data sequenza
    - Espressione di *output*
    - Variabile di *iterazione*
    - Sequenza di *input*
- Condizione sugli elementi, opzionale

``` py
squares = [x ** 2 for x in range(5)]  # [0, 1, 4, 9, 16]
# squares = []
# for x in range(5):
#    squares.append(x ** 2)
```

``` py
nums = [int(c) for c in "h3ll0 w0rld" if "0" <= c <= "9"]
# [3, 0, 0]
```

---

![](images/fun/zip.png)
# 🥷 Zip

- Accoppia elementi di due (o +) sequenze
- Genera sequenza *lazy* di coppie (tuple)
- Lunghezza della sequenza più breve
- **Laziness**: risultati calcolati non subito
    - Solo quando servono

``` py
groceries = ["spam", "egg", "beans"]
quantities = ["100 g", "6 pc", "200 g", "too much"]

for p, q in zip(groceries, quantities):  # unpacking
    print(p, q, end=" § ")
# spam 100 g § egg 6 pc § beans 200 g §

z = list(zip(groceries, quantities))  # if you *really* need a list
# [("spam", "100 g"), ("egg", "6 pc"), ("beans", "200 g")]
```

---

![](images/repr/child-fingers.png)
# 🥷 Enumerate

- Accoppia un indice crescente con i valori di una sequenza
- Genera sequenza *lazy* di coppie
- Iterazioni con valore e indice assieme

``` py
groceries = ["spam", "egg", "bacon", "sausage"]

for i, val in enumerate(groceries):  # ~ zip(range(4), groceries)
    print(i, val, end=" § ")
# 0 spam § 1 egg § 2 bacon § 3 sausage §

e = list(enumerate(groceries))  # if you *really* need a list
[(0, "spam"), (1, "egg"), (2, "bacon"), (3, "sausage")]
```

---

# 🥷 Liste ordinate o rovesciate

- Funzioni `sorted` e `reversed` non alterano la lista
- Metodi `sort` e `reverse` alterano la lista (*in place*)
- Parametro `key`: contronto tra risultati di una *funzione*

``` py
groceries = ["spam", "bacon", "egg"]
s1 = sorted(groceries)           # ["bacon", "egg", "spam"]
s2 = sorted(groceries, key=len)  # ["egg", "spam", "bacon"]
rev = list(reversed(groceries))  # ["egg", "bacon", "spam"]
print(groceries)                 # ["spam", "bacon", "egg"]
```

``` py
groceries.sort()     # in-place
groceries.reverse()  # in-place
print(groceries)     # ["spam", "egg", "bacon"]
```

---

![](images/fun/legomap.png)
# 🥷 Map

- Parametri: funzione `f`, sequenza `l`
    - *(Funzione di ordine superiore)*
- `f` applicata a ogni valore in `l`
- Risultato: sequenza *lazy* dei risultati

``` py
vals = [-2, -1, 0, 1, 2]  # or, range(-2, 3)
for v in map(abs, vals):
    print(v, end="\t")
# 2    1    0    1    2
```

``` py
vals = [1, 2]
vals += map(int, "3,4,5".split(","))  # [1, 2, 3, 4, 5]
```

>

Più sequenze, se servono come parametri per `f`

---

# 🥷 Filter

- Parametri: *predicato* `p` (funzione booleana), sequenza `l`
- Risultato: sequenza *lazy* con i soli valori che rispettano `p`

``` py
def odd(x): return x % 2 == 1
def pos(x): return x > 0

vals = [4, 5, -6, 0, -7, 8]
for v in filter(odd, vals):
    print(v, end="\t")  # 5  -7
for v in filter(pos, vals):
    print(v, end="\t")  # 4  5  8
```

---

# 🥷 Istruzioni ed espressioni

- **Espressione**: codice la cui valutazione produce un valore
    - Adatta a parte destra di un assegnamento (*rvalue*)
- Molte **istruzioni** Python non corrispondono a un valore
    - `if`, `while`, `for`, `def`, `class` *non* sono espressioni
    - Assegnamenti `=`, `+=` ecc. *non* sono espressioni
- Esiste un `if` speciale, come espressione

``` py
val = "boom" if 5 % 2 == 0 else "bang"`
```

- Da v3.8: *assegnamento* `:=` speciale, come espressione

``` py
while (v := float(input("val? "))) >= 0:  # sentinel
    print(v ** .5)
```

---

# 🥷 Valore di verità

- Ogni oggetto può essere convertito in `bool`
- Costanti e numeri *falsy*
    - `None`, `False`, `0`, `0.0` ecc.
- Sequenze *falsy*
    - `""`, `()`, `[]`, `{}`, `set()`, `range(0)`
- Altri oggetti, normalmente *truthy*
    - Decide metodo `__bool__`, o `__len__`

``` py
while v := input("val? "):  # sentinel, "" is falsy
    print(float(v) ** 2)
```

>

<https://docs.python.org/3/library/stdtypes.html#truth>

---

# 🥷 Funzioni di aggregazione

- Da sequenza a risultato singolo
- Operazioni logiche
    - **`all`** : *AND* logico su tutti i valori di *thrutiness*
    - **`any`** : *OR* logico su tutti i valori di *thrutiness*
- Operazioni numeriche
    - **`sum`, `max`, `min`, `len`**
    - Metodo **count** su sequenza: numero di occorrenze di un valore

``` py
>>> all((2, 1, 0, -1, ""))  # 0 and "" are falsy
False
>>> any([2, 1, 0, -1, ""])  # 2, 1 and -1 are truthy
True
>>> "abracadabra".count("a")
5
```

---

# 🥷 Valori casuali da sequenze

- **`choice`** : estrazione casuale da sequenza, probabilità uniforme

``` py
>>> from random import choice, sample, shuffle
>>> choice("aeiou")
"e"
```

- **`shuffle`** : mescolamento casuale di una lista (*in place*)

``` py
>>> vals = [2, 3, 5, 7, 11, 13]
>>> shuffle(vals)
>>> vals
[2, 11, 7, 3, 5, 13]
```

- **`sample`** : *n* estrazioni, da posizioni casuali non ripetute

``` py
>>> sample("aeiou", 3)  # a sequence and an int
["e", "o", "i"]  # result is a list
```

---

# 🏊 Esercizi

---

![](images/misc/histogram-rot.svg)
# Istogramma con barre orizzontali

- Chiedere all'utente una lista di valori positivi
    - Fino a inserimento del valore `0` (sentinella)
- Mostrare un istogramma
    - Lunghezza orizzontale di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile in orizzontale

>

<https://tomamic.github.io/pyodide/?p07_histogram.py>

---

![](images/misc/dice.png)
# Risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
- Contare quante volte si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due dadi

>

Per conteggiare i vari risultati, usare una lista di (almeno) 11 valori
<br>
<https://tomamic.github.io/pyodide/?p07_dice.py>

---

![](images/misc/merge-sign.png) ![](images/comp/merge.svg)
# Merge

- Definire una funzione `merge`
- Due parametri di tipo `list`
    - Entrambe le liste sono già ordinate (❗)
    - Entrambe le liste alla fine risulteranno vuote
- Risultato `list`
    - Risultato contiene tutti i valori delle due liste
    - I valori del risultato sono tutti in ordine
- Non usare `sort`, `sorted`; non ordinare la lista
    - Basta confrontare i valori in testa alle due liste
    - Quello più piccolo in assoluto è tra quei due
    - Rimuovere il valore scelto, dalla sua lista

>

<https://tomamic.github.io/pyodide/?p07_merge.py>

---

![](images/misc/pac-man.png)
# Mappe per Pac-Man

- Classe `PacMan` da `Turtle` dell'es. `bounce`
    - Dimensione `PacMan`: 16×16 pixel
- I muri sono indicati in una mappa
    - Lista di stringhe (righe)
    - Ogni carattere della mappa: blocchetto di 8×8 pixel
- Impedire il passaggio sui muri
    - Controllo prima del movimento
- Ignorare comandi da tastiera che inviano su muro

>

<https://tomamic.github.io/pyodide/?p07_pacman.py>

---

![](images/misc/resistors.png) `$$R_{ser} = \sum_i R_i$$` `$$\frac{1}{R_{par}} = \sum_i \frac{1}{R_i}$$`
# Resistenze da file

- Leggere da un file una sequenza di valori di resistenze elettriche
- Ogni riga contiene un valore
- Alla fine, visualizzare la resistenza equivalente, sia nel caso di resistenze disposte in serie, che in parallelo

>

<https://tomamic.github.io/pyodide/?p02_resistors.py>

---

![](images/misc/gold-price.svg)
# Sequenza di valori

- Chiedere all'utente il nome di un file
- Ciascuna riga del file contiene un valore `float`
- Cercare il valore minimo e quello massimo nel file
- Visualizzare i due valori
