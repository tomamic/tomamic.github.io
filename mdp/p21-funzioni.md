![](images/fun/function.png)
# Funzioni
## Introduzione alla programmazione

---

![](images/fun/function.png)
# ⭐ Definizione di funzione

- *Operatore*, applicato a *operandi*, per ottenere un *risultato*
    - **`def`** per definire una funzione
    - **`return`** per terminare e restituire un risultato

``` py
from math import sqrt

def hypotenuse(a, b):
    c = sqrt(a ** 2 + b ** 2)
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
    c = sqrt(a ** 2 + b ** 2)
    return c

def main():
    side1 = float(input("1st side? "))
    side2 = float(input("2nd side? "))
    side3 = hypotenuse(side1, side2)
    print("3rd side:", side3)

main()  # remove, if importing the module elsewhere
```

>

<https://fondinfo.github.io/play/?c04_hypotenuse.py>

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
x, y, dx = 50, 50, 4  # sequence unpacking
ARENA_W, ARENA_H = 480, 360

def tick():
    global x, dx
    g2d.clear_canvas()  # Draw background
    g2d.draw_image("ball.png", (x, y))  # Draw foreground
    ##if g2d.mouse_clicked(): ...
    ##if x + dx > ARENA_W: ...
    x += dx  # Update ball's position

g2d.init_canvas((ARENA_W, ARENA_H))
g2d.main_loop(tick)  # call tick 30 times/second
```

>

<https://fondinfo.github.io/play/?c04_anim.py>

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
- **`g2d.close_canvas`**: *chiude il  canvas, termina l'esecuzione*

>

[**Documentazione g2d**](https://github.com/fondinfo/fondinfo#g2d)

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
    return sqrt(leg1 ** 2 + leg2 ** 2)

---

# 💡 Funzioni in moduli

- Ogni file Python è un *modulo*: nome del file, senza `.py`
- Se importato altrove, esecuzione `main` sotto condizione

``` py
# file `mymath.py`
def hypotenuse(leg1: float, leg2: float) -> float:
    return sqrt(leg1 ** 2 + leg2 ** 2)

def main():  # Use or test the hypotenuse function
    print(hypotenuse(3, 4))

if __name__ == "__main__":  # file executed directly, or imported?
    main()  # `main` not called, if file imported as module
```

``` py
>>> import mymath  # nothing printed
>>> mymath.hypotenuse(4, 3)
5
```

---

# 💡 Condizioni d'errore

- Precondizioni per attivazione non soddisfatte
- ⇒ Errore, instruzione **`raise`**
- Es. Triangolo errato

``` py
def triangle_perimeter(a: float, b: float, c: float) -> float:
    if a > b + c or b > a + c or c > a + b:
        raise ValueError("Not a triangle")
    return a + b + c

print(triangle_perimeter(4, 2, 1))
```

---

![](images/hist/mcnulty.png) Kay McNulty <br> Subroutine per ENIAC
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

<https://fondinfo.github.io/play/?c04_move.py>

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

# Funzioni trigonometriche

---

![](images/fun/sin-cos-tan-1.svg) ![](images/fun/sin-cos-tan-2.svg)
# 🧪 Coordinate polari

- Noti ipotenusa e angolo di un triangolo rettangolo
    - Con `cos` e `sin` si ricavano i cateti
- Sul piano cartesiano (o *raster*)
    - $x$ cateto adiacente, $y$ opposto, $r$ ipotenusa
- **Coordinate polari** di un punto: `$(r, \theta)$`
    - Distanza dall'origine e angolo
- Coord. *polari* `$(r, \theta)$` ⇒ *cartesiane* `$(x, y)$`
    - `$\begin{cases}x = r\cdot cos\theta \\ y = r\cdot sin\theta\end{cases}$`
- Coord. *cartesiane* `$(x, y)$` ⇒ *polari* `$(r, \theta)$`
    - `$\begin{cases}r = \sqrt{x^2 + y^2} = hypot(x, y) \\ \theta = atan2(y, x)\end{cases}$`

>

<https://github.com/tomamic/fondinfo/wiki/P03-Funzioni#coordinate-polari>

---

![](images/fun/move-around.svg)
# 🧪 Raggi sul canvas

- Spostamento `$(r, \theta)$` rispetto a `$(x_0, y_0)$`
    - *Traslazione*
- In modulo `math`, funzioni e costanti utili
    - `sin, cos, radians, pi`
    - `hypot, atan2, dist`
- Es. 4 raggi: stesso centro, stesso raggio, angoli diversi

``` py
def draw_rays(x0: int, y0: int, r: int):
    for angle in [0, 15, 30, 45]:
        x = x0 + r * cos(radians(angle))
        y = y0 + r * sin(radians(angle))
        g2d.draw_line((x0, y0), (x, y))
```

>

<https://fondinfo.github.io/play/?c04_angles.py>

---

![](images/fun/move-around.svg)
# Funzioni su coord polari

- Funzioni più generali, astrazione migliore

```
Point = tuple[float, float]  # Pt in cartesian coords (x, y)
Polar = tuple[float, float]  # Pt in polar coords (r, angle)

def from_polar(plr: Polar) -> Point:
    r, a = plr
    return (r * cos(a), r * sin(a))

def move_around(start: Point, length: float, angle: float) -> Point:
    x0, y0 = start
    dx, dy = from_polar((length, angle))
    return x0 + dx, y0 + dy
```

- ❓ Riscrivere `draw_rays`, usando `move_around`

>

<https://fondinfo.github.io/play/?c04_polar.py>

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
- Quando il mouse viene cliccato…
- Se il mouse è vicino al centro del canvas…
    - Chiedere conferma all'utente
    - Se confermato, chiudere l'applicazione
- Altrimenti…
    - Disegnare un cerchio nella posizione del click
    - Con raggio fisso e colore casuale

---

![](images/misc/frogger.png)
# Movimento orizzontale

- Mostrare una tartaruga che si muove in orizzontale
    - Var. `dx`: spostamento a ogni frame
- Quando esce da un bordo, riappare dal bordo opposto, dopo un po'
    - Permettere di superare i bordi laterali
    - Se supera di 100px il bordo destro, ricompare a 100px prima del bordo sinistro e viceversa
- Al click del mouse, la tartaruga inverte la direzione
- Ritagliare l'immagine da `sprites.png`

``` py
g2d.draw_image("sprites.png", (x, y), (0, 20), (20, 20))
```

>

<https://github.com/fondinfo/fondinfo#images-and-sounds>

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
g2d.draw_image("sprites.png", (x, y), (20, 0), (20, 20))
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

![](images/fun/polygon.svg) ![](images/fun/move-around.svg)
# Disegno di un poligono

- Definire una funzione `draw_polygon`
    - Parametri: numero dei lati, centro e raggio del cerchio circoscritto
    - Trovare i vertici attorno al centro con `move_around`
    - Unire i vertici per disegnare il poligono

---

![](images/misc/classical-watch.jpg) ![](images/fun/move-around.svg)
# 🥷 Orologio classico

- Definire una funzione `draw_clock`
    - Disegnare 12 tacche a raggiera, come in un orologio classico
    - Miglioramento: disegnare anche le tacche dei minuti, più piccole

---

![](images/misc/spiral-circles.svg)
# 🥷 Percorso a spirale

- Mostrare un cerchio in movimento
- Percorso a spirale, in $N$ passi
    - Il cerchio ruota attorno al centro del canvas
    - A distanza crescente dal centro del canvas
    - Raggio del cerchio: crescente
    - Colore: dal rosso al blu
- Usare un contatore; se eccede il limite $N$, torna a 0
