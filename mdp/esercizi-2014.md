![](images/dev/geek-girl.svg)
# Esercizi 2014
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

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.2 Equazione di secondo grado

- Chiedere all'utente i tre coefficienti di una equazione di secondo grado
    - `ax² + bx + c = 0`
- Comunicare all'utente che tipo di soluzioni presenta l'equazione
    - Due soluzioni reali
    - Un'unica soluzione reale
    - Nessuna soluzione reale

---

![](images/misc/thermometer.png)
# 1.3 Conversioni di scala

- In un ciclo, ripetere le seguenti operazioni
    - Chiedere all'utente una temperatura in gradi Celsius °C
    - Mostrare il valore corrispondente in gradi Fahrenheit °F
    - Chiedere all'utente se intende convertire altri valori

>

Partire dalla formula `fahr = 32 + cels * 9 / 5`
<br>
Nella prima implementazione, effettuare una sola conversione; poi racchiudere tutto in un ciclo

---

![large](images/misc/gold-price.svg)
# 1.4 Massimo, minimo, media

- Leggere, attraverso un ciclo, una sequenza di valori
    - Ciascun valore deve essere compreso tra 0.0 e 100.0
    - La sequenza termina quando l'utente inserisce un valore non ammesso
- Visualizzare massimo, minimo e media dei valori inseriti

---

![](images/misc/impossible-triangle.jpg)
# 1.5 Triangolo

- Chiedere all'utente le lunghezze dei tre lati
- Controllare se il triangolo è:
    - Equilatero
    - Isoscele
    - Scaleno
    - Oppure se i tre lati non formano affatto un triangolo (uno dei lati è maggiore della somma degli altri due)
- Visualizzare il responso

---

![](images/misc/measure-tape.png)
# 1.6 Lunghezza righe

- Leggere una sequenza di righe di testo, in un ciclo
- La sequenza termina con una riga vuota
- Visualizzare la percentuale di righe di lunghezza pari, rispetto al numero totale di righe

>

Lunghezza di una variabile `line` di tipo stringa: `len(line)`

---

# 1.7 Fattoriale

- Chiedere all'utente un numero naturale `n`
- Calcolare il fattoriale di `n`
    - Ossia, moltiplicare tra loro i primi `n` numeri naturali

>

Memorizzare in una variabile `fact` il risultato parziale
<br>
A ogni ciclo, moltiplicare `fact` per il nuovo numero

---

![](images/misc/wall-calendar.png)
# 1.8 Calendario a muro

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

![](images/misc/three-cards.png)
# 1.9 Tre carte

- All'inizio l'utente ha 10 monete
- A ogni turno:
    - Viene estratto a sorte un numero segreto tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

``` py
from random import randint
# ...
secret = randint(1, 3)
```

---

# Esercitazione 2

---

![](images/repr/binary-tunnel.jpg)
# 2.1 Conteggio di 0 e 1

- Chiedere una riga di testo all'utente
- Contare separatamente il numero di cifre `0` e `1` presenti

>

Usare un ciclo `for` sulla stringa

---

![](images/misc/characters.png)
# 2.2 Conteggio caratteri

- Chiedere una riga di testo all'utente
- Contare separatamente le occorrenze di ciascuna lettera maiuscola (da `'A'` a `'Z'`)

>

Creare una lista (array) di 26 elementi, inizialmente tutti posti a `0`
<br>
Ciascun elemento è il contatore per una certa lettera
<br>
L'indice del contatore corrispondente a una lettera `val` può essere ottenuto come `ord(val) - ord('A')`

---

![](images/misc/triangle-notations.svg)
# 2.3 Area di un triangolo

- Scrivere una `funzione` per il calcolo dell'area di un triangolo, dati i tre lati
    - Parametri: le lunghezze dei tre lati, come `float`
    - Risultato: area, come `float`
