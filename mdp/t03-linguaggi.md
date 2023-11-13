
![](images/comp/attack.svg)
# Linguaggi formali
## Introduzione all'informatica <br> Michele Tomaiuolo @ Ingegneria UniPR

---

![](images/comp/tangible.jpg)
# 💡️ Linguaggi formali

- Presenti in tutte le applicazioni
    - Linguaggi di programmazione
    - Linguaggi di marcatura (es. HTML, Latex)
    - Interazione uomo macchina (es. Google, Zork)
- Fondamentali in sw di sistema
    - Compilatori
    - Interpreti …
- Paradigmatici nella teoria
    - Molti problemi riducibili ad *appartenenza*
    - Una stringa appartiene a un linguaggio?

>

<https://www.google.com/search?q=zork+site:archive.org>

---

# 💡️ Alfabeti e stringhe

- Alfabeto `$\Sigma$`: insieme di simboli
- Stringa `$s$`: sequenza di simboli di `$\Sigma$`
    - `$s \in \Sigma^\star$`, insieme di tutte le stringhe
    - `$\varepsilon$`: stringa vuota
    - `$|s|$`: lunghezza della stringa `$s$`
- Linguaggio `$L \subseteq \Sigma^\star$`
    - Sottoinsieme di tutte le stringhe possibili
    - Grammatica: regole formali per definire le “*stringhe ben formate*” di `$L$`

---

![](images/comp/roman-nums-clock.jpg) ![large](images/comp/roman-nums-table.png)
# 🧪 Numeri romani

- Alfabeto

| Simbolo: | I | V | X  | L  |  C  |  D  |  M   |
|----------|---|---|----|----|-----|-----|------|
| Valore:  | 1 | 5 | 10 | 50 | 100 | 500 | 1000 |

- Regole
    - Massimo 3 ripetizioni di un simbolo...
    - Ma `V, L, D` non ripetuti
    - Numeri inferiori seguono i superiori...
    - Tranne `IV, IX, XL, XC, CD, CM`

>

<https://en.wikipedia.org/wiki/Roman_numerals#Standard_form>

---

# 💡️ Concatenazione di stringhe

- Operazione di concatenazione: `$\cdot$`
    - Propr. associativa: `$(x \cdot y) \cdot z = x \cdot (y \cdot z)$`
    - Non commutativa: `$x \cdot y \neq y \cdot x$`
    - `$\Sigma^\star$` chiuso rispetto a `$\cdot$`: `$\Sigma^\star \times \Sigma^\star \to \Sigma^\star$`
- Potenza
    - `$x^n := x \cdot x \cdot x \cdot x \cdots$` (`$n$` volte)
- Elemento neutro `$ε$`
    - Stringa vuota, `$\forall x \in \Sigma^\star, ε \cdot x = x \cdot ε = x$`
- `$<\Sigma^\star, \cdot, ε>$`: monoide

---

# 💡️ Definizione di linguaggi

- Approccio **algebrico** : *espressioni regolari*
    - Linguaggio costruito con operazioni su linguaggi più elementari
- Approccio **generativo** : *grammatiche*
    - Regole per la generazione di stringhe appartenenti al linguaggio
- Approccio **riconoscitivo** : *automi*
    - Algoritmi per decidere se una stringa appartiene o no al linguaggio

---


# Espressioni regolari

---

# 💡️ Operazioni su linguaggi

- `$L_1$` e `$L_2$` linguaggi su `$\Sigma^\star$` (due insiemi di stringhe)
- *Unione*
    - `$L_1 \cup L_2 := \{x \in \Sigma^\star : x \in L_1 \lor x \in L_2\}$`
- *Intersezione*
    - `$L_1 \cap L_1 := \{x \in \Sigma^\star : x \in L_1 \land x \in L_2\}$`
- *Complementazione* : ``
    - `$L^c := \{x \in \Sigma^\star : x \notin L\}$`

---

