![](images/dev/bug-feature.png)
# Sviluppo del software
## Introduzione alla programmazione

---

![large](images/dev/waterfall-model.svg) Waterfall model
# 🌱 Ciclo di vita a cascata

- **Analisi**
    - Modello, requisiti, fattibilità
- **Progetto e implementazione**
    - Componenti architetturali... dettaglio classi
- **Collaudo**
    - Rispetto requisiti, qualità sw
- **Rilascio e manutenzione**
    - 40%-80% del costo totale (DoD, HP)
    - Non noti o non colti correttamente i requisiti
    - Cambiano le condizioni operative …

>

[Winston W. Royce, 1970](https://univpr-my.sharepoint.com/:b:/g/personal/michele_tomaiuolo_unipr_it/EQfW_uuaEK1CqznE8JhlhPYB_0to41SqFooYximIZLitxw?e=Znuk0A) - [Robert L. Glass, 2001](http://www.eng.auburn.edu/~kchang/comp6710/readings/Forgotten_Fundamentals_IEEE_Software_May_2001.pdf)

---

![large](images/dev/rup-cycle.png)
# 🌱 Evoluzione di un software

- Evoluzione ineliminabile per molti sistemi
    - Prestazioni, qualità, funzionalità (manutenzione *perfettiva*, ~60%)
    - Anomalie ed errori (manutenzione *correttiva*, ~20%)
    - Mutamenti dell’ambiente (manutenzione *adattativa*, ~20%)
- Sviluppo iterativo e metodologie agili
    - Rilascio frequente e incrementale
    - <http://agilemanifesto.org/>

---

![large](images/dev/programmer.svg)
# 🌱 Qualità del software

- Le qualità su cui si basa la valutazione di un sistema software possono essere:
    - **Interne**, riguardano le caratteristiche legate al **processo** di sviluppo e non sono direttamente visibili agli utenti
    - **Esterne**, riguardano le funzionalità fornite dal **prodotto** sw e sono direttamente visibili agli utenti
- Le categorie sono legate:
    - *Product quality is process quality*

---

# ⭐ Qualità esterne

- **Correttezza e affidabilità**: il sistema rispetta le specifiche, in maniera assoluta o con una certa probabilità
- **Robustezza**: il sistema si comporta in modo ragionevole anche fuori dalle specifiche
- **Efficienza**: usa bene le risorse di calcolo
- **Scalabilità**: migliori prestazioni con più risorse
- **Sicurezza**: riservatezza, autenticazione, autorizzazione, accounting
- **Usabilità**: interfaccia utente permette di interagire in modo naturale

---

# ⭐ Qualità interne

- **Verificabilità**: sistema basato su modello formale
- **Riusabilità**: parti per costruire nuovi sistemi
- **Manutenibilità**: riparabilità, evolvibilità (nuove specifiche), adattabilità (cambiamenti ambiente)
- **Interoperabilità**: capacità di co-operare con altri sistemi, anche di altri produttori
- **Portabilità**: adatto a più piattaforme hw/sw
- **Comprensibilità**: codice leggibile, documentato
- **Modularità**: interazione tra componenti coesi

---

![](images/dev/gearwheel.png)
# 🌱 Specifiche

- Rispetto a cosa valutiamo **correttezza** o **affidabilità** di un programma?
- Idea del programmatore
    - Non formulata, non documentata
    - Incompleta, mutevole, facilmente dimenticata
- Specifiche (formali o informali)
    - Formulate, scritte, studiate e condivise <br> → Parte del progetto e del programma
    - Spec. assiomatiche: espressioni logiche o asserzioni <br> → **Precondizioni, postcondizioni e invarianti**

---

# 🌱 Pre- e post-condizioni

- **Precondizioni**
    - Stabiliscono se è possibile chiamare un metodo
    - Prerequisiti per l’attivazione
- **Postcondizioni**
    - Stabiliscono se il metodo restituisce il valore atteso, cioè se produce l’effetto desiderato
    - … In relazione ai parametri (che soddisfano le precondizioni)
    - Definiscono il significato del metodo
- **Divisione delle responsabilità** tra moduli
    - Errore del codice *chiamante* (*client*) se precondizioni non soddisfatte
    - Errore del codice *chiamato* (*server*), se postcondizioni non soddisfatte

---

# 🌱 Responsabilità e contratti

- **Precondizioni + postcondizioni = contratto**
    - … tra modulo chiamante e modulo chiamato
- Infrazione di un contratto: problema serio
    - Errore rispetto alle specifiche
    - Eccezione e/o terminazione
- No **divisione responsabilità** → sovrapposizioni
    - Tutti i moduli assumono molte responsabilità
    - *Programmazione difensiva*: tutte le parti del programma controllano tutte le condizioni
    - Grosso programma → ancora più grosso

---

# 🛠️ Esempio di contratto

``` py
def sqrt(x: float) -> float
```

- Precondizioni: `x >= 0`
- Postcondizioni: `abs(result * result - x) <= 0.00001`
- Codice chiamante
    - Obblighi: deve passare un numero non negativo
    - Benefici: riceve la radice del numero
- Codice chiamato
    - Obblighi: restituisce un numero `r` tale che `r * r ≃ x`
    - Benefici: può assumere che `x` non è negativo

---

![](images/qt/fifteen-puzzle.jpg)
# 🛠️ Invariante di classe

- Vincolo sullo stato interno di un oggetto
    - Per tutto il ciclo di vita, per ogni stato *stabile*
    - Soddisfatto dal costruttore e dai metodi pubblici
    - Ma non per forza dai metodi privati
- “*Criterio di sanità*” dell’oggetto
    - Rafforzamento di pre- e post-condizioni
- Es.: classe per il *Gioco del Quindici*
    - Posizione `x` della cella vuota: sempre tra `0` e `cols-1`
    - Posizione `y` della cella vuota: sempre tra `0` e `rows-1`
    - In quella posizione è sempre memorizzato il valore `0`

---

# ⭐ Ereditarietà e contratti

![](images/dev/contract-inherit.svg)

- ❓ *Che relazione c’è tra le asserzioni di una classe e quelle dei suoi discendenti?*

---

# ⭐ Principio di sostituibilità

- Polimorfismo: possibile esecuzione metodo di una sottoclasse, anziché della classe base
    - I metodi delle sottoclassi possono ridefinire i metodi delle classi base... ma non arbitrariamente
- I contratti della sottoclasse devono *rispettare i contratti della classe base* (“sottocontratti”)
    - *Precondizioni* : non devono essere più forti
    - *Postcondizioni* : non devono essere più deboli
    - *Invarianti di classe* : non devono essere più deboli

> Require no more, promise no less

---

# 💡 Design by contract

- Paradigma proposto nel linguaggio *Eiffel* (Betrand *Meyer*, 1986)
- Uso di asserzioni in varie fasi di sviluppo
    - *Progetto* : approccio pragmatico alle specifiche
    - *Implementazione* : guida per la programmazione
    - *Documentazione* : interfacce con info aggiuntive
    - *Collaudo* : DbC delimita i casi da testare (per affidabilità)
    - *Manutenzione* : DbC fa emergere prima gli errori
    - *Uso finale* : sollevate eccezioni se violazioni

---

# 🛠️ Asserzioni Python

- Espressioni booleane, simili a predicati matematici
- Esprimono proprietà semantiche di classi e metodi
- Utili per collaudo e debugging, ma anche documentazione
    - Esprimono l'intenzione del programmatore
- Violazione → **AssertionError**
    - Normalmente: *abort*, terminazione programma

``` py
assert age > 0
```

---

# 🛠️ Asserzioni e contratti

- Asserzioni in genere utili per:
    - Precondizioni, postcondizioni, invarianti di classe
    - Invarianti interne e di controllo del flusso
- Argomenti di metodi pubblici sbagliati → eccezione
    - `ValueError` o `TypeError`
- Di solito, asserzioni usate per debug, ma disabilitate in produzione
    - `python -O some_code.py`

---

# 🛠️ Pre- e post-condizioni

``` py
def sqrt(x: float) -> float:
    '''
    Precondition: x >= 0
    Postcondition: abs(result * result - x) <= 0.00001
    '''
    if x < 0:
        raise ValueError("sqrt: arg < 0")

    # ...

    assert abs(result * result - x) <= 0.00001
    return result
```

---

# 🛠️ Eccezioni

- Oltre a parametri sbagliati, varie situazioni inattese
- **try** per gestire separatamente queste situazioni
- In caso di errore in `try`, esecuzione si interrompe subito
- Viene eseguito il blocco `except`

``` py
x = None
while x is None:
    try:
        x = int(input("Please enter a number: "))  # ValueError?
        print("That's fine")
    except:
        print("Oops! That was not a valid number. Try again...")
print("The square is", x ** 2)
```

---

# 🥷 Eccezioni diverse

- In `try` possibili diversi tipi di errori
- Seguito da vari blocchi `except`
- Se manca gestore errore, il programma termina bruscamente

``` py
try:
    x = float(input("Please enter a number: "))  # ValueError?
    y = 1 / x
    print("Inverse: ", y)
except ValueError:
    print("Oops! That was not a valid number.")
except ZeroDivisionError:
    print("Oops! Cannot divide by 0.")
```

---

# Verifica e validazione

---

![large](images/dev/v-model.png)
# 🌱 Verifica e validazione

- Mostrare che il sistema...
    - È conforme alle specifiche
    - Soddisfa i bisogni dell’utente

> Verification: Are we building the product right? <br> Validation: Are we building the right product? <br> *(Barry  Boehm)*

- Comprende revisione e collaudo del sistema
- **Test case**, derivati dalle specifiche

---

![large](images/dev/first-bug.jpg) Report del primo “bug” <br> Gruppo di Grace Hopper
# 🌱 Costo dei bug

- Scovare bug, difficile e frustrante 😫
    - Testing: ~ 20-40% costi di un progetto
    - Tempo e risorse
- B. Boehm: **far emergere** bug in prime fasi dello sviluppo!
    - Se trovare un problema in fase di specifica dei requisiti costa 1$...
    - 5$ in progetto
    - 10$ in programmazione
    - 20$ in unit testing
    - Fino a 200$ dopo consegna
    - Molti errori già in specifica requisiti

>

[nationalgeographic.org](https://www.nationalgeographic.org/thisday/sep9/worlds-first-computer-bug)
–
[newyorker.com](https://www.newyorker.com/magazine/2018/12/10/the-friendship-that-made-google-huge)

---

# 💡 Prove formali

- Dimostrazione matematica di un programma
    - Alternativa (~ accademica) al testing
    - Annotazione del programma con asserzioni matematiche: comportamento atteso
    - Proprietà valide per i vari costrutti del programma
    - Spesso per *linguaggi funzionali* (privi di effetti collaterali)
- Prova che post-condizioni verificate, se:
    - Precondizioni verificate
    - Programma termina
- Dimostrazioni automatiche
    - Se a mano → errori (più che nel programma?)

>

<https://coq.inria.fr/about-coq>

---

# ⭐ Revisione del software

- Analisi del codice da parte di *colleghi* 🧐
    - Per valutarne caratteristiche e funzionalità
- **Code walk-through**
    - Selezione porzioni di codice e valori di input
    - Simulazione su carta comportamento del sistema
- **Code inspection**, più formale e focalizzato
    - Uso di variabili non inizializzate
    - Loop infiniti
    - Letture di porzioni di memoria non allocata
    - Rilascio improprio della memoria

---

# ⭐ Testing

> Le operazioni di testing possono individuare la presenza di errori nel software ma non ne possono dimostrare la correttezza. *(E. Dijkstra)*

> Eseguire un programma con l'intento di trovare errori. *(Glen Myers, The art of Software Testing)*

- Verificare sistema in un insieme abbastanza ampio di casi...
- → plausibile comportamento analogo anche nelle restanti situazioni

---

![large](images/dev/v-model.png)
# ⭐ Classificazione dei test

- Tipi di test
    - **White box** (*in the small*)
    - **Black box** (*in the large*)
- Livelli di test
    - *Unit test*
    - *Integration test*
    - *System test*
- Ripetizione di test
    - *Regression test*

>

<http://people.cs.aau.dk/~normark/oop-csharp/html/notes/test-book.html>

---

# ⭐ Testabilità

- *Qualità* software che facilitano rilevazione errori
    - **Osservabilità** – Disponibili i risultati dei test
    - **Controllabilità** – Possibilità di impostare ingressi e stato del programma prima di eseguire un test
    - **Decomponibilità** – Programma diviso in parti che possono essere testate individualmente
    - **Comprensibilità** – Si capisce il comportamento corretto (desiderato) del programma
- → Sviluppo per testabilità
    - Si possono scrivere i test prima ancora del programma
    - *Test driven development, TDD*

---


# White-box testing

---

# ⭐ White-box testing

- Test basati sulla conoscenza della struttura interna del codice
- Un errore non può essere scoperto se la parte di codice che lo contiene non viene mai eseguita
- **Statement test**
    - Insieme di test T tali che, eseguendo su tutti i casi di T il programma P, ogni istruzione di P venga eseguita almeno una volta (test utopia?)
    - **Branch test** (copertura delle decisioni)
    - **Branch & condition test** (… condizioni)

---

# ⭐ Basic path testing

- Obiettivo: coprire tutte le istruzioni e condizioni (*white box*)
- Scegliere insieme minimo di percorsi per copertura
    - Tracciare diagramma di flusso
    - Astrarre il diagramma in un grafo di flusso
    - Complessità ciclomatica `n` = metrica di test
    - Trovare `n` casi di test che seguono ciascun cammino indipendente
- *Cammino*: sequenza di comandi, da inizio a fine
- *Cammino indipendente*: aggiunge almeno una nuova istruzione rispetto ai cammini già identificati

---

![large](images/dev/flow-chart.png)
# 🛠️ Diagramma di flusso

``` py
def f():
    # entry
    while a:
        x()
        if b:
            if c: y()
            else: z()
            # p
        else:
             v()
             w()
        # q
    # exit: r
```

---

![large](images/dev/flow-graph.png)
# ⭐ Grafo di flusso

- Da diagramma di flusso, piccola astrazione
- **Complessità ciclomatica**
    - Numero di possibili cammini indipendenti
- Dalla teoria dei grafi
    - Numero di nodi predicato + 1, o...
    - Numero di regioni del grafo di flusso <br>&nbsp;
- `A, r`
- `A, X, B, C, Y, p, q… A, r`
- `A, X, B, C, Z, p, q… A, r`
- `A, X, B, V, W, q… A, r`

---


# Black box testing

---

# ⭐ Black box testing

- Sistema = scatola nera; si verificano le corrispondenze di input e output
    - White-box testing: impossibile per grandi sistemi
    - Test case scelti in base alle specifiche dei requisiti
- Desiderata: trovare errori...
    - *Funzionali* : risultati corretti, per dati input di un metodo?
    - *Interfaccia* : dati passati correttamente tra i metodi?
    - *Efficienza* : il metodo è abbastanza veloce?

---

# ⭐ Partizioni d’equivalenza

- Partizionamento ingressi in **classi di equivalenza**
    - Irrealistico testare tutti i possibili ingressi (es. `sqrt`)
    - Ipotesi: sufficiente testare un solo caso per classe
    - Si includono casi limite e valori non validi
    - Precondizioni: riducono il numero di casi di test

``` py
def swap_elements(v: list, i: int, j: int):
    '''
    Exchange element i and j in list v
    v: empty, one element, more elements
    i, j: one or both indexes out of range...
          or both in range: i < j, i > j, i = j
    '''
    # ...
```

---

# 🧪 Testare Ball

- Classi di equivalenza per il movimento
    - Dentro l'arena
    - Contro ciascuno dei bordi
    - Contro ciascuno degli angoli
    - Oltre ciascuno dei bordi
- Test degli urti
    - Contro fantasma
    - Contro tartaruga
    - Contro altra pallina
    - Per ogni personaggio, considerare la posizone rispetto alla pallina <br> alto / basso / destra / sinistra

---

# ⭐ Regression testing

- Scopo: trovare errori di regressione
    - Errori in un programma che prima era corretto, ed è stato modificato di recente
    - Un errore di regressione è un errore che prima non c’era
- Dopo la modifica di una parte `P` nel programma `Q`
    - Testare che la parte `P` funzioni correttamente
    - Testare che l’intero programma `Q` non sia stato danneggiato dalla modifica

---


# Collaudo in Python

---

# 🧪 Come collaudare il codice?

- Usare un *debugger* per valutare espressioni in fase di esecuzione
    - Si può decidere cosa valutare a seconda del flusso di esecuzione e dei valori generati, senza ricompilare
- Istruzioni di *stampa* all'interno del programma
    - Valore di espressioni scritto a console o su file di log
- Entrambi gli stili, scarsamente *automatizzati*
    - Necessità di intervento attivo durante i test
    - Giudizio dei risultati da parte dell'utente
    - Quali valori analizzare? Sono coerenti?
- Scarsamente *componibili*
    - Difficile controllare molte espressioni nel debugger
    - “*Scroll blindness*”: troppe istruzioni di stampa ⇒ codice poco leggibile

---

# 🧪 Libreria unittest

- I test `unittest` non richiedono continuo intervento o giudizio da parte dell'utente
- Facile eseguire molti test assieme, su un certo progetto
- Come definire un test?
    - Creare una sottoclasse di `unittest.TestCase`
    - Scrivere metodi di test, denominati con prefisso `test`
    - Per controllare la validità di una espressione, usare `assertTrue(bool)`

---

# 🧪 Esempio di test

- Controllare che una pallina rimbalzi correttamente all'angolo

``` py
import unittest
from p05_bounce import Ball

class SimpleBallTest(unittest.TestCase):

    def test_corner(self):  # …
        ball = Ball((460, 340))  # dx = 4, dy = 4
        ball.move(arena)  # dx = -4, dy = -4
        ball.move(arena)
        self.assertEqual(ball.pos(), (452, 332))

if __name__ == '__main__':
    unittest.main()
```

>

<https://tomamic.github.io/pyodide/?p06_bouncetest.py>

---

# 🧪 Esecuzione dei test

- Meccanismi per definire i test da eseguire e organizzare i risultati
- Esecuzione di test dalla linea di comando
    - Inclusione dei test di un modulo, di una classe, o metodi di test specifici
    - Semplice forma di *test discovery*, per moduli “`test*.py`”

``` sh
python -m unittest test_module1 test_module2
python -m unittest *test.py
python -m unittest test_module.TestClass
python -m unittest test_module.TestClass.test_method
python -m unittest discover
```

- Annotazione `@unittest.skip("reason for skipping")`
    - Indica al framework di ignorare un certo metodo di test
    - Messaggio per documentare la decisione

---

# 🧪 Test parametrizzati

- Ripetere un test con diversi parametri
    - Un test case per ogni gruppo di parametri?
    - In alcune applicazioni, enorme quantità di test!
- Soluzione semplicistica: test contenente un ciclo
    - A ogni iterazione, preparato un gruppo di parametri diversi
    - Eseguite le istruzioni da testare sui nuovi parametri
    - Problema: il test si blocca al primo errore

---

# 🧪 Test parametrizzato, semplicistico

- Se un test fallisce, tutti i successivi non vengono eseguiti

``` py
class ParamBallTest(unittest.TestCase):

    def test_move(self): # …
        test_values = ( (40, 80, 44, 84),
                        (40, 215, 44, 219),
                        (40, 340, 44, 336),
                        (295, 80, 299, 84),
                        (460, 80, 456, 84) )
        for param in test_values:
            x0, y0, x1, y1 = param
            b = Ball(x0, y0)
            b.move(arena)
            self.assertTrue(b.pos() == (x1, y1))
```

---

# 🧪 Sottotest, Python 3.4

- Eseguiti tutti i sottotest, anche se uno fallisce

``` py
class ParamBallTest(unittest.TestCase):

    def test_move(self):
        test_values = ()  # same values...

        for param in test_values:
            with self.subTest(param=param):
                x0, y0, x1, y1 = param
                b = Ball(x0, y0)
                b.move()
                self.assertTrue(b.pos() == (x1, y1))
```

---

![](images/oop/strawman.png)
# 🧪 Oggetto fantoccio

- *Unit test* : testare *un solo oggetto* alla volta
- Se serve qualche altro oggetto, si crea un **mock**
- Fantoccio: metodi con risposte predefinite

``` py
class TurtleTest(TestCase):
    def test_collide_ball(self):
        arena = Mock()  # from unittest.mock
        ball = Mock(spec=Ball)  # to fool isinstance
        arena.size.return_value = (480, 360)
        arena.current_keys.return_value = []
        arena.collisions.return_value = [ball]
        turtle = TurtleHero((230, 170))
        turtle.move(arena)  # hit
        turtle.move(arena)  # no effect
        self.assertEqual(turtle.lives(), 2)
```

>

<https://tomamic.github.io/pyodide/?p06_bouncetest.py>

---

# 🥷 Controllare le eccezioni

- Mestiere del programmatore
    - Codice che completa correttamente l'esecuzione nei casi normali...
    - Ma che anche in situazioni eccezionali mostra il comportamento atteso
- Come verificare che una eccezione attesa sia effettivamente sollevata?
    - Usare il metodo `assertRaises` direttamente, passando una funzione e i parametri
    - Oppure creare un *contesto* con `with`
- Esempio: `sqrt` solleva effettivamente una eccezione attesa?

``` py
def test_sqrt_domain(self):
    with self.assertRaises(ValueError):
        sq = math.sqrt(-1)
```

---

# 🥷 Fixture

- Due o più test operano su insiemi di oggetti uguali o simili
    - Questa configurazione iniziale comune si definisce *fixture*
- Se ci sono diversi test con una fixture comune...
    - Aggiungere dei campi per le varie parti della fixture
    - Inizializzare questi campi, nel metodo `setUp`
    - Liberare eventuali risorse allocate, nel metodo `tearDown`
- Una volta creata la fixture, può essere usata da tutti i test case
    - Aggiungere metodi di test alla classe
    - `setUp` e `tearDown` eseguiti prima e dopo ogni test

---

# 🥷 Esempio di fixture

- Numerosi metodi di test che operano su stessi dati iniziali
    - Esempio, una configurazione di palline in posizioni predefinite

``` py
class SimpleBallTest(unittest.TestCase):

    def setUp(self):
        self.b1 = Ball((80, 40))
        self.b2 = Ball((40, 80))
        self.b3 = Ball((120, 20))
```

---

# 🥷 Test suite

- Meccanismo per *raggruppare* logicamente dei test ed *eseguirli assieme*
- La classe `TestSuite` rappresenta una test suite
    - Lista di classi di test aggiunte con il metodo `addTest`
- La classe `TestRunner` rappresenta un esecutore di test
    - Per la console, si usa `TextTestRunner`, già inclusa nel framework

``` py
suite = unittest.TestSuite()
suite.addTest(SimpleBallTest())
runner = unittest.TextTestRunner()
runner.run(suit)
```
