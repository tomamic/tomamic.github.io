![](images/dev/geek-girl.svg)
# Esercizi 2016
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

Racchiudere il programma in un ciclo `while` <br>
Per il calcolo della radice quadrata, utilizzare `sqrt(...)` <br>
All'inizio del programma: `from math import sqrt`

---

# 1.4 Fattoriale

- Leggere un numero intero positivo `n`
- Calcolare il fattoriale del numero

>

Moltiplicare tra loro i primi `n` numeri

Memorizzare in una variabile il risultato parziale; ad ogni ciclo, moltiplicarla per il nuovo numero

---

# 1.5 Divisori

- Chiedere all'utente un numero `n`
- Mostrare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

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

![large](images/misc/gold-price.svg)
# 1.7 Massimo e minimo

- Leggere, attraverso un ciclo, una sequenza di numeri interi
- La sequenza termina quando l'utente inserisce il valore 0
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

---

# 1.8 Passeggiata casuale

- Chiedere all'utente un numero `n`
- A partire dalla posizione `x = 0, y = 0`
- Compiere `n` passi, ciascuno in una direzione casuale
    - Estrarre un numero casuale `r` tra 0 e 3
    - Se `r == 0`, sottrarre 1 alla `y` attuale (alto)
    - Se `r == 1`, sommare 1 alla `x` attuale (destra)
    - Se `r == 2`, sommare 1 alla `y` attuale (basso)
    - Se `r == 3`, sottrarre 1 alla `x` attuale (sinistra)
- Al termine comunicare le coordinate finali e la distanza raggiunta dall'origine, calcolata come `abs(x) + abs(y)`

``` py
from random import randrange
# ...
r = randrange(4)  # something between 0 and 3
```

---

![](images/misc/three-cards.png)
# 1.9 Tre carte

- All'inizio l'utente ha 10 monete
- Ad ogni turno:
    - Viene estratto a sorte un numero segreto tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

---

# Esercitazione 2

---

![](images/misc/troll-key.png)
# 2.1 Percentuale di maiuscole

- Chiedere una riga di testo all'utente
- Mostrare la percentuale di lettere maiuscole presenti

>

Usare un ciclo `for` sulla stringa

---

# 2.2 Valori sopra e sotto la media

- Chiedere all'utente una sequenza in interi, terminata da 0
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore ad una lista inizialmente vuota, con `append`

---