- Nella parte principale del programma
    - Chiedere all'utente tre valori
    - Invocare la funzione con questi parametri
    - Visualizzare il risultato della funzione

>

Formula di Erone: `area = √(s·(s-a)·(s-b)·(s-c))`
<br>
Con `s = (a+b+c)/2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>
<br>
`sqrt` in modulo `math`

---

![](images/misc/green-squares.svg)
# 2.4 Sequenza di quadrati

- Chiedere all'utente il numero di quadrati da disegnare
- Disegnare i quadrati con lato decrescente, tutti allineati in alto e a sinistra
- Far variare il colore dei quadrati
    - Dal nero del quadrato più grande
    - Fino al verde del quadrato più piccolo

>

Cominciare a disegnare un grosso quadrato nero
<br>
Poi, inserire l'operazione di disegno un ciclo, aggiungendo a ogni passo `10` (p.es.) al livello di verde, e togliendo lo stesso valore al lato
<br>
Infine, determinare automaticamente le variazioni migliori per lato e colore, prima di iniziare il ciclo

---

![](images/misc/color-grid.png) ![](images/oop/raster-tile.png)
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

![](images/misc/winding-path.png)
# 2.6 Serpentina

- Chidere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- Aumentare gradatamente la componente di blu, lungo un percorso a serpentina

>

Per iniziare, seguire un più semplice percorso "a macchina da scrivere"
<br>
Poi invertire il verso delle righe con indice dispari

---

![](images/misc/spiral-circles.svg)
# 2.7 Spirale

- Disegnare una sequenza di cerchi (`n` scelto dall'utente) lungo una spirale
- Alla prima implementazione, procedere su un percorso circolare di raggio `r`, attorno al punto `(xc, yc)`
- Poi, su una spirale, aumentando passo a passo anche `r`
- Infine, disegnare lungo il percorso dei cerchi sempre più grandi e di colore diverso

``` py
xc, yc, r, angle = 320, 240, 40, 0.0
for i in range(8):
    y = yc + int(r * math.sin(angle))
    x = xc + int(r * math.cos(angle))
    pygame.draw.circle(screen, (0, 0, 0), (x, y), 10)
    angle += math.pi / 4
```

---

# 2.8 Potenza di vari valori

- Chiedere all'utente una sequenza di valori, terminata da `0`
    - Memorizzare la sequenza in una lista
- Successivamente, chiedere all'utente un intero `y`
- Per ogni `x` nella lista...
    - Calcolare e visualizzare la potenza `x ** y`
- Definire una funzione per eseguire i calcoli e la stampa
    - Parametri: lista di valori; esponente

---

# 2.9 Potenze in tabella

- Chiedere all'utente una sequenza di valori, terminata da `0`
    - Memorizzare la sequenza in una lista
- Per ogni intero `y` compreso tra `1` e `4`, e per ogni `x` nella lista...
    - Calcolare la potenza `x ** y`
- Visualizzare i risultati in forma di tabella (una riga per ogni valore di `y`)

``` text
  2  3   5   4
  4  9  25  16
  8 27 125  64
 16 81 625 256
