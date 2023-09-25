![](images/dev/geek-girl.svg)
# Esercizi 2023
## Introduzione alla programmazione

---

# Esercitazione 1 (09-25)

---

![large](images/algo/holy-grail.jpg)
# 1.1 Lancelot

- Porre una domanda all'utente:
    - `"What is your name?"`
- Se la risposta è `"Lancelot"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

---

![large](images/algo/holy-grail.jpg)
# 1.2 The Bridge of Death

- Porre tre domande all'utente:
    - `"What is your name?"`
    - `"What is your quest?"`
    - `"What is your favorite color?"`
- Dopo aver ricevuto tutte e tre le risposte…
- Se le risposte sono `"Lancelot"`, `"Holy Grail"` e `"Blue"`, stampare:
    - `"Right. Off you go."`
- Altrimenti, stampare:
    - `"Down into the Gorge of Ethernal Peril!"`

<https://www.youtube.com/watch?v=Xel0c6mpqPA>

---

![large](images/misc/segments-1.svg)
# 1.3 Segmenti casuali

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare i segmenti
    - Tutti con lo stesso colore, nero
    - Ciascuno con entrambi gli estremi in posizione casuale
    - Ma interamente contenuto nel canvas

---

![large](images/misc/segments-2.svg)
# 1.4 Linea spezzata

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare i segmenti come una linea spezzata, in nero
    - Iniziare da un punto casuale e congiungerlo con un successivo punto casuale
    - Proseguire a congiungere l'ultimo punto con un nuovo punto casuale
- La linea deve essere interamente contenuta nel canvas

---

![large](images/misc/segments-3.svg)
#  1.5 Toni di grigio

- Chiedere all'utente il numero di segmenti da disegnare
- Disegnare una linea spezzata, come nell'esercizio precedente
- Variare progressivamente il tono di grigio
    - Il primo segmento ha sempre colore `(50, 50, 50)`
    - L'ultimo segmento ha sempre colore `(150, 150, 150)`
    - Indipendentemente dal numero di segmenti

---

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.6 Equazione di secondo grado

- Chiedere all'utente i tre coefficienti `a, b, c` di una equazione di secondo grado
    - `ax² + bx + c = 0`
- Comunicare all'utente che tipo di soluzioni presenta l'equazione
    - Due soluzioni reali
    - Un'unica soluzione reale
    - Nessuna soluzione reale

>

Non è richiesto il valore delle soluzioni

---

![](images/misc/quadratic-eq.svg) ![](images/misc/quadratic-formula.svg)
# 1.7 Equazione di 2° grado, con ciclo

- Riprendere l'esercizio precedente
- In caso di soluzioni reali, mostrare all'utente il loro valore
- Chiedere infine all'utente se vuole valutare altre equazioni

>

Racchiudere il programma in un ciclo `while`
<br>
Usare la funzione `sqrt` del modulo `math`

---

# 1.8 Divisori

- Chiedere all'utente un numero `n`
- Mostrare tutti i divisori di `n`

>

`n` è divisibile per `x` se `n % x == 0`

---

![large](images/misc/center-target.svg)
# 1.9 Bersaglio al centro

- Disegnare vari cerchi casuali
    - Tutti con raggio 20
    - Posizione e colore casuali
    - Il numero di cerchi non è noto
- Il disegno termina quando…
    - Il centro dell'ultimo cerchio disegnato è vicino al centro del canvas
    - Distanza minore di 20
