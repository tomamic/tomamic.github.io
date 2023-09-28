![](images/fun/function.png)
# Funzioni
## Introduzione alla programmazione

---

![](images/dev/abstraction.png)
# 💡️ Pensiero astratto

- **Astrazione**, da “*ab trahere*” = togliere via ✂️
    - Prescindere da dettagli inessenziali, accidentali
    - Ragionare su concetto o *modello*, anzichè su reale
    - Es. mappe non rappresentano ogni sasso o foglia
- → *Generalizzazione*
    - Attribuire caratteristiche comuni, del concetto, a tutte le istanze
- Fondamentale per descrivere e realizzare *sistemi software complessi*
    - Livelli di astrazione, per incapsulare dettagli 📦
    - Strutture e algoritmi generici, riusabili ♻️

>

https://it.wikipedia.org/wiki/Astrazione_(filosofia)
<br>
https://thevaluable.dev/abstraction-type-software-example/

---

# 💡️ The map is not the territory

![large](images/dev/map-levels.svg)

---

![](images/fun/function.png)
# ⭐ Definizione di funzione

- *Operatore*, applicato a *operandi*, per ottenere un *risultato*
    - **`def`** per definire una funzione
    - **`return`** per terminare e restituire un risultato

``` py
def hypotenuse(a, b):
    c = (a ** 2 + b ** 2) ** 0.5
    return c
```

- Suddivisione di un problema in sotto-problemi
    - Astrazione rispetto all'implementazione
    - Generalizzazione e separazione della soluzione
    - Calcolo basato su parametri, modello

---

# ⭐ Chiamata di funzione

- **`def`** definisce una funzione, ma non la esegue!
- Bisogna *chiamarla*
- Funzione, quando eseguita, crea nuovo *spazio di nomi*
    - Parametri e variabili hanno **ambito locale**
    - Non visibili nel resto del programma
    - Nomi uguali, definiti in ambiti diversi, restano distinti
- ⚠️ Ricordarsi di assegnare il risultato a una variabile
    - ~ bicchiere per raccogliere la spremuta 🥤

``` py
side1 = float(input("1st side? "))
side2 = float(input("2nd side? "))
side3 = hypotenuse(side1, side2)  # call the function, get the result
print("3rd side:", side3)
```

---

![](images/fun/fun-hypotenuse.svg)
# 💡 Funzione principale

- Preferibile, per limitare le **variabili globali**
- *Procedura*, senza `return` (risultato `None`)

``` py
def hypotenuse(a, b):
    return (a ** 2 + b ** 2) ** 0.5

def main():
    side1 = float(input("1st side? "))
    side2 = float(input("2nd side? "))
    side3 = hypotenuse(side1, side2)
    print("3rd side:", side3)

main()  # remove, if importing the module elsewhere
```

>

<https://tomamic.github.io/pyodide/?p03_hypotenuse.py>

---

![](images/fun/fun-inc.svg)
# ⭐ Parametri di una funzione

- **Parametri formali**: nomi usati nella *definizione*
- **Parametri effettivi**: valori passati alla *chiamata*
- Parametri passati “*per oggetto*”
    - Variabili esterne: non riassegnate
    - Azioni su oggetti mutabili: permanenti

``` py
def inc(a):
    a += 1  # what's `a` now? print it

def main():
    x = 10
    inc(x)  # what's `x` now? print it

main()
```

---

![](images/oop/anim-right.png)
# ⭐ Animazione

``` py
x, y, dx = 50, 50, 5  # sequence unpacking
ARENA_W, ARENA_H = 480, 360

def tick():
    global x, dx
    g2d.clear_canvas()  # Draw background
    g2d.draw_image("ball.png", (x, y))  # Draw foreground
    ##if g2d.mouse_clicked(): ...
    ##if x + dx > ARENA_W: ...
    x += dx  # Update ball's position

def main():
    g2d.init_canvas((ARENA_W, ARENA_H))
    g2d.main_loop(tick)  # call tick 30 times/second
```