```

>

In questo caso, l'utente ha immesso i valori `2`, `3`, `5`, `4`, `0`
<br>
Richiamare in un ciclo la funzione dell'es. 2.8

---

# Esercitazione 3

---

![](images/misc/triangle-notations.svg)
# 3.1 Classe dei triangoli

- Scrivere una classe `Triangle` per rappresentare dei triangoli
- Parametri del costruttore: lunghezze dei tre lati
- Fornire un metodo pubblico `perimeter` per calcolare il perimetro
- Fornire un metodo pubblico `area` per calcolare l'area
    - Usare la formula di Erone (es. 2.3)
- Nella parte principale del programma:
    - Creare un oggetto triangolo, con lati forniti all'utente
    - Invocare i metodi `area` e `perimeter` sull'oggetto
    - Infine mostrare l'area e il perimetro del triangolo

---

![](images/misc/space-invaders-school.png)
# 3.2 Movimento a serpentina

- Partire dal classico ciclo di una applicazione *PyGame*
- Fare in modo che un rettangolo si muova sullo schermo, avanzando di `10` pixel alla volta
- Partire dalla posizione `x = 100, y = 10`
- Seguire un percorso a serpentina
    - La `x` è confinata nell'intervallo `100-250`
    - La `y` aumenta ogni volta che si raggiunge il margine orizzontale impostato

---

![](images/misc/space-invaders-school.png)
# 3.3 Classe degli invasori spaziali

- Creare una classe `Invader`, che contenga i dati e il comportamento dell'alieno
    - Campi privati: `x`, `y`, `dx`
    - Metodo `move`, per avanzare
    - Metodo `rect`, per ottenere la posizione attuale
- Istanziare un oggetto `Invader` e farlo muovere sullo schermo
    - Chiamare il metodo `move` a ogni ciclo
    - Visualizzare un rettangolo nella posizione corrispondente

>

Definire nella classe delle opportune costanti

---

![](images/misc/space-invaders-school.png)
# 3.4 Lista di invasori

- Riusare la classe `Invader` (es. 3.3)
- Creare inizialmente una lista di alieni, con posizioni di partenza diverse
    - Memorizzare la posizione di partenza di ciascun alieno in opportuni campi privati
    - Lasciare a ciascun alieno uno spazio orizzontale di movimento di 150 pixel, a destra della posizione di partenza
- Farli avanzare tutti a ogni ciclo, chiamando il metodo `move` di ciascuno di essi

---

![](images/misc/triangle-notations.svg)
# 3.5 Gestione triangoli

- Riusare la classe `Triangle` dell'esercizio 3.1
- Gestire una lista di triangoli
- Ciclicamente, permettere all'utente di effettuare una delle seguenti operazioni:
    - Aggiungere un nuovo triangolo
    - Rimuovere un triangolo esistente, dato il suo indice
    - Calcolare la somma delle aree di tutti i triangoli

---

![large](images/misc/gold-price.svg)
# 3.6 Valori in file

- Leggere tutti i valori contenuti in un file
    - Ogni riga riporta un valore reale
- Visualizzare massimo, minimo e media dei valori letti

---

![](images/misc/troll-key.png)
# 3.7 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve in input una stringa di testo
    - Produce in output la stesso testo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
- Es. “`I want *this text* to be uppercase`” <br>
  → “`I want THIS TEXT to be uppercase`”
- Applicare la funzione a ogni riga di un file di testo
- Generare un file di output con il testo modificato

>

Inizialmente, provare la funzione su una stringa inserita dall'utente
<br>
Scorrere la riga, carattere per carattere
<br>
Segnare in un `bool` se si è incontrato un asterisco iniziale, ma non ancora un asterisco finale

---

![](images/misc/gray-squares.svg)
# 3.8 Ripetizioni di grigifigcaption: Quattro grigi, ripetuti 2 volte

- Chiedere all'utente una sequenza di valori e memorizzarli in una lista
    - La sequenza termina quando l'utente inserisce un valore non compreso tra 0 e 255
- Chiedere all'utente un numero `m` di ripetizioni
- Disegnare una sequenza di quadrati (come nell'es. 2.5), ma:
    - Disegnare `m * n` quadrati, dove `n` è la lunghezza della lista
    - Assegnare a ciascun quadrato un livello di grigio, usando in sequenza i valori della lista
    - Ossia, ripetere `m` volte l'intera sequenza di `n` colori

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
# 4.1 Potenze con ricorsione

- Calcolare la potenza intera di un numero, sfruttando la ricorsione
- Qualsiasi numero `x`, elevato a potenza `0`, dà come risultato `1`
- La potenza `n`-esima di un numero `x` si può calcolare come:
    - `xⁿ = x · xⁿ⁻¹`, per `n > 0`

>

IEEE definisce `0⁰ = 1`, anzichè indeterminato

---

# 4.2 Classe dei rettangoli

- Definire una classe `Rectangle`
    - Campi `_height` e `_width`, per le dimensioni
    - Costruttore con parametri corrispondenti
    - Metodo `area` per calcolare l'area
    - Metodo `__str__` per ottenere una rappresentazione testuale
- Nel `main` del programma, istanziare un rettangolo e calcolarne l'area

---

# 4.3 Cerchi e figure

- Definire una classe base `Shape`
    - Metodo astratto `area`
- Ridefinire `Rectangle` (es. 4.2) come sottoclasse di `Shape`
- Definire `Circle` come sottoclasse di `Shape`
    - Campo `_radius`, per il raggio
    - Costruttore appropriato, metodi `area` e `__str__`
- Nel `main` del programma, gestire una lista di figure, permettendo ciclicamente all'utente di:
    - Inserire una nuova figura (rettangolo o cerchio)
    - Rimuovere una figura, dato il suo indice
- A ogni ciclo, mostrare la lista delle figure e calcolarne l'area totale

---

![](images/misc/sample-file-system.png)
# 4.4 Documenti e cartelle

- Un sistema gerarchico di gestione documenti è composto di due tipi di *nodi* (classe base)
    - I *documenti*, caratterizzati da un nome e da un contenuto testuale (classe derivata)
    - Le *cartelle*, caratterizzate da un nome e da una lista di nodi contenuti (classe derivata)
- Creare una gerarchia delle tre classi: `Node`, `Document`, `Folder`
    - Le cartelle dovrebbero avere un metodo `add_node(n: Node)`
- Nel corpo principale del programma, istanziare e organizzare vari nodi (senza input dell'utente)
    - Ricreare con gli oggetti la struttura raffigurata a fianco

---

# 4.5 Dimensione delle cartelle

- Aggiungere a tutti i nodi (es. 4.4) un metodo `size`
    - Astratto nella classe base
    - Per un documento, restituisce la lunghezza del contenuto testuale
    - Per una cartella, restituisce la somma delle dimensioni dei nodi contenuti
- Calcolare la dimensione della struttura precedente (es. 4.4), inventando dei contenuti per i documenti presenti
- Aggiungere inoltre a tutti i nodi un metodo `print(indent: int)`, per mostrare a terminale la struttura ad albero
    - Astratto nella classe base
    - Mostra il nome di documenti e cartelle
    - Indenta opportunamente i nodi, rispetto alla cartella che li contiene

---

![large](images/fun/sierpinski-carpet.svg)
# 4.6 Sierpinski carpet

- Disegnare un *frattale di Sierpinski*, di ordine `n` (scelto dall'utente)
    - Dato un quadrato, dividerlo in 9 parti uguali
    - Colorare la parte centrale
    - Riapplicare l'algoritmo alle restanti 8 parti

---

# 4.7 Lettura matrice

- In un file è riprodotto il contenuto di una matrice di interi, riga per riga, con le celle separate da uno spazio...

``` text
5 7 2 11
1 3 12 9
4 6 10 8
```

- Leggere i numeri dal file e memorizzarli in una lista semplice (pseudo-matrice)
- Inferire le dimensioni della matrice (rows×cols) in base a:
    - Numero di righe del file
    - Numero di valori nella prima riga
- Visualizzare la matrice

---

# 4.8 Lettura in lista di liste

- Come esercizio precedente (4.7)
- Ma memorizzare gli interi in una lista di liste

---

![](images/fun/knight-moves.svg)
# 4.9 Giro del cavallo (*)

- Su una scacchiera `N×N`, un cavallo parte da una casella d'angolo
    - `N` scelto dall'utente
- A ogni mossa, il cavallo si muove a *L*
    - Due caselle in avanti e una di lato
- Trovare un percorso che visiti tutte le caselle, senza ripetizioni
    - Usare il *backtracking*
- Mostrare la scacchiera (in forma testuale), con l'ordine di visita di ogni casella

---

# Esercitazione 5

---

![](images/dev/cpp.svg)
# Esercizi C++

- 1.1 Hello, user!
- 1.4 Massimo, minimo, media
- 2.2 Conteggio caratteri
- 2.3 Area di un triangolo
- 2.8 Potenza di vari valori
- 3.6 Valori in file
- 3.7 Maiuscole tra asterischi
- 4.7 Lettura matrice
- 4.8 Lettura in lista di liste

>

Es. 2.2. Indice contatore per una lettera `val` (di tipo `char`): `val - 'A'`
<br>
Es. 4.7. Per ogni riga letta, creare un `istringstream` e scorrerlo con un `while`:<br>
`istringstream scanner{line}; while (scanner >> val) {/*...*/}`

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
- Ma ciclo principale, interazione con l'utente e grafica *fuori da queste classi*
    - Funzionamento con grafica oppure con console testuale

---

![](images/misc/bubble-bobble.png)
# Bubble Bobble

- *Draghetto*: guidato dal giocatore
    - Si muove e salta sulle piattaforme
    - Cade, fuori dalle piattaforme
    - Muore se cade in fondo allo schermo
- *Piattaforme*
    - Il draghetto ci atterra dall'alto
    - Si possono attraversare dal basso verso l'alto
    - Non si possono attraversare lateralmente
- *Avversari*
    - Si muovono come il draghetto
    - Ma scelgono casualmente la direzione
    - Uccidono il draghetto se lo urtano

---

# Urto con piattaforma

- Se il draghetto entra nello spazio di una piattaforma, deve essere respinto
- Bisogna distinguere se l'urto avviene dall'alto, da sinistra, o da destra

``` py
if y2_dragon <= y1_platform + DY:
    y2_dragon = y1_platform
    # the dragon is on *this one* platform, now
