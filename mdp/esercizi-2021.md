![](images/dev/geek-girl.svg)
# Esercizi 2021
## Introduzione alla programmazione

---

# Esercitazione 1 (09-27)

---

![large](images/algo/holy-grail.jpg)
# 1.1 The Bridge of Death

- Porre tre domande all'utente:
    - `"What is your name?"`
    - `"What is your quest?"`
    - `"What is your favorite color?"`
- Se le risposte sono `"Lancelot"`, `"Holy Grail"` e `"Blue"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

>

Prima versione: chiedere e controllare solo il nome

---

![](images/misc/slope.svg) y = m·x + b
# 1.2 Pendenza tra due punti

- Chiedere all'utente le coordinate di due punti sul piano cartesiano
    - `x1, y1, x2, y2`
- Calcolare la pendenza `m` della retta passante
    - *Δy / Δx*
- Considerare anche il caso limite di retta verticale

---

![](images/misc/random-circles.svg)
# 1.3 Cerchi casuali

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi
    - Tutti con lo stesso raggio (p.es. 20 pixel)
    - Ciascuno di un colore casuale
    - Ciascuno in posizione casuale
    - Ma interamente contenuto nel canvas

---

![large](images/algo/holy-grail.jpg)
# 1.4 The Bridge of Death

- Modificare l'esercizio 1.1
- Porre le tre domande all'utente, una alla volta
- Alla prima risposta sbagliata, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`
    - Evitare le domande successive

>

Usare la programmazione strutturata, con `if-else`
<br>
Può essere utile una variabile booleana

---

# 1.5 Fattoriale

- Leggere un numero intero positivo `n`
- Calcolare il fattoriale del numero

>

Moltiplicare tra loro i primi `n` numeri
<br>
Memorizzare in una variabile il risultato parziale; a ogni ciclo, moltiplicarla per il nuovo numero

---

![large](images/misc/gold-price.svg)
# 1.6 Massimo e minimo

- Chiedere all'utente, attraverso un ciclo, una sequenza di numeri naturali
    - La sequenza termina quando si legge un valore negativo (non valido)
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

---

![](images/misc/leap-centuries.svg)
# 1.7 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400
<br>
<https://it.wikipedia.org/wiki/Anno_bisestile#Definizione>

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

# Esercitazione 2 (10-04)

---

![](images/misc/thermometer.png) fahr = 1.8·cels + 32
# 2.1 Funzione, Fahrenheit

- Definire una funzione `cels_to_fahr`
    - Parametro: temperatura Celsius, `float`
    - Risultato: temperatura Fahrenheit, `float`
- Invocare la funzione dalla shell interattiva
- Definire poi una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente la temperatura in gradi Celsius
    - Poi chiamare `cels_to_fahr` con questo parametro
    - Infine mostrare all'utente il risultato

---

![](images/misc/street-fighter.png)
# 2.2 Animazione orizzontale

- Partire dalla classe `Ball` vista a lezione
- Eseguire l'animazione
    - Per ogni frame, chiamare il metodo `move` della pallina
    - Rappresentare un rettangolo o un cerchio nella posizione aggiornata della pallina
- Modificare però il metodo `move`
    - La pallina si sposta sempre di pochi pixel in orizzontale
    - La pallina non si sposta verticalmente
    - Se esce dal bordo destro, ricompare al bordo sinistro e viceversa

---

# 2.3 Riquadro

- Classe che modella un riquadro
    - Campi privati per *largezza* e *altezza*
    - Metodo calcolare l'area: `area`
    - Metodo calcolare il perimetro: `perimeter`
- Nel corpo principale del programma, creare e usare un riquadro
    - Chiedere all'utente le dimensioni del riquadro
    - Passare queste dimensioni al costruttore, come parametri
    - Mostrare area e perimetro del riquadro creato

---

# 2.4 Tabella delle distanze

- Considerare tutti gli accoppiamenti tra due numeri: `x` e `y`
    - Ciascun numero compreso tra 1 e 5
- Mostare in tabella la distanza (`abs`) tra i due numeri
    - Una riga per ogni valore di `y`
    - Una colonna per ogni valore di `x`

``` text
0   1   2   3   4
1   0   1   2   3
2   1   0   1   2
3   2   1   0   1
4   3   2   1   0
```

>

Usare due cicli for annidati; cominciare a scrivere il solo ciclo sulla `x`, con `y` costante

---

# 2.5 Pallina casuale

- Creare una classe `WanderingBall`
    - A partire dalla classe `Ball` vista a lezione
    - Inizialmente, movimento a destra di 2 px
    - Eliminare i rimbalzi
