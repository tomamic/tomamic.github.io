
![](images/comp/attack.svg)
# Regex
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
