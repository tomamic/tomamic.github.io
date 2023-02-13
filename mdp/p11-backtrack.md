![](images/misc/tic-tac-toe.svg)
# Backtracking
## Introduzione alla programmazione

---

# Backtracking

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
- Si assegna un *valore* ad ogni variabile
- Si verifica se tutti i *vincoli* sono soddisfatti
    - Se i vincoli sono *soddisfatti* ⇒ trovata una *soluzione*
    - Altrimenti, si prova con valori diversi
- Il procedimento *continua*
    - Finché non ci sono più assegnamenti nuovi da testare
    - Tutte le soluzioni sono testate

>

<https://tomamic.github.io/pyodide/?p08_words.py>

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

<https://tomamic.github.io/pyodide/?p11_queens.py>

---

# 🏊 Esercizi

---

![](images/misc/cindy1.png) ![](images/misc/cindy2.png)
# 🥷 Puzzle di Cindy

- Piano di gioco: `2n+1` celle allineate
    - Si parte con `n` pedine rosse a sinistra, `n` pedine verdi a destra
    - Le rosse si possono sempre spostare solo a destra, le verdi solo a sinistra
- Ad ogni mossa, una qualsiasi pedina può:
    - Avanzare di una posizione, se davanti ha una cella libera
    - Oppure scavalcare esattamente una pedina dell'altro colore, se c'è una cella libera subito dopo
- L'applicazione deve trovare *automaticamente* le mosse per invertire la posizione di tutte le pedine

>

<http://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html>
<br>
<https://tomamic.github.io/pyodide/?p11_cindy.py>

---

![](images/fun/queens-sol.svg)
# 🥷 Soluzioni delle 8 regine

- Trovare tutte le soluzioni possibili, con il *backtracking*
    - Modificare il codice proposto
    - Visualizzare il numero di tentativi effettuati e il numero di soluzioni trovate
- Trovare tutte le soluzioni, usando la metodologia *Generate & Test*
    - Versione semplificata – una sola regina per riga
    - Visualizzare il numero di tentativi effettuati e il numero di soluzioni trovate

>

<https://tomamic.github.io/pyodide/?p11_queens.py>

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

# Algoritmo Minimax

---

# Algoritmo Minimax

- Usato nei giochi, ma anche per i problemi di decision making
- Trova la mossa ottimale per un giocatore (chiamato *Max*)
- Nell'ipotesi che anche l'avversario (chimato *Min*) giochi in maniera ottima
- Ciascuno dei due fa la mossa più favorevole per se stesso

---

# Passi del Minimax