elif x2_dragon <= x1_platform + DX:
    x2_dragon = x1_platform
    # the dragon is at the left of the platform
elif x1_dragon >= x2_platform - DX:
    x1_dragon = x2_platform
    # the dragon is at the right of the platform
```

---

![](images/dev/cpp.svg)
# Esercizi C++

- 3.1 Classe dei triangoli
- 3.5 Gestione triangoli
- 4.2 Classe dei rettangoli
- 4.3 Cerchi e figure

---

# Progetto 1

---

![](images/misc/bubble-bobble.png)
# Bubble Bobble

- *Bolle*
    - Lanciate in orizzontale dal draghetto
    - Dopo un po' deviano verso l'alto
    - Uccidono gli avversari che urtano
- *Secondo draghetto*
    - Due giocatori, con l'uso di tasti diversi
- *Opzionalmente...*
    - Le bolle catturano gli avversari e li portano in alto
    - Le bolle scoppiano se toccate dal draghetto
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

![](images/misc/handwriting.jpg)
# “Bella copia”

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile*: `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata*: preferibilmente `return` a fine funzione, cicli senza `break`
    - *OOP*: *incapsulamento*, *ereditarietà*, *polimorfismo*

---

![](images/dev/cpp.svg)
# Esercizi C++

- 4.9 Giro del cavallo, in una classe C++
- 4.3/2013 e 4.4/2013 Convertire il gioco del tris in C++

