![](images/fun/matryoshka.png)
# Ricorsione
## Introduzione alla programmazione

---

# 💡️ Programmazione ricorsiva

- Molti linguaggi consentono a una funzione (o procedura) di chiamare se stessa
- Chiamata ricorsiva, diretta o indiretta

![](images/fun/recursion.svg)

---

`$$\begin{cases}0! = 1 \\ n! = n · (n-1)!, n>0\end{cases}$$` ![](images/fun/stack.svg)
# ⭐ Fattoriale, ricorsione

``` py
def factorial(n: int) -> int:
    if n == 0:
        result = 1
    else:
        result = n * factorial(n - 1)
    return result

```

- A ogni invocazione di una funzione, viene creato nello **stack** un nuovo record
- **Contesto locale** alla particolare attivazione della funzione stessa
- Eseguire con il debugger di *Thonny*

>

<https://fondinfo.github.io/play/?c11_factorial.py>

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

Ai primordi (Fortran 66 ecc.) solo allocazione statica <br> Spazio fisso e unico per dati locali a una funzione → no ricorsione

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
    - Allocazione *automatica* di spazio in *stack* a ogni attivazione della funzione (possibile la ricorsione)
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

<https://fondinfo.github.io/play/?c11_fibonacci.py>

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

<https://fondinfo.github.io/play/?c11_fibonacci.py>

---

# 💡️ Tipo di dato ricorsivo

- Un valore può *contenere* valori dello stesso tipo
- *Lista collegata (linked list)*
    - Vuota / `None`, oppure...
    - Nodo di testa, seguito da una *lista collegata*

![](images/fun/linked-list.svg)

``` py
class ListNode:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next  # ListNode | None

    def __str__(self) -> str:
        return f"<{self.data} {self.next}>"
```

---

![](images/comp/binary-tree.svg)
# Albero binario

- *Albero*
    - Vuoto / `None`, oppure...
    - Nodo di testa, seguito da più alberi
- *Albero binario*
    - Due figli per ogni nodo

``` py
class TreeNode:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left    # TreeNode | None
        self.right = right  # TreeNode | None

    def __str__(self) -> str:
        return f"<{self.data} {self.left} {self.right}>"
```

---

![](images/comp/sorted-tree.svg)
# Albero ordinato

``` py
def insert(tree, val) -> TreeNode:
    if tree == None:
        tree = TreeNode(val)
    elif val < tree.data:
        tree.left = insert(tree.left, val)
    elif val > tree.data:
        tree.right = insert(tree.right, val)
    return tree

def flatten(tree) -> list:
    if tree == None:
        return []
    return flatten(tree.left) + [tree.data] + flatten(tree.right)
```

- Albero ordinato come `set`, *senza ripetizioni*

---

![](images/comp/sorted-tree.svg)
# Ricerca binaria

``` py
def contains(tree, val) -> bool:
    if tree == None:
        return False
    if val == tree.data:
        return True
    subtree = tree.left if val < tree.data else tree.right
    return contains(subtree, val)
```

``` py
t = None
for v in [7, 5, 5, 9, 6, 2, 3, 11]:
    t = insert(t, v)
print(t)
print(flatten(t))
print(contains(t, 4))
print(contains(t, 5))
```

---

![](images/repr/file-system.svg)
# Documenti e cartelle

- Albero che rappresenti una gerarchia di documenti
- Nodo dell'albero
    - Un `Document` (*foglia*)
    - Oppure un `Folder`, con vari nodi figlio

``` py
class Node:
    pass
class Document(Node):
    def __init__(self, name: str, data: str):
        self._name = name
        self._data = data
class Folder(Node):
    def __init__(self, name: str, children: list[Node]):
        self._name = name
        self._children = children
```

---

![](images/comp/list-tree.svg)
# Liste annidate

- Casi semplici di alberi : liste annidate
    - Tipo param es.: `T = list["T"] | int`

``` py
def count_tree(t) -> int:
    if not isinstance(t, list):
        return 1
    # return sum(count_tree(v) for v in t)
    count = 0
    for v in t:
        count += count_tree(v)
    return count

tree = [[1, 2, [3, 4], [5]], 6]
print(count_tree(tree))
```

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
<https://fondinfo.github.io/play/?c11_palindrome.py>

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

<https://fondinfo.github.io/play/?c11_sierpinski.py>

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

<https://fondinfo.github.io/play/?c11_drawtree.py>

---

![](images/hist/euclid.jpg)
# Massimo Comun Divisore

- Leggere due numeri
- Calcolare in una funzione il loro Massimo Comun Divisore
- Visualizzare il risultato della funzione

>

Provare a usare sia l'iterazione che la ricorsione
<br>
Euclide: MCD(a, b) = a, se b = 0;
<br>
MCD(a, b) = MCD(b, a mod b), se b > 0
<br>
<https://fondinfo.github.io/play/?c11_gcd.py>

