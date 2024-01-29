![](images/dev/geek-girl.svg)
# Esercizi 2015
## Introduzione alla programmazione

---

# Esercitazione 1

---

![](images/misc/handshake.svg)
# 1.1 Hello, user!

- Compilare ed eseguire il programma “`Hello world`”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

# 1.2 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400

---

# 1.3 Divisori

- Chiedere all'utente un numero `n`
- Trovare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

---

![](images/misc/characters.png)
# 1.4 Carattere Unicode

- Chiedere all'utente un numero
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

>

Non c'è input dell'utente

---

# 1.6 Media quadratica

- Chiedere all'utente, attraverso un ciclo, una sequenza di numeri interi
- La sequenza termina quando la somma dei quadrati dei numeri supera 100
- Visualizzare il numero di valori inseriti e la loro media quadratica

>

Media quadratica: `√(∑(xᵢ²)/n)` <br>
Per la radice, usare la funzione `sqrt` oppure elevare a esponente `0.5` <br>
All'inizio del programma: `from math import sqrt`

---

# 1.7 Multipli di 3 o 5

- Chiedere all'utente un numero `n`
- Calcolare la somma di tutti i multipli di 3 o 5 strettamente minori di `n`

>

Es. `n = 10`. Se elenchiamo tutti numeri minori di 10 che sono multipli di 3 o 5, otteniamo 3, 5, 6 e 9. La somma di questi multipli è 23 <br>
Un numero `x` è multiplo di 3 se `x % 3 == 0`

>

Ispirato da: <https://projecteuler.net/problem=1>

---

![](images/fun/fib-rabbits.png)
# 1.8 Fibonacci

- Successione di Fibonacci
    - Ogni nuovo elemento nella successione di Fibonacci è ottenuto sommando i due precedenti
    - Partendo con 1 e 1, i primi elementi saranno:
    - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
- Chiedere all'utente due numeri: `n` e `x`
- Mostrare tutti i numeri di Fibonacci minori di `n`
- Inoltre, calcolare la somma di tutti quelli divisibili per `x`

>

Ispirato da: <https://projecteuler.net/problem=2>

---

![](images/misc/monster.png)
# 1.9 La stanza del mostro

- Il giocatore si muove su una scacchiera di 5x5 celle, partendo da un angolo
    - Le righe e le colonne sono numerate da 0 a 4
- Un tesoro e un mostro sono nascosti in posizione casuale, all'inizio del gioco
- A ogni turno, il giocatore:
    - Sceglie una direzione verso cui spostarsi (alto, basso, sinistra, destra)
    - Se capita sulla cella del tesoro, ha vinto
    - Se capita sulla cella del mostro, ha perso

``` py
from random import randrange
# ...
monster_x = randrange(5)  # something between 0 and 4
monster_y = randrange(5)  # something between 0 and 4
```

---

# Esercitazione 2

---

![](images/misc/numbers.png)
# 2.1 Conteggio di cifre

- Chiedere una riga di testo all'utente
- Contare il numero complessivo di cifre presenti

>

Usare un ciclo `for` sulla stringa

---

![](images/misc/numbers.png)
# 2.2 Conteggio di singole cifre

- Chiedere una riga di testo all'utente
- Contare separatamente le occorrenze di ciascuna cifra (da `'0'` a `'9'`)

>

Creare una lista (array) di 10 elementi, inizialmente tutti posti a `0`

Ciascun elemento è il contatore per una certa cifra

Attenzione alla distinzione tra il tipo `str` e il tipo `int`!

---

![](images/misc/pythagorean-theorem.png)
# 2.3 Funzione, ipotenusa

- Scrivere una funzione per il calcolo dell'ipotenusa di un triangolo rettangolo
    - Parametri: due cateti come `float`
    - Risultato: ipotenusa come `float`
- Nella parte principale del programma:
    - Chiedere all'utente due valori
    - Poi invocare la funzione con questi parametri
    - Infine mostrare all'utente il risultato

>

`sqrt` in modulo `math`

---

![](images/misc/red-circles.svg)
# 2.4 Cerchi concentrici

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
    - Dal rosso del livello più esterno
    - Fino al nero del livello più interno

>

Cominciare a disegnare un grosso cerchio rosso
<br>
Poi, inserire l'operazione di disegno un ciclo, togliendo a ogni passo `10` (p.es.) al raggio e al livello di rosso
<br>
Infine, determinare automaticamente, prima del ciclo, le variazioni migliori per raggio e colore