# 💡️ Concatenazione di linguaggi


- *Concatenazione o prodotto*
    - `$L_1 \cdot L_2 := \{x \in \Sigma^\star : x = x_1 \cdot x_2, x_1 \in L_1, x_2 \in L_2\}$`
    - Es. `$L_1 := \{ab, bb\}; L_2 := \{aa, ab\};$` <br> `$L_1 \cdot L_2 = \{abaa, abab, bbaa, bbab\}$`
- *Potenza*
    - `$L^n := L \cdot L^{n-1}, n\geq1; L^0 := \{ε\}$` per convenzione
    - Concatenazione di‌ `$n$` stringhe qualsiasi di `$L$`
    - Es. `$L := \{ab, bb\}; L^2 = \{abab, abbb, bbab, bbbb\}$`
- *Stella di Kleene*
    - `$L^\star := \bigcup_{n=0}^∞ L^n, $`
    - Concatenazione arbitraria di‌ stringhe di `$L$`
    - `$L^\star$`: chiusura di `$L$` rispetto a `$\cdot$`

---

# 💡️ Espressioni regolari

- *Espressione regolare* : stringa `$r$` su alfabeto `$\Sigma ∪ \{+,\star,(,),\cdot,\varnothing\}$` t.c.:
    - `$r = \varnothing$`: linguaggio vuoto; oppure
    - `$r \in \Sigma$`: linguaggio con un solo simbolo; oppure
    - `$r = s + t$`: unione dei linguaggi `$L(s)$`, `$L(t)$`; oppure
    - `$r = s \cdot t$`: concatenazione dei linguaggi `$L(s)$`, `$L(t)$`; oppure
    - `$r = s^\star$`: chiusura del linguaggio `$L(s)$`
    - (con `$s$` e `$t$` espressioni regolari; simbolo `$\cdot$` spesso implicito)
- *Linguaggi regolari* : rappresentabili con espressioni regolari (“*regex*”)

---

# 💡️ Espressioni e linguaggi

- `$\Sigma := \{a, b\}$`
- <em>`$(a + b \cdot b)$`</em>
    - `$\{a, bb\}$`
- <em>`$(a + b \cdot b)^\star$`</em>
    - `$\{\varepsilon, a, bb, aa, abb, bba, bbbb, aaa, \dots\}$`
- <em>`$(a + b)^\star$`</em>
    - `$\{\varepsilon, a, b, aa, ab, ba, bb, aaa, \dots\}$`
- <em>`$a \cdot (a + b)^\star \cdot b$`</em>
    - `$\{ab, aab, abb, aaab, aabb, abab, \dots\}$`

---

# 💡️ Save the day with regex

![large](images/comp/regex-xkcd.png)

---

# ⭐ PCRE, Perl Compatible RegEx

- Concatenazione di caratteri: `goal`
- Unione tra espressioni (opzione): `one|two|three`
- Un car. da un insieme (o no): `[a-z]`, `[^a-z0-9]`
- Un carattere qualsiasi: `defin.tely`
- Ripetizioni (0+, 1+, 0-1): `goo*al`, `go+al`, `goo?al`
- Sottoespressione: `(left right )*halt`

![](images/comp/perl-problems.png)

---

# ⭐ Regex, classi di caratteri

- `[...]` per includere uno qualsiasi dei caratteri in parentesi
    - Singoli caratteri o intervalli di caratteri adiacenti
    - `[A-Z]` = qualsiasi lettera maiuscola
    - `[a-zABC]` = qualsiasi lettera minuscola oppure `A`, `B`, o `C`
- `[^...]` per escludere uno qualsiasi dei caratteri in parentesi
    - `[^0-9]` = qualsiasi carattere non numerico
- Sequenze speciali per identificare classi di caratteri
    - `\d` = numerico, ossia `[0-9]`
    - `\s` = `[ \t\r\n\f]`
    - `\w` = `[0-9a-zA-Z_]`
    - `\D` = non numerico, ossia `[^0-9]` (anche `\W` ecc.)

