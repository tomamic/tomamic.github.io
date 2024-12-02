![](https://fondinfo.github.io/images/dev/geek-girl.svg)
# Esercizi 2024
## Introduzione alla programmazione

---

# Esercitazione 1 (09-30)

---

![large](https://fondinfo.github.io/images/algo/holy-grail.jpg)
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
<br><br>
<https://www.youtube.com/watch?v=Xel0c6mpqPA>


---

![large](https://fondinfo.github.io/images/misc/three-circles.svg)
# 1.2 Raggi decrescenti

- Scrivere un programma Python basato su g2d
- Chiedere all'utente le misure di tre raggi
- Se i raggi sono forniti in ordine decrescente…
    - Disegnare tre cerchi concentrici, con i tre raggi dati
    - Tutti al centro di un canvas 500×500
    - Primo cerchio di colore magenta, secondo giallo, terzo ciano
- Altrimenti, mostrare un messaggio di errore

---

![large](https://fondinfo.github.io/images/misc/three-circles.svg)
# 1.3 Cerchi in loop

- Scrivere un programma Python basato su g2d
- Chiedere all'utente le misure di tre raggi
- Usare un ciclo for per…
    - Disegnare tre cerchi concentrici, con i tre raggi dati
    - Tutti al centro di un canvas 500×500
    - Per ogni cerchio, scegliere un colore casuale

---

![](https://fondinfo.github.io/images/misc/leap-centuries.svg)
# 1.4 Anni bisestili

- Chiedere all'utente di inserire un anno
- Dire se è bisestile oppure no
- Ripetere tutto ciclicamente, finchè l'utente non inserisce il valore `0`

>

Un anno è bisestile se il suo numero è divisibile per 4, con l'eccezione degli anni secolari (quelli divisibili per 100) che non sono divisibili per 400
<br>
<https://it.wikipedia.org/wiki/Anno_bisestile#Definizione>

---

![](https://fondinfo.github.io/images/misc/shadows.png)
# 1.5 Rettangoli con ombra

- Chiedere all'utente un numero `n`
- Disegnare `n` rettangoli
    - Ciascuno con posizione, dimensione e colore casuale
    - Ciascuno con un ombra grigia spostata a destra e in basso di 5 pixel

>

Fare in modo che i rettangoli e le ombre siano tutti all'interno nel canvas

---

![large](https://fondinfo.github.io/images/misc/center-target.svg)
# 1.6 Bersaglio al centro

- Disegnare vari cerchi casuali
    - Tutti con raggio 20
    - Posizione e colore casuali
    - Il numero di cerchi non è noto
- Il disegno termina quando…
    - L'ultimo cerchio disegnato contiene il centro del canvas
    - Distanza minore di 20 tra centro del canvas e centro del cerchio

---

# 1.7 Divisori

- Chiedere all'utente un numero `n`
- Mostrare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

---

![large](https://fondinfo.github.io/images/misc/random-walk.svg)
# 1.8 Passeggiata casuale

- Chiedere all'utente un numero `n` (`<50`)
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

![large](https://fondinfo.github.io/images/misc/random-walk.png)
# 1.9 Passeggiata a crocette

- Riprendere l'esercizio precedente
- Partire con `x` e `y` al centro di un canvas quadrato (p.es. `200×200`)
- Disegnare una piccola crocetta (`+`) in ogni punto della passeggiata
    - Due linee lunghe circa 6px, non testo
- La prima crocetta è nera
- Ogni crocetta successiva è un po' più chiara

---

# Esercitazione 2 (10-07)

---

![](https://fondinfo.github.io/images/misc/green-squares.svg)
# 2.1 Sequenza di quadrati

- Chiedere all'utente un numero `n`
- Su un canvas 500×500, disegnare `n` quadrati
    - Quadrati con lato decrescente
    - L'ultimo ha lato `500/n`
    - Tutti allineati in alto e a sinistra
- Far variare il colore dei quadrati
    - Dal nero del quadrato più grande
    - Fino al verde del quadrato più piccolo

>

Determinare automaticamente le variazioni migliori per lato e colore, prima di iniziare il ciclo

---

![](https://fondinfo.github.io/images/misc/triangle-notations.svg)
# 2.2 Funzione, Erone

- Definire una funzione `heron` per il calcolo dell'area di un triangolo
    - Parametri: tre lati come `float`
    - Risultato: area come `float`
    - Generare un ValueError in caso di lati errati
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

![](https://tomamic.github.io/images/oop/anim-right.png)
# 2.3 Svolta casuale

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

![](https://fondinfo.github.io/images/misc/characters.png)
# 2.4 Carattere Unicode

- Chiedere all'utente un numero
- Visualizzare il carattere Unicode corrispondente
- Ripetere le operazioni in un ciclo, finchè l'utente non inserisce il valore `0`

>

Usare la funzione `chr` per convertire un codice nel carattere corrispondente

---

# 2.5 Cerchi concentrici casuali

- Disegnare un cerchio di raggio 200 e colore casuale
- Disegnare dei cerchi concentrici, via via più piccoli
- Per ognuno, scegliere casualmente raggio e colore
- Fermarsi quando il raggio diventa più piccolo di 10

---

# 2.6 Tabella ASCII

- Visualizzare la tabella dei codici ASCII
- Un carattere per ogni riga
    - All'inizio della riga: il carattere
    - Di fianco: il codice ASCII
- Limitare l'intervallo tra 32 a 126 (due costanti)

>

Non c'è input dell'utente

---

# 2.7 Valori sopra e sotto la media

- Chiedere all'utente una sequenza in interi, terminata da 0
- Calcolare e mostrare il valore medio
- Elencare i valori sotto alla media
- Elencare i valori sopra (o uguali) alla media

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

![](https://fondinfo.github.io/images/repr/binary-tunnel.jpg)
# 2.8 Conteggio di 0 e 1

- Definire una funzione che conta separatamente il numero di cifre `0` e `1` presenti in un testo
    - Parametro: stringa di testo da elaborare
    - Risultato: tupla dei due valori conteggiati
- Invocarla da una funzione `main`
    - Elaborare diverse righe di testo fornite dall'utente
    - Terminare in caso di riga vuota
    - I/O con l'utente solo nella funzione `main`

>

Nella funzione, usare un ciclo `for` sulla stringa

---

![](https://fondinfo.github.io/images/misc/green-squares.svg) Ribaltare in orizzontale ⇄
# 2.9 Quadrati allineati a destra

- Ripetere l'esercizio 2.1, però…
- Allineare i quadrati in alto e a destra (anzichè sinistra)
- Lasciare attorno al disegno un margine bianco di 10 pixel
    - Da ogni bordo del canvas

---

# Esercitazione 3 (10-14)

---

![](https://fondinfo.github.io/images/games/anim-wrap.svg)
# 3.1 Pallina modificata

- Partire dalla classe `Ball` vista a lezione
    - https://fondinfo.github.io/play/?c06_ball.py
- Inizializzazione
    - Posizione iniziale sempre al centro del canvas
    - Spostamento orizzontale casuale: 4 oppure -4
    - Spostamento verticale casuale: 4 oppure -4
- Modificare il metodo `move`
    - Quando la pallina arriva a uno dei 4 bordi...
    - Ricompare dal bordo opposto

---

![](https://fondinfo.github.io/images/misc/solids.png)
# 3.2 Parallelepipedo

- Classe che modella un parallelepipedo
    - Campi privati per *largezza*, *altezza* e *profondità*
    - Metodo per calcolare la superficie
    - Metodo per calcolare il volume
- Nel corpo principale del programma, creare e usare un parallelepipedo
    - Chiedere all'utente le dimensioni del parallelepipedo
    - Passare queste dimensioni al costruttore, come parametri
    - Mostrare superficie e volume del parallelepipedo creato

---

# 3.3 Tabella delle distanze

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

![](https://fondinfo.github.io/images/misc/slope.svg)
# 3.4 Pendenza di una retta

- Definire una funzione `slope`
    - Parametri: due punti sul piano (due tuple)
    - Risultato: pendenza della retta passante
    - `ValueErrore`, se punti allineati verticalmente
- Definire una funzione `main`
    - Acquisire due punti dall'utente
    - Mostrare all'utente il risultato di `slope`
    - Offrire all'utente la scelta di continuare a elaborare altri punti, oppure terminare il programma

---

# 3.5 Media e varianza

- Chiedere all'utente una sequenza di interi, terminata da 0
- Calcolare e mostrare il valore medio $\mu$
- Scorrere poi la sequenza e calcolare la varianza

$$\operatorname{Var}(X) = \frac{1}{n} \sum_{i=1}^n (x_i - \mu)^2$$

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

# 3.6 Modello lineare a due variabili

- Creare una classe delle curve lineari a due variabili: $x, y$
    - $z = a·x + b·y + c$
    - Coefficienti $a, b, c$ come campi, da inizializzare nel costruttore
- Metodo `estimate`
    - Parametri: $x, y$
    - Risultato: valore della funzione in $x, y$
- Nella funzione `main`
    - Istanziare un singolo modello lineare con coefficienti forniti dall'utente
    - Calcolare la funzione in diversi punti $x, y$ forniti iterativamente dall'utente
    - Terminare il ciclo quando l'utente fornisce una stringa vuota (per $x$, o $y$)

---

![](https://fondinfo.github.io/images/misc/xmas-triangle.svg)
# 3.7 Triangolo di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate a sinistra
- La prima riga contiene un solo cerchio
- Ogni riga successiva contiene un cerchio in più
- Ogni cerchio ha un colore casuale

---

![](https://fondinfo.github.io/images/misc/xmas-tree.svg)
# 3.8 Albero di cerchi colorati

- Chiedere all'utente un numero `n`
- Generare `n` righe di cerchi, allineate al centro
- Il numero di riga corrisponde al numero di cerchi da disegnare
- Ogni cerchio ha un colore casuale
- Aggiungere in fondo una riga con un solo cerchio

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 3.9 Bomberman: Ballom [P1]

- Creare una classe `Ballom`
    - A partire dalla classe `Ball` vista a lezione
    - Posizione iniziale arrotondata nel costruttore a multipli di 16
    - Direzione iniziale casuale: alto, basso, destra, o sinistra
    - Spostamenti di 4px per ogni frame
- Nel metodo `move`, aggiungere un cambio di direzione casuale
    - Nuova direzione: alto, basso, destra, o sinistra
    - Solo quando `x` e `y` sono entrambe multiple di 16
- Ritagliare una immagine da questa griglia di sprite
    - <https://fondinfo.github.io/sprites/bomberman.png>

>

<https://archive.org/details/chenall_dyna>
<br>
<https://www.retrogames.cz/play_085-NES.php>
<br>
<https://bomberman.fandom.com/wiki/Ballom>

---

# Esercitazione 4 (10-21 *)

---

$$ax^2 + bx + c = 0$$ $$x_{12} = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$
# 4.1 Equazione di secondo grado

- Definire una funzione `solve_quadratic`
    - Per risolvere una equazione di secondo grado
    - Parametri: i tre coefficienti `a, b, c`
    - Risultato: la coppia di soluzioni
    - Se *discriminante* (sotto radice) negativo, generare un `ValueError`
- Richiamare `solve_quadratic` da un'altra funzione, `main`
    - Chiedere all'utente i tre coefficienti
    - Visualizzare le due soluzioni
    - Ripetere in ciclo, finchè non viene inserita una riga vuota per il primo coefficiente

---

# 4.2 Modello esponenziale

- Creare una classe delle curve esponenziali
    - $y = a\cdot e^{b x} + c$
    - Coefficienti $a, b, c$ come campi, da inizializzare nel costruttore
- Metodo `estimate`
    - Parametro: $x$
    - Risultato: valore della funzione in $x$
- Nella funzione `main`
    - Istanziare un *singolo* modello esponenziale con coefficienti forniti dall'utente
    - Valutare il modello, chiamando `estimate`, in diversi punti $x$ forniti iterativamente dall'utente
    - Terminare il ciclo quando l'utente fornisce una stringa vuota

```
from math import e, exp
```

---

![](https://fondinfo.github.io/images/misc/circle-grid.svg)
# 4.3 Griglia di cerchi

- Su canvas 500×500, disegnare griglia `n×n` di cerchi
    - `n` scelto dall'utente
    - I cerchi sono tra loro adiacenti
    - Possibilmente, lasciare un margine di 5 pixel al bordo del canvas
- Il colore dei cerchi varia linearmente
    - In ogni riga: componente rossa nulla nel primo cerchio, satura nell'ultimo
    - In ogni colonna: componente verde nulla nel primo cerchio, satura nell'ultimo

---

# 4.4 Valori normalizzati

- Chiedere all'utente una sequenza di numeri, terminata da 0
- Calcolare e mostrare i valori minimo e massimo
- Per ogni valore $v$ nella sequenza…
    - Mostrare il corrispondente valore normalizzato
    - $v_{norm} = \frac{v - v_{min}}{v_{max} - v_{min}}$ <br> $v_{norm} \in [0, 1]$

>

Aggiungere ciascun valore a una lista inizialmente vuota, con `append`

---

# 4.5 Indice progressivo

- Chiedere all'utente `w` e `h`, interi
- Per ogni valore di `x` tra `0` e `w-1`
- Per ogni valore di `y` tra `0` e `h-1`
- Calcolare il seguente indice progressivo: $i = x \cdot h + y$
- Mostrare sulla console testuale i risultati in forma di tabella
- Per esempio, con `w=4` e `h=3`

``` txt
0   3   6   9
1   4   7   10
2   5   8   11
```

---

![](https://fondinfo.github.io/images/games/anim-gravity.svg)
# 4.6 Pallina con gravità

- Aggiungere l'effetto della gravità alla classe `Ball`
    - Primo esempio a lezione, *senza* `Actor` e `Arena`
    - Accelerazione costante verso il basso
- Diversi effetti ai bordi
    - Bordo in alto: continua oltre, indisturbata
    - Bordo in basso: rimbalza in verticale
    - Bordi laterali: riappare dal bordo opposto
- Mostrare l'animazione di una *lista* di palline
    - Ciascuna raffigurata con una immagine o un rettangolo in movimento

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 4.7 Bomberman: tastiera [P1]

- Ridenominare come `Bomberman` la classe `Turtle` dell'esempio `bounce`
- Movimento solo in orizzontale o verticale
    - Non in diagonale
- Cambio di direzione solo in posizioni multiple di 16
- Ritagliare una immagine da questa griglia di sprite
    - <https://fondinfo.github.io/sprites/bomberman.png>

>

Il progetto si può sviluppare da soli o in coppia, ma non in gruppi più numerosi di due

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 4.8 Bomberman: sprite [P1]

- Ritagliare immagini diverse per Bomberman
    - Per le diverse direzioni
- Durante il movimento, alternare le immagini
    - Per ottenere l'effetto della camminata

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 4.9 Bomberman: Ballom [P1]

- Riprendere la classe `Ballom` già realizzata
- Renderla sottoclasse di `Actor`
- Aggiungerla all'arena di gioco, assieme a Bomberman
- Non è ancora richiesto di gestire le collisioni

---

# Esercitazione 5 (10-28)

---

![](https://fondinfo.github.io/images/misc/clamp.svg)
# 5.1 Clamp su lista

- Definire una funzione con due parametri
    - Una lista di `float`
    - Un limite superiore fissato, come `float`
    - Senza risultato esplicito: lista modificata *in place*
- Per ciascun valore nella lista
    - Se il valore supera il limite…
    - Esso viene troncato, cioè sostituito con il limite stesso
- Per esempio. con limite fissato a 3
    - `[2, 3, 5, 1, 4]` → `[2, 3, 3, 1, 3]`

---

# 5.2 Lista di cifre

- Definire una funzione `digits`
    - Parametro: numero intero positivo
    - Risultato: lista di `int`
    - Cifre che compongono il numero, dalle unità in su
- Divedere il numero ripetutamente per 10
    - Ad ogni passaggio, la cifra è il resto della divisione
    - *Non* usare la rappresentazione come `str`!
    - Es. `6543 → [3, 4, 5, 6]`
- Chiamare la funzione da `main`
    - Chiedere dei numeri all'utente, fino a riga vuota
    - Di volta in volta, mostrare la lista risultante

---

![](https://fondinfo.github.io/images/misc/solar-system.png)
# 5.3 Classe dei pianeti

- Oggetto che ruota attorno a un centro di rotazione
- Campi per la posizione, in coordinate polari
- Campi per *velocità angolare*, *centro di rotazione*, *colore*
- Metodo `move` per fare un passo
- Metodo `pos` per conoscere la posizione `(x, y)`
- Metodo `color` per conoscere il colore `(r, g, b)`
- Mostrare l'animazione di una lista di oggetti attorno al centro del canvas

>

Senza `Actor` e senza `Arena`

---

![](https://raw.githubusercontent.com/fondinfo/fondinfo/master/sprites.png)
# 5.4 Tartaruga con gravità

- Modificare l'esempio `bounce`
- Aggiungere l'effetto della gravità alla classe `Turtle`
    - Accelerazione costante verso il basso
- La tartaruga si blocca sul bordo inferiore
    - Senza rimbalzare
- La tartaruga comincia un salto alla pressione di `ArrowUp`
    - Solo se è poggiata sul fondo

---

# 5.5 Lettere iniziali uguali

- Scrivere una funzione `len_common_prefix`
    - Parametri: due stringhe da confrontare
    - Risultato: numero di lettere iniziali uguali tra le due stringhe
- Scrivere una funzione `main`
    - Chiedere all'utente due stringhe di testo
    - Invocare `len_common_prefix` sulle due stringhe
    - Mostrare all'utente il risultato
- Es. `“carta”` vs. `“carota”` → 3 (`“car”`)

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 5.6 Bomberman: muri [P1]

- Muri immobili e indistruttibili
- Muri di mattoni, possono essere distrutti dalle esplosioni
- Bomberman e Ballom non possono passarci

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 5.7 Bomberman: bomba [P1]

- Bomberman può depositare una bomba
- Normalmente, una sola bomba per volta
    - Non più di una bomba nell'arena, nello stesso momento
- La bomba resta in gioco per circa 100 frame
    - Poi esplode

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 5.8 Bomberman: fuoco [P1]

- Fuoco dopo l'esplosione della bomba
- Occupa la cella della bomba e le 4 adiacenti, a croce
    - Ma solo se non contengono un muro
- Il fuoco uccide i personaggi
- Il fuoco distrugge i muri di mattoni che investe

---

# Esercitazione 6 (11-04)

---

# 6.1 Verifica di cifre

- Ottenere la lista di cifre di un numero dalla funzione `digits` (es. 5.2)
- Verificare la correttezza del risultato
    - Ciclo sulla lista
    - Moltiplicare ogni cifra per la corrispondente potenza di 10

$$6543 \to [3, 4, 5, 6]$$
$$[3, 4, 5, 6] \to 3 \cdot 10^0 + 4 \cdot 10^1 + 5 \cdot 10^2 + 6 \cdot 10^3$$

---

![](https://fondinfo.github.io/images/misc/troll-key.png)
# 6.2 Maiuscole tra asterischi

- Scrivere una funzione che:
    - Riceve in input una stringa di testo
    - Produce in output la stesso testo, ma...
    - Trasforma in maiuscolo tutto il testo compreso tra asterischi
    - In assenza di asterisco di chiusura → maiuscolo fino alla fine del testo
- Es. “I want \*this text\* to be uppercase”
    - → “I want THIS TEXT to be uppercase”
- Da una funzione `main`, applicare la funzione su una stringa inserita dall'utente

>

Segnare in un `bool` se si è incontrato un asterisco iniziale, ma non ancora un asterisco finale

---

![](https://fondinfo.github.io/images/misc/weather.png)
# 6.3 Dati di piovosità

- Memorizzare dei dati di piovosità forniti dall'utente
    - Piovosità negativa, per terminare l'inserimento
- Ciascun dato è una coppia `(str, int)`
    - Giorno di misurazione (es.: `"2019-10-07"`)
    - Millimetri di pioggia
- I dati possono essere forniti dall'utente fuori sequenza
    - Ma devono essere memorizzati in ordine di data
    - Inserire ogni dato nella posizione giusta
- Visualizzare infine la lista completa e ordinata

>

Usare `insert`; evitare algoritmi per il *sort*

---

# 6.4 Matrice casuale

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempire la matrice di numeri interi casuali, compresi tra 0 e 15
- Indicare quali righe e quali colonne contengono qualche ripetizione di uno stesso numero
- Es.: ripetizioni in riga 0, in riga 2, in colonna 1

``` txt
 0,  3, 14,  6,  3
 2,  4,  5,  3,  0
10,  4, 11,  7,  4
```

---

# 6.5 Gioco dei numeri in ciclo

- Creare una sottoclasse di `BoardGame`
    - Dimensioni `w` e `h` come parametri del costruttore
    - Calcolare `n` come massimo tra `w` e `h`
    - Valore iniziale 0 per tutte le celle
- Mossa dell'utente su una cella (*click*):
    - Incrementa il numero presente
    - Se il numero supera `n`, torna a 0
- Rappresentazione delle celle:
    - Mostrare i numeri ≠ 0
    - Non mostrare lo 0, sostituirlo con stringa vuota `""`
- Conclusione se nessuna cella è a 0

---

# 6.6 Gioco delle ripetizioni

- Riprendere l'esercizio 6.5
- Nuove regole per la vittoria
    - Nessuna cella è a 0
    - Nessuna riga contiene ripetizioni di uno stesso numero
    - Nessuna colonna contiene ripetizioni di uno stesso numero

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 6.7 Bomberman, estensioni [P1]

- Estensioni *opzionali* del gioco
    - Secondo bombarman, per giocare in due, con l'uso di tasti diversi
    - Bonus per ampliare la portata delle esplosioni
    - Bonus per incrementare il numero di bombe contemporanee
    - Altri avversari sul percorso
    - Punteggio, livelli, bonus ed estensioni *a fantasia*

---

![](https://fondinfo.github.io/images/games/bomberman.png)
# 6.8 Bomberman, gioco e GUI [P1]

- Classe `BombermanGame`, per gestire il gioco *Bomberman*
    - Inizializzare i personaggi, prendendo i dati da un file di configurazione
    - Incapsulare personaggi e arena
    - Controllare la conclusione della partita, positiva o negativa
- Classe `BombermanGui` per la rappresentazione del gioco
    - Disegno immagini e funzionalità legate a `g2d`
    - Metodi `tick` etc.
- Prendere spunto (…) da `BounceGame` e `BounceGui`
    - <https://fondinfo.github.io/play/?c07_bouncegame.py>

---

# Esercitazione 7 (11-11)

---

# 7.1 Valori fuori limite

- Definire una funzione *ricorsiva* `out_of_range`, con due parametri
    - Una lista di valori `float`
    - Un limite superiore fissato, come `float`
    - Risultato booleano: ∃ valore che supera limite?

## 💡 Idea

- Lista vuota → No
- Altrimenti, separare la lista in due parti
    - *Head* : primo elemento
    - *Tail* : tutti gli altri elementi
- Il primo elemento (*head*) supera il limite?
- Nel resto della lista (*tail*), ∃ valore che supera limite?

>

Sono accettabili solo soluzioni ricorsive

---

![](https://fondinfo.github.io/images/misc/dice.png)
# 7.2 Scrittura di risultati casuali

- Simulare `n` lanci di una coppia di dadi
    - `n` scelto dall'utente
    - Due valori casuali, tra 1 e 6
- Scrivere il risultato dei lanci in un file
    - In ogni riga, inserire i due valori separati da spazio

---

![](https://fondinfo.github.io/images/misc/dice.png)
# 7.3 Analisi di risultati casuali

- Leggere i dati dal file generato nell'esercizio 7.2
- Per ogni coppia di valori letta, mostrare all'utente la loro somma
- Contare quante volte, in tutto, si presenta ciascun risultato
    - Risultati possibili: da 2 a 12
    - Somma dei due numeri

>

Per conteggiare i vari risultati, usare una lista di contatori interi (lista di dimensione prefissata)

---

![](https://fondinfo.github.io/images/fun/htree.svg)
# 7.4 Albero di H

- Disegnare ricorsivamente un *H-Tree*
- Partire da un rettangolo assegnato
- Se è più piccolo di 5 pixel: niente
- Altrimenti, dividerlo in 4 parti uguali
    - Collegare i centri delle due parti a destra
    - Collegare i centri delle due parti a sinistra
    - Collegare i punti medi dei due segmenti
- Ripetere *ricorsivamente* su ciascuna delle quattro parti

---

![](https://fondinfo.github.io/images/oop/personal-data.png)
# 7.5 Classe delle persone

- Definire una classe delle persone
- Campo privato per *nome*
- Campi privati per *data di nascita*
- Metodo booleano
    - Parametri: data da verificare, fornita come tripla (anno, mese, giorno)
    - Risultato: la persona risulta maggiorenne, in quella data?
      <br>(Verificare che sia passato il compleanno)
- Procedura `main`
    - Istanziare un singolo oggetto con dati forniti dall'utente
    - Chiedere all'utente diverse date
    - Per ciascuna data, comunicare se la persona risulta maggiorenne

---

![](https://fondinfo.github.io/images/misc/hitori.svg) ![](https://fondinfo.github.io/images/misc/hitori-completed.svg)
# 7.6 Hitori, regole [P2]

- A ogni mossa, l'utente può:
    - Annerire qualsiasi numero, oppure…
    - Cerchiare qualsiasi numero
- Regole per la vittoria
    - Nessun numero appare più di una volta in una riga o colonna
    - I lati delle celle nere non si toccano mai
    - Le celle bianche sono tutte collegate tra di loro

>

<https://www.nikoli.co.jp/en/puzzles/hitori.html>
<br>
<http://www.menneske.no/hitori/eng/>

---

![](https://fondinfo.github.io/images/misc/hitori.svg)
# 7.7 Hitori, inizio [P2]

- Classe che incapsula lo stato del gioco in due matrici
    - Matrice con numeri iniziali (come da figura)
    - Matrice con annotazioni dell'utente: `CLEAR`, `CIRCLE`, `BLACK`
- Implementare l'interfaccia `BoardGame`
    - Metodo `play` per cerchiare, annerire, o ripulire una cella (a rotazione)
    - Metodo `read` per conoscere il contenuto di una cella <br>
      (p.es., aggiungere `#` dopo i numeri anneriti, `!` dopo i numeri cerchiati)
    - Metodo `finished` per ora sempre `False`

---

![](https://fondinfo.github.io/images/misc/hitori-completed.svg)
# 7.8 Hitori, righe e colonne

- Nel metodo `finished`, controllare ogni riga e colonna
    - Nessun valore ripetuto, tra quelli non anneriti
    - Celle annerite non adiacenti
    - Trascurare per ora il controllo di contiguità tra tutte le celle bianche
- Usare la *GUI* fornita con gli esempi
    - Opzionalmente, modificare la GUI <br> per mostrare le celle annerite o cerchiate

---

# Esercitazione 8 (11-18)

---

![](https://fondinfo.github.io/images/fun/matryoshka.png)
# 8.1 Somma ricorsiva di cifre

- Definire una funzione ricorsiva `sum_digits`
    - Riceve come parametro un numero naturale `n`
    - Se `n` è minore di 10, `n` è il risultato
    - Altrimenti, calcola la somma `s` delle cifre di `n`… <br> e opera ricorsivamente sulle cifre di `s`
- Esempi
    - *f(41)=4+1=5*
    - *f(327)=f(12)=f(3)=3*
    - Infatti, *3+2+7=12* e *1+2=3*

---

# 8.2 Matrice mescolata

- Chiedere all'utente le dimensioni `w, h` di una matrice
- Riempire la matrice con i numeri da `1` a `w*h`, in ordine
- Mescolare la matrice
    - Scambiare di posizione coppie di valori scelti a caso
- Salvare la matrice in un file di testo (*CSV*)
    - Ogni riga della matrice in una riga del file
    - Valori separati tra loro da una virgola

---

# 8.3 Colonne normalizzate

- Leggere da file una matrice di numeri
    - Per es. la matrice salvata nell'es. 8.2
- Per ogni colonna della matrice
    - Stampare il valore massimo
    - Stampare il valore minimo
- Riscrivere inoltre la matrice in un secondo file
    - Ma con valori normalizzati in ogni colonna (vedi es. 4.4)
    - $v_{norm} = \frac{v - v_{min}}{v_{max} - v_{min}}$ <br> $v_{norm} \in [0, 1]$

---

# 8.4 Test somma di cifre

- Scrivere uno *unit test*
    - Creare una sottoclasse di `unittest.TestCase`
- Testare la funzione `sum_digits` (es. 8.1)
- Verificare le seguenti associazioni input/output
    - $4$ → $4$
    - $45$ → $9$
    - $86$ → $5$
    - $686$ → $2$
    - $9686$ → $2$
    - $97689$ → $3$

---

![](https://fondinfo.github.io/images/fun/circlex4.png) ![](https://fondinfo.github.io/images/fun/circlex4.svg)
# 8.5 Cerchi speciali

- Funzione che disegna un *cerchio speciale*
    - Parametri: centro, raggio ($r$) e colore
- Disegna un cerchio sul canvas, in base ai parametri
- Inoltre, se $r > 5$…
    - Sceglie un colore casuale
    - Disegna quattro *cerchi speciali* più piccoli
    - Tutti interni e tangenti al cerchio di raggio $r$
    - Due spostati a destra e sinistra <br> raggio = ½ $r$ ; spostamento ↔ di ½ $r$
    - Due spostati in alto e in basso <br> raggio = ⅓ $r$ ; spostamento ↕ di ⅔ $r$

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/fun/circlex4pal.png)
# 8.6 Livello di ricorsione

- Riprendere la funzione di disegno dell'esercizio 8.5
- Aggiungere alla funzione un parametro `level` intero
    - Per decidere il livello massimo di ricorsione
    - Valore decrescente nei livelli più annidati
- In questo caso, scegliere il colore da una *palette*
    - Palette: lista di tuple RGB (casuali)
    - Palette creata all'avvio dell'applicazione
    - Selezione da palette in base a `level`

---

# 8.7 Bomberman, test [P1]

- Creare degli *unit test* per il gioco Bomberman
    - Sono consigliati *test parametrizzati*
- Cercare di testare ciascun personaggio separatamente
    - Chiamare direttamente `move`, `pos` ecc., in varie situazioni
- Es. Testare il protagonista simulando varie sequenze di comandi
    - Percorre la traiettoria prevista? (Svolta solo in posizione multiple di 16…)
    - Sceglie sempre lo sprite corretto?
    - Reagisce correttamente alle diverse collisioni?

---

# 8.8 Hitori, connessione [P2]

- Nell'inizializzazione, leggere la matrice di numeri da un file (*parametro*)
- Nel metodo `finished`
    - Verificare che le celle bianche siano tutte connesse
    - Celle bianche: quelle non annerite dall'utente
- *Suggerimento*
    - Creare una matrice booleana temporanea
    - Trovare la prima cella bianca e segnare a `True` la sua posizione nella matrice
    - Segnare anche le celle bianche a essa adiacenti
    - Proseguire a segnare le celle adiacenti in maniera *ricorsiva*
    - Infine contare tutte le celle segnate

---

![](https://fondinfo.github.io/images/misc/handwriting.jpg)
# 8.9 Progetti in bella copia

- **Codice leggibile**
    - *Costanti*, anzichè numeri “*magici*” sparsi nel codice
    - *Nomi esplicativi* e semplici
    - *Regole di stile* : `variable_name`, `function_name`, `ClassName`, `CONSTANT_NAME`
    - *Commenti*, quando utili: *function annotation*, *docstring*
- **Codice ben organizzato**
    - *No copia&incolla* del codice: funzioni parametrizzate e/o cicli
    - *Programmazione strutturata* : cicli senza `break`
    - *OOP* : *incapsulamento*, *composizione*, *polimorfismo*

---

# Esercitazione 9 (11-25)

---

![](https://fondinfo.github.io/images/fun/matryoshka.png)
# 9.1 Potenze con ricorsione

- Calcolare la potenza intera di un numero, sfruttando la ricorsione
- Qualsiasi numero $x$, elevato a potenza $0$, dà come risultato $1$
    - (Per IEEE anche $0^0 = 1$, anzichè indeterminato)
- La potenza $n$-esima di un numero $x$ si può calcolare come:
    - $x^n = x \cdot x^{n-1}$, per $n > 0$

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/repr/file-system.svg)
# 9.2 Documento più grande

- Partire dall'esempio di cartelle e documenti
- Aggiungere metodo `largest` ai *nodi*
    - Risultato: tupla `(size, relative_path)` del doc più grande nei sottonodi
- Astratto nella classe base
- Per un *documento*: dimensione del suo contenuto, suo nome
- Per una *cartella*: risultato maggiore, tra i sottonodi
    - Inserisce il suo nome davanti al path
- Rispetto alla struttura raffigurata a fianco
    - Cercare il `largest` a partire dalla cartella radice

>

Strutture gerarchiche, ma il file system non c'entra

---

![](https://fondinfo.github.io/images/misc/sierpinski-rgb.svg)
# 9.3 Quadratini in RGB

- Scrivere una funzione ricorsiva di disegno
    - Parametri: `x`, `y`, `s` (posizione e lato)
- Nel quadrato, identificare 3 quadratini di lato `s/2` disposti a triangolo: due adiacenti e il terzo sopra
- Se i quadratini sono abbastanza piccoli (p.es. `<= 16`)
    - → Colorarli rispettivamente in rosso, verde e blu (senza ricorsione)
- Altrimenti: *ricorsione*
    - Non disegnare niente (si disegna solo all'ultimo livello della ricorsione)
    - Ripetere la suddivisione per ciascuno dei tre quadratini

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](https://fondinfo.github.io/images/comp/list-tree.svg)
# 9.4 Somma in liste annidate

- Definire una funzione *ricorsiva* `sum_nested`
    - Parametro: un numero, o liste annidate contenenti numeri (`T = float | list["T"]`)
    - Risultato `float`: somma di tutti i numeri nella collezione
- Somma ricorsiva
    - Un numero semplice costituisce già il risultato
    - In una lista, si sommano ricorsivamente tutti gli elementi
- Esempi
    - `[[1, 2, [3, 4], [5]], 6] → 21`
    - `[1, [3, [8, 9], 7, 2], [], [4], 5] → 39`

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 9.5 Maiuscole in ogni riga

- Leggere il file `license.txt` riga per riga
- Non considerare caratteri bianchi a inizio e fine riga (spazi, newline ecc.)
- Per ciascuna riga, calcolare la percentuale di maiuscole rispetto a tutti i caratteri della riga
- Calcolare la percentuale di maiuscole rispetto a tutti i caratteri del file

---

![](https://fondinfo.github.io/images/fun/sin-cos.png) ![](https://fondinfo.github.io/images/misc/interpolation.svg)
# 9.6 Classe FastSin

- Definire una classe `FastSin`
    - All'inizializzazione, precalcola il valore della funzione `sin` tra 0 e 359°
    - Lista di 360 valori precalcolati
- Metodo `eval` con parametro `x` (`float`)
    - Restituisce una approssimazione del `sin`, recuperandolo dalla lista
- *Opzionalmente*, interpolare tra i due valori più vicini
    - Ricavare la retta tra i due punti più vicini ad `x` disponibili, calcolare in `x`
    - <https://en.wikipedia.org/wiki/Linear_interpolation>

``` py
from math import floor, ceil, round, sin, radians
```

---

# 9.7 Hitori, automatismi [P2]

- Tasto destro (o long press) su una cella nera
    - Cerchiare automaticamente i numeri attorno
- Tasto destro su un numero cerchiato
    - Annerire automaticamente le celle nella stessa riga o colonna con lo stesso numero
- Inoltre, alla pressione del tasto `h`
    - Attivare gli automatismi precedenti, ovunque possibile

---

![](https://fondinfo.github.io/images/misc/dead-end.jpg)
# 9.8 Hitori, vicolo cieco [P2]

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

# 9.9 Hitori, test [P2]

- Creare degli *unit test* per il gioco Hitori
- Verificare il gioco dopo varie chiamate a `play`
    - Usare `read` per osservare lo stato
- Verificare il funzionamento di `finished` rispetto alle regole
    - Nessun valore ripetuto, tra quelli non anneriti
    - Celle annerite non adiacenti
    - Contiguità tra tutte le celle bianche

---

# Esercitazione 10 (12-02 *)

---

![](https://fondinfo.github.io/images/fun/matryoshka.png)
# 10.1 Prodotto con ricorsione

- Definire una funzione *ricorsiva* `multiply_all`
    - Parametro: lista di numeri
    - Risultato: *prodotto* di tutti i numeri nella lista
- Definire una funzione `main`
    - Chiamare la funzione `multiply_all` con una lista generata casualmente
    - Mostrare all'utente la lista e il risultato <br><br>

## 💡 Idea

- Se la lista è vuota, il prodotto è *definito* pari a `1`
- Altrimenti: moltiplicare il primo valore per il *prodotto* di tutti gli altri (escluso il primo)

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.2 Modello polinomiale

- Definire una classe per modelli polinomiali
- Campo `coeffs` per la *lista* dei coefficienti ($a_0…a_n$)
    - Da ricevere come parametro del costruttore
    - Lunghezza: $n+1$ ($n$: grado del polinomio)
- Metodo `estimate` per applicare il modello a un punto dato `x`
    - Parametro per il valore di $x$, risultato $y$
    - $y = a_0 + a_1\cdot x +a_2\cdot x^2 + … + a_{n-1}\cdot x^{n-1} + a_n\cdot x^n$
- Nella parte `main` del programma
    - Chiedere all'utente i coefficienti per istanziare un unico oggetto
    - Possibilmente, prendere tutti i coefficienti su una sola riga
    - In un ciclo, valutare l'espressione per vari valori $x$ inseriti dall'utente
    - Terminare il ciclo all'inserimento di una riga vuota
- Ex.: $\mathit{coeffs} = [2, 3, 4]; x = 5 \to y = 2 + 3 \cdot 5 + 4 \cdot 5^2 = 117$

---

![](https://fondinfo.github.io/images/fun/starstar.png)
# 10.3 Stella di stelle

- Definire una funzione di disegno ricorsiva
    - Parametri: centro, distanza $r$ e numero $n$ di punti
- Disegnare un punto al centro (cerchietto ~ 3 px)
- Se la distanza $r$ è troppo piccola (p.es. 5 px) ⇒ finito
- Altrimenti, collegare il centro a $n$ punti
    - Tutti a distanza $r$ dal centro
    - Equidistanti tra loro
- A partire da ciascuno dei nuovi punti, ripetere il pattern
    - Ma con distanza ridotta a un terzo
- Provare la funzione con vari parametri
    - Distanza $r$: 200 px, numero $n$ di punti: 5…

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

![](http://fondinfo.github.io/images/repr/neighborhood4.svg)
# 10.4 Zero in vicinato

- Scrivere una classe `NeighborZero`
    - Campo per memorizzare una matrice di interi
    - Possibilmente, matrice letta da file nell'inizializzazione
    - Nome del file come parametro
- Definire un metodo `has_zero_around`
    - Parametri: indici di colonna e riga `x` e `y`
    - Risultato: verifica se c'è uno 0 nell'intorno della cella scelta
    - In una delle 4 celle adiacenti (**✣**), esclusa la cella stessa
- Definire una funzione `main`
    - Istanziare un unico oggetto, indicando un file da leggere
    - Chiedere poi ciclicamente all'utente diverse posizioni `x`, `y`
    - Attivare `has_zero_around` e mostrare il risultato
    - Riga vuota in input per terminare

---

![](https://fondinfo.github.io/images/comp/list-tree.svg)
# 10.5 Liste annidate, fuori limite

- Definire una funzione *ricorsiva* `out_of_range`
    - Parametro: un numero, o liste annidate contenenti numeri (`T = float | list["T"]`)
    - Parametro: un valore limite
    - Risultato `bool`: qualche valore nella collezione supera il limite?
- Ricerca ricorsiva
    - Un numero semplice può superare o meno il limite fissato
    - In una lista, si cerca ricorsivamente in ogni elemento
- Esempio : `[1, [3, [8, 9], 7, 2], [], [4], 5]`
    - Limite: `6` → `True`, `7` → `True`, `9` → `False`

>

Saranno accettate esclusivamente le soluzioni ricorsive

---

# 10.6 Conteggio per iniziale

- Leggere per intero il file “`licence.txt`”
- Calcolare il numero delle parole…
    - Raggruppate in base alla loro prima lettera
    - Indifferentemente, maiuscola o minuscola (*case-insensitive*)
- Per esempio
    - Le parole che iniziano con “`a`” sono 18
    - Quelle con “`b`” sono 3
    - Quelle con “`c`” sono 13 …

``` py
import re
words = re.findall(r"\w+", "Bla, bla (and that's it!).")
print(words)
```

>

Possibilmente, usare lista di 26 contatori, anziché un dizionario

---

# 10.7 Moltiplicazione iterativa

*Domanda di riserva: rispondere dopo aver completato o abbandonato le precedenti*

- Riscrivere la funzione `multiply_all` dell'esercizio 10.1
    - Moltiplicare tra loro tutti i numeri di una lista
    - Usare una iterazione anzichè la ricorsione
- Definire una funzione `main`
    - Chiamare la funzione `multiply_all` con una lista generata casualmente
    - Mostrare all'utente la lista e il risultato

---

![](https://fondinfo.github.io/images/misc/lines-around.svg)
# 10.8 Linee al centro

*Domanda di riserva: rispondere dopo aver completato o abbandonato le precedenti*

- Definire un raggio $r$ pari a 200
- Definire un angolo iniziale $\theta_1$ pari a 90°
- Definire un angolo finale $\theta_2$ pari a 180°
- Disegnare dei segmenti che collegano il centro del canvas a $n$ punti
    - $n$ scelto dall'utente
- Tutti a distanza $r$ dal centro, equispaziati tra loro
- Angoli compresi tra $\theta_1$ e $\theta_2$

---

# Esercitazione 11 (12-09)

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# 11.1 Hitori, suggerimenti [P2]

- Cercare automaticamente la prossima mossa
    - Ragionamento simile a giocatore umano
    - Avviare la ricerca col tasto `a`
- *Provare* ad annerire una cella non annotata
    - Applicare gli automatismi dell'es. 9.7
    - Se le regole sono violate (`wrong`), cerchiare la cella
- *Provare* a cerchiare una cella non annotata
    - Applicare gli automatismi dell'es. 9.7
    - Se le regole sono violate (`wrong`), annerire la cella

>

Se invece una ipotesi non risulta `wrong`, non è detto che sia giusta; non si possono trarre conclusioni!

---

![](https://fondinfo.github.io/images/misc/artificial-intelligence.png)
# 11.2 Hitori, altri suggerimenti [P2]

- Considerare ogni cella non annotata, singolarmente
- *Provare ad annerirla*
    - Applicare gli automatismi dell'es. 9.7
- *Provare a cerchiarla*
    - Applicare gli automatismi dell'es. 9.7
- *Confrontare* tutte le annotazioni, aggiunte nei due casi
    - Se una qualsiasi cella è annerita in entrambe le ipotesi, annerirla nel gioco
    - Se una qualsiasi cella è cerchiata in entrambe le ipotesi, cerchiarla nel gioco

---

# 11.3 Hitori, test soluzione [P2]

- Provare a risolvere con i soli *suggerimenti* singoli
    - [Easy 5×5](http://www.menneske.no/hitori/5x5/eng/solve.html?number=15266)
    - [Medium 6×6](http://www.menneske.no/hitori/6x6/eng/utskrift.html?number=16075)
    - [Hard 8×8](http://www.menneske.no/hitori/8x8/eng/solve.html?number=21330)
    - [Very hard 9×9](http://www.menneske.no/hitori/eng/solve.html?number=186838)
    - [Super hard 12×12](http://www.menneske.no/hitori/12x12/eng/solve.html?number=29512)
    - [Impossible 15×15](http://www.menneske.no/hitori/15x15/eng/solve.html?number=2564)
- Ricordarsi...
    - Inizializzare la partita da un *file* (parametro)
    - Preparare vari *unit test*, per le principali funzionalità