---

# Progetto 2

---

# Progetto 2

- Classe *C++* per incapsulare dati e regole di un gioco
    - Campi *privati* + metodi *pubblici* (e privati)
- Inizialmente, I/O tramite console...
    - Ma ciclo principale e interazione con l'utente *fuori dalla classe*

---

![](images/misc/hitori.svg) ![](images/misc/hitori-completed.svg)
# Hitori

- Regole
    - Color cells so no number appears more than once in a row or column
    - The sides of black cells never touch
    - White cells form a continuous network
- A ogni mossa, permettere all'utente di annerire un numero, oppure cerchiarlo
    - A console, mostrare un `#` dopo i numeri anneriti, un `!` dopo i numeri cerchiati
    - Controllare la violazione delle regole
    - Controllare il completamento del gioco (ogni numero: correttamente annerito o cerchiato)

>

<http://www.nikoli.com/en/puzzles/hitori>

---

# Bozza della classe

``` cpp
class HitoriPuzzle {
public:
    HitoriPuzzle();                  // default board
    void mark_black(int x, int y);
    void mark_circled(int x, int y);
    bool is_black(int x, int y);
    bool is_circled(int x, int y);
    int get_number(int x, int y);
    bool wrong();                    // is some rule violated?
    bool solved();                   // is puzzle completed?
    string str();                    // string representation
    // ...
private:
    // ...
}
```