---

# ⭐ Regex, caratteri speciali

- `.` per un carattere qualsiasi
    - `A.B` riconosce la stringa `AoB`, `AwB`, `AOB` ecc.
- `\` escape, per segnalare sequenze speciali o considerare caratteri speciali come normali
    - `\?` cerca il `?`
- `^` corrisponde all'inizio del testo
- `$` corrisponde alla fine del testo
- `|` per alternativa tra due espressioni (unione)
    - `A|B` = carattere `A` o carattere `B`
- `(...)` per raggruppare sotto-espressioni
    - `ga(zz|tt)a` trova sia `gazza` che `gatta`

---

# ⭐ Regex, ripetizioni

- `{...}` per specificare il numero di ripetizioni
    - `\d{3,5}` sequenze di almeno tre cifre, al massimo cinque
- `*` zero o più occorrenze di un’espressione
    - `(ab)*` riconosce `ab`, `abab`, la stringa vuota, ma non riconosce `abba`
- `+` una o più occorrenze
    - `(ab)+` non riconosce la stringa vuota
- `?` zero o al più una occorrenza (parte opzionale)
    - `https?://\S*` riconosce sia url http che https

>

⭐ <http://www.zytrax.com/tech/web/regex.htm>

---

![large](images/comp/codice-fiscale.png)
# 🧪 Regex in HTML

``` html
<form>
    Date (dd/mm/yyyy):
    <input name="dd" title="dd/mm/yyyy"
        pattern="\d{2}/\d{2}/\d{4}" />
    <input type="submit" />
</form>
```

- *Data* : `\d{2}/\d{2}/\d{4}`
- *File* : `.+\.zip`
- *E-mail* : `[\w\-\.]+@[\w\-\.]+\.[a-z]+`
- *Dominio* : `[\w\-]+\.(it|com|org|net|eu)`
- *Cod.fiscale* : `[A-Z]{6}\d\d[A-Z]\d\d[A-Z]\d{3}[A-Z]`

---

# 🧪 Regex find in Python

``` py
>>> import re
>>> text = "He was carefully disguised but captured quickly by police."
>>> re.findall(r"\w+ly", text)
['carefully', 'quickly']
>>> text = "Python is a <multi-paradigm> <programming language>."
>>> re.findall(r"<([^>]*)>", text)
['multi-paradigm', 'programming language']
>>> re.split(r"\W+", text)
['Python', 'is', 'a', 'multi', 'paradigm', 'programming', 'language', '']
```

>

<http://docs.python.org/3/library/re.html>

---

# 🧪 Regex sub in Python

``` py
>>> re.sub(r"([0-9])([a-z]+)", r"\1<sup>\2</sup>", "He won the 3rd prize")
'He won the 3<sup>rd</sup> prize'
>>> re.sub(r"([aeiou])\1+", r"\1", "troooppo miiiticoo!")
'troppo mitico!'
>>> re.sub(r"(o?)([aeiou])\2+", r"\1\2", "gooood daaay!")
'good day!'
```

>

<http://docs.python.org/3/library/re.html>

---


# Grammatiche di Chomsky

---

![](images/hist/chomsky.png) Noam Chomsky nel 2017
# 💡️ Grammatiche di Chomsky

- Grammatica `$G := <V_t, V_n, P, S>$`
    - `$V_t$`: alfabeto finito di simboli **terminali**
    - `$V_n$`: … **non terminali** (variabili, categorie sintattiche)
    - `$V := V_t \cup V_n$`
    - `$P$`: insieme di **produzioni**, <br> relaz. binarie `$V^\star \cdot V_n \cdot V^\star \times V^\star$` <br> `$<\alpha, \beta> \in P$` si indica con `$\alpha \to \beta$`
    - `$S \in V_n$`: **assioma**
