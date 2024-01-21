![](images/dev/geek-girl.svg)
# Esercizi 2018
## Introduzione alla programmazione

---

# Esercitazione 1 (10-01)

---

![](images/misc/handshake.svg)
# 1.1 Hello, user!

- Compilare ed eseguire il programma “`Hello world`”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.2 Equazione di secondo grado

- Chiedere all'utente i tre coefficienti `a, b, c` di una equazione di secondo grado
    - `ax² + bx + c = 0`
- Comunicare all'utente che tipo di soluzioni presenta l'equazione
    - Due soluzioni reali
    - Un'unica soluzione reale
    - Nessuna soluzione reale

>

Non è richiesto il valore delle soluzioni

---

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.3 Equazione di 2° grado, con ciclo

- Riprendere l'esercizio 1.2
- In caso di soluzioni reali, mostrare all'utente il loro valore
- Chiedere infine all'utente se vuole valutare altre equazioni

>

Racchiudere il programma in un ciclo `while`
<br>
Usare la funzione `sqrt` del modulo `math`

---

![](images/misc/diagonal-squares.svg)
# 1.4 Quadrati in diagonale

- Chiedere all'utente un numero `n`
- Su un canvas 500×500, disegnare `n` quadrati
    - Tutti delle stesse dimensioni
    - Posizionati lungo tutta la diagonale
    - Ciascuno con un colore casuale

>

Determinare il lato di ogni quadrato in base alla dimensione del canvas

---

![](images/misc/green-squares.png)
# 1.5 Sequenza di quadrati

- Chiedere all'utente un numero `n`
- Su un canvas 500×500, disegnare `n` quadrati
    - Quadrati con lato decrescente
    - Tutti allineati in alto e a sinistra
- Far variare il colore dei quadrati
    - Dal nero del quadrato più grande
    - Fino al verde del quadrato più piccolo

>

Determinare automaticamente le variazioni migliori per lato e colore, prima di iniziare il ciclo

---

![](images/misc/impossible-triangle.jpg)
# 1.6 Triangolo

- Chiedere all'utente le lunghezze dei tre lati
- Controllare se il triangolo è:
    - Equilatero
    - Isoscele
    - Scaleno
    - Oppure se i tre lati non formano affatto un triangolo
- Visualizzare il responso

---

# 1.7 Multipli di 3 o 5

- Chiedere all'utente un numero `n`
- Calcolare la somma di tutti i multipli di 3 o 5 strettamente minori di `n`
    - Un numero `x` è multiplo di `y` se `x % y == 0`

>

Es. `n = 10`. Se elenchiamo tutti numeri minori di 10 che sono multipli di 3 o 5, otteniamo 3, 5, 6 e 9. La somma di questi multipli è 23
<br>
Ispirato da: <https://projecteuler.net/problem=1>

---

![large](images/misc/gold-price.svg)
# 1.8 Massimo pari

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Visualizzare il più grande numero pari tra quelli inseriti

---

![](images/misc/three-cards.png)
# 1.9 Tre carte

- All'inizio l'utente ha 10 monete
- A ogni turno:
    - Viene estratto a sorte un numero segreto tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

---

# Esercitazione 2 (10-08)

---

![](images/misc/triangle-notations.svg)
# 2.1 Funzione, Erone

- Definire una funzione `heron` per il calcolo dell'area di un triangolo
    - Parametri: tre lati come `float`
    - Risultato: area come `float`
- Invocare la funzione dalla shell interattiva
- Aggiungere poi al programma una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente tre valori (chiamando `input`)
    - Poi chiamare `heron` con questi parametri
    - Infine mostrare all'utente il risultato (chiamando `print`)

>

