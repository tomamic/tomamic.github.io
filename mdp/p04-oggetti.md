![](images/oop/balls.png)
# Oggetti
## Introduzione alla programmazione

---

![](images/oop/basic-object.svg)
# 💡️ Oggetto

- Rappresenta un *oggetto fisico* o un *concetto* del dominio
- Memorizza il suo **stato** interno in *campi privati*
    - *Incapsulamento (black box)*
- Offre un insieme di **servizi**, come *metodi pubblici*
    - Realizza un *tipo di dato astratto (ADT)*

---

![](images/oop/cookie-cutter.png)
# 💡️ Classi ed oggetti

- Ogni *oggetto* ha una **classe** di origine
    - La classe dà la stessa forma iniziale (campi e metodi) a tutti i suoi oggetti
- Ma ogni *oggetto* ha la sua **identità**
    - Stato e locazione in memoria distinti da quelli di altri oggetti
    - Sia istanze di classi diverse che della stessa classe

---

![](images/oop/ball-object.svg) ![](images/oop/ball-uml.svg) Class diagram UML
# ⭐ Definizione della classe

- **Incapsulamento** dei dati: *convenzione* sui nomi
    - Prefisso `_` per i nomi dei *campi privati*

> We're all consenting adults here. *(GvR)*

``` py
class Ball:  # …
    def __init__(self, x0: int, y0: int):
        self._x = x0
        self._y = y0
        self._dx, self._dy = 5, 5
```

- Definiamo tutti i campi necessari alla pallina
    - Rappresentazione completa del suo stato
    - ⇒ `self._x, self._y, self._dx, self._dy`

---

![](images/oop/bob-builder.jpg)
# ⭐ Costruzione oggetti

- **`__init__`** : metodo *costruttore*
    - Eseguito automaticamente alla creazione di un oggetto
    - *Instantiation is initialization*
- **`self`** : primo parametro di tutti i metodi
    - Rappresenta l'*oggetto* su cui svolgere l'operazione
    - Permette ai metodi di accedere ai campi
    - Non bisogna passare un valore esplicito
- Altri parametri, dopo `self` : li decidiamo noi
    - Non vogliamo creare tutte le palline nella stessa posizione
    - ⇒ Parametri `x0, y0`

``` py
ball = Ball(40, 80)  # Allocation and initialization
```

---

![](images/oop/anim-bounce.png)
# ⭐ Metodi

- Espongono *servizi* ad altri oggetti
- Metodi *getter* : non modificano stato

``` py
ARENA_W,ARENA_H, BALL_W,BALL_H = 480,360, 20,20

class Ball:  # …
    def move(self):
        if not 0 <= self._x + self._dx <= ARENA_W - BALL_W:
            self._dx = -self._dx
        if not 0 <= self._y + self._dy <= ARENA_H - BALL_H:
            self._dy = -self._dy
        self._x += self._dx
        self._y += self._dy

    def pos(self) -> (int, int):  # getter
        return self._x, self._y
```

---

![](images/oop/balls.png)
# ⭐ Uso degli oggetti

``` py
# Create two objects, instances of Ball class
b1 = Ball(140, 180)
b2 = Ball(180, 140)

b1.move()
b2.move()

print("b1 @", b1.pos())
print("b2 @", b2.pos())
```

- Nei suoi *campi privati*, ogni oggetto memorizza tutto il suo stato
    - Usiamo i campi al posto delle variabili globali
    - `self._x, self._y, self._dx, self._dy`

>

<https://tomamic.github.io/pyodide/?p04_ball.py>

---

# 🔬 Il primo parametro, self

- Il primo parametro di ogni metodo si chiama `self` (per convenzione)
- Il valore di `self` viene assegnato *automaticamente*
- Rappresenta l'*oggetto* di cui viene invocato il metodo
- In Python, una chiamata a metodo è interpretata così:

``` py
b1 = Ball(140, 180)
b1.move()
```

``` py
# ⚠️ Python internals, DON'T do this!
b1 = object.__new__(Ball)
Ball.__init__(b1, 140, 180)
Ball.move(b1)
```

---

# 🧪 Animazione di due palline

``` py
b1 = Ball(140, 180)
b2 = Ball(180, 140)

def tick():
    g2d.clear_canvas()
    g2d.draw_image("ball.png", b1.pos())
    g2d.draw_image("ball.png", b2.pos())
    b1.move()
    b2.move()

def main():
    g2d.init_canvas((ARENA_W, ARENA_H))
    g2d.main_loop(tick)
```

