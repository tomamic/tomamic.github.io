![](images/dev/geek-girl.svg)
# Esercizi 2020
## Introduzione alla programmazione

---

# Esercitazione 1 (09-28)

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

![](images/misc/red-circles.svg)
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

# 1.6 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400

---

# 1.7 Divisori

- Chiedere all'utente un numero `n`
- Mostrare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

---

![large](images/misc/gold-price.svg)
# 1.8 Massimo dispari

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
- La sequenza termina quando l'utente inserisce 0 o un valore negativo
- Visualizzare il più grande numero dispari tra quelli inseriti

---

![](images/misc/three-cards.png)
# 1.9 Tre carte

- All'inizio l'utente ha 10 monete
- A ogni turno:
    - Viene estratto un numero segreto
    - A sorte tra 1 e 3
    - L'utente sceglie quante monete puntare e su quale numero
    - Se indovina, gli viene sommato l'importo puntato
    - Altrimenti gli viene sottratto lo stesso importo
- Il gioco termina quando l'utente perde tutto o si ritira

---

# Esercitazione 2 (10-05)

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

Formula di Erone: `area = √(s * (s-a) * (s-b) * (s-c))`
<br>
Con `s = (a+b+c) / 2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>

---

![](images/misc/triangle-notations.svg)
# 2.2 Classe dei triangoli

- Scrivere una classe `Triangle` per rappresentare dei triangoli
- Parametri del costruttore: lunghezze dei tre lati
- Fornire un metodo pubblico `perimeter` per calcolare il perimetro
- Fornire un metodo pubblico `area` per calcolare l'area
    - Usare la formula di Erone (es. 2.1)
- Nella parte principale del programma:
    - Creare un oggetto triangolo, con lati forniti all'utente
    - Invocare i metodi `area` e `perimeter` sull'oggetto
    - Infine mostrare l'area e il perimetro del triangolo

---

# 2.3 Triangolo di cifre

- Leggere un numero intero positivo `n` (< 10)
- Per ciascun valore `y` tra 1 e `n`...
- Stampare una riga con le cifre da 1 a `y`

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
# 2.4 Triangolo di cerchi colorati

- Chiedere all'utente un numero `n`
- Disegnare `n` righe di cerchi, allineate a sinistra
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale

---

# 2.5 Animazione con gravità

- Partire dall'esempio dell'animazione orizzontale, senza classi
    - Aggiungere anche una componente di velocità verticale (`dy`)
- In seguito, aggiungere l'effetto della gravità
    - Accelerazione: a ogni passo si somma un piccolo valore *costante* alla velocità verticale
    - `g = 0.4`
    - `dy += g`
    - Quando si tocca il fondo, cambiare il segno di `dy`
- Mostrare l'animazione di una pallina, con l'effetto della gravità

---

![](images/misc/bouncing-ball.jpg)
# 2.6 Pallina con gravità

- Creare una classe `FallingBall`
    - A partire dalla classe `Ball` vista a lezione
- Nel metodo `move`, aggiungere l'effetto della gravità
    - Accelerazione: aggiungere un piccolo valore *costante* alla velocità verticale
    - `g = 0.4`
    - `dy += g`
    - Quando si tocca il fondo, cambiare il segno di `dy`
- Mostrare l'animazione di una pallina, con l'effetto della gravità

---

![](images/oop/wasd-keys.jpg)
# 2.7 Controllo da tastiera

- Partire dall'esempio dell'animazione orizzontale, senza classi
    - Quando l'utente digita uno dei tasti “WASD”...
    - La pallina cambia direzione
    - W-alto, A-sinistra, S-basso, D-destra
- Mostrare l'animazione di una pallina su un canvas

---

![](images/repr/finger-counting.png)
# 2.8 Pallina con controlli

- Creare una classe `HeroBall`
    - A partire dalla classe `Ball` vista a lezione
- Aggiungere dei metodi `go_up`, `go_down`, `go_left`, `go_right`
    - Nel corpo, si modificano `dx` e `dy`, ma non `x` e `y`
    - Il movimento prosegue per soli 5 frame (aggiungere un campo per il conteggio)
- Quando l'utente digita uno dei tasti `WASD`, viene invocato il metodo corrispondente

---

![](images/misc/xmas-tree.svg)
# 2.9 Albero di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate al centro
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale
- Aggiungere in fondo una riga con un solo cerchio

---

# Esercitazione 3 (10-12)

---

![](images/misc/numbers.png)
# 3.1 Conteggio cifre

- Chiedere una riga di testo all'utente
- Contare tutte le cifre presenti, con un unico contatore
    - Prima versione: contare solo gli `0`
- Implementare il calcolo in una funzione
    - Parametro: testo (`str`)
    - Risultato: cifre contate (`int`)

>

Usare un ciclo `for` sulla stringa
<br>
I caratteri si possono confrontare con `<=`

---

![](images/oop/anim-bounce.png)
# 3.2 Pallina con colore

- Partire dalla prima classe `Ball`, vista a lezione
    - Rinominare la classe come `ColoredBall`
- Assegnare a ogni pallina un colore
    - Nel costruttore, scegliere il colore casualmente
- Aggiungere un metodo per ottenere il colore di una pallina

---

# 3.3 Lista di palline

- Partire dalla classe `ColoredBall` dell'esercizio 3.2
- Anzichè una solo pallina, crearne diverse e inserirle in una lista
- Rappresentare graficamente il movimento di tutte le palline
    - Per ogni frame, in un ciclo `for`, chiamare il metodo `move` di ogni pallina
    - Rappresentare un cerchio o un rettangolo colorato nella posizione aggiornata di ogni pallina

---

![](images/misc/numbers.png)
# 3.4 Conteggio cifre distinte

- Chiedere una riga di testo all'utente
- Contare separatamente le cifre presenti
    - Contare tutti gli `0`, tutti gli `1` ecc.
- Implementare il calcolo in una funzione
    - Parametro: testo (`str`)
    - Risultato: quanti 0, quanti 1 ecc. sono stati contati (lista o tupla di 10 `int`)

>

Usare una lista di 10 elementi per tenere i conteggi

---

![](images/misc/random-circles.svg)
# 3.5 Tiro al bersaglio

- Definire una classe `TargetShooting`
    - Bersagli: lista di `n` punti casuali
    - `n`: parametro del costruttore
- Metodo *booleano* per fare un tiro
    - Parametro: punto da controllare
    - C'è un bersaglio entro 25 pixel (raggio del bersaglio)?
- Nella parte principale del programma
    - Istanziare un oggetto `TargetShooting`; l'utente sceglie il numero di bersagli
    - Poi l'utente prova dei tiri, finchè non colpisce

>

Campo di gioco di 600x600 pixel; non è richiesta rappresentazione grafica

---

![](images/misc/bubble-bobble.png) ![](images/oop/jumper.png)
# 3.6 Bubble Bobble, draghetto [P1]

- Ridenominare come `Dragon` la classe `Turtle` dell'esempio `bounce`
- Aggiungere al draghetto la gravità (vedi es. 2.7)
- Consentire al draghetto di saltare, alla pressione di `ArrowUp`
    - Solo quando è poggiato sul fondo dello schermo

>

Il progetto Bubble Bobble *[P1]* può essere sviluppato in coppia
<br>
<https://www.retrogames.cz/play_216-NES.php>
<br>
<https://play.google.com/store/apps/details?id=com.mobirix.jp.bubblebobble1>

---

![](images/misc/bubble-bobble.png)
# 3.7 Bubble Bobble, animazione [P1]

- Cambiare il file con le icone dei personaggi
- Per il draghetto, visualizzare icone diverse durante il salto e i movimenti
- Nel metodo `symbol`, utilizzare lo stato del personaggio per scegliere l'icona

>

<https://tomamic.github.io/images/sprites/bubble-bobble.png>
<br>
<https://tomamic.github.io/images/sprites/bubble-bobble-maps.png>
<br>
<https://tomamic.github.io/images/sprites/bubble-bobble-tiles.png>

---

# Esercitazione 4 (10-19 *)

---

![](images/misc/slope.svg) y = m·x + q
# 4.1 Segmento e retta

- Definire *funzione* `slope` per una retta
    - Parametri: due punti attraversati
    - Risultato: coefficiente angolare `m`
- Definire *funzione* `intercept` per una retta
    - Parametri: due punti attraversati
    - Risultato: quota all'origine `q`
- In una *funzione* `main`
    - Chiedere all'utente le coordinate di due punti
    - Chiamare le due funzioni e mostrare i risultati

>

`m = (y2-y1) / (x2-x1)`
<br>
Nota `m`, `q` si ottiene da `y1 = m·x1 + q`

---

![](images/misc/slope.svg) y = m·x + b
# 4.2 Classe dei segmenti

- Definire una classe dei segmenti
    - Parametri del *costruttore*: coordinate dei due estremi
    - *Metodo* che restituisce il coefficiente angolare `m` della retta passante
    - *Metodo* che restituisce la quota all'origine `b` della retta passante
- In una funzione `main`
    - Chiedere all'utente le coordinate di due punti
    - Istanziare un oggetto segmento con questi due punti
    - Chiamare i due metodi e mostrare i risultati

---

# 4.3 Righe di testo

- Definire una funzione `long_lines`
    - Parametri: una lista di stringhe e una soglia intera
    - Risultato: numero di stringhe più lunghe della soglia
- Nella funzione `main`
    - Chiedere all'utente di digitare delle righe di testo
    - Inserire tutte le righe in una lista
    - L'input termina quando l'utente inserisce una riga vuota
- Sempre nella funzione `main`, in un altro ciclo
    - Chiedere all'utente una soglia
    - Contare con la funzione `long_lines` le righe più lunghe della soglia
    - Il programma termina quando la soglia inserita è `< 0`

---

# 4.4 Classe per testo

- Definire una classe `Text` che gestisce una lista di stringhe
    - Inizialmente la lista (*campo*) è vuota
    - *Metodo* per aggiungere una riga di testo
    - *Metodo* per contare le righe più lunghe di una certa soglia (parametro)
- Nella parte principale del programma
    - Istanziare un oggetto di tipo `Text`
    - Chiedere all'utente delle righe di testo e inserirle nell'oggetto
    - L'input termina quando l'utente inerisce una riga vuota
    - Chiedere all'utente un valore soglia
    - Mostrare il numero di righe più lunga della soglia

---

![](images/fun/bike-lock.png)
# 4.5 Configurazioni di simboli

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

![](images/misc/high-scores.png)
# 4.6 High scores

- Definire una classe `HighScores`
- *Campo*: lista di punteggi, all'inizio vuota
    - Memorizza 10 migliori punteggi, *in ordine* decrescente
    - Punteggio: coppia punti ottenuti (`int`) e nome (`str`)
- *Metodo* per inserire nuovo punteggio, con punti e nome
    - Scelto il posto che mantiene la lista ordinata
    - Punteggi oltre il decimo posto: troncati
- *Metodo* per ottenere la lista di punteggi
- Nella funzione `main`, in un ciclo, l'utente sceglie:
    - Inserire un nuovo punteggio
    - Vedere i migliori risultati, o uscire

---

![](images/misc/bubble-bobble.png)
# 4.7 Bubble Bobble, piattaforme [P1]

- Se urta una piattaforma, il draghetto viene fermato sopra di essa
    - Prima versione, semplicistica
- Il draghetto cade, se non poggia su una piattaforma
- Il draghetto può saltare solo se poggia su una piattaforma
- Il draghetto muore se raggiunge il fondo dello schermo

---

# Esercitazione 5 (10-26)

---

![](images/fun/matryoshka.png)
# 5.1 Massimo valore, con ricorsione

- Definire una funzione ricorsiva `max_char`
    - Cerca, in una stringa di testo, il carattere con codice Unicode massimo
- Se il testo ha lunghezza 1, l'unico carattere è quello massimo
- Altrimenti il carattere con codice massimo è pari al maggiore tra:
    - Il primo carattere
    - Il carattere con codice massimo tra tutti gli altri (ricorsione)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 5.2 Selezione di testo

- Chiedere all'utente una riga di testo
- Scrivere in output solo il testo compreso tra parentesi angolari (`<` e `>`)
- Se ci sono più parti da trascrivere, scriverle su righe separate

``` text
Python is a <multi-paradigm> <programming language>, meant to be highly <readable>.
```

``` text
multi-paradigm
programming language
readable
```

>

Segnare in un `bool` se si è letta una parentesi aperta, ma non ancora una parentesi chiusa

---

![](images/fun/sierpinski-triangle.svg)
# 5.3 Triangolo di Sierpinski

- Disegnare su un'area rettangolare: `x`, `y`, `w`, `h`
    - All'inizio, l'intero canvas
- Se `> 1` pixel, dividere l'area in `4` riquadri
    - Colorare il riquadro in alto a destra
    - Applicare ricorsivamente il pattern sugli altri `3` riquadri
- Come miglioria, permettere all'utente di scegliere il *livello di dettaglio* (profondità della ricorsione), per colorare...
    - Liv. `0`: niente
    - Liv. `1`: solo `1` riquadro
    - Liv. `2`: `1` riquadro grande e `3` più piccoli
    - Liv. `3`: `1+3+9` riquadri, ecc.

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/random-walk.svg)
# 5.4 Passeggiata casuale

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

# 5.5 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 5.4
- Contare quante volte, in tutto, è stata presa ciascuna direzione
    - Quante volte verso l'alto? Quante verso destra? Ecc.
    - Alla fine, mostrare i `4` risultati dei conteggi
- Trovare la distanza euclidea del punto più lontano dall'origine

>

Per conteggiare i vari risultati, si può usare una lista di 4 elementi
<br>
Ciascun elemento nella lista è un contatore, per una delle direzioni

---

![](images/misc/bubble-bobble.png)
# 5.6 Bubble Bobble, piattaforme [P1]

- Il draghetto atterra sulle piattaforme, dall'alto
- Può attraversarle dal basso verso l'alto
- Non può attraversarle lateralmente

``` py
if y2_dragon <= y1_platform + margin:
    y2_dragon = y1_platform
    # the dragon is on *this one* platform, now
