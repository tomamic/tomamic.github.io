![](https://fondinfo.github.io/images/dev/geek-girl.svg)
# Esercizi 2013
## Introduzione alla programmazione

---

# Esercitazione 1

---

![](https://fondinfo.github.io/images/misc/handshake.svg)
# 1.1 Hello, user!

- Compilare ed eseguire il programma “Hello world”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “admin”, salutarlo però con il messaggio speciale “At your command”

---

![](https://fondinfo.github.io/images/misc/quadratic-eq.svg) ![](https://fondinfo.github.io/images/misc/quadratic-formula.svg)
# 1.2 Radici

- Calcolare le due radici reali di un’equazione di secondo grado: `ax² + bx + c = 0`
    - Valori dei parametri `a`, `b` e `c` immessi dall’utente
    - Valori di `x₁` e `x₂` calcolati dal programma
- Se l'equazione non ammette radici reali, comunicarlo all'utente

>

Per il calcolo della radice quadrata, utilizzare `math.sqrt(...)` <br>
All'inizio del programma: `import math`

---

# 1.3 Sequenza di valori

- Leggere, attraverso un ciclo, una sequenza di numeri interi inseriti dall'utente
- La sequenza termina quando la loro somma supera 100
- Visualizzare il numero di valori inseriti e la loro somma

---

![](https://fondinfo.github.io/images/misc/characters.png)
# 1.4 Carattere Unicode

- Leggere un numero
- Visualizzare il carattere Unicode corrispondente
- Ripetere le operazioni in un ciclo, finchè l'utente non inserisce il valore `0`

>

Usare la funzione `chr` per convertire un codice nel char corrispondente

---

# 1.5 Tabella ASCII

- Visualizzare la tabella dei codici ASCII
    - Un carattere per ogni riga
    - All'inizio della riga: il carattere
    - Di fianco: il codice ASCII
    - Limitare l'intervallo tra 32 a 126 (due costanti)

---

![](https://fondinfo.github.io/images/misc/calculator.png)
# 1.6 Aritmetica

- Chiedere all'utente due valori *float*: `a`, `b`
- Mostrare il risultato di tutte le seguenti operazioni
    - `a + b`
    - `a – b`
    - `a * b`
    - `a / b`
    - `a // b`
    - `a % b`
    - `a ** b`
- Eseguire inoltre le stesse operazioni dopo aver convertito i due valori in *int*

---

![](https://fondinfo.github.io/images/misc/impossible-triangle.jpg)
# 1.7 Triangolo

- Chiedere all'utente le lunghezze dei tre lati
- Controllare se il triangolo è:
    - Equilatero
    - Isoscele
    - Scaleno
    - Oppure se i tre lati non formano affatto un triangolo
- Visualizzare il responso

---

![](https://fondinfo.github.io/images/misc/college-student.jpg)
# 1.8 Media dei voti

- Leggere, attraverso un ciclo, una sequenza di risultati di esami
    - Voto conseguito all'esame
    - Numero di crediti formativi acquisiti
- La sequenza termina quando l'utente immette il voto 0
- Visualizzare la media ponderata dei voti
    - `(∑ vᵢ·cᵢ) / (∑ cᵢ)`

>

Partire dal calcolo della media semplice, senza considerare i crediti

---

![](https://fondinfo.github.io/images/misc/dice.png)
# 1.9 Lancio dadi

- Due immaginari giocatori lanciano un dado a testa
- L'attaccante vince solo se ottiene un numero strettamente maggiore del difensore
- Simulare 100 tentativi di attacco e stimare la probabilità di successo dell'attaccante

>

Dado (pseudo-casuale): `die = random.randint(1, 6)` <br>
All'inizio del programma: `import random`

---

# Esercitazione 2

---

![](https://fondinfo.github.io/images/misc/numbers.png)
# 2.1 Stringhe, cifre

- Leggere una riga di testo
- Riscrivere in output la riga, carattere per carattere, ma...
    - Escludere tutte le cifre (0-9)

>

`print(x, end='', sep='')` non inserisce spazi e ritorni a capo

---

# 2.2 Triangolo di cifre

- Leggere un numero intero positivo `n` (< 10)
- Per ciascun valore `y` tra 1 e `n`...
- Stampare una riga con le cifre da 1 a `y`

``` text
1
12
123
1234
```

>

Usare due cicli for annidati
<br>
All'inizio non considerare `n`, ma fissare `y` e scrivere una sola riga: `y = 3` → `“123”`
<br>
Poi racchiudere tutto in un ciclo for esterno

---

# 2.3 Lista di valori

- Chiedere all'utente una sequenza di valori, terminata da 0
    - Memorizzare ciascun valore inserito in una lista `values`
    - `values.append(val)`
- In seguito, ripetutamente chiedere all'utente un valore `k`, da cercare
    - Comunicare quante volte `k` è presente nella lista

---

# 2.4 Matrice di valori

- Chiedere all'utente `n`, il lato di una matrice quadrata
    - Chiedere all'utente di inserire gli `n²` valori della matrice
- In seguito, chiedere ripetutamente all'utente un valore `k`, da cercare
    - Comunicare quante volte `k` è presente nella matrice
    - Comunicare inoltre quante volte `k` è presente sulle diagonali principali

>

Usare una semplice lista e aggiungere i valori in maniera simile all'esempio precedente

---

# 2.5 Carattere in file

- Chiedere all'utente un carattere
- Contare quante volte il carattere è presente in un dato file di testo

>

Leggere per intero il (breve) file in una stringa: `txt = f.read()`

---

![](https://fondinfo.github.io/images/misc/dice.png)
# 2.6 Risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
- Contare quante volte si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due dadi

>

Per conteggiare i vari risultati, usare una lista di (almeno) 11 valori

---

![](https://fondinfo.github.io/images/misc/brackets.svg)
# 2.7 File, parentesi

- Data una riga di testo, riscrivere a console solo il testo racchiuso tra parentesi quadre
    - Possono essere presenti diverse coppie di parentesi quadre
    - A capo, dopo ciascuna porzione di testo trovata
- Eseguire le stesse operazioni per ogni riga di un file di testo

>

Scorrere la riga, carattere per carattere
<br>
Segnare in un bool se si è incontrata una quadra aperta, ma non ancora una quadra chiusa

---

# 2.8 Lettura matrice da file

- In un file è riprodotto il contenuto di una matrice di char, riga per riga...

``` text
AABA
BAAB
AABB
```

- Leggere i char dal file e memorizzarli in una pseudo-matrice (lista semplice)
- Inferire le dimensioni della matrice (rows×cols) in base a:
    - Numero di righe del file
    - Lunghezza della prima riga
- Visualizzare la matrice

---

# 2.9 Lettura matrice da file

- Come esercizio precedente (2.8)
- Ma memorizzare i caratteri in una matrice (lista di liste)

>

Da stringa `line` a lista di char `v`: `v = list(line)`

---

# Esercitazione 3

---

![](https://fondinfo.github.io/images/misc/ellipse.svg)
# 3.1 Area di un'ellisse

- Funzione che:
    - Riceve come parametri i semiassi di una ellisse: `a`, `b`
    - Restituisce l'area dell'ellisse: `A = π·a·b`
- All'esterno della funzione:
    - Chiedere ripetutamente all'utente una coppia di valori
    - Invocare ogni volta la funzione con i valori inseriti dall'utente
    - Visualizzare il risultato

---

![large](https://fondinfo.github.io/images/misc/gold-price.svg)
# 3.2 Sequenza di valori

- Funzione che:
    - Riceve come parametro il nome di un file
    - Restituisce una tupla con il valore massimo e quello minimo trovati nel file
    - (Ciascuna riga del file contiene un valore `float`)
- Invocare la funzione con un nome di file inserito dall'utente
- Visualizzare il risultato

---

# 3.3 Box

- Classe che modella un riquadro
    - Due campi privati, per largezza e altezza: `width`, `heigth`
    - Due metodi, per ottenere area e perimetro: `area`, `perimeter`
- Nel corpo principale del programma, creare e usare un riquadro
    - Chiedere all'utente le dimensioni del riquadro
    - Passare queste dimensioni al costruttore, come parametri
    - Mostrare area e perimetro del riquadro creato

---

![](https://fondinfo.github.io/images/misc/ellipse.svg)
# 3.4 Ellisse

- Classe che modella un'ellisse
- Campi privati (parametri del costruttore)
    - Semiassi: `a, b`
- Metodi pubblici per ottenere...
    - Area
    - Distanza dei fuochi dal centro: `√(a² - b²)`
    - Semiassi (due metodi *getter*)
- Nel corpo principale del programma, creare un oggetto con dati forniti dall'utente
    - Visualizzare l'area dell'ellisse e la distanza dei fuochi dal centro

---

# 3.5 Incolonnamento dati

- Visualizzare due tabelle con i caratteri ASCII
    - 8 righe × 12 colonne, codici da 32 a 126
- Tabella 1: mostrare in ordine i caratteri, colonna per colonna
- Tabella 2: mostrare in ordine i caratteri, riga per riga

``` text
 (08@HPX`hpx
!)19AIQYaiqy
"*2:BJRZbjrz
#+3;CKS[cks{
$,4<DLT\dlt|
%-5=EMU]emu}
&.6>FNV^fnv~
'/7?GOW_gow
```

>

Usare sempre due cicli `for` annidati: esterno su `y`, interno su `x`
<br>
In ogni posizione, calcolare il carattere da visualizzare: `x * ROWS + y`...

---

![](https://fondinfo.github.io/images/misc/fast-food.svg)
# 3.6 Calcolo delle calorie

- In un file sono riportati, su ciascuna riga:
    - Il nome di un alimento e il suo contenuto calorico (per grammo)
    - Nome e calorie sono separati da una TABulazione orizzontale (`'\t'`)
- Leggere il contenuto del file e memorizzarlo in un *dizionario*
- L'utente inserisce poi da console un menù
    - Su ogni riga: alimento e peso, separati da una barra verticale (`'|'`)
- Il programma calcola il contenuto calorico dell'intero menù

---

# 3.7 Fattori primi

- Funzione che trova tutti i fattori primi di un numero `n`
    - Parametro: `n`
    - Risultato: lista, contenente i fattori primi di `n`
- Algoritmo: scorrere tutti i valori d'interesse, e cercare i divisori
    - `x` è divisore di `n` sse `n % x == 0`
    - Non considerare i fattori non primi
- Provare la funzione con valori inseriti dall'utente

>

Quando si trova un divisore `x`, dividere ripetutamente `n` per `x`, finché resta divisibile
<br>
Valutare l'uso di un ciclo `while`, anzichè `for`

---

![](https://fondinfo.github.io/images/hist/eratostenes.jpg)
# 3.8 Crivello di Eratostene

- Funzione che calcola la lista di numeri primi fino a `n`
    - Parametro: `n`
    - Risultato: lista, contenente i numeri primi trovati
- Algoritmo
    - Inserire tutti i numeri da `2` fino a `n` in una lista
    - Per ciascun numero `x` nella lista...
    - Togliere dalla lista i multipli di `x` (escluso `x` stesso)
    - I numeri rimanenti sono i numeri primi cercati
- Provare la funzione con valori inseriti dall'utente

>

Usare il metodo `remove` della lista, oppure usare una lista di `bool`
<br>
Lista scorsa con un `for`: sconsigliato rimuovere o inserire elementi

---

# 3.9 Parole più lunghe

- Leggere le parole presenti in un file (separate da spazi)
- Memorizzarle tutte in una lista (senza ripetizioni)
- Mostrare a schermo le 10 parole più lunghe in assoluto, in ordine decrescente di lunghezza

>

Si può ordinare una lista tramite il metodo `sort`. In questo caso:
<br>
`words.sort(key=lambda x: -len(x))`

---

# Esercitazione 4

---

# 4.1 Ricorsione, palindromo

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

---

![](https://fondinfo.github.io/images/misc/koala-file.jpg)
# 4.2 Fila indiana

- *Procedura* per far avanzare gli elementi di una lista in “fila indiana”
    - Parametri: lista, direzione di avanzamento
    - Ciascun elemento è rapprensentato come una coppia di valori interi: coordinate `(x, y)`
    - Il primo elemento avanza nella direzione indicata
    - Il secondo elemento va nella posizione liberata dal primo, ecc.
- Nel `main`, in un ciclo
    - Chiedere all'utente la direzione: `dx`, `dy`, ciascuno `∈ [-1, 0 +1]`
    - Invocare la funzione; visualizzare la lista di coordinate aggiornata

>

A ogni turno: aggiungere nuova coppia `(x, y)` per elemento di testa, rimuovere elemento di coda
<br>
Es. `v.insert(0, new_pos), v.pop()`
<br>
O viceversa `v.append(new_pos), v.pop(0)`

---

![](https://fondinfo.github.io/images/misc/tic-tac-toe.svg)
# 4.3 Tris

- Classe che modella una partita a *tris* (*Tic Tac Toe*)
- Campi privati
    - Matrice di gioco
    - Giocatore di turno: `O` oppure `X`
- Metodi pubblici
    - Mossa in una certa posizione `x, y` (simbolo scelto automaticamente nel metodo)
    - Rappresentazione stato: `__str__(self)`
- Nel `main`, in un ciclo
    - Chiedere all'utente le coordinate per la prossima mossa
    - Visualizzare lo stato risultante

---

# 4.4 Conclusione partita

- Aggiungere metodi alla classe del *tris*
    - Controllo di conclusione: `bool`
    - Eventuale vincitore: `O`, `X`, `None`
- Nel `main`, in un ciclo
    - Chiedere all'utente le coordinate per la prossima mossa
    - Visualizzare lo stato risultante
    - Comunicare l'eventuale conclusione della partita e il vincitore

---

![](https://fondinfo.github.io/images/misc/outward-spiral.png)
# 4.5 Spirale

- Funzione per riempire una data matrice (parametro) con una sequenza di valori
    - Valori disposti a spirale, come suggerito in figura
    - Valore maggiore in cella in basso a sinistra!
- Nel corpo principale dell'applicazione
    - Creare la matrice (dimensioni indicate dall'utente)
    - Invocare la funzione
    - Visualizzare la matrice

>

Tenere traccia della direzione attuale (∆x, ∆y)
<br>
Rotazione oraria 90° (coord. raster): `(∆x', ∆y') = (-∆y, ∆x)`
<br>
Rotazione antior. 90° (coord. raster): `(∆x', ∆y') = (∆y, -∆x)`
<br><br>
In generale (coord. cartesiane): `(x', y') = (x⋅cos(θ) - y⋅sin(θ), x⋅sin(θ) + y⋅cos(θ))`
<br>
(Bisogna cambiare il segno di θ)

---

![](https://fondinfo.github.io/images/misc/merge-sign.png)
# 4.6 Fusione

- Due file di testo contengono sequenze di numeri
    - Un valore per ogni riga
    - Entrambi i file sono già ordinati, dal valore più piccolo a quello più grande
- Scrivere in un terzo file i valori di entrambi i file
    - Anche il terzo deve contenere i valori in ordine, dal più piccolo al più grande

>

Ciclicamente, confrontare la coppia dei primi valori (ciascuno proveniente da uno dei due stream)
<br>
Scrivere il minore dei due sul file di uscita
<br>
Non estrarre un nuovo valore da uno stream, se quello precedente non è ancora stato scritto in output

---

![](https://fondinfo.github.io/images/misc/box-layout.png)
# 4.7 Fila di riquadri

- Classe che modella una fila verticale di riquadri
    - Riquadri (larghezza e altezza): uno sotto all'altro, ciascuno allineato orizzontalmente al centro
    - Metodo: aggiunta di un riquadro
    - Metodo: calcolo area totale (somma delle aree)
    - Metodo: calcolo riquadro virtuale contenente l'intera fila: `w = max(wᵢ)`, `h = Σ hᵢ`
- Nel `main`, in un ciclo
    - Chiedere larghezza e altezza all'utente
    - Creare un riquadro di quelle dimensioni e aggiungerlo alla fila
    - Calcolare largezza e altezza del riquadro virtuale
    - Calcolare la percentuale di spazio inutilizzato

---

# 4.8 Gestione di riquadri

- Aggiungere alla classe della fila di riquadri
    - Metodo per ottenere il numero di riquadri
    - Metodo per ottenere un riquadro, dato il suo indice nella fila
    - Metodo per rimuovere un riquadro, dato il suo indice nella fila
- Nel `main`, permettere all'utente di gestire una fila
    - Aggiunta, rimozione, elenco dei riquadri

---

![large](https://fondinfo.github.io/images/misc/flow-layout.png)
# 4.9 File verticali e orizzontali

- Classe base *astratta* per le file di riquadri
- Sottoclasse *concreta* per fila verticale
- Sottoclasse *concreta* per fila orizzontale
    - Riquadri uno di fianco all'altro
    - Ciascuno allineato verticalmente al centro
    - Cambia solo il calcolo del riquadro contenente l'intera fila
- Rendere il codice generico rispetto al tipo di fila
    - L'utente sceglie all'inizio quale fila usare (orizzontale o verticale)
    - Poi aggiunge i riquadri
    - Infine calcola il riquadro contenente l'intera fila

---

# Esercitazione 5

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi C++

- 1.1 Hello, user!
- 1.3 Sequenza di valori
- 1.5 Tabella ASCII
- 1.8 Media dei voti
- 1.9 Lancio dadi
- 2.3 Lista di valori
- 2.5 Carattere in file
- 2.6 Risultati casuali
- 2.8 Lettura matrice da file

>

(1.5) *Cast* da intero `i` a carattere: `char(i)`

---

# Esempio numeri casuali

``` cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(NULL));  // just once! (initial seed for random numbers)

    for (int i = 0; i < 10; ++i) {
        int r = rand() % 90;  // 0 <= r <= 89
        cout << r << endl;
    }
}
```

>

Definire costanti, es. `const int VALUES = 90`

---

# Progetto 1

---

# Progetto 1

- Gioco con diversi personaggi
    - Fornita classe `Arena` per campo di gioco
    - Fornita classe base astratta `Character` per personaggi
- Creare sottoclassi di `Character` per personaggi specifici
    - *Polimorfismo* per movimento
    - *Polimorfismo* per interazione reciproca
- Inizialmente, I/O tramite console...
    - Con attesa dell'input da parte dell'utente
    - Ma ciclo principale e interazione con l'utente **fuori da queste classi**

---

![](https://fondinfo.github.io/images/misc/snake.png)
# Snake

- *Serpente*: guidato dal giocatore
    - Avanza continuamente
    - Non può tornare indietro
    - Se tocca se stesso, muore
- *Cibo*: disposto casualmente
    - Il serpente si allunga dopo aver mangiato
    - Il cibo ricompare in posizione casuale (ma libera)

>

Per il serpente, usare una lista di tuple, ossia coppie (x, y)
<br>
A ogni turno aggiungere una nuova coppia (x, y) per la testa e rimuovere la coda

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi C++

- 3.1 Area di un'ellisse
- 3.2 Sequenza di valori
- 3.3 Box
- 3.6 Calcolo delle calorie
- 3.8 Crivello di Eratostene

---

# Pygame

---

![](https://fondinfo.github.io/images/oop/pygame-logo.png)
# Snake con Pygame

- Classi dello Snake in applicazione basata su *Pygame*
- *Due serpenti* assieme, comandati con tasti diversi
- Muri in posizione fissa; il serpente muore se ci va a sbattere
- Cibo diverso, per far crescere il serpente di più
- Pezzi speciali; es. per far “rimbalzare” il serpente (testa ↔ coda)
- Numero di vite, punti, livelli di gioco ecc.

---

![](https://fondinfo.github.io/images/misc/handwriting.jpg)
# “Bella copia”

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : preferibilmente `return` a fine funzione, pochi `break` nei cicli
    - *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi C++

- 4.3 Tris
- 4.4 Conclusione partita
- 4.7 Fila di riquadri
- 4.8 Gestione di riquadri
- 4.9 File verticali e orizzontali

---

# Progetto 2

---

# Progetto 2

- Classe *C++* per incapsulare dati e regole di un gioco
    - Campi *privati* + metodi *pubblici* (e privati)
- Inizialmente, I/O tramite console...
    - Ma ciclo principale e interazione con l'utente **fuori dalla classe**

---

![](https://fondinfo.github.io/images/misc/tents.png)
# Tents puzzle

- Posizionare tende sulla griglia, in modo che ogni albero sia *assegnato* a una tenda
    - Inizialmente, nessun albero è assegnato a una tenda
    - Tenda adiacente (in orizzontale o verticale) a un solo albero non assegnato ⇒ albero *assegnato* a quella tenda
    - Tante tende, quanti sono gli alberi
- Le tende non possono toccarsi tra loro, nemmeno in diagonale
- Vincoli numerici fuori dalla griglia: numero di tende nella riga o colonna

>

<http://www.brainbashers.com/tentshelp.asp>

---

# Bozza della classe

``` cpp
class TentsPuzzle {
public:
    TentsPuzzle();                  // default board
    void place_tent(int x, int y);  // take a move
    string str();                   // string representation
    bool solved();                  // is puzzle solved?
    // TentsPuzzle(istream& in);    // read from stream
    // bool wrong();                // are tents misplaced?
    // char get(int x, int y)
    // int rows()
    // int cols() ...
private:
    // void set(int x, int y, char value) ...
}
```

---

# Esempio di campi privati

``` cpp
class TentsPuzzle {
public:
    // ...
private:
    // ...
    int cols_ = 5;
    int rows_ = 5;
    vector<char> board_ = {' ', 'T', ' ', ' ', ' ',
                           ' ', ' ', ' ', ' ', 'T',
                           ' ', 'T', ' ', 'T', ' ',
                           ' ', ' ', ' ', ' ', 'T',
                           ' ', ' ', ' ', ' ', ' '};
    vector<int> col_constraints_ = {2, 0, 1, 0, 2};
    vector<int> row_constraints_ = {2, 0, 2, 0, 1};
}
```

---

# Gui

---

![](https://fondinfo.github.io/images/dev/recycle.png)
# Tents con Qt

- Aggiungere una **interfaccia grafica** al progetto
    - Creare una sottoclasse di `QWidget` o `QMainWindow`
    - Interfaccia adattabile a dimensioni diverse del gioco
- **Riuso** - Classe di modello definita in modo generico
    - Usabile sia da interfaccia grafica che da console
- Inoltre, permettere di **scrivere** su stream e **leggere** da stream una partita
    - Per salvataggio su file e caricamento da file
- Infine, permettere all'utente di marcare una cella come **prato**, cioè sicuramente senza una tenda

---

# Bozza della GUI

``` cpp
class TentsGui : public QWidget {
    Q_OBJECT
public:
    TentsGui(TentsPuzzle* puzzle);
private:
    void handle_click(int x, int y);
    void update_button(int x, int y);
    void update_all_buttons();

    vector<QPushButton*> buttons_;
    TentsPuzzle* puzzle_;
};
```

---

# Suggerimenti

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# Mosse suggerite

- Opzione per marcare automaticamente le celle con *prato*
    - Vincolo di riga/colonna pari alle tende già poste: tutte le celle libere sono *prato*
    - Cella libera vicina a una tenda (anche diagonalmente): *prato*
    - Cella non adiacente a un albero (non assegnato): *prato*
- Mossa automatica a richiesta
    - Vincolo di riga/colonna pari alla somma delle celle libere e delle tende già poste: le celle libere sono *tende*
    - Albero senza tende attorno, con una sola cella libera adiacente: *tenda*

---

# Soluzione ricorsiva

``` cpp
void TentsPuzzle::solve_recursive(int i) {
    // solve_simple();  // mark all obvious grass and tent cells
    // is there an empty cell after i?
    while (i < board_.size() && board_[i] != EMPTY) ++i;
    if (i < board_.size() && !wrong()) {
        auto copy = *this;  // save current status
        for (auto m : {TENT, GRASS}) {
            board_[i] = m;
            solve_recursive(i + 1);
            if (solved()) return;
            *this = copy;  // backtracking
        }
    }
}
```
