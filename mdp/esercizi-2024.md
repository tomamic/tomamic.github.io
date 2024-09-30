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