---

![](images/misc/cubic-function.png)
# Bisezione, ricorsione

- Trovare lo zero della seguente funzione matematica
    - *f(x) = x³ – x – 1, per 1 ≤ x ≤ 2*
    - Trovare *x* t.c. *|f(x)| < 0.001*
- Definire una funzione ricorsiva di bisezione
    - Parametri necessari: *inizio intervallo* di ricerca, *fine intervallo* di ricerca
    - Invocare a ogni livello la funzione su un intervallo dimezzato

>

<https://en.wikipedia.org/wiki/Bisection_method>
<br>
<https://fondinfo.github.io/play/?c11_bisection.py>

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
<https://fondinfo.github.io/play/?c11_words.py>

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

<https://fondinfo.github.io/play/?c11_anagram.py>

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
<https://fondinfo.github.io/play/?c11_hanoi.py>

---

# Notazione polacca

- Leggere una riga di testo in una stringa
- Scrivere una funzione che valuti la stringa come una espressione, nella forma:
    - `"+ 2 7"` (=9)
- Gli operandi possono essere a loro volta espressioni:
    - `"+ * 3 4 15"` (=27)
- Scrivere una seconda funzione che trasformi l'espressione nell'abituale notazione infissa:
    - `"((3 * 4) + 15)"`
- Usare la ricorsione

>

Supporre che i “token” siano tutti separati da spazio e che gli operatori abbiano tutti cardinalità fissa
<br>
<https://fondinfo.github.io/play/?c12_polish.py>

---

![](images/repr/file-system.svg)
# Documenti e cartelle

- Un sistema gerarchico di gestione documenti è composto di due tipi di *nodi* (classe base)
    - I *documenti*, caratterizzati da un nome e da un contenuto testuale (classe derivata)
    - Le *cartelle*, caratterizzate da un nome e da una lista di nodi contenuti (classe derivata)
- Creare una gerarchia delle tre classi: `Node`, `Document`, `Folder`
- Nel corpo principale del programma, istanziare e organizzare vari nodi (senza input dell'utente)
    - Ricreare con gli oggetti la struttura raffigurata a fianco

>

<https://fondinfo.github.io/play/?c12_folders.py>

---

![](images/repr/file-system.svg)
# Dimensione delle cartelle

- Metodo `size` per tutti i nodi (es. precedente)
    - Astratto nella classe base
    - Per un documento, lunghezza del contenuto
    - Per una cartella, somma delle dimensioni dei nodi contenuti
- Calcolare dimensione, per l'esercizio precedente
    - Inventare contenuti per i documenti presenti
- Inoltre, metodo `print(indent: int)` per i nodi
    - Per mostrare a terminale la struttura ad albero
    - Metodo astratto nella classe base
    - Mostra il nome di documenti e cartelle
    - Indenta opportunamente i nodi, rispetto alla cartella che li contiene

>

<https://fondinfo.github.io/play/?c12_folders.py>

---

![](images/comp/expression.svg)
# Espressioni

- Definire una gerarchia di classi per rappresentare espressioni matematiche
- *Classe base* **`Expression`** con metodo astratto `eval`
    - Senza parametri, restituisce il valore `float` dell'espressione
- Le *sottoclassi* concrete di una espressione sono:
    - **`Literal`**, contenente un valore costante `float`
    - **`Sum`**, contenente due operandi, entrambi espressioni
    - **`Product`**, contenente due operandi, entrambi espr.
- Istanziare (senza fare *parsing*!) oggetti per rappresentare questa espressione:
    - `5 * (3 * 2 + 4)`
- Calcolare il valore finale, chiamando `eval` sul nodo radice

>

<https://fondinfo.github.io/play/?c12_expr.py>

---

![](images/comp/expression.svg)
# Espressioni prefisse

- Aggiungere un  metodo `prefix` a `Expression` (es. precedente)
    - Genera una stringa in notazione prefissa (operatore seguito da operandi)
- Risultato da espressione di esempio:
    - `"* 5 + * 3 2 4"`

``` py
prod1 = Product(Literal(3), Literal(2))
sum1 = Sum(prod1, Literal(4))
prod2 = Product(sum1, Literal(5))
print(prod2.eval())
print(prod2.prefix())
```

>

<https://it.wikipedia.org/wiki/Notazione_polacca>
<br>
<https://fondinfo.github.io/play/?c12_expr.py>

---

![](images/comp/expression.svg)
# Albero da stringa

- Analizzare una stringa, fornita dall'utente
    - La stringa contiene una espressione in notazione polacca, prefissa
    - Generare in memoria un albero di oggetti di tipo **Expression**
- Mostrare il valore dell'espressione, usando `eval`
- Mostrare la rappresentazione infissa, usando `infix`
    - Aggiungere un metodo `infix` a **Expression**

>

<https://fondinfo.github.io/play/?c12_parse.py>