---

![](images/misc/color-grid.svg) ![](images/oop/raster-tile.png)
# 2.5 Griglia di colori

- Chidere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- In orizzontale, aumentare gradatamente la componente di blu
- In verticale, aumentare gradatamente la componente di verde

>

Cominciare a creare una griglia di riquadri tutti neri, con due cicli `for` annidati
<br>
Lasciare tra i riquadri un piccolo margine

---

![](images/misc/histogram.svg)
# 2.6 Istogramma

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Mostrare un istogramma corrispondente
    - Regolare l'altezza e la larghezza dei rettangoli in base alle dimensioni della finestra
    - Lasciare un margine tra i rettangoli

---

![](images/misc/histogram.svg)
# 2.7 Istogramma in grigio

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Per ciascun valore, chiedere anche un livello di grigio (0-255)
- Mostrare un istogramma
    - Barre di diversi colori (grigi) e diverse altezze
    - A seconda dei valori e livelli di grigio scelti dall'utente

---

![large](images/repr/ascii.svg)
# 2.8 ASCII su più colonne

- Visualizzare la tabella dei codici ASCII
- Codici da 32 a 126
- Sistemare 10 coppie codice/carattere per ogni riga
- *Opzionalmente*: disporre i codici in progressione verticale, prima che orizzontale
    - Coppie disposte sempre su 10 colonne

>