- `$L(G)$`: insieme delle stringhe di terminali ottenibili con finite operazioni di riscrittura
    - Applicazione delle regole di produzione, in vario modo

---

# 💡️ Linguaggio generato da G

- *Derivazione diretta* `$\to$`: riscrittura di una stringa tramite applicazione di una regola di produzione
- *Derivazione* `$\to^\star$`: chiusura riflessiva e transitiva della derivazione diretta
- *Forma di frase* : stringa `$x : x \in V^\star, S \to^\star x$`
- *Linguaggio generato* da `$G$`: forme di frase con soli simboli terminali
    - `$L(G) := \{x : x \in V_t^\star, S \to^\star x\}$`
- *Equivalenza* tra `$G_1$` e `$G_2$`: `$L(G_1) = L(G_2)$`

---

![large](images/comp/grammar11.svg)
# ⭐ Albero delle frasi

- La radice dell'albero è l'*assioma*
- Ogni nodo ha tanti figli, quante sono le *produzioni* applicabili
- Ogni figlio è una *forma di frase*
- Le foglie sono stringhe del linguaggio, con soli simboli *terminali*
- Produzioni con la stessa parte sx: raggruppate con “`$|$`”
- `$G_{11} := <\{a,b\}, \{F\}, P_{11}, F>$`
- `$P_{11} := \{F \to ab, F \to aFb\} = \{F \to ab | aFb\}$`

---

![large](images/comp/grammar12.svg)
# ⭐ Grammatica equivalente


- `$G_{12} := <\{a,b\}, \{F,G\}, P_{12}, F>$`
- `$P_{12} := \\ \{F \to ab, F \to aG, G \to Fb\} = \\ \{F \to ab | aG, G \to Fb\}$`
- `$G_{11}$` e `$G_{12}$` sono equivalenti
    - Generano lo stesso linguaggio

---

# 🧪 Confronto tra grammatiche

- Produzioni di `$G_{21}$`
    - `$S \to b | aA \\ A \to aS$`
- Produzioni di `$G_{22}$`
    - `$S \to Ab | b \\ A \to aAa | aa$`
- Produzioni di `$G_{23}$`
    - `$S \to Ab \\ A \to Aaa | \varepsilon$`
- Tre grammatiche, tutte con alfabeti `$\{a, b\}$`, `$\{S, A\}$` e assioma `$S$`
- ❓ `$G_{21}, G_{22}, G_{23}$` sono equivalenti? Generare i 3 *alberi delle frasi*
    - Generano tutte il linguaggio `$\{a^{2n}b\}$`

---

# 🧪 Esercizio di generazione

- Grammatica per il linguaggio `$\{a^n b^n c^n : n\geq1\}$`
- `$G_0 := <\{a, b, c\}, \{S, B, C\}, \{P_1, P_2, P_3, P_4, P_5, P_6, P_7\}, S> \\
P_1 := S \to aSBC \\
P_2 := S \to aBC \\
P_3 := CB \to BC \\
P_4 := aB \to ab \\
P_5 := bB \to bb \\
P_6 := bC \to bc \\
P_7 := cC \to cc$`
- ❓ Trovare le produzioni che generano $aaabbbccc$
    - Soluzione: `$P_1,P_1,P_2,P_3,P_3,P_3,P_4,P_5,P_5,P_6,P_7,P_7$`

>

Vedremo che `$P_3$` rende la grammatica di tipo 0, RE

---

![](images/comp/two-face.png)
# 🧪 Parsing e ambiguità

- **Parsing**: trovare le produzioni che generano una certa stringa
    - Primo compito di un *compilatore*
    - La stringa è il codice sorgente
    - Le produzioni individuano la *struttura* sintattica del programma
- Alcune grammatiche sono **ambigue**
    - Diverse sequenze di produzioni generano la stessa stringa
    - ❗ Non è chiara la struttura del programma

---

# 🧪 Alberi di derivazione (sintattici)

