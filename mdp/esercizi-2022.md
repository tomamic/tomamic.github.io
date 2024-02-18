![](images/dev/geek-girl.svg)
# Esercizi 2022
## Introduzione alla programmazione

---

# Esercitazione 1 (09-27)

---

![](images/misc/handshake.svg)
# 1.1 Hello, admin!

- Chiedere il nome all'utente
- Rispondere con un saluto, aggiungendo al saluto il nome dell'utente
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![](images/misc/tigro.png)
# 1.2 Anno della tigre

- Chiedere all'utente il suo anno di nascita
- Comunicare se il suo anno di nascita era sotto il segno della tigre, oppure no

>

Sappiamo che il 2022 è l'anno della tigre <br>
Sappiamo che il segno si ripete ogni 12 anni

---

![](images/misc/random-circles.svg)
# 1.3 Cerchi casuali

- Chiedere all'utente un numero `n`
- Disegnare `n` cerchi
    - Tutti con raggio di 50 pixel
    - Ciascuno in posizione casuale
    - Ciascuno con un colore casuale

>

Cominciare a disegnare un solo cerchio, in posizione casuale

---

![](images/misc/shadows.png)
# 1.4 Rettangoli con ombra

- Chiedere all'utente un numero `n`
- Disegnare `n` rettangoli
    - Ciascuno con posizione, dimensione e colore casuale
    - Ciascuno con un ombra grigia spostata a destra e in basso di 5 pixel

>

Fare in modo che i rettangoli e le ombre siano tutti all'interno nel canvas

---

![](images/misc/green-squares.png)
# 1.5 Sequenza di quadrati

- Chiedere all'utente un numero `n`
- Su un canvas 500×500, disegnare `n` quadrati
    - Quadrati con lato decrescente
    - Tutti allineati in alto e a sinistra
- Far variare il colore dei quadrati
    - Dal nero del quadrato più grande
    - Fino al verde saturo del quadrato più piccolo

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
      (se un lato è maggiore della somma degli altri due)
- Visualizzare il responso

---

![large](images/misc/gold-price.svg)
# 1.7 Media dei dispari

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Calcolare il valore medio, considerando solo i valori dispari tra quelli inseriti

---

![large](images/misc/random-walk.svg)
# 1.8 Passeggiata casuale

- Chiedere all'utente un numero `n` (`<100`)
- Partire con `x` e `y` in posizione `(0, 0)`
- Compiere `n` passi, ciascuno in una direzione casuale
    - Estrarre un numero casuale `r` tra `0` e `3`
    - Se `r == 0`, decrementare la `y` di `10` (alto)
    - Se `r == 1`, incrementare la `x` di `10` (destra)
    - Se `r == 2`, incrementare la `y` di `10` (basso)
    - Se `r == 3`, decrementare la `x` di `10` (sinistra)
- Al termine, scrivere a console le coordinate finali
- Scrivere la *distanza di Manhattan* dall'origine
    - Calcolata come `abs(x) + abs(y)`

>

Non occorre disegnare

---

![large](images/misc/random-walk.png)
# 1.9 Passeggiata a crocette

- Riprendere l'esercizio precedente
- Partire con `x` e `y` al centro di un canvas quadrato (p.es. `200×200`)
- Mostrare una piccola crocetta in ogni punto della passeggiata
    - Due linee, `+`
- La prima crocetta è nera
- Ogni crocetta successiva è un po' più chiara

---

# Esercitazione 2 (10-03)

---

![](images/misc/thermometer.png)
# 2.1 Funzione, Fahrenheit

- Definire una funzione `cels_to_fahr`
    - Parametro: temperatura Celsius, in `float`
    - Risultato: temperatura Fahrenheit, in `float`
- Invocare la funzione dalla shell interattiva
- Definire poi una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente la temperatura Celsius
    - Poi chiamare `cels_to_fahr`
    - Infine mostrare all'utente il risultato

>

Partire dalla formula `fahr = cels * 1.8 + 32`

---

# 2.2 Triangolo di cifre

- Leggere un numero intero positivo `n` (< 10)
- Scrivere `n` righe
    - La prima riga, di lughezza 1
    - Le successive, di lunghezza crescente
- In ciascuna riga, scrivere le prime cifre, in ordine

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

![](images/misc/xmas-triangle.svg)
# 2.3 Triangolo di cerchi colorati

- Chiedere all'utente un numero `n`
- Disegnare `n` righe di cerchi, allineate a sinistra
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale

---

![](images/oop/anim-rotate.png)
# 2.4 Pallina lungo i bordi

- Partire dall'esempio della funzione di animazione orizzontale
    - Ogni volta che la pallina raggiunge uno dei 4 bordi...
    - Cambia direzione di 90°, in senso orario
    - Es. Arrivata al bordo destro, vira verso il basso
    - Arrivata al bordo inferiore, vira verso sinistra
