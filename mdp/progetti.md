![](images/dev/theory-practice.png)
# Esempi di progetti
## Informatica e lab di programmazione<br> Michele Tomaiuolo @ Ingegneria UniPR

---

![](images/misc/pengo.png)
# Pengo

- **SnoBee** si muovono casualmente
- **Ghiaccio** : ostacolo per *SnoBee* e *Pengo*
- **Pengo** può spingere i blocchi di ghiaccio
    - Per schiacciare gli *SnoBee*
    - Vince se elimina tutti gli *SnoBee*
    - Perde se viene toccato da *SnoBee*

>

<https://archive.org/details/arcade_pengo>
<br>
<https://en.wikipedia.org/wiki/Pengo_(video_game)>

---

![](images/misc/pac-man.png)
# Pac-Man

- *Pac-Man*
    - Guidato dal giocatore, con la tastiera
    - Applica i comandi solo solo agli incroci
- *Fantasmi*
    - Uccidono Pac-Man se lo toccano
    - Agli incroci svoltano casualmente
    - Ma non tornano mai indietro!
- *Biscotti*
    - Pac-Man deve mangiarli tutti, per terminare il gioco
- *SuperBiscotti*
    - Danno per breve tempo a Pac-Man il potere di mangiare i fantasmi

---

![](images/misc/super-mario.jpg)
# Super Mario

- *Mario*: guidato dal giocatore
    - Si muove e salta sulle piattaforme
    - Cade secondo gravità, fuori dalle piattaforme
    - Ma non accelera oltre una velocità limite
    - Muore se cade in fondo allo schermo
- *Muri e piattaforme*
    - Mario ci atterra dall'alto
    - Non si possono attraversare in nessuna direzione
- *Avversari*
    - Si muovono sulle piattaforme come Mario, ma scelgono casualmente la direzione
    - Uccidono Mario se lo urtano, ma muoiono se Mario ci salta sopra

---

![](images/misc/bubble-bobble.png)
# Bubble Bobble

- *Draghetto*: guidato dal giocatore
    - Si muove e salta sulle *piattaforme*
    - Muore se cade in fondo allo schermo
- *Avversari*
    - Saltano come il draghetto sulle *piattaforme*
    - Ma scelgono casualmente la direzione
    - Uccidono il draghetto se lo urtano
- *Bolle*
    - Lanciate in orizzontale dal draghetto
    - Dopo un po' deviano verso l'alto
    - Catturano gli avversari che urtano

---

![](images/misc/moon-patrol.png)
# Moon Patrol

- Animazione in parallasse degli sfondi
- `Rover`: si muove sul terreno, salta, spara verso destra e verso l'alto
- `Buche`: il rover ci può cadere dentro
- `Rocce`: ostacoli, che possono essere colpiti
- `Alieni`: sparano in basso e possono essere colpiti

---

![](images/misc/frogger.png)
# Frogger

- **Rana** guidata dall'utente, salta in 4 direzioni: ↕ ↔
- Deve attraversare la strada, senza essere investita dai **camion**
- Deve attraversare il fiume, saltando sui **tronchi**
    - La rana viene trascinata, se è su un tronco
    - La rana affoga nell'acqua

>

<https://tomamic.github.io/images/sprites/frogger.png>

---

![](images/misc/invaders.png)
# Space invaders

- **Cannone**: l'utente lo sposta in orizzontale; spara verso l'alto, contro gli alieni
- **Alieni**: si muovono tutti nella stessa direzione; percorso a serpentina; sparano verso il basso, contro il cannone
- **Muri**: si ditruggono lentamente dove colpiti

---

![](images/misc/donkey-kong.png)
# Donkey Kong

- Mario può camminare sulle piattaforme
- Può saltare, se è su una piattaforma
- Deve evitare i barili
- Cade quando esce dalla piattaforma

---

![](images/misc/snake.png)
# Snake

- **Serpente**: guidato dal giocatore
    - Avanza continuamente
    - Non può tornare indietro
    - Se tocca se stesso, muore
- **Cibo**: disposto casualmente
    - Il serpente si allunga dopo aver mangiato
