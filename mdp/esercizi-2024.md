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

