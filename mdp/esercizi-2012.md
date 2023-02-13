![](images/dev/geek-girl.svg)
# Esercizi 2012
## Introduzione alla programmazione

---

# Esercitazione 1

---

![](images/misc/handshake.png)
# 1.1 Hello, user!

- Compilare ed eseguire il programma “`Hello world`”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![](images/misc/snow-ball.png)
# 1.2 Sfera

- Chiedere all'utente il raggio di una sfera e la sua densità (in Kg/m³)
- Calcolare e visualizzare la superficie, il volume e il peso della sfera

>

Definire le variabili necessarie (nomi in minuscolo)
<br>
Definire una costante PI = 3.14159
<br>
Formule utili: V = (4/3)πR³ ; S = 4πR²

---

![](images/misc/characters.png)
# 1.3 Caratteri ASCII

- Leggere un carattere
- Se è una lettera minuscola, visualizzare la corrispondente lettera maiuscola
- Altrimenti visualizzare il carattere immutato

>

Nel codice non usare esplicitamente i codici ASCII, ma simboli tra apici singoli (`'a'`, `'z'` ecc.)
<br>
La distanza di una lettera minuscola dalla corrispondente maiuscola è una costante che vale `'a' - 'A'`

---

![](images/misc/resistors.png)
# 1.4 Resistenze, ciclo

- Leggere, attraverso un ciclo, una sequenza di valori di resistenze elettriche
- La sequenza termina quando l'utente immette il valore 0
- Alla fine, visualizzare la resistenza equivalente, sia nel caso di resistenze disposte in serie, che in parallelo

>

Formule utili:
<br>
Rₛ = ∑ Rᵢ
<br>
1/Rₚ = ∑ (1/Rᵢ)

---

![](images/misc/three-brothers.png)
# 1.5 Minore e maggiore

- Chiedere all'utente tre numeri interi: `a`, `b`, `c`
- Determinare qual è il minore dei tre
- Determinare qual è il maggiore dei tre

>

Controllare prima di tutto se `a` è minore degli altri due
<br>
Altrimenti controllare se `b` è minore di `c`
<br>
Altrimenti ...

---

![large](images/misc/gold-price.svg)
# 1.6 Massimo e minimo

- Leggere, attraverso un ciclo, una sequenza di numeri interi
- La sequenza termina quando l'utente inserisce il valore 0
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

---

![large](images/misc/gold-price.svg)
# 1.7 Chiusura stream

- Leggere, attraverso un ciclo, una sequenza di numeri interi
- La sequenza termina quando l'utente chiude lo stream della console
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

>

L'utente chiude lo stream della console premendo:
<br>
`CTRL-Z` (Windows)
<br>
`CTRL-D` (Unix ecc.)

---

# Esercitazione 2

---

![](images/misc/measure-tape.png)
# 2.1 Lunghezza parole

- Leggere una sequenza di parole, attraverso un ciclo
- La sequenza termina quando l'utente chiude lo stream
- Visualizzare la lunghezza della parola più lunga e di quella più corta

---

![](images/misc/countdown.png)
# 2.2 Conteggio a ritroso

- Leggere un numero positivo `n`
- Per ciascun valore `y` tra `n` ed 1...
- Stampare una riga con `y` ripetizioni di `y`

``` text
4444
333
22
1
```

>

Usare due cicli for annidati
<br>
All'inizio fissare `y` pari ad un certo valore e scrivere una sola riga; es.: `y = 4 → “4444”`
<br>
Poi racchiudere tutto in un ciclo for esterno, per variare `y`:
<br>
`y` parte da `n`, arriva ad 1, ad ogni passo decresce di 1

---

![](images/repr/finger-counting.png)
# 2.3 Conteggio spazi

- Leggere una riga di testo
- Contare il numero di spazi presenti
- Se si incontra un carattere di tabulazione, contarlo come 4 spazi

---

![](images/misc/search.png)
# 2.4 Parentesi

- Leggere una riga di testo
- Scrivere in output solo le porzioni di testo comprese tra parentesi graffe
- Scrivere ciascuna porzione di testo su una riga
- Es. `“Bla bla {Hei!} bla {How boring!}” → Hey! How boring!`

>

Segnare in una variabile booleana se si è all'interno delle parentesi

---

![](images/misc/three-cards.png)
# 2.5 Tre carte

- All'inizio l'utente ha 10 monete
- Ad ogni turno:
    - Viene estratto a sorte un numero segreto tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

---