![](images/misc/triangle-notations.svg)
# 2.3 Funzione, Erone

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
Con `s = (a + b + c)/2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>

---

![](images/misc/green-squares.png)
# 2.4 Sequenza di quadrati

- Chiedere all'utente il numero di quadrati da disegnare
- Disegnare i quadrati con lato decrescente, tutti allineati in alto e a sinistra
- Far variare il colore dei quadrati
    - Dal nero del quadrato più grande
    - Fino al verde del quadrato più piccolo

>

Cominciare a disegnare un grosso quadrato nero
<br>
Poi, inserire l'operazione di disegno un ciclo, aggiungendo ad ogni passo `10` (p.es.) al livello di verde, e togliendo lo stesso valore al lato
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

# 2.6 Triangolo di cifre

- Leggere un numero intero positivo `n` (< 10)
- Per ciascun valore `y` tra 1 ed `n`...
- Stampare una riga con le cifre da 1 ad `y`

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

![](images/misc/high-scores.png)
# 2.7 Nomi sopra e sotto la media

- Chiedere all'utente una sequenza di dati, come coppie *(nome, valore)*
    - Ciascun nome (`str`) è associato ad un valore (`int`)
    - La sequenza termina quando il nome è vuoto
- Calcolare e mostrare il valore medio
- Elencare i nomi con valori sotto alla media
- Elencare i nomi con valori sopra (o uguali) alla media

>

Inserire nella lista delle tuple, cioè coppie *(nome, valore)*

---

![](images/misc/histogram-rot.svg)
# 2.8 Istogramma con barre orizzontali

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Mostrare un istogramma
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile

---

![](images/misc/histogram.svg)
# 2.9 Istogramma con barre verticali

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Mostrare un istogramma
    - Altezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più alta occupa tutto lo spazio disponibile
    - Barre in blu, per valori sotto alla media
    - Barre in rosso, per valori sopra (o uguali) alla media

---

# Esercitazione 3

---

![](images/misc/trigonometry.svg)
# 3.1 Classe dei pianeti

- Scrivere una classe `Planet`, con dati (campi privati):
    - Raggio `r` dell'orbita: distanza dall'origine degli assi
    - Angolo `theta` attuale rispetto all'asse *x* (coordinate polari)
- Operazioni (metodi pubblici):
    - `pos`: fornisce la posizione attuale come tupla `(x, y)`
- Nella parte principale del programma:
    - Creare un oggetto pianeta, con dati forniti all'utente
    - Invocare il metodo `pos` per ottenere le coord. cartesiane

>

Distinguere bene campi dell'oggetto, parametri dei metodi, variabili esterne
<br>
Opzionalmente, nel costruttore ricevere come parametri `x` e `y` iniziali, da cui inizializzare i campi `r` e `theta`

---

# 3.2 Pianeta in rivoluzione

- Aggiungere ai dati di `Planet` (es. 3.1) una velocità angolare `omega`
    - Gradi di rotazione del pianeta attorno all'origine, ad ogni turno
- Aggiungere un metodo `move`
    - Pianeta percorre un piccolo arco attorno all'origine
    - Ad ogni chiamata, sommare `omega` all'attuale `theta`
- In `main` (*senza grafica*), creare un pianeta
    - Ciclicamente, chiamare il metodo `move` del pianeta...
    - E stampare la posizione restituita dal metodo `pos`

---

![](images/misc/bouncing-ball.jpg)
# 3.3 Rimbalzi con gravità

- Partire dall'esempio di animazione visto a lezione (*senza oggetti*)
- Un rettangolo si muove orizzontalmente, p.es. di `10` pixel alla volta
- Percorso ciclico del rettangolo
    - Quando esce dallo schermo, rientra dalla parte opposta
- Aggiungere al rettangolo un effetto di gravità
    - Definire una variabile `dy`: componente di velocità verticale (inizialmente `0`)
    - Ad ogni ciclo, aggiungere a `dy` una piccola quantità costante (es. `g = 0.4`)
    - Quando si tocca il fondo, cambiare il segno di `dy`

---

# 3.4 Animazione di un pianeta

- Partire dall'esempio di animazione visto a lezione
- Aggiungere ai dati del pianeta (es. 3.2) anche la sua dimensione come `diameter`, con un corrispondente metodo *getter*
- Rappresentare il movimento del pianeta dell'esercizio 3.2
    - Per ogni frame, chiamare il metodo `move` del pianeta
    - Rappresentare un cerchio nella posizione aggiornata del pianeta
- Traslare il disegno, *senza modificare la classe*, in modo che l'origine degli assi sia al centro della finestra

>

L'asse *y* può rimanere orientato verso il basso

---

![](images/misc/solar-system.png)
# 3.5 Lista di pianeti

- Aggiungere ai dati del pianeta (es. 3.4) anche un colore come tupla `RGB`, con un corrispondente metodo *getter*
- Anzichè un solo pianeta, crearne diversi ed inserirli in una lista
- Rappresentare graficamente il movimento di tutti i pianeti
    - Per ogni frame, in un ciclo `for`, chiamare il metodo `move` di ogni pianeta
    - Rappresentare un cerchio colorato nella posizione aggiornata di ogni pianeta

---

![](images/misc/college-student.jpg)
# 3.6 Classe degli esami

- Scrivere una classe `Exam` per rappresentare gli esami sostenuti in un corso di studio
    - Parametri del costruttore: *nome esame* ; *numero crediti* ; *data* (es. “`2016-10-14`”); *voto* (da 18 a 30)
- Fornire metodo `estimate_work` per stimare le ore di studio, supponendo che...
    - Ad ogni credito corrispondano ~ 25h di studio
    - Il voto sia direttamente proporzionale allo studio
- Nel `main`, istanziare un esame con valori forniti all'utente, invocare il metodo e mostrare il valore stimato

>

Es.: Un esame da 9 crediti corrisponde a 225h di studio; per prendere 24, in proporzione dovrei studiare 180h
<br>
Tenere l'uso della console per I/O fuori dalla classe!

---

![](images/misc/dice.png)
# 3.7 Scrittura di risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
- Scrivere il risultato dei lanci in un file
    - In ogni riga, inserire i due valori separati da spazio

---

![](images/misc/dice.png)
# 3.8 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 3.7
- Per ogni coppia di valori letta, mostrare all'utente la loro somma
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due dadi

>

Per conteggiare i vari risultati, usare una lista di (almeno) 11 valori

---

![](images/misc/battleship.png)
# 3.9 Battaglia navale

- Allocare una matrice `rows×cols` (dimensioni scelte dall'utente)
- Ripetutamente...
    - Chiedere all'utente un numero `size`
    - Riempire con '`+`' un numero `size` di celle adiacenti (direzione e posizione di partenza casuali)
    - Opzionalmente, evitare inserimenti sovrapposti oppure oltre i bordi
    - Mostrare la matrice risultante
- All'uscita del programma, salvare la matrice in un file di testo

>

Si può usare una lista come pseudo-matrice, oppure una lista di liste

---

# Esercitazione 4

---

![](images/fun/matryoshka.png)
# 4.1 Massimo valore, con ricorsione

- Definire una funzione ricorsiva `max_char`
    - Cerca, in una stringa di testo, il carattere con codice Unicode massimo
- Se il testo ha lunghezza 1, l'unico carattere è quello massimo
- Altrimenti il carattere con codice massimo è pari al maggiore tra:
    - Il primo carattere
    - Il carattere con codice massimo tra tutti gli altri (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/bouncing-ball.jpg)
# 4.2 Pallina in caduta

- Creare una classe `FallingBall`
    - Partire dal codice di `Ball` in `p4_ball` (esempio a lezione)
    - Mantenere stessi campi e metodi
- Aggiungere un campo `g` (`float`)
    - Accelerazione di gravità, costante, verso il basso
    - Ad ogni esecuzione, il metodo `move` aggiunge `g` a `dy`
- Nel `main`: istanziare un oggetto `FallingBall`
    - Chiamare ciclicamente `move`
    - Visualizzare un rettangolo (o una immagine) nella posizione attuale

---

# 4.3 Lista di personaggi

- Partire da classe `SimpleActor` (astratta) definita qui sotto
- Ridefinire `FallingBall` (es. 4.2) come sottoclasse di `SimpleActor`
- Definire una classe `Plane`, come sottoclasse di `SimpleActor`
    - Implementare un semplice movimento orizzontale ciclico
- Nel programma principale, creare una *lista di personaggi misti* (palline e aerei)
    - Chiamare il metodo `move` di ciascuno ad ogni ciclo
    - Visualizzare un rettangolo per ogni personaggio

``` py
class SimpleActor:
    def move(self): pass
    def rect(self) -> (int, int, int, int): pass
