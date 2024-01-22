
![](images/repr/binary-hacker.jpg)
# Codifica dell'informazione
## Introduzione all'informatica <br> Michele Tomaiuolo @ Ingegneria UniPR

---

![](images/repr/analog-clock.png) ![](images/repr/digital-clock.png)
# 💡️ Analogico e digitale

- Una grandezza (fisica o astratta) può essere rappresentata in due forme
    - **Analogica**: insieme di valori **continuo** (*denso e “senza buchi”*)
    - **Digitale** (o numerica): insieme di valori **discreto** (*tutti i punti sono isolati*)

---

# 💡️ Approssimazione discreta

- Alcune informazioni sono intrinsecamente discrete
    - Informazioni “artificiali”, es. un testo scritto
    - Scala atomica o subatomica …
- Molte grandezze fisiche hanno forma continua
    - Per loro elaborazione al calcolatore: rappresentazione digitale
    - *Approssimazione* del valore analogico
    - Errore dipende dalla precisione della rappresentazione digitale scelta

---

# 💡️ Codice

- Sistema basato su simboli, che permette la rappresentazione dell’informazione
- *Simbolo*: elemento atomico
- *Alfabeto*: insieme dei simboli possibili (`$A$`)
- *Cardinalità* del codice: numero di simboli dell’alfabeto
- *Stringa* : sequenza di simboli (`$s \in A^\star$`)
- *Linguaggio* : insieme stringhe ben formate (`$L \subseteq A^\star$`)

---

![](images/repr/child-fingers.png)
# 💡️ Codice posizionale

- Un numero naturale può essere rappresentato con una notazione posizionale
    - Somma di potenze positive della base

`$$
N = c_0 \cdot base^0 + c_1 \cdot base^1 + \cdots + c_n \cdot base^n
$$`

- Es. `$587_{dec} = 7 \cdot 10^0 + 8 \cdot 10^1 + 5 \cdot 10^2$`
- Sistemi di numerazione posizionali di uso comune
    - Decimale (base 10; c: `$0-9$`)
    - Binario (base 2; c: `$0-1$`)
    - Esadecimale (base 16; c: `$0-9, A-F$`)

---

# 💡️ Codifica dell’informazione

- Codifica: regole di corrispondenza per passare da un certo codice a un altro
- Corrispondenza biunivoca
    - Tra una stringa di un codice
    - E una stringa di un altro codice
- A una certa stringa in un alfabeto ricco di simboli, corrisponde una stringa più lunga in un alfabeto più ridotto

---


![](images/repr/binary-tunnel.jpg)
# Numeri binari

---

![](images/repr/sum-binary.jpg)
# 💡️ Codice binario

- Base 2; c: `$0-1$`
- Informazione digitale nei calcolatori rappresentata con una sequenza di 0 e 1
    - Sistema ideato da Leibniz, ~1700
    - Calcolatore programmabile di Zuse, ~1940
- **Bit**: singolo elemento di una sequenza binaria
- **Nibble**: sequenza di *4 bit*
- **Byte**: sequenza di *8 bit*

>

<https://www.wikihow.com/Convert-from-Binary-to-Decimal>
<br>
<https://www.wikihow.com/Convert-from-Decimal-to-Binary>

---

# ⭐ Codifica decimale → binaria

- *(1)* Dividere il numero decimale per 2
- *(2)* Il resto è il valore del nuovo bit, a sinistra
- *(3)* Il quoziente è il numero con cui continuare *(loop)*
- Ossia continuare a dividere per 2 il quoziente, finché non si annulla
- Es.: `$35_{dec} = 00100011_{bin} = 1·2^0 + 1·2^1 + 1·2^5$`

`$n$`  | `$n \div B$` | `$n \bmod B$` | peso
-------|--------------|---------------|-------
`$35$` |       `$17$` |         `$1$` | `$1 = 2^0$`
`$17$` |        `$8$` |         `$1$` | `$2 = 2^1$`
 `$8$` |        `$4$` |         `$0$` | `$4 = 2^2$`
 `$4$` |        `$2$` |         `$0$` | `$8 = 2^3$`
 `$2$` |        `$1$` |         `$0$` | `$16 = 2^4$`
 `$1$` |        `$0$` |         `$1$` | `$32 = 2^5$`

---

![](images/repr/binary-fingers.svg) … 819
# 🧪 Numeri naturali