elif x2_dragon <= x1_platform + margin:
    x2_dragon = x1_platform
    # the dragon stops at the left of the platform
elif x1_dragon >= x2_platform - margin:
    x1_dragon = x2_platform
    # the dragon stops at the right of the platform
```

---

![](images/misc/bubble-bobble.png)
# 5.7 Bubble Bobble, avversari [P1]

- Gli avversari si muovono come il draghetto
- Ma si muovono casualmente
    - In base a una scelta casuale, chiamano i metodi `go_left`, `go_right` ecc.
- Uccidono il draghetto se lo urtano

>

Eventualmente, draghetto e avversari possono estendere una classe base comune, che implementa una sola volta tutte le funzionalità condivise

---

# Esercitazione 6 (11-02)

---

![](images/fun/matryoshka.png)
# 6.1 Potenze con ricorsione

- Calcolare la potenza intera di un numero, sfruttando la ricorsione
- Qualsiasi numero `x`, elevato a potenza `0`, dà come risultato `1`
- La potenza `n`-esima di un numero `x` si può calcolare come:
    - `xⁿ = x · xⁿ⁻¹`, per `n > 0`

>

IEEE definisce anche `0⁰ = 1`, anzichè indeterminato
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

# 6.2 Valori in file CSV

- Leggere una matrice di interi da un file testuale CSV
    - *Comma Separated Values*: in ogni riga, valori separati da virgola
- Memorizzare tutti i valori in una lista semplice
    - `rows`: contare le righe del file
    - `cols`: contare i valori nella prima riga
- Chiedere un valore all'utente
    - Elencare le posizioni `(x, y)` dove il valore è presente
    - Chiedere all'utente se vuole cercare altri valori

``` text
5,5,6,17
11,6,6,6
4,16,9,8
```

---

![](images/misc/random-walk.svg)
# 6.3 Punti tra loro più distanti

- Leggere i dati dal file generato nell'esercizio 5.4
    - Oppure un file simile
- Memorizzare le coordinate dei punti del percorso in una lista (di tuple)
- Trovare i due punti *tra loro* più lontani
- Mostrare le loro coordinate e la distanza tra loro

---

![](images/fun/koch-curve.svg)
# 6.4 Curva di Koch

- Scrivere una funzione ricorsiva `koch_curve`
    - Parametri: punto di partenza, lunghezza, angolo
    - Risultato: punto di arrivo
- Se la lunghezza è minore di 5 pixel:
    - Tracciare un segmento diretto
- Altrimenti:
    - Seguire un percorso spezzato di 4 parti
    - Ciascuna parte lunga 1/3 del parametro
    - A ogni parte, applicare ricorsivamente lo stesso pattern
- Sfruttare la funzione `move_pen` del seguente esercizio
    - <http://www.ce.unipr.it/brython/?x2_fun_pen.py>

---

![](images/repr/file-system.svg)
# 6.5 Documento più grande

- Partire dall'es. 4.5 del 2014: file system
- Aggiungere metodo `largest` ai *nodi*
    - Risultato: `(size, relative_path)` del doc più grande nei sottonodi
- Astratto nella classe base
- Per un *documento*: dimensione del suo contenuto e suo nome
- Per una *cartella*: risultato maggiore, tra i sottonodi
    - Prepende il suo nome al path
- Rispetto alla struttura raffigurata a fianco
    - Cercare il doc. più grande a partire dalla cartella radice (chiamare il metodo `largest`)

>

<https://tomamic.github.io/pyodide//?p41_folders.py>

---

![](images/misc/bubble-bobble.png)
# 6.6 Bubble Bobble, bolle [P1]

- Il draghetto lancia bolle in orizzontale
    - Dopo un certo numero di frame, deviano verso l'alto
    - Uccidono gli avversari che urtano
- Opzionalmente...
    - Le bolle catturano gli avversari e li portano in alto
    - Le bolle scoppiano se toccate dal draghetto

---

![](images/misc/3inarow.svg)
# 6.7 3-in-a-row, regole [P2]

- Regole
    - Ogni riga o colonna ha celle bianche e nere in egual numero
    - 3 celle contigue non possono avere lo stesso colore
- A ogni mossa, l'utente può segnare una cella come:
    - Bianca, oppure
    - Nera, oppure
    - Grigia (indecisa)

>

<https://www.brainbashers.com/show3inarow.asp>
<br>
Il progetto 3-in-a-row *[P2]* può essere sviluppato in coppia

---

![](images/misc/3inarow.svg)
# 6.7 3-in-a-row, inizio [P2]

- Classe che incapsula lo stato del gioco
    - Matrice con lo stato ogni cella (basta un codice `int`, ad esempio)
    - Partire dalle celle iniziali del 1° disegno, non modificabili
- Implementare l'interfaccia `BoardGame`
    - Metodo `play_at` per cambiare lo stato di una cella (grigia→bianca→nera→grigia...)
    - Metodi `flag_at` e `finished` vuoti
    - Metodo `value_at` per conoscere il testo di una cella (`'-', 'W', 'B'`)

>

Non sono richiesti controlli sulle regole o sul completamento
<br>
Gestire i click e il testo sui bottoni (opzionalmente, colori)

---

# Esercitazione 7 (11-09 *)

---

![](images/fun/matryoshka.png)
# 7.1 Prodotto con ricorsione

- Calcolare il prodotto di tutti i numeri di una lista, sfruttando la ricorsione
- Se la lista è vuota, il prodotto è definito pari a `1`
- Altrimenti: moltiplicare il primo valore per il prodotto di tutti gli altri (escluso il primo)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 7.2 Matrice senza ripetizioni

- Chiedere all'utente numero di righe e colonne
- Chiedere all'utente soglia minima e massima
- Riempire una matrice con numeri casuali
- Numeri scelti tra le soglie, senza ripetizioni (*)
- Salvare in un file di testo *CSV* la matrice
    - Ogni riga della matrice in una riga del file
    - Valori nella stessa riga, separati da virgole

>

(*) Si può usare l'operatore `in`

---

# 7.3 Ripetizioni in matrice

- Leggere un file testuale *CSV* contenente una matrice di numeri
    - Ogni riga del file contiene una riga della matrice
    - Valori nella stessa riga, separati da virgole
- Durante la lettura, elencare numeri che siano trovati ripetuti
    - Scrivere a console il numero ripetuto
    - Scrivere la sua posizione: riga e colonna
    - Non considerare la prima occorrenza di ciascun valore

---

![](images/fun/fractal-tree.png)
# 7.4 Albero ricorsivo

- Funzione ricorsiva per disegnare un albero
    - Parametri: posizione iniziale, lunghezza del tronco, angolo
- Se tronco minore di 5 pixel
    - Disegnare solo un segmento (verde)
- Altrimenti:
    - Segmento per tronco (marrone)
    - Alla sua estremità, due rami con lo stesso pattern
    - 1° ramo, con rotazione di -30°
    - 2° ramo, con rotazione di +30°
    - Lunghezza dei rami ridotta a 4/5 del parametro

>

<http://www.ce.unipr.it/brython/?x2_fun_pen.py>

---

# 7.5 Numeri in ordine

- Creare una sottoclasse di `BoardGame`
- Costruttore
    - Parametri per numero di righe e colonne
    - Parametri per valore minimo e massimo
    - Riempire una matrice con numeri positivi casuali
    - Numeri scelti nell'intervallo (anche ripetuti)
- Metodo `play_at`
    - Cancellare il numero, se è il maggiore tra quelli disponibili
    - Altrimenti, conteggiare la mossa come errata
- Metodo `value_at`
    - Restituire il numero, se ancora presente nella cella

---

# 7.6 Numeri in ordine, conclusione

- Continuare l'esercizio 7.5
- Metodo `finished`
    - Controllare che siano stati cancellati tutti i numeri
- Metodo `message`
    - Comunicare il numero di errori commessi
- Utilizzare il gioco da terminale
- Utilizzare il gioco con la GUI degli esempi

---

# 7.7 Bubble Bobble, gioco e GUI [P1]

- Classe `BubbleBobbleGame`, per gestire il gioco *Bubble Bobble*
    - Inizializzare i personaggi, prendendo i dati da un file di configurazione
    - Incapsulare personaggi e arena
    - Controllare la conclusione della partita, positiva o negativa
- Classe `BubbleBobbleGui` per la rappresentazione del gioco
    - Disegno immagini e funzionalità legate a `g2d`
    - Metodi `tick` etc.

>

<http://www.ce.unipr.it/brython/?x3_oop_bounce_game.py>
<br>
<http://www.ce.unipr.it/brython/?x3_oop_bounce_gui.py>

---

![](images/misc/3inarow.svg)
# 7.8 3-in-a-row, conclusione [P2]

- Nel metodo `finished`, controllare le regole
    - Nessuna cella è rimasta grigia
    - Ogni riga o colonna ha celle bianche e nere in egual numero
    - 3 celle contigue non possono avere tutte lo stesso colore
- Nel metodo `play_at`, lasciar giocare liberamente l'utente
    - Può fare anche mosse sbagliate

---

# Esercitazione 8 (11-16)

---

![](images/misc/handwriting.jpg)
# ⭐ 8.1 Progetti in bella copia

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile*: `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata*: preferibilmente `return` a fine funzione, cicli senza `break`
    - ⭐ *OOP* : *incapsulamento*, *ereditarietà*, *polimorfismo*

