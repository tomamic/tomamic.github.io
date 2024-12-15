![](/images/sys/hatred-pc.png)
# Sistemi operativi
## Introduzione all'informatica

---

![](/images/sys/broken-pc.png)
# Sistema operativo

- Avviato automaticamente all'accensione
- Intermediario tra utente, applicazioni e hardware
- Funzionalità: a lotti (*batch*), o interattivi
- Accesso utenti: mono-utente, o multi-utente
- Gestione risorse: mono-programmazione, *multi-programmazione* (time-sharing), *multi-elaborazione* (multi-core...)

---

# Sistema operativo a cipolla

![large](/images/sys/onion.svg)

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

![large](/images/sys/process-lifecycle.svg)
# Scheduling

- CPU singola: non reale parallelismo (in un dato istante, un solo processo in esecuzione)
- **Time-sharing**: ciclicamente, assegnato il processore per un *time-slice* (intervallo fisso ~10-100ms)
- Se entro l'intervallo il processo termina
    - Avviato nuovo intervallo, eseguito altro processo
- Se non termina o si blocca (attesa risorsa)
    - Processo sospeso, avviato nuovo intervallo, eseguito un altro processo (*preemptive* O.S.)

---

![](/images/sys/threads.svg)
# Thread di esecuzione

- Più piccola unità di istruzioni che può essere schedulata dal S.O.
- Possibile dividere un processo in diversi compiti, in esecuzione concorrente
    - Stessa base di codice
    - Condivisione di *heap* e di risorse → *Mutex e semafori*
    - Diverso *stack* e *stato CPU*

---

![](/images/sys/deadlock.svg) Deadlock
# Parallelismo e concorrenza

- Parallelismo
    - Più unità di elaborazione fisiche, CPU o core
- Concorrenza
    - Diversi processi, non necessariamente tutti attivi
    - Gestione accesso simultaneo a risorse condivise
    - Problemi tipici: starvation, deadlock

---

# Memoria virtuale

- Uno o più programmi: richiesta più memoria di quella disponibile (primaria)
- O.S. cerca di simulare una memoria *grande, economica e veloce*
    - Gestione della gerarchia di memoria primaria/secondaria
    - Libera programma (e programmatore) da dim memoria fisica

![large](/images/sys/mem-architecture.svg)

---

# Paginazione

- Memoria divisa in pagine di uguale dimensione
- A ogni programma in esecuzione assegnato un certo numero di pagine
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
- **Driver**: programmi software che permettono l’accesso a una specifica periferica
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

![](/images/repr/file-system.svg)
# Altre funzionalità

- **File system**: organizzazione logica dei dati in strutture ad albero
- **Shell**: interazione testuale o grafica con l'utente
    - *Gestione utenti*: personalizzazione e protezione degli accessi alle risorse
    - *Esecuzione applicazioni* <br> &nbsp;
- Applicazioni di tipo diverso
    - *Software orizzontale*, di utilizzo generale (es. office)
    - *Software verticale*, per esigenze di settori specifici (es. hotel)
    - *Software personalizzato*, ad hoc per un committente (es. sito web)

---

# Comandi per cartelle

- `pwd` — Mostrare il percorso della cartella di lavoro attuale
- `cd $folder$` — Cambiare la cartella di lavoro attuale
- `mkdir $folder$` — Creare una cartella
- `rm -r $folder$` — Eliminare una cartella
- `ls $folder$` — Elencare il contenuto di una cartella, con i soli nomi
- `ls -la $folder$` — Elencare… con dettaglio completo

---

# Comandi per file

- `mv $file$ $dest$` — Spostare un file
- `cp $file$ $dest$` — Copiare…
- `rm $file$` — Eliminare…
- `touch $file$` — Creare un file vuoto, o aggiornare il *timestamp*
- `chown $user$ $file$` — Assegnare un file a un utente
- `chmod $mode$ $file$` — Impostare la modalità di accesso a un file
- `chmod +x $file$` — Renderlo eseguibile

---

# Comandi di visualizzazione

- `echo "$message$"` — Mostrare un messaggio
- `cat $file$` — Mostrare il contenuto di uno o più file (anche per concatenarli)
- `less $file$` — Mostrare il contenuto di un file, paginato
    - (Digitare “`:q`” per uscire)
- `sort $file$` — Mostrare le righe di un file, ordinate
- `xdd $file$` — Mostrare il *dump* esadecimale di un file binario

---

# Comandi di ricerca

- `find . -name $name$` — Cercare un file ricorsivamente, per nome
- `find . -size $size$` — … per dimensione
- `find . -mtime $time$` — … per data di modifica
- `whereis` — Cercare un comando
- `grep $regex$ $file$` — Cercare una *regex* in un file
- `grep -r` — … in una cartella

---

# Comandi per processi

- `ps aux` — Elencare tutti i processi in esecuzione
- `top` — Elencare i processi recentemente più attivi
- `kill $pid$` — Terminare un processo per *id*
- `killall $name$` — Terminare dei processi per nome

---

# Comandi per archivi e sistema

- `zip -r $folder$, unzip $file$` — Comprimere e decomprimere un archivio zip
- `wget $url$` — Scaricare uno o più file da una $url$
- `sudo …` — Eseguire un comando come amministratore
- `apt install $package$, apt uninstall $package$` — Installare o disinstallare un pacchetto del sistema
- `man $command$` — Mostrare il manuale di un comando

---

# Operatori e composizione di comandi

- `>` — Redirigere stream di output verso un file
- `<` — Redirigere stream di input da un file
- `|` — Connettere output di un comando con input di un altro
- `*` — Jolly, qualsiasi sequenza di caratteri all'interno dei nomi di file
- `&` — Alla fine di un comando, esecuzione in *background*, shell libera per altri comandi
- `#` — Commento fino a fine riga (come in Python)
- `.` — Attuale cartella
- `..` — Cartella genitore

---

# Esempi

- `echo "Hello world" > hello.txt`
    - Output di `echo` verso file `hello.txt`
    - File sovrascritto, contiene testo “Hello world”
- `cat < hello.txt`
    - Contenuto di `hello.txt` come input per `cat`
    - Mostrerà il contenuto del file a console
- `ls | less`
    - `ls` e `less` avviati assieme in due processi
    - Output di `ls` = input per `less`
    - Aggiunta paginazione alla lista dei file
- `ps aux | grep firefox`
    - `ps aux` e `grep firefox` avviati assieme in due processi
    - Output del primo = input per il secondo
    - Ricerca righe contenenti “`firefox`”, in lista processi

---

# Modulo os di Python

- `chdir, chmod, chown, getcwd, listdir, mkdir, rename, remove, rmdir`
- `walk` — Percorrere con un `for` un intero ramo del file system <br> Sequenza di triple: percorso della cartella attuale, lista dei file, la lista delle cartelle
- `popen, kill` — Lanciare o terminare un processo

>

<https://docs.python.org/3/library/os.html>

---

# Modulo sys di Python

- `platform` — nome del sistema
- `argv` — lista di stringhe, argomenti da riga di comando per lo script Python
- `path` — lista di percorsi da cui importare moduli

*—*

- Con `os` e `sys`, pratica interazione con OS da Python
    - Script di installazione e aggiornamento
    - Automazione di task di amministrazione

>

<https://docs.python.org/3/library/sys.html>