- Nel metodo `move`, aggiungere un cambio di direzione casuale
    - Nuova direzione: alto, basso, destra, o sinistra
    - Escludere però la direzione opposta a quella attuale
- Cambiare direzione solo in certi punti
    - Quando `x` e `y` sono entrambe multiple di 8

---

![](images/oop/wasd-keys.jpg)
# 2.6 Comando da tastiera

- Partire dall'esempio dell'animazione orizzontale, *senza classi*
    - Quando l'utente preme uno dei tasti “WASD”...
    - La pallina cambia direzione
    - W: alto, A: sinistra, S: basso, D: destra
- Mostrare l'animazione di una pallina su un canvas

---

![](images/oop/wasd-keys.jpg)
# 2.7 Pallina con controlli

- Creare una classe `HeroBall`
    - A partire dalla classe `Ball` vista a lezione
    - Eliminare i rimbalzi; inizialmente, pallina ferma
- Aggiungere dei metodi di comando
    - `go_up`, `go_down`, `go_left`, `go_right`
    - Nel corpo, si modificano `dx` e `dy`, ma non `x` e `y`
- Quando l'utente preme uno dei tasti `WASD`, viene invocato il metodo corrispondente
    - La pallina continua a muoversi anche se il tasto viene rilasciato

---

# Esercitazione 3 (10-11)

---

![](images/misc/gold-price.svg)
# 3.1 Conteggio valori

- Chiedere una sequenza di numeri all'utente
    - La sequenza termina con input `0`
    - Lo `0` non fa parte della sequenza
- Contare tutti i valori maggiori dell'ultimo
- Contare tutti i valori minori dell'ultimo
- Implementare il calcolo in una funzione *pura*
    - Parametro: lista di valori
    - Risultato: coppia con i due conteggi

---

![](images/misc/histogram-rot.svg)
# 3.2 Istogramma con barre orizzontali

- Chiedere all'utente una sequenza di numeri positivi
    - La sequenza termina con input `0`
    - Lo `0` non fa parte della sequenza
- Mostrare un istogramma
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile

---

# 3.3 Classe per quadratiche

- Definire una classe delle espressioni quadratiche
- Campi per memorizzare i tre coefficienti
- Metodo per valutare l'espressione in un punto dato
    - Parametro per il valore di *x*
- Nella parte principale del programma
    - Chiedere all'utente i coefficienti per istanziare un oggetto
    - In un ciclo, valutare l'espressione per vari valori *x* inseriti dall'utente

![large](images/misc/quadratic.svg)

---

# 3.4 Classe per polinomi

- Definire una classe delle espressioni polinomiali
- Campo per la *lista* dei coefficienti
    - Parametro del costruttore
    - Lunghezza: *n+1*
- Metodo per valutare l'espressione in un punto dato
    - Parametro per il valore di *x*
- Nella parte principale del programma
    - Chiedere all'utente i coefficienti per istanziare un oggetto
    - In un ciclo, valutare l'espressione per vari valori *x* inseriti dall'utente

![large](images/misc/polynomial.svg)

---

![](images/misc/histogram.svg)
# 3.5 Istogramma con barre verticali

- Chiedere all'utente una sequenza di numeri positivi
    - La sequenza termina con input `0`
    - Lo `0` non fa parte della sequenza
- Mostrare un istogramma
    - Altezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più alta occupa tutto lo spazio disponibile
    - Barre in blu, per valori sotto alla media
    - Barre in rosso, per valori sopra (o uguali) alla media

---

![](images/misc/pac-man.png) ![](images/oop/wasd-keys.jpg)
# 3.6 Pac-Man, comandi [P1]

- Ridenominare come `PacMan` la classe `Turtle` dell'esempio `bounce`
- Il personaggio cambia direzione solo in alcuni punti
- Nel metodo `control`
    - Svolta solo se `x` e `y` entrambe multiple di 8
    - Solo alto, basso, sinistra, destra; no diagonali

>

Il progetto Pac-Man *[P1]* può essere sviluppato in coppia
<br>
<https://www.retrogames.cz/play_1103-Atari7800.php>
<br>
<https://play.google.com/store/apps/details?id=eu.bandainamcoent.pacman256&hl=it>

---

![](images/misc/pac-man.png)
# 3.7 Pac-Man, animazione [P1]

- Cambiare il file con le icone dei personaggi
- Per il protagonista, visualizzare icone diverse durante il movimento
- Nel metodo `symbol`, utilizzare lo stato del personaggio per scegliere l'icona

>

<https://tomamic.github.io/images/sprites/pac-man.png>
<br>
<https://tomamic.github.io/images/sprites/pac-man-bg.png>


---

# Esercitazione 4 (10-18 *)

