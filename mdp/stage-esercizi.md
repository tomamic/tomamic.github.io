# Esercizi stage
subtitle: Introduzione alla programmazione
![](images/dev/geek-girl.svg)

---

# Esercitazione 1

---

![](images/misc/greek-pi.png)
# 1.1 Cerchio

- Chiedere all'utente il valore del raggio `r` di un cerchio
    - `r` reale compreso tra 0 e 200
- Se `r` è valido
    - Visualizzare il cerchio
    - Mostrare il valore dell'area e della circonferenza
- Se invece `r` è fuori range
    - Mostrare un messaggio d'errore

---

![](images/misc/three-brothers.png)
# 1.2 Minore e maggiore

- Generare e stampare tre numeri interi casuali: `a`, `b`, `c`
- Ciascuno compreso tra 1 e 6
- Determinare e mostrare qual è il minore dei tre

>

Controllare prima di tutto se `a` è minore degli altri due <br>
Altrimenti controllare se `b` è minore di `c` <br>
Altrimenti ...

---

# 1.3 Calcolo dell'età

- Chidere all'utente
    - Anno, mese e giorno della data di nascita
    - Anno, mese e giorno corrente
- Comunicare l'età esatta
    - Numero di compleanni già compiuti

>

Nell'anno corrente, l'utente ha già avuto il compleanno?

Espressione booleana composta con `and`, `or`, `not`...

---

![](images/misc/random-squares.png)
# 1.4 Quadrati casuali

- Chiedere all'utente un numero `n`
- Disegnare `n` quadrati
    - Tutti con lato di 100 pixel
    - Ciascuno in posizione casuale
    - Ciascuno con un colore casuale

>

Cominciare a disegnare un solo quadrato grigio, in posizione casuale

---

![](images/misc/red-circles.png)
# 1.5 Cerchi concentrici

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio gradualmente decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
      - Dal rosso del livello più esterno
      - Fino al nero del livello più interno
- Prima del ciclo, determinare di quanto cambiare raggio e colore a ogni passo

>

Per iniziare, inserire l'operazione di disegno un ciclo, togliendo a ogni passo `10` (p.es.) al raggio e al livello di rosso

---

![](images/misc/bingo-balls.png)
# 1.6 Numero segreto

- Generare all'inizio del programma un numero “segreto” a caso tra 1 e 90
- Chiedere ripetutamente all'utente di immettere un numero, finché non indovina quello generato
- A ogni tentativo, dire se il numero immesso è maggiore o minore del numero segreto

---

![](images/misc/resistors.png)
# 🥷 1.7 Resistenze, ciclo

- Leggere, attraverso un ciclo, una sequenza di valori di resistenze elettriche
- La sequenza termina quando l'utente immette il valore 0
- Alla fine, visualizzare la resistenza equivalente, sia nel caso di resistenze disposte in serie, che in parallelo

>

Formule utili:

Rₛ = ∑ Rᵢ

1/Rₚ = ∑ (1/Rᵢ)

---

![](images/misc/classical-watch.jpg)
# 🥷 1.8 Orologio classico

- Disegnare 12 tacche a raggiera, come in un orologio classico
- Miglioramento: disegnare anche le tacche dei minuti, più piccole

>

Usare `math.Sin` e `math.Cos` per determinare le posizioni in cui disegnare

---

![](images/misc/monster.png)
# 🥷 1.9 La stanza del mostro

- Il giocatore si muove su una scacchiera di 5x5 celle, partendo da un angolo
    - Le righe e le colonne sono numerate da 0 a 4
- Un tesoro e un mostro sono nascosti in due posizioni casuali, all'inizio del gioco
- A ogni turno, il giocatore:
    - Sceglie una direzione verso cui spostarsi (alto, basso, sinistra, destra)
    - Se capita sulla cella del tesoro, ha vinto
    - Se capita sulla cella del mostro, ha perso

>

Basta memorizzare tre coppie di coordinate cartesiane

Non è richiesto di utilizzare la grafica

---

# Esercitazione 2

---

![](images/misc/numbers.png)
# 2.1 Conteggio cifre

- Chiedere una riga di testo all'utente
- Contare il numero complessivo di cifre presenti (da `'0'` a `'9'`)
- Valutare anche la somma di tutte le singole cifre trovate

>

Usare un ciclo `for` sulla stringa (sequenza di caratteri)

---

![](images/misc/sin-cos.png)
# 2.2 Array, precalcolo

- Riempire una lista con i valori di `sin(x)`
    - 360 elementi, indice `x` tra 0 e 359
- Poi, ciclicamente...
        - Chiedere un angolo all'utente
        - Visualizzare il corrispondente valore precalcolato

``` python
from math import pi, sin
```

`sin` opera su radianti: calcolare `sin(x * pi / 180)`, anzichè `sin(x)`