---

![](images/misc/bubble-bobble.png)
# 8.2 Bubble Bobble, estensioni [P1]

- *Secondo draghetto*
    - Due giocatori, con l'uso di tasti diversi
- *Opzionalmente...*
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

![](images/misc/3inarow.svg)
# 8.3 3-in-a-row, caricamento [P2]

- Nell'inizializzazione, leggere la matrice di numeri da un file (*parametro*)
- Partite su matrici di varie dimensioni: 6×6, 8×8, 10×10...
- Opzionalmente, modificare la *GUI* per mostrare le celle annerite o cerchiate

---

![](images/misc/bubble-bobble.png)
# 8.4 Bubble Bobble, test [P1]

- Creare degli *unit test* per il gioco Bubble Bobble
    - Sono consigliati *test parametrizzati*
- Cercare di testare ciascun personaggio separatamente
    - Chiamare direttamente `move`, `collide` ecc., in varie situazioni
    - Senza chiamare `tick` di `Arena`
- Es. testare il drago simulando varie sequenze di comandi
    - Percorre la traiettoria prevista? (Può saltare solo da una piattaforma, ecc.)
    - Sceglie sempre lo sprite corretto?
    - Reagisce correttamente alle diverse collisioni?

---

![](images/misc/3inarow.svg)
# 8.5 3-in-a-row, test [P2]