---

![](images/misc/characters.png)
# 4.1 Occorrenze di un carattere

- Definire una funzione *pura* `count_char`
    - Due parametri: un testo; un carattere
    - Risultato: numero di occorrenze del carattere all'interno del testo
- Definire una funzione `main`
    - All'inizio, chiede all'utente di inserire un testo
    - In un ciclo, chiede un carattere e conta le occorrenze
    - ... sempre all'interno dello stesso testo iniziale

>

Usare un ciclo `for` sulla stringa

---

![](images/misc/characters.png)
# 4.2 Occorrenze in classe

- Definire una classe `Text`
    - Inizializzata con una stringa di testo
- Definire un metodo `count_char`
    - Il carattere è passato come parametro
    - Risultato: num. occorrenze del carattere nel testo
- Definire una funzione `main`
    - All'inizio, chiedere all'utente di inserire un testo
    - Inizializzare un oggetto `Text`
    - In un ciclo, chiedere un carattere e contare le occorrenze
    - ... sempre all'interno dello stesso oggetto

---

![](images/fun/bike-lock.png) Per l'esercizio: 3 ruote, anzichè 4
# 4.3 Configurazioni di 3 simboli

- Scrivere una funzione per generare tutte le configurazioni di un lucchetto con 3 ruote (*disposizioni con ripetizione*)
    - Parametri: `str` contenente l'insieme dei simboli (presenti su ogni ruota)
    - Risultato: lista di `str` (configurazioni)
- Per test, fornire in input le lettere `"AEIO"`, per ottenere:
    - `["AAA", "AAE", "AAI", "AAO", "AEA", "AEE", "AEI", "AEO", "AIA", "AIE"... ]`

>

Possibile approccio con 3 cicli `for` annidati
<br>
Ogni `for` scorre tutto l'insieme di simboli

---

![](images/misc/weather.png)
# 4.4 Dati di piovosità

- Memorizzare dei dati di piovosità forniti dall'utente
    - Piovosità negativa, per terminare l'inserimento
- Ciascun dato è una coppia `(str, int)`
    - Giorno di misurazione (es.: `"2019-10-07"`)
    - Millimetri di pioggia
- I dati possono essere forniti dall'utente fuori sequenza
    - Ma devono essere memorizzati in ordine in una lista
    - Inserire ogni dato nella posizione giusta, secondo la data
- Visualizzare infine la lista completa e ordinata

>

Usare `insert`; evitare algoritmi per il *sort*

---

![](images/misc/weather.png)
# 4.5 Stazione meteorologica

- Scrivere classe per una stazione meteo, rappresentata così:
    - Nome della stazione
    - Lista dei dati di piovosità, inizialmente vuota
- Metodo per aggiungere un nuovo dato: giorno di misurazione (es.: `"2019-10-07"`) e millimetri di pioggia
- Metodo per ottenere la pioggia totale in mm. tra due date scelte (parametri)
- Nella parte principale del programma
    - Istanziare la stazione e chiedere tutti i dati di piovosità all'utente (valore negativo per terminare)
    - In un ciclo, chiedere poi all'utente due date e calcolare la pioggia totale in mm in quel periodo

---

![](images/misc/troll-key.png)
# 4.6 Maiuscole tra asterischi

- Definire una funzione
    - Parametro: una stringa di testo
    - Risultato: un testo analogo, ma...
    - Reso in maiuscolo tutto il testo compreso tra asterischi
- Es. “`I want *this text* to be uppercase`” <br>
  → “`I want THIS TEXT to be uppercase`”
- Richiamare la funzione per varie righe di testo inserite dall'utente
    - Finchè non viene inserita una riga vuota (*sentinella*)

>

Segnare in un `bool` se, scorrendo il testo, si é incontrato un asterisco
<br>
Oppure, mantenere un contatore degli asterischi

---

![](images/misc/pac-man.png)
# 4.7 Pac-Man - Fantasmi [P1]

- Modificare la classe `Ghost` dell'esempio `bounce`
- Un fantasma uccide Pac-Man, se lo tocca
    - Metodo `remove` di `Arena`
- Svolta casualmente, solo agli incroci
    - Coordinate multiple di `8×8` pixel
    - Direzioni: alto, basso, destra, sinistra
- Ma non torna mai indietro!
    - Escludere la direzione opposta a quella attuale


---

# Esercitazione 5 (10-25 *)

---

![](images/misc/solids.png)
# 5.1 Funzione, sfera

- Definire una funzione *pura* `sphere_volume`
    - Parametro: raggio, in `float`
    - Risultato: volume della sfera