>

<https://tomamic.github.io/pyodide/?p03_anim.py>

---

# 💡 Tick, tastiera e mouse

- **`g2d.main_loop`**: *ciclo di gestione degli eventi*
    - Parametro opzionale: funzione che sarà chiamata periodicamente
- **`g2d.mouse_clicked`**: *controllo se il tasto sx del mouse è stato cliccato*
    - Risultato: `bool`
- **`g2d.mouse_pos`**: *posizione del mouse*
    - Risultato: `Point`
- **`g2d.current_keys`**: *tutti i tasti attualmente premuti*
    - Risultato: sequenza di `str` – [Possibili valori](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
    - Es.: `"q", "1", "ArrowLeft", "Enter", "Spacebar", "LeftButton"`

``` py
if g2d.current_keys(): print(g2d.current_keys())
```

>

[**Documentazione g2d**](https://github.com/tomamic/fondinfo#g2d)

---

# 💡 Documentazione di funzione

- **Annotazioni**: utili per documentare il tipo di param. e risultato
    - Ma non c'è verifica!
- **Docstring**: descrizione testuale di una funzione
- **`help`**: funzione per visualizzare la documentazione

``` py
def hypotenuse(leg1: float, leg2: float) -> float:
    '''
    Return the hypotenuse of a right triangle,
    given both its legs (catheti).
    '''
    return (leg1 ** 2 + leg2 ** 2) ** 0.5
```

>

<https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html>

---

![](images/hist/mcnulty.png) Kay McNulty : subroutine per ENIAC
# 🧪 Risultato in tupla

``` py
def divmod_(a: int, b: int) -> tuple[int, int]:
    quotient = a // b
    reminder = a % b
    return (quotient, reminder)  # ❗ return a tuple

result = divmod_(5, 2)  # a tuple
q, r = result  # ❗ sequence unpacking
```

>

<https://docs.python.org/3/library/functions.html#divmod>

---

![](images/oop/anim-bounce.png)
# 🧪 Funzione per rimbalzi

- Le funzioni forniscono limitata astrazione
    - Incapsulano il comportamento
    - ❗ Ma espongono i dati

``` py
def move_ball(x: int, y: int,
              dx: int, dy: int) -> tuple[int, int, int, int]:
    if not 0 <= x + dx <= ARENA_W - BALL_W:
        dx = -dx
    if not 0 <= y + dy <= ARENA_H - BALL_H:
        dy = -dy
    x += dx
    y += dy
    return (x, y, dx, dy)
```

>

<https://tomamic.github.io/pyodide/?p03_move.py>

---

# 💡 Effetti collaterali

- Modifica di oggetti passati come parametri o variabili globali, operazioni di lettura/scrittura...
- Annullano la **trasparenza referenziale**
    - Impossibile semplificare, sostituendo una chiamata a funzione col suo valore di ritorno (es. presenti operazioni di I/O)
- Rendono la funzione **non idempotente**
    - Chiamata più volte, con gli stessi parametri, restituisce risultati diversi
- → Difficile fare verifiche matematiche
    - `z = f(sqrt(2), sqrt(2))`
    - `s = sqrt(2)` <br> `z = f(s, s)`

---

# 💡 Funzioni non idempotenti

- Esempio di semplificazione
    - `p = rq(x) + rq(y) * (rq(x) - rq(x))`
    - `p = rq(x) + rq(y) * (0)`
    - `p = rq(x) + 0`
    - `p = rq(x)`
- Ma se `rq` ha effetti collaterali, non si può!

``` py
base_value = 0  # global variable

def rq(x: int) -> int:
    global base_value
    base_value += 1
    return x + base_value
```

>

Ad esempio, con `x = 3` e `y = 4` i due risultati sono `-2` e `4`

---

# 🏊 Esercizi

---

![](images/misc/ellipse.svg)
# Area di un'ellisse

- Definire una *funzione* `ellipse_area` che:
    - Riceve come *parametri* i semiassi di una ellisse:<br>`a`, `b`
    - Restituisce come risultato l'area dell'ellisse:<br>`π⋅a⋅b`
- Definire una *funzione* `main` che:
    - Chiede all'utente due valori
    - Invoca la funzione `ellipse_area` con questi parametri
    - Stampa il risultato ottenuto

---

![](images/misc/random-circles.svg)
# Cerchi al click

- Definire una funzione `tick`
- Quando mouse cliccato, prendere la posizione del mouse da `g2d`
- Se il mouse è vicino al centro del canvas, chiedere conferma e poi chiudere l'applicazione
- Altrimenti, disegnare un cerchio, con raggio fisso e colore casuale

---

![](images/misc/frogger.png)
# Movimento orizzontale

- Mostrare una tartaruga che si muove in orizzontale
    - Var. `dx`: spostamento a ogni frame
- Riappare dal bordo opposto, dopo un po'
    - Permettere di superare i bordi laterali
    - Se supera di 100px il bordo destro, ricompare a 100px prima del bordo sinistro e viceversa
- Al click del mouse, la tartaruga inverte la direzione
- Ritagliare l'immagine da `sprites.png`

``` py
g2d.draw_image_clip("sprites.png", (x, y), (0, 20), (20, 20))
```

>

<https://github.com/tomamic/fondinfo#images-and-sounds>

---

![](images/misc/space-invaders-school.png)
# Alieno

- Mostrare un alieno che si muove a serpentina
- Normalmente si sposta solo in orizzontale
- Quando arriva a un bordo laterale…
    - L'alieno scende di qualche pixel
    - Inverte la sua direzione orizzontale
- Evitare gli spostamenti in diagonale
    - Quando l'alieno scende, non si sposta in orizzontale
    - Quando si sposta in orizzontale, non scende
- Ritagliare l'immagine del fantasma da `sprites.png`

``` py
g2d.draw_image_clip("sprites.png", (x, y), (20, 0), (20, 20))
```

---

![](images/misc/bouncing-ball.jpg)
# Rimbalzi con gravità

- Usando la funzione `tick` e variabili globali, mostrare una pallina che si muove e rimbalza sui bordi
    - La pallina subisce una accelerazione costante verso il basso
    - A ogni frame, aggiungere una piccola costante a `dy`
    - Simile all'effetto della gravità

---

![](images/misc/frogger.png)
# Movimento per 5 fotogrammi

- Mostrare una pallina che si muove in verticale
    - Variabile `dy` indica lo spostamento da effettuare a ogni frame
- La pallina si muove solo dopo il click del mouse
    - Si sposta solo per 5 fotogrammi
    - Dopo si ferma, fino a nuova pressione
- Invertire la direzione a ogni avvio del movimento

>

Incrementare (o decrementare) un contatore a ogni chiamata a `tick`

---

![](images/misc/sin-cos-tan-1.svg) ![](images/misc/sin-cos-tan-2.svg)
# 🧪 Coordinate polari

- Definire una funzione `to_polar`
    - Trasformare coordinate cartesiane in coordinate polari
- Definire una funzione `from_polar`
    - Trasformare coordinate polari in coordinate cartesiane

>

<https://github.com/tomamic/fondinfo/wiki/P02-Cicli#coordinate-polari>
<br>
<https://tomamic.github.io/pyodide/?p03_polar.py>

---

![](images/fun/polygon.svg) ![](images/fun/move-around.svg)
# 🥷 Disegno di un poligono

- Definire una funzione `move_around`
    - Effetto: spostamento in una certa direzione
    - Parametri: posizione di partenza, lunghezza e angolo dello spostamento
    - Risultato: posizione di arrivo
    - 💡 Si può sfruttare `from_polar` (es. precedente)
- Definire una funzione `draw_polygon`
    - Parametri: numero dei lati, centro e raggio del cerchio circoscritto
    - Trovare i vertici attorno al centro con `move_around`
    - Unire i vertici per disegnare il poligono
