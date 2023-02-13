
![](images/dev/theory-practice.png)
# Presentazione del corso
## Informatica e lab di programmazione<br> Michele Tomaiuolo @ Ingegneria UniPR

---

![large](images/sys/globe.jpg)
# ➊ Introduzione all'informatica

- Logica
    - Algebra booleana, logica dei predicati
- Rappresentazione dei dati
    - Numeri, testi, immagini, suoni
- Teoria della computazione
    - Linguaggi, automi, complessità

---

![large](images/misc/space-invaders-school.png)
# ➋ Introduzione alla programmazione

- Algoritmi in *Python 3*
- Funzioni, grafica
- Oggetti, relazioni
- Sviluppo del software, collaudo
- Liste, sequenze, collezioni
- Ricorsione

>

Applicazioni testuali e con grafica

---

![](images/dev/geek-girl.svg)
# ➌ Esercitazioni in laboratorio

- Brevi *esercizi*, in Python
    - Alcuni testuali, altri con grafica
- Un paio di *progetti* più lunghi, in Python
    - Giochi dinamici e su matrice
- ⚠️ **Attenzione**: non sono sufficienti le poche ore in lab per imparare a programmare!
    - “Venite già studiati”
    - Completate tutti gli esercizi, a casa
    - Assiduità!

> If you wish to learn swimming <br> you have to go into the water 🏊 <br> <br> and if you wish to become a problem solver <br> you have to solve problems. *(George Polya)*

---

![](images/dev/lab.jpg)
# ℹ️ Istruzioni per i laboratori

- Attivare l'account personale per l'accesso ai lab
    - <http://www.cedi.unipr.it/gestioneaccounts>
- Esercitazioni ogni lunedì
- Esercizi da cominciare in lab e continuare a casa, *individualmente*
- *Verifica* esercitazioni
    - Alla fine di ogni esercitazione, consegna dei programmi secondo le indicazioni del docente
    - Periodicamente, lavori consegnati sottoposti a *valutazioni intermedie*, non preannunciate

---

![large](images/misc/videogames.png)
# ℹ️ Istruzioni per i progetti

- Più avanti, un paio di progetti a casa
    - Contrassegnati con `P1` e `P2`
    - Da sviluppare in alcune settimane, da soli o in coppia
    - Ma tassativamente *non più di due!*

---

# 🖐️ Tutor e assistenza

- Materiale di studio
    - *Libri* di testo e slide del corso
    - *Esercizi risolti* degli anni precedenti
    - <http://tomamic.github.io/>
- Durante le esercitazioni, assistenza di vari *tutor*
- A lezione
    - *Esempi* prima delle esercitazioni
    - *Soluzioni* di esercizi delle settimane precedenti
- *Ricevimento* aperto a tutti
    - In lab, ogni martedì e giovedì, 12:30-13:30

---

![](images/misc/quiz.png)
# 🎓 Modalità d'esame

- *➊* Prova sull'*Introduzione all'informatica* (quiz)
    - A fine corso, oppure...
    - Appelli usuali
- *➋* Prova sull'*Introduzione alla programmazione* (lab)
    - Svolgimento esercitazioni in laboratorio, oppure…
    - Prova in appelli usuali (~3 ore)
- Le due prove si possono svolgere in tempi diversi e ciascuna resta valida per l'intero anno (fino ad ottobre)
- Il voto finale è determinato:
    - per 1/4 dalla teoria
    - per 3/4 dalla programmazione

---

![](images/fun/books-stack.png)
# 📚 Testi di riferimento

- *Informatica e Laboratorio di Programmazione (A.A. 2019-2020)*, McGraw-Hill 2019. ISBN 978-1307457001 (~26€, ~300pp., nelle librerie universitarie, su Amazon ecc.)
- A.B. Downey: *Think Python* 2e - <https://github.com/AllenDowney/ThinkPythonItalian>
- M. Beri: *Python 3*, Apogeo Pocket 2010, 978-8850329151 (~12€)
- *Dispense* del corso: <https://github.com/tomamic/fondinfo/wiki/>

---

# 📚 Altri testi e video

- M. Dawson: *Python Programming for the Absolute Beginner* 3e, Course Tech. 2010, 978-1435455009 (~25€, 450pp.)
- MIT: *Intro to CS and Programming in Python* - [Video delle lezioni](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/index.htm)
- Documentazione: [docs.python.org](https://docs.python.org/3/)

---

![small](images/dev/python-logo.svg)
# 💾 Strumenti software

- Strumenti open source, multi-piattaforma
    - [**Thonny**](https://www.thonny.org/), ambiente Python, *battery included*
    - Playground [Python](https://tomamic.github.io/pyodide/)
- Opzionalmente
    - [F-Droid](https://f-droid.org/), [*Termux*](https://wiki.termux.com/) e [Ubuntu](https://udroid-rc.gitbook.io/) su Android
    - [*Ubuntu*](http://releases.ubuntu.com/22.04/) in una [VirtualBox](https://www.virtualbox.org/wiki/Downloads), [WikiHow](https://www.wikihow.com/Install-Ubuntu-on-VirtualBox)

``` sh
## Ubuntu, Debian etc.
sudo apt install python3-pip python3-tk
pip3 install thonny pygame
```

---

# ℹ️ Simboli sulle slide

- ⭐️ Concetto fondamentale
- 🧪 Esperimento pratico
- 🔬 Approfondimento e analisi
- 💡️ Nuova idea, buona pratica
- ⚠️ Attenzione, errore comune
- 🥷 Concetto avanzato od opzionale
- 🏊️ Esercizio per lo studente

---

# 🏊️ Esempi di progetti

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

![](images/misc/minesweeper.png)
# Campo minato

- N <b>mine nascoste</b> a caso in tabella rettangolare
- Ad ogni turno, l'utente scopre una casella:
    - Mina → <i>partita persa</i>
    - Solo N caselle coperte (con mine) → <i>partita vinta</i>
    - Altrimenti, <i>conteggio mine</i> nelle 8 caselle adiacenti

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

![](images/misc/othello.png)
# Othello

- In due, bianco e nero
    - All'inizio: 2 coppie di pedine al centro, incrociate
    - A turno, ciascun giocatore aggiunge una pedina
    - È obbligatorio catturare, se non ci sono mosse si passa il turno
- Se viene *circondata una fila* di pedine avversarie, queste cambiano tutte colore
- Vince chi alla fine ha più pedine

---

![](images/misc/pong.png)
# Pong

- Campo rettangolare
- **Pallina**: si muove a 45°, rimbalza su bordi lunghi e barrette
- **Barrette**: si muovono solo verticalmente
- **Punti**: segnati quando la pallina esce dal campo

---

![](images/misc/frogger.png)
# Frogger

- **Rana** guidata dall'utente, salta in 4 direzioni: ↕ ↔
- Deve attraversare la strada, senza essere investita dai **camion**
- Deve attraversare il fiume, saltando sui **tronchi**

---

![](images/misc/invaders.png)
# Space invaders

- **Cannone**: l'utente lo sposta in orizzontale; spara verso l'alto, contro gli alieni
- **Alieni**: si muovono tutti nella stessa direzione; percorso a serpentina; sparano verso il basso, contro il cannone
- **Muri**: si ditruggono lentamente dove colpiti

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

![](images/misc/donkey-kong.png)
# Donkey Kong

- Maro può camminare sulle piattaforme
- Può saltare, se è su una piattaforma
- Deve evitare i barili
- Cade quando esce dalla piattaforma

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

