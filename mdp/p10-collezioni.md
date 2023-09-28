![](images/misc/sample-file-system.png)
# Collezioni
## Introduzione alla programmazione

---

# 💡️ Tipo di dato ricorsivo

- Un valore può *contenere* valori dello stesso tipo
- *Lista collegata*
    - Vuota / `None`, oppure...
    - Nodo di testa, seguito da una lista collegata

![](images/fun/linked-list.svg)

- *Albero*
    - Vuoto / `None`, oppure...
    - Nodo di testa, seguito da più alberi

---

![](images/comp/binary-tree.svg)
# Albero binario

- Può essere costruito su nodi simili a questi
- Alberi vuoti: `None`

```
class TreeNode:
    def __init__(self, data,
                 left: TreeNode, right: TreeNode):
        self.data = data
        self.left = left
        self.right = right
```

---

![](images/misc/sample-file-system.png)
# Documenti e cartelle

- Albero che rappresenti una gerarchia di documenti
- Nodo dell'albero
    - Un `Document` (*foglia*)
    - Oppure un `Folder`, con vari nodi figlio

```
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

```
def count_tree(t) -> int:
    count = 0
    if isinstance(t, list):
        for v in t:
            count += count_tree(v)
    else:
        count += 1
    return count

tree = [[1, 2, [3, 4], [5]], 6]
print(count_tree(tree))
```

---

![](images/fun/rollinz.jpg)
# 🥷 Insieme

- Collezione non ordinata e *senza ripetizioni*
    - Senza chiavi o indici
- Metodi `add` e `discard`
    - Aggiunta e rimozione
- Operatori `in`, `|` e `&`
    - Appartenenza, unione e intersezione

``` py
numbers = {1, 4, 5}
numbers.add(4)  # {1, 4, 5}
few = numbers & {4, 5, 6}  # {4, 5}, intersection
many = numbers | {3, 4}  # {1, 3, 4, 5}, union

empty_set = set()  # ⚠️ {} is an empty dict
```

>

<https://docs.python.org/3/library/stdtypes.html#set>

---

![](images/fun/dictionary.png)
# 🥷 Dizionario

- Chiamato anche *mappa* o *array associativo*
- Raccolta di coppie **chiave**-**valore**
- Chiave: *indice* per accedere al valore
    - Le chiavi sono *uniche* (~ `list`)
    - Tipo *`str`*, o altro tipo immutabile

``` py
tel = {"john": 4098, "terry": 4139}  # dict[str, int]
if "john" in tel:
    print(tel["john"])  # 4098, ⚠️ error for a missing key
tel["graham"] = 4127
for k, v in tel.items():
    print(k, v)  # john 4098 ⏎ terry 4139 ⏎ graham 4127 ⏎
```

>

Vedi: [get](https://docs.python.org/3/library/stdtypes.html#dict.get),
[keys](https://docs.python.org/3/library/stdtypes.html#dict.keys),
[values](https://docs.python.org/3/library/stdtypes.html#dict.values),
[items](https://docs.python.org/3/library/stdtypes.html#dict.items) <br>
<https://docs.python.org/3/library/stdtypes.html#dict>

---

`$\begin{pmatrix}5 & 0 & 0 & 0 \\ 0 & 8 & 0 & 0 \\ 0 & 0 & 3 & 0 \\ 0 & 6 & 0 & 0\end{pmatrix}$`
# 🥷 Matrice sparsa

- Matrice con molte celle “vuote”
- Oppure chiavi sparse, non numeriche
- Dizionario con chiavi di tipo *tupla*
- Metodo `dict.get` con valore di *default*

``` py
values = {(0, 0): 5, (1, 1): 8,
          (2, 2): 3, (1, 3): 6}  # dict[(int, int), int]

x = int(input("Col? "))
y = int(input("Row? "))
val = values.get((x, y), 0)  # key not found → default 0
print(val)
```

>

<https://docs.python.org/3/library/stdtypes.html#dict>

---

# Dizionario delle transizioni

- Tupla per indicizzare transizioni di FSM (macchina a stati finiti)
- Tupla con attuale stato e attuale simbolo di input
- Valore associato alla chiave : nuovo stato

``` py
transition = {("Q0", "a"): "Q1", ("Q0", "b"): "Q2",
              ("Q1", "a"): "Q0", ("Q1", "b"): "Q3",
              ("Q2", "a"): "Q3", ("Q2", "b"): "Q0",
              ("Q3", "a"): "Q2", ("Q3", "b"): "Q1"}
```

- Ciclo di funzionamento

``` py
new_state = transition.get((state, symbol), None)
```

---

# Macchina non deterministica

- NFSM, non deterministica, si trova in un *insieme* di stati
- Graffe esterne : *dizionario* delle transizioni
    - Chiave : tupla di attuali stato e simbolo
- Graffe interne : nuovo *insieme* di stati

``` py
states = {"Q0"}
transition = {("Q0", "a"): {"Q0"},
              ("Q0", "b"): {"Q0", "Q1"}}
```

- Funzionamento : `new_states` *unione* di tutti i nuovi stati

``` py
new_states = set()
for state in states:
    new_states |= transition.get((state, symbol), set())
```

---

# 🏊 Esercizi

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
<https://tomamic.github.io/pyodide/?p10_polish.py>

---

![](images/misc/sample-file-system.png)
# Documenti e cartelle

- Un sistema gerarchico di gestione documenti è composto di due tipi di *nodi* (classe base)
    - I *documenti*, caratterizzati da un nome e da un contenuto testuale (classe derivata)
    - Le *cartelle*, caratterizzate da un nome e da una lista di nodi contenuti (classe derivata)
- Creare una gerarchia delle tre classi: `Node`, `Document`, `Folder`
- Nel corpo principale del programma, istanziare e organizzare vari nodi (senza input dell'utente)
    - Ricreare con gli oggetti la struttura raffigurata a fianco

>

<https://tomamic.github.io/pyodide/?p10_folders.py>

---

![](images/misc/sample-file-system.png)
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

<https://tomamic.github.io/pyodide/?p10_folders.py>

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

<https://tomamic.github.io/pyodide/?p10_expression.py>

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
<https://tomamic.github.io/pyodide/?p10_expression.py>

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

<https://tomamic.github.io/pyodide/?p10_parse.py>

---

![](images/comp/fsm4.svg)
# FSM

- Simulare il comportamento della FSM in figura
- Usare un dizionario per indicizzare le transizioni

>

<https://tomamic.github.io/pyodide/?p10_fsm.py>

---

![](images/comp/nfsm.svg)
# NFSM

- Simulare il comportamento della FSM in figura
- Usare un dizionario per indicizzare le transizioni

>

<https://tomamic.github.io/pyodide/?p10_nfsm.py>

---

![](images/comp/pda3.svg)
# PDA

- Simulare il comportamento del PDA mostrato in figura
- Usare un dizionario per indicizzare le transizioni
- Opzionalmente, ridefinire l'automa per riconoscere stringhe di `$L := \{a^n b^{2n}\}$`

>

<https://tomamic.github.io/pyodide/?p10_pda.py>