Formula di Erone: `area = √(s * (s - a) * (s - b) * (s - c))`
<br>
Con `s = (a + b + c) / 2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>

---

![](images/repr/binary-tunnel.jpg)
# 2.2 Conteggio di 0 e 1

- Definire una funzione che conta separatamente il numero di cifre `0` e `1` presenti in un testo
    - Parametro: stringa di testo da elaborare
    - Risultato: tupla dei due valori conteggiati
- Invocarla da una funzione `main`
    - I/O con l'utente solo nella funzione `main`

>

Nella funzione, usare un ciclo `for` sulla stringa

---

![](images/misc/ohm.svg)
# 2.3 Classe dei cavi

- Definire una classe per i cavi di rame
- Costruttore con parametri: lunghezza (in *m*) e sezione (in *mm²*)
- Campo costante per resistività
    - `rho = 0.0171  # Ohm·mm²/m`
- Metodo per calcolare la resistenza (in *Ohm*)
    - `rho·length/area`
- Metodo per calcolare l'intensità di corrente in *Ampere* , data la tensione in *Volt* (parametro)
    - `voltage/resistance`
- Nel corpo principale del programma...
    - Creare un oggetto con dati forniti dall'utente
    - Visualizzare resistenza e corrente del cavo

---

![](images/misc/xmas-triangle.png)
# 2.4 Triangolo di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate a sinistra
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale

---

![](images/oop/anim-wrap.png)
# 2.5 Animazione pallina

- Partire dall'esempio dell'animazione orizzontale, senza classi
    - Aggiungere a ogni turno anche uno spostamento verticale
    - Quando la pallina arriva a uno dei 4 bordi...
    - Ricompare dal bordo opposto
- Direzione di movimento scelta dall'utente
    - All'inizio chiedere all'utente `dx` e `dy`
    - Ciascuno limitato tra -5 e +5
- Mostrare l'animazione di una pallina su un canvas

---

![](images/oop/anim-wrap.png)
# 2.6 Conteggio fotogrammi

- Ripetere l'esercizio 2.5, senza classi, ma fermare la pallina dopo 5 fotogrammi
- Alla pressione di un tasto, se la pallina è ferma:
    - Far ripartire l'animazione, per soli altri 5 fotogrammi

>

Usare una variabile globale per contare i fotogrammi

---

![](images/oop/anim-wrap.png)
# 2.7 Pallina modificata

- Partire dalla classe `Ball` vista a lezione
- Modificare il metodo `move`
    - Quando la pallina arriva a uno dei 4 bordi...
    - Ricompare dal bordo opposto

---

![](images/oop/anim-wrap.png)
# 2.8 Pallina con conteggio

- Definire una propria classe `Ball`
- Incapsula il movimento dell'esercizio 2.6
    - Campi x, y, dx, dy
    - Metodi `move` e `position`
    - Campo per contare i fotogrammi
    - Metodo `go` per far ripartire la pallina (solo se ferma)
- Mostrare l'animazione di una pallina su un canvas
    - Alla pressione di un tasto, viene chiamato il metodo `go`

>

Il metodo `go` riavvia solo il conteggio, ma non sposta la pallina

---

![](images/misc/xmas-tree.png)
# 2.9 Albero di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate al centro
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale
- Aggiungere in fondo una riga con un solo cerchio

---

# Esercitazione 3 (10-15 *)

---

![](images/misc/manhattan-distance.svg)
# 3.1 Distanza di Manhattan

- Definire una funzione per calcolare la *distanza di Manhattan* tra due punti
    - Parametri: `x0, y0, x1, y1`
    - Risultato: `|x0 - x1| + |y0 - y1|`
- Definire una funzione `main`, in cui:
    - L'utente inserisce le quattro coordinate
    - Viene chiamata la prima funzione
    - Viene stampato il risultato

>

Non usare variabili globali

---

# 3.2 Classe delle ambulanze

- Un oggetto ambulanza ha tra i suoi campi
    - Codice identificativo testuale (nome)
    - Posizione attuale sulla mappa: `x0, y0`
- Metodo `manhattan_distance(x1, y1)`
    - Calcola la distanza tra ambulanza e punto d'intervento
    - (Percorso su strade ortogonali, non in linea retta)
    - Parametri `x1, y1` indicano il punto d'intervento
- Nella funzione `main`, istanziare un oggetto ambulanza
    - Poi, l'utente fornisce ripetutamente un nuovo punto di intervento
    - Il sistema comunica la distanza stimata dell'ambulanza

---

