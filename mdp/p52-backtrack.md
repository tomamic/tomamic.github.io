![](images/misc/tic-tac-toe.svg)
# Backtracking
## Introduzione alla programmazione

---

![](images/fun/8-queens.svg)
# Constraint Satisfaction Problem

- Problema di *soddisfacimento di vincoli* (CSP), caratterizzato da:
    - **Insieme di variabili**, che possono assumere valori in un certo *dominio*
    - **Insieme di vincoli**, che devono essere rispettati dai valori delle variabili
- Esempio: *Problema delle 8 regine*
    - Posizionare `8` regine su una scacchiera `8x8`
    - In modo che nessuna di esse possa catturarne un'altra
    - Nessuna regina deve avere una colonna, riga o diagonale in comune con un'altra regina

---

![](images/fun/generate-and-test.png)
# Generate & Test

- Tecnica per risolvere problemi di soddisfacimento di vincoli
- Si assegna un *valore* a ogni variabile
- Si verifica se tutti i *vincoli* sono soddisfatti
    - Se i vincoli sono *soddisfatti* ⇒ trovata una *soluzione*
    - Altrimenti, si prova con valori diversi
- Il procedimento *continua*
    - Finché non ci sono più assegnamenti nuovi da testare
    - Tutte le soluzioni sono testate

>

<https://tomamic.github.io/pyodide/?p51_words.py>

---

![](images/fun/8-queens.svg) ![](images/fun/k-comb.svg)
# 8 regine: G&T

- *Generate*
    - Inserire `8` regine in tutte le possibili *combinazioni* in una scacchiera `8x8`
    - Dobbiamo scegliere `8` (*k*) caselle tra `64` (*n*), senza considerare l'ordine
    - `~ 4 miliardi`
- *Test*
    - Per ogni combinazione verificare se nessuna regina può catturarne un’altra
    - Solo `92` soluzioni

>

Esempio del più generale problema delle `N` regine su una scacchiera `N×N`
<br>
<https://en.wikipedia.org/wiki/Combination>

---

![](images/fun/queens-sol.svg)
# 8 regine: G&T ridotto

- Dai vincoli si evince che *ogni riga*
    - Può contenere al massimo 1 regina
    - Deve contenere esattamente 1 regina
- È possibile quindi rappresentare una *lista*
    - I valori rappresentano la colonna in cui è posizionata la regina sulla riga
    - `8` elementi con indici `0..7` e con valori `0..7`
    - (`N` elementi con indici `0..N-1` e con valori `0..N-1`)
- *Generate*
    - Tutte le configurazioni di 8 valori: `8⁸ = ~ 16 milioni`
- *Test*
    - Per ogni configurazione, verificare i vincoli

---

![large](images/fun/backtracking.png)
# Standard backtracking

- Scarta subito gli assegnamenti che non soddisfano i vincoli
- A seguito di *ogni assegnamento* si verificano i vincoli
- Se non ci sono *vincoli già violati*, si continua con gli assegnamenti delle variabili rimanenti
- Altrimenti si verifica se la variabile appena assegnata ha ancora valori da provare
    - Se sì, si prova con un nuovo valore
    - Altrimenti, si torna indietro e si modifica una variabile già assegnata
- Per le *8 regine* (`92` soluzioni)
    - `15720` celle controllate, `2056` posizionamenti tentati

---

# N regine, backtracking

![large](images/fun/queens.svg)

---

![](images/fun/queens-sol.svg)
# N regine, verifica

``` py
def print_board(board: list):
    for v in board:
        print("•" * v + "♛" + "•" * (len(board)-v-1))

def under_attack(board: list, x: int, y: int) -> bool:
    for r in range(y):  # for each row above y
        # directions: ↖↑↗ (no queens below)
        if board[r] in (x - (y-r), x, x + (y-r)):
            return True
    return False
```

>

`board` è una lista di `int`: per ogni riga della scacchiera, memorizza la posizione `x` della regina

---

# N regine, ricorsione

``` py
def place_queens(board: list, y=0) -> bool:
    if y == len(board):
        return True  # all queens already placed
    for x in range(len(board)):
        if not under_attack(board, x, y):
            board[y] = x  # (x, y) is safe: place a queen

            # try and place queens in the following rows
            if place_queens(board, y + 1):
                return True

            board[y] = None  # no luck, backtrack
    return False
```