Si procede sempre come macchina da scrivere (una riga sotto l'altra)
<br>
Ma `∀ (x, y)` si calcola il codice desiderato: `code=32+y·w+x`
<br>
`w` è il numero di colonne, in questo caso 10
<br>
Bastano due cicli for annidati, senza liste

---

![](images/hist/eratostenes.jpg)
# 2.9 Crivello di Eratostene

- Trovare tutti i numeri primi fino a `n`, scelto dall'utente
- Algoritmo
    - Creare una lista di `bool`, tutti inizialmente a `True`
    - Per ciascun numero `x` tra `2` e `n` (ancora a `True` nella lista)...
    - Mettere a `False` i multipli di `x` (escluso `x` stesso)
    - Gli elementi rimasti a `True` sono i numeri primi cercati

>

Usare una lista di `int` è problematico e inefficiente

---

# Esercitazione 3

---

![](images/misc/holly-benji.jpg)
# 3.1 Classe dei calciatori

- Scrivere una classe `SoccerPlayer` per rappresentare dei calciatori
- Dati: nome completo, numero di maglia, giorno mese e anno di nascita
- Il costruttore riceve tutti i dati necessari
- Fornire un metodo pubblico `age` per calcolare l'età
    - Parametri: giorno, mese e anno correnti
- Nella parte principale del programma:
    - Creare un oggetto calciatore, con dati forniti all'utente
    - Chiedere all'utente la data attuale
    - Invocare il metodo `age` per conoscere l'età del calciatore

>

Distinguere bene campi dell'oggetto, parametri dei metodi, variabili esterne

---

![](images/misc/holly-benji.jpg)
# 3.2 Squadra di calcio

- Creare una lista di calciatori (oggetti es. 3.1)
- Ciclicamente, chiedere i dati di ciascun calciatore all'utente
    - Inserire il nuovo oggetto calciatore nella lista (`append`)
    - Ma prima controllare che il numero di maglia non sia già stato assegnato
- Al termine, mostrare all'utente la lista dei calciatori (con nome e num. maglia) e poi la loro età media

>

Aggiungere un metodo `number`, per ottenere il numero di maglia
<br>
Aggiungere un metodo `name`, per ottenere il nome completo

---

![](images/misc/frogger.png)
# 3.3 Movimento ciclico

- Partire dal classico ciclo di una applicazione *PyGame*
- Fare in modo che un rettangolo si muova orizzontalmente sullo schermo, avanzando di `10` pixel alla volta
    - Gestire sia il movimento verso destra che verso sinistra, a seconda del segno di una costante `dx`
- Partire dalla posizione `x = 100, y = 10`
- Seguire un percorso ciclico
    - Quando il rettangolo esce dallo schermo, rientra dalla parte opposta
- *Opzionalmente*, fare in modo che lo spostamento sia calcolato in una funzione, con gli opportuni parametri
    - Non usare alcuna variabile globale

---

![](images/misc/frogger.png)
# 3.4 Classe delle macchine

- Creare una classe `Car`, che contenga la posizione e la direzione di una macchina
    - Campi privati: `x`, `y`, `dx`
    - Metodo `move`, per avanzare (movimento ciclico in orizzontale, come es. 3.3)
    - Metodo `rect`, per ottenere la posizione attuale
- Istanziare un oggetto `Car` e farlo muovere sullo schermo
    - Chiamare il metodo `move` a ogni ciclo
    - Visualizzare un rettangolo nella posizione corrispondente

>

Definire nella classe delle opportune costanti

---

![](images/misc/frogger.png)
# 3.5 Lista di macchine

- Riusare la classe `Car` (es. 3.4)
- Creare inizialmente una lista di macchine, con posizioni di partenza e direzioni diverse
- Farle avanzare tutte a ogni ciclo, chiamando il metodo `move` di ciascuna di esse
- Visualizzare sullo schermo un rettangolo per ciascuna macchina

---

![large](images/misc/gold-price.svg)
# 3.6 Valori in file

- Leggere tutti i valori contenuti in un file
    - Ogni riga riporta un valore reale
- Visualizzare massimo, minimo e media dei valori letti

---

![](images/misc/histogram.svg)
# 3.7 Istogramma da file

- Mostrare in un istogramma tutti i valori riportati in un file
- Ogni riga contiene quattro numeri
    - il valore da rappresentare (per l'altezza della barra)
    - le componenti R, G, B (per il colore della barra)
- Ciascuna barra verticale potrà essere infatti di colore diverso

>

Leggere prima tutti i valori e memorizzarli in una lista (di tuple)
<br>
In questo modo, sarà noto il numero di barre verticali e lo spazio disponibile a ciascuna (considerando le dimensioni della finestra)

---

![](images/misc/holly-benji.jpg)
# 3.8 Classe delle squadre

- Creare una classe per rappresentare una squadra di calcio
- La squadra deve avere un nome
- La squadra contiene una lista di calciatori (es. 3.1)
- Metodo per aggiungere un calciatore, controllando che il numero di maglia non sia già stato assegnato
- Metodo per rimuovere un calciatore, dato il suo numero di maglia
- Metodo per il calcolo dell'età media

---

![](images/misc/palette-circles.svg)
# 3.9 Tavolozza di colori

- Leggere da un file una sequenza di colori
    - In ogni riga ci sono tre valori, per le componenti R, G, B
    - I colori vengono memorizzati in una lista (di tuple)
- Chiedere all'ultente il numero di cerchi da disegnare
- Disegnare i cerchi in maniera concentrica
    - I colori dei cerchi sono presi in sequenza dalla lista inserita dall'utente
    - Se si esaurisce la sequenza, si ricomincia dal primo colore

---

# Esercitazione 4

---

![](images/fun/matryoshka.png)
# 4.1 Stringhe rovesciate, con ricorsione

- Rovesciare una stringa, sfruttando la ricorsione
- Qualsiasi stringa di lunghezza `0` o `1` rimane uguale quando rovesciata
- Alrimenti, la stringa rovesciata è la concatenazione di:
    - Ultimo carattere della stringa originale
    - Risultato del rovesciamento della stringa originale, con l'esclusione dell'ultimo carattere

---

# 4.2 Classe degli sciatori

- Creare una classe `Skier`, similmente all'es. 3.4
    - Campi privati: `x`, `y`, `dx`, `xmin`, `xmax`
    - Metodo `move`, per avanzare
    - Metodo `rect`, per ottenere la posizione attuale
- Movimento dall'alto verso il basso, a *zig zag* o *slalom* tra `xmin` e `xmax`
- Istanziare un oggetto `Skier` e farlo muovere sullo schermo
    - Chiamare il metodo `move` a ogni ciclo
    - Visualizzare un rettangolo nella posizione corrispondente

---

![](images/misc/frogger.png)
# 4.3 Attori astratti

- Definire una classe base `Actor`
    - Metodo astratto `move`
    - Metodo astratto `rect`
- Ridefinire `Car` (es. 3.4) e `Skier` (es. 4.2) come sottoclassi di `Actor`
- Nel programma principale, creare una lista di personaggi misti (macchine e sciatori)
    - Chiamare il metodo `move` di ciascuno a ogni ciclo
    - Visualizzare un rettangolo nella posizione corrispondente

---

![](images/fun/htree.png)
# 4.4 Albero di H

- Disegnare ricorsivamente un *H-Tree*
    - Dividere l'area iniziale in due parti uguali
    - Connettere con una linea i centri delle due aree
    - Ripetere il procedimento per ciascuna delle due aree
    - Alternare però la divisione delle aree in orizzontale e verticale
- Chiedere all'utente il livello di ricorsione desiderato

``` py
pygame.draw.line(screen, (r, g, b), (x1, y1), (x2, y2))
```

>

<https://www.pygame.org/docs/ref/draw.html#pygame.draw.line>

---

# 4.5 Lettura matrice

- Leggere una matrice di interi da un file testuale CSV
    - *Comma Separated Values*: valori riportati riga per riga e separati da una virgola

``` text
5,7,2,11
1,3,12,9
4,6,10,8
```

- Memorizzare i dati in una lista semplice (pseudo-matrice)
- Inferire le dimensioni della matrice (`rows×cols`) in base a:
    - Numero di righe del file
    - Numero di valori nella prima riga
- A partire dall'angolo in basso a destra, sommare i valori sulla diagonale (`cols - x == rows - y`)

>

Nell'esempio, sommare: `8 + 12 + 7`

---

# 4.6 Lettura in lista di liste

- Come esercizio precedente (4.5)
- Ma memorizzare gli interi in una lista di liste

---

![](images/misc/sample-file-system.png)
# 4.7 Documenti e cartelle

- Un sistema gerarchico di gestione documenti è composto di due tipi di *nodi* (classe base)
    - I *documenti*, caratterizzati da un nome e da un contenuto testuale (classe derivata)
    - Le *cartelle*, caratterizzate da un nome e da una lista di nodi contenuti (classe derivata)
- Creare una gerarchia delle tre classi: `Node`, `Document`, `Folder`
    - Le cartelle dovrebbero avere un metodo `add_node(n: Node)`
- Nel corpo principale del programma, istanziare e organizzare vari nodi (senza input dell'utente)
    - Ricreare con gli oggetti la struttura raffigurata a fianco

---

![](images/misc/sample-file-system.png)
# 4.8 Ultimo aggiornamento

- Aggiungere a tutti i *nodi* (es. 4.7) un metodo `updated`, che riporta la data dell'ultima modifica
- Astratto nella classe base
- Per un *documento*:
    - Restituisce il valore di un apposito campo privato (da aggiungere)
- Per una *cartella*:
    - Restituisce la data di aggiornamento più recente, tra quelle dei nodi contenuti
- Rispetto alla struttura raffigurata a fianco, visualizzare l'ultimo aggiornamento della cartella radice
    - Ottenuto tramite il suo metodo `updated`

---

![](images/misc/cindy1.png) ![](images/misc/cindy2.png)
# 4.9 Puzzle di Cindy

- Piano di gioco: `2n+1` celle allineate
    - Si parte con `n` pedine rosse tutte a sinistra, `n` pedine verdi tutte a destra, e una cella libera in mezzo
    - Le pedine rosse si possono spostare solo a destra, quelle verdi solo a sinistra (senza poter tornare indietro)
- A ogni mossa, una qualsiasi pedina può:
    - Avanzare di una posizione, se davanti ha una cella libera
    - Oppure scavalcare esattamente una pedina dell'altro colore, se c'è una cella libera subito dopo
- L'applicazione deve trovare *automaticamente* le mosse per invertire la posizione di tutte le pedine

>

<http://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html>

---

# Esercitazione 5

---

# Progetto 1

- Gioco con diversi personaggi
    - Fornita classe `Arena` per campo di gioco
    - Fornita classe base astratta `Actor` per personaggi
- Creare sottoclassi di `Actor` per personaggi specifici
    - *Polimorfismo* per movimento
    - *Polimorfismo* per interazione reciproca
- Ma ciclo principale, interazione con l'utente e grafica *fuori da queste classi*
    - Funzionamento con grafica oppure con console testuale

---

![](images/misc/pac-man.png)
# Pac-Man - Personaggi

- *Pac-Man*
    - Guidato dal giocatore, con la tastiera
    - Applica i comandi solo solo agli incroci
- *Fantasmi*
    - Uccidono Pac-Man se lo toccano
    - Agli incroci svoltano casualmente
    - Ma non tornano mai indietro!
- *Biscotti*
    - Pac-Man deve mangiarli tutti, per terminare il gioco
- *SuperBiscotti*
    - Danno per breve tempo a Pac-Man il potere di mangiare i fantasmi

---

# Pac-Man - Controllo dei muri

- *Muri*
    - Possono essere *personaggi*, immobili
    - Non possono essere attraversati da nessuno
    - Sono già disegnati nell'immagine di sfondo (altrimenti, tracciare dei rettangoli pieni)
    - Disposti come blocchetti virtuali di `8×8` pixel, o multipli
    - Metà dimensione di Pac-Man e fantasmi (`16×16` pixel)
- I personaggi possono svoltare solo su coordinate multiple di `8×8` pixel!
    - Se un personaggio urta un muro, si riposiziona fuori dal muro; annulla l'ultimo movimento (`dx, dy`)
    - È fornita una funzione per controllare *a priori* la presenza di un muro in una certa direzione

---

# Esercitazione 6

---

![](images/dev/cpp.svg)
# Esercizi C++

- 1.1 Hello, user!
- 1.5 Tabella ASCII
- 1.9 La stanza del mostro
- 2.2 Conteggio caratteri
- 2.3 Funzione, ipotenusa
- 2.9 Crivello di Eratostene
- 3.6 Valori in file

>

Es. 1.5 Stampare codice `i` come carattere: `cout << char(i);`
<br>
Es. 1.9 Valore casuale tra `0` e `4`: `r = rand() % 5;`
<br>
Es. 2.2 Indice contatore per una cifra `val` (di tipo `char`): `val - '0'`

---

![](images/misc/pacman-scatter.png)
# Pac-Man

- Distinguere tre comportamenti dei fantasmi (i primi due, alternati)
    - *Chase*: un fantasma sceglie un punto nei pressi di Pac-Man e cerca di avvicinarsi a quel punto
    - *Scatter*: ogni fantasma pattuglia un angolo diverso (ognuno ha un suo obiettivo diverso a cui cerca continuamente di avvicinarsi)
    - *Frightened*: i fantasmi si muovono in maniera casuale, quando Pac-Man ha i superpoteri
- I fantasmi non tornano comunque indietro

>

<http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior>
<br>
<http://www.gamasutra.com/view/feature/3938/the_pacman_dossier.php?print=1>

---

# Pac-Man

- Controllare la *vittoria*
    - Tutti i biscotti sono stati mangiati
- Controllare la *sconfitta*
    - Pac-Man non è più in gioco, dopo essersi scontrato con un fantasma
- Creare una *sottoclasse di Arena*, specifica per il gioco di Pac-Man (es. `PacManArena`)
    - Creare tutti i personaggi nel costruttore (`__init__`)
    - Includere nella classe i metodi per controllare lo stato del gioco
    - Includere nella classe i metodi per controllare preventivamente la presenza di muri attorno ai personaggi (`going_to_wall`...)

---

# Esercitazione 7

---

![](images/dev/cpp.svg)
# Esercizi C++

- 2.5 Griglia di colori
- 3.4 Classe delle macchine
- 3.5 Lista di macchine
- 4.3 Attori astratti
- 4.8 Ultimo aggiornamento
- **4.3 2013 - Tris**
- 4.4 2013 - Conclusione partita

>

Es. 2.5 Partire dall'esempio `painter`
<br>
Es. 3.4 Partire dall'esempio `anim`
<br>
Es. 4.3 Gioco a console - Partire dagli esempi `fifteen` in C++, `tictactoe` in Python

---

![](images/misc/pac-man.png)
# Pac-Man

- *Secondo Pac-Man*
    - Due giocatori, con l'uso di tasti diversi
- *Opzionalmente...*
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

![](images/misc/handwriting.jpg)
# “Bella copia”

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

# Esercitazione 8

---

# Progetto 2

- Classe *C++* per incapsulare dati e regole di un gioco
    - Campi *privati* + metodi *pubblici* (e privati)
- Interazione con l'utente tramite console oppure gui Qt...
    - Ma ciclo principale, I/O, eventi, grafica *fuori dalla classe*

---

![](images/misc/slitherlink.png)
# Slitherlink

- Regole
    - Connect adjacent dots with vertical or horizontal lines to make a single loop
    - The numbers indicate how many lines surround it, while empty cells may be surrounded by any number of lines
    - The loop never crosses itself and never branches off

>

<http://www.nikoli.com/en/puzzles/slitherlink/>
<br>
<https://www.brainbashers.com/slitherlinkhelp.asp>

---

![](images/misc/slitherlink-solved.png)
# Slitherlink

- A ogni mossa, permettere all'utente di scegliere una posizione dove:
    - Aggiungere una linea (mostrare `-` o `|`)
    - Escluderne la presenza (mostrare `x`)
    - (L'utente posiziona liberamente le linee)
- Controllare il completamento del gioco
    - I numeri indicano quante linee devono esserci attorno
    - Attorno ai segni `+` devono esserci `2` o `0` linee
    - (Solo inizialmente... trascurare la regola del "single loop")

---

# Bozza della classe

``` cpp
class Slitherlink {
public:
    Slitherlink();                  // default board
    void play_at(int x, int y);
    int cols() const {return cols_; }
    int rows() const { return rows_; }
    std::string get_val(int x, int y) const;
    bool finished() const;
    std::string message() const { return "Puzzle solved"; }
    // ...
private:
    // ...
}
```

---

# Esempio di campi privati

``` cpp
private:  // ...
  int cols_ = 11; int rows_ = 11;
  vector< vector<'char'> > board_ = {
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'},
    {' ', ' ', ' ', '3', ' ', '2', ' ', '2', ' ', ' ', ' '},
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'},
    {' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', '2', ' '},
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'},
    {' ', ' ', ' ', '2', ' ', ' ', ' ', ' ', ' ', '1', ' '},
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'},
    {' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', '2', ' '},
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'},
    {' ', ' ', ' ', '2', ' ', ' ', ' ', '2', ' ', ' ', ' '},
    {'+', ' ', '+', ' ', '+', ' ', '+', ' ', '+', ' ', '+'} };
```

---

![](images/dev/recycle.png)
# Funzionamento a console e gui

- Aggiungere una *interfaccia grafica* al progetto
    - Fornita una gui che sfrutta l'astrazione `Game`
- Permettere all'utente di giocare tramite *console*
    - Mantenere le operazioni di I/O fuori dalla classe
- Inoltre, permettere di salvare o caricare una partita
    - Lettura e scrittura su *stream* nella classe del puzzle

---

# Esercitazione 9

---

![](images/misc/artificial-intelligence.png)
# Mossa suggerita

- Comando per completare automaticamente un incrocio (`+`):
    - Es. manca solo una casella → linea o `x`
    - Es. ci sono già due linee → tutte `x`
- Comando per completare automaticamente un vincolo numerico
    - Es. ci sono già le linee giuste → tutte `x`
    - Es. mancano `n` linee e ci sono `n` caselle libere → tutte linee

>

Autocompletamento su richiesta dell'utente (es. click su cella, o menù)

---

![](images/misc/dead-end.jpg)
# Vicolo cieco (opzionale)

- Aggiungere un metodo booleano `wrong` al puzzle, per verificare una condizione di vicolo cieco
    - Impossibile risolvere il puzzle, senza *rimuovere* un simbolo (linea o `x`)
    - *Attenzione*: condizione più stringente di `not finished`
    - Almeno un vincolo violato per eccesso di linee, oppure di `x`

>

Una delle cause possibili (ma non la sola): un circuito chiuso non include tutte le linee
<br>
Effettuare la verifica su richiesta dell'utente (es. tramite menù)

---

# Esercitazione 10

---

# Ulteriori suggerimenti (opzionale)

- Ragionare come un giocatore umano (senza *backtracking*!)
    - <https://www.brainbashers.com/slitherlinkhelp.asp>
- In una singola cella, provare i due segni alternativi (linea o `x`)
    - Operare su due copie del gioco
    - Su ciascuna copia, applicare tutti gli autocompletamenti possibili (scorsa esercitazione)
    - Se si finisce in un vicolo cieco (`wrong`), allora il segno giusto è l'altro

``` py
auto copy1 = *this; copy1.board_[y][x] = '-'; copy1.autocomplete();
auto copy2 = *this; copy2.board_[y][x] = 'x'; copy2.autocomplete();
```

>

Ulteriore possibilità: se entrambe le opzioni determinano uno stesso segno in una certa altra posizione, allora fissare quel segno nella sua posizione

---

# Soluzione ricorsiva (opzionale)

``` cpp
bool Slitherlink::solve_recursive() {
    // solve_simple();
    complex<int> pos = find_first_playable();  // Cartesian coord
    if (pos.real() >= 0 && pos.imag() >= 0 && !wrong()) {
        auto copy = *this;  // save current status
        for (auto sign : {'-', 'x'}) {
            board_[pos.imag()][pos.real()] = sign;
            if (solve_recursive()) return true;
            *this = copy;  // backtracking
        }
    }
    return finished();
}
```

>

Il metodo `find_first_playable` cerca la prima casella giocabile, non già segnata
<br>
Opzionalmente, `solve_simple` applica prima tutte (!) le altre strategie di soluzione
