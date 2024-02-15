![](images/comp/chess.jpg)
# Complessità computazionale
## Introduzione all'informatica <br> Michele Tomaiuolo @ Ingegneria UniPR

---

# 💡️ Problemi e complessità

- Problemi *non risolvibili*
    - Es. Questa frase è falsa
    - Incompletezza Gödel; indecidibilità terminazione
- Risolvibili
    - *Non trattabili* (costo “esponenziale”)
    - Trattabili (costo accettabile, “polinomiale”) <br> &nbsp;
- **Calcolabilità** : classificare risolvibili e non risolvibili
- **Complessità** : “facili” e “difficili”

---

![](images/comp/catalogue.png)
# 🧪 Ricerca lineare

- Ricerca in lista (*array*) non necessariamente ordinata
- Per omogeneità: algoritmi di queste slide operano tutti nell'intervallo `[beg, end)`

``` py
def linear_search(v: list, value, beg, end) -> int:
    for i in range(beg, end):
        if v[i] == value:
            return i
    return -1
```

>

<https://tomamic.github.io/pyodide//?p51_complexity.py>

---

![large](images/comp/binary-search.svg)
# 🧪 Ricerca binaria

- Ricerca in lista ordinata

``` py
def binary_search(v: list, value, beg, end) -> int:
    if end - beg <= 0:
        return -1
    mid = (beg + end) // 2
    if v[mid] > value:
        return binary_search(v, value, beg, mid)
    elif v[mid] < value:
        return binary_search(v, value, mid + 1, end)
    return mid
```

>

<https://tomamic.github.io/pyodide//?p51_complexity.py>

---

# 💡️ Costo di un algoritmo

- **Spazio**, richiesto in memoria
- **Tempo**, necessario all'esecuzione
- Di solito si contano i cicli, in funzione di `$n$`
- O i confronti/scambi tra elementi dell'array
    - Array in memoria centrale, accesso lento
    - Altre variabili nei registri del processore
- Test e misure empiriche

>

<http://www.stroustrup.com/Software-for-infrastructure.pdf#page=5>
<br>
<https://www.youtube.com/watch?v=YQs6IC-vgmo>

---

# ⭐ Confronto tra algoritmi

- Caso peggiore per la ricerca: elemento non presente
- Ricerca lineare: **`$n$`** confronti
- Ricerca binaria: ~ **`$\log_2(n)$`** confronti
    - A ogni iterazione la dimensione `$n$` è dimezzata
    - `$n, ⌊\frac{n}{2}⌋, ⌊\frac{n}{4}⌋, \dots, ⌊\frac{n}{2^{k-1}}⌋$` alla iterazione `$k$`
    - Infine `$⌊\frac{n}{2^{k-1}}⌋ = 1 \Rightarrow k = 1 + ⌊\log_2(n)⌋$`

---

# 💡️ Def. di complessità

- Una funzione `$f(n)$` ha *ordine* `$O(g(n))$` sse:
    - `$\exists c>0, m>0 : \forall n > m, |f(n)| \leq c|g(n)|$`
- Un algoritmo ha una *complessità* `$O(g(n))$` sse:
    - `$t(n)$` ha ordine `$O(g(n))$`
    - `$t(n)$`: tempo di calcolo dell'algoritmo <br> con ogni istanza*✶* di dimensione `$n$`
- La “complessità” è dunque determinata dal *caso peggiore*
    - Si possono studiare anche la “complessità di *caso medio*” <br> e la “complessità di *caso migliore*”

>

✶ Istanza: insieme di dati su cui è definito il problema

---

![](images/comp/orders.svg)
# 💡️ Analisi asintotica

- Per `$n$` abbastanza grande, a meno di una costante moltiplicativa, `$f(n)$` non supera in modulo `$g(n)$`
- Comportamento dell'algoritmo al limite, per dimensione delle istanze tendente all'infinito
- Es. `$n$` = 1'000'000
    - Ricerca lineare: 1'000'000 cicli
    - Ricerca binaria: 20 cicli

---

# 💡️ Complessità intrinseca

- Limite inferiore di complessità di un problema
- Una funzione `$f(n)$` è `$\Omega(g(n))$` sse
    - `$\exists c>0, m>0 : \forall n > m, |f(n)| ≥ c|g(n)|$`
