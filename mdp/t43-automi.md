![](images/comp/walle-eve.png)
# Automi
## Introduzione all'informatica <br> Michele Tomaiuolo @ Ingegneria UniPR

---

![](images/comp/executor.svg) ![](images/comp/automata-theory.svg) ![](images/hist/1942-human-computers.jpg)
# 💡️ Automi e calcolo

- **Automa**: *macchina astratta*
- Realizza un certo algoritmo, secondo un *modello di calcolo*
- Algoritmo definito nel “linguaggio macchina” dell'automa
- Riceve ed elabora dei dati di ingresso
- Vincoli di finitezza
    - Numero finito di componenti
    - Cardinalità finita degli alfabeti I/O

> In 1942 the computer was not a thing, it was a person.

[Top Secret Rosies The Female Computers of WWII Documentary](https://youtu.be/IXtb4fA65qE?t=450)

---

![](images/comp/c3po.png) ... 6M di linguaggi
# ⭐ Riconoscimento di linguaggi

- Problema dell'*appartenenza*, o *membership*
    - Data stringa `$x$`, stabilire se `$x \in L$`
- L. di **tipo 3**: riconosciuti da **FSM**, *macchine a stati finiti*
    - Es.: `$\{a^n b : n \geq 0\}$`, da `$S \to aS|b$`
- L. **tipo 2**: **NPDA**, *automi a pila non determin.*
    - Es.: `$\{a^n b^n : n \geq 1\}$` da `$S \to aSb|ab$`
- L. **tipo 1**: **LBA**, *automi limitati linearmente*
    - Es.: `$\{a^n b^n c^n : n \geq 1\}$`
- L. **tipo 0**: **TM**, *macchine di Turing*
    - Però semi-decidibili: se `$x \notin L$`, il processo può non terminare!

---

# Macchina a stati (FSM)

---

![large](images/comp/pacman.svg) Stati del fantasma nel Pac-Man
# 💡️ Giochi come FSM

- Stato interno di ogni personaggio
- Comportamenti diversi in stati diversi
- Eventi determinano transizioni

![small](images/comp/apple-fsm-jump.png)

>

[developer.apple.com](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/StateMachine.html)

---

# 💡️ Stati della GUI

![large](images/comp/apple-fsm-gui.png)

---

# 💡️ Macchina a stati finiti (FSM)

- Finite State Autómaton, o Machine (FSA, o FSM)
- `$M := <\Sigma, Q, \delta, q_0, F>$`
- `$\Sigma := \{\sigma_1,\dots,\sigma_m\}$`: alfabeto di input
- `$Q := \{q_0, \dots, q_n\}$`: insieme finito non vuoto di stati
- `$F \subseteq Q$`: insieme di stati finali
- `$q_0 \in Q$`: stato iniziale
- `$\delta: Q \times \Sigma \to Q$`: funzione di transizione
    - In base allo *stato* attuale…
    - e al simbolo di *input* attuale…
    - → determina lo *stato* successivo

>

[Computer Science Field Guide (NZ)](https://www.csfieldguide.org.nz/en/chapters/formal-languages/finite-state-automata/)

---

![](images/comp/fsm4.svg) Stringhe con <br> `a` in numero pari e <br> `b` in numero pari
# 🧪 Esempio di FSM

- Rappresentazione della funzione di transizione
    - *Tabella di transizione*
    - *Diagramma degli stati*
- `$M := <\{a, b\}, \{q_0,q_1,q_2,q_3\}, \delta, q_0, \{q_0\}>$`

$\delta$      | $a$   | $b$
--------------|-------|---
**$\to q_0$** | $q_1$ | $q_2$
$q_1$         | $q_0$ | $q_3$
$q_2$         | $q_3$ | $q_0$
$q_3$         | $q_2$ | $q_1$

>

<https://tomamic.github.io/pyodide//?p41_fsm.py>

---

![](images/comp/fsm4.svg) <br> `$S \to aA | bB | \varepsilon \\ A \to aS | bC \\ B \to aC | bS \\ C \to aB | bA$`
# 💡️ Linguaggio riconosciuto da FSM

- F. transiz. estesa a stringhe: `$\delta: Q \times \Sigma^\star \to Q$`
    - `$\delta(q_i, \varepsilon) := q_i, \forall q_j \in Q$`
    - `$\delta(q_i, \sigma_j x) := \delta(\delta(q_i, \sigma_j), x) \\ \forall \sigma_j \in \Sigma, \forall x \in \Sigma^\star$`
- Linguaggio riconosciuto da una macchina `M`:
    - `$L(M) = \{x \in \Sigma^\star : \delta(q_0, x) \in F\}$`
- FSM riconoscono tutti e soli i *linguaggi REG*
- Grammatica equiv. a FSM di esempio:
    - A ogni stato corrisponde un simbolo non terminale <br>
    `$q_0: S, q_1: A, q_2: B, q_3: C$`
    - *$\varepsilon$-prod* per stati finali

---

![](images/comp/fsm-trap.svg)
# Stato trappola

- Se la sequenza di input è `$x := ababa…$`
    - L'automa alterna gli stati `$q_0, q_1$`
- Altrimenti, rimane *intrappolato* nello stato `$q_2$`
    - Da lì, nessun input potrà essere accettato
- Stato trappola usato spesso per condizioni di errore
    - Ma spesso resta *implicito*
    - Simbolo di input non previsto → `$x$` rifiutata

---

![large](images/comp/nfa-compute.svg)
# 💡️ FSM non deterministica

- `$M := <\Sigma, Q, \delta, q_0, F>$`
- `$Σ := \{\sigma_1, \dots, \sigma_m\}$`: alfabeto di input
- `$Q := \{q_0, \dots, q_n\}$`: insieme finito non vuoto di stati
- `$F \subseteq Q$`: insieme di stati finali accettanti
- `$q_0 \in Q$`: stato iniziale
- `$\delta: Q \times \Sigma \to P(Q)$`: funz. transizione<br>Determina l'*insieme* di stati successivi
    - `$P(Q)$`: insieme delle parti di `$Q$`
    - Insieme di tutti i possibili sottoins. di `$Q$`

---

![large](images/comp/nfa-tree.svg)
# 💡️ Computazione <br> non deterministica

![small](images/comp/nfa.svg)

- Talvolta un simbolo può attivare più transizioni
- In tal caso, l'automa sviluppa *tutti* i possibili rami di computazione
- La stringa è accettata se *almeno una* delle computazioni termina in uno stato finale accettante

---

![](images/comp/nfsm.svg) ![](images/comp/nfsm-eq.svg) Accetta stringhe <br> terminanti con b
# 🧪 Esempio di NFSM

- `$M := <\{a, b\}, \{q_0, q_1\}, \delta, q_0, \{q_1\}>$`

$δ$   | $a$           | $b$
------|---------------|----
$q_0$ | `$\{q_0\}$`   | `$\{q_0, q_1\}$`
$q_1$ | $\varnothing$ | $\varnothing$

- `$\{q_0\} \leftrightarrow q'_0, \{q_0, q_1\} \leftrightarrow q'_1$`

$\delta'$        | $a$        | $b$
-----------------|------------|----
`$\{q_0\}$`      | `$\{q_0\}$` | `$\{q_0, q_1\}$`
`$\{q_0, q_1\}$` | `$\{q_0\}$` | `$\{q_0, q_1\}$`

- `$M' := <\{a, b\}, \{q'_0, q'_1\}, δ', q'_0, \{q'_1\}>$`

>

<https://tomamic.github.io/pyodide//?p41_nfsm.py>

---

# ⭐ Equivalenza FSM / NFSM

- Per ogni stato / ingresso, definiti più stati successivi
- *Non-determinismo*
    - Calcolo = albero di computazioni autonome
    - Anziché traiettoria in uno spazio di stati
- Nel caso di FSM, non-determinismo non aggiunge potere computazionale
- FSM / NFSM: formalismi **equivalenti**
    - FSM è un caso particolare di NFSM
    - Viceversa, ogni elemento di `$P(Q)$` di NFSM diventa uno stato di FSM
    - `$P(Q)$` contiene `$2^n$` (`$n=|Q|$`) elementi: FSM può avere num. stati **esponenzialmente maggiore** dell'equivalente NFSM

>

<http://www.cs.odu.edu/~toida/nerzic/390teched/regular/fa/nfa-2-dfa.html>

---

# Automa a pila (PDA)

---

![](images/comp/pda.svg)
# ⭐ Automa a pila (PDA)

- Pushdown Autómaton (PDA)
- Simile a FSM, ma dotato di memoria infinita, organizzata a pila
    - Si può accedere solo alla cima della pila
    - Lettura del simbolo in cima
    - Sostituzione simbolo in cima con nuova stringa (anche ε)
- In forma non-deterministica, permette di riconoscere i *linguaggi non contestuali*
- In forma deterministica, riconosce solo i *linguaggi non contestuali deterministici* (sottoclasse)
    - Base dei comuni linguaggi di programmazione

---

# 💡️ Definizione di PDA

- `$M := <\Sigma, \Gamma, z_0, Q, q_0, F, \delta>$`
- `$\Sigma := \{\sigma_1, \dots, \sigma_n\}$`: alfabeto di input
- `$\Gamma := \{z_0, \dots, z_m\}$`: simboli della pila
- `$z_0 \in \Gamma$`: simbolo di pila iniziale
- `$Q := \{q_0, \dots, q_k\}$`: insieme finito non vuoto di stati
- `$q_0 \in Q$`: stato iniziale; `$F \subseteq Q$`: insieme di stati finali
- `$\delta: Q \times \Sigma \times \Gamma \to Q \times \Gamma^\star$`: funzione di transizione
    - In base a stato, simbolo di input, simbolo in cima a pila …
    - Determina stato successivo e simboli inseriti nella pila
    - Per rimuovere il simbolo in cima alla pila, si scrive `$\varepsilon$`

---

![](images/comp/pda3.svg)
# 🧪 Esempio di PDA

- PDA che riconosce `$L:=\{a^n b^n, n \geq 1\}$`
- `$M := <\{a, b\}, \{Z, Y, A\}, Z, Q, q_0, \{q_2\}, \delta>$`
- `$Q := \{q_0, q_1, q_2\}$`
    - `$q_0$`: contare le `$a$` (impilando `$A$` su `$Y$`)
    - `$q_1$`: contare le `$b$` (rimuovendo `$A$`)
    - `$q_2$`: stato accettante

$δ$   | $a,Z$   | $a,Y$    | $a,A$    | $b,Z$ | $b,Y$             | $b,A$
------|---------|----------|----------|-------|-------------------|------
$q_0$ | $Y,q_0$ | $AY,q_0$ | $AA,q_0$ |       | $\varepsilon,q_2$ | $\varepsilon,q_1$
$q_1$ |         |          |          |       | $\varepsilon,q_2$ | $\varepsilon,q_1$
$q_2$ |         |          |          |       |                   |

>

<https://tomamic.github.io/pyodide//?p41_pda.py>

---

![](images/comp/nfa-compute.svg)
# ⭐ PDA non deterministico (NPDA)

- `$A := <\Sigma, \Gamma, z_0, Q, q_0, F, \delta_n>$`
- `$\delta_n: Q \times \Sigma_\varepsilon \times \Gamma \to P(Q \times \Gamma^\star)$`: funzione di transizione, determina gli stati e i simboli di pila successivi
- Es. `$\delta(p, a, A) := \{(q, BA), (r, \varepsilon)\}$`, <br> due transizioni:
    - ➊ Simbolo `$A$` in cima alla pila sostituito dalla stringa di caratteri `$BA$`, nuovo stato interno `$q$`
    - ➋ Simbolo `$A$` in cima alla rimosso (`$\to\varepsilon$`), nuovo stato interno `$r$`
- ⭐ NPDA: **maggiore potere computazionale** di PDA
    - `$L = \{a^n b^n\} \cup \{a^n b^{2n}\},  n \geq 0$`
    - `$S \to A|B, A \to aAb|\varepsilon, B \to aBbb|\varepsilon$`

---

# Macchina di Turing (TM)

---

![](images/hist/turing.jpg)
# 💡️ Macchina di Turing (TM)

- Automa con testina di scrittura/lettura su nastro bidirezionale “illimitato”
- A ogni passo:
    - Si trova in un certo stato
    - Legge un simbolo dal nastro
- In base alla f. di transizione (deterministica):
    - Scrive un simbolo sul nastro
    - Sposta la testina di una posizione
    - Cambia lo stato
- Può simulare ogni altro modello di calcolo noto!

>

[A. Turing (1936). “On Computable Numbers, with an Application to the Entscheidungsproblem.” Proceedings of the London Mathematical Society, s2-42 (1): 230–265.](https://www.dropbox.com/s/w5zmu8s0vhuo75q/Turing_Paper_1936.pdf?dl=1)

---

![](images/comp/tm.png)
# 💡️ TM deterministica

- `$M := <\Sigma, Q, q_0, F, \delta>$`
- `$\Sigma := \{σ_1, ..., σ_n, \$\}$`: alfabeto del nastro
    - Con *blank*, **`$\$$`**
- `$Q := \{q_0, \dots, q_m\}$`: insieme finito di stati
- `$q_0 \in Q$`: stato iniziale
- `$F \subseteq Q$`: insieme di stati finali
- `$\delta: Q \times \Sigma → Q \times \Sigma \times \{L, R, N\}$`: f. di transizione
    - Determina la configurazione successiva: <br> stato; simbolo scritto su nastro; spostamento della testina

---

![large](images/comp/tm-aaabbbccc.svg)
# 🧪 TM per aⁿbⁿcⁿ

- ① Marca la `$a$` con `$X$`
    - Scorri a destra fino alla prima `$b$`
    - Superando le `$a$` e le `$Y$`
- ② Marca la `$b$` con `$Y$`
    - Scorri a destra fino alla prima `$c$`
    - Superando le `$b$` e le `$Z$`
- ③ Marca la `$c$` con `$Z$`
- ④ Scorri a sinistra fino alla prima `$X$`
    - Superando le `$Z$`, `$b$`, `$Y$`, `$a$`
- ⑤…⑨ Ripetizioni di ①…④
- ⑩ Simbolo `$Y$` a dx di `$X$`: `$a$` finite
    - Scorri a destra fino a `$\$$`
    - Superando `$Y$` e `$Z$`

---

# 🧪 Diagramma per aⁿbⁿcⁿ

![large](images/comp/tm-anbncn.png)

---

![](images/comp/nfa-compute.svg)
# ⭐ TM non deterministica (NTM)

- `$M := <\Sigma, Q, q_0, F, \delta_n>$`
- `$δₙ: Q \times \Sigma \to P(Q \times \Sigma \times \{L, R, N\})$`: f. di transizione
    - Determina una o più configurazioni successive
- *Grado di non-determinismo* `$n$`
    - Max transizioni alternative
    - Max figli di un nodo in albero di computazione
- ⭐ NTM: **stessa potenza computazionale di TM**
    - Data `$M$` NTM, `$\exists M'$` TM equivalente (`$M'$` simula `$M$`)
- ⭐ Ma NTM **più efficiente** (finora…)
    - `$k$` passi di `$M$` ⇒ `$k'$` passi di `M'`, `$k' \propto k n^k$`
    - `$M'$` richiede tempo esponenzialmente maggiore

---

# ⭐ Automa limitato linearmente (LBA)

- NTM con limite sulla dimensione della memoria
- Il nastro è limitato alle sole celle contenti l'input
- LBA riconoscono tutti e soli i *linguaggi contestuali*, di tipo 1

![](images/comp/lba.svg)

---

# 💡 Macchina di Turing universale (UTM)

- UTM realizza la computazione:
    - `$(q'_0, D_m \#x) \to^\star (\alpha, q'_h, \beta)$` …
    - `$q'_0$`, stato iniziale; `$q'_h$`, stato finale
    - `$D_m\#x$`: input
    - (`$D_m$`: descrizione della f. di transizione di `$M$`)
- `$\iff M$` realizza la computazione: `$(q_0, x) \to^\star (\alpha, q_h, \beta)$`
    - `$q_0$`, stato iniziale; `$q_h$`, stato finale; `$x$`, input
- Regole di transizione di `$M$` → Sequenza di quintuple
    - `$D_m := d_1\#\#d_2\#\# \dots \#\#d_n$`
    - `$q_i\#\sigma_j\#q_h\#\sigma_k\#t_l \iff \delta(q_i, \sigma_j) = (q_h, σ_k, t_l)$`
- Intuizione di Turing: *il programma è un dato*
    - F. di transizione su nastro

---

# 💡 Funzionamento della UTM

- UTM **interpreta** un arbitrario programma su nastro
    - Dato lo stesso input, UTM produce lo stesso output di `$M$`
    - Per ogni simbolo letto in `$x$` (input di `$M$`), scorre la lista di regole, per scegliere la giusta transizione

![](images/comp/utm.svg)

---

# Calcolabilità

---

![](images/hist/church.jpg)
# 💡️ Tesi di Church-Turing

- $\forall$ problema “effettivamente” calcolabile, $\exists$ TM per calcolarlo
    - TM: finora *modello di calcolo più potente*
    - Assieme a funzioni ricorsive, lambda-calcolo, macchine a registri…
- Ma esistono **problemi irrisolvibili** (nel caso generale)
    - ⚠️ Attenzione: non si dice niente sulla singola istanza!
- *Teorema di incompletezza di Gödel*
    - $\forall$ formalizzazione della matematica che assiomatizza $\mathbb{N}$
    - $\Rightarrow \exists$ proposizione né dimostrabile né confutabile

---

![](images/comp/pinocchio-paradox.png)
# 💡️ Paradossi classici

- Paradosso *del mentitore*
    - Questa frase è falsa
    - Epimenide di Creta afferma: “I cretesi sono bugiardi”
- Paradosso *del barbiere*
    - Se un barbiere sbarba tutti e soli coloro che non si sbarbano da soli, chi sbarba il barbiere?
- Paradosso *di Russell*
    - Insiemi di insiemi; supponiamo che un insieme possa contenere se stesso
    - Sia T l'insieme di tutti gli insiemi che non contengono se stessi; possiamo stabilire se T contiene T?

---

# 💡️ Problema della terminazione

- Predicato della terminazione, **non calcolabile** (`$∀M ∀x$`)
    - `$h(D_m,x)=1$`, se `$M$` con input `$x$` termina
    - `$h(D_m,x)=0$`, se `$M$` con input `$x$` non termina
- Costruiamo *per assurdo* `$H$`, TM che calcola `$h$`, `$∀M ∀x$`
- Costruiamo quindi `$K$`
    - Se `$h(D_m,D_m)=0 \implies k(D_m)=0$`
    - Altrimenti, indefinito (`$K$` cicla all'infinito, se `$h=1$`)
- Ma è assurdo: `$H$` deve funzionare `$\forall M$`, anche `$M=K$`
    - Se `$k(Dₖ)$` definita ⇒ `$h(D_k,D_k)=1 \implies k(D_k)$` indefinita
    - Se `$k(Dₖ)$` indefinita ⇒ `$h(D_k,D_k)=0 \implies k(D_k)=0$` definita

>

`M`: macchina di Turing; `Dₘ`: rappresentazione di `M` come stringa

---

# Più informalmente...

- Funz. `k` definita in `paradox.py` (Python è *Turing completo*)

``` py
from absurd import halt  # 😲
def k(file):
    if halt(file, file):
        while True: pass
    else:
        return False
k("paradox.py")  # this very file!
```

- Altri problemi indecidibili (corollari)
    - Correttezza: il programma calcola la funzione desiderata?
    - Chiamata: una procedura (o istruzione) sarà eseguita?
    - Equivalenza, ambiguità di grammatiche CF …