- Definire poi una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente il raggio
    - Poi chiamare `sphere_volume` con questo parametro
    - Infine mostrare all'utente il risultato

---

![](images/misc/solids.png)
# 5.2 Classe, sfera

- Classe che modella una sfera
    - Campo privato per il raggio
    - Due metodi, per ottenere area e volume
- Nel corpo principale del programma, creare e usare una sfera
    - Chiedere all'utente il raggio
    - Istanziare un oggetto sfera
    - Mostrare area e volume della sfera creata

---

# 5.3 Quadrati di una sequenza

- Scrivere una funzione `squared_range`
- Due parametri: valore iniziale e valore finale (escluso)
- Risultato: una lista di `int`
    - Contenente i quadrati dei valori nel range
- Esempio, con parametri `5` e `8`
    - Risultato: `[25, 36, 49]`

---

![](images/fun/times-table.svg)
# 5.4 Tabelline sul canvas

- Riprendere l'esempio delle tabelline
- Scrivere i numeri sul canvas, con `g2d`
    - Usare la funzione `draw_text_centered`
    - Attenzione al tipo: `str`
- Disegnare anche una griglia, con delle linee
    - Come nella figura a lato

---

![](images/misc/characters.png)
# 5.5 Conteggio caratteri

- Definire funzione `count_chars`
    - Parametro: `str`, per testo
    - Parametro: `str`, per caratteri da cercare
- Risultato
    - Lista dei conteggi
- Esempio
    - Testo: `"Tanto tempo fa, in una galassia lontana lontana"`
    - Caratteri: `"aeiou"`
    - Risultato: `[10, 1, 2, 4, 1]`
- Richiamare la funzione dalla procedura `main`

>

Si può sfruttare la funzione `count_char`, es. 4.1

---

![](images/misc/characters.png)
# 5.6 Classe per i conteggi

- Definire una classe che memorizzi un testo
- Definire un metodo `count_chars` per il conteggio di certi caratteri
    - Parametro: stringa con caratteri da cercare
    - Risultato: lista dei conteggi
- Nella procedura `main`
    - Inizializzare un oggetto con testo fornito dall'utente
    - In un ciclo, richiamare il metodo `count_chars`,<br>sempre sullo stesso oggetto,<br>con caratteri indicati di volta in volta dall'utente

>

Distingure bene campi, parametri e variabili locali

---

![](images/misc/pac-man.png)
# 5.7 Pac-Man - Controllo dei muri

- Muri non possono essere attraversati da nessuno
- Muri: blocchetti virtuali di `8×8` pixel
    - Già disegnati nell'immagine di sfondo
    - O disegnati come rettangoli pieni
- Pac-Man e fantasmi occupano `16×16` pixel
    - *Almeno* `2×2` blocchetti, se allineati
    - In tutto, possono toccare 4, 6 o 9 blocchetti
- Non è necessario che i muri siano personaggi
    - Fornita su Elly funzione `in_wall(x, y)`, per controllare i blocchetti
    - Impedire *a priori* di andare sui muri (→ no collisioni)

>

<https://github.com/tomamic/fondinfo/blob/master/exercises/e5_2021_7_pacman.py>

---

![](images/misc/pac-man.png)
# 5.8 Pac-Man, biscotti [P1]

- *Biscotti* (“`-`” sulla mappa)
    - Pac-Man deve mangiarli tutti, per vincere
    - Posizionarli automaticamente in base alla mappa
    - (Correggere di `2px` per centrarli sul percorso)
- *SuperBiscotti* (“`+`” sulla mappa)
    - Danno per breve tempo a Pac-Man il potere di mangiare i fantasmi
    - Posizioni dalla mappa, correggere di `4px`
- Aggiungere, *opzionalmente*
    - Secondo Pac-Man, con l'uso di tasti diversi
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

# Esercitazione 6 (11-01)

---

![](images/misc/catbus.png) Was it a car or a cat I saw?
# 6.1 Palindromo con ricorsione

- Testo *palindromo*: rimane uguale se letto al contrario
- Scrivere una funzione ricorsiva per riconoscere i palindromi
    - Parametro: testo da controllare
    - Risultato: `bool`
- Stringa palindroma se lunghezza `≤ 1`
- Altrimenti, palindroma se
    - Prima lettera == ultima lettera e...
    - Stringa rimanente (senza prima e ultima lettera) palindroma

>

Non usare cicli `for` o `while`
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/hist/euclid.jpg)
# 6.2 Massimo Comun Divisore

- Leggere due numeri
- Calcolare in una funzione il loro Massimo Comun Divisore
- Euclide
    - *gcd(a, b) = a, se b = 0*
    - *gcd(a, b) = gcd(b, a mod b), altrimenti*