>

<https://tomamic.github.io/pyodide//?p52_queens.py>

---

![](images/misc/artificial-intelligence.png)
# Giochi e IA

---

# Giochi e IA

- Giochi : primo campo a cui fu applicata l'intelligenza artificiale
- Caratteristica interessante dei giochi : enorme spazio di ricerca
- Presenza dell'avversario : incertezza
- Ricerca della soluzione : più complicata

---

![](images/comp/chess.jpg)
# Conoscenza perfetta

- Per la IA, interessanti i giochi con le seguenti due caratteristiche
- ① Giochi a due giocatori, con mosse alternate
- ② Giochi a conoscenza perfetta
    - I giocatori hanno le stesse informazioni
    - Ambiente deterministico e osservabile
- Tipici giochi da IA classica sono dama, scacchi ecc.
    - Non tipici giochi di carte: poker, bridge ecc.

---

# Due avversari

- Tipicamente, due soli giocatori, che giocano alternatamente
    - Presenza di due agenti le cui azioni si alternano
- Giochi *a somma zero*
    - Il vantaggio di un giocatore equivale allo svantaggio dell'altro
    - Le funzioni di utilità di entrambi sono sempre uguali
    - Ma di segno opposto
    - Ad esempio +1 per chi vince e -1 per chi perde

---

# Elementi del gioco

- Gioco come problema di ricerca, caratterizzato da:
    - Stato iniziale
    - Operatori : mosse lecite
    - Condizione di terminazione
    - Funzione di utilità (payoff) : indica il risultato del gioco
- Sviluppo del gioco interpretato come un albero
    - Radice : punto di avvio
    - Foglie : posizioni finali
- Albero del gioco determinato da
    - Stato iniziale
    - Mosse lecite di ciascun giocatore

---

![](images/misc/tic-tac-toe.svg)
# Gioco del tris

- “*Tic-tac-toe*”, “*Noughts and crosses*”, “*Xs and Os*”
- Gioco con carta e matita
- Due giocatori che si alternano
    - Il primo ha sempre segno “*X*”, l'altro segno “*O*”
- Ciascuno mette il proprio segno in una cella di una griglia 3×3
- Vince chi mette per primo in fila tre suoi segni
    - In orizzontale, verticale o diagonale
- Problema giocattolo
    - Se ben giocata, una partita finisce sempre in pareggio
    - Ciò lo rende un gioco futile

---

# Strategie

- Sulla matrice vuota (stato iniziale) *X* ha 9 mosse possibili
- *X* e *O* giocano a turno, fino a raggiungere uno stato finale
- Gli stati buoni per *X* sono cattivi per *O*
- *X* deve trovare strategie contingenti
    - Specificano le sue mosse iniziali
    - E quelle da fare dopo le risposte dell'avversario
- *Strategia ottima*
    - → Risultato non peggiore di qualsiasi altra strategia
    - Si assume di giocare contro un avversario infallibile

---

# Soluzione 1

- Database completo di **mosse precalcolate**
- Stato del gioco (strutture dati Python-like)
    - `matrix = [0] * 9`
    - `matrix[i] == 0` se vuota
    - `matrix[i] == 1` se contiene *X*
    - `matrix[i] == 2` se contiene *O*
- Strategia completa
    - `moves: list[int] = [0] * 19683`
    - Stato del gioco: numero in *base 3*, da convertire in base 10
    - Questo è l'indice per l'array `moves`
    - L'elemento è la nuova mossa (o il nuovo stato del gioco)

`$$
n = c_0 × b^0 + c_1 × b^1 + \dots + c_8 × b^8; b=3
$$`

---

![small](images/comp/tictactoe-x.png) ![small](images/comp/tictactoe-o.png)
# Soluzione 2

- **Regole di decisione**, con priorità
    - ~ Sistema esperto