- Creare degli *unit test* per il gioco 3-in-a-row
- Verificare il gioco dopo varie chiamate a `play_at`
    - Usare `value_at` per osservare lo stato
- Verificare il funzionamento di `finished` rispetto alle varie regole
    - Alcune celle grigie
    - Fila di tre o più celle bianche, o nere
    - Riga o colonna con colori sbilanciati

---

# Esercitazione 9 (11-23)

---

![large](images/algo/holy-grail.jpg)
# 9.1 Hello, user! (C++)

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

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 9.2 Equazione di secondo grado (C++)

- Chiedere all'utente i tre coefficienti `a, b, c` di una equazione di secondo grado
    - `ax² + bx + c = 0`
- Comunicare all'utente che tipo di soluzioni presenta l'equazione
- In caso di soluzioni reali, mostrare all'utente il loro valore
- Chiedere infine all'utente se vuole valutare altre equazioni

---

![](images/misc/red-circles.svg)
# 9.3 Cerchi concentrici graduali (C++)

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio gradualmente decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
    - Dal rosso del livello più esterno
    - Fino al nero del livello più interno
- Prima del ciclo, determinare di quanto cambiare raggio e colore a ogni passo

---

![](images/misc/triangle-notations.svg)
# 9.4 Funzione, Erone (C++)