1. Genera l'albero completo degli stati del gioco
2. Applica la funzione di utilità a tutti gli stati terminali (foglie dell'albero)
3. A partire dalle foglie, assegna un valore agli stati intermedi
    - Massimo dei figli se la mossa è fatta dal giocatore *Max*
    - Minimo dei figli se la mossa è fatta dal giocatore *Min*
4. Infine, si giunge ad assegnare un valore alla prima mossa, di *Max*
    - Utilità massima al primo livello dell'albero
    - Corrisponde alla mossa migliore per il giocatore

---

![large](images/fun/tictactoe-minimax.png)
# Esplorazione completa

- Ogni nodo è etichettato con *+1* o *-1*
- Obiettivo di *Max* : raggiungere nodi *+1*
- Obiettivo di *Min* : raggiungere nodi *-1*
- Nodi in cui la mossa tocca a *Max*
    - Etichetta = massimo valore dei figli
- Nodi in cui la mossa tocca a *Min*
    - Etichetta = minimo valore dei figli

---

![large](images/comp/minimax1.png)
# Strategie di Min e Max

- L'algoritmo *Minimax* attraversa l'albero completo del gioco
    - Assegna un valore di utilità ad ogni possibile *foglia* dell'albero del gioco
    - Poi aggiorna ricorsivamente il valore di utilità dei nodi superiori
    - Il valore di utilità si propaga verso l'alto
- *Minimax* assicura la miglior scelta possibile
    - Assumendo che l'avversario giochi in maniera ottima
    - Giocatore *Min* farà sempre la mossa peggiore per giocatore *Max*

---

![large](images/comp/minimax3.png)
# Utilità non binaria

- In alcuni casi, il risultato non è binario
    - Risultato come punteggio numerico
    - Oppure, valutazione di una certa posizione di gioco
- *Max* sceglie gli stati con valore massimo
- *Min* sceglie gli stati con valore minimo

---

![large](images/comp/minimax4.png)
# Ricorsione

- L'algoritmo *Minimax* calcola la scelta ottima per un dato stato del gioco
- Usa un semplice calcolo ricorsivo del valore di utilità di ciascuno stato successivo
- Implementa direttamente l'operazione matematica `$min$`, o `$max$`
- La ricorsione procede fino in fondo all'albero degli stati del gioco
- Dopo aver raggiunto i nodi foglia…
    - Valori propagati all'indietro, verso l'alto
    - Man mano che le chiamate ricorsive si concludono

---

# Complessità del Minimax

- Algoritmo *Minimax* calcola la mossa ottima per *Max* (primo giocatore)
    - Assumendo che *Min* (avversario) giochi una partita perfetta
- Fornisce il modello per una analisi matematica dei giochi
    - Base per sviluppare algoritmi più pratici
- Ipotesi del *Minimax* : possibile generare tutti gli stati terminali
- Esplorazione depth-first completa dell'albero del gioco
- Complessità temporale del *Minimax* : `$O(b^n)$`
    - `$n$` : profondità massima dell'albero
    - `$b$` : mosse lecite in ogni stato

---

# Spazio di ricerca

- Ci sono giochi molto più complessi del Tris
- Per esempio, gioco degli *scacchi*
- Fattore di ramificazione di circa `$35$`
- Spesso, partite con oltre `$50$` mosse per giocatore
- Spazio di ricerca di `$35^{100}$`
- In realtà, solo `$10^{40}$` posizioni lecite

---

# Minimax con euristica

- Ricerca della mossa migliore su tutto l'albero del gioco
    - Non efficiente, non praticabile
    - Anche per giochi non troppo complicati
    - Ragionevolmente, ~ qualche minuto per avere risposta
- Ci vuole un criterio per rendere il *Minimax* capace di muovere
    - Senza dover esplorare tutto l'albero del gioco
- Possibile, introducendo due elementi
- ① Funzione di valutazione **euristica**, che valuta anche l'utilità di stati non terminali
- ② **Cutoff-Test** (test di terminazione) per decidere a che livello di mosse interrompere la ricerca

---

# Euristiche

- Giochi più interessanti e complessi: esplorazione completa impossibile
- La funzione di utilità è calcolata con l'aiuto di qualche valutazione euristica
- Le euristiche sono specifiche per ogni tipo di gioco
- Forniscono una *stima* dell'utilità di una configurazione
- In assenza di un risultato finale certo

---

# Minimax limitato

- Strategia : guardare *k* mosse avanti (Shannon, 1949)
- Si espande l'albero del gioco fino a profondità *k* (limite dei livelli)
- Compatibile con il tempo e lo spazio disponibili
- Gli stati raggiunti sono valutati
- Il risultato è propagato all'indietro con le solite regole

`$$
MinimaxValue(n) = \begin{cases}
f(n), level(n) = k \\
max_{s\in succ(n)} MinimaxValue(s), n = MAX \\
min_{s\in succ(n)} MinimaxValue(s), n = MIN
\end{cases}
$$`

---

# Valutazione per gli scacchi

- La **funzione di valutazione** fornisce una stima della bontà di una mossa
- Per esempio, nel gioco degli scacchi la stima si può basare sul valore dei pezzi dei due giocatori
    - Pedone 1, cavallo e alfiere 3, torre 5, regina 9
- Il test di terminazione prova ad interrompere la ricerca
    - Livello che rispetta il limite di tempo a disposizione
- Tuttavia, una brusca terminazione della ricerca può fornire cattivi risultati
    - Specie se associata ad una funzione di valutazione non molto sofisticata

---

# Valutazione più attenta

- Valore dei pezzi
    - Importanza di un pezzo, non costante
    - Dipende dalla sua posizione
    - Dipende dalla fase della partita
- Per esempio, per un *cavallo*
    - Posizioni centrali più vantaggiose degli angoli
    - Posizioni che minacciano pezzi nemici sono più vantaggiose
    - La distanza dal re pesa in maniera negativa
    - L'importanza decresce nel progredire della partita

---

# Funzione di valutazione

- Stima dell'attesa utilità, a partire da una certa posizione nel gioco
- Qualità fondamentali della funzione:
- ① Consistente con la utilità, se applicata agli stati terminali
    - Cioè, induce lo stesso *ordinamento*
- ② Riflette le reali possibilità di vittoria
    - Grado di *fiducia* nella stima di vittoria
    - A ha un valore più grande di B
    - `$\iff$` In A ci sono più possibilità di vittoria che in B
- ③ *Efficiente* da calcolare

---

# Codice Minimax

``` code
function minimax( node, depth, maximizingPlayer ) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max( value, minimax( child, depth − 1, FALSE ) )
        return value
    else (* minimizing player *)
        value := +∞
        for each child of node do
            value := min( value, minimax( child, depth − 1, TRUE ) )
        return value
```

>

<https://en.wikipedia.org/wiki/Minimax>

---

# Codice Negamax

``` code
function negamax(node, depth, color) is
    if depth = 0 or node is a terminal node then
        return color × the heuristic value of node
    value := −∞
    for each child of node do
        value := max(value, −negamax(child, depth − 1, −color))
    return value
```

<https://en.wikipedia.org/wiki/Negamax>

---

# Cut-off test

- Facilitare il calcolo di *f*
    - Algoritmo *Minimax* fermato in configurazioni quiescenti
    - Prime mosse seguenti non cambiano molto il valore
- Orizzonte
    - Difficile predizione di mosse molto rilevanti
    - Non raggiungibili per limiti dello spazio di ricerca
    - Invisibili all'algoritmo
- Il *cut-off* è un compito difficile

---

# Alpha-beta

---

# Ottimizzazioni del Minimax

- Minimax con *tempo limitato*
    - Funzione di valutazione
    - Cut-off
- Ma potrebbe non essere ancora accettabile
- Soluzioni possibili, *ad-hoc*
    - Ordinamento delle mosse possibili
    - Ricerca secondaria per eliminare alcuni rami
    - Ricerca focalizzata e approfondita su certe mosse
- Soluzione semplice, di applicabilità *generale*
    - *Alpha-Beta Pruning*

---

# Alpha-Beta Pruning

- *Minimax* : ricerca nell'albero in base a proprietà matematiche
- Ma vengono esplorati rami che non saranno mai scelti
- Si può trovare la mossa giusta…
    - Senza provare tutte le mosse nell'albero del gioco
- Trucco per calcolare la corretta decisione *Minimax* …
    - Senza esplorare completamente ogni ramo dell'albero
- Tecnica di potatura *Alpha-Beta Pruning*
    - Se un giocatore può fare una mossa verso un nodo `$n$`
    - Ma ad un livello più alto nell'albero può fare una scelta migliore
    - Allora il nodo `$n$` non sarà mai raggiunto

---

# Idea per potatura

- Posizione di gioco `$n$`
- Se un giocatore ha una scelta migliore a livello del nodo `$m$`
    - Con `$m$` nodo genitore di `$n$`
    - Oppure qualsiasi nodo antenato di `$n$`
- `$\implies$` `$n$` non sarà mai raggiunto in una vera partita
- Quindi, se eventualmente scopriamo abbastanza su `$n$`
    - Esaminando solo alcuni suoi discendenti
    - Allora possiamo subito potare tutto il ramo di `$n$`
    - Rimuoviamo il nodo `$n$` da quelli da valutare

---

![large](/images/comp/alphabeta-prune.png)
# Nodi non effettivamente utili

- Consideriamo un nodo `$n$` nell'albero
- Il giocatore si muoverà verso quel nodo?
- Se c'è una scelta migliore
    - Alivello del nodo genitore
    - A in ogni livello superiore...
- Allora `$n$` non sarà mai raggiunto durante il gioco

---

# Soglie α e β

- La potatura Alpha–Beta prende il nome dai seguenti due parametri
    - Descrivono i limiti registrati per i valori che appaiono lungo il cammino
- **`$\alpha$`** = valore della scelta migliore trovata finora (valore più alto)
    - In ogni punto lungo il cammino in cui la scelta spetta a *Max*
- **`$\beta$`** = valore della scelta migliore trovata finora (valore più basso)
    - In ogni punto lungo il cammino in cui la scelta spetta a *Min*

---

# Aggiornamento di α e β

- L'algoritmo Alpha-Beta aggiorna continuamente i valori di `$\alpha$` e `$\beta$`
- Pota i rami di un nodo (cioè, interrompe le chiamate ricorsive)
- Appena il valore del nodo attuale si dimostra peggiore
    - Della soglia `$\alpha$`, per *Max*
    - Della soglia `$\beta$`, per *Min*
- La ricerca del *Minimax* è in profondità (*depth-first*)
    - Si considera un solo percorso alla volta
    - In memoria solo i nodi di quel percorso

---

# Come funziona alpha–beta

- Sia *Max* il giocatore e *Min* l'avversario
- **`$\alpha$`** è il punteggio minimo ottenibile da *Max*
    - A partire dalla posizione data
    - All'inizio dell'algoritmo, vale `$-\infty$`
    - Durante la ricerca, `$α :=$` valore migliore ottenuto da Max
- **`$\beta$`** è il punteggio massimo ottenibile da *Min*
    - A partire dalla stessa posizione
    - All'inizio dell'algoritmo, vale `$+\infty$`
    - Durante i calcoli, `$β :=$` valore migliore ottenuto da Min

---

# Ricerca in profondità

- La ricerca come per il *Minimax* normale
- Tuttavia, i valori di `$\alpha$` e `$\beta$` vengono aggiornati per ogni nodo
    - Man mano che la ricerca si approfondisce
- Ricerca *Minimax* : depth-first
    - Considerare solo i nodi lungo un singolo percorso nell'albero
    - Parametri `$\alpha$` e `$\beta$` calcolati per ogni punto del percorso
- => Deve sempre valere `$α < β$`
    - Quando vanno in contraddizione, si taglia

---

# Condizioni di potatura

- Un nodo foglia ha `$\alpha = \beta = f$`
    - Valore della funzione di utilità `$f$`
- Ad un nodo di *Max*
    - `$\alpha$` = valore di utilità maggiore, tra nodi figli
    - `$\beta$` = `$\beta$` del nodo genitore
- Ad un nodo di *Min*
    - `$\alpha$` = `$\alpha$` del nodo genitore
    - `$\beta$` = valore di utilità minore, tra nodi figli
- Per ogni nodo, dovrebbe valere
    - `$\alpha \leq f \leq \beta$`
    - Altrimenti si può tagliare

---

# Utilità e soglie

- La ricerca alpha-beta aggiorna i valori di α e β ad ogni nodo
- Pota i rami
- Cioè, termina le chiamate ricorsive
- Quando determina che il valore dell'attuale nodo
- Sia peggiore di quello di α, per Max, o...
- Sia peggiore di quello di β, per Min

---

# Ricerca con potatura 1/4

![large](/images/comp/alphabeta1.png)

---

# Ricerca con potatura 2/4

![large](/images/comp/alphabeta2.png)

---

# Ricerca con potatura 3/4

![large](/images/comp/alphabeta3.png)

---

# Ricerca con potatura 4/4

![large](/images/comp/alphabeta4.png)

---

# Codice Alpha-Beta per Max

``` code
function alphabeta(node, depth, α, β, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max(value, alphabeta(child, depth − 1, α, β, FALSE))
            if value ≥ β then
                break (* β cutoff *)
            α := max(α, value)
        return value
    else
        (* … *)
```

---

# Codice Alpha-Beta per Min

``` code
function alphabeta(node, depth, α, β, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        (* … *)
    else
        value := +∞
        for each child of node do
            value := min(value, alphabeta(child, depth − 1, α, β, TRUE))
            if value ≤ α then
                break (* α cutoff *)
            β := min(β, value)
        return value
```

---

# Codice NegaMax con α-β

``` code
function negamax(node, depth, α, β, color) is
    if depth = 0 or node is a terminal node then
        return color × the heuristic value of node

    childNodes := generateMoves(node)
    childNodes := orderMoves(childNodes)
    value := −∞
    foreach child in childNodes do
        value := max(value, −negamax(child, depth − 1, −β, −α, −color))
        α := max(α, value)
        if α ≥ β then
            break (* cut-off *)
    return value
```

---

# Efficacia di potatura alpha–beta

- Efficacia altamente dipendente dall'ordine di analisi dei nodi
- Vantaggioso provare ad esaminare prima i nodi più promettenti
- *Se* si riescono ad ordinare i nodi, allora…
    - Alpha–beta deve esaminare solo `$O(b^{d/2})$` nodi
    - Invece di `$O(b^d)$`, per il *Minimax*
    - Cioè, il fattore di *branching* effettivo diventa `$b^{1/2}=\sqrt{b}$`
- Riduzione di nodi
    - Da una certa complessità, alla sua radice quadrata
    - Si può raddoppiare la profondità di ricerca `$d$`
- Negli scacchi, ad esempio
    - Si passa ~ da `$b=35$` a `$b=6$`
    - Si esplorano sequenze di mosse di lunghezza doppia

