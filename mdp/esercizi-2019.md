![](images/dev/geek-girl.svg)
# Esercizi 2019
## Introduzione alla programmazione

---

# Esercitazione 1 (09-23)

---

![](images/misc/handshake.svg)
# 1.1 Hello, user!

- Compilare ed eseguire il programma “`Hello world`”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![large](images/misc/solids.png)
# 1.2 Sfera

- Chiedere all'utente il raggio di una sfera e la sua densità (in Kg/m³)
- Calcolare e visualizzare la superficie, il volume e il peso della sfera

>

Definire le variabili necessarie (nomi in minuscolo)
<br>
Nel modulo `math` è definita la costante `pi`

---

# 1.3 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400

---

![](images/misc/shadows.png)
# 1.4 Rettangoli con ombra

- Chiedere all'utente un numero `n`
- Disegnare `n` rettangoli
    - Ciascuno con posizione, dimensione e colore casuale
    - Ciascuno con un ombra grigia spostata a destra ed in basso di 5 pixel

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
    - Fino al verde del quadrato più piccolo

>

Determinare automaticamente le variazioni migliori per lato e colore, prima di iniziare il ciclo

---

![](images/misc/characters.png)
# 1.6 Carattere Unicode

- Chiedere all'utente un numero
- Visualizzare il simbolo Unicode corrispondente
- Ripetere le operazioni in un ciclo, finchè l'utente non inserisce il valore `0`

>

Usare la funzione `chr` per convertire un codice nel simbolo corrispondente

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

![large](images/misc/gold-price.svg)
# 1.8 Media dei dispari

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Calcolare il valore medio, considerando solo i valori dispari tra quelli inseriti

---

# 1.9 Passeggiata casuale

- Chidere all'utente un numero `n`
- A partire dalla posizione `x = 0, y = 0`
- Compiere `n` passi, ciascuno in una direzione casuale
    - Estrarre un numero casuale `r` tra 0 e 3
    - Se `r == 0`, sottrarre 1 alla `y` attuale (alto)
    - Se `r == 1`, sommare 1 alla `x` attuale (destra)
    - Se `r == 2`, sommare 1 alla `y` attuale (basso)
    - Se `r == 3`, sottrarre 1 alla `x` attuale (sinistra)
- Al termine comunicare le coordinate finali e la distanza raggiunta dall'origine, calcolata come `abs(x) + abs(y)`

---

# Esercitazione 2 (09-30)

---

![](images/misc/thermometer.png)
# 2.1 Funzione, Fahrenheit

- Definire una funzione `cels_to_fahr`
    - Parametro: temperatura in gradi Celsius, in `float`
    - Risultato: temperatura in gradi Fahrenheit, in `float`
- Invocare la funzione dalla shell interattiva
- Definire poi una funzione `main`
    - *Procedura, senza parametri e senza risultato*
    - Chiedere all'utente la temperatura in gradi Celsius
    - Poi chiamare `cels_to_fahr` con questo parametro
    - Infine mostrare all'utente il risultato

>

Partire dalla formula `fahr = cels * 1.8 + 32`

---

# 2.2 Box

- Classe che modella un riquadro
    - Due campi privati, per largezza ed altezza: `_width`, `_heigth`
    - Due metodi, per ottenere area e perimetro: `area`, `perimeter`
- Nel corpo principale del programma, creare e usare un riquadro
    - Chiedere all'utente le dimensioni del riquadro
    - Passare queste dimensioni al costruttore, come parametri
    - Mostrare area e perimetro del riquadro creato

---

# 2.3 Triangolo di cifre

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

![](images/misc/xmas-triangle.png)
# 2.4 Triangolo di cerchi colorati

- Chiedere all'utente un numero `n`
- Disegnare `n` righe di cerchi, allineate a sinistra
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale

---

![](images/oop/anim-rotate.png)
# 2.5 Animazione pallina

- Partire dall'esempio dell'animazione orizzontale, senza classi
    - Quando la pallina arriva ad uno dei 4 bordi...
    - Cambia direzione di 90°, in senso orario
    - Es. Arrivata al bordo destro, vira verso il basso
- Mostrare l'animazione di una pallina su un canvas

---

![](images/oop/anim-rotate.png)
# 2.6 Pallina con svolta

- Creare una classe `TurningBall`
    - A partire dalla classe `Ball` vista a lezione