- Esempio di grammatica **ambigua** per notazione **infissa**: <br> due interpretazioni valide per `2 + 3 * 3`
    - `$V_t := \{0, 1, 2... 9, +, *, (, )\},  V_n := \{E\}$`
    - `$E \to E + E | E * E | ( E ) | N$`
    - `$N \to D N | D \\ D \to 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9$`

![](images/comp/ambiguity.svg)

---

# 🧪 Espressioni infisse e prefisse

- Notazione **infissa**, con *precedenza* tra operatori: `$2 + 3 * 3$`
- Grammatica *non ambigua* per notazione infissa
    - `$E \to T + E | T \\ T \to F * T | F \\ F \to ( E ) | N$`
    - `$N \to D N | D \\ D \to 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9$`
- Notazione **prefissa**, o *polacca*
    - Es.: `$* + 1\;\;2 - 3\;\;2$` ⇒ Infissa: `$(1 + 2) * (3 - 2)$`
- *Grammatica* per notazione prefissa
    - `$E \to N | + E\;\;E | - E\;\;E | * E\;\;E | / E\;\;E$`

>

<https://tomamic.github.io/pyodide/?p10_polish.py>

---

![](images/comp/hierarchy.svg)
# ⭐ Classificazione di Chomsky

- **Tipo 0**: grammatiche **RE**, *ricorsivam. enumerabili*
    - `$alpha Abeta  \to gamma $` (*non limitate*)
- **Tipo 1**: grammatiche **CS**, *contestuali*
    - `$alpha Abeta  \to alpha gamma beta$`
- **Tipo 2**: grammatiche **CF**, *non contestuali*
    - `$A \to gamma$`
- **Tipo 3**: grammatiche **REG**, *regolari*
    - `$A \to aB$`, oppure `$A \to b$`, oppure `$A \to \varepsilon$` (REG destre)
    - Coincide con classe dei linguaggi definiti da *regex*

>

`$A, B \in V_n; a, b \in V_t; alpha , beta , gamma  \in V^\star$`

---

# ⭐ Linguaggi non contestuali

- Controllo di *palindromi*, *bilanciamento di parentesi* e varie *simmetrie*
    - Es.: `$\{a^nb^n : n \geq 1\}$` gen. da `$S \to aSb | ab$` (CF)
    - Es.: L. parentesi bilanciate gen. da `$S \to SS | (S) | ε$`
    - Ma non: `$\{a^n b^n c^n : n \geq 1\}$` (CS) *✶*
- **Linguaggi di programmazione** comuni: grammatiche CF
    - Parentesi bilanciate: `$S \to SS | (S) | ε$`

>

✶ Nell'es. `$G_0$` già visto, sostituire `$P_3$` con: <br>
`$P_{3a} := CB \to HB \\ P_{3b} := HB \to HC \\ P_{3c} := HC \to BC$`

---

# 🥷 Extended Backus-Naur Form (EBNF)

- Terminali tra virgolette
- `{...}`: parte ripetibile (0+), `[...]`: parte opzionale,
- `(...)`: raggruppamento, `|`: scelta

``` text
frase := soggetto verbo complemento
soggetto := articolo nome
complemento := articolo nome
articolo := "il"
nome := "gatto" | "topo" | "sasso"
verbo := "mangia" | "beve"
```

- Nell'esempio, questi sono terminali
    - `il`, `gatto`, `topo`, `sasso`, `mangia`, `beve`
- *“`il gatto mangia il topo`”* è una frase del linguaggio

---

# 🥷 EBNF per espressioni

- *Notazione infissa*, con precedenza
    - Es.: `2 + 3 * 3`

``` text
expr := term {( "+" | "-" ) term}
term := factor {( "*" | "/" ) factor}
factor := number | "(" expr ")" | "-" term
```

- *Notazione prefissa, o polacca*
    - Es.: `* + 1 2 - 3 2` ⇒ Infissa: `(1 + 2) * (3 - 2)`