![](images/misc/troll-key.png)
# 3.3 Percentuale di maiuscole

- Chiedere una riga di testo all'utente
- Mostrare la percentuale di lettere maiuscole presenti

>

Usare un ciclo `for` sulla stringa

---

# 3.4 Valori sopra e sotto la media

- Chiedere all'utente una sequenza di interi, terminata da 0
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

![](images/misc/high-scores.png)
# 3.5 Nomi sopra e sotto la media

- Chiedere all'utente una sequenza di dati, come coppie *(nome, valore)*
    - Ciascun nome (`str`) è associato a un valore (`int`)
    - La sequenza termina quando il nome è vuoto
- Calcolare e mostrare il valore medio
- Elencare i nomi con valori sotto alla media
- Elencare i nomi con valori sopra (o uguali) alla media

>

Inserire nella lista delle tuple, cioè coppie *(nome, valore)*

---

# 3.6 Frogger, rana

- Ridenominare come `Frog` la classe `Turtle` dell'esempio `bounce`
- Alla pressione di un tasto freccia, la rana comincia a muoversi
    - Il movimento prosegue per 5 fotogrammi
    - Poi la rana si ferma
    - I tasti sono inefficaci se la rana è già in movimento
- Il rilascio del tasto non ferma la rana

---

# 3.7 Frogger, animazione opzionale

- Cambiare il file con le icone dei personaggi
- Per la rana, visualizzare icone diverse durante il salto
- Nel metodo `symbol`, utilizzare il contatore e la direzione per scegliere l'icona

---

# Esercitazione 4 (10-22)

---

# 4.1 Lista rovesciata

- Scrivere una funzione ricorsiva per rovesciare una lista
    - Parametro: `list`
    - Risultato: `list`
- L'output contiene gli stessi elementi dell'input, però in ordine opposto
    `[2, 3, 1, 4]` → `[4, 1, 3, 2]`

>

Saranno accettate esclusivamente le soluzioni ricorsive
<br>
Se lunghezza `< 2`: la lista resta uguale
<br>
Altrimenti: la lista di output è ottenuta rovesciando la lista di input, a esclusione del primo elemento (ricorsione); al risultato si concatena infine il primo elemento della lista di input

---

![](images/fun/times-table.svg)
# 4.2 Tabelline in file

- Chiedere all'utente un numero `n`
- Stampare a video la tavola pitagorica, fino a `n`
    - In ciascuna riga, valori separati da virgola
- Salvare la stessa tavola in un file

---

![large](images/misc/gold-price.svg)
# 4.3  Valori in file

- Si supponga, per esempio, che una misura venga ripetuta due volte al giorno, per più giorni
    - Le misure vengono riportate in un file
    - Una riga del file per ogni giornata
    - Quindi, due misure per ogni riga
- Leggere tutti i valori contenuti in un file di questo tipo
    - Ogni riga riporta due valori reali, separati da virgola
- Visualizzare massimo, minimo e media di tutti i valori letti

>

Usare l'operazione `split` su stringa
<br>
Se necessario, provare prima a elaborare un file con un solo valore per riga

---

![](images/misc/histogram-rot.svg)
# 4.4 Istogramma con barre orizzontali

- Leggere da un file una sequenza di valori (positivi)
- Mostrare un istogramma, in un canvas 600×600
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - Rosso di ciascuna barra proporzionale al valore corrispondente
        - Verde e blu invece sempre al massimo
    - La barra più lunga occupa tutto lo spazio disponibile
    - L'altezza del canvas è divisa equamente per le barre

>

Memorizzare i valori in una lista

---

# 4.5 Lista di ambulanze

- Leggere da un file i dati di una lista di ambulanze
    - Oggetti dell'es. 3.2
    - In ogni riga ci sono i dati completi di una ambulanza: nome e posizione
- Poi, in un ciclo, chiedere all'utente il punto in cui intervenire
- Il sistema sceglie l'ambulanza più rapida per l'intervento
- Comunica all'utente:
    - Il nome dell'ambulanza
    - La stima della distanza di Manhattan tra ambulanza e punto di intervento

---