- Modificare il metodo `move`
    - Quando la pallina arriva ad uno dei 4 bordi...
    - Vira la direzione di 90°, in senso orario
    - Es. Arrivata al bordo destro, vira verso il basso

---

![](images/misc/bouncing-ball.jpg)
# 2.7 Rimbalzi con gravità

- Creare una classe `FallingBall`
    - A partire dalla classe `Ball` vista a lezione
- Nel metodo `move`, aggiungere l'effetto della gravità
    - Accelerazione: aggiungere un piccolo valore *costante* alla velocità verticale
    - `g = 0.4`
    - `dy += g`
    - Quando si tocca il fondo, cambiare il segno di `dy`
- Mostrare l'animazione di una pallina, con l'effetto della gravità

---

# 2.8 Palline colorate

- Aggiungere ai dati della pallina (es. 2.7) anche un colore
    - Generare una tupla `RGB` casuale, nell'inizializzatore
- Aggiungere un corrispondente metodo *getter* denominato `color`
    - Per ottenere dall'esterno il colore della pallina
    - Restituire il colore come una tupla (tripla RGB)
- Creare due palline e mostrarne graficamente il movimento
    - Per ogni frame, chiamare il metodo `move` di ogni pallina
    - Rappresentare un rettangolo o un cerchio colorato nella posizione aggiornata di ogni pallina

---

![](images/misc/xmas-tree.png)
# 2.9 Albero di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate al centro
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale
- Aggiungere in fondo una riga con un solo cerchio

---

# Esercitazione 3 (10-07)

---

![](images/misc/troll-key.png)
# 3.1 Percentuale di maiuscole

- Chiedere una riga di testo all'utente
- Mostrare la percentuale di lettere maiuscole presenti
- Implementare il calcolo in una funzione
    - Parametro: testo (`str`)
    - Risultato: percentuale (`float`)

>

Usare un ciclo `for` sulla stringa

---

![](images/repr/child-fingers.png)
# 3.2 Pallina con conteggio

- Partire dalla classe `TurningBall` dell'esercizio 2.6
- Effettuare gli spostamenti su una traiettoria quadrata
    - Virare la direzione in senso orario ogni `10` fotogrammi (p.es.), anzichè ai bordi del canvas

---

![](images/misc/bouncing-ball.jpg)
# 3.3 Lista di palline

- Partire dalla classe `FallingBall` dell'esercizio 2.8
- Anzichè una solo pallina, crearne diverse ed inserirle in una lista
- Rappresentare graficamente il movimento di tutte le palline
    - Per ogni frame, in un ciclo `for`, chiamare il metodo `move` di ogni pallina
    - Rappresentare un cerchio o un rettangolo colorato nella posizione aggiornata di ogni pallina

---

![](images/misc/weather.png)
# 3.4 Stazione meteorologica

- Scrivere classe per una stazione meteo, rappresentata così:
    - Nome della stazione
    - Lista dei dati di piovosità, inizialmente vuota
- Metodo per aggiungere un nuovo dato: giorno di misurazione (es.: `"2019-10-07"`) e millimetri di pioggia
- Metodo per ottenere la pioggia totale in mm. tra due date scelte (parametri)
- Nella parte principale del programma
    - Istanziare la stazione e chiedere tutti i dati di piovosità all'utente (valore negativo per terminare)
    - In un ciclo, chiedere poi all'utente due date e calcolare la pioggia totale in mm. in quel periodo

---

![](images/misc/histogram-rot.svg)
# 3.5 Istogramma con barre orizzontali

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce un valore negativo
- Su canvas `500×500`, disegnare un istogramma
    - Spazio verticale diviso equamente tra le barre
    - Dimensione orizzontale di una barra: proporzionale al valore corrispondente
    - La barra più estesa occupa tutto lo spazio orizzontale disponibile

---

![](images/misc/moon-patrol.png)
# 3.6 Moon Patrol, rover

- Ridenominare come `Rover` la classe `Turtle` dell'esempio `bounce`
- Aggiungere al rover la gravità (vedi es. 2.7)
- Consentire al rover di saltare, alla pressione di `ArrowUp`
    - Solo quando è poggiato sullo fondo del canvas...
    - O sul livello fisso del terreno (meglio!)

---

![](images/misc/moon-patrol.png)
# 3.7 Moon Patrol, sprite e sfondi

- Cambiare il file con le icone dei personaggi
- Animazioni del rover, opzionali
    - Per il rover, visualizzare icone diverse durante il salto ed i movimenti
    - Nel metodo `symbol`, utilizzare lo stato del personaggio per scegliere l'icona
