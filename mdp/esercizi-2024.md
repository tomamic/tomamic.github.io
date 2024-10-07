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