- Definire una funzione `heron` per il calcolo dell'area di un triangolo
    - Parametri: tre lati come `double`
    - Risultato: area come `double`
- Nella funzione `main`
    - Chiedere all'utente tre valori
    - Poi chiamare `heron` con questi parametri
    - Infine mostrare all'utente il risultato

>

Formula di Erone: `area = √(s * (s-a) * (s-b) * (s-c))`
<br>
Con `s = (a+b+c) / 2`, semiperimetro
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>

---

# 9.5 Righe di testo (C++)

- Definire una funzione `long_lines`
    - Parametri: una lista di stringhe e una soglia intera
    - Risultato: numero di stringhe più lunghe della soglia
- Nella funzione `main`
    - Chiedere all'utente di digitare delle righe di testo
    - Inserire tutte le righe in una lista
    - L'input termina quando l'utente inserisce una riga vuota
- Sempre nella funzione `main`, in un altro ciclo
    - Chiedere all'utente una soglia
    - Contare con la funzione `long_lines` le righe più lunghe della soglia
    - Il programma termina quando la soglia inserita è `< 0`

---

# 9.6 Cerchi concentrici casuali (C++)

- Disegnare un cerchio di raggio 200 e colore casuale
- Disegnare dei cerchi concentrici, via via più piccoli
- Per ognuno, scegliere casualmente raggio e colore
- Fermarsi quando il raggio diventa più piccolo di 10

