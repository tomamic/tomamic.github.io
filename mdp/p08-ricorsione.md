![](images/fun/matryoshka.png)
# Ricorsione
## Introduzione alla programmazione

---

# 💡️ Programmazione ricorsiva

- Molti linguaggi consentono ad una funzione (o procedura) di chiamare se stessa
- Chiamata ricorsiva, diretta o indiretta

![](images/fun/recursion.svg)

---

![](images/fun/factorial.svg) ![](images/fun/stack.svg)
# ⭐ Fattoriale, ricorsione

``` py
def factorial(n: int) -> int:
    result = 1
    if n > 0:
        result = n * factorial(n - 1)
    return result
```

- Ad ogni invocazione di una funzione, viene creato nello **stack** un nuovo record
- **Contesto locale** alla particolare attivazione della funzione stessa

>

<https://tomamic.github.io/pyodide/?p08_factorial.py>

---

# 💡️ Pensare ricorsivamente

- ① Trovare qualche *caso base*
    - Risultato ottenuto senza ricorsione
- ② Trovare una soluzione nel *caso generale*
    - Richiede la soluzione di un problema dello stesso tipo
    - Ma di dimensione ridotta
- Così, si risolvono problemi via via più piccoli
    - Ci si avvicina sempre più al caso base
    - Ricorsione termina

---

![](images/fun/books-stack.png)
# 🔬 Stack dell'applicazione

- Pila: memoria dinamica *LIFO (Last In First Out)*
    - Dimensione massima prefissata
- Il programma ci memorizza automaticamente:
    - **Indirizzo di ritorno** per la funzione <br> Inserito alla chiamata, estratto all'uscita
    - **Parametri** della funzione <br> Inseriti alla chiamata, eliminati all'uscita
    - **Variabili locali**, definite nella funzione <br> Eliminate fuori dall'ambito di visibilità

>

Ai primordi (Fortran 66 ecc.) solo allocazione statica <br> Spazio fisso ed unico per dati locali ad una funzione → no ricorsione

---

# 🔬 Vista semplificata dello stack

![large](images/fun/stack-content.svg)

---

# 🔬 Record di attivazione

![large](images/fun/records.svg)

---

# 🔬 Visibilità di una variabile

- Insieme di istruzioni da cui è accessibile
    - *Ciclo di vita*: esistenza in memoria della var (etichetta)
    - I valori (oggetti) in Python sono tutti gestiti dinamicamente
- Visibilità **globale**
    - Variabili fuori da ogni funzione - *Meglio evitare!*
    - Allocazione *statica* in alcuni linguaggi
- Visibilità **locale** alla funzione
    - Variabili locali e parametri
    - Allocazione *automatica* di spazio in *stack* ad ogni attivazione della funzione (possibile la ricorsione)
- Visibilità locale al blocco (es. `if`): non in Python!

---

# 🧪 I conigli di Fibonacci

![large](images/fun/fib-rabbits.png)

---

# 🧪 Fibonacci, ricorsione

``` py
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

![](images/fun/fib-calls.svg)

>

<https://tomamic.github.io/pyodide/?p08_fibonacci.py>

---

# 🧪 Fibonacci, memoization

``` py
def fibonacci(n: int, _cache=[0, 1]) -> int:
    if n < len(_cache):
        return _cache[n]
    result = fibonacci(n - 1) + fibonacci(n - 2)
    _cache.append(result)
    return result
```

``` py
from functools import lru_cache
@lru_cache()  # function decoration
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
---

# 🧪 Fibonacci, iterazione

``` py
def fibonacci(n: int) -> int:
    val, nxt = 0, 1

    for i in range(n):
        val, nxt = nxt, val + nxt

    return val
```

>

<https://tomamic.github.io/pyodide/?p08_fibonacci.py>

---

# 🏊 Esercizi

---

# Ricorsione, palindromo

- *Palindromo*: testo che rimane uguale se letto al contrario
- Scrivere una funzione ricorsiva per riconoscere i palindromi
    - Parametro: testo da controllare
    - Risultato: `bool`

>

Stringa palindroma: se ha lunghezza 0 o 1, oppure...
<br>
Prima lettera == ultima lettera e...
<br>
Stringa rimanente (senza prima e ultima lettera) palindroma
<br>
<https://tomamic.github.io/pyodide/?p08_palindrome.py>

---