- Visualizzare il risultato della funzione

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 6.3 Lista di righe di testo

- Considerare la mappa del gioco PacMan
    - Lista di stringhe, una per ogni riga
- Trovare la colonna con il minor numero di muri (`#`)

---

![](images/misc/pac-man.png)
# 6.4 Pac-Man, gioco e GUI [P1]

- Classe `PacManGame`, per gestire il gioco *Pac-Man*
    - Inizializzare i personaggi e i muri <br> Opzionalmente: per vari livelli, letti da file (…)
    - Incapsulare personaggi e arena
    - Controllare la conclusione della partita, positiva o negativa
- Classe `PacManGui` per la rappresentazione del gioco
    - Disegno immagini e funzionalità legate a `g2d`
    - Metodi `tick` etc.

>

<http://www.ce.unipr.it/brython/?x3_oop_bounce_game.py>
<br>
<http://www.ce.unipr.it/brython/?x3_oop_bounce_gui.py>

---

![](images/misc/pac-man.png)
# 6.5 Pac-Man, test [P1]

- Creare degli *unit test* per il gioco Pac-Man
    - Sono consigliati *test parametrizzati*
- Cercare di testare ciascun personaggio separatamente
    - Chiamare direttamente `move`, `collide` ecc., in varie situazioni
    - Senza chiamare `tick` di `Arena`
- Es. testare simulando varie sequenze di comandi
    - Percorre la traiettoria prevista? (Evita i muri, gira solo agli incroci, ecc.)
    - Sceglie sempre lo sprite corretto?
    - Reagisce correttamente alle diverse collisioni?

---

![](images/misc/pacman-scatter.png)
# 6.6 Pac-Man, comportamenti [P1]

- Estensione *opzionale*: distinguere tre comportamenti dei fantasmi (i primi due, alternati)
    - *Chase*: un fantasma sceglie un punto nei pressi di Pac-Man e cerca di avvicinarsi a quel punto
    - *Scatter*: ogni fantasma pattuglia un angolo diverso (ognuno ha un suo obiettivo diverso a cui cerca continuamente di avvicinarsi)
    - *Frightened*: i fantasmi si muovono in maniera casuale, quando Pac-Man ha i superpoteri
- I fantasmi non tornano comunque indietro

>

<http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior>
<br>
<http://www.gamasutra.com/view/feature/3938/the_pacman_dossier.php?print=1>

---