``` text
expr := number | "+" expr expr | "-" expr expr |
                 "*" expr expr | "/" expr expr
number := digit {digit}
digit := "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```

>

<https://tomamic.github.io/pyodide/?p10_polish.py>

---

# 🥷 Linguaggi LL(1)

- Sottoclasse dei linguaggi CF
- Ogni produzione relativa a stesso non-terminale (a sx)... <br> genera come primo simbolo un terminale diverso
    - No prefissi comuni, no ricorsione sinistra
- **Recursive descent parser**: analisi sintattica molto semplice ed efficiente
    - Basta “spiare” il simbolo di input successivo, per capire con certezza quale produzione applicare

---

![](images/comp/pumping-lemma-3.svg)
# 🥷 Pumping lemma REG

- Formalmente, `$\forall L$` regolare...
    - `$\exists k : \forall z \in L, |z| \geq k \\ \exists u,v,w : z=u v w, |uv| \leq k, |v| \geq 1 \\ u v^i w \in L, \forall i \geq 0$`
- In ogni stringa abbastanza lunga,
    - c'è una parte che si può ripetere,
    - generando un'altra stringa di `$L$`
- Per input abbastanza lungo, albero sintattico con ripetizioni di uno stesso non-terminale
- Oppure: un Automa a Stati Finiti (…), per input abbastanza lungo, torna in stato già visitato

>

Esempio con `$G_1$`: `$S \to b | aA; A \to aS$`

---

![](images/comp/pumping-lemma-2.svg)
# 🥷 Pumping lemma CF

- Formalmente, `$\forall L$` non contestuale...
    - `$\exists k : \forall z \in L, |z| \geq k \\ \exists u,v,w,x,y : z=uvwxy, |vwx| \leq k,|vx| \geq 1 \\ u v^i w x^i y \in L, \forall i \geq 0$`
- In ogni stringa abbastanza lunga,
    - ci sono due parti che si possono
    - ripetere assieme, restando in `$L$`
- Per input abbastanza lungo, albero sintattico con ripetizioni di uno stesso non-terminale

---

# 🥷 Corollari dei due lemmi

- ⇒ `$L := \{a^n b^n : n \geq 0\}$` non è REG
    * Si prende `$a^m b^m, m>k \to |uv|<m$`, sono tutte `$a$`…
- ⇒ `$L := \{a^n b^n c^n : n \geq 0\}$` non è CF
    * Si prende `$a^m b^m c^m, m>k \to |vwx|<m$`
    * Se `$v$` e `$x$` con più simboli diversi, `$u v^2 w x^2 y$` con simboli mescolati
    * Se `$v$` e `$x$` con un solo simbolo, `$u v^2 w x^2 y$` con numero diverso di `$a, b, c$`
    * In entrambi i casi la nuova stringa `$z' \notin L$`

---

# Compilatori

---

# 💡️ Linguaggio di programmazione

- Notazione *formale* e *non ambigua* per definire algoritmi
    - *Algoritmo*: sequenza di istruzioni per risolvere un dato problema
- Ogni linguaggio è caratterizzato da:
    - **Sintassi**
    - **Semantica**

---

![large](images/dev/syntax-diagrams.png)
# ⭐ Sintassi

- Insieme di regole formali per scrivere *frasi* ben formate (programmi) in un certo linguaggio
- Spesso analisi a due livelli:
- **Lessico**, tramite *espressioni regolari*
    - Riconosciuti i “*token*”: parole riservate, operatori, variabili, costanti ecc.
- **Struttura**, tramite *grammatiche non contestuali*
    - Backus-Naur Form
    - Extended BNF
    - Diagrammi sintattici

---

# ⭐ Semantica

- Attribuisce un **significato** alle frasi (sintatticamente corrette) costruite nel linguaggio
- Una frase può essere sintatticamente corretta e tuttavia non aver alcun significato
    - Soggetto – predicato – complemento
    - *“La mela mangia il bambino”*
    - *“Il bambino mangia la mela”*