---

![](images/misc/3inarow.svg)
# 9.7 3-in-a-row, automatismi (Py) [P2]

- Colorare automaticemente alcune celle, secondo le seguenti strategia
- ➊ Bilanciare automaticamente una riga o colonna
    - Un colore occupa già metà delle celle
    - → Colorare automaticamente le rimanenti
- ➋ Evitare automaticamente le terne
    - Su tre celle in sequenza, due sono già dello stesso colore
    - → Colorare automaticamente la cella rimanente

>

Con la GUI, attivare queste funzionalità alla pressione del tasto `a`

---

![](images/misc/dead-end.jpg)
# 9.8 3-in-a-row, vicolo cieco (Py) [P2]

- Metodo booleano `unsolvable`, senza parametri
- Controlla se una delle celle già colorate impedisce la soluzione del gioco
    - *Non si può risolvere il gioco senza ripulire una cella*
    - ➊ Una riga o colonna con più di metà delle celle dello stesso colore
    - ➋ Sequenza di tre celle dello stesso colore
- Può restituire `False` anche se la partita non è finita
    - Non ci sono violazioni evidenti, dovute ai colori già inseriti
    - Ci sono però delle celle ancora grigie

>

Con la GUI, attivare questa funzionalità alla pressione del tasto `u`

---