![](images/misc/wall-calendar.png)
# 2.6 Calendario a muro

- L'utente inserisce:
    - La lunghezza del mese (28-31)
    - Il primo giorno del mese <br> (lunedì=0 ... domenica=6)
- Visualizzare il calendario del mese
    - In prima colonna la data
    - In seconda colonna il giorno della settimana (0-6)

>

Scrivere una intera riga alla volta (numero progressivo e giorno della settimana)
<br>
Si può sfruttare l'operatore `%` (resto della divisione)

---

![](images/misc/calendar-rows.jpg)
# 2.7 Calendario da tavolo

- L'utente inserisce:
    - La lunghezza del mese (28-31)
    - Il primo giorno del mese <br> (lunedì=0 ... domenica=6)
- Visualizzare il calendario del mese
    - Disporre i giorni in una griglia, una riga alla volta
    - 7 colonne, la prima per i lunedì, l'ultima per le domeniche

>

Procedere sempre una riga alla volta (come macchina da scrivere)

---

# Esercitazione 3

---

![](images/misc/delete-key.png)
# 3.1 Righe su file

- Leggere testo da console, una riga alla volta
- Riscrivere il testo in un file, ma...
- Escludere le righe che contengono dei numeri

---

# 3.2 Valori da file

- Chiedere all'utente di definire un range di valori interessanti (fornendo max e min)
- Leggere da un file di testo una sequenza di valori interi (fino alla fine del file)
- Scartare i valori esterni al range definito dall'utente
- Scrivere a console i valori utili, ma in ordine inverso rispetto al file

>

Memorizzare tutti i valori utili in una lista

---

![](images/misc/agenda.svg)
# 3.3 Agenda