- Sfondo e parallasse, opzionali
    - Ad ogni frame, spostare verso sinistra la posizione di disegno dello sfondo
    - Disegnare il terreno e due livelli di sfondo, con velocità diverse

>

Usare questi file:
<br>
<https://tomamic.github.io/images/sprites/moon-patrol.png>
<br>
<https://tomamic.github.io/images/sprites/moon-patrol-bg.png>

---

# Esercitazione 4 (10-14 *)

---

# 4.1 Funzioni per cilindro

- Definire una funzione per il calcolo del volume di un cilindro
    - Parametri: raggio e altezza (`float`)
    - Risultato: volume (`float`)
- Definire una funzione per il calcolo della superficie di un cilindro
    - Parametri: raggio e altezza (`float`)
    - Risultato: superficie (`float`)
- In una funzione `main`
    - Chiedere all'utente raggio e altezza di un cilindro
    - Chiamare le due funzioni e mostrare i risultati

---

![large](images/misc/solids.png)
# 4.2 Classe per cilindro

- Definire una classe dei cilindri
    - Parametri del costruttore: raggio e altezza (`float`)
    - Metodo che restituisce il volume
    - Metodo che restituisce la superficie
- In una funzione `main`
    - Chiedere all'utente raggio e altezza di un cilindro
    - Chiamare i due metodi e mostrare i risultati

---

# 4.3 Conteggio caratteri

- Definire una funzione
    - Parametri: due stringhe
    - Risultato: quanti caratteri della prima stringa sono presenti anche nella seconda?
- Esempio
    - Parametri: `"Ciao, Python!"`, `"aeiou"`
    - Risultato: `4`

---

# 4.4 Valori sopra e sotto la media

- Chiedere all'utente una sequenza di interi, terminata da 0
    - Il valore 0 non fa parte della sequenza
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore ad una lista inizialmente vuota, con `append`

---

# 4.5 Triangolo di lettere

- Leggere un numero intero positivo `n` (<=26)
- Per ciascun valore `y` tra 1 ed `n`...
- Stampare una riga con le ultime `y` lettere dell'alfabeto

``` text
z
zy
zyx
zyxw
```

---

![](images/fun/bike-lock.png)
# 4.6 Configurazioni di simboli

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

![](images/misc/moon-patrol.png)
# 4.7 Moon Patrol, buche

- Le buche vengono generate casualmente
- Possono essere di due dimensioni diverse
- Sono sempre sufficientemente separate tra loro
- Si spostano da destra a sinistra con velocità costante
- Se urta un buca, il rover cade e si distrugge

---

# Esercitazione 5 (10-21)

---

![](images/fun/matryoshka.png)
# 5.1 Stringhe rovesciate, con ricorsione

- Rovesciare una stringa, sfruttando la ricorsione
- Qualsiasi stringa di lunghezza `0` o `1` rimane uguale quando rovesciata
- Alrimenti, la stringa rovesciata è la concatenazione di:
    - Ultimo carattere della stringa originale
    - Risultato del rovesciamento della stringa originale, con l'esclusione dell'ultimo carattere

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](images/misc/troll-key.png)
# 5.2 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve in input una stringa di testo
    - Produce in output un testo analogo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
- Es. “`I want *this text* to be uppercase`” <br>
  → “`I want THIS TEXT to be uppercase`”
- Applicare la funzione ad ogni riga di un file di testo
- Generare un file di output con il testo modificato

---

![](images/fun/htree.png)
# 5.3 Albero di H

- Disegnare ricorsivamente un *H-Tree*
    - Dividere l'area iniziale in due parti uguali
    - Connettere con una linea i centri delle due aree
    - Ripetere il procedimento per ciascuna delle due aree
    - Alternare però la divisione delle aree in orizzontale e verticale
- Chiedere all'utente il livello di ricorsione desiderato

---

![](images/misc/dice.png)
# 5.4 Scrittura di risultati casuali

- Simulare `n` lanci di una terna di dadi
    - `n` scelto dall'utente
- Scrivere il risultato dei lanci in un file
    - In ogni riga, inserire i tre valori separati da spazio

---

![](images/misc/dice.png)
# 5.5 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 5.4
- Per ogni terna di valori letta, mostrare all'utente la loro somma
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 3 a 18
    - Somma dei tre dadi

>

Per conteggiare i vari risultati, usare una lista di (almeno) 16 valori

---