![](images/misc/handwriting.jpg)
# ⭐ 6.7 Progetti in bella copia

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile*: `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata*: cicli senza `break`, `return` solo a fine funzione (tranne se brevissima)
    - ⭐ *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*


---

# Esercitazione 7 (11-08)

---

![](images/fun/matryoshka.png)
# 7.1 Potenze con ricorsione

- Calcolare la potenza intera positiva di un numero, sfruttando la ricorsione
- Qualsiasi numero `x`, elevato a potenza `0`, dà come risultato `1`
- La potenza `n`-esima di un numero `x` si può calcolare come:
    - `xⁿ = x · xⁿ⁻¹`, per `n > 0`

>

IEEE definisce anche `0⁰ = 1`, anzichè indeterminato
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

# 7.2 Maiuscole in ogni riga

- Leggere un file riga per riga
- Calcolare e visualizzare la percentuale di maiuscole in ogni riga
- Calcolare e visualizzare la percentuale di maiuscole in tutto il file

---

# 7.3 Matrice casuale

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempire la matrice di numeri interi casuali, compresi tra 0 e 15
- Salvare la matrice in un file di testo (*CSV*)
    - Ogni riga della matrice in una riga del file
    - Valori separati tra loro da una virgola
- In un ciclo
    - Chiedere un valore all'utente
    - Contare quante volte quel valore è presente nelle celle di bordo

---

# 7.4 Lettura matrice

- Leggere da file la matrice salvata nell'esercizio precedente
- Per ogni colonna della matrice
    - Stampare il valore medio

---

![](images/misc/triangles1.png)
# 7.5 Triangoli ricorsivi

- Definire una funzione
    - Parametri: tre punti sul piano
- Disegnare un triangolo
    - Solo linee, senza riempimento
- Finchè il triangolo non è abbastanza piccolo (~10px)
    - Disegnare un triangolo interno
    - Unendo i punti mediani dei tre lati
    - Ripetere ricorsivamente la procedura
- Si può usare un canvas 600×520
    - ~ Triangolo equilatero

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/slitherlink-solved.png)
# 7.6 Slitherlink, regole [P2]

- ➊ Connect adjacent dots with lines, to make a *single loop*
- ➋ A number indicates *how many lines* surround it, while empty cells may be surrounded by any number of lines
- ➌ The loop never crosses itself and *never branches* off

>

<https://www.nikoli.co.jp/en/puzzles/slitherlink.html>
<br>
<https://www.brainbashers.com/slitherlinkhelp.asp>
<br>
Il progetto Slitherlink *[P2]* può essere sviluppato in coppia

---

![](images/misc/slitherlink.png)
# 7.6 Slitherlink, inizio [P2]

- Classe che incapsula lo stato del gioco
    - Matrice con lo stato ogni cella
    - Per cominciare, usare la matrice già fornita su Elly
- Implementare i metodi di `BoardGame`
    - `play_at`: per segnare una linea, o toglierla
    - `flag_at`: per segnare l'assenza di una linea (`×`)
    - `value_at`: per conoscere il testo di una cella
    - `finished`: `pass` -- Per ora non controllare il completamento

>

**⚠️ Attenzione** : **non** generare automaticamente partite casuali!

---

![](images/misc/slitherlink-solved.png)
# 7.7 Slitherlink, conclusione [P2]

- Nel costruttore
    - Caricare la matrice da un file (parametro)
- Nel metodo `play_at`, lasciare giocare liberamente l'utente
    - Può fare anche mosse sbagliate!
- Nel metodo `finished`, controllare il completamento del gioco
    - I numeri indicano quante linee devono esserci attorno
    - Attorno ai segni `+` devono esserci `2` o `0` linee
    - Per ora, *non* controllare la regola del “single loop”

---

# Esercitazione 8 (11-15)

---

# 8.1 Numeri in ordine

- Creare una sottoclasse di `BoardGame`
- Costruttore
    - Parametri per numero di righe e colonne
    - Parametri per valore minimo e massimo (>0)
    - Riempire una matrice con numeri casuali
    - Numeri scelti nell'intervallo (anche ripetuti)
- Metodo `value_at`
    - Restituire il numero (come `str`) se ancora presente nella cella
- Altri metodi vuoti
- Visualizzare il gioco nella GUI

---

# 8.2 Numeri in ordine, conclusione

- Continuare l'esercizio 8.1
- Metodo `play_at`
    - Cancellare il numero, se è il maggiore tra quelli disponibili
    - Altrimenti, conteggiare la mossa come errata
- Metodo `finished`
    - Controllare che siano stati cancellati tutti i numeri
- Metodo `message`
    - Comunicare il numero di errori commessi

---

![](images/misc/triangles2.png)
# 8.3 Triangoli ricorsivi

- Definire una funzione di disegno ricorsiva
    - Parametri: tre punti
    - P.es. `(300, 0), (0, 520), (600, 520)`
- Trovare i punti mediani dei tre lati e unirli con `3` linee
    - Il triangolo di partenza risulterà diviso in `4`
- Se i nuovi 4 triangoli non sono abbastanza piccoli (~10px)
    - → Ripetere ricorsivamente la procedura sui 3 triangoli esterni

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/sample-file-system.png)
# 8.4 Profondità albero

- Partire dall'es. 4.5 del 2014: file system
- Aggiungere a tutti i *nodi* un metodo `depth`, che riporta la profondità della struttura
- Astratto nella classe base
- Per un *documento*: 0
- Per una *cartella*: 1 + profondità massima dei sottonodi
- Rispetto alla struttura raffigurata a fianco
    - Calcolare la profondità della cartella radice (chiamare il metodo `depth`)

>

<https://tomamic.github.io/pyodide/?p10_folders.py>

---

![small](images/misc/slitherlink-loops.svg) Errore: due anelli
# 8.5 Slitherlink, singolo anello [P2]


- ➊ Attorno ai `+` ci sono solo `2` o `0` linee?
- ➋ Le linee segnate formano un solo anello?
    - Cercare una linea da cui partire
    - Cercare via via *nuove* linee collegate
    - Fino a tornare alla cella di partenza
    - Quante linee fanno parte dell'anello? Sono tutte?

>

Memorizzare il punto di partenza, oppure l'intero percorso

---

![](images/misc/slitherlink-solved.png)
# 8.6 Slitherlink, automatismi [P2]

- Autocompletamento, al click su un incrocio (`+`):
    - Es. manca solo una casella → linea o `×`
    - Es. ci sono già due linee → tutte `×`
- Autocompletamento, al click su un vincolo numerico
    - Es. ci sono già le linee giuste → tutte `×`
    - Es. mancano `n` linee e ci sono `n` caselle libere → tutte linee
- ⚠️ Se non sono soddisfatte le condizioni, non fare nulla

---

![](images/misc/slitherlink-solved.png)
# 8.7 Slitherlink, test [P2]

- Creare degli *unit test* per il gioco Slitherlink
- Verificare il gioco dopo varie chiamate a `play_at`
    - Usare `value_at` per osservare lo stato
- Verificare il funzionamento di `finished` rispetto alle varie regole
    - Biforcazioni o incroci
    - Vincoli numerici
    - Singolo anello
- Verificare gli automatismi

---

# Esercitazione 9 (11-22 *)

---

![](images/fun/matryoshka.png)
# 9.1 Liste annidate, massimo

- Definire una funzione *ricorsiva*
    - Parametri: lista contenente parole semplici e altre liste di parole
    - Risultato: parola maggiore, anche nelle liste annidate
- Ricerca del massimo: parola maggiore, in ordine alfabetico
    - Una parola semplice si confronta con il massimo precedente
    - In una lista annidata, si cerca ricorsivamente il massimo
- Esempio : `["Ann", ["Bart", ["Carol", "Cindy"], "Bob", "Art"], ["Bea"], "Bill"]`
    - → Risultato: *Cindy*

>

`isinstance([1, 2], list)  # Check if [1, 2] is a list: True`
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/dice.png)
# 9.2 Scrittura di risultati casuali