- Rappresentare un numero naturale `$N$` in forma binaria
- Occorrono `$k$` bit, t.c. `$2^k > N$`
- Es. 4 bit per numeri naturali da 0 a 15
- Un calcolatore assegna un numero fisso di bit per diversi tipi di informazione
    - Casi di valori non rappresentabili
    - **Overflow**, **underflow**

---

# 🧪 Esadecimale (Hex)

![large](images/repr/hex-numbers.svg)

---

![](images/repr/hex-table.svg)
# 🧪 Bin ↔ Hex

![small](images/repr/bin-hex.png)

- Gruppo di 4 bit: 16 configurazioni diverse
    - *Disposizioni con ripetizione*: `$2^4 = 16$`
- Ciascuna configurazione corrisponde a uno dei 16 simboli esadecimali

---

# 🧪 Somma e sottrazione

``` text
    1   1
0 0 0 1 0 1 1 0 +
0 0 0 1 0 1 0 1 =
-----------------
0 0 1 0 1 0 1 1
```

``` text
            0 10
0 0 0 0 1 1 1 0 -
0 0 0 0 0 1 0 1 =
-----------------
0 0 0 0 1 0 0 1
```
>

Attenzione a riporto e prestito (in alto)

---

# 🧪 Moltiplicazione

``` text
        1 0 1 1 x
        1 1 0 1 =
        ---------
        1 0 1 1 +
      0 0 0 0
    -------------
      0 1 0 1 1 +
    1 0 1 1
  ---------------
    1 1 0 1 1 1 +
  1 0 1 1
-----------------
1 0 0 0 1 1 1 1
```

---

# 🧪 Divisione


``` text
1 0 1 1 0 1 : 1 1
0 0          ---------
-----         0 1 1 1 1
1 0 1 -
  1 1
-------
  1 0 1 -
    1 1
  -------
    1 0 0 -
      1 1
    -------
        1 1 -
        1 1
        -----
        0 0
```

---

# 🧪️ Hex e bin in Python

- Valori *hex* o *bin* in Python
    - Prefisso `0x` o `0b`
    - Sono sempre normali valori di tipo `int`
- Conversione da stringa a numero: funzione `int`
    - Si può specificare anche la base di numerazione, oppure `0`