```

---

# 4.4 Arena e collisioni

- Partire da classi `Arena` e `Actor` del modulo `actor` fornito
- Ridefinire `FallingBall` e `Plane` come sottoclassi di `Actor`
    - Implementare i metodi mancanti (partire da es. 4.3)
- Gestire le collisioni nel metodo `collide`
    - Un oggetto `Plane` inverte la direzione, quando urta un oggetto `FallingBall`
- Nel programma principale, creare una *arena con personaggi misti* (palline e aerei)
    - Chiamare il metodo `tick` dell'arena ad ogni ciclo
    - Visualizzare un rettangolo per ogni personaggio

``` py
from actor import Actor, Arena
class FallingBall(Actor):
    # ...
```

---

![](images/oop/viewport.png)
# 4.5 Scroll

- Associare a ciascun tipo di personaggio dell'es. 4.4 una immagine
- Creare un'arena di gioco (*game world*) più ampia della finestra
- Usare per lo sfondo una immagine grande quanto l'intera arena di gioco
- Permettere infine all'utente di spostare l'inquadratura assegnata alla finestra (*viewport*), usando i tasti cursore

>

Non modificare le classi dei personaggi, nè `Arena`
<br>
Aggiugere invece un *offset*, in fase di visualizzazione, alle coordinate dei personaggi per decidere il punto in cui disegnarli nella finestra
<br>
Usare lo stesso *offset* anche per ritagliare la parte giusta dall'immagine di sfondo

---

![](images/misc/crop-circle.jpg)
# 4.6 Circular infinity

- Disegnare ricorsivamente dei cerchi, con i centri allineati in verticale
- Il riquadro iniziale è l'intera finestra
- Tracciare un cerchio contenuto nel riquadro `(x, y, w, h)`
    - `r = h / 2, xc = x + w / 2, yc = y + h / 2`
- Dividere il riquadro in due metà
- Applicare a ciascuno dei due riquadri il processo, ricorsivamente
- Ad ogni livello, invertire il colore del cerchio disegnato

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/tic-tac-toe.svg)
# 4.7 Tris

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

# 4.8 Conclusione partita

- Aggiungere metodi alla classe del *tris*
    - Controllo di conclusione: `bool`
    - Eventuale vincitore: `O`, `X`, `None`
- Nel `main`, in un ciclo
    - Chiedere all'utente le coordinate per la prossima mossa
    - Visualizzare lo stato risultante
    - Comunicare l'eventuale conclusione della partita ed il vincitore

---

# 4.9 Valori in file CSV

- Leggere una matrice di interi da un file testuale CSV
    - *Comma Separated Values*: valori riportati riga per riga e separati da una virgola

``` text
5,7,2,11
1,3,12,9
4,6,10,8
```

- Memorizzare i dati in una lista semplice (pseudo-matrice)
    - Inferire dimensioni della matrice (`rows×cols`) in base a:
    - Num. righe del file; num. valori nella prima riga
- Riscrivere in un altro file tutti i valori della matrice
    - Raddoppiare però i valori sulla diagonale che parte dall'angolo in basso a destra (`cols - x == rows - y`)

>

Nell'esempio, i valori da raddoppiare in scrittura sono i seguenti: `8, 12, 7`

---

# Esercitazione 5

---

![](images/oop/jumper.png)
# 5.1 Tartaruga saltellante

- Modificare `Turtle` nel modulo `bounce`
- L'utente non controlla `dy`, ma solo `dx`
    - Eliminare metodi `go_up` e `go_down`
- `Turtle` subisce gravità
    - Ma si ferma sul fondo dell'arena
- Tasto `Space`: la tartaruga salta
    - *Ma solo se si trova già sul fondo dell'arena*
    - Parte con un valore prefissato di `dy` (negativo), poi subisce la gravità
    - Per saltare, aggiungere un metodo `jump`

``` py
from actor import Actor, Arena
class Turtle(Actor):
    # ...