![](images/misc/moon-patrol.png)
# 5.6 Moon Patrol, rocce

- Le rocce vengono generate casualmente
- Possono essere di due dimensioni diverse
- Sono sempre sufficientemente separate tra loro
- Si spostano da destra a sinistra con velocità costante
- Se urta una roccia, il rover si distrugge

---

![](images/misc/moon-patrol.png)
# 5.7 Moon Patrol, proiettili

- Il rover, a comando, spara proiettili
- Ad ogni comando, viene sparato un proiettile verso destra ed uno verso l'alto
- Le rocce possono essere distrutte dai proiettili del rover
- Le rocce più grandi devono essere colpite due volte

---

# Esercitazione 6 (10-28)

---

# 6.1 Lunghezza media

- Leggere per intero un file
- Calcolare la lunghezza media delle parole, raggruppate in base alla loro prima lettera
- Ad esempio:
    - Le parole che iniziano con `a` hanno lunghezza media 4.6
    - Le parole che iniziano con `b` hanno lunghezza media 5.4 ...

``` py
import re
txt = txt.lower()  # make all lowercase
txt = re.sub(r"[^a-z]+", " ", txt)  # keep only letters
```

---

# 6.2 Valori in file CSV

- Leggere una matrice di interi da un file testuale CSV
    - *Comma Separated Values*: in ogni riga, valori separati da virgola
    - Usare una lista semplice di dimensione `rows×cols`
    - Num. righe del file; num. valori nella prima riga
- Riscrivere in un altro file tutti i valori della matrice
    - Raddoppiare però i valori sulla diagonale che parte dall'angolo in basso a destra (`cols - x == rows - y`)

``` text
5,7,2,11
1,3,12,9
4,6,10,8
```

>

Nell'esempio, i valori da raddoppiare in scrittura sono i seguenti: `8, 12, 7`

---

![](images/fun/bike-lock.png)
# 6.3 Configurazioni

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

![](images/misc/sample-file-system.png)
# 6.4 Profondità albero

- Partire dall'esempio del file system (es. 4.5 del 2014)
- Aggiungere a tutti i *nodi* un metodo `depth`, che riporta la profondità della struttura
- Astratto nella classe base
- Per un *documento*: 0
- Per una *cartella*: 1 + profondità massima dei sottonodi
- Rispetto alla struttura raffigurata a fianco
    - Calcolare la profondità della cartella radice (chiamare il metodo `depth`)

>

<https://github.com/tomamic/fondinfo/blob/master/examples/x4_tree_nodes.py>

---

![](images/misc/moon-patrol.png)
# 6.5 Moon Patrol, alieni

- Le navi aliene sono avversari che si muovono casualmente nel cielo
- Sparano priettili verso il basso, che possono distruggere il rover
- Alcuni proiettili alieni possono generare delle buche
- I proiettili del rover distruggono le navi aliene

---

![](images/misc/hitori.svg) ![](images/misc/hitori-completed.svg)
# 6.6 Hitori, regole

- Regole
    - Color cells so no number appears more than once in a row or column
    - The sides of black cells never touch
    - White cells form a continuous network
- Ad ogni mossa, l'utente può:
    - Annerire un numero, oppure
    - Cerchiarlo

>

<https://www.nikoli.co.jp/en/puzzles/hitori.html>
<br>
<http://www.menneske.no/hitori/eng/>

---

![](images/misc/hitori.svg)
# 6.7 Hitori, inizio

- Classe che incapsula lo stato del gioco in due matrici
    - Matrice con numeri iniziali (come da figura)
    - Matrice con annotazioni dell'utente: `CLEAR`, `BLACK`, `CIRCLE`
- Implementare l'interfaccia `BoardGame`
    - Metodo `play_at` per annerire una cella
    - Metodo `flag_at` per cerchiare una cella
    - Metodo `value_at` per conoscere il contenuto di una cella <br>
      (p.es., mostrare un `#` dopo i numeri anneriti, un `!` dopo i numeri cerchiati)

---

# Esercitazione 7 (11-04)

---

![](images/misc/moon-patrol.png)
# 7.1 Moon Patrol, test

- Creare degli *unit test* per il gioco Moon Patrol
    - Sono consigliati *test parametrizzati*
- Cercare di testare ciascun personaggio separatamente
    - Chiamare direttamente `move`, `collide` ecc., in varie situazioni