- Da numero a stringa: funzioni `str`, `hex`, `bin`
- [Operatori bitwise](https://docs.python.org/3/library/stdtypes.html#bitwise-operations-on-integer-types), bit a bit: `&, |, ^, ~`

``` py
blank_hex = 0x20  # just a plain `int`, valued as 32(dec)
blank_bin = 0b100000  # 32(dec)

i = int("20", 16)  # i is 32(dec)
j = int("0x20", 0)  # base inferred by prefix
txt = hex(32)  # "0x20"
```

---

![](images/repr/sign-magn.svg)
# 💡️ Numeri interi

- Occorre rappresentare anche i numeri negativi
    - Necessario riservare un bit per il segno
    - Ovvero, si dimezza il massimo modulo ammesso
- **Modulo e segno**
    - Il primo bit indica il segno
    - 0 positivo, 1 negativo
    - I restanti bit rappresentano il modulo

---

![](images/repr/twos-compl.svg)
# ⭐ Complemento a due

- Alternativa, rappr. *diversa da modulo e segno!*
- Rappresentare un numero negativo
    - **➊** Partire dal suo opposto positivo
    - **➋** Complementare il numero <br> (gli 1 diventano 0 e viceversa)
    - **➌** Sommare 1
- Anche così, il primo bit indica il segno
    - 0 positivo, 1 negativo
- ⚠️ *Attenzione*: bisogna conoscere codifica e num bit
    - Esempi seguenti: ogni intero con segno memorizzato in un singolo *byte*

---

# 🧪 Es. numero intero

- Avendo *un byte*, +35 è in binario: **`0`**`0100011`
- Numero –35, in modulo e segno: **`1`**`0100011`
- Numero –35, in complemento a due: **`1`**`1011101`

``` text
0 0 1 0 0 0 1 1 ¬
-----------------
1 1 0 1 1 1 0 0 +
              1 =
-----------------
1 1 0 1 1 1 0 1
```

`¬`: complemento semplice, bit a bit

---

# 🧪 Somma con segno

- Sommare 12 e -35 su 8 bit, modulo e segno
    - Sottrazione tra 35 e 12
    - Cambio di segno
- Stessa operazione, complemento a due
    - Semplice somma: `12 + -35 = -23`

``` text
0 0 0 0 1 1 0 0 +
1 1 0 1 1 1 0 1 =
-----------------
1 1 1 0 1 0 0 1
```

---

# 💡️ Numeri reali

- Insieme continuo, per grandezze analogiche
    - Rappresentabili solo in modo approssimato
- Parte frazionaria: somma di potenze negative della base

`$$
F = c_{-1} \cdot base^{-1} + \cdots + c_{-n} \cdot base^{-n}
$$`

- Due rappresentazioni *alternative*
    - **Virgola fissa**: segno, parte intera, parte decimale
    - **Virgola mobile**: segno, mantissa, esponente

---

# ⭐ Parte frazionaria in binario

- **➊** Moltiplicare la parte frazionaria (`$f$`) per 2
- **➋** Assegnare la parte intera del risultato (`$\lfloor f \cdot B \rfloor$`) come valore del bit *(loop)*
- Ossia: continuare a moltiplicare per 2 la parte frazionaria del risultato... <br> finché non si annulla

`$f$` | `$f \cdot B$` |  `$\lfloor f \cdot B \rfloor$`  | peso
----------|-------------------|-------|---------
`$0.375$` |       `$0.750$`   | `$0$` | `$2^{-1}$`
`$0.750$` |       `$1.500$`   | `$1$` | `$2^{-2}$`
`$0.500$` |       `$1.000$`   | `$1$` | `$2^{-3}$`

---

# 🧪 Virgola fissa

- Numero espresso come: `$r = (i, f)$`
    - **`$i$`** è la parte intera, `$n_1$` bit
    - **`$f$`** è la parte frazionaria, `$n_2$` bit
- Precisione costante lungo l’asse reale
    - P.es. `$f$` di 3 bit, valori consecutivi sempre distanziati di 1/8
    - Tra ciascun intero e il successivo, possiamo rappresentare 8 valori

![](images/repr/fixed-point.png)

---

# ⭐ Virgola mobile

- Numero espresso come: `$r = ±(1+f)·2^e$`
    - **`$e$`** è l'esponente intero (o caratteristica), `$n_1$` bit
    - **`$f$`** è la parte frazionaria (`$0 \leq f < 1$`), `$n_2$` bit
    - `$2$` è la base, `$1+f$` è anche detto *mantissa*
- Precisione variabile lungo l’asse reale; p.es.:
    - `$f \in \{0, \frac{1}{4}, \frac{2}{4}, \frac{3}{4}\}$`, 2 bit <br> `$e \in \{-2, -1, 0, 1\}$`, 2 bit

![large](images/repr/float4.png)

>

<http://www.mathworks.com/company/newsletters/news_notes/pdf/Fall96Cleve.pdf>

---

# ⭐ IEEE 754 double & single

- **Precisione doppia**: *64 bit* (~ `$10^{±308}$`, con 16 cifre decimali)
    - 1 bit di segno, 11 bit di esponente, 52 bit di frazione
    - All'esponente si somma `$1023$` (`$=2^{11-1} - 1$`)
- **Precisione singola**: *32 bit* (~ `$10^{±38}$`, con 7 cifre decimali)
    - All'esponente si somma `$127$` (`$=2^{8-1} - 1$`)

![large](images/repr/ieee754-32-ex.svg)

>

<https://www.wikihow.com/Convert-a-Number-from-Decimal-to-IEEE-754-Floating-Point-Representation>

---

# ⭐ IEEE 754 half-precision

- **Mezza precisione**: *16 bit* (~ `$10^{±4.8}$` con 3 cifre decimali)
    - Usata nelle GPU (↓precisione ↑velocità)
- All’esponente si somma `$15$` (`$=2^{5 − 1} − 1$`)
- `$-118.625 = -1110110.101_{bin} = -1.110110101_{bin} × 2^6$`

![small](images/repr/ieee754-16-ex.svg)

---

<!-- .slide: data-visibility="hidden" -->

# 🔬 Operazioni bit a bit in Python

- Operatori *bitwise*, applicati bit a bit
- Da non confondere con operatori logici (`and`, `or`, `not`)

``` py
x = 0b1011  # bin value (11 dec)
y = 0x2A    # hex value (42 dec)

bin(42)     # "0b101010", a string
hex(42)     # "0x2a", a string

x & y       # bitwise AND (applied for each couple of bits)
x | y       # bitwise OR
x ^ y       # bitwise XOR
~x          # bitwise complement, 0b...11110100

shift = 3   # some int
x << shift  # x = x * (2 ** shift)
y >> shift  # y = y / (2 ** shift)
```

---

![](images/misc/characters.png)
# Caratteri e testo

---

# 💡️ Caratteri e testo

- Necessaria convenzione per codifica numerica (binaria) dei caratteri
- Codifica **ASCII** (American Standard Code for Information Interchange) a 7 bit
    - *Caratteri alfanumerici*: lettere maiuscole, minuscole, numeri, spazio
    - *Simboli e punteggiatura*: `@`, `#`, …
    - *Caratteri di controllo* (non tutti visualizzabili): `TAB, LF, CR, BELL` ecc.

---

# ⭐ Tabella ASCII di base

![large](images/repr/ascii.svg)

- In ogni riga 16 caratteri con codici consecutivi
- Codice di un carattere: si contano tutti quelli che lo precedono
    - Es. `S` @ `x=3`, `y=5` ⇒ `ord("S") == y * 16 + x == 83`

---

# ⭐ Interruzione di riga

- Unix: `LF` (*Line Feed, `0A`*)
    - Multics, Unix etc., Mac OS X, BeOS, Amiga, RISC OS
- Vecchi Apple: `CR` (*Carriage Return, `0D`*)
    - Commodore, Apple II family, Mac OS up to version 9
- Windows: `CR+LF` (*`0D+0A`*)
    - Most early OSes, DOS, OS/2, Windows, Symbian

---

![large](images/repr/codepage-437.png)
# 💡️ Tabella ASCII estesa

- Caratteri accentati + caratteri per grafici
    - *Code Page 437* per PC (DOS) in Nord America
    - Possibile mischiare testo in inglese e francese (anche se in Francia *CP850*)
    - Ma non assieme greco (*CP737*), russo ecc.
- **ISO 8859**, estensioni standard per ASCII a 8 bit
    - ISO 8859-1 (o Latin1): Lingue dell’Europa Occidentale
    - ISO 8859-2: Lingue dell’Europa Orientale
    - ISO 8859-5: Alfabeto cirillico
    - ISO 8859-15: Latin1 con simbolo euro (€)

---

![](images/repr/hieroglyphics.jpg) ![](images/repr/no-klingon.png)
# 💡️ Unicode

- Unicode associa un preciso **code-point** (32 bit) a ciascun simbolo
    - Possibile rappresentare miliardi di simboli
    - Primi 256 code-point = *Latin1*
- Attualmente >30 sistemi di scrittura
    - Rappresentazione di *geroglifici* e caratteri *cuneiformi*
    - Da *emoticon* **:-)** a *emoji* **☺️**: ideogrammi per espressioni facciali, oggetti comuni, posti, eventi meteo e animali
    - Proposta per *Klingon* (da Star Trek… rifiutata!)

