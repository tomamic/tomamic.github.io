![](images/dev/geek-girl.svg)
# Esercizi 2023
## Introduzione alla programmazione

---

# Esercitazione 1 (2023-09-25)

---

![large](images/algo/holy-grail.jpg)
# 1.1 Lancelot

- Porre una domanda all'utente:
    - `"What is your name?"`
- Se la risposta è `"Lancelot"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

---

![large](images/algo/holy-grail.jpg)
# 1.2 The Bridge of Death

- Porre tre domande all'utente:
    - `"What is your name?"`
    - `"What is your quest?"`
    - `"What is your favorite color?"`
- Dopo aver ricevuto tutte e tre le risposte…
- Se le risposte sono `"Lancelot"`, `"Holy Grail"` e `"Blue"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

<https://www.youtube.com/watch?v=Xel0c6mpqPA>

---

![large](images/misc/segments-1.svg)
# 1.3 Segmenti casuali

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare i segmenti
    - Tutti con lo stesso colore, nero
    - Ciascuno con entrambi gli estremi in posizione casuale
    - Ma interamente contenuto nel canvas

---

![large](images/misc/segments-2.svg)
# 1.4 Linea spezzata

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare i segmenti come una linea spezzata, in nero
    - Iniziare da un punto casuale e congiungerlo con un successivo punto casuale
    - Proseguire a congiungere l'ultimo punto con un nuovo punto casuale
- La linea deve essere interamente contenuta nel canvas

---

![large](images/misc/segments-3.svg)
#  1.5 Toni di grigio

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare una linea spezzata, come nell'esercizio precedente
- Variare progressivamente il tono di grigio
    - Il primo segmento ha sempre colore `(50, 50, 50)`
    - L'ultimo segmento ha sempre colore `(200, 200, 200)`
    - Indipendentemente dal numero di segmenti

---

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.6 Equazione di secondo grado

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
# 1.7 Equazione di 2° grado, con ciclo

- Riprendere l'esercizio precedente
- In caso di soluzioni reali, mostrare all'utente il loro valore
- Chiedere infine all'utente se vuole valutare altre equazioni

>

Racchiudere il programma in un ciclo `while`
<br>
Usare la funzione `sqrt` del modulo `math`

---

# 1.8 Divisori

- Chiedere all'utente un numero `n`
- Mostrare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

---

![large](images/misc/center-target.svg)
# 1.9 Bersaglio al centro

- Disegnare vari cerchi casuali
    - Tutti con raggio 20
    - Posizione e colore casuali
    - Il numero di cerchi non è noto
- Il disegno termina quando…
    - Il centro dell'ultimo cerchio disegnato è vicino al centro del canvas
    - Distanza minore di 20


---

# Esercitazione 2 (2023-10-03)

---

![](images/misc/triangle-notations.svg)
# 2.1 Funzione, Erone

- Definire una funzione `heron` per il calcolo dell'area di un triangolo
    - Parametri: tre lati come `float`
    - Risultato: area come `float`
- Invocare la funzione dalla shell interattiva
- Aggiungere poi al programma una funzione `main`
    - Chiedere all'utente le misure dei tre lati
    - Poi chiamare `heron` con questi parametri
    - Infine mostrare all'utente il risultato

>