- Es. testare il rover simulando varie sequenze di comandi
    - Percorre la traiettoria prevista? (Non può saltare se non è a terra...)
    - Sceglie sempre il simbolo corretto?
    - Reagisce correttamente alle diverse collisioni?

---

![](images/misc/moon-patrol.png)
# 7.2 Moon Patrol, estensioni

- Estensioni *opzionali* del gioco
    - Secondo rover, per giocare in coppia, con l'uso di tasti diversi
    - Cannoni ed altri avversari sul percorso
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

# 7.3 Moon Patrol, gioco e GUI

- Classe `MoonPatrolGame`, per gestire il gioco *Moon Patrol*
    - Inizializzare i personaggi, prendendo i dati da un file di configurazione
    - Incapsulare personaggi ed arena
    - Controllare la conclusione della partita, positiva o negativa
    - Guardare l'esempio nei commenti in `bounce`
- Classe `MoonPatrolGui` per la rappresentazione del gioco
    - Disegno immagini e funzionalità legate a `g2d`
    - Metodi `tick` etc.
    - Prendere spunto da `BoardGameGui`

---

![](images/misc/hitori-completed.svg)
# 7.4 Hitori, righe e colonne

- Nell'inizializzazione, leggere la matrice di numeri da un file (*parametro*)
- Nel metodo `finished`, controllare ogni riga e colonna
    - Nessun valore ripetuto, tra quelli non anneriti
    - Celle annerite non adiacenti
- Trascurare per ora il controllo di contiguità tra tutte le celle bianche

---

# 7.5 Hitori, test

- Creare degli *unit test* per il gioco Hitori
- Verificare il gioco dopo varie chiamate a `play_at` e `flag_at`
    - Usare `value_at` per osservare lo stato
- Verificare il funzionamento di `finished` rispetto alle seguenti due regole
    - Nessun valore ripetuto, tra quelli non anneriti
    - Celle annerite non adiacenti
- Trascurare per ora il controllo di contiguità tra tutte le celle bianche

---

![](images/misc/hitori-completed.svg)
# 7.6 Hitori, GUI

- Utilizzare il gioco tramite la GUI fornita con gli esempi
- Opzionalmente, modificare la GUI per mostrare le celle annerite o cerchiate

---

![](images/misc/handwriting.jpg)
# 7.7 Progetti in bella copia

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

# Esercitazione 8 (11-11 *)

---

![](images/fun/matryoshka.png)
# 8.1 Potenze con ricorsione

- Calcolare la potenza intera di un numero, sfruttando la ricorsione
- Qualsiasi numero `x`, elevato a potenza `0`, dà come risultato `1`
- La potenza `n`-esima di un numero `x` si può calcolare come:
    - `xⁿ = x · xⁿ⁻¹`, per `n > 0`

>

IEEE definisce anche `0⁰ = 1`, anzichè indeterminato
<br>
Saranno accettate esclusivamente le soluzioni ricorsive

---

# 8.2 Cifre in ogni riga

- Leggere un file riga per riga
- Calcolare la percentuale di caratteri che rappresentano cifre in ogni riga
- Calcolare la percentuale di caratteri che rappresentano cifre in tutto il file
- Non considerare caratteri bianchi a inizio e fine riga (spazi, newline ecc.)

---

# 8.3 Matrice casuale

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempire la matrice con i numeri da `1` a `w*h`, in ordine
- Mescolare la matrice
    - In un ciclo, scambiare coppie di celle scelte a caso
- Salvare la matrice in un file di testo (*CSV*)
    - Ogni riga della matrice in una riga del file
    - Valori separati tra loro da una virgola

---

# 8.4 Matrice da file

- Leggere da file i dati salvati nell'esercizio 8.3
- Riempire una matrice con i dati letti
    - La matrice ha lo stesso numero di righe del file
    - Le colonne della matrice dipendono dal numero di dati letti nella prima riga
- In un ciclo
    - Chiedere un valore all'utente
    - Contare quante volte quel valore è presente nelle celle di bordo

---

# 8.5 Gioco dei dispari

- Creare una sottoclasse di `BoardGame`
- Nel costruttore
    - Riempire una matrice con i numeri da `1` a `w*h`, in ordine
    - Mescolare la matrice: in un ciclo, scambiare coppie di celle scelte a caso
- Nel metodo `play_at`
    - Segnare in memoria come “*marcate*” le celle scelte dall'utente
- Nel metodo `value_at`
    - Restituire il numero presente nella cella
    - Aggiungere “`!`” dopo il numero, se la cella è stata marcata dall'utente