```

---

![](images/oop/wall.png)
# 5.2 Muri impenetrabili

- Creare classe `Wall`, sottoclasse di `Actor`
    - Rettangolo immobile ed impenetrabile
    - Campi: `x`, `y`, `w`, `h`
- Modificare `Ball` del modulo `bounce`
    - Scivola sul muro, senza rimbalzare
    - In caso di collisione pallina / muro...
    - Resta appena fuori da muro (bordo più vicino)

``` py
class Ball(Actor):  # ...
    def collide(self, other):
        if isinstance(other, Wall):
            x, y, w, h = other.rect()
            border_left, border_right = x - self.W, x + w
            border_top, border_bottom = y - self.H, y + h
            # now set either self._x or self._y, to the nearest border
```

---

# 5.3 Stampa per righe

- Visualizzare in forma tabellare i caratteri ASCII
    - 8 righe x 12 colonne, codici da 32 a 126
- Mostrare in ordine i caratteri, riga per riga

``` text
 !"#$%&'()*+
,-./01234567
89:;<=>?@ABC
DEFGHIJKLMNO
PQRSTUVWXYZ[
\]^_`abcdefg
hijklmnopqrs
tuvwxyz{|}~
```

>

Usare solo due cicli `for` annidati: esterno su `y`, interno su `x`
<br>
In ogni posizione, calcolare il codice da visualizzare: `y * COLS + x + ...`
<br>
Solo stampa caratteri: non servono liste, nè matrici

---

# 5.4 Stampa per colonne

- Visualizzare in forma tabellare i caratteri ASCII
    - 8 righe x 12 colonne, codici da 32 a 126
- Mostrare in ordine i caratteri, colonna per colonna

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

Usare solo due cicli `for` annidati: esterno su `y`, interno su `x`
<br>
In ogni posizione, calcolare il codice da visualizzare: `x * ROWS + y + ...`
<br>
Solo stampa caratteri: non servono liste, nè matrici

---

![](images/misc/spiral.png)
# 5.5 Spirale

- Scrivere una funzione per riempire di numeri crescenti una matrice quadrata (o rettangolare)
- Seguire il percorso a spirale suggerito nella figura a fianco
- Dimensioni della matrice indicate dall'utente a runtime