- Apertura *X* : in angolo (l'avversario ha più possibilità di sbagliare)
- Apertura *O* in centro se disponibile, altrimenti angolo
- *Win* : completare un proprio tris
- *Block* : bloccare tris avversario
- *Fork* : preparare un doppio possibile tris
- *Block fork* : bloccare i doppi possibili tris dell'avversario
- Poi: centro, angolo opposto ad avvers., angolo, lato

>

<https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy>
<br>
<https://www.wikihow.com/Win-at-Tic-Tac-Toe>
<br>
Per comodità di somma: 2 = vuoto, 3 = X, 5 = O

---

![](images/comp/tictactoe-tree.png)
# Soluzione 3

- **Esplorazione albero delle mosse**
- *Algoritmo* : si generano tutte le *configurazioni raggiungibili* in una mossa e si sceglie la migliore
- Se una configurazione è subito vincente, allora è la migliore
- Altrimenti, si devono considerare tutte le mosse possibili per l'avversario
- Ciascun giocatore cerca la sua mossa migliore
- Questa determina il valore della configurazione

``` py
class Position:
    matrix: list[int] = [0] * 9
    next_positions: list[Position] = []
    value: int = 0
```

---

# Valutazione soluzione 1

- *Vantaggi*
    - Efficiente in termini di tempo
    - Gioca in modo ottimo
- *Svantaggi*
    - Non molto efficiente in termini di spazio
    - Molto tempo per definire i valori del vettore `moves`
    - Sono probabili errori nell'inserimento dei valori
    - Difficile applicabilità ad altri giochi
- *Non* soddisfa i requisiti di una buona tecnica di IA

---

![small](images/comp/tictactoe-x.png) ![small](images/comp/tictactoe-o.png)
# Valutazione soluzione 2

- *Vantaggi*
    - Efficiente in termini di spazio
    - Gioca in modo ottimo
    - La strategia del gioco è più comprensibile
- *Svantaggi*
    - Meno efficiente in termini di tempo
    - Difficile applicabilità ad altri giochi
- *Non* soddisfa i requisiti di una buona tecnica di IA

---

![](images/comp/tictactoe-tree.png)
# Valutazione soluzione 3

- *Vantaggi*
    - Abbastanza efficiente in termini di spazio
    - Gioca in modo ottimo
    - Approccio estendibile ad altri giochi
- *Svantaggi*
    - Inefficiente in termini di tempo
- Esempio di *buona tecnica di IA*

---

# 🏊 Esercizi

---

![](images/misc/cindy1.png) ![](images/misc/cindy2.png)
# Puzzle di Cindy

- Piano di gioco: `2n+1` celle allineate
    - Si parte con `n` pedine rosse a sinistra, `n` pedine verdi a destra
    - Le rosse si possono sempre spostare solo a destra, le verdi solo a sinistra
- A ogni mossa, una qualsiasi pedina può:
    - Avanzare di una posizione, se davanti ha una cella libera
    - Oppure scavalcare esattamente una pedina dell'altro colore, se c'è una cella libera subito dopo
- L'applicazione deve trovare *automaticamente* le mosse per invertire la posizione di tutte le pedine

>

<http://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html>
<br>
<https://tomamic.github.io/pyodide//?p52_cindy.py>

---

![](images/fun/queens-sol.svg)
# Soluzioni delle 8 regine

- Trovare tutte le soluzioni possibili, con il *backtracking*
    - Modificare il codice proposto
    - Visualizzare il numero di tentativi effettuati e il numero di soluzioni trovate
- Trovare tutte le soluzioni, usando la metodologia *Generate & Test*
    - Versione semplificata – una sola regina per riga
    - Visualizzare il numero di tentativi effettuati e il numero di soluzioni trovate

>

<https://tomamic.github.io/pyodide//?p52_queens.py>

---

![](images/fun/knights.svg)
# Dominio dei cavalli

- Sistemare sulla scacchiera dei cavalli
- Tutte le celle sono *occupate* o *attaccate*
- Minimizzare il numero dei pezzi usati
- Risolvere per diverse dimensioni della scacchiera

>

[Domination problems](https://en.wikipedia.org/wiki/Mathematical_chess_problem#Domination_problems)
<br>
<http://www.contestcen.com/knight.htm>
<br>
<http://oeis.org/A006075/b006075.txt>