---

# 8.6 Gioco dei dispari, conclusione

- Continuare l'esercizio 8.5
- Nel metodo `finished`
    - Controllare che l'utente abbia marcato tutte e sole le celle con valore dispari
- Utilizzare il gioco da terminale
- Utilizzare il gioco con la GUI degli esempi

---

![](images/misc/cindy1.png) ![](images/misc/cindy2.png)
# 8.7 Puzzle di Cindy

- Piano di gioco: `2n+1` celle allineate
    - Si parte con `n` pedine rosse tutte a sinistra, `n` pedine verdi tutte a destra, ed una cella libera in mezzo
    - Le pedine rosse si possono spostare solo a destra, quelle verdi solo a sinistra (senza poter tornare indietro)
- Ad ogni mossa, una qualsiasi pedina può:
    - Avanzare di una posizione, se davanti ha una cella libera
    - Oppure scavalcare esattamente una pedina dell'altro colore, se c'è una cella libera subito dopo
- L'applicazione deve trovare *automaticamente* le mosse per invertire la posizione di tutte le pedine

>

<http://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html>

---

# 8.8 Hitori, connessione

- Nel metodo `finished`
    - Verificare che le celle bianche siano tutte connesse
    - Celle bianche: quelle non annerite dall'utente
- *Suggerimento*
    - Creare una matrice booleana temporanea
    - Trovare la prima cella bianca e segnare a `True` la sua posizione nella matrice
    - Segnare anche le celle bianche ad essa adiacenti
    - Proseguire a segnare le celle adiacenti in maniera ricorsiva
    - Infine contare tutte le celle segnate

---

# Esercitazione 9 (11-18)

---

![](images/misc/handshake.svg)
# 9.1 Hello, user! (C++)

- Compilare ed eseguire il programma “`Hello world`”
- In una versione successiva del programma...
- Chiedere il nome all'utente e aggiungere tale nome al messaggio di saluto
- Se il nome dell'utente è “`admin`”, mostrare inoltre il messaggio speciale “`At your command`”

---

![large](images/misc/gold-price.svg)
# 9.2 Media dei dispari (C++)

- Leggere, attraverso un ciclo, una sequenza di numeri naturali
- La sequenza termina quando l'utente inserisce un valore negativo
- Calcolare il valore medio, considerando solo i valori dispari tra quelli inseriti

---

![](images/misc/thermometer.png)
# 9.3 Funzione, Fahrenheit (C++)

- Definire una funzione `cels_to_fahr`
    - Parametro: temperatura in gradi Celsius, in `float`
    - Risultato: temperatura in gradi Fahrenheit, in `float`
- Definire poi una funzione `main`
    - Chiedere all'utente la temperatura in gradi Celsius
    - Poi chiamare `cels_to_fahr` con questo parametro
    - Infine mostrare all'utente il risultato

>

Partire dalla formula `fahr = cels * 1.8 + 32`

---

# 9.4 Valori sopra e sotto la media (C++)

- Chiedere all'utente una sequenza di interi, terminata da 0
    - Il valore 0 non fa parte della sequenza
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore ad una lista inizialmente vuota, con `push_back`

---

![](images/misc/histogram-rot.svg)
# 9.5 Istogramma con barre orizzontali (C++)

- Chiedere all'utente una lista di valori positivi
    - La lista termina quando l'utente inserisce il valore `0`
- Mostrare un istogramma
    - Larghezza di ciascuna barra proporzionale al valore corrispondente
    - La barra più lunga occupa tutto lo spazio disponibile

---

# 9.6 Triangolo di lettere (C++)

- Leggere un numero intero positivo `n` (<=26)
- Per ciascun valore `y` tra 1 ed `n`...
- Stampare una riga con le ultime `y` lettere dell'alfabeto

``` text
z
zy
zyx
zyxw
```

---

# 9.7 Hitori, automatismi (Py)

- Metodo per cerchiare automaticamente i numeri attorno alle celle nere
- Metodo per annerire automaticamente le celle con un numero già cerchiato nella stessa riga o colonna

>

Con la GUI, attivare queste funzionalità alla pressione di qualche tasto specifico (`key_pressed`)

---

# Esercitazione 10 (11-25)

---

# 10.1 Funzioni per cilindro (C++)

- Definire una funzione per il calcolo del volume di un cilindro
    - Parametri: raggio e altezza (`float`)
    - Risultato: volume (`float`)