>

<https://tomamic.github.io/pyodide/?p04_ball.py>

---

# 🧪 Metodi con parametri

- Metodo per più spostamenti consecutivi
- `n`: parametro del metodo
    - Non è caratteristica della pallina
    - Ma scelta di chi usa l'oggetto
- Per la chiamata serve parametro effettivo

``` py
class Ball:
    # …
    def multiple_move(self, n: int):
        for i in range(n):
            self.move()

b1 = Ball(50, 50)
b1.multiple_move(3)
b1.multiple_move(2)
```

---

# 💡️ Variabili locali, parametri, campi

- *Campi*: memorizzano i dati caratteristici di una istanza
    - Ogni pallina ha la sua posizione `(self._x, self._y)` <br> e la sua velocità `(self._dx, self._dy)`
- *Parametri*: passano altri valori ad un metodo
    - Se alcuni dati necessari non sono nei campi
- *Variabili locali*: memorizzano risultati parziali
    - Generati durante l'elaborazione del metodo
    - Nomi cancellati dopo l'uscita dal metodo
- *Variabili globali*: definite fuori da tutte le funzioni
    - Usare sono se strettamente necessario
    - Meglio avere qualche parametro in più, per le funzioni

---

![](images/misc/hiccup.png)
# 🧪 Personaggio D&D

- Consideriamo un personaggio fantasy
- Ha un nome distintivo
- Inizia il gioco con un numero casuale di “punti ferita”

``` py
class Fighter:
    def __init__(self, name: str):
        self._name = name
        self._hp = randint(15, 30)  # hit points

    def describe(self) -> str:
        return f"I'm {self._name}. I have {self._hp} hit points."
```

---

# 🧪 Gestione dei punti

- Quando viene colpito, il personaggio perde alcuni punti
- Quando viene curato, ne recupera alcuni
- Il personaggio muore quando termina i punti ferita
- Non può più essere curato

``` py
class Fighter: # …
    def hit(self, damage: int) -> None:
        self._hp = max(self._hp - damage, 0)

    def heal(self, cure: int) -> None:
        if self.alive():
            self._hp = min(self._hp + cure, 20)

    def alive(self) -> bool:
        return self._hp > 0
```

---

# Utilizzo del personaggio

- Il costruttore richiede solo il nome
- Infliggiamo tre ferite casuali ed una cura casuale

``` py
c = Fighter("Hero")
print(c.describe())

for _ in range(3):
    c.hit(randint(5, 10))
    print(c.describe())

c.heal(randint(5, 10))
print(c.describe())

print(c.alive())
```

<https://tomamic.github.io/pyodide/?p04_dnd.py>

---

![](images/fun/shopping-list.png)
# ⭐ Lista

- Sequenza *mutabile* di valori *omogenei*

```
grocery = ["spam", "eggs", "beans"]
grocery.append("sausage")  # add "sausage" at the end, size grows
grocery.remove("eggs")  # remove "eggs", size shrinks

for product in grocery:
    print(product.upper())
```

- Istruzione `for` per cicli su sequenze di valori
- Ogni stringa è un oggetto, di class `str`
- `upper` è un metodo della classe `str`

---

# 🧪 Lista di oggetti

- Una lista può contenere quasiasi tipo di dato
- Utile per gestire numerose palline
- Chiamata a `move` in un ciclo `for`

``` py
from p04_ball import Ball, ARENA_W, ARENA_H

def tick():
    g2d.clear_canvas()  # BG
    for b in balls:
        b.move()
        g2d.draw_image("ball.png", b.pos())  # FG

balls = [Ball(40, 80), Ball(80, 40), Ball(120, 120)]
g2d.init_canvas((ARENA_W, ARENA_H))
g2d.main_loop(tick)
```

<https://tomamic.github.io/pyodide/?p04_balls.py>

---

# Creare la lista

``` py
balls = [Ball(40, 80), Ball(80, 40), Ball(120, 120)]
```

``` py
b1 = Ball(40, 80)
b2 = Ball(80, 40)
b3 = Ball(120, 120)
balls = [b1, b2, b3]
```

``` py
balls = []
balls.append(Ball(40, 80))
balls.append(Ball(80, 40))
balls.append(Ball(120, 120))
```