---

# Esempio di campi privati

``` cpp
class HitoriPuzzle {
public:
    // ...
private:
    // ...
    int cols_ = 5;
    int rows_ = 5;
    vector<int> numbers_ = {1, 5, 3, 1, 2,
                            5, 4, 1, 3, 4,
                            3, 4, 3, 1, 5,
                            4, 4, 2, 3, 3,
                            2, 1, 5, 4, 4};
    vector<int> annotations_ = { /* ... */ };  // NONE, BLACK, or CIRCLE
}
```

---

![](images/dev/recycle.png)
# Interfaccia grafica, opzionale

- Aggiungere una *interfaccia grafica* al progetto
    - Creare una sottoclasse di `QWidget` o `QMainWindow`
    - Interfaccia adattabile a dimensioni diverse del gioco
    - A ogni click, cambiare l'annotazione della cella (nero / cerchio / niente)
    - Mostrare i numeri confermati su sfondo verde, anzichè cerchiati
- **Riuso** - Classe del puzzle (*modello*) definita in modo generico
    - Usabile sia da interfaccia grafica che da console
- Inoltre, permettere di salvare o caricare una partita
    - Lettura e scrittura su stream nella classe del puzzle

---

# Bozza della GUI

``` cpp
class HitoriGui : public QMainWindow {
    Q_OBJECT
public:
    HitoriGui(HitoriPuzzle* puzzle);
private:
    void handle_click(int x, int y);
    void update_button(int x, int y);
    void update_all_buttons();

    vector<QPushButton*> buttons_;
    HitoriPuzzle* puzzle_;
};
```

---

# Suggerimenti

---

![](images/misc/artificial-intelligence.png)
# Mosse suggerite, opzionali

- Comando per cerchiare automaticamente i numeri attorno alle celle nere
- Comando per annerire automaticamente le celle con numeri già cerchiati nella stessa riga o colonna
- Opzione per nascondere i numeri non ripetuti nè sulla stessa riga nè sulla stessa colonna (inutili)
- Su richiesta, suggerire all'utente la prossima mossa, considerando:
    - Adiacenza vietata tra celle nere
    - Necessaria connessione tra celle bianche
    - ...

>

Es. Se si trovano due celle adiacenti con lo stesso valore, altre celle sulla stessa riga o colonna con lo stesso valore possono essere annerite

---

# Soluzione ricorsiva, opzionale

``` cpp
bool HitoriPuzzle::solve_recursive(int i) {
    // mark_auto();  // mark all obvious black and circled cells
    // is there an undecided cell after i?
    while (i < annotations_.size() && annotations_[i] != NONE) ++i;
    if (i < annotations_.size() && !wrong()) {
        auto copy = *this;  // save current status
        for (auto annotation : {BLACK, CIRCLE}) {
            annotations_[i] = annotation;
            if (solve_recursive(i + 1)) return true;
            *this = copy;  // backtracking
        }
    }
    return solved();
}
```

>

È richiesta l'implementazione dei metodi `wrong()` e `solved()`