- Un problema ha una *delimitazione inferiore* alla complessità `$\Omega(g(n))$` sse
    - Per ogni algoritmo risolutore…
    - $\exists$ una istanza (caso peggiore)…
    - per cui il tempo di calcolo `$t(n)$` è `$\Omega(g(n))$`

---

# ⭐ Algoritmo ottimale

- Algoritmo che risolve un problema `$P$`, con le due seguenti condizioni:
    - Costo di esecuzione `$O(g(n))$`
    - `$P$` ha una delimitazione inferiore `$\Omega(g(n))$`
- Problema della *ricerca* in liste ordinate
    - È dimostrato che la complessità intrinseca è **`$\log_2(n)$`**
    - ⇒ L'algoritmo della ricerca binaria è ottimale
- Ma ricerca lineare funziona anche per liste non ordinate!

---

# Algoritmi di ordinamento

---

# ⭐ Algoritmi di ordinamento

- Ricerca binaria: importante avere dati ordinati
    - *“Ordinateur”, “ordenador”*
- Algoritmi di ordinamento *semplici*, iterativi
    - Complessità `$n^2$`
    - Confronto tra ciascun elemento e gli altri
- Algoritmi di ordinamento *divide et impera*, ricorsivi
    - Complessità `$n\log_2(n)$`
    - Complessità instrinseca del problema
