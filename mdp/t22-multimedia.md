
![](images/repr/binary-hacker.jpg)
# Multimedia
## Introduzione all'informatica <br> Michele Tomaiuolo @ Ingegneria UniPR

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

<https://tomamic.github.io/pyodide/?p42_bmp.py>

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

<https://tomamic.github.io/pyodide/?p42_bmp.py>

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