- Oppure avere un significato diverso da quello previsto...
    - `int pi = 3.14;`

---

# ⭐ Uso della semantica

- **Correttezza sui tipi**
    - Quali tipi di dato possono essere elaborati?
    - Quali operatori applicabili a ogni dato?
    - Quali regole per definire nuovi tipi e operatori?
- **Semantica operazionale**
    - Qual è l'effetto di ogni azione elementare?
    - Qual è l’effetto dell’aggregazione delle azioni?
    - Cioè, qual è l’effetto dell’esecuzione di un certo programma?

---

![large](images/dev/compiler.svg)
# ⭐ Architettura compilatore

- Traduttore, spesso modulare
- **Front-end**, analisi di linguaggio di alto livello
    - *Lessicale*
    - *Grammaticale*
    - *Contestuale*
- → **Rappresentazione intermedia**
    - *AST (Annotated Syntax Tree)*
- **Generazione codice oggetto**
    - Linguaggio macchina

---

![large](images/dev/ast-euclid.svg)
# 🧪 Es. albero sintattico

- Analisi *sintattica*: regole grammaticali di derivazione del sorgente
- Analisi *contestuale*: annotazioni sull'ambito e tipo delle variabili

``` py
while b != 0:
    if a > b:
        a = a − b
    else:
        b = b − a
return a
```

>

Algoritmo di Euclide per MCD

---

# 🥷 Esecuzione dei programmi

- Codice oggetto non ancora eseguibile
- Linguaggio ad alto livello → passi necessari:
    - ➊ **Compilatore**: traduzione in linguaggio macchina
    - ➋ **Linker**: collegamento con librerie di supporto
    - ➌ **Loader**: caricamento in memoria
- Programmi **compilati**: applicati i 3 passi...
    - A tutto il codice; prima dell'esecuzione
- Programmi **interpretati**: applicati i 3 passi...
    - In sequenza, su ogni istruzione; a tempo di esecuzione

![](images/dev/build.svg)

---

# 🥷 Collegamento

- Il **linker** collega diversi moduli oggetto
    - Simboli irrisolti → riferimenti esterni
    - Il collegamento può essere statico o dinamico
- **Collegamento statico**
    - Libreria inclusa nel file oggetto, eseguibile stand-alone
    - Dimensioni maggiori, ma possibile includere solo funzionalità utilizzate
- **Collegamento dinamico**
    - Librerie condivise da diverse applicazioni
    - Installazione e aggiornamento unici
    - Caricate in memoria una sola volta

---

![](images/dev/relocation.png)
# 🥷 Caricamento

- Il **loader** carica in memoria un programma
    - Risolve indirizzi logici (variabili, salti ecc.)
    - Carica eventuali programmi di supporto (DLL ecc.)
- **Rilocazione statica**: indirizzi logici trasformati in indirizzi assoluti
- **Rilocazione dinamica**: indirizzi logici mantenuti, relativi alla posizione del programma in memoria
    - *Registri base* della CPU (reg. CS, DS e SS su x86): <br> locazione base di codice, dati e stack
    - *Memory Management Unit* in S.O.

---

# 🥷 Codice gestito

- Compilazione in **codice intermedio**
    - Bytecode (Java), Common Intermediate Lang. (.NET), …
    - Python: compilato per una macchina virtuale (file .pyc), ma in modo trasparente
- Esecuzione su una **macchina virtuale**
    - Java Virtual Machine, Common Language Runtime, …
    - Emulazione di un certo elaboratore
    - ⇒ Indipendenza da piattaforma fisica
    - Compilazione “al volo” (*Just In Time*) in codice nativo
    - Gestione memoria con *garbage collection*

---

![](images/dev/garbage-truck.svg)
# 🥷 Sistemi di garbage collection

- Restituzione automatica della memoria
    - Per oggetti/dati che non servono più