- Mostrare l'animazione di una pallina su un canvas

---

![](images/misc/pac-man.png)
# 2.5 Effetto Pac-Man

- Mostrare l'animazione di una pallina, senza rimbalzi
- Quando esce da un bordo, riappare dal bordo opposto
- Ogni tanto, sceglie a caso una tra queste direzioni
    - Alto, basso, destra, sinistra
    - In media una volta ogni 100 frame

---

![](images/misc/college-student.jpg)
# 2.6 Voto stimato

- Scrivere una funzione `estimate_mark`
    - Parametri: *numero crediti*, *ore di studio*
- Stimare il voto atteso per un esame, supponendo che...
    - A ogni credito corrispondano ~ 25h di studio
    - Il voto sia direttamente proporzionale allo studio
- Nel `main`, chiamare la funzione con valori forniti all'utente e mostrare il voto stimato
    - Tenere l'uso della console per I/O fuori da `estimate_work`

>

Es.: un esame da 9 crediti corrisponde a 225h di studio <br>
Se ho studiato tutto, aspiro al 30 <br>
Se ho studiato 180h, in proporzione mi aspetto circa 24

---

![](images/misc/characters.png)
# 2.7 Gruppi di lettere

- Definire una funzione
- Parametro
    - Un testo
- Risultato, due valori
    - Quante lettere del testo sono comprese nel gruppo `A-M`
    - Quante lettere del testo sono comprese nel gruppo `N-Z`
    - Senza distinguere maiuscole e minuscole
- Chiamare la funzione con un testo fornito dall'utente e mostrare i risultati

---

![](images/misc/classical-watch.jpg)
# 2.8 Coordinate polari

- Usare la funzione `from_polar`
    - Conversione da coordinate polari a cartesiane
    - <https://tomamic.github.io/pyodide/?p21_polar.py>
- Trovare la posizione di 12 punti attorno all'origine
    - Distanza dall'origine: 100 px
    - Separati di 30° tra loro
- Scrivere i 12 punti su console testuale
- Mostrare i 12 punti come pallini su un canvas
    - Traslare i punti, in modo che l'origine sia nel centro del canvas

>

<https://it.wikipedia.org/wiki/Sistema_di_coordinate_polari>

---

![](images/misc/solar-system.png)
# 2.9 Animazione circolare

- Visualizzare un cerchio giallo in un punto casuale
    - Sarà il centro di rotazione
- Visualizzare un cerchio blu che ruota attorno a quello giallo
    - Moto circolare uniforme, velocità angolare costante
- 💡 Per la posizione del cerchio blu: coordinate polari
    - Raggio di rotazione: costante, 100px
    - Angolo attuale: variabile
    - Per disegnare: convertire coordinate polari in cartesiane

>

<https://tomamic.github.io/pyodide/?p21_polar.py>

---

# Esercitazione 3 (10-10)

---

![](images/dev/parallelepiped.png) x² = a² + b² + c²
# 3.1 Funzione per diagonale

- Definire una funzione (senza classi)
  - Tre parametri: tre spigoli di un parallelepipedo rettangolo
  - Risultato: la lunghezza della diagonale
- Usare la funzione da una procedura `main`
  - Chiedere all'utente i dati di ingresso
  - Mostrare il risultato
  - Operazioni di I/O solo in `main`
  - Nessuna variabile globale

---

![](images/dev/parallelepiped.png) x² = a² + b² + c²
# 3.2 Parallelepipedo

- Classe che modella un parallelepipedo rettangolo
    - Tre *campi* privati per largezza, profondità, altezza
    - *Metodo* per ottenere la superficie totale
    - *Metodo* per ottenere la diagonale
- Nel corpo principale del programma, creare e usare un parallelepipedo
    - Chiedere all'utente le dimensioni del parallelepipedo
    - Passare queste dimensioni al costruttore, come parametri
    - Mostrare area e diagonale del parallelepipedo creato
- ⚠️ Operazioni di I/O fuori dalla classe

---

![](images/oop/anim-rotate.png)
# 3.3 Pallina con svolta

- Partire dalla classe `Ball` vista a lezione
- Modificare il metodo `move`
    - Quando la pallina arriva a uno dei 4 bordi...
    - Vira la direzione di 90°, in senso orario
    - Es. Arrivata al bordo destro, vira verso il basso
    - Arrivata al bordo inferiore, vira verso sinistra

---

![](images/repr/color-mixing.svg)
# 3.4 Palline colorate

- Partire dalla classe `Ball` vista a lezione
- Modificare il metodo di inizializzazione
    - Generare e memorizzare un colore casuale