- Definire una funzione per il calcolo della superficie di un cilindro
    - Parametri: raggio e altezza (`float`)
    - Risultato: superficie (`float`)
- In una funzione `main`
    - Chiedere all'utente raggio e altezza di un cilindro
    - Chiamare le due funzioni e mostrare i risultati

>

Definire `PI = 3.14159`, oppure usare `acos(-1)`, dalla libreria `<cmath>`

---

![large](images/misc/solids.png)
# 10.2 Classe per cilindro (C++)

- Definire una classe dei cilindri
    - Parametri del costruttore: raggio e altezza (`float`)
    - Metodo che restituisce il volume
    - Metodo che restituisce la superficie
- In una funzione `main`
    - Chiedere all'utente raggio e altezza di un cilindro
    - Chiamare i due metodi e mostrare i risultati

---

# 10.3 Conteggio caratteri (C++)

- Definire una funzione
    - Parametri: due stringhe
    - Risultato: quanti caratteri della prima stringa sono presenti anche nella seconda?
- Esempio
    - Parametri: `"Ciao, Python!"`, `"aeiou"`
    - Risultato: `4`

>

Si può definire prima una funzione ausiliaria booleana `char_in_string`, per controllare se una stringa contiene un certo carattere

---

![](images/fun/bike-lock.png)
# 10.4 Configurazioni di simboli (C++)

- Scrivere una funzione per generare tutte le configurazioni di lunghezza 3
    - Parametri: `string` contenente l'insieme dei simboli validi (presenti su ogni ruota)
    - Risultato: `vector` di `string` (configurazioni)
- Possibile approccio: 3 cicli `for` annidati
- Per test, fornire in input le vocali `"AEIOU"`, per ottenere:
    - `["AAA", "AAE", "AAI", "AAO", "AAU", "AEA", "AEE", "AEI", "AEO", "AEU", "AIA", ...`

---

![](images/hist/eratostenes.jpg)
# 10.5 Crivello di Eratostene (C++)

- Trovare tutti i numeri primi fino ad `n`, scelto dall'utente
- Algoritmo
    - Inizializzare un `vector<bool>` con `n` valori `true`
    - Per ciascun numero `x` tra `2` ed `n` (ancora a `true` nella lista)...
    - Mettere a `false` i multipli di `x` (escluso `x` stesso)
    - Alla fine, gli elementi rimasti a `true` corrisponderanno ai numeri primi cercati

>

Usare un `vector<int>` è problematico ed inefficiente

---

![](images/misc/dead-end.jpg)
# 10.6 Hitori, vicolo cieco (Py)

- Metodo booleano `wrong`, senza parametri
- Controlla se una delle annotazioni inserite impedisce la soluzione del gioco
    - *Non si può risolvere il gioco senza rimuovere una annotazione*
    - Es. Due celle annerite contigue
    - Es. Due numeri cerchiati uguali e allineati
    - Es. Una regione bianca isolata
- Può restituire `False` anche se la partita non è finita
    - Non ci sono violazioni evidenti, dovute ai simboli già inseriti
    - Ci sono però delle celle ancora non marcate

---

![](images/misc/artificial-intelligence.png)
# 10.7 Hitori, suggerimenti (Py)

- Cercare automaticamente la prossima mossa
    - Senza backtracking, senza ricorsione
- *Provare* ad annerire una cella non annotata
    - Applicare gli automatismi dell'es. 9.7
    - Se le regole sono violate (`wrong`), cerchiare la cella
- *Provare* a cerchiare una cella non annotata
    - Applicare gli automatismi dell'es. 9.7
    - Se le regole sono violate (`wrong`), annerire la cella

>

Se invece una ipotesi non risulta `wrong`, non è detto che sia giusta; non si possono trarre conclusioni!

---

![](images/misc/artificial-intelligence.png)
# 10.8 Hitori, altri suggerimenti (Py)

- Considerare ogni cella non annotata, singolarmente
    - Senza backtracking, senza ricorsione
- *Provare ad annerirla*
    - Applicare gli automatismi dell'es. 9.7
- *Provare a cerchiarla*
    - Applicare gli automatismi dell'es. 9.7
- *Confrontare* tutte le annotazioni, aggiunte nei due casi
    - Se una qualsiasi cella è annerita in entrambe le ipotesi, annerirla nel gioco
    - Se una qualsiasi cella è cerchiata in entrambe le ipotesi, cerchiarla nel gioco

---

# Esercitazione 11 (12-02 *)

---

