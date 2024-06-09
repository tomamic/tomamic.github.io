![](images/algo/rubik-cube.png)
# Basi
## Introduzione alla programmazione

---

# Problemi e algoritmi

---

![](images/hist/polya.jpg)
# 💡️ Problem solving

- George Polya, [“How to solve it”](https://www.dropbox.com/s/86ua0v7mbr6tkgm/Polya_How-to-solve-it.pdf?dl=1), 1945
- Soluzione di problemi (matematici): processo raramente lineare

> Esempio. Trovare la diagonale di un parallelepipedo rettangolo, di cui sono note lunghezza, larghezza e altezza. *(Polya, pag. 23)*

---

![](images/dev/problem-solving.svg) ![](images/algo/space-diagonal.svg)
# 💡 Analisi del problema

- **➊ See.** Capire il problema
    - Quali dati, incognite, condizioni?
    - Figure, notazione… *modello*

> Bisognerebbe rendere tutto il più semplice possibile, ma non troppo semplice. *(A. Einstein)*

> Per ogni problema complesso c'è sempre una soluzione chiara, semplice… e sbagliata! *(H.L. Mencken)*

Ad esempio, per il calcolo della diagonale di un parallelepipedo, <br> una buona figura può dare suggerimenti importanti

---

![](images/dev/problem-solving.svg)
# 💡 Dal problema alla soluzione

- **➋ Plan.** Elaborare un progetto
    - Mettere in relazione dati e incognite
    - Riduzione, analogia, divide et impera, composizione, astrazione… *Pensiero computazionale*
    - Cominciare a risolvere un problema *più semplice*
- **➌ Do.** Implementare il progetto
    - Realizzare il sistema da sperimentare

> Se non riesci a risolvere un problema, ce ne sarà uno più facile che puoi risolvere: trovalo. *(G. Polya)*

> [La risposta è dentro di te… (Quelo)](https://www.youtube.com/watch?v=WGQ7JZRZ65M)

---

![](images/dev/problem-solving.svg) ![](images/hist/david-michelangelo.jpg) David di Michelangelo
# 💡 … E ritorno

- **➍ Check.** Controllare la soluzione
    - Corretta? Ottenibile in altro modo?
    - Metodo utile per altri problemi?

> Vi scrivo una lunga lettera perché non ho tempo di scriverne una breve. *(Voltaire)*

> La perfezione si raggiunge non quando non c'è più niente da aggiungere, ma quando non c'è più niente da togliere. *(De Saint-Exupéry)*

> La scultura è quella che si fa per forza di levare. *(Michelangelo)*

Una soluzione più breve e chiara si ottiene dopo più iterazioni

---

![large](images/algo/origami.svg) Gli origami sono algoritmi
# 💡️ Elementi di un algoritmo

- 🤖️ *Algoritmo*: procedimento che risolve un determinato problema attraverso un numero finito di passi elementari (al-Khwarizmi, ~800)
- **Dati**: iniziali (istanza problema), intermedi, finali (soluzione)
- **Passi** elementari: azioni atomiche non scomponibili in azioni più semplici
- **Processo**, o anche esecuzione: sequenza ordinata di passi
- *Proprietà*: finitezza, non ambiguità, realizzabilità, efficienza…

>

<https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi>

---

![](images/algo/spaghetti-flowchart.svg)
# 💡️ Diagramma di flusso

- **Flow-chart**: *grafo orientato*, nodi + archi
    - Passi di un algoritmo + loro sequenza
- Rappresentazione *grafica* anzichè verbale
    - Più efficace, meno ambigua
- Tre tipi di nodi
    - I/O: lettura e scrittura dati
    - Operazioni aritmetico-logiche
    - Controllo del flusso di esecuzione

![small](images/algo/nodes.svg)

---

![](images/algo/recipe.png)
# ⭐️ Programmazione strutturata

![](images/algo/structures.svg)

> Si può implementare qualunque algoritmo con queste sole strutture *(Böhm-Jacopini, 1966)*

> Goto considered harmful *(Dijkstra, 1968)*

- ❗ Strutture con: 1 ingresso, 1 uscita
- 🧑‍🍳 Ricette: algoritmi quotidiani, con `if` e `while`
    - “Se non c'è il lievito, usare due cucchiaini di bicarbonato”
    - “Battere gli albumi finché non montano”


---

# 🧪 Programmazione a blocchi

![](images/algo/blockly.png)

>

<https://blockly.games/maze?lang=it> — Problemi 3, 4, 6, 7, 9