# Esercitazione 10 (11-30)

---

![](images/misc/slope.svg) y = m·x + b
# 10.1 Segmento e retta (C++)

- Definire *funzione* `slope` per una retta
    - Parametri: due punti attraversati
    - Risultato: coefficiente angolare `m`
- Definire *funzione* `intercept` per una retta
    - Parametri: due punti attraversati
    - Risultato: quota all'origine `b`
- In una *funzione* `main`
    - Chiedere all'utente le coordinate di due punti
    - Chiamare le due funzioni e mostrare i risultati

>

`m = (y2-y1) / (x2-x1)`
<br>
Nota `m`, `b` si ottiene da `y1 = m·x1 + b`

---

![](images/misc/slope.svg) y = m·x + b
# 10.2 Classe dei segmenti (C++)

- Definire una classe dei segmenti
    - Parametri del *costruttore*: coordinate dei due estremi
    - *Metodo* che restituisce il coefficiente angolare `m` della retta passante
    - *Metodo* che restituisce la quota all'origine `b` della retta passante
- In una funzione `main`
    - Chiedere all'utente le coordinate di due punti
    - Istanziare un oggetto segmento con questi due punti
    - Chiamare i due metodi e mostrare i risultati

---

![](images/misc/triangle-notations.svg)
# 10.3 Classe dei triangoli (C++)

- Scrivere una classe `Triangle` per rappresentare dei triangoli
- Parametri del costruttore: lunghezze dei tre lati
- Fornire un metodo pubblico `perimeter` per calcolare il perimetro
- Fornire un metodo pubblico `area` per calcolare l'area
    - Usare la formula di Erone (es. 2.1)
- Nella parte principale del programma:
    - Creare un oggetto triangolo, con lati forniti all'utente
    - Invocare i metodi `area` e `perimeter` sull'oggetto
    - Infine mostrare l'area e il perimetro del triangolo

---

# 10.4 Caratteri comuni (C++)

- Definire una funzione
    - Parametri: due stringhe
    - Risultato: Stringa con caratteri presenti in entrambe le stringhe
    - Opzionalmente, evitare le ripetizioni nel risultato
- Esempio
    - Parametri: `"the intersection"`, `"of two strings"`
    - Risultato: `"tr soin"` (in qualsiasi ordine)

>

Si può definire prima una funzione ausiliaria booleana `char_in_string`, per controllare se una stringa contiene un certo carattere

---

# 10.5 Reverse con ricorsione (C++)