- Simulare `n` lanci di una terna di dadi
    - `n` scelto dall'utente
- Scrivere il risultato dei lanci in un file
    - In ogni riga, inserire i tre valori separati da virgole

---

![](images/misc/dice.png)
# 9.3 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 9.2
- Per ogni terna di valori letta, calcolare la loro somma
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 3 a 18
    - Somma dei tre dadi
- Mostrare i conteggi finali

>

Per conteggiare i vari risultati, usare una lista di (almeno) 16 valori

---

![](images/misc/triangles2.png)
# 9.4 Triangoli a livelli

- Riprendere l'esercizio 8.3
- Aggiungere alla funzione un parametro `level`
    - Decrementare `level` nelle chiamate ricorsive
- L'utente può scegliere il *livello di dettaglio* (profondità della ricorsione), per disegnare...
    - Livello `1`: solo `1` triangolo
    - Livello `2`: `1+3` triangoli
    - Livello `3`: `1+3²` triangoli
    - Livello `4`: `1+3+3²+3³` triangoli, ecc.

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/magic-square.png)
# 9.5 Quadrato magico

- Chiedere all'utente `n`
- Generare le permutazioni dei numeri da `1` a `n²`
    - Come anagrammi, ma `list[int]` anziché `str`
- Elencare quelle che sono *quadrati magici* `n×n`
    - Stessa somma in tutte le righe, colonne e diagonali: *numero magico*
- Utile definire una funzione
    - Parametro: `list[int]`, un quadrato di numeri
    - Risultato: `list[int]`, con tutte le somme <br> (che dovrebbero essere uguali)

>

<http://tomamic.github.io/p4-ricorsione.html#/27>
<br>
Eseguibile nei casi `n ≤ 3`, poi troppo inefficiente

---

![](images/misc/magic-square.png)
# 🥷 9.6 Quadrato con backtracking

- Applicare il *backtracking* al problema del quadrato magico
- In prima cella libera, provare ciascuno dei numeri possibili
    - Saltare quelli già inseriti
- Testare dopo ogni numero introdotto
    - Una riga completa potrebbe avere somma errata
    - Una riga parziale potrebbe già superare il numero magico
    - Ecc.
- Se resta una sola cella libera in una riga… → valore forzato

>

<http://www.ce.unipr.it/brython/?p5_solve_queens.py>

---

![](images/misc/dead-end.jpg)
# 9.7 Slitherlink, vicolo cieco [P2]

- Metodo booleano `unsolvable`, senza parametri
- Controlla se una delle celle già segnate impedisce la soluzione del gioco
    - *Non si può risolvere il gioco senza ripulire una cella*
    - ➊ Almeno un vincolo violato per *eccesso* di linee, oppure di `×`
    - ➋ Biforcazione o incrocio di linee, attorno a un `+`
    - ➌ Un circuito chiuso non include tutte le linee
- Può restituire `False` anche se la partita non è finita
    - Non ci sono violazioni evidenti, dovute ai segni già inseriti
    - Ci sono però delle celle ancora non segnate

>

Con la GUI, attivare questa funzionalità alla pressione del tasto `u`

---

# Esercitazione 10 (11-29 *)

---

![](images/fun/matryoshka.png)
# 10.1 Liste annidate, conteggio

- Definire una funzione *ricorsiva*
    - Parametri: lista contenente stringhe semplici e altre liste annidate
    - Risultato: conteggio di tutte le stringhe presenti, anche nelle liste annidate