>

Tenere traccia della direzione attuale (*∆y*, *∆x*)
<br>
Avanzare fino al bordo o ad una cella già visitata,
<br>
poi cambiare la direzione in senso orario
<br><br>
Rotazione oraria 90° (coord. raster): `(∆x', ∆y') = (-∆y, ∆x)`
<br>
Rotazione antior. 90° (coord. raster): `(∆x', ∆y') = (∆y, -∆x)`
<br><br>
In generale (coord. cartesiane): `(x', y') = (x⋅cos(θ) - y⋅sin(θ), x⋅sin(θ) + y⋅cos(θ))`
<br>
(Bisogna cambiare il segno di θ)

---

![](images/misc/merge-sign.png)
# 5.6 Fusione

- Due file di testo contengono sequenze di numeri
    - Un valore per ogni riga
    - Entrambi i file sono già ordinati, dal valore più piccolo a quello più grande
- Scrivere in un terzo file i valori di entrambi i file, *senza usare nessuna lista*
    - Anche il terzo deve contenere i valori in ordine, dal più piccolo al più grande

>

Ciclicamente, confrontare la coppia dei primi valori (ciascuno proveniente da uno dei due stream)
<br>
Scrivere il minore dei due sul file di uscita
<br>
Non estrarre un nuovo valore da uno stream, se quello precedente non è ancora stato scritto in output

---

# 5.7 Espressioni

- Definire una gerarchia di classi per rappresentare espressioni matematiche
- La *classe base* **`Expression`** ha un metodo astratto `eval`
    - Senza parametri, restituisce il valore `float` dell'espressione
- Le *sottoclassi* concrete di una espressione sono:
    - **`Literal`**, contenente un valore costante `float`
    - **`Sum`**, contenente due operandi, entrambi espressioni
    - **`Product`**, contenente due operandi, entrambi espr.
- Istanziare (senza fare *parsing*!) oggetti per rappresentare questa espressione:
    - `5 * (4 + 3 * 2)`
- Calcolare il valore finale, chiamando `eval` sul nodo radice

---

# 5.8 Espressioni prefisse

- Aggiungere un  metodo `prefix` a `Expression` (es. 5.7)
    - Genera una stringa in notazione prefissa (operatore seguito da operandi)
- Risultato dell'esempio: `"* 5 + 4 * 3 2"`

``` py
                                          #   *  (prod2)
prod1 = Product(Literal(3), Literal(2))   #  / \
sum1 = Sum(Literal(4), prod1)             # 5   +  (sum1)
prod2 = Product(Literal(5), sum1)         #    / \
print(prod2.eval())                       #   4   *  (prod1)
print(prod2.prefix())                     #      / \
                                          #     3   2
```

>

<https://it.wikipedia.org/wiki/Notazione_polacca>

---

![](images/misc/dom-knights.png)
# 🥷 5.9 Dominating knights

- Problemi di dominio (o copertura)
    - Trovare la posizione di un certo numero di pezzi
    - Tutti dello stesso tipo... ⇒
    - Tutte le celle sono occupate o sotto attacco
- In particolare, il programma deve posizionare automaticamente `K` cavalli su una scacchiera `N×N`
    - L'utente sceglie `K` ed `N`
    - Ogni cella deve essere occupata, oppure sotto attacco
    - Usare il *backtracking*

>

<https://en.wikipedia.org/wiki/Mathematical_chess_problem>

---

# Esercitazione 6

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

![](images/misc/super-mario.jpg)
# Super Mario - Personaggi

- *Mario*: guidato dal giocatore
    - Si muove e salta sulle piattaforme
    - Cade secondo gravità, fuori dalle piattaforme
    - Ma non accelera oltre una velocità limite
    - Muore se cade in fondo allo schermo
- *Muri e piattaforme*
    - Mario ci atterra dall'alto
    - Non si possono attraversare in nessuna direzione
- *Avversari*
    - Si muovono sulle piattaforme come Mario, ma scelgono casualmente la direzione
    - Uccidono Mario se lo urtano, ma muoiono se Mario ci salta sopra

---

# Super Mario - Implementazione

- Se un personaggio collide con un *muro*
    - Deve indietreggiare di pochi pixel
    - In modo da rimanere appena all'esterno del muro
