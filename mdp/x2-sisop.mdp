![](images/sys/hatred-pc.png)
# Sistemi operativi
## Introduzione all'informatica

---

![](images/sys/broken-pc.png)
# Sistema operativo

- Avviato automaticamente all'accensione
- Intermediario tra utente, applicazioni ed hardware
- Funzionalità: a lotti (*batch*), o interattivi
- Accesso utenti: mono-utente, o multi-utente
- Gestione risorse: mono-programmazione, *multi-programmazione* (time-sharing), *multi-elaborazione* (multi-core...)

---

# Sistema operativo a cipolla

![large](images/sys/onion.svg)

---

# Gestione dei processi

- Processo: istanza di un programma, in esecuzione
- S.O. multi-tasking: esegue più programmi in contemporanea, associati a processi
    - Crea e cancella i processi
    - Decide a quale processo assegnare la CPU
    - Sospende e riattiva i processi
- Inoltre offre meccanismi per:
    - *Sincronizzazione* e gestione *deadlock*
    - *Comunicazione* fra processi
    - Comunicazione con *periferiche*

---

![large](images/sys/process-lifecycle.png)
# Scheduling

- CPU singola: non reale parallelismo (in un dato istante, un solo processo in esecuzione)
- **Time-sharing**: ciclicamente, assegnato il processore per un *time-slice* (intervallo fisso ~10-100ms)
- Se entro l'intervallo il processo termina
    - Avviato nuovo intervallo, eseguito altro processo
- Se non termina o si blocca (attesa risorsa)
    - Processo sospeso, avviato nuovo intervallo, eseguito un altro processo (*preemptive* O.S.)

---

![](images/sys/threads.png)
# Thread di esecuzione

- Più piccola unità di istruzioni che può essere schedulata dal S.O.
- Possibile dividere un processo in diversi compiti, in esecuzione concorrente
    - Stessa base di codice
    - Condivisione di *heap* e di risorse → *Mutex e semafori*
    - Diverso *stack* e *stato CPU*

---

# Memoria virtuale

- Uno o più programmi: richiesta più memoria di quella disponibile (primaria)
- O.S. cerca di simulare una memoria *grande, economica e veloce*
    - Gestione della gerarchia di memoria primaria/secondaria
    - Libera programma (e programmatore) da dim memoria fisica

![](images/sys/mem-hierarchy.png)

---

# Paginazione

- Memoria divisa in pagine di uguale dimensione
- Ad ogni programma in esecuzione assegnato un certo numero di pagine
- Quando l’istruzione da eseguire non è in memoria primaria (**page fault**)…
    - Se necessario, una pagina viene spostata da memoria primaria a secondaria
    - La pagina che contiene l’istruzione viene trasferita in memoria primaria
    - Principio di *località* (dati e riferimenti di solito raggruppati)
- Politica di paginazione
    - Di solito *LRU (Least Recently Used)*...
    - Anzichè *FIFO (First In First Out)*

---

# Gestione periferiche

- Procedure I/O ad alto livello per interazione tra programmi e periferiche
- **BIOS** (Basic I/O System, firmware)
    - Diagnostica e inizializzazione dispositivi interni (es. controllo memoria)
    - Avvio sistema operativo (da Boot Sector)
- **Driver**: programmi software che permettono l’accesso ad una specifica periferica
- In genere periferiche caratterizzate da:
    - Velocità gestione dati << CPU
    - Invio dati saltuario e imprevedibile

---

# Interruzione

- Necessario un meccanismo per:
    - Gestire una periferica mentre la CPU compie altre attività
    - Evitare interrogazioni continue della CPU alle periferiche (**polling**) per disponibilità dati I/O
- Stato normale di elaborazione: la CPU si disinteressa delle periferiche
- Una periferica chiede I/O dati: attiva una linea verso CPU (genera una **interruzione**)
    - Sospensione processo in esecuzione (salvataggio stato dei registri, per poter riprendere l’elaborazione dopo l'interruzione)
    - Eseguito **interrupt handler** (trasferimento dati da/verso periferica ecc.)
    - Riattivazione del processo sospeso

---

![](images/sys/file-system.png)
# Altre funzionalità

- **File system**: organizzazione logica dei dati in strutture ad albero
- **Shell**: interazione testuale o grafica con l'utente
    - *Gestione utenti*: personalizzazione e protezione degli accessi alle risorse
    - *Esecuzione applicazioni* <br> &nbsp;
- Applicazioni di tipo diverso
    - *Software orizzontale*, di utilizzo generale (es. office)
    - *Software verticale*, per esigenze di settori specifici (es. hotel)
    - *Software personalizzato*, ad hoc per un committente (es. sito web)