<https://tomamic.github.io/pyodide/?p04_balls.py>

---

# Personaggio Ghost

- Ad ogni mossa, sceglie una direzione completamente casuale
    - Non servono campi `dx`, `dy`
- Ogni tanto sparisce o ricompare (cambiando la sua icona)

``` py
class Ghost:  # …

    def move(self):
        dx = choice([-4, 0, 4])
        dy = choice([-4, 0, 4])
        self._x = (self._x + dx) % ARENA_W
        self._y = (self._y + dy) % ARENA_H

        if randrange(100) == 0:
            self._visible = not self._visible
```

❓ Perchè viene preso il resto della divisione `%`?

---

![](https://raw.githubusercontent.com/tomamic/fondinfo/master/sprites.png)
# Scelta dello sprite

``` py
class Ghost:  # …
    def sprite(self):
        if self._visible:
            return 20, 0
        return 20, 20
```

- Posizione dove si trova lo *sprite* desiderato
    - All'interno dell'immagine complessiva

---

# Disegno dei fantasmi

``` py
ghosts = []
for _ in range(5):
    ghosts.append(Ghost((randrange(ARENA_W), randrange(ARENA_H))))

def tick():
    g2d.clear_canvas()
    for g in ghosts:
        # Draw a clip from a larger image
        g2d.draw_image_clip("sprites.png", g.pos(), g.sprite(), g.size())
        g.move()
```

<https://tomamic.github.io/pyodide/?p04_ghost.py>

- `g2d.draw_image_clip` disegna una porzione di immagine
    - Inefficiente caricare tante immagini separate

---

# 🏊 Esercizi

---


![](images/misc/ellipse.svg)
# Classe per ellisse

- Classe che modella un'ellisse
- Campi privati (parametri del costruttore)
    - Semiassi: `a, b`
- Metodi pubblici per ottenere...
    - Area: `$A = \pi \cdot a \cdot b$`
    - Fuoco: `$c = \sqrt{|a^2 - b^2|}$`
- Nel corpo principale del programma...
    - Creare un oggetto con dati forniti dall'utente
    - Visualizzare area e distanza focale dell'ellisse

---

![](images/misc/frogger.png)
# Animazione di un veicolo

- Creare un veicolo modificando la classe `Ball` vista a lezione
- Eseguire l'animazione
    - Per ogni frame, chiamare il metodo `move` del veicolo
    - Rappresentare un rettangolo nella posizione aggiornata del veicolo
- Modificare però il metodo `move`
    - Il veicolo si sposta sempre di pochi pixel, solo in orizzontale
    - Se supera 100px oltre il bordo destro, ricompare a 100px prima del bordo sinistro e viceversa

---

![](images/misc/frogger.png)
# Pallina con conteggio

- Partire di nuovo dalla classe `Ball` vista a lezione
- La pallina si muove solo dopo il click del mouse
- Esegue i suoi comportamenti già definiti, ma solo per 5 fotogrammi
- Dopo 5 fotogrammi si ferma, in attesa di una nuova pressione del tasto

---

![](images/misc/space-invaders-school.png)
# Animazione di alieni

- Partire di nuovo dalla classe `Ball` vista a lezione
- Il movimento di base però è solo orizzontale
- Arrivato al bordo, il personaggio:
    - Si sposta di qualche pixel verso il basso
    - Poi cambia direzione orizzontale
- Fare in modo che, in ogni frame, lo spostamento sia solo orizzontale, o solo verticale, ma *non* diagonale

---

![](images/misc/viewport.png)
# Scroll della vista

- Impostare uno spazio ampio per i movimenti dei personaggi (`ARENA_W, ARENA_H`)
- Creare un canvas di disegno più piccolo (`VIEW_W, VIEW_H`)
    - Viene mostrata solo una porzione dell'arena
- Permettere all'utente di spostare la *vista* sull'arena
    - Usando i tasti cursore

---

![](images/misc/spiral-circles.png)
# 🥷 Spirale ad oggetti

- Mostrare l'*animazione* di un cerchio lungo una spirale
- Realizzare una classe per gestire dati e comportamento del cerchio
- Implementare il movimento in un metodo `move()`
- Campi: `xc`, `yc`, `i`
    - `i` conta i passi; se eccede il limite, torna a 0