- Implementazione degli *avversari*
    - Il comportamento di base è comune tra Mario e le altre “creature”
    - Si può creare una classe base comune per gestire cadute e atterraggi sulle piattaforme
    - Mario prende i comandi dall'utente, tramite tastiera
    - Le creature possono scegliere casualmente (ogni tanto) di cambiare direzione
- Nella prima versione, si può mantenere fissa la vista del gioco

---

# Esercitazione 7

---

![](images/dev/cpp.svg)
# Esercizi C++

- 1.1 Hello, user!
- 1.7 Massimo e minimo
- 2.1 Percentuale di maiuscole
- 2.2 Valori sopra e sotto la media
- 2.3 Funzione, Erone
- 3.7 Scrittura di risultati casuali
- 3.8 Analisi di risultati casuali

---

![](images/misc/super-mario.jpg)
# Super Mario - Scroll

- Aggiungere *scrolling* automatico
    - La mappa di un livello è più ampia di una sola schermata
    - La vista del gioco si sposta lateralmente con Mario, quando si avvicina a bordo schermo
    - Lavorare sulla visualizzazione, senza modificare i personaggi
- Alcune piattaforme, se colpite dal basso, possono attivare dei bonus
- Aggiungere bandiera o altro controllo per fine gioco (un solo livello)

---

![](images/misc/super-mario.jpg)
# Super Mario - Arena