![](images/fun/sierpinski-triangle.svg)
# Triangolo di Sierpinski

- Disegnare su un'area rettangolare (nera): `x`, `y`, `w`, `h`
    - All'inizio, l'intero canvas
- Se l'area è sufficiente, dividerla in `4` riquadri
    - Colorare il riquadro in alto a sinistra (bianco)
    - Applicare ricorsivamente il pattern sugli altri `3` riquadri
- Come miglioria, permettere all'utente di scegliere il *livello di dettaglio* (profondità della ricorsione), per colorare...
    - Liv. `0`: niente
    - Liv. `1`: solo `1` riquadro
    - Liv. `2`: `1` riquadro grande e `3` più? piccoli
    - Liv. `3`: `1+3+9` riquadri, ecc.

>

<https://tomamic.github.io/pyodide/?p08_sierpinski.py>

---

![](images/fun/fractal-tree.png)
# Albero frattale

- Funzione ricorsiva per disegnare un albero
    - Parametri: posizione iniziale, lunghezza del tronco, angolo
- Se tronco minore di 5 pixel
    - Disegnare solo un segmento (verde)
- Altrimenti:
    - Segmento per tronco (marrone)
    - Alla sua estremità, due rami con lo stesso pattern
    - 1° ramo, con rotazione di -30°
    - 2° ramo, con rotazione di +30°
    - Lunghezza dei rami ridotta a 4/5 del parametro

>

<https://tomamic.github.io/pyodide/?p08_drawtree.py>

---

![](images/hist/euclid.jpg)
# Massimo Comun Divisore

- Leggere due numeri
- Calcolare in una funzione il loro Massimo Comun Divisore
- Visualizzare il risultato della funzione

>

Provare ad usare sia l'iterazione che la ricorsione
<br>
Euclide: MCD(a, b) = a, se b = 0;
<br>
MCD(a, b) = MCD(b, a mod b), se b > 0
<br>
<https://tomamic.github.io/pyodide/?p08_gcd.py>

---

![](images/misc/cubic-function.png)
# Bisezione, ricorsione

- Trovare lo zero della seguente funzione matematica
    - *f(x) = x³ – x – 1, per 1 ≤ x ≤ 2*
    - Trovare *x* t.c. *|f(x)| < 0.001*
- Definire una funzione ricorsiva di bisezione
    - Parametri necessari: *inizio intervallo* di ricerca, *fine intervallo* di ricerca
    - Invocare ad ogni livello la funzione su un intervallo dimezzato

>

<https://en.wikipedia.org/wiki/Bisection_method>
<br>
<https://tomamic.github.io/pyodide/?p08_bisection.py>

---

![](images/fun/bike-lock.png)
# Generazione di password

- Generare tutte le password di una data lunghezza (*disposizioni con ripetizione*)
    - Parametro: lunghezza `n` delle password
    - Parametro: `str` contenente i possibili simboli
    - Risultato: una lista di stringhe
- Algoritmo:
    - Lunghezza `0`: l'unica password è la stringa vuota: `['']`
    - Altrimenti: per ogni simbolo scelto come primo carattere...
    - Concatenarlo con tutte le password di lunghezza `n - 1` (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive
<br>
<https://tomamic.github.io/pyodide/?p08_words.py>

---

![](images/fun/anagram.svg)
# Anagrammi

- Generare tutti gli anagrammi (permutazioni) di una stringa
- Risultato, una lista di stringhe
- Algoritmo:
    - Stringa vuota: solo se stessa
    - Altrimenti: per ogni carattere...
    - Concatenarlo con tutte le permutazioni dei rimanenti caratteri (*ricorsione*)

>

<https://tomamic.github.io/pyodide/?p08_anagram.py>

---

![](images/fun/hanoi-tower.png)
# Torre di Hanoi

- Tre paletti + N dischi di diametro decrescente
- Portare tutti i dischi dal primo all'ultimo paletto
- Si può spostare solo un disco alla volta
- Non si può mettere un disco su uno più piccolo
- Usare la ricorsione

>

Immediato spostare un solo disco.
<br><br>
N dischi: spostarne N-1 sul piolo né origine né dest.,
<br>
spostare l'ultimo disco sul piolo giusto,
<br>
spostare ancora gli altri N-1 dischi.
<br><br>
<https://tomamic.github.io/pyodide/?p08_hanoi.py>
