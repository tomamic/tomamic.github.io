![](images/oop/balls.png)
# Oggetti
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

![large](images/dev/map-levels.png)

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
# 💡️ Classi e oggetti

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
        self._dx, self._dy = 4, 4
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

<https://fondinfo.github.io/play/?c05_ball.py>

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

<https://fondinfo.github.io/play/?c05_ball.py>

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

b1 = Ball(40, 40)
b1.multiple_move(3)
b1.multiple_move(2)
```

---

# 💡️ Variabili locali, parametri, campi

- *Campi*: memorizzano i dati caratteristici di una istanza
    - Ogni pallina ha la sua posizione `(self._x, self._y)` <br> e la sua velocità `(self._dx, self._dy)`
- *Parametri*: passano altri valori a un metodo
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
            self._hp = min(self._hp + cure, 30)

    def alive(self) -> bool:
        return self._hp > 0
```

---

# Utilizzo del personaggio

- Il costruttore richiede solo il nome
- Infliggiamo tre ferite casuali e una cura casuale

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

<https://fondinfo.github.io/play/?c05_dnd.py>

---

![](images/fun/shopping-list.png)
# ⭐ Lista

- Sequenza *mutabile* di valori *omogenei*

``` py
groceries = ["spam", "eggs", "beans"]
groceries.append("sausage")  # add "sausage" at the end
print(len(groceries))  # 4
groceries.remove("eggs")  # remove "eggs"
print(len(groceries))  # 3

for product in groceries:
    print(product.capitalize())
```

- Istruzione `for` per cicli su sequenze di valori
- Ogni stringa è un oggetto, di class `str`
- `capitalize` è un metodo della classe `str`

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

<https://fondinfo.github.io/play/?c05_balls.py>

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

<https://fondinfo.github.io/play/?c05_balls.py>

---

![](https://raw.githubusercontent.com/fondinfo/fondinfo/master/sprites.png)
# Personaggio Ghost

- Ogni tanto sparisce o ricompare (cambiando *sprite*)

``` py
class Ghost:  # …
    def __init__(self):
        self._w, self._h = 20, 20
        self._x, self._y = ARENA_W // 2, ARENA_H // 2
        self._visible = True

    def sprite(self):
        if self._visible:
            return 20, 0
        return 20, 20
```

- Metodo `sprite`: dove si trova lo *sprite* desiderato
    - All'interno dell'immagine complessiva

---

# Direzione casuale

- A ogni mossa, sceglie una direzione completamente casuale
    - Variabili locali `dx`, `dy`, *non campi*

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

- ❓ Perchè viene preso il resto della divisione `%`?
- ❓ Come limitare la scelta alle sole 4 direzioni principali ↔↕?

---

# Scelta dello sprite

``` py
ghosts = []
for _ in range(5):
    ghosts.append(Ghost())

def tick():
    g2d.clear_canvas()
    for g in ghosts:
        # Draw a clip from a larger image
        g2d.draw_image("sprites.png", g.pos(), g.sprite(), g.size())
        g.move()
```

<https://fondinfo.github.io/play/?c05_ghost.py>

- `g2d.draw_image` disegna una porzione di immagine
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

- Creare una classe `Vehicle`
    - Partire dalla classe `Ball` vista a lezione
    - Il movimento però è solo orizzontale
- Se il veicolo supera i 100px oltre il bordo destro…
    - Riappare a 100px prima del bordo sinistro
- Se il veicolo supera i 100px oltre il bordo sinistro…
    - Riappare a 100px dopo il bordo destro
- Eseguire l'animazione di due veicoli
    - Uno in movimento verso destra (→)
    - L'altro verso sinistra (←)
    - Rappresentare ciascun veicolo con un rettangolo

---

![](images/misc/space-invaders-school.png)
# Animazione di alieni

- Creare una classe `Alien`
    - Partire dalla classe `Ball` vista a lezione
    - Il movimento di base però è solo orizzontale
- Arrivato al bordo, il personaggio:
    - Si sposta di qualche pixel verso il basso
    - Poi cambia direzione orizzontale
- Fare in modo che, in ogni frame, lo spostamento sia solo orizzontale, o solo verticale, ma *non* diagonale

---

![](https://raw.githubusercontent.com/fondinfo/fondinfo/master/sprites.png)
# Fantasma con conteggio

- Partire dalla classe `Ghost` vista a lezione
- Il fantasma normalmente è fermo
- Casualmente, con probabilità $\frac{1}{100}$, si avvia
    - Sceglie una direzione a caso<br>(orizzontale, verticale, o diagonale)
    - Mantiene la stessa direzione per 10 frame
    - Poi si ferma di nuovo
- Mentre il fantasma si sposta, è semi-trasparente
    - Altrimenti, è visibile
- Aggiungere al fantasma campi per contatore e per direzione

---

![](images/games/viewport.svg)
# Scroll della vista

- Impostare uno spazio ampio per i movimenti dei personaggi (`ARENA_W, ARENA_H`)
- Creare un canvas di disegno più piccolo (`VIEW_W, VIEW_H`)
    - Viene mostrata solo una porzione dell'arena
- Permettere all'utente di spostare la *vista* sull'arena
    - Usando i tasti cursore

---

![](images/misc/spiral-circles.svg)
# 🥷 Spirale a oggetti

- Mostrare un cerchio in movimento
- Percorso a spirale, in $N$ passi
    - Il cerchio ruota attorno al centro del canvas
    - A distanza crescente dal centro del canvas
    - Raggio del cerchio: crescente
    - Colore: dal rosso al blu
- Realizzare una classe per il cerchio
    - Metodo `move` per movimento di un passo
    - Metodi *getter* per posizione, raggio e colore
    - Campo contatore; se eccede il limite $N$, torna a 0