>

<http://tomamic.github.io/data/utf8-demo.txt>
<br>
[Altri esempi di file multimediali](https://github.com/tomamic/tomamic.github.io/tree/master/data)

---

![small](images/repr/unicode.svg)
![](images/repr/text-len.png)
# ⭐ Unicode Transformation Format

- Codifica di un *code-point* in una sequenza di bit
    - Servono uno o più **code-unit**
- *UTF-32* – code-unit di 32-bit, sempre 1 c.u.
- *UTF-16* – code-unit di 16-bit, lunghezza 1-2 c.u.
- *UTF-8* – code-unit di 8-bit, lunghezza 1-4 c.u.
    - Max compatibilità con ASCII

![](images/repr/utf8.jpg)

---

![](images/repr/utf8-web-growth.svg)
# ⭐ UTF-8

- Se bit più alto a `0`, nel *code-point*
    - Simbolo ASCII su 7 bit, invariato
- Altrimenti, codifica su `n` *code-unit* (byte)
    - Primo byte inizia con `n` bit a `1`, poi uno a `0`
    - Byte seguenti cominciano tutti con `10`
- Bit di payload / lunghezza codifica: `7/8`, `11/16`, `16/24`, `21/32`

![large](images/repr/utf8-examples.png)

>

[Pike&Thompson: UTF-8 designed on a placemat](https://www.cl.cam.ac.uk/~mgk25/ucs/utf-8-history.txt)

---

# 🧪️ UTF-8 in Python

- Tipo **`bytes`** : sequenza immutabile di byte
    - Metodo `encode` per codificare `str` → `bytes`
    - Metodo `decode` per decodificare `bytes` → `str`
    - Formati `"utf-8"`, `"utf-32-be"`…
- Metodo `hex` per rappresentare `bytes`
    - Separatore tra i byte, opzionale
    - Operazione inversa con `bytes.fromhex`
- Inserire code-point hex in una stringa: `\x…`, `\u…` e `\U…`

``` py
>>> txt = "My 2¢ 😉"  # or: "My 2\xa2 \U0001f609"
>>> enc = txt.encode("utf-8")  # `bytes`
>>> enc.hex(" ")
"4d 79 20 32 c2 a2 20 f0 9f 98 89"
>>> enc.decode("utf-8")  # back to `str`
"My 2¢ 😉"
```

---

![](images/repr/guybrush.png)
# Immagini

---

![](images/repr/rgb-raster.png)
# ⭐ Immagini raster

- *Digitalizzazione* : da immagine a sequenza binaria
- **Immagine raster** : suddivisa in una griglia di punti
    - Ogni punto (**pixel**) descritto da un codice
    - Il codice individua il colore
- **Profondità**: # bit assegnati a ogni pixel
    - Per rappresentarne il colore
    - 1, 2, 8, 12, 16, 24, 32… bit per pixel (*bpp*)
    - Es. 8 bit per `$256 (=2^8)$` possibili colori
    - Colore diretto o indicizzato da una **palette**
- **Risoluzione**: # punti per pollice (*dpi*), come in tipografia
    - Spesso (ma non sempre), risoluzione orizzontale uguale a verticale

---

![](images/repr/spectral-sensitivity.svg) ![](images/repr/additive-color.svg) Rosso, verde, blu + <br> Ciano, magenta, giallo
# 🔬 Modelli di colore

- Occhio sensibile a variaz. luminosità
    - 6 mln di coni, 125 di bastoncelli
- **RGB**: rosso, verde, blu
    - 8 bit: 3 bit × R e G, 2 × B
    - 24 bit: 8 bit × R, G e B
    - 32 bit: canale alpha x opacità
- **YUV**: luminosità, crominanza di R e B
    - Sistema PAL, JPEG, MPEG
    - TV a colori (compat. B&W)
- **HSL**: tonalità, saturazione e luminosità

>

<https://en.wikipedia.org/wiki/RGB_color_model> <br/>
<https://en.wikipedia.org/wiki/YUV> <br/>
<https://en.wikipedia.org/wiki/HSL_and_HSV>

---

# ⭐ Formati di file raster

- *BMP*
    - Immagine (normalmente) non compressa
- *TIFF, PNG*
    - Compressione *lossless*
    - Occupazione ridotta, senza deterioramento
- *JPEG*
    - Compressione *lossy*
    - Occupazione molto minore, ma immagine deteriorata

>

<https://en.wikipedia.org/wiki/BMP_file_format>

---

![small](images/repr/bmp-header.jpg)
# 🧪 Formato BMP

``` text
FILE INFO HEADER (14)
2   Tipo file (= “BM”)
4   Dim. file (in byte)
4   Riservato
4   Offset immagine (in byte)
BITMAP INFO HEADER (40)
4   Dimensione struttura
4+4 Larghezza e altezza immagine
2   Piani (non usato)
2   Profondità (bpp, bit per pixel)
4+4 Compressione e dim. img (0 senza compressione)
4+4 Risoluzione orizz. e vert. (pixel per metro)
4+4 # colori in palette e # colori importanti
Palette (RGBQUAD)
4   Blue, Green, Red, Riservato
```

- Normale header: $54$ byte – Ogni colore in palette: $4$ byte

---

# 🧪 Es. Redbrick.BMP

![large](images/repr/redbrick-dump.png)

- Ogni riga occupa sempre un multiplo di 4 byte (con *padding*)
- Dimensione file: `$54 + 4\cdot colors + ⌈w\cdot bpp / 32⌉\cdot 4\cdot h$` byte

---

# 🧪 Es. Redbrick.BMP

![large](images/repr/redbrick-scan.png)

>

<http://tomamic.github.io/data/redbrick.bmp>

---

# 🧪 Lettura BMP in Python

- Dati come *sequenza di byte*, tipo `bytes`

``` py
with open("redbrick.bmp", "rb") as bmp:
    head = bmp.read(54)
    img_pos = int.from_bytes(head[10:14], "little")
    head_len = int.from_bytes(head[14:18], "little") + 14
    w = int.from_bytes(head[18:22], "little")
    h = int.from_bytes(head[22:26], "little")
    bpp = int.from_bytes(head[28:30], "little")
    colors = (img_pos - head_len) // 4
    row_len = -4 * (w * bpp // -32)  # `ceil div`, 4-byte align
    bmp.read(head_len - 54)  # consume remaining header, if any
    palette = [bmp.read(4) for _ in range(colors)]
    image = [bmp.read(row_len) for _ in range(h)]
```

>

<https://tomamic.github.io/pyodide/?p09_bmp.py>

---

# 🧪 Disegno BMP in g2d

``` py
for i, v in enumerate(palette):
    print(f"Color {i:3}:", v.hex(" "))
for i, v in enumerate(image):
    print(f"Row {i:3}:", v.hex(" "))
```

``` py
for y, row in enumerate(reversed(image)):
    for x in range(w):
        if bpp == 4:
            pix = row[x // 2]  # 2 pixels per byte
            pix = pix // 16 if x % 2 == 0 else pix % 16
            b, g, r, _ = palette[pix]
            g2d.set_color((r, g, b))
        g2d.draw_rect((x, y), (1, 1))
```

>

<https://tomamic.github.io/pyodide/?p09_bmp.py>

---

![](images/repr/vector-example.svg)
# 💡️ Grafica vettoriale

- Immagine: insieme di primitive geometriche
    - Linee, poligoni..., colori, sfumature...
- 👍 Qualità, a varie risoluzioni
- 👍 Compressione dati
- 👍 Gestione modifiche
- 👎 Non intuitiva per alcuni
- 👎 Possibilmente onerosa
- 👎 Risorse non note a priori
- **Applicazioni**: editoria (DTP), video-editing, architettura, ingegneria, grafica 3D (CAD), font vettoriali (caratteri scalabili con buona definizione)

---

# ⭐ Formati di file vettoriali

- *PS* (PostScript)
- *PDF* (Portable Document Format)
- *WMF* (Windows MetaFile)
- *TTF* (True Type Font)
- *CDR* (CorelDraw)
- *DXF* (AutoCAD)
- *SWF* (Flash)
- *SVG* (Scalable Vector Graphics, per il web)

>

<https://en.wikipedia.org/wiki/Scalable_Vector_Graphics>

---

![](images/repr/svg-example.svg)
# 🧪 Esempio di file SVG

``` svg
<!-- possibly inside an HTML5 file -->

<svg xmlns="http://www.w3.org/2000/svg"
    width="400" height="350">

  <circle cx="150" cy="200" r="140"
      fill="#ff0000"
      stroke="#000000" stroke-width="2" />

  <rect x="140" y="10" width="250" height="250" rx="40"
      fill="#0000ff" fill-opacity="0.6"
      stroke="#000000" stroke-width="2" />

</svg>
```

>

<http://tomamic.github.io/data/svg-example.html>

---


![](images/repr/multimedia.png)
# Audio digitale

---

![](images/repr/sampled-signal.svg) ![](images/repr/digital-signal.svg)
# ⭐ Audio digitale

- Suono: onde di compressione e rarefazione dell'aria
    - Oscillazioni longitudinali, in dir. propagazione
    - Spettro udibile: 20-20'000 Hz
- Grandezza analogica → discretizzazione
    - **Campionamento** (*sampling*) nel tempo
    - **Quantizzazione** (*quantizing*) delle ampiezze
- *Nyquist-Shannon*: `$f_s \geq 2B$`
    - *CD-DA*: stereo, 44.1 kHz, 16 bit
    - *Voce* (G.711): mono, 8 kHz, 8 bit
    - ❓ Qual è la *byte rate* (byte/s)? E la *bit rate* (bit/s)?

---

# ⭐ Dimensione dei WAV

- Quanti byte per ogni istante di campionamento?
    - `$BlockAlign = NumChannels \cdot BitsPerSample / 8$`
- Quanti byte per ogni secondo?
    - `$ByteRate = SampleRate \cdot BlockAlign$`
- *Resource Interchange File Format*
    - Container per dati multimediali diversi
    - WAV, AVI, ANI, RMI (midi), CDR, WebP...
- Campi `size`: sempre ridotti di 8 byte
    - Non conteggiati campi `id` e `size` stesso

>

<http://soundfile.sapp.org/doc/WaveFormat/>
<br>
<http://tomamic.github.io/data/tada.wav>

---

# 🧪 Formato WAV

![large](images/repr/wav-format.png)

---

# 🧪 Esempio di file WAV

![large](images/repr/wav-bytes.png)

---


![](images/repr/document-struct.png)
# Documenti strutturati

---

# 💡️ Documenti strutturati

- **Struttura logica**
    - Determina il *ruolo* della varie parti del testo
    - Titoli, testo, note, etc.
- **Struttura grafica**
    - Assegna una resa grafica ai ruoli
    - Quindi determina la resa grafica del documento nel suo complesso
    - “Stampa” in modo diverso ciò che ha ruolo diverso
- **Word processing**: non tanto *scrivere*, ma *ingegnerizzare informazione*

---

# 💡 WYSIWYG

- *What You See Is What You Get*
- Focus su grafica, si perde di vista la struttura logica
    - Grafica: non con i comandi grafici...
    - Ma definendo gli **stili** delle varie parti di doc, come *ruoli* logici
    - Es. stili di Word/Writer: “*Titolo*”, “*Nota in Calce*”, “*Intestazione*”
    - Non nomi grafici, ma logici
- In alternativa: editing basato su **comandi** o su **tag**

---

![](images/repr/w3c-keys.jpg)
# ⭐ HyperText Markup Language

- Documenti *strutturati* *ipertestuali*
    - Si possono creare con *Notepad* ecc.
- HTML definisce *tipi* di elementi
    - Paragrafi, collegam., multimedia…
- **Elemento** HTML composto da tre parti
    - **Tag di apertura**, **contenuto**, **tag di chiusura**
    - `Bla <i>in corsivo</i> bla`
- Molti elementi hanno **attributi** (coppie chiave-valore)
    - `<a href="http://www.unipr.it/">UniPR</a>`
    - `id` e `class`: attributi generici per assegnare *ruoli logici*
- Ci sono anche elementi **senza contenuto**
    - `<img src="blueribbon.gif" />`


>

<http://tomamic.github.io/data/html-example.html>

---

# ⭐ Anatomia di una pagina

![large](images/repr/html-page.svg)

---

# 🧪 Tag di formattazione testo

``` html
<h1>Il titolo più grande</h1>
…
<h6>Il titolo più piccolo</h6>
<p>Questo è un paragrafo.<br />A-capo ma stesso paragrafo.</p>

<ul>
  <li>Primo elemento di una lista non ordinata.</li>
  <li>Secondo elemento, <b>in grassetto</b>.</li>
<ul>

<div class="remark" id="r01">
  Struttura generica di livello blocco, con un
  elemento generico <span class="techy">inline</span>.
</div>
```

>

<https://html.spec.whatwg.org/>

---

![](images/repr/html5-logo.svg)
# 🧪 Html 5

- Nuovi elementi di struttura di Html 5
    - `header, main, nav, aside, footer`
    - `article, section, details, summary`
    - `menu, menuitem, figure, figcaption`
- Altri nuovi elementi
    - `video, audio, canvas, embed`
    - `mark, time`
    - `output, progress, meter, datalist`

>

<https://www.w3.org/TR/html5-diff/#language>
<br>
<https://developer.mozilla.org/docs/Web/HTML/Element>

---

![large](images/sys/globe.jpg)
# 🔬 The World Wide Web

- *WWW* ≈ HTML + URL + HTTP
- *HTTP*: HyperText Transfer Protocol
    - Protocollo testuale per trasferire risorse multimediali
- *URL*: Uniform Resource Locator
    - Riferimento a una risorsa in rete
    - Per HTTP, include: host; porta (80); percorso; query (dopo `?`); *id* frammento (dopo `#`)

![](images/repr/uri-diagram.svg)