![](images/misc/crop-circle.jpg)
# 4.6 Circular infinity

- In un riquadro `(x, y, w, h)` assegnato, disegnare ricorsivamente dei cerchi, con i centri allineati in verticale
- Tracciare un cerchio contenuto nel riquadro
    - `r = h/2; xc = x + w/2; yc = y + h/2`
- Dividere il riquadro in due metà
- Applicare a ciascuno dei due riquadri il processo, ricorsivamente
- A ogni livello, cambiare o alternare il colore del cerchio disegnato
- Non disegnare cerchi più piccoli di un pixel

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/frogger.png)
# 4.7 Frogger, automobili

- Modificare la classe `Ball` dell'esempio `bounce`
- Il movimento è solo orizzontale
- Quando un oggetto esce da un bordo, riappare dal bordo opposto
- Dare però al movimento uno spazio più ampio dell'arena visibile
    - Ammesse coordinate negative o maggiori del bordo destro
    - In questo modo, l'oggetto riappare con un certo ritardo
- Inserire la classe nel gioco, come `Vehicle`
- Rimuovere la rana quando urta un veicolo

---

# Esercitazione 5 (10-29)

---

# 5.1 Selezione da file

- Leggere riga per riga un file di testo
- Riscrivere in un file di output le stesse righe
- Ma, di ciascuna riga, scrivere solo il testo compreso tra parentesi quadre

>

Segnare in un `bool` se si è letta una parentesi aperta, ma non ancora una parentesi chiusa

---

# 5.2 Veicoli ed elicotteri

- Definire una classe astratta per i *veicoli* d'intervento
    - Metodo `estimate_time(x, y)` per il calcolo del tempo d'intervento
    - Metodo `name`
- Ridefinire l'*ambulanza* (es. 3.2) come sottoclasse di *veicolo*
    - Richiede `1 minuto` di preparazione alla partenza
    - Viaggia a `90 Km/h`, per la distanza di Manhattan
- Definire una classe *elicottero* come sottoclasse di *veicolo*
    - Richiede `5 minuti` di preparazione
    - Viaggia in linea d'aria a `250 Km/h`

---

# 5.3 Lista di veicoli

- Leggere da un file i dati di una lista di *veicoli* (*elicotteri* o *ambulanze*, es. 5.2)
    - In ogni riga ci sono i dati completi di un veicolo, compreso il tipo
    - Istanziare e accodare un oggetto per ogni riga
- Poi, in un ciclo, chiedere all'utente il punto in cui intervenire
- Il sistema sceglie il veicolo più rapido per l'intervento
- Comunica all'utente:
    - Il nome del veicolo
    - La stima del tempo di intervento

---

![](images/misc/histogram.svg)
# 5.4 Istogramma con barre verticali

- Leggere da un file una sequenza di valori (positivi)
- Mostrare un istogramma, in un canvas 600×600
    - Altezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più alta occupa tutto lo spazio disponibile
    - Barre in blu, per valori sotto alla media
    - Barre in rosso, per valori sopra (o uguali) alla media
    - La larghezza del canvas è divisa equamente per le barre

---

![](images/fun/knight-moves.svg)
# 5.5 Percorso del cavallo

- L'utente sceglie dim. scacchiera (`≥5`)
- Allocare matrice quadrata di interi (tutti 0)
- In un ciclo, chiedere all'utente `x` e `y`
    - Segnare nella cella il numero di mosse fatte
    - Si può giocare solo nelle celle vuote, a “L” dall'ultima giocata
    - Dopo ogni mossa, stampare la matrice aggiornata
    - Controllare se la matrice è piena

``` text
    1   14    9   20    3
   24   19    2   15   10
   13    8   25    4   21
   18   23    6   11   16
    7   12   17   22    5
```

---

![](images/misc/frogger.png)
# 5.6 Frogger, zattere

- Modificare la classe `Ball` dell'esempio `bounce`
    - Il movimento è solo orizzontale (destra o sinistra)
    - Quando un oggetto esce da un bordo, riappare dal bordo opposto
    - Dare però al movimento uno spazio più ampio dell'arena visibile