- **Muri**: in posizione fissa
    - Il serpente muore se ci va a sbattere

---

![](images/misc/pong.png)
# Pong

- Campo rettangolare
- **Pallina**: si muove a 45°, rimbalza su bordi lunghi e barrette
- **Barrette**: si muovono solo verticalmente
- **Punti**: segnati quando la pallina esce dal campo

---

![](images/misc/minesweeper.png)
# Campo minato

- N <b>mine nascoste</b> a caso in tabella rettangolare
- Ad ogni turno, l'utente scopre una casella:
    - Mina → <i>partita persa</i>
    - Solo N caselle coperte (con mine) → <i>partita vinta</i>
    - Altrimenti, <i>conteggio mine</i> nelle 8 caselle adiacenti

---

![](images/misc/connect4.svg)
# Forza 4

- Due giocatori, a turno
- Mettere in fila 4 pedine
    - In orizzontale, verticale o diagonale
- Forza di gravità
    - Pedine cadono lungo una griglia verticale

---

![](images/misc/othello.png)
# Othello

- In due, bianco e nero
    - All'inizio: 2 coppie di pedine al centro, incrociate
    - A turno, ciascun giocatore aggiunge una pedina
    - È obbligatorio catturare, se non ci sono mosse si passa il turno
- Se viene *circondata una fila* di pedine avversarie, queste cambiano tutte colore
- Vince chi alla fine ha più pedine

---

![](images/misc/slitherlink-solved.png)
# Slitherlink

- Regole
    - Connect adjacent dots with vertical or horizontal lines to make a single loop
    - The numbers indicate how many lines surround it, while empty cells may be surrounded by any number of lines
    - The loop never crosses itself and never branches off

>

<https://www.nikoli.co.jp/en/puzzles/slitherlink.html>
<br>
<https://www.brainbashers.com/slitherlinkhelp.asp>

---

![](images/misc/hitori.svg) ![](images/misc/hitori-completed.svg)
# Hitori

- Regole
    - Color cells so no number appears more than once in a row or column
    - The sides of black cells never touch
    - White cells form a continuous network
- Ad ogni mossa, permettere all'utente di annerire un numero, oppure cerchiarlo
    - Controllare la violazione delle regole
    - Controllare il completamento del gioco (ogni numero: correttamente annerito o cerchiato)

>

<https://www.nikoli.co.jp/en/puzzles/hitori.html>

---

![](images/misc/akari.svg)
# Akari - Light up

- Scopo: <b>illuminare</b> tutte le celle bianche
    - Una lampada illumina tutte le celle visibili sulla sua riga e la sua colonna
    - Due lampade non possono illuminarsi a vicenda
    - Vincolo numerico: # lampade nelle 4 celle adiacenti

>

<https://www.nikoli.co.jp/en/puzzles/akari.html>

---

![](images/misc/tents.png)
# Tents puzzle

- Posizionare tende sulla griglia, in modo che ogni albero sia *assegnato* ad una tenda
    - Inizialmente, nessun albero è assegnato ad una tenda
    - Tenda adiacente (in orizzontale o verticale) ad un solo albero non assegnato ⇒ albero *assegnato* a quella tenda
    - Tante tende, quanti sono gli alberi
- Le tende non possono toccarsi tra loro, nemmeno in diagonale
- Vincoli numerici fuori dalla griglia: numero di tende nella riga o colonna

>

<http://www.brainbashers.com/tentshelp.asp>

---

![](images/misc/skyscrapers.jpg)
# Sudoku Skyscrapers

- Celle tutte piene
- Nessun numero ripetuto in una riga o colonna
- Rispetto dei vincoli a margine
    - Numero di tetti visibili, da quella posizione

>

<https://www.brainbashers.com/skyscrapers.asp>

---

![](images/misc/3inarow.svg)
# 3-in-a-row

- Regole
    - Ogni riga o colonna ha celle bianche e nere in egual numero
    - 3 celle contigue non possono avere lo stesso colore
- Ad ogni mossa, l'utente può segnare una cella come:
    - Bianca, oppure
    - Nera, oppure
    - Grigia (indecisa)

>

<https://www.brainbashers.com/show3inarow.asp>