- Possibile anche per codice nativo
    - Linguaggio *Go*
    - Estensioni e *“smart pointers”* in C++
- Diversi algoritmi
    - *Reference counting*: idea di base, ma cicli…
    - *Mark & sweep*: parte da riferimenti locali/globali, marca oggetti raggiungibili
    - *Generational garbage collection*: controlla spesso oggetti recenti

---

# 🥷 Uso della garbage collection

- Vantaggi
    - Si libera sistematicamente la memoria (*memory leak*)
    - Non si rimuovono dati ancora utili (*dangling pointer*)
    - Dati rilocati per *compattare* la memoria
- Svantaggi
    - Maggiore occupazione del *processore* (~1.3x)
    - Maggiore occupazione di *memoria* (~2x)
    - GC decide autonomamente *quando* operare (problema per *real time*)

>

<https://golang.org/src/runtime/mgc.go>
<br>
<https://golang.org/s/go15gcpacing>

---

# Linguaggi e paradigmi

---

![large](images/dev/assembly.png)
# 💡️ Linguaggi di basso livello

- Più orientati alla macchina che ai problemi da trattare
- **Linguaggi macchina**: solo operazioni eseguibili direttamente dall'elaboratore
    - Op. molto elementari, diverse per ogni processore, in formato binario
- **Linguaggi assembly**: prima evoluzione, codici binari → mnemonici

---

# 💡️ Linguaggi di alto livello

- Introdotti per facilitare la scrittura dei programmi
- Definizione della soluzione in modo intuitivo
- Con una certa **astrazione** rispetto al calcolatore su cui verranno eseguiti
- Devono essere tradotti in linguaggio macchina

>

[The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/python3-gcc.html)
<br>
[Which Programming Languages Use the Least Electricity?](https://thenewstack.io/which-programming-languages-use-the-least-electricity/)

---

# 💡️ Storia dei linguaggi

![large](images/dev/languages-timeline.svg)

>

[O’Reilly Language Poster](https://www.cs.toronto.edu/~gpenn/csc324/PLhistory.pdf)
<br>
[Poster aggiornato](http://www.levenez.com/lang/history.html)
<br>
[History of Computer Programming Languages, by A. Ferguson](https://cs.brown.edu/~adf/programming_languages.html)
<br>
[The Development of the C Language](https://www.bell-labs.com/usr/dmr/www/chist.html)

---

![large](images/dev/lang-spectrum.png)
# 💡️ The Top 10

![](images/dev/lang-rank.png)

>

[Spectrum](https://spectrum.ieee.org/top-programming-languages/) - [PYPL](https://pypl.github.io/PYPL.html) - [Redmonk](https://redmonk.com/sogrady/2021/08/05/language-rankings-6-21/) - [Tiobe](https://www.tiobe.com/tiobe-index/)

---

# 💡️ Paradigmi di sviluppo

- Forniscono la filosofia e la metodologia con cui si scrivono i programmi
- Definiscono il concetto (astratto) di computazione
- Ogni linguaggio consente (o spinge verso) l'adozione di un particolare paradigma
    - Imperativo / procedurale
    - Orientato agli oggetti
    - Scripting (tipizzazione dinamica, principio DRY - Don't Repeat Yourself)
    - Funzionale (funzioni come “cittadini di prima classe”)
    - Logico (base di conoscenza + regole di inferenza)

---

# 💡️ Linguaggi e paradigmi

- **Imperativi / procedurali**
    - Cobol, Fortran, Algol, C, Pascal
- **Orientati agli oggetti**
    - Simula, Smalltalk, Eiffel, Delphi
    - C++, Java, C#, Go, Swift, Rust, ...
- **Scripting**
    - Basic, Perl, PHP, Javascript, Python, VB.NET, Shell, Lua
- **Funzionali**
    - Lisp, Scheme, ML, Haskell, Erlang
- **Logici**
    - Prolog...