![large](images/misc/gold-price.svg)
# 11.1 Massimo e minimo (C++)

- Leggere, attraverso un ciclo, una sequenza di numeri interi positivi
- La sequenza termina quando l'utente inserisce il valore 0
- Visualizzare il valore massimo e quello minimo tra i numeri inseriti

>

Basta un ciclo, senza `vector`

---

![](images/misc/triangle-notations.svg)
# 11.2 Funzione, Erone (C++)

- Definire una funzione `heron` per il calcolo dell'area di un triangolo
    - Parametri: tre lati come `float`
    - Risultato: area come `float`
- Definire poi una funzione `main`
    - Chiedere all'utente tre valori
    - Poi chiamare `heron` con questi parametri
    - Infine mostrare all'utente il risultato

>

Formula di Erone: `area = √(s * (s - a) * (s - b) * (s - c))`
<br>
Con `s = (a + b + c) / 2`, semiperimetro
<br>
`sqrt` definita in libreria `<cmath>`
<br>
<http://en.wikipedia.org/wiki/Heron%27s_formula>

---

![](images/misc/ellipse.svg)
# 11.3 Ellisse (C++)

- Classe che modella un'ellisse
- Campi privati (parametri del costruttore)
    - Semiassi: `a, b`
- Metodi pubblici per ottenere...
    - Area: `π·a·b`
    - Distanza focale: `2·√|a² - b²|`
- Nel corpo principale del programma...
    - Creare un oggetto con dati forniti dall'utente
    - Visualizzare area e distanza focale dell'ellisse

>

Definire `PI = 3.14159`, oppure usare `acos(-1)`, dalla libreria `<cmath>`

---

# 11.4 Testo, lettere (C++)

- Leggere una riga di testo
- Contare quante lettere maiuscole ci sono in tutto
- Contare quante lettere minuscole ci sono in tutto

---

![](images/misc/dice.png)
# 11.5 Risultati casuali (C++)

- Simulare `n` lanci di una terna di dadi
    - `n` scelto dall'utente
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 3 a 18
    - Somma dei tre dadi

>

Per conteggiare i vari risultati, usare un `vector` di (almeno) 16 valori

---

![](images/fun/neighborhood4.png)
# 11.6 Funzione di smooth (C++)

- Scrivere una funzione `smooth`
    - Parametro: matrice iniziale, di `float`
    - Risultato: nuova matrice con *smooth*
- **Smooth**: per ogni cella in matrice iniziale
    - Il risultato è la *media* dell'intorno
    - 5 valori: cella stessa e 4 adiacenti
- Attenzione alle celle esterne
    - Sommare e contare solo i valori disponibili
    - 4 valori ai bordi, 3 valori agli angoli
- Verificare la funzione con alcune matrici di test

---

![](images/misc/artificial-intelligence.png)
# 11.7 Hitori, backtracking (Py)

``` py
def solve_recursive(self, i: int) -> bool:
    ## self.mark_auto()  # mark all obvious cells
    ## if self.wrong(): return False  # unsolvable
    # find first undecided cell, starting from i
    while i < len(self._annots) and self._annots[i] != CLEAR:
        i += 1
    if i < len(self._annots):
        saved = self._annots[:]  # save current status
        for a in (BLACK, CIRCLE):
            self._annots[i] = a
            if self.solve_recursive(i + 1):
                return True
            self._annots = saved  # backtracking
    return self.finished()
```

>

Suggerita l'implementazione di `mark_auto` (es. 9.7) e `wrong` (10.6)

---

# 11.8 Hitori, test soluzione (Py)

- Provare a risolvere con i soli *suggerimenti* singoli
    - [Easy 5×5](http://www.menneske.no/hitori/5x5/eng/solve.html?number=15266)
    - [Medium 6×6](http://www.menneske.no/hitori/6x6/eng/utskrift.html?number=16075)
    - [Hard 8×8](http://www.menneske.no/hitori/8x8/eng/solve.html?number=21330)
    - [Very hard 9×9](http://www.menneske.no/hitori/eng/solve.html?number=186838)
    - [Super hard 12×12](http://www.menneske.no/hitori/12x12/eng/solve.html?number=29512)
    - [Impossible 15×15](http://www.menneske.no/hitori/15x15/eng/solve.html?number=2564)
- Altrimenti, quando serve usare il *backtracking*
- Ricordarsi...
    - Inizializzare la partita da un *file* (parametro)
    - Preparare vari *unit test*, per le principali funzionalità