- Definire una sottoclasse di `Arena`
    - Nel metodo di inizializzazione, genera e posiziona i personaggi del gioco
    - Fornisce i seguenti due metodi booleani, per controllare l'eventuale termine della partita:
    - `lost` per la sconfitta (Mario non è più tra i personaggi dell'arena)
    - `won` per la vittoria (Mario ha raggiunto l'uscita)

---

# Esercitazione 8

---

![](images/dev/cpp.svg)
# Esercizi C++

- 3.2 Pianeta in rivoluzione
- 3.5 Lista di pianeti
    - <https://github.com/tomamic/fondinfo/tree/master/cpp/p5_4_anim_balls>
    - Campo: `vector<Planet*> planets`
- 4.3 Attori astratti
- 5.5 Spirale
- 5.1 Memory, 2011 (a console)
    - <https://github.com/tomamic/fondinfo/blob/master/exercises/e5_2011_1_memory.py>
- 5.1 Memory, 2011 (con GUI)
    - Creare una sottoclasse di `Game`
- 4.7 Espressioni

---

![](images/misc/super-mario.jpg)
# Super Mario

- Aggiungere secondo giocatore, *Luigi*
    - La vista del gioco si sposta assieme ai due personaggi
    - Mario e Luigi non possono allontanarsi troppo tra loro
- *Opzionalmente...*
    - Aggiungere bonus, piante, vite, punteggio, tempo, livelli ed estensioni a *fantasia*

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

# Esercitazione 9

---

# Progetto 2

- Classe *C++* per incapsulare dati e regole di un gioco
    - Campi *privati* + metodi *pubblici* (e privati)
- Interazione con l'utente tramite console oppure gui Qt...
    - Ma ciclo principale, I/O, eventi, grafica *fuori dalla classe*

---

![](images/misc/akari.svg)
# “Akari” - Light up

- Scopo: disporre delle lampade, fino ad illuminare tutte le celle
- Una lampada illumina le celle sulla sua riga e la sua colonna, fino ad una cella nera o al bordo esterno
- Ogni cella bianca può ospitare una lampada, ma:
    - Un numero indica quante lampade devono trovarsi nelle celle adiacenti (in orizzontale e verticale)
    - Due lampade non possono illuminarsi a vicenda

>

<http://www.nikoli.com/en/puzzles/bijutsukan/rule.html>

---

# Akari - Funzionalità di base

- Inserire una lampada (*bulb*, `'@'`) in una cella
    - L'utente posiziona liberamente le lampade
    - In tutte le celle, tranne quelle nere
- Controllare se le regole sono violate, oppure se il gioco è stato risolto
- Rappresentare lo stato del gioco in forma testuale
    - Per ciascuna cella, indicare anche se è illuminata (`'+'`)
- Nota: la tabella di gioco può essere rettangolare (*rows ≠ cols*)

---

# Bozza della classe

``` cpp
class Akari {
public:
    Akari();  // default board
    void play_at(int x, int y);
    string get_val(int x, int y);
    bool finished();
    int cols() {return cols_; }
    int rows() { return rows_; }
    string message() { return "Puzzle solved"; }
    // ...
private:
    // ...
}
```

---

# Esempio di campi privati

``` cpp
private:  // ...
    int cols_ = 7; int rows_ = 7;
    vector< vector<char> > board_ = {
        {' ', ' ', ' ', '5', '5', '1', ' '},
        {' ', '5', ' ', ' ', ' ', ' ', ' '},
        {'1', ' ', ' ', '5', ' ', '0', ' '},
        {' ', '5', ' ', ' ', ' ', '5', ' '},
        {' ', '1', ' ', '3', ' ', ' ', '2'},
        {' ', ' ', ' ', ' ', ' ', '2', ' '},
        {' ', '5', '5', '5', ' ', ' ', ' '} };
// 5 means: unnumbered black cell
```

---

# Akari - Funzionalità aggiuntive

- Inserire una croce (*flag*, `'x'`) in una cella
    - Segnaposto, per escludere la presenza di una lampada
    - L'utente posiziona liberamente le croci
    - In tutte le celle, tranne quelle nere
    - Nel metodo `play_at`, cambiare il valore della cella: <br> *empty → bulb → flag → empty* ecc.
- Salvare o caricare una partita
    - Metodo `load` (e/o costruttore) con parametro `filename`, per caricare una partita da file
    - Metodo `save` con parametro `filename`, per salvare una partita su file

---

![](images/dev/recycle.png)
# Funzionamento a console e gui

- Aggiungere una *interfaccia grafica* al progetto
    - Fornita una gui che sfrutta l'astrazione `Game`
- Permettere all'utente di giocare tramite *console*
    - Mantenere le operazioni di I/O fuori dalla classe

---

# Esercitazione 10

---

![](images/misc/artificial-intelligence.png)
# Mossa suggerita

- Comando per completare automaticamente un vincolo numerico
    - [Tecniche di soluzione](http://tomamic.github.io/fondinfo/akari-techniques.html)
    - Es. ci sono già le lampade giuste → tutte croci
    - Es. mancano `n` lampade e ci sono `n` caselle libere → tutte lampade
- Comando per completare automaticamente una cella non illuminata (con croce o senza):
    - Controllare tutte le celle raggiungibili, in riga e colonna, compresa la cella di partenza
    - Se c'è una sola cella senza croce → metterci lampada

>

Autocompletamento su richiesta dell'utente (es. click su cella, o menù)

---

![](images/misc/dead-end.jpg)
# Vicolo cieco (opzionale)

- Aggiungere un metodo booleano `wrong` al puzzle, per verificare una condizione di vicolo cieco
    - Impossibile risolvere il puzzle, senza *rimuovere* un simbolo (lampada o croce)
    - *Attenzione*: condizione più stringente di `not finished`
    - Almeno una regola violata per *eccesso* di lampade, oppure di croci

>

Effettuare la verifica su richiesta dell'utente (es. tramite menù)

---

# Esercitazione 11

---

# Ulteriori suggerimenti (opzionale)

- Ragionare come un giocatore umano (senza *backtracking*!)
    - [Tecniche di soluzione](http://tomamic.github.io/fondinfo/akari-techniques.html)
- In una singola cella, provare i due segni alternativi (lampada o croce)
    - Operare su due copie del gioco
    - Su ciascuna copia, applicare tutti gli autocompletamenti possibili (scorsa esercitazione)
    - Se si finisce in un vicolo cieco (`wrong`), allora il segno giusto è l'altro

``` cpp
auto copy1 = *this; copy1.board_[y][x] = '@'; copy1.autocomplete();
auto copy2 = *this; copy2.board_[y][x] = 'x'; copy2.autocomplete();
```

>

Ulteriore possibilità: se entrambe le opzioni determinano uno stesso segno in una certa altra posizione, allora fissare quel segno nella sua posizione

---

# Soluzione ricorsiva (opzionale)

``` cpp
bool Akari::solve_recursive() {
    // solve_simple();
    auto pos = find_first_playable();  // vector of 2 ints
    auto x = pos[0], y = pos[1];
    if (x >= 0 && y >= 0 && !wrong()) {
        auto copy = *this;  // save current status
        for (auto sign : {'x', '@'}) {
            board_[y][x] = sign;
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
