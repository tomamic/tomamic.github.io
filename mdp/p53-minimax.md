![](images/misc/tic-tac-toe.svg)
# Minimax
## Introduzione alla programmazione

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
    - Assegna un valore di utilità a ogni possibile *foglia* dell'albero del gioco
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
- Per esempio, per scacchi: valore dei pezzi dei due giocatori
    - *Pedone* : 1
    - *Cavallo e alfiere* : 3
    - *Torre* : 5
    - *Regina* : 9
- Il test di terminazione prova a interrompere la ricerca
    - Livello che rispetta il limite di tempo a disposizione
- Tuttavia, una brusca terminazione della ricerca può fornire cattivi risultati
    - Specie se associata a una funzione di valutazione non molto sofisticata

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
    - Ma a un livello più alto nell'albero può fare una scelta migliore
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
    - A livello del nodo genitore
    - A in ogni livello superiore...
- Allora `$n$` non sarà mai raggiunto durante il gioco

---

# Soglie α e β

- La potatura Alpha–Beta prende il nome dai seguenti due parametri
    - Descrivono i limiti registrati per i valori che appaiono lungo il cammino
- **`$\alpha$`** = valore più alto trovato finora da *Max*
    - In ogni punto del cammino in cui gioca *Max*
- **`$\beta$`** = valore più basso trovato finora da *Min*
    - In ogni punto del cammino in cui gioca *Min*

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
- ⇒ Deve sempre valere `$α < β$`
    - Quando vanno in contraddizione, si taglia

---

# Condizioni di potatura

- Un nodo foglia ha `$\alpha = \beta = f$`
    - Valore della funzione di utilità `$f$`
- Per un nodo di *Max*
    - `$\alpha$` = valore di utilità maggiore, tra nodi figli
    - `$\beta$` = `$\beta$` del nodo genitore
- Per un nodo di *Min*
    - `$\alpha$` = `$\alpha$` del nodo genitore
    - `$\beta$` = valore di utilità minore, tra nodi figli
- Per ogni nodo, dovrebbe valere
    - `$\alpha \leq f \leq \beta$`
    - Altrimenti si può tagliare

---

# Utilità e soglie

- La ricerca alpha-beta aggiorna i valori di $\alpha$ e $\beta$ a ogni nodo
- Pota i rami
- Cioè, termina le chiamate ricorsive
- Quando determina che il valore dell'attuale nodo
- Sia peggiore di quello di $\alpha$, per *Max*, o...
- Sia peggiore di quello di $\beta$, per *Min*

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
- Vantaggioso provare a esaminare prima i nodi più promettenti
- *Se* si riescono a ordinare i nodi, allora…
    - Alpha–beta deve esaminare solo `$O(b^{d/2})$` nodi
    - Invece di `$O(b^d)$`, per il *Minimax*
    - Cioè, il fattore di *branching* effettivo diventa `$b^{1/2}=\sqrt{b}$`
- Riduzione di nodi
    - Da una certa complessità, alla sua radice quadrata
    - Si può raddoppiare la profondità di ricerca `$d$`
- Negli scacchi, ad esempio
    - Si passa ~ da `$b=35$` a `$b=6$`
    - Si esplorano sequenze di mosse di lunghezza doppia

