![](https://fondinfo.github.io/images/dev/geek-girl.svg)
# Esercizi 2017
## Introduzione alla programmazione

---

# Esercitazione 1 (10-02)

---

![](https://fondinfo.github.io/images/misc/handshake.svg)
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

![](https://fondinfo.github.io/images/misc/random-circles.svg)
# 1.3 Cerchi casuali

- Chiedere all'utente un numero `n`
- Disegnare `n` cerchi
    - Tutti con raggio di 50 pixel
    - Ciascuno in posizione casuale
    - Ciascuno con un colore casuale

>

Cominciare a disegnare un solo cerchio grigio, in posizione casuale

---

![](https://fondinfo.github.io/images/misc/red-circles.svg)
# 1.4 Cerchi concentrici graduali

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio gradualmente decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
    - Dal rosso del livello più esterno
    - Fino al nero del livello più interno
- Prima del ciclo, determinare di quanto cambiare raggio e colore a ogni passo

>

Per iniziare, inserire l'operazione di disegno un ciclo, togliendo a ogni passo `10` (p.es.) al raggio e al livello di rosso

---

# 1.5 Cerchi concentrici casuali

- Disegnare un cerchio di raggio 200 e colore casuale
- Disegnare dei cerchi concentrici, via via più piccoli
- Per ognuno, scegliere casualmente raggio e colore
- Fermarsi quando il raggio diventa più piccolo di 10

---

![](https://fondinfo.github.io/images/misc/characters.png)
# 1.6 Carattere Unicode

- Chiedere all'utente un numero
- Visualizzare il carattere Unicode corrispondente
- Ripetere le operazioni in un ciclo, finchè l'utente non inserisce il valore `0`

>

Usare la funzione `chr` per convertire un codice nel char corrispondente

---

# 1.7 Tabella ASCII

- Visualizzare la tabella dei codici ASCII
- Un carattere per ogni riga
    - All'inizio della riga: il carattere
    - Di fianco: il codice ASCII
- Limitare l'intervallo tra 32 a 126 (due costanti)

>

Non c'è input dell'utente

---

![large](https://fondinfo.github.io/images/misc/gold-price.svg)
# 1.8 Massimo e minimo

- Chiedere all'utente, attraverso un ciclo, una sequenza di numeri naturali
    - La sequenza termina quando si legge un valore negativo (non valido)
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

---

![](https://fondinfo.github.io/images/misc/histogram.svg)
# 1.9 Skyscrapers

- Chiedere all'utente, attraverso un ciclo, una sequenza di numeri naturali
    - La sequenza termina quando si legge un valore negativo (non valido)
- Quante volte è cambiato il massimo?
    - Per ogni valore inserito, controllare se è il massimo osservato
- Al termine, scrivere il risultato

>

Da sinistra a destra, quanti “tetti” si vedono? (Nell'esempio: 6)

---

# Esercitazione 2 (10-09)

---

![](https://fondinfo.github.io/images/misc/numbers.png)
# 2.1 Percentuale di cifre

- Chiedere una riga di testo all'utente
- Mostrare la percentuale di cifre presenti

>

Usare un ciclo `for` sulla stringa

---

![](https://fondinfo.github.io/images/misc/gold-price.svg)
# 2.2 Lista di valori

- Chiedere all'utente una sequenza in numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Quanti valori sono maggiori dell'ultimo valido inserito?

---

![](https://fondinfo.github.io/images/misc/snow-ball.png)
# 2.3 Funzione, densità

- Definire una funzione `sphere_density` per il calcolo della densità di una sfera
    - Parametri: raggio in metri e massa in Kg
    - Risultato: densità (tutti valori `float`)
- Invocare la funzione dalla shell interattiva
- Aggiungere poi al programma una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente due valori (chiamando `input`)
    - Poi chiamare `sphere_density` con questi parametri
    - Infine mostrare all'utente il risultato (chiamando `print`)

>

Formule utili: `V = (4/3)πR³ ; ρ = m/V`

---

![](https://fondinfo.github.io/images/misc/numbers.png)
# 2.4 Conteggio di singole cifre

- Chiedere una riga di testo all'utente
- Contare separatamente le occorrenze di ciascuna cifra (da `'0'` a `'9'`)

>

Creare una lista (array) di 10 elementi, inizialmente tutti posti a `0`
<br>
Ciascun elemento è il contatore per una certa cifra
<br>
Attenzione alla distinzione tra il tipo `str` e il tipo `int`!

---

![](https://fondinfo.github.io/images/misc/histogram.svg)
# 2.5 Skyscrapers, da destra

- Chiedere all'utente una sequenza in numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Quante volte cambia il massimo, osservando la sequenza al contrario?

>

Da destra a sinistra, quanti “tetti” si vedono? (Nell'esempio: 5)
<br>
La funzione `reversed` restituisce una sequenza rovesciata

---

![](https://fondinfo.github.io/images/misc/color-grid.png) ![](https://fondinfo.github.io/images/oop/raster-tile.png)
# 2.6 Griglia di colori

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

# 2.7 Conteggio lettere iniziali uguali

- Scrivere una funzione `len_common_prefix`
    - Parametri: `a` e `b`, stringhe da confrontare
    - Risultato: numero di lettere iniziali uguali tra `a` e `b`
- Scrivere una funzione `main`
    - Chiedere all'utente due stringhe di testo, `s1` e `s2`
    - Invocare `len_common_prefix` sulle due stringhe
    - Mostrare all'utente il risultato

---

![](https://fondinfo.github.io/images/oop/border.png)
# 2.8 Movimento diagonale

- Partire dall'esempio del rettangolo in moto orizzontale
    - Spostamento costante denominato `dx`
- Fare in modo che il movimento sia in diagonale
    - A ogni turno, aggiungere a una variabile `y`...
    - Una quantità costante `dy`
- Quando la pallina raggiunge il bordo destro, non lo supera
    - La `x` rimane fissa al valore massimo
    - La `y` può ancora cambiare
- Quando la pallina raggiunge il bordo inferiore, non lo supera
    - La `y` rimane al valore massimo
    - La `x` può ancora cambiare

---

![](https://fondinfo.github.io/images/oop/border.png)
# 2.9 Controllo da tastiera

- Riprendere l'esercizio 2.8
- Controllare la pressione dei tasti freccia
    - Impostare il solo segno di `dx`, se premuta una freccia orizzontale
    - Impostare il solo segno di `dy`, se premuta una freccia verticale
    - Nella funzione di gestione tasti, non modificare nè `x`, nè `y`
- Lontano dai bordi, il movimento rimane sempre in una delle quattro *direzioni diagonali*
    - Quando la pallina raggiunge uno dei bordi, non lo supera
    - Ma continua a muoversi sul bordo, fino all'angolo

---

# Esercitazione 3 (10-16 *)

---

![](https://fondinfo.github.io/images/misc/street-fighter.png)
# 3.1 Animazione di una pallina

- Partire dalla classe `Ball` vista a lezione
- Eseguire l'animazione
    - Per ogni frame, chiamare il metodo `move` della pallina
    - Rappresentare un rettangolo o un cerchio nella posizione aggiornata della pallina
- Modificare però il metodo `move`
    - La pallina si sposta sempre di pochi pixel verso destra
    - La pallina non si sposta verticalmente
    - Se esce dal bordo destro, ricompare al bordo sinistro e viceversa

---

![](https://fondinfo.github.io/images/misc/ellipse.svg)
# 3.2 Ellisse

- Classe che modella un'ellisse
- Campi privati (parametri del costruttore)
    - Semiassi: `a, b`
- Metodi pubblici per ottenere...
    - Area: `π·a·b`
    - Distanza focale: `2·√(a² - b²)`
- Nel corpo principale del programma...
    - Creare un oggetto con dati forniti dall'utente
    - Visualizzare area e distanza focale dell'ellisse

>

Opzionalmente, nell'inizializzazione: se `a < b`, scambiarne i valori

---

![](https://fondinfo.github.io/images/misc/troll-key.png)
# 3.3 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve in input una stringa di testo
    - Produce in output la stesso testo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
- Es. “`I want *this text* to be uppercase`” <br> → “`I want THIS TEXT to be uppercase`”
- Da una funzione *main*, applicare la funzione su una stringa inserita dall'utente

>

Segnare in un `bool` se si è incontrato un asterisco iniziale, ma non ancora un asterisco finale

---

![](https://fondinfo.github.io/images/fun/bike-lock.png)
# 3.4 Configurazioni di simboli

- Scrivere una funzione per generare tutte le configurazioni di lunghezza 3 (*disposizioni con ripetizione*)
    - Parametri: `str` contenente l'insieme dei simboli (presenti su ogni ruota)
    - Risultato: lista di `str` (configurazioni)
- Per test, fornire in input le vocali `"AEIOU"`, per ottenere:
    - `["AAA", "AAE", "AAI", "AAO", "AAU", "AEA", "AEE", "AEI", "AEO", "AEU", "AIA", ...`

>

Possibile approccio con 3 cicli `for` annidati
<br>
Ogni `for` scorre tutto l'insieme di simboli
<br>
Configurazione: `str` con i 3 simboli correnti

---

![](https://fondinfo.github.io/images/fun/sin-cos.png)
# 3.5 Oscillazione sinusoidale

- Partire dalla classe dell'esercizio 3.1
    - Memorizzare la ordinata iniziale `y0`
- Modificare il metodo `move`
    - L'ordinata oscilla sinusoidalmente attorno a `y0`
    - Sommare a `y0` un valore proporzionale a `sin(k * x)`
- Visualizzare l'animazione di due palline

---

# 3.6 Palline colorate

- Aggiungere ai dati della pallina (es. 3.5) anche un colore
    - Generare una tupla `RGB` casuale, nell'inizializzatore
- Aggiungere un corrispondente metodo *getter*
    - Per ottenere dall'esterno il colore della pallina
    - Restituire il colore come una tupla (tripla RGB)
- Creare diverse palline e inserirle in una lista
- Rappresentare graficamente il movimento di tutte le palline
    - Per ogni frame, in un ciclo `for`, chiamare il metodo `move` di ogni pallina
    - Rappresentare un rettangolo o un cerchio colorato nella posizione aggiornata di ogni pallina

---

![](https://fondinfo.github.io/images/misc/bouncing-ball.jpg)
# 3.7 Rimbalzi con gravità

- Ripartire dalla classe `Ball` originale (esempio visto a lezione)
- Nel metodo `move`, aggiungere l'effetto della gravità
    - Accelerazione: aggiungere un piccolo valore costante alla velocità verticale
    - `g = 0.4`
    - `dy += g`
    - Quando si tocca il fondo, cambiare il segno di `dy`
- Mostrare l'animazione di una lista di palline, tutte con l'effetto della gravità

---

![](https://fondinfo.github.io/images/oop/arrow-keys.jpg) ![](https://fondinfo.github.io/images/oop/wasd-keys.jpg)
# 3.8 Controllo da tastiera

- Aggiungere alla classe dell'es. 3.7 dei metodi di comando
    - `go_left`, `go_right`, `stay`
    - In questi metodi, modificare solo `dx`
    - Spostamento avviene sempre in `move`
- Mantenere il movimento verticale con gravità e rimbalzo
- Mostrare l'animazione di una sola pallina
- Controllare eventi della tastiera
    - Definire funzioni `keydown` e `keyup`
    - Chiamare il metodo corrispondente al tasto premuto
- Con tasti diversi, comandare poi una seconda pallina

---

![](https://fondinfo.github.io/images/oop/jumper.png)
# 3.9 Jumper

- Modificare la classe dell'es. 3.7
    - Mantenere i comandi orizzontali e la gravità
    - Eliminare però il rimbalzo
    - Quando arriva sul fondo dello schermo, si ferma lì
- Aggiungere alla classe un metodo per saltare
    - `jump`, imposta `dy` a un certo valore, negativo
    - Poi agirà di nuovo la gravità
    - Si può saltare solo dal fondo dello schermo

---

# Esercitazione 4 (10-23)

---

![](https://fondinfo.github.io/images/hist/euclid.jpg)
# 4.1 Massimo Comun Divisore

- Leggere due numeri
- Calcolare in una funzione il loro Massimo Comun Divisore
- Euclide
    - *gcd(a, b) = a, se b = 0*
    - *gcd(a, b) = gcd(b, a mod b), altrimenti*
- Visualizzare il risultato della funzione

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/misc/bouncing-ball.jpg)
# 4.2 Arena con gravità

- Partire dall'esempio `bounce`
- Inserire in gioco solo delle palline
- Aggiungere alle palline l'effetto della gravità
    - Come nell'es. 3.6
- Quando due palline si *urtano*, ciascuna cambia solo il segno di `dx`
- *Miglioramento*: non considerare urti ripetuti
    - Dopo un urto, per ~10 turni non considerarne altri
    - Creare un campo per contare le chiamate a `move`

---

![](https://fondinfo.github.io/images/fun/sierpinski-triangle.svg)
# 4.3 Triangolo di Sierpinski

- Scrivere una funzione ricorsiva per disegnare un triangolo di Sierpinski
- Partire da un riquadro nero
    - All'inizio il riquadro nero può corrispondere con la finestra
    - Ma in generale ragionare su coordinate passate come parametri: `x`, `y`, `w`, `h`
- Riempire di bianco il quarto in alto a destra
- Ripetere il procedimento per ciascuno dei 3 riquadri rimasti neri

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/fun/bike-lock.png)
# 4.4 Configurazioni

- Generare tutte le configurazioni di simboli
    - Parametro: numero di ruote
    - Parametro: `str` contenente i possibili simboli
    - Risultato: una lista di stringhe
- Algoritmo:
    - Zero ruote: l'unica configurazione è la stringa vuota: `['']`
    - Altrimenti: per ogni elemento della prima ruota...
    - Concatenarlo con tutte le configurazioni sulle ruote rimanenti (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 4.5 Donkey Kong: Mario

- Partire dall'esempio `bounce`
- Rendere `Jumper` (es. 3.9) una sottoclasse di `Actor`
- Istanziare un oggetto `Arena`
- Inserire in gioco solo una istanza di `Jumper`
- Permettere all'utente di comandarne i movimenti e i salti

>

<http://www.commodore.ca/arcade/donkeykong.swf>

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 4.6 Donkey Kong: piattaforme

- Partire dall'esercizio 4.5
- Creare `Platform` come sottoclasse di `Actor`
    - Personaggio immobile nel gioco
- In caso di collisione tra Mario (`Jumper`) e una piattaforma
    - Posizionare Mario esattamente sopra alla piattaforma
- *Miglioramento*: collisione valida solo se...
    - Il punto in mezzo ai piedi di Mario è dentro la piattaforma

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 4.7 Donkey Kong: salti

- Segnare in un campo se Mario è su una piattaforma
    - Può camminare sulle piattaforme
    - Può saltare, se è su una piattaforma
- Mario cade quando esce dalla piattaforma

---

# Esercitazione 5 (10-30)

---

# 5.1 Trascrizione da file

- Leggere riga per riga un *file* di testo
- Per ogni riga, trascrivere a *console* solo il testo compreso tra parentesi angolari (`<` e `>`)
- Se ci sono più parti da trascrivere, separarle con una barra verticale

``` text
Python is a <multi-paradigm> <programming language>.
It is intended to be a highly readable language.
Its philosophy is summarized by <The Zen of Python>.

``` text
multi-paradigm|programming language

The Zen of Python
```

---

![](https://fondinfo.github.io/images/fun/neighborhood4.png)
# 5.2 Funzione di smooth

- Scrivere una funzione `smooth`
    - Parametro: matrice iniziale, di float
    - Risultato: nuova matrice con *smooth*
    - Matrici rappresentate come liste di liste
- **Smooth**: per ogni cella in matrice iniziale
    - Il risultato è la *media* dell'intorno
    - 5 valori: cella stessa e 4 adiacenti
- Attenzione alle celle esterne
    - Sommare e contare solo i valori disponibili
    - 4 valori ai bordi, 3 valori agli angoli
- Verificare la funzione con alcune matrici di test

---

# 5.3 Comma Separated Values

- Leggere una matrice di float da un file testuale *CSV*
    - Valori riportati riga per riga e separati da una virgola
- Memorizzare i dati in una matrice
    - Una riga della matrice per ogni riga del file
- Riscrivere in un altro file *CSV* il risultato di `smooth` (es. 5.2) sulla matrice

``` text
5.00,7.00,2.00,11.00
1.00,3.00,12.00,9.00
4.00,6.00,10.00,8.00
```

``` text
4.33,4.25,8.00,7.33
3.25,5.80,7.20,10.00
3.67,5.75,9.00,9.00
```

---

![](https://fondinfo.github.io/images/repr/file-system.svg)
# 5.4 Profondità albero

- Partire dall'esempio del file system (es. 4.5 del 2014)
- Aggiungere a tutti i *nodi* un metodo `depth`, che riporta la profondità della struttura
- Astratto nella classe base
- Per un *documento*: 0
- Per una *cartella*: 1 + profondità massima dei sottonodi
- Rispetto alla struttura raffigurata a fianco
    - Calcolare la profondità della cartella radice (chiamare il metodo `depth`)

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 5.5 Skyscrapers in matrice

- Leggere matrice di numeri da file CSV
- Per ogni riga, contare quante volte cambia il massimo
    - Da sinistra verso destra
    - Da destra verso sinistra
- Per ogni colonna, contare quante volte cambia il massimo
    - Dall'alto verso il basso
    - Dal basso verso l'alto
- Mostrare all'utente i risultati

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 5.6 Donkey Kong: scale

- Inserire in gioco personaggi immobili, per piattaforme e scale
    - Non occorre disegnarli, sono nell'immagine di sfondo
- Gestire tutte le scale come complete, senza considerare quelle interrotte
- Mario può arrampicarsi sulle scale quando è in collisione
    - Centro dei piedi dentro al rettangolo della scala
    - Rettangolo della scala più grande dell'immagine, per arrivare sopra alla piattaforma

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 5.7 Donkey Kong: caduta barili

- I barili sono generati casualmente in alto
- Si muovono in orizzontale sulle piattaforme
- Fuori dalle piattaforme, cadono
- Se arrivano ai lati dello schermo, rimbalzano
- Se si scontrano con Mario, lo uccidono
- Se incontrano una scala, casualmente possono decidere di scendere
- Quando arrivano in basso, escono dal gioco

---

# Esercitazione 6 (11-06 *)

---

![](https://fondinfo.github.io/images/oop/personal-data.png)
# 6.1 Classe per dati anagrafici

- Creare una classe `Person`, per i dati anagrafici di una persona
    - Nome, cognome: testo
    - Data di nascita: tre numeri
- Costruttore con tutti i parametri per inizializzare i campi
- Metodo `age` per calcolare l'età in anni
    - Data odierna tramite tre parametri: *non è un campo!*
    - Controllare se è passato il giorno del compleanno
- Nella funzione `main`
    - Chiedere all'utente i dati, per istanziare `Person`
    - Chiedere la data odierna e invocare `age`

---

![](https://fondinfo.github.io/images/repr/binary-tunnel.jpg)
# 6.2 Rappresentazione in binario

- Funzione per rappresentare un numero positivo `n` con una stringa binaria (senza zeri iniziali)
    - Parametro `n`: `int`
    - Risultato: `str`
- Se `n == 0`: finito
- Altrimenti
    - Se `n` dispari, *`last`* (l'ultima cifra) è `'1'`, altrimenti `'0'`
    - Calcolare *`init`* come rappresentazione di `n // 2` (*ricorsione*)
    - Risultato: concatenazione *`init + last`*

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/fun/neighborhood8.png)
# 6.3 Smooth 3x3

- Scrivere una diversa funzione `smooth`
    - Parametri: matrice (come semplice lista) e dimensioni
    - Risultato: nuova matrice (come semplice lista)
- In questo caso, l'intorno comprende anche le celle adiacenti in diagonale
    - Calcolare la media tra 9 valori, attorno alla cella considerata
    - Attenzione però alle celle sui bordi: sommare e contare solo i valori disponibili
- Usare una *semplice lista* come pseudo-matrice
- Caricare dati da un file CSV, salvare risultato in un altro

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 6.4 Classe per Skyscrapers

- Campo per la matrice quadrata
    - Le celle di bordo contengono i vincoli fissi (non ci si gioca)
- Metodo `play_at`
    - Parametri: `x`, `y`
    - Nessun risultato diretto, incrementa di 1 il valore in (`x`, `y`)
    - Se il valore supera il massimo, torna a 0 (cella vuota)
- Metodo `get_val`
    - Parametri: `x`, `y`
    - Restituisce il valore della cella, come stringa
- Nel `main`, in un ciclo: chiedere all'utente la mossa da fare e mostrare il gioco aggiornato

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 6.5 Controllo Skyscrapers

- Metodo boolean `finished`
- Controlla la condizione di vittoria
    - Celle tutte piene
    - Nessun numero ripetuto in una riga o colonna
    - Rispetto dei vincoli a margine: numero di tetti visibili, da quella posizione

``` text
0 0 0 0 0
0 1 2 3 1
0 3 1 2 0
2 2 3 1 0
0 0 0 3 0
```

>

<https://www.brainbashers.com/skyscrapers.asp>

---

![](https://fondinfo.github.io/images/fun/anagram.svg)
# 6.6 Anagrammi in Python

- Generare tutti gli anagrammi (permutazioni) di una stringa
- Risultato, una lista di stringhe
- Algoritmo:
    - Stringa vuota: solo se stessa
    - Altrimenti: per ogni carattere...
    - Concatenarlo con tutte le permutazioni dei rimanenti caratteri (*ricorsione*)

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 6.7 Donkey Kong: fuoco

- Quando i barili arrivano in basso, possono infuocarsi, o uscire dal gioco
- *Barili infuocati*
    - Si muovono in orizzontale, casualmente
    - Se incontrano una scala, casualmente possono decidere di salire
- *Scale interrotte*
    - Mario non può passare
    - Barili possono scendere
    - Barili infuocati possono salire

---

# Esercitazione 7 (11-13)

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Basi del C++

- 1.2
- 2.1
- 2.2
- 2.3
- 2.4
- 1.5

>

Esercizi già assegnati in Python, da ripetere in C++

---

![](https://fondinfo.github.io/images/misc/donkey-kong.png)
# 7.7 Donkey Kong: fine partita

- Creare una sottoclasse di `Arena` specifica per il gioco di Donkey Kong
    - Metodo per controllare la vittoria (Mario arriva in cima)
    - Metodo per controllare la sconfitta (Mario muore)
    - Creazione dei personaggi iniziali nel metodo `__init__`
- Lasciare fuori dalla classe del gioco il disegno grafico e la gestione della tastiera

---

# Esercitazione 8 (11-20)

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi in C++

- 2.5
- 3.2
- 4.1
- 5.3
- 5.5

``` cpp
std::reverse(begin(v), end(v));  // reverse the vector v
```

>

Esercizi già assegnati in Python, da ripetere in C++

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 8.6 Skyscrapers in C++

- Creare una classe `Skyscrapers`
    - Matrice predefinita, in un campo
- `play_at(x, y)`
    - A ogni chiamata, incrementare il valore nella cella
    - Quando il valore arriva al massimo, poi torna a 0 (cella vuota)
- `get_val(x, y)`
    - Restituisce il contenuto di una cella, come testo
- `finished()`
    - Controlla la soluzione del gioco
- Istanziare un oggetto partita, I/O con console

---

![](https://fondinfo.github.io/images/misc/handwriting.jpg)
# 8.7 Donkey Kong: “bella copia”

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

# Esercitazione 9 (11-27)

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi in C++

- 4.4
- 6.1
- 6.3
- 6.6

``` cpp
string part = text.substr(pos, len);
```

>

Esercizi già assegnati in Python, da ripetere in C++

---

# 9.5 Notazione polacca, in C++

- Scrivere una funzione che valuti una espressione prefissa:
    - `"+ 2 7"` *(=9)*
    - `"+ * 3 4 abs * 5 -3"` *(=27)*
- Scrivere una seconda funzione che trasformi l'espressione prefissa nell'abituale notazione infissa:
    - `"(3 * 4 + abs(5 * -3))"`
- Supporre che i “token” siano tutti separati da spazio

``` cpp
string to_infix(vector<string>& tokens);
float evaluate(vector<string>& tokens);
```

``` text
expr = number | "+" expr expr | "-" expr expr |
       "*" expr expr | "/" expr expr | "abs" expr
```

>

Usare la ricorsione -- Simile ad es. 5.7 del 2011, su Github

---

![](https://fondinfo.github.io/images/dev/recycle.png)
# 9.6 Skyscrapers: GUI

- Caricare la partita da file (CSV)
    - Costruttore con parametro `filename`
    - Le righe del file determinano le dimensioni della matrice (quadrata)
- Permettere all'utente di giocare tramite *console*
    - Utilizzare l'astrazione `BoardGame`
    - Mantenere le operazioni di I/O fuori dalla classe del gioco
- Aggiungere una *interfaccia grafica* al progetto
    - Fornita una gui che sfrutta l'astrazione `BoardGame`
    - Usare `swig` per generare un modulo Python, oppure...
    - Inserire la classe nel progetto C++ con gui Qt

---

![](https://fondinfo.github.io/images/fun/goat-cabbage.svg)
# 9.7 Capra e cavoli, in Python

- Risolvere con il *backtracking*
    - <https://it.wikipedia.org/wiki/Salvare_capra_e_cavoli>
- Stato del gioco: 4 bool, inizialmente *false*
    - Ciascun personaggio (contadino, cavolo, capra, lupo) ha uno stato booleano
    - È sulla sponda di arrivo, o no?
- A ogni mossa, cambia il primo bool (*il contadino attraversa*)
    - Anche un altro bool può cambiare, se ha lo stesso valore del primo (*un personaggio si può spostare, se sta assieme al contadino*)
    - Scartare gli stati del gioco vietati o già valutati

---

# Esercitazione 10 (12-04 *)

---

![](https://fondinfo.github.io/images/dev/cpp.svg)
# Esercizi in C++

- 3.1 del 2014
- 3.7 del 2016
- 3.8 del 2016
- 3.5 del 2014 -- Usare un `vector<Triangle*>` e ricordarsi `delete`
- 3.8 del 2013 -- Su Github, in Python

``` cpp
// ex. 3.5 ...
delete triangles[i];                  // remove triangle from memory
triangles.erase(begin(triangles) + i);  // remove pointer from vector
```

---

![](https://fondinfo.github.io/images/qt/mainwindow.png)
# 10.6 Finestra principale

- Inserire la tabella di gioco in una finestra principale, con un menù
- Aggiungere al menù voci per caricare o salvare una partita
- Dopo un caricamento, generare una nuova tabella di gioco (pannello con bottoni)
- Nella classe del gioco
    - Costruttore con parametro `filename`, per caricare una partita da file
    - Metodo `save` con parametro `filename`, per salvare una partita su file

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 10.7 Mossa suggerita (unicità)

- Se in una riga o colonna manca un solo valore, inserirlo
- Se in una riga o colonna un valore ha una sola posizione possibile, inserirlo
- Attivare il completamento tramite click su una cella di bordo (dove ci possono essere i vincoli)

---

![](https://fondinfo.github.io/images/misc/skyscrapers.jpg)
# 10.8 Mossa suggerita (vincoli)

- Vincolo massimo -> inserire i valori in ordine crescente
- Vincolo 1 -> inserire per primo il valore massimo
- Attivare il completamento tramite click su una cella di bordo (dove ci possono essere i vincoli)
- Aggiungere una voce di menù per effettuare *tutte* le mosse ovvie

---

# Esercitazione 11 (12-11)

---

![](https://fondinfo.github.io/images/misc/dead-end.jpg)
# 11.1 Vicolo cieco

- Aggiungere un metodo booleano `wrong_marks` al puzzle, per verificare una condizione di vicolo cieco
    - Impossibile risolvere il puzzle, senza *rimuovere* un valore
    - *Attenzione* : condizione più stringente di `not finished`
    - Almeno una regola violata per *presenza* di valori sbagliati
- Aggiungere una voce di menù per verificare la situazione di vicolo cieco

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# 🥷 11.2 Ulteriori suggerimenti

- Provare tutte le possibili permutazioni su una riga o colonna
    - Limitarsi alle celle e a i valori liberi
    - Considerare tutti i vincoli e le regole (metodo `wrong_marks`)
    - Una sola soluzione valida, per la riga o colonna? Fissare tutti i valori
- Attivare il completamento tramite click su una cella di bordo (dove ci possono essere i vincoli)
- Fare sempre le prove su una copia del gioco

``` cpp
auto copy1 = *this; copy1.board_[y][x] = some_val; // ...
```

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# 🥷 11.3 Ulteriori suggerimenti

- Provare tutte le possibili permutazioni su una riga o colonna
- Miglioramento: più soluzioni possibili, per la riga o colonna?
    - Se per tutte le soluzioni possibili c'è un valore sempre nella stessa posizione
    - Fissare solo quel valore

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# 🥷 11.4 Soluzione ricorsiva

``` cpp
bool Skyscrapers::solve_recursive() {
    // solve_simple();
    auto pos = find_first_playable();  // vector of 2 ints
    auto x = pos[0], y = pos[1];
    if (x >= 0 && y >= 0 && !wrong_marks()) {
        auto copy = *this;  // save current status
        for (auto val = 1; val <= max_; ++val) {
            board_[y][x] = val;
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