- Dimensione di una lista appiattita: conteggio delle stringhe semplici + dimensioni delle liste annidate
    - Una stringa semplice conta `1`
    - Per una lista annidata, bisogna valutare la sua lunghezza appiattita
- Esempio : `["Ann", ["Bart", ["Carol", "Cindy"], "Bob", "Art"], ["Bea"], "Bill"]`
    - → Risultato: *8*

>

`isinstance([1, 2], list)  # Check if [1, 2] is a list: True`
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.2 Scrittura file

- Chiedere all'utente un numero `n`
- Generare `n` punti casuali su un piano cartesiano virtuale (non disegnarli)
    - Valori `int` di `x` e `y` compresi tra `-10` e `10`
- Salvare tutti i dati in un file
    - Un punto (`x` e `y`) per ogni riga

>

Limitare l'uso di liste

---

# 10.3 Lettura file

- Scorrere i dati del file salvato nell'esercizio 10.2
- Trovare il punto più lontano dall'origine (0, 0)
    - Distanza euclidea
- Alla fine, scrivere le coordinate del punto a console

>

Limitare l'uso di liste

---

# 10.4 Ricerca in una matrice

- Riempire e visualizzare una matrice con numeri casuali (`0 ≤ val ≤ 9`)
    - Dimensioni matrice scelte dall'utente
- Ciclicamente, chiedere all'utente un valore `v` da cercare
    - Elencare tutte le posizioni (riga e colonna) contenenti `v`

---

![](images/misc/sierpinski-rgb.svg)
# 10.5 Quadratini in RGB

- Scrivere una funzione ricorsiva di disegno
    - Parametri: `x`, `y`, `s`
- Nel quadrato, si identificano 3 quadratini di lato `s/2` disposti a triangolo: due adiacenti e il terzo sopra
- Se i quadratini sono abbastanza piccoli (p.es. `<= 16`)
    - → Colorati in `RGB` (senza ricorsione)
- Altrimenti: *ricorsione*
    - Si ripete la suddivisione per ciascuno dei tre quadratini

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/sierpinski-rgb.svg)
# 10.6 Livelli di ricorsione

- Riprendere l'esercizio 10.5
- Aggiungere alla funzione un parametro `level`
    - Decrementare `level` nelle chiamate ricorsive
- Così l'utente può scegliere il *livello di dettaglio* (profondità della ricorsione), per disegnare...
    - Liv. `0`: solo 3 quadratini
    - Liv. `1`: 3×3 quadratini
    - Liv. `2`: 3×3×3 quadratini, ecc.

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.7 Matrice incapsulata

- Riprendere l'esercizio 10.4
- Incapsulare in una classe la matrice e le operazioni su di essa
    - Operazioni di I/O: fuori dalla classe, nella funzione `main`

---

![small](images/misc/artificial-intelligence.png)
# 10.8 Slitherlink, suggerimenti [P2]

- Cercare una mossa “ragionata”
    - Come un umano, senza backtracking
- *Provare* a segnare una linea in una cella vuota
    - Applicare gli automatismi delle scorse esercitazioni (8.6)
    - Se regole violate (`unsolvable`) → `×`!
- *Provare* a segnare una crocetta `×` in una cella vuota
    - Applicare gli automatismi delle scorse esercitazioni (8.6)
    - Se regole violate (`unsolvable`) → linea!
- Se in *entrambi i casi* qualche altra cella prende sempre lo stesso segno → confermarlo!

>

Provare se i suggerimenti risolvono puzzle di diverse dimensioni
<br>
Con la GUI, attivare questa funzionalità alla pressione del tasto `h`
<br>
⚠️ Se una ipotesi non risulta `unsolvable`, non è detto che sia giusta; non si possono trarre conclusioni!
<br>
<https://www.conceptispuzzles.com/index.aspx?uri=puzzle/slitherlink/techniques>

---

![small](images/misc/artificial-intelligence.png)
# 10.9 Slitherlink, backtracking [P2]

``` py
def solve_recursive(self, i: int) -> bool:
    ## self.mark_auto()  # mark all obvious cells
    ## if self.unsolvable(): return False  # unsolvable
    # find first unsigned cell, starting from i
    while i < len(self._board) and self._board[i] != UNSIGNED:
        i += 1
    if i < len(self._board):
        saved = self._board[:]  # save current status
        for sign in (LINE, CROSS):
            self._board[i] = sign
            if self.solve_recursive(i + 1):
                return True
            self._board = saved[:]  # backtracking
    return self.finished()
```

>

Suggerita l'implementazione di `mark_auto` (es. 8.6/10.7) e `unsolvable` (9.7)