Creare una lista vuota, e poi aggiungere un valore alla volta con `append`
<br>
In alternativa, usare la `list comprehension`

---

![](images/misc/pythagorean-theorem.png)
# 2.3 Ipotenusa

- Scrivere una `funzione` per il calcolo dell'ipotenusa di un triangolo rettangolo
    - Parametri: due cateti come `float`
    - Risultato: ipotenusa come `float`
- Nella parte principale del programma
    - Chiedere all'utente due valori,
    - Invocare la funzione con questi parametri
    - Visualizzare il risultato della funzione

``` python
from math import sqrt
```

---

![](images/misc/red-circles.png)
# 2.4 Cerchi concentrici

- Chiedere all'utente il numero di cerchi da disegnare
- Disegnare i cerchi con raggio decrescente, ma tutti con lo stesso centro
- Far variare il colore dei cerchi
        - Dal rosso del livello più esterno
        - Fino al nero del livello più interno

>

Cominciare a disegnare un grosso cerchio rosso

Poi, inserire l'operazione di disegno un ciclo, togliendo a ogni passo `10` (p.es.) al raggio e al livello di rosso

Infine, determinare automaticamente, prima del ciclo, le variazioni migliori per raggio e colore

---

![](images/misc/color-grid.png) ![](images/oop/raster-tile.png)
# 2.5 Griglia di colori (*)

- Chidere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- In orizzontale, aumentare gradatamente la componente di blu
- In verticale, aumentare gradatamente la componente di verde

>

Cominciare a creare una griglia di riquadri tutti neri, con due cicli `for` annidati

Lasciare tra i riquadri un piccolo margine

---

![](images/misc/winding-path.png)
# 2.6 Serpentina (*)

- Chidere all'utente dei valori per `rows` e `cols`
- Mostrare una griglia di rettangoli di dimensione `rows×cols`
- Partire da un rettangolo nero in alto a sinistra
- Aumentare gradatamente la componente di blu, lungo un percorso a serpentina

>

Per iniziare, seguire un più semplice percorso "a macchina da scrivere"

Poi invertire il verso delle righe con indice dispari

---

![](images/misc/spiral-circles.png)
# 2.7 Spirale (*)

- Disegnare una sequenza di cerchi (`n` scelto dall'utente) lungo una spirale
- Alla prima implementazione, procedere su un percorso circolare di raggio `r`, attorno al punto `(xc, yc)`
- Poi, su una spirale, aumentando passo a passo anche `r`
- Infine, disegnare lungo il percorso dei cerchi sempre più grandi e di colore diverso

``` python
xc, yc, r, angle = 320, 240, 40, 0.0
  for i in range(8):
      y = yc + int(r * math.sin(angle))
      x = xc + int(r * math.cos(angle))
      pygame.draw.circle(screen, (0, 0, 0), (x, y), 10)
      angle += math.pi / 4
```

---

![](images/misc/street-fighter.png)
# 2.8 Movimento orizzontale (*)

- Mostrare una pallina che si muove in orizzontale
- La pallina rimbalza sui bordi
    - Memorizzare in una variabile `dx` lo spostamento orizzontale da effettuare a ogni ciclo
    - Cambiare segno a `dx` quando `x < 0` oppure `x + w > screen_width`

---

![](images/misc/bouncing-ball.jpg)
# 2.9 Pallina con gravità (*)

- All'esercizio precedente, aggiungere l'effetto di gravità
    - Memorizzare in una variabile `dy` lo spostamento verticale da effettuare a ogni ciclo
    - La pallina parte con `dy = 0`
    - `dy` aumenta costantemente, a ogni ciclo
    - Cambiare segno a `dy` quando `y + h > screen_height`

---

# Esercitazione 3

---

![](images/misc/space-invaders-school.png)
# 3.1 Movimento a serpentina

---

![](images/misc/bouncing-ball.jpg)
# 3.1 Palline con gravità

- Riprendere l'esercizio 2.9, ma visualizzare numerose palline in movimento
- Incapsulare tutti i dati di una pallina in un oggetto Ball
- Dotare gli oggetti pallina di un metodo `move`, per farli avanzare
- ... e di un metodo `rect`, per ottenere la posizione attuale

---

# 3.2 Tartaruga con gravità

- Partire dall'esempio fornito, con la tartaruga guidata dall'utente
    - <https://github.com/tomamic/fondinfo/tree/master/bounce>
- Aggiungere alla tartaruga un effetto gravità
    - Nel metodo `move`, incrementare `dy`
    - Fissare `dy_max`, un valore massimo per `dy`
    - La tartaruga inoltre si ferma sul fondo dello schermo
- Permettere alla tartaruga di saltare
    - Quando la tartaruga è sul fondo dello schermo, può saltare
    - Il salto comincia a comando dell'utente
    - All'inizio del salto, `dy = -dy_max`

---