- Aggiungere un corrispondente metodo `color`
  - Metodo *getter*, per ottenere dall'esterno il colore
    - Restituire una tupla (tripla RGB)
- Creare due palline e mostrarne graficamente il movimento
    - Per ogni frame, chiamare il metodo `move` di ogni pallina
    - Rappresentare un rettangolo o un cerchio colorato nella posizione aggiornata di ogni pallina

---

![](images/misc/xmas-tree.svg)
# 3.5 Albero di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate al centro
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale
- Aggiungere in fondo una riga con un solo cerchio

---

![](https://raw.githubusercontent.com/tomamic/fondinfo/master/sprites.png)
# 3.6 Scelta sprite

- Partire dalla classe `Ball` vista a lezione
- Creare una lista di oggetti, inizialmente vuota
- A ogni click del mouse, aggiungere un oggetto nel *centro* del canvas
- Ciascuno nel costruttore sceglie (e mantiene per sempre) uno sprite casuale
  - Tra questi 4: pallina, tartaruga, fantasma visibile, o invisibile
  - [sprites.png](https://raw.githubusercontent.com/tomamic/fondinfo/master/sprites.png)

---

![](https://raw.githubusercontent.com/tomamic/fondinfo/master/sprites.png)
# 3.7 Fantasma con click

- Partire dalla classe `Ghost` vista a lezione
- Il fantasma però non scompare casualmente
- Solo al click del mouse, diventa semitrasparente
  - Aggiungere un metodo `disappear` al fantasma
  - Rimane semitrasparente per 100 frame
- Mostare l'animazione di un fantasma

---

![](images/misc/pengo.png)
# 3.8 Pengo, SnoBee [P1]

- Creare una classe `SnoBee` (modificando `Ball`)
    - Dimensione 16×16
    - Mostrare un rettangolo grigio
- Il personaggio si muove casualmente
  - Alto, basso, destra, sinistra
    - 4 pixel per ogni frame
- Cambia direzione solo quando arriva esattamente su un riquadro, ogni 4 frame
    - Posizioni multiple della sua dimensione

>

<https://archive.org/details/arcade_pengo>
<br>
<https://en.wikipedia.org/wiki/Pengo_(video_game)>

---

![](images/misc/pengo.png)
# 3.9 Pengo, sprite [P1]

- Aggiungere alla classe `SnoBee` un metodo `sprite`
- Scelta uno sprite diverso
- A seconda della direzione di movimento

>

[Sprites](images/sprites/pengo.png)

---

# Esercitazione 4 (10-17)

---

![](images/misc/solids.png)
# 4.1 Funzioni per cilindro

- Funzione per calcolare la superficie laterale di un cilindro
    - Due parametri: raggio e altezza
- Funzione per calcolare la superficie totale, comprese le due basi
    - Due parametri: raggio e altezza
- Usare le due funzioni da una procedura `main`
    - Chiedere i dati necessari all'utente
    - Mostrare i risultati
    - I/O solo in `main`
    - Nessuna variabile globale

---

![](images/misc/solids.png)
# 4.2 Classe dei cilindri

- Definire una classe dei cilindri
    - Due campi privati: raggio e altezza
    - Metodo per calcolare la superficie laterale
    - Metodo per calcolare la superficie totale, comprese le due basi
- Usare un oggetto da una procedura `main`
    - Chiedere i dati necessari all'utente
    - Mostrare i risultati
    - I/O solo in `main`
    - Nessuna variabile globale

---

![](images/misc/random-radius.svg)
# 4.3 Cerchi concentrici casuali

- Disegnare un cerchio di raggio 200 e colore casuale
- Disegnare dei cerchi concentrici, via via più piccoli
- Per ognuno, scegliere casualmente raggio e colore
- Fermarsi quando il raggio diventa più piccolo di 10

---

# 4.4 Distanze dall'origine

- Chiedere all'utente `w` e `h`, interi
- Per ogni valore di `x` tra `0` e `w-1`
- Per ogni valore di `y` tra `0` e `h-1`
- Calcolare il quadrato della distanza di `(x, y)` dall'origine
- Mostrare i risultati in forma di tabella
- Per esempio, con `w=4` e `h=3`

``` txt
0   1   4   9
1   2   5   10
4   5   8   13
```

---

![](images/oop/personal-data.png)
# 4.5 Classe delle persone

- Definire una classe delle persone
- Campo privato per *nome*
- Campi privati per *data di nascita*
- Metodo booleano
    - Parametri: data da verificare
    - Risultato: la persona risulta maggiorenne, in quella data?
      <br>(Verificare che sia passato il compleanno)
- Procedura `main`
    - Istanziare un oggetto con dati forniti dall'utente
    - Chiedere all'utente la data odierna
    - Comunicare se la persona risulta maggiorenne

---

![](images/oop/personal-data.png)
# 4.6 Lista di persone

- Usare la classe delle persone (es. 4.5)
- Procedura `main`
    - Creare una lista di oggetti
    - Istanziati con dati forniti dall'utente
    - L'inserimento termina quando il nome è vuoto (sentinella)
- Di seguito, sempre nella procedura `main`
    - Chiedere all'utente varie date da verificare
    - Per ogni data, comunicare quante persone risultano maggiorenni
    - Terminare se la data è `0/0/0` (sentinella)

---

![](images/misc/solar-system.png)
# 4.7 Classe dei pianeti

- Oggetto che ruota attorno a un centro di rotazione
- Campi per la posizione, in coordinate polari
- Campi per *velocità angolare*, *centro di rotazione*, *colore*
- Metodo `move` per fare un passo
- Metodo `pos` per conoscere la posizione `(x, y)`
- Metodo `color` per conoscere il colore `(r, g, b)`
- Mostrare l'animazione di una lista di oggetti attorno al centro del canvas

---

![](images/misc/pengo.png)
# 4.8 Pengo, tasti [P1]

- Classe per personaggio Pengo
- Metodo `move`
  - Parametro: lista dei tasti premuti
  - Quando viene premuto uno dei tasti `WASD`
    - Pengo si avvia e procede
- Movimento da un riquadro all'altro
    - Pengo si ferma quando arriva esattamente sul riquadro adiacente
    - In posizioni multiple della sua dimensione
- Solo a quel punto, accetta di nuovo un comando
- Mantenere `g2d` fuori dalla classe
    - In `tick` usare [g2d.current_keys](https://github.com/tomamic/fondinfo#input-and-output)

---

![](images/misc/pengo.png)
# 4.9 Pengo, passi [P1]

- Durante il movimento dei personaggi, mostrarne i passi
- Alternare due sprite per Pengo
- Alternare due sprite per SnoBee

---

# Esercitazione 5 (10-24)

---

![](images/oop/bounce.png)
# 5.1 Modificare Turtle

- Partire dall'esempio [bounce](https://tomamic.github.io/pyodide/?p32_bounce.py)
- Movimenti di `Turtle` su griglia, con riquadri di 20×20 pixel
    - Cambia direzione solo quando le coordinate sono multiple di 20
    - Direzione scelta in base ai tasti premuti
- Quattro possibili direzioni
    - Destra, sinistra, alto, basso

---

![](images/oop/bounce.png)
# 5.2 Modificare Ghost

- Partire dall'esempio [bounce](https://tomamic.github.io/pyodide/?p32_bounce.py)
- Movimenti di `Ghost` su griglia, con riquadri di 20×20 pixel
    - Cambia direzione solo quando le coordinate sono multiple di 20
    - Come `Turtle`, ma direzione scelta casualmente
- Quattro possibili direzioni per `Ghost`
    - Destra, sinistra, alto, basso
    - Mai direzione nulla o diagonale

---

![](images/oop/bounce.png)
# 5.3 Modificare Ball

- Partire dall'esempio [bounce](https://tomamic.github.io/pyodide/?p32_bounce.py)
- Quando `Ball` urta `Ghost`
- La pallina riappare in posizione casuale, all'interno del canvas

---

![](images/misc/college-student.jpg)
# 5.4 Classe degli esami

- Classe `Exam` per rappresentare gli esami sostenuti
- Campi per *nome esame* , *data* (es. “`2016-10-14`”) , *numero crediti*, *voto* (da 18 a 30)
- Metodo `show` per generare una descrizione come stringa
- In una procedura `main`
    - Istanziare un esame con valori forniti all'utente
    - Mostrarne la descrizione
- Tenere l'uso della console per I/O fuori dalla classe
- Non usare variabili globali

---

![](images/misc/college-student.jpg)
# 5.5 Lista degli esami

- Creare una lista di oggetti di tipo `Exam`
  - Chiedere i dati di ciascun esame all'utente
    - Terminare l'inserimento dati quando il nome dell'esame è vuoto (sentinella)
- Al termine dell'inserimento dati
    - Chiedere all'utente due date
    - Calcolare il numero totale di crediti acquisiti
    - Calcolare la media pesata dei voti: <br> *(Ʃ voto × crediti) / Ʃ crediti*
    - Considerare solo gli esami svolti tra le due date
- Aggiungere i metodi *getter* necessari

---

![](images/misc/pengo.png)
# 5.6 Pengo come Actor [P1]

- Creare una classe `Pengo`
    - Sottoclasse di `Actor`
- Movimenti da tastiera, su griglia
    - Cambia direzione solo quando le coordinate sono multiple di 16
- Alternare sprite

---

![](images/misc/pengo.png)
# 5.7 SnoBee come Actor [P1]

- Creare una classe `SnoBee`
    - Sottoclasse di `Actor`
- Movimenti casuali, su griglia
    - Cambia direzione solo quando le coordinate sono multiple di 16
- Alternare sprite

---

![](images/misc/pengo.png)
# 5.8 Pengo muore [P1]

- `Pengo` muore se urta `SnoBee`
- Implementare il metodo `collide`

---

![](images/misc/pengo.png)
# 5.9 Ghiaccio [P1]

- Blocco di ghiaccio come personaggio
    - Sottoclasse di `Actor`
    - Immobile, impenetrabile
- Se `Pengo` urta il ghiaccio, si ferma all'esterno
- Se `SnoBee` urta il ghiaccio, si ferma all'esterno

---

# Esercitazione 6 (11-07)

---

![](images/misc/troll-key.png)
# 6.1 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve come parametro una stringa di testo
    - Produce come risultato un testo analogo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
- Es. “`I want *this text* to be uppercase`” <br> → “`I want THIS TEXT to be uppercase`”
- I/O a console solo in procedura `main`
    - Input dell'utente e stampa del risultato

---

![](images/misc/numbers.png)
# 6.2 Conteggio di valori

- Chiedere all'utente un valore minimo e un valore massimo
- Chiedere all'utente una sequenza di numeri interi
    - La sequenza termina all'inserimento di una riga vuota (sentinella)
    - Un valore più piccolo del minimo viene sostituito dal minimo
    - Un valore più grande del massimo viene sostituito dal massimo
- Contare quante volte si presenta ciascuno dei valori possibili
    - Nell'intervallo tra minimo e massimo
    - *Non* memorizzare in una lista i singoli valori inseriti
    - Usare invece una lista di contatori
    - <https://tomamic.github.io/pyodide/?p41_counters.py>

---

![](images/fun/matryoshka.png)
# 6.3 Funzione ricorsiva

- Definire una funzione ricorsiva
    - Riceve come parametro un numero naturale `n`
    - Se `n` è minore di 10, `n` è il risultato
    - Altrimenti, calcola la somma `s` delle cifre di `n`… <br> e opera ricorsivamente sulle cifre di `s`
- Esempi
    - *f(41)=4+1=5*
    - *f(327)=f(12)=f(3)=3*
    - Infatti, *3+2+7=12* e *1+2=3*

---

![](images/fun/htree.png)
# 6.4 Albero di H

- Disegnare ricorsivamente un *H-Tree*
- Partire da un rettangolo assegnato
- Se è più piccolo di 5 pixel: niente
- Altrimenti, dividerlo in 4 parti uguali
    - Collegare i centri delle due parti a destra
    - Collegare i centri delle due parti a sinistra
    - Collegare i punti medi dei due segmenti
- Ripetere su ciascuna delle quattro parti

---

![](images/fun/htree.png)
# 6.5 Albero di H

- Modificare l'esercizio precedente
- Chiedere all'utente il livello `n` di ricorsione desiderato
- Bloccare la ricorsione dopo aver disegnato *H* di `n` dimensioni diverse
- Bloccare comunque la ricorsione quando il rettangolo diventa troppo piccolo

---

![](images/misc/pengo.png)
# 6.6 Spinta del ghiaccio [P1]

- Un blocco di ghiaccio viene spinto da Pengo
- Se c'è collisione tra i due
- Ed è premuta la barra spaziatrice
- Se il blocco di ghiaccio in movimento urta SnoBee, questo muore
- Il blocco si ferma al bordo, o contro altri blocchi

---

![](images/misc/pengo.png)
# 6.7 Termine della partita [P1]

- Partita vinta se uccisi tutti gli SnoBee
- Partita persa se ucciso Pengo
- Creare una classe `PengoGame` per gestire la partita
    - [Esempio BounceGame](https://tomamic.github.io/pyodide/?p32_bouncegame.py)
- Creare una classe `PengoGui` per la visualizzazione
    - [Esempio BounceGui](https://tomamic.github.io/pyodide/?p32_bouncegui.py)

---

# Esercitazione 7 (11-14)

---

![](images/misc/minesweeper.png)
# 7.1 Mine nel campo minato [P2]

- Chiedere all'utente valori per `w`, `h`, `n`
- Creare una *lista semplice*, inizialmente tutta a *0*
    - Per memorizzare una matrice `w×h` di `int`
- Inserire nella matrice `n` mine
    - Posizioni casuali
    - Marcate con valore diverso da *0*
    - Ciascuna mina andrà in una cella diversa
    - Non in posizione già occupata
- Stampare la matrice a console, riga per riga

>

<https://minesweeper.online/>

---

![](images/misc/minesweeper.png)
# 7.2 Conteggio mine [P2]

- Riprendere la matrice dell'esercizio 7.1
- L'utente sceglie una posizione `(x, y)`
- Il programma informa se lì c'è una mina
- Inoltre, conta quante mine ci sono intorno
    - Nelle 8 celle vicine
    - In orizzontale, verticale, o diagonale
    - Il conteggio può variare da 0 ad 8

---

# 7.3 Lettura file

- Leggere un file di testo, riga per riga
- Trovare la riga più corta e quella più lunga
- Escludendo caratteri bianchi iniziali e finali (`strip`)
- Visualizzare le due righe

---

![](images/misc/triangles2.png)
# 7.4 Triangoli ricorsivi

- Definire una funzione di disegno ricorsiva
    - Parametri: tre punti
    - P.es. `(300, 0), (0, 520), (600, 520)`
- Trovare i punti mediani dei tre lati e unirli con `3` linee
    - Il triangolo di partenza risulterà diviso in `4`
- Se i nuovi 4 triangoli non sono abbastanza piccoli (~10px)
    - → Ripetere ricorsivamente la procedura sui 3 triangoli esterni

---

![](images/misc/pengo.png)
# 7.5 Pengo - Sgretolamento [P1]

- Ghiaccio si sgretola
- Quando viene spinto, ma non può spostarsi
- Perchè bloccato dal bordo o da altro ghiaccio

---

![](images/misc/pengo.png)
# 7.6 Pengo - Test [P1]

- Testare le funzionalità del gioco Pengo
- In particolare
    - Movimento dei personaggi
    - Collisioni tra personaggi
    - Vittoria e sconfitta

---

![](images/misc/pengo.png)
# 7.7 Pengo - Aspetti opzionali [P1]

- Secondo Pengo, comandato da tasti diversi
- Vite, livelli di gioco e punteggio
- Lettura da file della mappa iniziale
- Bonus e altri personaggi aggiuntivi
- Estensioni a fantasia

---

# Esercitazione 8 (11-21)

---

![](images/fun/list-monster.png)
# 8.1 Massimo, con ricorsione

- Definire una funzione ricorsiva `max_char`
    - In un testo, cerca il carattere con codice Unicode massimo
- Se il testo ha lunghezza ≤ 1
    - Esso stesso è il risultato
- Altrimenti, il risultato è pari al maggiore tra:
    - Il primo carattere del testo (*head*)
    - Il massimo tra tutti i caratteri seguenti (*tail*)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 8.2 Gioco dei dispari

- Creare una sottoclasse di `BoardGame`
- `__init__`
    - Riempire una matrice con i numeri da `1` a `w*h`, in ordine
    - Mescolare la matrice: scambiare coppie di celle scelte a caso
- `play`
    - Segnare in memoria come *marcate* le celle scelte dall'utente
- `read`
    - Numero presente nella cella, come `str`
    - Mostrare “`!`” dopo il numero, se la cella è stata *marcata* dall'utente
- `finished`
    - Sono stati *marcati* tutti e soli i numeri dispari?

---

![](images/misc/gold-price.svg)
# 8.3 Valori sopra e sotto la media

- Leggere da file una sequenza di numeri
    - Un numero per ogni riga
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

![](images/qt/fifteen-puzzle.jpg)
# 8.4 Quindici con lista di liste

- Modificare l'esempio del gioco Fifteen
    - <https://tomamic.github.io/pyodide/?p42_fifteen.py>
- Cambiare la struttura dati privata
    - Usare una lista di liste anzichè una lista semplice
- Adattare gli algoritmi
- Confrontare con l'uso di una lista semplice
    - Quali operazioni risultano più semplici?
    - Quali più complesse?
    - Indicarlo nei commenti del codice

---

![](images/repr/unicode.svg)
# 8.5 Codifica UTF-8

- Chiedere all'utente un carattere, `char`
    - Code-point Unicode: `bin(ord(char))`
- Trovarne la codifica in UTF-8
    - Valutare quanti byte siano necessari
    - Mostrare in *bin* ciascuno dei byte
    - Creare una `str` di vari `1` e `0`, p.es.:
    - `"☺"` → `"11100010 10011000 10111010"`
- Mostrare gli stessi byte UTF-8 anche in *hex*
    - `"☺"` → `"e2 98 ba"`

>

**Non** usare `str.encode` per implementare la conversione <br>
Possono essere utili le funzioni `int, hex, bin` di Python <br>
Dispense: [Hex e bin](https://github.com/tomamic/fondinfo/wiki/T02-Codifica#hex-e-bin-in-python) -
[Unicode](https://github.com/tomamic/fondinfo/wiki/T02-Codifica#caratteri-unicode)

---

![](images/misc/minesweeper.png)
# 8.6 Gioco Minesweeper [P2]

- Creare una sottoclasse di `BoardGame`
- Incapsulare la matrice del campo minato
- Memorizzare inoltre le celle attualmente già scoperte
- Metodi `__init__, play, read, finished`…
- Per ora, gioco senza bandierine

>

Codifica dati: a piacere! — Suggerimento: <br>
`0-8`: cella libera con eventuali mine intorno, `9`: mina <br>
Aggiungere `10` o `20`, per flag o cella scoperta

---

![](images/misc/handwriting.jpg)
# 8.7 Bella copia [P1, P2]

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi*, semplici, in inglese
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : preferibilmente `return` a fine funzione, cicli senza `break`
    - *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*
    - ❗ Accedere ai campi solo all'interno della classe stessa

---

# Esercitazione 9 (11-28)

---

![](images/fun/matryoshka.png)
# 9.1 Stringhe in liste annidate

- Definire una funzione *ricorsiva*
    - Parametro: tipo `str`, oppure lista contenente stringhe e/o altre liste
    - Risultato: somma lunghezze di tutte le stringhe, anche in liste annidate
- Se parametro di tipo `str`, la sua lunghezza è il risultato
- Se parametro di tipo `list`
    - Per ciascun elemento contenuto, si calcola la lunghezza (💡)
    - Poi si sommano i risultati
- Esempio : `["Ann", ["Bart", ["Sabine", "Cindy"], "Bob", "Art"], ["Bea"], "Bill"]`
    → Risultato: *31*

>

`isinstance([1, 2], list)  # Check if [1, 2] is a list: True`
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/dice.png)
# 9.2 Scrittura di risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
    - Due valori casuali, tra 1 e 6
- Scrivere il risultato dei lanci in un file
    - In ogni riga, inserire i due valori separati da spazio

---

![](images/misc/dice.png)
# 9.3 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 9.2
- Per ogni coppia di valori letta, mostrare all'utente la loro somma
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due numeri

>

Per conteggiare i vari risultati, usare una lista di (almeno) 11 valori

---

# 9.4 Matrice di lettere

- Generare una matrice di 5 righe × 6 colonne, mescolata
    - Contiene tutti i numeri da 1 a 26
    - Nei 4 angoli c'è il valore 0
- Mostrare la matrice, riga per riga
    - Ma stampare lettere al posto dei numeri
    - `A` al posto di `1`, `B` al posto di `2`…

``` txt
 JRMH
LKENTP
QDIBZS
YFWUOC
 VAXG
```

>

Si può mescolare una lista semplice, con soli valori da 1 a 26 <br> Poi inserire gli 0 negli angoli

---

![](images/fun/circlex4.png)
# 9.5 Cerchi speciali

- Funzione che disegna un *cerchio speciale*
    - Parametri: centro, raggio e colore
- Disegna un cerchio sul canvas, in base ai parametri
- Se lo spazio non è troppo piccolo…
    - Sceglie un colore casuale
    - Disegna due *cerchi speciali* spostati a destra e sinistra, con raggio dimezzato
    - Disegna due *cerchi speciali* spostati in alto e in basso, con raggio ridotto a ⅓
- Aggiungere poi alla funzione un parametro `level`
    - Per decidere il livello massimo di ricorsione

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/letters.png)
# 9.6 Gioco dell'alfabeto

- Creare una sottoclasse di `BoardGame`
- Incapsula matrice dell'esercizio 9.4
- L'utente deve scegliere tutte le lettere, in ordine alfabetico
    - Prima `play_at` su casella con `A`, poi su `B`…
- Se sceglie una lettera fuori sequenza, partita persa
- Se sceglie la lettera giusta, questa viene marcata o cancellata
- Caselle vuote non hanno effetto

>

Può essere utile un campo `expected`, che memorizza e incrementa il valore atteso

---

![](images/repr/file-system.svg)
# 9.7 Profondità albero

- Partire dall'albero di documenti e cartelle
- Aggiungere a tutti i *nodi* un metodo `depth`
    - Riporta la profondità della struttura
    - Livello di annidamento massimo
- Astratto nella classe base
- Per un *documento*: 0
- Per una *cartella*: 1 + profondità massima dei sottonodi
- Rispetto alla struttura raffigurata a fianco
    - Calcolare `depth` della cartella radice (*3*, nell'esempio)

>

<https://tomamic.github.io/pyodide//?p41_folders.py>

---

![](images/misc/minesweeper.png)
# 9.8 Campo minato, ricorsione [P2]

- Quando si scopre una casella senza mine attorno
    - ⇒ Scoprire tutte le caselle attorno
- Cioè, quando in `play_at` il conteggio risulta 0
    - ⇒ Chiamare `play_at` sulle caselle attorno, ancora coperte

```
import sys
sys.setrecursionlimit(100_000)
# otherwise, on very large boards, you may get
# `RecursionError: maximum recursion depth exceeded`
```

---

![](images/misc/minesweeper.png)
# 9.9 Campo minato, bandierine [P2]

- Utente può posizionare bandierine
- Quando convinto di aver individuato una mina
- Metodo `flag_at`, attivato dal tasto destro
- Sistemare la bandierina anche se la mina non c'è
- Partita vinta quando restano coperte solo le mine

---

# Esercitazione 10 (12-05)

---

![](images/fun/matryoshka.png)
# 10.1 Presenza in liste annidate

- Definire una funzione *ricorsiva* `contains`
    - Parametro `node`: numero, oppure lista di numeri e/o altre liste
    - Parametro `val`: numero da cercare
    - Risultato booleano: `val` è presente in `node`?
- Se `node` è un numero, `node` è uguale a `val`?
- Se `node` è una lista, qualche elemento di `node` contiene `val`? (💡)

``` py
>>> contains([4, [3, [2], 5, 6], [1], 7], 5)
True
```

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.2 Ricerca in matrice

- Chiedere all'utente le dimensioni `$w×h$` di una matrice
    - In ogni cella, un numero casuale compreso tra 0 e 9
- Mostrare la matrice
- In un ciclo, chiedere all'utente un numero da cercare
    - Comunicare ogni posizione (colonna e riga) in cui viene trovato
    - Il ciclo termina quando l'utente inserisce riga vuota

``` txt
7 7 8 4
8 5 3 2
8 7 1 7
```

---

![](images/fun/circlex2.png)
# 10.3 Cerchi allineati

- Funzione che disegna un *cerchio speciale*
    - Parametri: centro, raggio e colore
- Disegna un cerchio sul canvas, in base ai parametri
- Se lo spazio non è troppo piccolo…
    - Sceglie un colore casuale
    - Disegna due *cerchi speciali* dello stesso colore
    - Uno spostato a destra, con raggio ridotto a ¼
    - Uno spostato a sinistra, con raggio ridotto a ¾
- Aggiungere poi alla funzione un parametro `level`
    - Per decidere il livello massimo di ricorsione

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.4 Matrice dei quadrati

- Chiedere all'utente le dimensioni `$w×h$` di una *matrice*
    - `$n=w·h$` deve essere pari
    - Mescolati, ci sono tutti i numeri da `$1$` a `$n/2$` e i loro quadrati
- Scrivere la matrice in un file, riga per riga
    - Valori sulla stessa riga, separati da virgola

``` txt
9,4,25,4
3,1,36,2
5,6,1,16
```

---

<table>
</table>

# 10.5 Gioco dei quadrati

- Creare una sottoclasse di `BoardGame`
    - Matrice simile ad esercizio 10.4
    - Numeri e quadrati corrispondenti, mescolati
- L'utente sceglie un numero e subito dopo il suo quadrato
    - Due chiamate `play` successive
    - Se associazione giusta → numeri eliminati
    - Altrimenti → conteggiato un errore
- Nel messaggio finale, comunicare il numero di errori fatti

>

Memorizzare almeno l'ultima posizione scelta
<br>
Tramite `read`, possibilmente, marcarla con un puntino

---

![](images/misc/brackets.svg)
# 10.6 File, parentesi

- Leggere un file di testo, riga per riga
- Stampare a console le parti di testo tra quadre
- Per ogni stampa, indicare il numero di riga del file

``` text
Python is a [multi-paradigm] [programming language].
It is intended to be a highly readable language.
Its philosophy is summarized by [The Zen of Python].
```

``` text
multi-paradigm (1)
programming language (1)
The Zen of Python (3)
```

>

Scorrere i caratteri di ogni riga; segnare in un bool se si è incontrata una quadra aperta
<br>
In alternativa, usare una regex

---

![](images/repr/file-system.svg)
# 10.7 Documento più grande

- Partire dall'albero di *documenti e cartelle*
- Aggiungere a tutti i *nodi* un metodo `largest`
    - Risultato: `(size, path)` del doc più grande
- Astratto nella classe base
- Per un *documento*: dimensione del suo contenuto e suo nome
- Per una *cartella*: risultato maggiore, tra i sottonodi
    - Prepende il suo nome al `path`
- Nella struttura raffigurata a fianco
    - Cercare il doc più grande a partire dalla radice
    - `(16, "Desktop/macm/a1.txt")`

>

<https://tomamic.github.io/pyodide//?p41_folders.py>