- Ricordarsi che `$\log_a(n) = \frac{\log_b(n)}{\log_b(a)}$`, con `${\log_b(a)}$` costante ([dim.](https://it.wikipedia.org/wiki/Logaritmo#Cambiamento_di_base))
    - ⇒ La base del logaritmo non cambia la complessità

---

![large](images/comp/bubble-sort.svg)
# 🧪 Bubble sort

``` py
def swap(v: list, i: int, j: int):
    v[i], v[j] = v[j], v[i]

def bubble_sort(v: list, beg, end):
    ##last_swap = 0
    for i in range(beg, end - 1):
        if v[i] > v[i + 1]:
            swap(v, i, i + 1)  ##last_swap = i + 1
    end -= 1  ##end = last_swap
    if end - beg > 1:
        bubble_sort(v, beg, end)  # loop
```

>

<https://tomamic.github.io/pyodide//?p51_complexity.py>
<br>
<https://visualgo.net/en/sorting?slide=7>
<br>
<https://www.youtube.com/watch?v=lyZQPjUT5B4>

---

![](images/hist/1840-gauss.png) `$$\sum_{k=1}^n k = \frac{n(n+1)}{2}$$` “Gauss’ trick”
# ⭐ Analisi Bubble Sort

``` py
vals = [38, 27, 43, 3, 9, 82, 10]
bubble_sort(vals, 0, len(vals))
```

- Elementi maggiori emergono rapidamente
    - *“Come bollicine di champagne”*
- Caso peggiore: lista rovesciata
    - Numero di confronti e scambi
    - `$(n-1)+(n-2)+...+2+1 = \\ = \frac{n(n-1)}{2} ≈ \frac{n^2}{2}, n→\infty$`
    - Complessità **`$O(n^2)$`**
- Anche in media, circa stessi valori

---

![large](images/comp/selection-sort.svg)
# 🧪 Selection Sort

``` py
def find_minimum(v: list, beg, end):
    min_pos = beg
    for i in range(beg + 1, end):
        if v[i] < v[min_pos]:
            min_pos = i
    return min_pos

def selection_sort(v: list, beg, end):
    if end - beg <= 1:
        return
    min_pos = find_minimum(v, beg, end)
    swap(v, min_pos, beg)
    selection_sort(v, beg + 1, end)  # loop
```

>

<https://tomamic.github.io/pyodide//?p51_complexity.py>
<br>
<https://visualgo.net/en/sorting?slide=8>

---

# ⭐ Analisi Selection Sort

- A ogni ciclo principale, si seleziona il valore minore
- Caso peggiore: lista rovesciata
    - Numero di confronti `$\frac{n(n-1)}{2}$`
    - Complessità **`$O(n^2)$`**
    - Numero di scambi: `$n-1$` scambi
- Anche in media, circa stessi valori

>

Numero di confronti (si applica Gauss): <br>
`$(n - 1) + (n - 2) + (n - 3) + ... + 0$`

---

![large](images/comp/insertion-sort.svg)
# 🧪 Insertion sort

``` py
def insertion_sort(v: list, beg, end, mid=1):
    if end - mid <= 0:
        return
    i, value = mid, v[mid]
    # find value's place, at its left
    while i > beg and v[i - 1] > value:
        v[i] = v[i - 1]  # shift right
        i -= 1
    v[i] = value
    insertion_sort(v, beg, end, mid + 1)  # loop
```


>

<https://tomamic.github.io/pyodide//?p51_complexity.py>
<br>
<https://visualgo.net/en/sorting?slide=9>

---

# ⭐ Analisi Insertion Sort

- La prima parte è ordinata, vi si inserisce un elemento alla volta, più facile trovare il posto
- Caso peggiore: lista rovesciata
    - Cicli: `$1+2+...+(n-1) = \frac{n(n-1)}{2}$`
    - Complessità **`$O(n^2)$`**
- In media si scorre solo metà della prima parte
    - In media `$\frac{n^2}{4}$` confronti e `$\frac{n^2}{4}$` scambi
- Ottimizzazioni
    - Ricerca binaria in parte ordinata, ma scambi
    - Inserimento a coppie, o gruppi

---

![large](images/comp/quick-sort-pivot.svg) ![large](images/comp/quick-sort.png)
# 🧪 Quick Sort

``` py
def quick_sort(v: list, beg, end):
    if end - beg <= 1:
        return
    mid = beg
    for i in range(beg, end):
        if v[i] <= v[end - 1]:  # last val as pivot
            swap(v, i, mid)
            mid += 1
    quick_sort(v, beg, mid - 1)
    quick_sort(v, mid, end)
```

>

<https://www.youtube.com/watch?v=ywWBy6J5gz8>
<br>
<https://visualgo.net/en/sorting?slide=12>

---

![large](images/comp/quick-sort-best.png)
# ⭐ Quick Sort caso migliore

- ➊ Si sceglie un valore `pivot` (ultimo?)
- ➋ → Due parti
    - `val≤pivot`; `val>pivot`
    - `$n-1$` confronti e scambi
- ➌ Stesso algoritmo sulle 2 parti (ricorsione)
- Complessità *caso migliore, o medio* : **`$O(n\log_2 n)$`**
    - *Se* il pivot è circa mediano…
    - A ogni passo la dimensione si dimezza
    - Dopo `$k$` passi: `$2^k$` liste di dimensione `$\frac{n}{2^k}$`
    - Infine, `$k=\log_2 n$`: `$n$` liste di dimensione `$1$`

---

![large](images/comp/quick-sort-worst.png)
# ⭐ Quick Sort caso peggiore

- Complessità *caso peggiore* : **`$O(n^2)$`**
    - Lista già ordinata, o rovesciata
    - Tutti gli elementi finiscono dalla stessa parte del pivot
- Il caso peggiore dipende da scelta pivot
    - Ma esiste sempre

---

![large](images/comp/merge.svg)
# 🧪 Merge, con appoggio

- Merge tra liste *ordinate* : costo **lineare**
    - Si confrontano i 2 elem in testa
    - Si prende il minore

``` py
def merge(v1: list, b1, e1,  # beg, end
          v2: list, b2, e2) -> list:
    result = []  # required extra memory
    while b1 < e1 or b2 < e2:
        if b1 < e1 and (b2 == e2 or v1[b1] <= v2[b2]):
            result.append(v1[b1]); b1 += 1
        else:
            result.append(v2[b2]); b2 += 1
    return result
```

---

![large](images/comp/merge-sort.svg) Split in rosso; merge in verde
# 🧪 Merge Sort

- **Divide...** - *Split* sempre a metà
- **et impera** - *Merge* di liste ordinate
- Ogni livello di *merge* ha costo `$\propto n$`
    - `$n, 2\cdot\frac{n}{2}, 4\cdot\frac{n}{4}, \dots, 2^k\cdot\frac{n}{2^k}$`
- Necessari `$\log_2(n)$` livelli di *merge*

``` py
def merge_sort(v: list, beg, end: int):
    if end - beg <= 1: return
    mid = (beg + end) // 2
    merge_sort(v, beg, mid)
    merge_sort(v, mid, end)
    v[beg:end] = merge(v, beg, mid, v, mid, end)
```

>

<https://visualgo.net/en/sorting?slide=11>

---

# ⭐ Analisi Merge Sort

- Simile a Quick Sort, ma non si sceglie pivot
- La fusione ha complessità lineare
- Caso peggiore, caso medio: **`$O(n\log_2 n)$`**
- **Spazio** : la fusione richiede altra memoria: `$n$`
    - Si può evitare il costo con spostamenti *in place*...
    - Aumenta però la complessità (necessari più scambi)
- Accessi sequenziali, buon uso *cache*
- Integraz. con Insertion Sort (Python, Java7)

---

# Classi di complessità

---

![](images/comp/orders.svg) `$n$`: dimensione istanza
# 💡️ Classi di complessità

- *Costante* : numero op. non dipende da `$n$`
- *Sotto-lineare* : `$n^k, k<1$` <br> Oppure `$\log n$`, ricerca binaria
- *Lineare* : numero op. `$\propto n$`, ricerca lineare
- *Sovra-lineare* : `$n \log n$`, merge sort
- *Polinomiale* : `$n^k, k \geq 2$`, insertion sort <br>&nbsp;
- **Algoritmo efficiente** : fino a classe polinomiale
- **Problema trattabile** : `$\exists$` algoritmo efficiente

---

![](images/comp/orders.svg)
# 💡️ Complessità esponenziale

- *Esponenziale* : `$k^n$`
    - Es. elenco sottinsiemi, strategia perfetta per scacchi
- *Super-esponenziale* : `$n!$`, `$n^n$`, …
    - Es. elenco permutazioni
- **Problemi intrattabili**
    - $\nexists$ algoritmo efficiente
    - Soluzioni non esatte/ottime, euristiche
    - Ma minimi locali...

---

![](images/comp/knapsack.svg)
# ⭐ Problemi P e NP

- Problemi **P** : $\exists$ algoritmo *deterministico polinomiale*
- **NP** : $\exists$ algoritmo *non-deterministico polinomiale*
    - Su macchine deterministiche: non noto algoritmo polinomiale per la **ricerca** di una soluzione...
    - Ma algoritmo polinomiale per la **verifica** di una soluzione
- Esempio NP: *Knapsack*
    - $\exists$ configurazione di elementi che realizza utilità `≥V`, con peso `≤W`?
- *Linguaggi di classe P, oppure NP* : stringa `$x$` riconosciuta in tempo polinomiale rispetto a `$|x|$` da *DTM*, oppure *NTM*

---

![](images/comp/challenges.jpg)
# ⭐ Millennium problem

- Sappiamo che *`$P \subseteq NP$`* <br> (DTM: caso particolare di NTM)
- **Ma non è dimostrato che `$P \neq NP$`, né che `$P=NP$`**
    - [Millenium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems): 1M$
    - Se *`$P=NP$`*, risolvere un rompicapo o verificarlo: stessa classe di complessità
- *Problemi di classe EXP* : risolti in tempo esponenziale da una DTM
    - Sappiamo che *`$NP \subseteq EXP$`* <br> (NTM: simulata da DTM in tempo esponenziale)
    - *`$P \subseteq NP \subseteq EXP$`*

---

![](images/comp/classes.svg)
# ⭐ Problemi NP-completi

- Ogni problema NP può essere ricondotto a un problema **NP-completo** con algoritmo deterministico *polinomiale*
    - *Lower-bound* deterministico esponenziale per uno dei problemi NP-completi? *`$\Rightarrow P \neq NP$`*
    - Oppure, *soluzione* con algoritmo deterministico polinomiale? *`$\Rightarrow P=NP$`*
- Esempio: *Knapsack*
- Esempio: *SAT*
    - Data una formula booleana *PdS*, è soddisfacibile?
    - `$\exists$` configurazione di input che dà risultato vero?