- Inserire la classe nel gioco, come `Raft`
- La rana viene trascinata, quando poggia su una zattera
    - Controllare che il centro della rana sia dentro la zattera
    - Quando la rana collide con una zattera, può memorizzarla in un campo
    - Metodo *getter* che ottenere la velocità di una zattera
    - La rana muore, se trascinata fuori dallo schermo

---

![](images/misc/frogger.png)
# 5.7 Frogger, fiume

- Aggiungere il fiume al gioco Frogger
    - Personaggio fisso
    - Disposto sotto alle zattere (prima, nell'arena)
- Se la rana urta il fiume (ma non una zattera), muore
- Se la rana attraversa il fiume, vince

---

# Esercitazione 6 (11-05 *)

---

![](images/fun/matryoshka.png)
# 6.1 Minimo valore, con ricorsione

- Definire una funzione ricorsiva `min_char`
    - Cerca, in una stringa di testo, il carattere con codice Unicode minimo
- Se il testo ha lunghezza 0, errore
    - `raise ValueError("Empty string")`
- Se il testo ha lunghezza 1, l'unico carattere è il risultato
- Altrimenti il risultato è pari al minore tra:
    - Il primo carattere
    - Il carattere con codice minimo tra tutti gli altri (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 6.2 Maiuscole in ogni riga

- Leggere un file riga per riga
- Calcolare e visualizzare la percentuale di maiuscole in ogni riga
- Calcolare e visualizzare la percentuale di maiuscole in tutto il file

---

# 6.3 Matrice casuale

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempire la matrice di numeri interi casuali, compresi tra 0 e 15
- Salvare la matrice in un file di testo (*CSV*)
    - Ogni riga della matrice in una riga del file
    - Valori separati tra loro da una virgola
- In un ciclo
    - Chiedere un valore all'utente
    - Contare quante volte quel valore è presente nelle celle di bordo

---

![](images/fun/knight-moves.svg)
# 6.4 Percorso del cavallo, classe

- Incapsulare il gioco 5.5 in una classe
- Campi per matrice e altro
- Metodi
    - `play_at(x, y)` per giocare nella data posizione
    - `get_val(x, y)` per conoscere il valore nella data posizione
    - `finished()`, booleano: matrice piena?
- Oggetto istanziato all'avvio del programma
- In un ciclo, esterno alla classe
    - L'utente sceglie x, y per la nuova mossa (chiamata `play_at`)
    - Si stampa la matrice (chiamate `get_val`)

---

![](images/fun/knight-moves.svg)
# 6.5 Percorso del cavallo, GUI

- Completare la classe dell'es. 6.4, implementando tutti i metodi di `BoardGame`
- Utilizzare il gioco con la GUI degli esempi
- Se un giocatore gioca in una cella già piena, tutti i numeri più alti del valore presente vengono rimossi

---

![](images/fun/knight-moves.svg)
# 6.6 Frogger, estensioni opzionali

- Gioco con due rane, guidate con tasti diversi (ma possibilmente stessa classe)
- Veicoli e zattere con aspetto e dimesione diversa (ma possibilmente stessa classe)
- Tartarughe che si sommergono, coccodrilli e altri personaggi
- Conteggio delle rane salve, per la conclusione
- Punti, livelli e bonus vari
- Altre estensioni, a fantasia

---

![](images/misc/handwriting.jpg)
# 6.7 Frogger, bella copia

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : preferibilmente `return` a fine funzione, cicli senza `break`
    - *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*

---

# Esercitazione 7 (11-12)

---

![](images/dev/cpp.svg)
# Esercizi C++

- Es. 1.1
- Es. 1.7
- Es. 2.2 -- Restituire un `vector` con due `int`
- Es. 3.3
- Es. 3.4

---

![](images/misc/minesweeper.png)
# 7.6 Campo minato in C++, conteggio

- Generare una matrice di dimensioni `w, h` e posizionare `n` mine in posizione casuale
    - `w, h, n` scelti dall'utente
    - Le mine non si sovrappongono
- Mostrare la matrice
- In un ciclo
    - Chiedere all'utente una posizione `x, y`
    - Contare quante mine sono presenti nelle 8 celle intorno alla posizione

>

Scegliere il tipo di matrice da utilizzare

---

# 7.7 FroggerGame e FroggerGui, opzionali

- Classe `FroggerGame`, per gestire il gioco Frogger
    - Inizializzare i personaggi, prendendo i dati da un file di configurazione
    - Incapsulare personaggi e arena
    - Controllare la conclusione della partita, positiva o negativa
    - Guardare l'esempio nei commenti in `bounce_anim`
- Classe `FroggerGui` per la rappresentazione del gioco
    - Disegno immagini e funzionalità legate a `g2d`
    - Metodi `update`, `key_down` e `key_up`
    - Prendere spunto da `BoardGameGui`

---

# Esercitazione 8 (11-19)

---

![](images/dev/cpp.svg)
# Esercizi C++

- Es. 2.3
- Es. 4.3
- Es. 3.2
- Es. 4.5

---

![](images/misc/minesweeper.png)
# 8.5 Campo minato in C++, gioco

- Incapsulare il gioco *Campo minato* in una classe
    - Riprendere l'esercizio 7.6
    - Parametri del costruttore: righe e colonne della matrice, numero di mine
    - Metodi `play_at`, `get_val`
    - Utilizzare il gioco da console testuale
- A ogni turno, l'utente sceglie una cella
    - Mostrare la matrice, con tutti e soli i conteggi fatti nelle celle già scelte
    - Non mostrare le celle non ancora scelte

>

Scegliere il tipo di matrice da utilizzare; ad esempio, numeri negativi per mine e celle coperte

---

![](images/misc/minesweeper.png)
# 8.6 Campo minato in C++, conclusione

- Riprendere l'es. 8.5
- Rendere il gioco una sottoclasse di `BoardGame`
    - Implementarne tutti i metodi
- Conclusione della partita
    - Se viene scoperta una mina, la partita è persa
    - Se rimangono coperte solo le mine, la partita è vinta

---

![](images/fun/knight-moves.svg)
# 8.7 Percorso del cavallo, suggerimento

- In *Python*, riprendere l'esercizio 6.5
- Implementare il metodo `flag_at`
    - A partire dall'ultima cella occupata, fare una sola mossa al posto dell'utente
    - Tra le celle raggiungibili, scegliere quella più chiusa (con meno alternative successive)

>

https://en.wikipedia.org/wiki/Knight's_tour#Warnsdorf's_rule

---

# Esercitazione 9 (11-26)

---

![](images/dev/cpp.svg)
# Esercizi C++

- Es. 6.2
- Es. 5.2
- Es. 5.3 -- Usare un `vector<Vehicle*>`
- Es. 4.8 del 2015 -- Partire dall'esempio “nodes”, fornito

---

![](images/misc/minesweeper.png)
# 9.5 Campo minato, ricorsione

- *In C++*, riprendere l'esercizio 8.6
- Nel metodo `play_at`
    - Se viene scoperta una cella con valore 0, non ci sono mine attorno
    - ⇒ Chiamare `play_at` sulle celle coperte attorno
- Usare la classe C++ tramite la gui Python, fornita

---

![](images/misc/artificial-intelligence.png)
# 9.6 Percorso del cavallo, backtracking

- In *Python*, riprendere l'esercizio 7.7
- Implementare il metodo `flag_at`
    - Partire dalla situazione di gioco attuale
    - Usare il *backtracking* per cercare una soluzione
    - Se esiste una soluzione, fare una sola mossa al posto dell'utente

>

Per migliorare le prestazioni, a ogni scelta, ordinare le alternative dando priorità alle celle più chiuse
<br>
https://en.wikipedia.org/wiki/Knight's_tour#Warnsdorf's_rule

---

# Esercitazione 10 (12-03 *)

---

![](images/misc/triangle-notations.svg)
# 10.1 Classe dei triangoli in C++

- Scrivere una classe `Triangle` per rappresentare dei triangoli
- Parametri del costruttore: lunghezze dei lati `a, b, c`
- Fornire metodi `perimeter` e `area` (Erone)
- Nella parte principale del programma:
    - Creare un oggetto triangolo, con lati forniti all'utente
    - Invocare i metodi `area` e `perimeter` sull'oggetto
    - Infine mostrare l'area e il perimetro del triangolo

>

Formula di Erone: `area = √(s * (s-a) * (s-b) * (s-c))`
<br>
Con `s = (a + b + c) / 2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>
<br>
Per `sqrt`, includere `<cmath>`

---

![](images/hist/caesar-cipher.jpg)
# 10.2 Cifrario di Cesare in C++

- Ogni lettera è sostituita dalla lettera che la segue nell'alfabeto dopo 3 posti (o `n` posti, *chiave* del cifrario)
    - `A` sostituita da `D`; `B` da `E` ecc.
    - Per le ultime lettere, si ricomincia a ruota, dalla `A`
    - Chiaro `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    - Cifrato `DEFGHIJKLMNOPQRSTUVWXYZABC`
- Chiedere all'utente `n`, *chiave* del cifrario
- Cifrare l'input da console, riga per riga, e scriverlo in un file
- Cifrare le sole lettere minuscole e maiuscole
    - Lasciare inalterati gli altri caratteri

>

Ricordarsi che in C++ vale: `char('a' + 3) == 'd'`

---

![](images/misc/characters.png)
# 10.3 Conteggio delle lettere in C++

- Leggere un intero testo da un file
- Calcolare la percentuale di ogni singola lettera dell'alfabeto
    - Quante `A`? Quante `B`? ecc.
- Considerare nel totale le sole lettere dell'alfabeto, senza cifre e altri simboli
- Conteggiare assieme le stesse lettere, scritte sia in maiuscolo che minuscolo
    - `A` assieme a `a`; `B` assieme a `b`; ecc.

---

![](images/misc/triangle-notations.svg)
# 10.4 Gestione triangoli in C++

- Riusare la classe `Triangle` dell'esercizio 10.1
- Gestire una lista di triangoli, come `vector<Triangle*>`
- Ciclicamente, permettere all'utente di effettuare una delle seguenti operazioni:
    - Aggiungere un nuovo triangolo
    - Rimuovere un triangolo esistente, dato il suo indice (ricordarsi `delete`)
    - Calcolare la somma delle aree di tutti i triangoli

``` cpp
delete triangles[i];  // remove triangle from memory
triangles.erase(begin(triangles) + i);  // remove pointer from vector
```

---

![](images/hist/eratostenes.jpg)
# 10.5 Crivello di Eratostene in C++

- Definire e testare funzione che calcola la lista di numeri primi fino a `n`
    - Parametro: `n`
    - Risultato: `vector<int>`
- Algoritmo
    - Inserire i numeri da `2` a `n` in una lista
    - Per ciascun numero `x` nella lista...
    - Togliere dalla lista i multipli di `x` (escluso `x` stesso)
    - I numeri rimanenti sono i numeri primi cercati

>

Usare il metodo `erase` di `vector`, oppure usare un `vector<bool>`
<br>
Attenzione, non rimuovere o inserire elementi in un ciclo `for (val : seq)`
<br>
[Esempio Python, su GitHub](https://github.com/tomamic/fondinfo/blob/master/exercises/e3_2013_8_eratosthenes.py)

---

![](images/misc/minesweeper.png)
# 10.6 Campo minato, bandiere

- Consentire all'utente di posizionare bandiere su celle *coperte*
    - L'utente suppone la presenza di una mina
- Implementare il metodo `flag_at` di `BoardGame`

---

![](images/misc/minesweeper.png)
# 10.7 Campo minato, automatismi

- Se l'utente usa il metodo `flag_at` su una cella *già scoperta*
    - Se attorno ci sono bandiere pari alle mine contate
    - ⇒ Chiamare `play_at` sulle celle coperte attorno
- Se l'utente usa il metodo `flag_at` su una cella *già scoperta*
    - Se attorno ci sono bandiere e celle coperte pari alle mine contate
    - ⇒ Chiamare `flag_at` sulle celle coperte attorno