- Definire una funzione *ricorsiva*
    - Parametri: `vector` di interi
    - Risultato: un `vector` rovesciato (il primo valore in input è l'ultimo in output)
- Suggerimenti
    - Un vector di lunghezza `0` o `1` resta uguale, se rovesciato
    - Altrimenti, si prende: <br> ➊ il primo elemento <br> ➋ una slice con tutti gli altri
    - Si mette il primo elemento in fondo a tutti gli altri, rovesciati

---

![](images/fun/fractal-tree.png)
# 10.6 Albero ricorsivo (C++)

- Funzione ricorsiva per disegnare un albero
    - Parametri: posizione iniziale, lunghezza del tronco, angolo
- Se tronco minore di 5 pixel
    - Disegnare solo un segmento (verde)
- Altrimenti:
    - Segmento per tronco (marrone)
    - Alla sua estremità, due rami con lo stesso pattern
    - 1° ramo, con rotazione di -30°
    - 2° ramo, con rotazione di +30°
    - Lunghezza dei rami ridotta a 4/5 del parametro

>

<http://www.ce.unipr.it/brython/?x2_fun_pen.py>

---

![small](images/misc/artificial-intelligence.png)
# 10.7 3-in-a-row, suggerimenti (Py) [P2]

- Cercare automaticamente una mossa
    - Senza backtracking e ricorsione
- *Provare* a rendere nera una cella grigia
    - Applicare gli automatismi dell'es. 9.7
    - Se regole violate (`unsolvable`) → bianca!
- *Provare* a rendere bianca una cella grigia
    - Applicare gli automatismi dell'es. 9.7
    - Se regole violate (`unsolvable`) → nera!
- Caricare puzzle `medium`, dimensione 8, 10, 12 ecc.
    - <https://www.brainbashers.com/3inarow.asp>

>

Con la GUI, attivare questa funzionalità alla pressione del tasto `h`
<br>
⚠️ Se una ipotesi non risulta `unsolvable`, non è detto che sia giusta; non si possono trarre conclusioni!

---

![small](images/misc/artificial-intelligence.png)
# 10.8 3-in-a-row, backtracking (Py) [P2]

``` py
def solve_recursive(self, i: int) -> bool:
    ## self.mark_auto()  # mark all obvious cells
    ## if self.unsolvable(): return False  # unsolvable
    # find first undecided cell, starting from i
    while i < len(self._board) and self._board[i] != GRAY:
        i += 1
    if i < len(self._board):
        saved = self._board[:]  # save current status
        for color in (BLACK, WHITE):
            self._board[i] = color
            if self.solve_recursive(i + 1):
                return True
            self._board = saved[:]  # backtracking
    return self.finished()
```

>

Suggerita l'implementazione di `mark_auto` (es. 9.7/10.7) e `unsolvable` (9.8)

---

# Esercitazione 11 (12-14 *)

---

![](images/misc/snow-ball.png)
# 11.1 Funzione, densità (C++)

- Definire una funzione `sphere_density` per il calcolo della densità di una sfera
    - Parametri: raggio in metri e massa in Kg
    - Risultato: densità
- Nella funzione `main`
    - Chiedere all'utente due valori
    - Poi chiamare `sphere_density` con questi parametri
    - Infine mostrare all'utente il risultato

>

Formule utili: `V = (4/3)πR³ ; ρ = m / V`

---

![large](images/misc/gold-price.svg)
# 11.2 Sopra e sotto la media (C++)

- L'utente inserisce una sequenza di valori reali positivi
    - Un numero negativo termina la sequenza
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

---

![](images/misc/catbus.png) Was it a car or a cat I saw?
# 11.3 Palindromo con ricorsione (C++)

- *Palindromo*: testo che rimane uguale se letto al contrario
- Scrivere una funzione ricorsiva per riconoscere i palindromi
    - Parametro: testo da controllare
    - Risultato: `bool`

>

Stringa palindroma: se ha lunghezza 0 o 1, oppure...
<br><br>
Prima lettera == ultima lettera e...
<br>
Stringa rimanente (senza prima e ultima lettera) palindroma
<br><br>
<https://tomamic.github.io/p6-cpp.html#⭐-stringhe>

---

![](images/repr/digital-signal.svg)
# 11.4 Classe per audio (C++)

- Definire una *classe* `Audio_quality`
    - Parametri costruttore: `sample_rate, channels, bits_per_sample`
- Definire *metodo* `byte_rate`
    - Calcola occupazione di un sec. di audio
- Definire *metodo* `audio_size`
    - Calcola dimensione di un brano in byte
    - Parametro: durata in secondi
- In una *funzione* `main`
    - Istanziare oggetto `Audio_quality` con dati dell'utente
    - Mostrare subito il risultato di `byte_rate`
    - Calcolare la dimensione per diverse durate in secondi `>0`, fornite dall'utente

---

# 11.5 Matrice (C++)

- L'utente sceglie `rows` e `cols`
- Allocare una matrice (`vector`) di dimensione `n=rows×cols`
- Riempire la matrice con interi casuali, compresi tra `0` e `99`
- Mostrare la matrice
- Contare i multipli di `3`, in ciascuna riga
- Contare i multipli di `3`, in ciascuna colonna

---

![](images/misc/gray-squares.svg) Quattro grigi, ripetuti 2 volte
# 11.6 Ripetizioni di grigi

- Chiedere all'utente una sequenza di valori e memorizzarli in una lista
    - Un valore non compreso tra 0 e 255 termina la sequenza
- Chiedere all'utente un numero `m` di ripetizioni
- Disegnare `m * n` quadrati di lato decrescente:
    - `n` è la lunghezza della lista
    - Ciascun quadrato colorato con un livello di grigio…
    - Usando in sequenza i valori della lista
    - Ossia, ripetere `m` volte l'intera sequenza di `n` colori