- Gestire una agenda per la giornata corrente (per ogni ora ci può essere una sola attività)
- Ciclicamente, l'utente può:
    - Inserire una nuova attività (indicandone l'ora e la descrizione)
    - Oppure rimuovere una attività dalla lista (indicandone l'ora)
- Al termine, visualizzare la lista delle attività, con ora e descrizione (omettendo le ore libere)

>

Usare una lista di 24 stringhe

---

![](images/misc/agenda.svg)
# 3.4 Agenda su file

- In aggiunta all'esercizio precedente...
- Prima della chiusura del programma, scrivere la lista di attività in un file
(come a console, omettendo le ore libere)
- Ricaricare automaticamente la lista da file, se esistente, all'avvio del programma

---

# 3.5 Mescolamento valori

- Leggere due valori, `w` e `h`; calcolare `n = w * h`
- Creare una lista di lunghezza `n`
- Riempirla con valori crescenti, a partire da 0
- Visualizzare le celle a console, su `h` righe
- Mescolare la lista
- Visualizzare nuovamente le celle su `h` righe
- Salvare la lista in un file, sempre su `h` righe

>

Mescolamento: per ogni cella, scegliere casualmente una nuova posizione; scambiare quindi il valore nella cella di origine con quello nella cella di destinazione

---

![](images/misc/birthday.png)
# 3.6 Compleanni

- Un file elenca i compleanni degli amici. Ogni riga contiene:
    - Il giorno del compleanno (testo con possibili spazi)
    - Dopo TAB, il nome dell'amico (testo con possibili spazi)
    - Dopo TAB, un commento (testo arbitrario, da scartare)
- Caricare tutti i dati utili in una map
- Ciclicamente, chiedere all'utente il nome di un amico e mostrare il giorno del compleanno

---

![](images/misc/calendar-cols.jpg)
# 3.7 Calendario trasposto

- L'utente inserisce:
    - La lunghezza del mese (28-31)
    - Il primo giorno del mese <br> (lunedì=0 ... domenica=6)
- Visualizzare il calendario del mese
    - Disporre i giorni in una griglia, una colonna alla volta
    - 7 righe, la prima per i lunedì, l'ultima per le domeniche

>

Si scrive sempre una riga alla volta (come macchina da scrivere: →, ↓)
<br>
Ma ∀ (x, y) si calcola il numero da visualizzare
<br>
Bastano due cicli for annidati, senza liste

---

# Esercitazione 4

---

![](images/misc/heater.png)
# 4.1 Funzione, potenza dissipata

- Scrivere una funzione per calcolare la potenza dissipata da un resistore
    - Parametri: *resistenza* e *differenza di potenziale* applicata, entrambi come `float`
    - Risultato: potenza dissipata come float
- Nel `main`:
    - Chiedere all'utente due valori
    - Poi invocare la funzione con questi parametri
    - Visualizzare infine (sempre nel `main`) il risultato restituito dalla funzione (`P = V²/R`)

---

# 4.2 Classe degli esami

- Scrivere una classe `Exam` per rappresentare gli esami sostenuti in un corso di studio
    - Parametri del costruttore: *nome esame*; *numero crediti*; *data* (es. “`2012-10-14`”); *voto* (da 18 a 30)
- Fornire un metodo pubblico `estimateWork` per stimare le ore di studio, supponendo che...
    - Ad ogni credito corrispondano ~ 25h di studio
    - Il voto sia direttamente proporzionale allo studio
- Nel `main`, istanziare un esame con valori forniti all'utente, invocare il metodo e mostrare il valore stimato

>

Tenere l'uso della console per I/O fuori dalla classe!

---

![](images/misc/battleship.png)
# 4.3 Battaglia navale

- Allocare una matrice `rows×cols` (dimensioni scelte dall'utente)
- Ripetutamente...
    - Chiedere all'utente un numero size
    - Riempire con '`+`' un numero size di celle adiacenti (direzione e posizione di partenza casuali)
    - Accettabili inserimenti sovrapposti o parziali, fino a bordo
    - Mostrare la matrice risultante
- Al termine salvare la matrice in un file di testo

>

Si può usare una lista come pseudo-matrice, oppure una lista di liste

---

# 4.4 Lettura matrice da file

- Supponendo che il programma precedente salvi nel file solo il contenuto della matrice, riga per riga...
- Leggere i caratteri dal medesimo file e memorizzarli in una matrice
- Inferire le dimensioni della matrice (`rows×cols`) in base a:
    - Numero di righe del file
    - Lunghezza di ciascuna riga

---

![](images/misc/spiral.png)
# 4.5 Spirale

- Scrivere una funzione per riempire di numeri crescenti una matrice quadrata (o rettangolare)
- Seguire il percorso a spirale suggerito nella figura a fianco
- Dimensioni della matrice indicate dall'utente a runtime

>

Tenere traccia della direzione attuale (*∆y*, *∆x*) <br>
Avanzare fino al bordo o ad una cella già visitata, <br>
poi cambiare la direzione in senso orario

---

# 4.6 Elenco di esami

- Gestire una lista di esami
- Ripetutamente chiedere all'utente di scegliere tra:
    - Aggiunta di un nuovo esame
    - Eliminazione di un esame esistente
    - Calcolo delle ore complessive di studio
- Al termine di ogni operazione dell'utente, visualizzare l'elenco aggiornato di tutti gli esami

---

# 4.7 Esami in ordine

- In aggiunta all'esercizio 4.6, ordinare (e visualizzare) gli esami in base al tempo di studio stimato

>

Usare il metodo `sort` delle liste, sfruttando il parametro `key` <br>

---

# Esercitazione 5

---

![](images/misc/battleship.png)
# 5.1 Battaglia in classe

- Classe per incapsulare le funzionalità dell'es. 4.3
- Il costruttore riceve `rows`, `cols` e alloca la matrice
- Metodo per l'inserimento casuale di una nave di dimensione `size` (`size` parametro del metodo)
- Metodo per la rappresentazione testuale dello stato su generico stream
- In `main`: creare un oggetto, inserire diverse navi a scelta dell'utente, infine scrivere la matrice su file

---

![](images/misc/cubic-function.png)
# 5.2 Bisezione, iterazione

- Trovare lo zero di una funzione
    - *f(x) = x³ – x – 1, per 1 ≤ x ≤ 2*
    - Trovare *x* t.c. *|f(x)| < 0.001*
- Dimezzare ripetutamente l'intervallo considerato:
    - Variabili per inizio e fine intervallo di ricerca
    - All'inizio: `min = 1; max = 2;`
    - Si pone la stima `x` a metà intervallo e si calcola `f(x)`
    - Se l'errore è accettabile, `x` è il risultato
    - Altrimenti se `f` cambia segno tra `min` ed `x`, si ripete il ciclo considerando solo la prima metà dell'intervallo
    - Altrimenti solo la seconda metà (da `x` ad `max`)

---

![](images/misc/cubic-function.png)
# 5.3 Bisezione, ricorsione

- Trovare lo zero della seguente funzione matematica
    - *f(x) = x³ – x – 1, per 1 ≤ x ≤ 2*
    - Trovare *x* t.c. *|f(x)| < 0.001*
- Definire una funzione ricorsiva di bisezione
    - Parametri necessari: *inizio intervallo* di ricerca, *fine intervallo* di ricerca
    - Invocare ad ogni livello la funzione su un intervallo dimezzato

---

# 5.4 Contenimento, studenti ed esami

- Scrivere una classe `Student`
    - `name, surname, code`: stringhe
    - `exams`: lista di oggetti `Exam`
- Costruttore: dati anagrafici come parametri
- Metodi per aggiunta e rimozione esami
- Creare nel `main` un oggetto studente
- Permettere all'utente di gestire gli esami dello studente
    - Aggiunta
    - Rimozione

---

# 5.5 Composizione, studenti ed esami

- `Exam`, metodi di lettura/scrittura stato su stream testuale
- Aggiungere alla classe `Student`:
    - Metodo per lettura e metodo per scrittura su stream: leggere/scrivere tutti i dati anagrafici e tutti gli esami
    - Metodo per stimare il tempo totale di studio
- Istanziare uno studente, caricando i dati da file
- Permettere all'utente di aggiungere/rimuovere esami
- Infine salvare dati anagrafici ed esami su file

---

![](images/misc/battleship.png)
# 5.6 Navi ben poste

- Aggiungere all'es. 5.1...
- Un metodo intelligente per il posizionamento casuale di navi
- La nave è posizionata solo se ci sono sufficienti celle libere, senza sovrapposizioni

>

Provare a realizzare il metodo sfruttando la ricorsione (ciascuna cella è riempita solo se è possibile riempire quella successiva)
<br>
Altrimenti basta contare le celle libere prima di riempirle

---

![](images/misc/shining-maze.jpg)
# 5.7 Labirinto

- Leggere da file un labirinto, con muri, punto di partenza e punto di arrivo
- Incapsulare la matrice (di caratteri?) in una classe
- Fornire un metodo per la rappresentazione testuale dello stato
- Fornire un metodo `move` (senza parametri) per avanzare di un passo, alla ricerca dell'uscita
- In `main`: chiamare ciclicamente `move` e poi visualizzare lo stato

>

Es. Avanzare seguendo il muro alla propria sinistra
<br>
<http://blockly-demo.appspot.com/blockly/demos/maze/index.html>

---

# Progetto 1

---

# Progetto 1

- **Classe** per incapsulare dati e regole di un gioco
    - **Campi privati** + **metodi pubblici** (e *privati*)
- Inizialmente, I/O tramite console...
    - Ma ciclo principale e interazione con l'utente vanno tenuti *al di fuori della classe*

---

![](images/misc/othello.png)
# Othello

- Due giocatori, bianco e nero
    - All'inizio: 2 pedine bianche e 2 nere nelle celle centrali, incrociate
- A turno, ciascun giocatore aggiunge una pedina
    - Se, tra la nuova pedina ed un'altra pedina dello stesso giocatore, c'è una **fila continua** di pedine avversarie, queste cambiano tutte colore (vale nelle 8 direzioni)
    - Si può mettere una pedina solo in una cella vuota, solo se si **catturano** pedine avversarie
- Se non ci sono mosse, si passa il turno
    - Ma, se ci sono mosse, non si può passare
- Vince chi alla fine ha più pedine

---

# Othello - Metodi base per...

- **Giocare**: inserire una nuova pedina in una cella
    - Verificare se la mossa è possibile
    - Cambiare colore a tutte le pedine catturate
    - (Sfruttare, se possibile, la ricorsione)
- **Scrivere** lo stato del gioco su uno stream generico
- *Aggiungere inoltre le seguenti funzionalità...*
    - Poter passare il turno, se non ci sono mosse
    - Giocare su tavole di diverse dimensioni
    - Leggere lo stato del gioco da uno stream generico

>

Partita tra due utenti, non contro il computer!

---

# Othello - Bozza della classe

``` c++
class Othello {
public:
    Othello(int rows, int cols); // custom board
    bool play(int y, int x);
    // place disc and capture
    void write(ostream & out);
    bool pass();
    bool isFinished();
    void read(istream & in);
    // consider: char get(int y, int x)
    // getCurrentPlayer, getRows, getColumns ...
private:
    // consider: void set(int y, int x, char value) ...
}
```

---

![](images/dev/recycle.png)
# Othello - GUI

- Aggiungere una **interfaccia grafica** al progetto
    - Creare una sottoclasse di `QWidget` o `QMainWindow`
    - Evidenziare il giocatore di turno e le mosse possibili
    - Permettere di salvare/caricare una partita in un file
    - Interfaccia adattabile a dimensioni diverse del gioco
- **Riuso** - Classe di modello definita in modo generico
    - Usabile sia da interfaccia grafica che da console

---

# Othello - Bozza della GUI

``` c++
class OthelloGui : public QWidget {
    Q_OBJECT
public:
    OthelloGui(Othello* game);
private slots:
    void controlButtons(int i);
private:
    void updateAllButtons();
    void checkFinished();
    // ...
    QButtonGroup* buttons;
    Othello* game;
};
```

---

![](images/misc/handwriting.jpg)
# “Bella copia”

- Codice leggibile e ben organizzato
- Usare **costanti**, anziché valori numerici “*magici*” sparsi nel codice
- Nomi semplici ed **esplicativi** + regole di **stile**:
    - `nomeVariabile`, `nomeFunzione`, `NomeClasse`, `NOME_COSTANTE`
- **Indentazione**, parentesi ecc.
- **No copia&incolla** del codice
    - Funzioni parametrizzate e/o cicli
- Programmazione strutturata
    - Un solo `return`, a fine funzione; niente `break` nei cicli

---

![](images/misc/artificial-intelligence.png)
# Estensioni opzionali

- Suggerire / giocare mossa migliore
    - Valutare numero di pedine
    - Pedine + sicure: in angolo e collegate, sui bordi
    - Ricorsione minimax per analisi albero delle mosse
- Migliorare l'interfaccia utente
    - Menù e/o barra degli strumenti (`QMainWindow`)
    - Comandi per suggerimenti (di diverso livello)
- 5 pedine rosse “Stop!” per ogni giocatore
    - Sostituiscono la nuova pedina al termine della mossa
    - Bloccano catture successive (muro neutro)

---

# Mossa migliore: minimax

``` c++
int Othello::minimax(int depth) {
    int bestScore = -999; // bestY = -1; bestX = -1;
    if (!isFull() && depth > 0) {
        for (int y...) for (int x...) if canPlay(y, x) {
            Othello copy = *this; // copy the whole game
            copy.play(y, x); // play and change player
            // recursion, change the sign of the result
            int score = -copy.minimax(depth – 1);
            if (score > bestScore) {
                bestScore = score; // bestY = y; bestX = x;
            }
        } // if no moves: bestScore is very low!
    } else {
        bestScore = heuristic(); // how strong is current plr?
    }
    return bestScore;
}
```

---

# Progetto 2

---

# Progetto 2

- Realizzare un gioco con diversi personaggi
    - Classe per partita
    - Classe base astratta (e sottoclassi) per personaggi
- **Polimorfismo** nei vari personaggi, per:
    - Il movimento
    - L'interazione reciproca

---

![](images/misc/invaders.png)
# Space invaders

- **Cannone**: guidato dall'utente
    - Si sposta in orizzontale ← / →
    - Può sparare verso l'alto, contro gli alieni
- **Alieni**: si muovono tutti nella stessa direzione ← / →
    - Se uno di loro arriva al bordo, *al turno successivo* scendono tutti di un passo e invertono la direzione
    - Possono sparare verso il basso, contro il cannone
- **Muri**: si ditruggono lentamente dove colpiti

>

È fornito un semplice framework di esempio

---

# Space invaders - Opzionale

- Movimento dei personaggi libero e fluido (non su una griglia rigida, ma su qualsiasi pixel)
- Il cannone rimane sempre ancorato a terra...
- `QGraphicsScene + Item + View`, oppure...
- `QPainter + QWidget::paintEvent`

>

Mantenere un ciclo simile a `Game::tick` e il polimorfismo di `Actor::move` e `Actor::collide`

Non mischiare nelle stesse classi la logica e la rappresentazione del gioco

---

# Space invaders - Estensioni

- **Due cannoni** contemporaneamente in gioco
- I personaggi possono occupare **più celle**
    - Es. 2 celle per gli alieni e 3 per i cannoni
- **Icone** al posto del testo nelle label (`QPixmap`, o stile)
- Altri **personaggi** *a fantasia*, per esempio:
    - Base madre aliena, se colpita dà vita e/o bonus
    - Alieni speciali, distrutti solo dopo alcuni colpi
- Completamento di varie **missioni**
    - Conteggio del tempo e assegnazione bonus finale
    - Vari bonus *a fantasia*, per punti, tempo, vite ecc.