[Formula di Erone](http://en.wikipedia.org/wiki/Heron%27s_formula): $area = \sqrt{s \cdot (s-a) \cdot (s-b) \cdot (s-c)}, s = \frac{a+b+c}{2}$
<br>
Tenere le operazioni di I/O fuori dalla funzione `heron`

---

![](https://tomamic.github.io/images/oop/anim-right.png)
# 2.2 Svolta casuale

- Partire dall'animazione della pallina vista a lezione
    - Direzione iniziale, verso destra di 2 px
    - Senza rimbalzi
    - Partire dal centro di un canvas 400×400
- Aggiungere un cambio di direzione casuale
    - Nuova direzione: alto, basso, destra, o sinistra
    - Possibilmente, escludere la direzione opposta a quella attuale
- Cambiare direzione solo in certi punti
    - Quando `x` e `y` sono entrambe multiple di 8

---

![](https://raw.githubusercontent.com/tomamic/fondinfo/master/sprites.png)
# 2.3 Scelta sprite

- Continuare l'esercizio precedente
- Disegnare un fantasma anzichè una pallina
    - Ritagliare l'immagine da `sprites.png`
    - [`g2d.draw_image_clip`](https://github.com/tomamic/fondinfo#images-and-sounds)
- Casualmente, il fantasma cambia sprite
    - In posizioni multiple di 8, con probabilità 1/5
    - Se è visibile diventa invisibile e viceversa
    - Mantiene lo stesso sprite fino al prossimo cambiamento casuale

>

Usare una variabile globale booleana, `visible`

---

# 2.4 Tabella delle distanze

- Considerare due variabili: `x` e `y`
    - Ciascuna variabile compresa tra 0 e 4
    - Generare tutti i possibili accoppiamenti
- Mostrare in tabella il valore di $x^2+y$
    - Una riga per ogni valore di `y`
    - Una colonna per ogni valore di `x`

``` text
0   1   4   9   16
1   2   5   10  17
2   3   6   11  18
3   4   7   12  19
4   5   8   13  20
```

>

Usare due cicli for annidati; cominciare a scrivere il solo ciclo sulla `x`, con `y` costante

---

![](https://tomamic.github.io/images/misc/circle-grid.svg)
# 2.5 Griglia di cerchi

- Su canvas quadrato, disegnare griglia `n×n` di cerchi
    - `n` scelto dall'utente
    - I cerchi sono adiacenti e occupano tutto il canvas
- Il colore dei cerchi varia linearmente
    - In ogni riga: rosso nullo nel primo cerchio, <br> saturo nell'ultimo
    - In ogni colonna: verde nullo nel primo cerchio, <br> saturo nell'ultimo

---

![](images/misc/slope.svg) $y = m·x + q$
# 2.6 Segmento e retta

- Definire *funzione* `slope` per una retta
    - Parametri: due punti attraversati
    - Risultato: coefficiente angolare `m`
    - $m = \frac{\Delta y}{\Delta x}$
- Definire *funzione* `intercept` per una retta
    - Parametri: due punti attraversati
    - Risultato: quota all'origine `q`
    - Nota $m$, si sfrutta $y1 = m·x1 + q$
- In una *funzione* `main`
    - Chiedere all'utente le coordinate di due punti
    - Chiamare le due funzioni e mostrare i risultati
    - Controllare prima se la retta è verticale

---

![large](images/misc/gold-price.svg)
# 2.7 Media, uno ogni tre

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
    - Il valore `-1` termina la sequenza
- Calcolare il valore medio, considerando solo un valore ogni 3, tra quelli inseriti
    - Tenere un conteggio; il conteggio corrente è multiplo di 3?

>

Attenzione: il numero negativo non fa media

---

![](images/misc/leap-centuries.svg)
# 2.8 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400
<br>
<https://it.wikipedia.org/wiki/Anno_bisestile#Definizione>

---

![](images/fun/polygon.svg)
# 2.9 Poligono regolare

- Disegnare un poligono regolare
    - Come in questo esercizio: <br> <https://github.com/tomamic/fondinfo/wiki/P03-Funzioni#disegno-di-un-poligono>
- Fare in modo che il primo vertice sia in alto, sopra al centro
- Variare inoltre linearmente il colore dei lati
    - Il rosso è saturo per il primo lato, nullo per l'ultimo lato
    - Il blu è nullo per il primo lato, saturo per l'ultimo lato

---

# Esercitazione 3 (2023-10-09)

---

![](images/misc/triangle-notations.svg)
# 3.1 Classe triangolo

- Creare una classe `Triangle`
    - Campi: misure dei tre lati
    - Metodo per il calcolo del perimetro
    - Metodo per il calcolo dell'area
- Definire una funzione `main`
    - Chiedere all'utente le misure dei tre lati
    - Istanziare un oggetto di classe `Triangle`
    - Usarne i metodi per calcolare perimetro e area
    - Mostrare all'utente i risultati

>

$area = \sqrt{s \cdot (s-a) \cdot (s-b) \cdot (s-c)}, s = \frac{a+b+c}{2}$

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# 3.2 Pallina al centro

- Modificare la classe `Ball` presente negli esempi
- Parte al centro, in direzione casuale
    - Alto, basso, sinistra, destra
    - Costruttore senza parametri (oltre a `self`)
- Arrivata al bordo, riparte dal centro
    - Direzione casuale
- Gestire l'animazione di una pallina
    - Come nel codice di esempio

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# 3.3 Ritorno a casa

- Riprendere l'esercizio precedente
- Parametri del costruttore per posizione iniziale
    - La posizione iniziale è la *home* della pallina
- Arrivata al bordo, la pallina riparte dalla sua *home*
    - Anzichè dal centro
- Creare ed animare due palline
    - Con due *home* diverse

---

![](images/misc/slope.svg)
# 3.4 Funzione distanza

- Definire una funzione `distance`
    - Dati gli estremi, come due tuple
    - Calcolare la lunghezza del segmento
- Definire una funzione `main`
    - Chiedere all'utente le posizioni dei due punti
    - Chiamare la funzione `distance`
    - Mostrare all'utente il risultato

---

![](images/misc/slope.svg)
# 3.5 Classe segmento

- Creare una classe `Segment`
    - Campi: posizioni dei due estremi
    - Metodo per il calcolo della lunghezza $d$
    - Metodo per il calcolo della pendenza $m$
    - Metodo per il calcolo dell'intercetta $q$ <br> considerando la retta passante dai due punti
- Definire una funzione `main`
    - Chiedere all'utente le posizioni dei due punti
    - Istanziare un oggetto di classe `Segment`
    - Usarne i metodi per calcolare $d,  m, q$
    - Mostrare all'utente i risultati

---

![](images/misc/characters.png)
# 3.6 Punti e spazi

- Data una stringa inserita dall'utente
- Contare i punti
- Contare gli spazi

---

![](images/misc/characters.png)
# 3.7 Codici pari e dispari

- Data una stringa inserita dall'utente
- Stampare i codici Unicode di tutti i suoi caratteri
- Contare le minuscole con codice Unicode dispari
    - `a, c, e…`
- Contare le minuscole con codice Unicode pari
    - `b, d, f…`
- Es. `"Python"`: 3 minuscole con codice pari, 2 con codice dispari

---

![](images/algo/guard.png)
# 3.8 Sentinella

- Riprendere l'esercizio precedente
- Continuare il conteggio su più righe di testo inserite dall'utente
- Il programma si interrompe quando l'utente inserisce una riga vuota
- Mostrare i due conteggi complessivi
    - Minuscole con codice dispari
    - Minuscole con codice pari

---

![](images/misc/three-cards.png)
# 3.9 Tre carte

- All'inizio l'utente ha 10 monete
- A ogni turno:
    - Viene estratto un numero segreto
    - A sorte tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

---

# Esercitazione 4 (2023-10-16)

---

![](images/fun/polygon.svg)
# 4.1 Lato poligono

- Definire una funzione `polygon_side`
    - Parametro: raggio cerchio circoscritto $r$
    - Parametro: numero di lati $n$
    - Risultato: lunghezza del lato $l$
    - $l = 2 \cdot r \cdot \sin \frac{\pi}{n}$
- Definire una funzione `main`
    - Chiedere all'utente $r$ e $n$
    - Invocare la funzione `polygon_side`
    - Mostrare il risultato

---

![](images/fun/polygon.svg)
# 4.2 Classe poligono

- Definire una classe `Polygon`
- Campi, da inizializzare:
    - Raggio cerchio circoscritto, $r$
    - Numero di lati, $n$
- Metodi per calcolare:
    - Lunghezza lato, $l = 2 \cdot r \cdot \sin \frac{\pi}{n}$
    - Apotema, $a = r \cdot \cos \frac{\pi}{n}$
- Definire una funzione `main`
    - Chiedere all'utente $r$ e $n$
    - Creare una istanza di `Polygon`
    - Eseguirne i metodi necessari
    - Mostrare all'utente $l$ e $a$

---

![](images/misc/blue-row.svg)
# 4.3 Cerchi blu

- Chiedere all'utente un numero $n$
- Disegnare una riga di $n$ cerchi blu
    - Affiancati, su canvas 500×500
    - Intensità di blu linearmente crescente
- Disegno simile alla figura, però…
    - Lasciare un margine di 25px rispetto ai bordi laterali del canvas
    - Intensità di blu del primo cerchio: 50
    - Intensità dell'ultimo: 200

---

![](images/repr/ascii.svg)
# 4.4 Tabella ASCII

- Mostrare in tabella i caratteri ASCII
    - 8 righe × 16 colonne
- In ogni posizione $(x, y)$, calcolare $i = 16·y + x$
    - Se il codice $i$ è stampabile (tra 32 e 126)… <br>
      Mostrare il carattere corrispondente al codice $i$
    - Altrimenti mostrare un punto

``` txt
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
  ! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~ .
```

---

![](images/oop/ball-object.svg)
# 4.5 Movimento a yo-yo

- Modificare la classe `Ball` presente negli esempi
- Alla creazione, assume una direzione casuale
    - Alto, basso, sinistra, destra
    - Parametri per posizione di partenza (*home*)
- Quando si allontana di 100px dalla sua *home*…
    - Prende la direzione opposta
- Ogni tanto, riparte dalla stessa *home*
    - Ma in direzione ortogonale alla precedente
    - Con probabilità 1/300, ad ogni frame
- Gestire l'animazione di due palline
    - Come nel codice di esempio

>

Le palline possono anche uscire dal canvas

---

# 4.6 Lista di palline

- Riprendere l'esercizio precedente
- Gestire l'animazione di una lista di 4 palline
    - Posizioni predefinite dal programma
- Ogni tanto, aggiungere un'altra pallina
    - A ogni frame, può succedere con probabilità 1/300
    - Posizione di partenza casuale

---

![](images/misc/characters.png)
# 4.7 Gruppi di lettere

- Definire una funzione `count_groups`
    - Parametro: una stringa di testo
    - Contare quante lettere sono nel gruppo `A-M`
    - Contare quante lettere sono nel gruppo `N-Z`
    - *Case unsensitive* : sia maiuscole che minuscole
    - Risultato: una coppia con entrambi i conteggi
- Definire una funzione `main`
    - Chiedere un testo all'utente
    - Invocare la funzione
    - Mostrare il numero di lettere in `A-M`
    - Mostrare il numero di lettere in `N-Z`

---

![](images/algo/guard.png)
# 4.8 Sentinella su righe

- Sfruttare la funzione `count_groups`
    - Senza modifiche
- Continuare il conteggio su più righe di testo inserite dall'utente
- Il conteggio si interrompe quando l'utente inserisce una riga vuota
- Mostrare i risultati complessivi
    - Lettere in gruppo `A-M` totali
    - Lettere in gruppo `N-Z` totali

---

# 4.9 Cerchi sovrapposti

- Disegnare dei cerchi casuali
    - Posizione e colore casuale
    - Tutti di raggio 20
- Il numero dei cerchi non è fissato
    - Il programma termina quando…
    - L'ultimo cerchio si sovrappone a uno dei precedenti <br>
      (valutare la distanza tra i centri)

>

Memorizzare in una lista le posizioni dei cerchi
<br>
Usare una variabile booleana per segnare il caso di sovrapposizione

---

# Esercitazione 5 (2023-10-23)

---

![](images/oop/border.png)
# 5.1 Movimento diagonale

- Modificare `Ball` nell'esempio `bounce`
- Quando la pallina raggiunge un bordo laterale, non lo supera
    - La *x* rimane fissa al valore limite
    - La *y* può ancora cambiare
- Quando raggiunge il bordo in alto o in basso, non lo supera
    - La *y* rimane al valore limite
    - La *x* può ancora cambiare
- Il movimento termina in un angolo
- Creare una arena contenente solo una pallina

---

![](images/oop/border.png)
# 5.2 Controllo da tastiera

- Riprendere l'esercizio precedente
- Controllare la pressione dei tasti freccia
    - Impostare solo *dx* (non dy), se premuta una freccia orizzontale
    - Impostare solo *dy* (non dx), se premuta una freccia verticale
    - Nella funzione di gestione tasti, non modificare nè x, nè y
- Lontano dai bordi, il movimento rimane sempre in una delle quattro direzioni diagonali
    - Quando la pallina raggiunge uno dei bordi, non lo supera
    - Ma continua a muoversi sul bordo, fino all'angolo

---

![](images/misc/histogram.svg)
# 5.3 Skyscrapers, da sinistra

- Chiedere all'utente una sequenza in numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Quante volte cambia il massimo?

>

Da sinistra a destra, quanti “tetti” si vedono? (Nell'esempio: 6)
<br>
Non usare nessuna lista

---

![](images/misc/histogram.svg)
# 5.4 Skyscrapers, da destra

- Chiedere all'utente una sequenza in numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Quante volte cambia il massimo, osservando la sequenza al contrario?

>

Da destra a sinistra, quanti “tetti” si vedono? (Nell'esempio: 5)
<br>
La funzione `reversed` restituisce una sequenza rovesciata

---

# 5.5 Ghost

- Modificare `Ghost` nell'esempio `bounce`
- Parte dal centro del canvas
- Direzione casuale
    - Solo verticale o orizzontale
    - Senza tornare indietro
- Alla pressione del tasto `"h"`
    - Ritorna al centro dello schermo
    - Continua i movimenti casuali
- Creare un'arena con solo un fantasma

---

![](images/misc/troll-key.png)
# 5.6 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve in input una stringa di testo
    - Produce in output la stesso testo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
- Es. “I want *this text* to be uppercase”
    - → “I want THIS TEXT to be uppercase”
- Da una funzione `main`, applicare la funzione su una stringa inserita dall'utente

>

Segnare in un `bool` se si è incontrato un asterisco iniziale, ma non ancora un asterisco finale
<br>
Non usare gli indici sulla stringa

---

![](images/misc/donkey-kong.png)
# 5.7 Donkey Kong: Mario

- *Primo progetto* (in coppia o da soli)
- Creare `Mario` come sottoclasse di `Actor`
    - Simile a Turtle, ma con la gravità
    - Se cade a fondo schermo, si ferma lì
- Saltare, alla pressione di ⬆️
    - Valore negativo a velocità verticale
    - Poi agirà di nuovo la gravità
    - Si può saltare solo dal fondo dello schermo
- Creare una arena con un solo personaggio
    - Disegnato come rettangolo grigio

>

<https://archive.org/details/donkey-kong-original-edition-e-vc>

---

![](images/misc/donkey-kong.png)
# 5.8 Donkey Kong: piattaforme

- Creare `Platform` come sottoclasse di `Actor`
    - Personaggio immobile nel gioco
- In caso di collisione tra *Mario* e una piattaforma
    - Posizionare Mario esattamente sopra alla piattaforma
- Miglioramento: collisione valida solo se...
    - Il punto in mezzo ai piedi di *Mario* è dentro la piattaforma
- Creare le piattaforme a partire dalla lista fornita

---

![](images/misc/donkey-kong.png)
# 5.9 Donkey Kong: sprite

- Disegnare lo sfondo di Donkey Kong
    - Anzichè cancellare il canvas
- Usare gli sprite di Donkey Kong
    - Diversi per movimenti verso destra e sinistra
    - Diversi per i salti

>

<https://github.com/tomamic/sprites>

---

# Esercitazione 6 (2023-10-30)

---

# 6.1 Lettere iniziali uguali

- Scrivere una funzione `len_common_prefix`
    - Parametri: due stringhe da confrontare
    - Risultato: numero di lettere iniziali uguali tra le due stringhe
- Scrivere una funzione `main`
    - Chiedere all'utente due stringhe di testo
    - Invocare `len_common_prefix` sulle due stringhe
    - Mostrare all'utente il risultato
- Es. `“carta”` vs. `“carota”` → 3 (`“car”`)

---

# 6.2 Valori sopra la media

- Chiedere all'utente una sequenza di interi, terminata da 0
    - Il valore 0 non fa parte della sequenza
- Calcolare e mostrare il valore medio
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

![](images/fun/bike-lock.png)
# 6.3 Configurazioni di simboli

- Scrivere una funzione per generare tutte le configurazioni di lunghezza 3
    - Parametri: `str` contenente l'insieme dei simboli validi (presenti su ogni ruota)
    - Risultato: lista di `str` (configurazioni)
- Possibile approccio
    - Usare 3 cicli `for` annidati
    - Ogni `for` scorre tutto l'insieme di simboli
    - Una configurazione è una `str`, ottenuta concatenando i 3 simboli correnti
- Per test, fornire in input le vocali `"AEIOU"`, per ottenere:
    - `["AAA", "AAE", "AAI", "AAO", "AAU", "AEA", "AEE", "AEI", "AEO", "AEU", "AIA", ...`

---

![](images/misc/histogram-rot.svg)
# 6.4 Istogramma in orizzontale

- Leggere da un file una sequenza di valori (positivi)
- Mostrare un istogramma, in un canvas 600×600
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile
    - L'altezza del canvas è divisa equamente tra le barre

>

Memorizzare i valori in una lista

---

# 6.5 Classe per quadratiche

- Definire una classe delle espressioni quadratiche
- Campi per memorizzare i tre coefficienti
- Metodo per valutare l'espressione in un punto dato
    - Parametro per il valore di *x*
- Nella parte principale del programma
    - Chiedere all'utente i coefficienti per istanziare un unico oggetto
    - In un ciclo, valutare l'espressione per vari valori *x* inseriti dall'utente

![large](images/misc/quadratic.svg)

---

# 6.6 Classe per polinomi

- Definire una classe delle espressioni polinomiali
- Campo per la *lista* dei coefficienti
    - Parametro del costruttore
    - Lunghezza: *n+1* (*n*: grado)
- Metodo per valutare l'espressione in un punto dato
    - Parametro per il valore di *x*
- Nella parte principale del programma
    - Chiedere all'utente i coefficienti per istanziare un unico oggetto
    - In un ciclo, valutare l'espressione per vari valori *x* inseriti dall'utente

![large](images/misc/polynomial.svg)

---

![](images/misc/donkey-kong.png)
# 6.7 Donkey Kong: scale

- Inserire in gioco personaggi immobili per le scale
    - Non occorre disegnarli, sono nell'immagine di sfondo
- Gestire tutte le scale come complete, senza considerare quelle interrotte
- Mario può arrampicarsi sulle scale quando è in collisione
    - Centro dei piedi dentro al rettangolo della scala
    - Rettangolo della scala più grande dell'immagine, per arrivare sopra alla piattaforma

---

![](images/misc/donkey-kong.png)
# 6.8 Donkey Kong: barili

- I barili sono generati casualmente in alto
- Si muovono in orizzontale sulle piattaforme
- Fuori dalle piattaforme, cadono
- Se arrivano ai lati dello schermo, rimbalzano
- Se si scontrano con Mario, lo uccidono
- Se incontrano una scala, casualmente possono decidere di scendere
- Quando arrivano in basso, escono dal gioco

---

![](images/misc/donkey-kong.png)
# 6.9 Donkey Kong: dati da file

- Ottenere le posizioni di piattaforme e scale da file
- File testuale (`.txt`) fornito
- Una scala o una piattaforma per ogni riga
    - Tipo, x, y, w, h

---

# Esercitazione 7 (2023-11-06)

---

# 7.1 Riempimento

- Definire una funzione con due parametri
    - Una lista di numeri
    - Un indice per la lista
- Riempire con `1` la regione attorno all'indice dato
    - Cella data e celle adiacenti, finchè contenenti `0`
    - Arrivati a celle diverse da `0`, il riempimento si blocca

``` txt
0022000000002000
→        ^
0022111111112000
```

---

![](images/misc/histogram.svg)
# 7.2 Istogramma con barre verticali

- Leggere da un file una sequenza di valori (positivi)
- Mostrare un istogramma, in un canvas 600×600
    - Altezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più alta occupa tutto lo spazio disponibile
    - Barre in verde, per valori sotto alla media
    - Barre in rosso, per valori sopra (o uguali) alla media
    - La larghezza del canvas è divisa equamente per le barre

---

# 7.3 Numeri tra parentesi

- Leggere riga per riga un file di testo
- Riscrivere a console i numeri racchiusi tra parentesi
    - Se tra parentesi tonde ci sono solo cifre
- Eseguire un ciclo `for` su ogni riga

``` txt
Some text (123) 0th3r (t3xt) (25) etc.
→
123
25
```

---

![](images/misc/measure-tape.png)
# 7.4 Lunghezza parole

- Leggere il file `license.txt`, riga per riga
- Separare le parole di ogni riga con `split`
    - In alternativa: *regex* per eliminare punteggiatura
- Contare le parole con diverse lunghezze, tra 1 e 20
    - Quante parole di lunghezza 1?
    - Quante parole di lunghezza 2? 3? … 20?

---

![](images/misc/college-student.jpg)
# 7.5 Classe studente

- Scrivere classe per uno *studente*, rappresentata così:
    - *Matricola* dello studente, testuale
    - *Lista degli esami* sostenuti, con *data* e *crediti* (inizialmente vuota)
- *Metodo* per aggiungere un nuovo esame
    - Parametri: *data* (testuale, es.: `"2023-10-06"`) e *crediti*
    - Aggiungere una tupla alla lista degli esami
- *Metodo* per ottenere la somma dei crediti acquisiti tra *due date* scelte (parametri)

>

Due date si possono confrontare direttamente come testo

---

![](images/misc/college-student.jpg)
# 7.6 Esami da file

- Istanziare un oggetto studente (esercizio precedente)
- Leggere tutti gli esami da un file
    - In ogni riga: data e crediti, separati da spazio
- In un ciclo, chiedere poi all'utente due date
    - Per ogni coppia di date…
    - Calcolare la somma dei crediti acquisiti in quel periodo

---

![](images/misc/donkey-kong.png)
# 7.7 Donkey Kong: scale

- *Scale e salti*
    - Mario non può saltare, mentre è attaccato a una scala
    - Mario non può attaccarsi a una scala, mentre salta
- *Scale interrotte*
    - Mario non può passare
    - Barili possono passare

---

![](images/misc/donkey-kong.png)
# 7.8 Donkey Kong: fuoco

- Quando i barili arrivano in basso a sx, possono:
    - Infuocarsi, oppure…
    - Uscire dal gioco
- *Barili infuocati*
    - Si muovono in orizzontale, casualmente
    - Se incontrano una scala, casualmente possono decidere di salire
    - Superano anche le scale interrotte

---

![](images/misc/donkey-kong.png)
# 7.9 Donkey Kong: fine partita

- Creare sottoclasse di `Arena` per *Donkey Kong*
    - Metodo per controllare la *vittoria* (Mario in cima)
    - Metodo per controllare la *sconfitta* (Mario muore)
    - Metodo `__init__` per *inizializzare* i personaggi
- Creare una classe di GUI
    - Per la visualizzazione del gioco
- [Esempio BounceGame](https://tomamic.github.io/pyodide/?p32_bouncegame.py)

---

# Esercitazione 8 (2023-11-13)

---

![](images/fun/matryoshka.png)
# 8.1 Radice comune con ricorsione

- Scrivere funzione ricorsiva `len_common_prefix`
    - Parametri: due stringhe da confrontare
    - Risultato: numero di lettere iniziali uguali tra le due stringhe
    - Come es. 6.1
- Se una stringa è vuota, il risultato è 0
- Se le prime due lettere sono diverse, il risultato è 0
- Altrimenti:
    - Considerare le stringhe senza la prima lettera
    - Risultato: 1 + lunghezza radice comune tra stringhe ridotte

>

Saranno accettate solo soluzioni ricorsive

---

# 8.2 Riempimento su riga

- Considerare una matrice di `int`, memorizzata in una lista semplice
    - Simile all'esempio fornito
- Chiedere all'utente una posizione `(x, y)`
- Riempirre di `1` le celle a destra e sinistra di quella selezionata
    - Cella data e celle adiacenti, finchè contenenti `0`
    - Arrivati a celle diverse da `0`, il riempimento si blocca

``` txt
00220000
02000022
00200020
00222200
00000000
02200002
```

---

# 8.3 Riempimento su colonna

- Similmente all'esercizio precedente, però su colonna
- Riempirre di `1` le celle sopra e sotto a quella selezionata
    - Cella data e celle adiacenti, finchè contenenti `0`
    - Arrivati a celle diverse da `0`, il riempimento si blocca

---

# 8.4 Matrice da file

- Leggere da file il contenuto di una matrice
    - Semplice lista di `int`
    - Matrice simile a esercizio 8.2
    - Ogni carattere del file è un numero della matrice
- Ricevare le dimensioni della matrice dal file
    - N. colonne: lunghezza prima riga
    - N. righe: n. righe del file
- Mostrare la matrice
- Mostrare il numero di colonne e righe

>

Attenzione al `\n` a fine riga

---

![](images/fun/htree.png)
# 8.5 Albero di H

- Disegnare ricorsivamente un *H-Tree*
- Partire da un centro e una lunghezza assegnati
- Se lunghezza < 3 pixel: niente, finito
- Altrimenti
    - Disegnare un segmento orizzontale e due verticali, come in figura
    - I tre segmenti hanno uguale lunghezza
- Attorno a ogni estremo dei segmenti verticali…
    - Ripetere il disegno ricorsivamente
    - Ma con lunghezza dei segmenti dimezzata

---

![](images/hist/eratostenes.jpg)
# 8.6 Crivello di Eratostene

- Trovare tutti i numeri primi ≤ `n`, scelto dall'utente
- Inizialmente, ci sono tutti i numeri da `2` a `n`
- Ciclicamente, per ciascuno dei valori presenti
    - Lo si conferma come numero primo
    - Si eliminano tutti i suoi multipli
- In pratica
    - Si prende il `2` e si eliminano i suoi multipli
    - Si prende il `3` (ancora presente) e si eliminano i multipli
    - Il `4` non c'è più, quindi si prende il `5`, ecc.
- Alla fine, restano solo i numeri primi

>

Preferibile usare una lista di `bool`, mettendo a `False` i numeri non primi
<br>
Usare una list di `int`, con vere rimozioni, sarebbe problematico e inefficiente
<br>
<https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode>

---

# 8.7 Gioco dei dispari

- Creare una sottoclasse di `BoardGame`
- `__init__` – Matrice con tutti i numeri da `1` a `w*h`, mescolati
- `play` – Memorizzare come *marcate* le celle scelte dall'utente
    - Ad esempio, cambiare il segno al numero
- `read` – Contenuto di una cella, come `str`
    - Aggiungere “`!`” al testo, se cella *marcata*
- `finished` – Sono stati *marcati* tutti e soli i numeri dispari?
    - Oppure, *marcato* per errore un numero pari?
- `status` – Messaggio per partita in corso, vinta, o persa

---

![](images/dev/bug-feature.png)
# 8.8 Donkey Kong: test

- Testare le funzionalità del gioco Donkey Kong
- In particolare
    - Movimento dei personaggi
    - Collisioni tra personaggi
    - Vittoria e sconfitta
- Per esempio
    - Mario non salta, mentre si arrampica
    - Mario non si arrampica, mentre salta

>

<https://tomamic.github.io/pyodide/?p34_bouncetest.py>

---

![](images/misc/handwriting.jpg)
# 8.9 Donkey Kong: bella copia

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi*, semplici, in inglese
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : preferibilmente, cicli senza `break`
    - *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*
    - ❗ Accedere ai campi solo all'interno della classe stessa

---

# Esercitazione 9 (2023-11-20)

---

# 9.1 Matrice casuale

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempirla con lettere minuscole casuali, con possibili ripetizioni
- Salvare la matrice, riga per riga, in un file di testo (*CSV*)
    - Caratteri separati da virgola, senza virgola a fine riga
- In un ciclo
    - Chiedere un carattere all'utente
    - Contare quante volte è presente ovunque nella matrice
    - E quante volte è presente nelle celle di bordo <br> (celle in prima o ultima colonna, o riga)

``` txt
a,c,r,a
r,r,t,a
t,r,e,f
```

---

![](images/fun/matryoshka.png)
# 9.2 Massimo con ricorsione

- Definire una funzione ricorsiva `max_char`
    - Cerca, in una stringa di testo, il carattere con codice Unicode massimo
- Se il testo ha lunghezza 1, l'unico carattere è quello massimo
- Altrimenti il carattere con codice massimo è pari al maggiore tra:
    - Il primo carattere
    - Il carattere con codice massimo tra tutti gli altri (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive
<br>
Confrontare testo con testo, senza usare `ord`

---

![](images/misc/recur-polygon.svg)
# 9.3 Poligono ricorsivo

- Riprendere l'esempio del poligono
    - https://tomamic.github.io/pyodide/?p21_polygon.py
- Se il raggio è più piccolo di 5, non disegnare niente
- Altrimenti, disegnare il poligono
- Poi, centrato in ogni vertice…
    - Disegnare ricorsivamente…
    - Un poligono con raggio ridotto a ⅓

---

![](images/misc/random-walk.svg)
# 9.4 Passeggiata casuale

- Chiedere all'utente un numero `n`
- A partire dalla posizione `x = 0, y = 0`
- Compiere `n` passi, ciascuno in una direzione casuale
    - Estrarre un numero casuale `r` tra 0 e 3
    - Se `r == 0`, sottrarre 1 alla `y` attuale (alto)
    - Se `r == 1`, sommare 1 alla `x` attuale (destra)
    - Se `r == 2`, sommare 1 alla `y` attuale (basso)
    - Se `r == 3`, sottrarre 1 alla `x` attuale (sinistra)
- Dopo ogni passo, scrivere in un file di testo una riga
    - La riga conterrà `r`, `x` e `y`, separati da virgola

---

# 9.5 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio precedente
- Contare quante volte, in tutto, è stata presa ciascuna direzione
    - Quante volte verso l'alto? Quante verso destra? Ecc.
    - Alla fine, mostrare i `4` risultati dei conteggi
- Trovare la distanza euclidea del punto più lontano dall'origine

>

Per conteggiare i vari risultati, si può usare una lista di 4 elementi
<br>
Ciascun elemento nella lista è un contatore, per una delle direzioni

---

![](images/fun/bike-lock.png)
# 9.6 Lucchetto a combinazione

- Generare tutte le “combinazioni” di lunghezza `n`
    - Parametro: numero `n` di ruote del lucchetto
    - Parametro: `str` con i simboli presenti su ogni ruota
    - Risultato: `list[str]` con le combinazioni
- Algoritmo:
    - Zero ruote: l'unica “combinazione” è la stringa vuota: `[""]`
    - Altrimenti: per ogni elemento della prima ruota...
    - Concatenarlo con tutte le “combinazioni” sulle ruote rimanenti (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/akari.svg)
# 9.7 Akari - Light up

- *Secondo progetto* (in coppia o da soli)
- Scopo: disporre delle lampade, fino a illuminare tutte le celle
- Una lampada illumina le celle sulla sua riga e la sua colonna, fino a una cella nera o al bordo esterno
- Ogni cella bianca può ospitare una lampada, ma:
    - Un numero indica quante lampade devono trovarsi nelle celle adiacenti (in orizzontale e verticale)
    - Due lampade non possono illuminarsi a vicenda

>

<https://www.nikoli.co.jp/en/puzzles/akari/>
<br>
<https://www.brainbashers.com/lightup.asp>
<br>
<https://en.wikipedia.org/wiki/Light_Up_(puzzle)>
<br>

---

# 9.8 Akari - Funzionalità di base

- Inizializzare la matrice come nell'esempio
    - La matrice può essere rettangolare (*rows ≠ cols*)
    - Si può usare `5` per cella nera libera
- `play` - Mettere/togliere una lampada (*bulb*) in una cella
    - L'utente posiziona liberamente le lampade
    - In tutte le celle, tranne quelle nere
    - Anche se non sono mosse corrette
- `read` - Contenuto di una cella in forma testuale
    - Lampada: `"@"`
    - Cella illuminata: `"+"`
    - Celle nere: `"⓿", "❶", "❷", "❸", "❹", "⬤"`
    - Punto: `"·"`

---

# 9.9 Akari - Soluzione

- `finished` - Il gioco è stato completamente risolto?
    - Celle bianche tutte illuminate
    - Vincoli numerici rispettati
    - Lampade non si illuminano a vicenda

---

# Esercitazione 10 (2023-11-27)

---

![](images/fun/matryoshka.png)
# 10.1 Potenze con ricorsione

- Definire una funzione ricorsiva per calcolare la potenza intera positiva di un numero
- Per qualsiasi numero $x$, $x^0 = 1$
- La potenza $n$-esima di un numero $x$ si può calcolare come:
    - $x^n = x \cdot x^{n-1}$, per $n > 0$
- In una funzione main
    - Chiedere i dati all'utente
    - Mostrare il risultato

>

Saranno accettate esclusivamente le soluzioni ricorsive
<br>
IEEE definisce anche $0^0 = 1$, anzichè indeterminato

---

![](images/fun/sin-cos.png) ![](images/misc/interpolation.svg)
# 10.2 Classe FastSin

- Definire una classe `FastSin`
    - All'inizializzazione, precalcola il valore della funzione `sin` tra 0 e 359°
    - Lista di 360 valori precalcolati
- Metodo `eval` con parametro `x` (`float`)
    - Restituisce una approssimazione del `sin`, recuperandolo dalla lista
- *Opzionalmente*, interpolare tra i due valori più vicini
    - Ricavare la retta tra i due punti più vicini ad `x` disponibili, calcolare in `x`
    - <https://en.wikipedia.org/wiki/Linear_interpolation>

---

![](images/misc/sierpinski-rgb.svg)
# 10.3 Quadratini in RGB

- Scrivere una funzione ricorsiva di disegno
    - Parametri: `x`, `y`, `s` (posizione e lato)
- Nel quadrato, identificare 3 quadratini di lato `s/2` disposti a triangolo: due adiacenti e il terzo sopra
- Se i quadratini sono abbastanza piccoli (p.es. `<= 16`)
    - → Colorarli rispettivamente in rosso, verde e blu (senza ricorsione)
- Altrimenti: *ricorsione*
    - Ripetere la suddivisione per ciascuno dei tre quadratini

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/fun/neighborhood4.png)
# 10.4 Massimo in vicinato

- Scrivere una funzione `max_neighbor`
    - Parametri: matrice di `int`, con `w` e `h`
    - Risultato: nuova matrice, stesse dimensioni
- In ogni cella, il risultato è il *massimo* dell'intorno
    - 5 valori: cella stessa e 4 adiacenti
    - Attenzione: 4 valori ai bordi, 3 valori agli angoli
- Definire una funzione `main`
    - Leggere la matrice da un file CSV `"input.txt"`
    - Attivare `max_neighbor`
    - Scrivere il risultato in un file CSV `"output.txt"`

---

![](images/comp/list-tree.svg) Però, stringhe al posto di interi
# 10.5 Liste annidate, ricerca

- Definire una funzione *ricorsiva*
    - Parametro: una parola, o liste annidate contenenti parole (`T = str | list["T"]`)
    - Parametro: una parola da cercare
    - Risultato `bool`: la parola è contenuta nella collezione?
- Ricerca ricorsiva
    - Una parola semplice può corrispondere o meno a quella cercata
    - In una lista, si cerca ricorsivamente in ogni elemento
- Esempio : `["Ann", ["Bart", ["Carol", "Cindy"], "Bob", "Art"], ["Bea"], "Bill"]`
    - `"Cindy"` → `True`, `"Conrad"` → `False`

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.6 Lunghezza media

- Leggere per intero il file “`licence.txt`”
- Calcolare la lunghezza media delle parole…
    - Raggruppate in base alla loro prima lettera
    - Indifferentemente, maiuscola o minuscola (*case-insensitive*)
- Per esempio
    - Le parole che iniziano con “`a`” hanno lunghezza media 3.74
    - Quelle con “`b`” hanno lunghezza media 2.77
    - Quelle con “`c`” hanno lunghezza media 7.00 …

``` py
import re
words = re.findall(r"\w+", "Bla, bla (and that's it!).")
print(words)
```

>

Usare una lista di 26 contatori

---

# 10.7 Akari - Lettura da file

- Nell'inizializzazione
    - Parametro: nome del file
    - Leggere la matrice da file
    - Dimensioni inferite dal file stesso
- Permettere di marcare/smarcare una cella con un punto (*dot*)
    - Segnala l'assenza di lampada (secondo l'utente)
    - A scelta: click con tasto destro
    - Altrimenti, a rotazione: *empty-bulb-dot-empty…*
- [Esempi di partite, da caricare](<https://github.com/tomamic/paradigmi/tree/master/cpp2016/akari/games>)

---

# 10.8 Akari - Aiuto per vincoli

- Metodo di aiuto per i vincoli numerici
- Vincolo `N` già circondato da `N` lampade:
    - Marcare con punti tutte le celle libere
- Vincolo `N` circondato da `M` lampade ed esattamente `N-M` celle libere
    - posizionare lampade in tutte le celle libere
- Attivare al click su vincolo

---

# 10.9 Akari - Unica fonte

- Cercare una cella vuota e non illuminata, non illuminabile da altre fonti
    - Posizionare lì una lampada
- Cercare una cella marcata con punto non illuminata, che sia illuminabile da una sola fonte
    - Una sola cella libera visibile, sia in riga che colonna
    - Posizionare una lampada nella fonte
- Completare anche bulb e mark obbligati attorno a tutte le celle nere
    - Solo mosse ovvie (es. 10.8)
- Dalla gui, alla pressione di un tasto, p.es. “`a`”

>

<https://www.ce.unipr.it/ruffle/?akari_rules>
<br>
<https://www.ce.unipr.it/people/tomamic/files/akari-techniques.html>

---

# Esercitazione 11 (2023-12-04)

---

# 11.1 Lista di cifre

- Scrivere ed usare una funzione
- Parametro: numero intero positivo `n`
- Risultato: una lista di `int`, con le singole cifre di `n`
    - Prima le unità, poi le decine ecc.
- Es. `2435` → `[5, 3, 4, 2]`
- *Non è ammesso* rappresentare il numero come `str`
    - Se `n` è `0`, restituire subito `[0]`
    - Altrimenti, usare ripetutamente la divisione intera per 10 e il resto
- Opzionalmente, nella funzione `main`…
    - Verificare che la lista sia corretta
    - Moltiplicare gli elementi per potenze di 10 e sommare

---

# 11.2 Somma di cifre

- Scrivere e usare una funzione ricorsiva
    - Parametro: un numero naturale `n`
    - Risultato: un numero naturale, di una sola cifra
- Elaborazione
    - Se `n` è minore di 10, `n` è il risultato
    - Altrimenti, calcola la somma `s` delle cifre di `n`… <br> e opera ricorsivamente sulle cifre di `s`
- Esempi
    - *f(41)=4+1=5*
    - *f(327)=f(12)=f(3)=3*
    - Infatti, *3+2+7=12* e *1+2=3*
- *É richiesto* il riuso della funzione definita nell'esercizio precedente

---

![](images/fun/bw-circles.svg)
# 11.3 Cerchi annidati

- Funzione che disegna *cerchi annidati*
    - Parametri: *centro*, *raggio* e *colore*
- Disegna in ogni caso un cerchio sul canvas
    - Come specificato dai parametri
- Poi, se lo spazio non è troppo piccolo…
    - Un cerchio *nero* contiene due cerchi bianchi,<br>raggio ½, disposti in verticale
    - Un cerchio *bianco* contiene due cerchi neri,<br>raggio ½, disposti in orizzontale
    - Ricorsivamente, come in figura

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/repr/file-system.svg)
# 11.4 Documento più grande

- Partire dall'esempio di cartelle e documenti
- Aggiungere metodo `largest` ai *nodi*
    - Risultato: `(size, relative_path)` del doc più grande nei sottonodi
- Astratto nella classe base
- Per un *documento*: dimensione del suo contenuto, suo nome
- Per una *cartella*: risultato maggiore, tra i sottonodi
    - Inserisce il suo nome davanti al path
- Rispetto alla struttura raffigurata a fianco
    - Cercare il `largest` a partire dalla cartella radice

>

<https://tomamic.github.io/pyodide//?p41_folders.py>

---

![](images/fun/neighborhood4.png)
# 11.5 Cleanup

- Scrivere e usare una sottoclasse di `BoardGame`
- Semplice implementazione del gioco *Cleanup*
- Ad ogni mossa, 4 celle cambiano stato
    - Celle adiacenti, in orizzontale e vericale
    - Stato: accesa → spenta → accesa → spenta…
    - La cella centrale selezionata resta *invariata*
- Matrice iniziale di dimensioni configurabili
    - Prima di iniziare, vengono fatte un certo numero di mosse casuali
    - Agiscono come quelle fatte dall'utente
    - Memorizzare la matrice come lista semplice
- La partita termina quando la matrice è tutta pulita

>

<https://www.ce.unipr.it/ruffle/?cleanup>

---

# 11.6 Paint

- Scrivere e usare una sottoclasse di `BoardGame`
- Partire con una matrice vuota di dimensioni configurabili
    - Memorizzare la matrice come lista semplice
- Ad ogni mossa dell'utente riempire con `1` la *cella selezionata*, se ≠ 0
- Riempire anche le 4 *celle adiacenti*, in orizzontale e verticale, se ≠ 0
    - Proseguire *ricorsivamente* a riempire le celle adiacenti, a cascata
    - Riempire l'intera regione, fino a raggiungere valori ≠ 0

``` txt
00220000    00221111
02000022    02111122
00200020 -> 00211120
00222200    00222200
00000000    00000000
02200002    02200002
```

---

![](images/misc/dead-end.jpg)
# 11.7 Akari - Vicolo cieco

- Metodo booleano `unsolvable`, senza parametri
- Controlla se una delle celle già segnate impedisce la soluzione del gioco
    - *Non si può risolvere il gioco senza ripulire una cella*
    - ➊ Almeno un vincolo violato per *eccesso* di lampade, oppure di marcature
    - ➋ Lampadine che si illuminano a vicenda
    - ➌ Celle marcate ma non illuminabili…
- Può restituire `False` anche se la partita non è finita
    - Non ci sono violazioni evidenti, dovute ai segni già inseriti
    - Ci sono però delle celle ancora non segnate

>

Con la GUI, attivare questa funzionalità alla pressione del tasto `u`

---

# 11.8 Akari - Suggerimenti

- Cercare una mossa “ragionata”
    - Come un umano, seguendo la logica
- Creare una *copia* della partita e scegliere una cella *vuota*
- *Provare* a segnare lì una lampada 💡
    - Applicare gli automatismi delle scorse esercitazioni
    - Se regole violate (`unsolvable`) → punto  `·`!
- *Provare* a segnare un punto `·`
    - Applicare gli automatismi delle scorse esercitazioni (8.6)
    - Se regole violate (`unsolvable`) → lampada 💡!
- Se in *entrambi i casi* qualche altra cella prende lo stesso segno…
    - → confermare il segno (lampada o punto)!

>

Provare se i suggerimenti risolvono puzzle di diverse dimensioni
<br>
Con la GUI, attivare questa funzionalità alla pressione del tasto `h`
<br>
⚠️ Se una ipotesi non risulta `unsolvable`, non è detto che sia giusta; non si possono trarre conclusioni!

---

# Akari - Mosse per assurdo

``` py
from copy import deepcopy

# choose (x, y): a free cell
copy1 = deepcopy(self)
copy2 = deepcopy(self)

copy1.move(x, y, "")         # place `bulb` on the 1st copy
copy1.mark_auto()            # mark *all* obvious cells
if copy1.unsolvable():
    self.play(x, y, "flag")  # place `dot` on the real game

copy2.move(x, y, "flag")     # place `dot` on the 2nd copy
# …
```

---

![](images/misc/handwriting.jpg)
# 11.9 Akari - Bella copia e test

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi*, semplici, in inglese
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : preferibilmente, cicli senza `break`
    - *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*
- **Unit test**
    - *Testare* ciascuna delle funzionalità implementate
