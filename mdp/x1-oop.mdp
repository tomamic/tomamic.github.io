![](images/oop/modules.png)
# Sistemi ad oggetti
## Introduzione all'informatica

---

# Sistema software ad oggetti

- Sistema procedurale
    - Insieme di procedure che si chiamano tra loro
- Sistema ad oggetti
    - Insieme di *oggetti* che si scambiano *messaggi*
    - Per richiedere ad altri l’esecuzione di servizi
- La complessità diminuisce tanto più quanto…
    - Lo stato dei singoli oggetti è nascosto
    - L’insieme dei servizi offerti dai singoli oggetti è coeso (ma generale)

---

# Approccio allo sviluppo

- Programmazione procedurale: **top-down**
    - Analisi problema x trovare algoritmo risolutore
    - *Scomposizione* problema in problemi più semplici *(loop)*
- OOP: top-down...
    - Analisi problema e descrizione degli oggetti che ne fanno parte (astrazioni generali e coese)
    - Scomposizione oggetti in parti più semplici (e messaggi/servizi scambiati) *(loop)*
- OOP: ... e **bottom-up** (riuso)
    - Definizione e riuso oggetti relativamente semplici
    - *Composizione* in oggetti più complessi *(loop)*

---

# Modularità e astrazione

- Modularità e testabilità
    - Oggetto, completo di dati ed operazioni, inserito facilmente tra gli altri componenti di un sistema
    - Codice di un oggetto scritto e mantenuto indipendentemente dal resto
    - Più facile isolare e risolvere i problemi
- Information-hiding e **astrazione**
    - Interazione solo con i metodi di un oggetto (black-box)
    - Dettagli interni dei dati e dell'implementazione nascosti al mondo esterno (**incapsulamento**)
    - Oggetto: tipo di dato astratto (ADT)

---

# Riuso e sostituibilità

- Riuso del codice
    - Oggetto già esistente → incapsulato in altri oggetti, per altri programmi (**composizione**)...
    - Anche se sviluppato (progetto/implem./test/debug) da altri, specialisti di un certo dominio
    - Oggetti di nuovo tipo creati come estensione di tipi esistenti (**ereditarietà**)
    - Sistemi generici basati su astrazioni (**generalizzazione**), adattati implementando date interfacce
- Sostituibilità
    - Oggetti di tipo diverso possono fornire gli stessi metodi, ed essere gestiti in maniera astratta (**polimorfismo**)
    - Nuovo oggetto (che implementa i metodi richiesti) inserito in un sistema astratto già esistente

---

# Associazioni e relazioni in UML

![large](images/dev/uml-relations.svg)

---

# Dipendenza e associazione

- **Dipendenza**: un metodo di una classe ha come argomento, valore di ritorno o var locale un’altra classe (con cui non è associata)
- **Associazione**: una classe ha come campo uno o più oggetti di un'altra classe
- Ognuno dei lati
    - Ha un nome
    - Ha una cardinalità
    - Può o no essere navigabile
- Un’associazione equivale a codice
    - Solo i lati navigabili implementano l’associazione
    - Memorizzazione in *array* o altra *collezione* (se cardinalità > 1)
    - Controllare il vincolo sulla cardinalità
- Dipendenze e associazioni limitano la riusabilità perchè *accoppiano* le classi

---

![](images/oop/character.svg)
# Contenimento

- Associazione che esprime un contenimento fisico, o in generale un legame di tipo **has-a**
- Può essere *composizione* o *aggregazione*
    - **Composizione**: ciclo di vita dell'oggetto contenuto determinato dal contenitore (legame *whole-part*, *owns-a*)
    - **Aggregazione**: oggetto contenuto non rigidamente legato al contenitore
- Spesso nel codice non è chiara la differenza tra contenimento ed un più generica associazione

---

# Composizione

- Idealmente, un oggetto (creato e testato) rappresenta una unità di codice, che altri oggetti possono usare
    - Il riuso in progetti diversi non è semplice da ottenere…
- Inserire un oggetto (*member object*) dentro un’altro
    - Il nuovo oggetto può contenere un certo numero di oggetti di tipo diverso, per realizzare le funzionalità desiderate
    - Relazione **whole-part** o **owns-a**
- Grado elevato di flessibilità
    - Gli oggetti membri sono di solito nascosti
    - Inaccessibili ai programmatori che usano l’oggetto
    - Possono essere cambiati senza disturbare il codice esterno

---

# Associazioni e attributi

- Associazioni e attributi del modello generano codice
- Le **associazioni** vengono usate per collegare tra loro le *classi* del modello
- Gli **attributi** sono tipi di base (o *primitivi*)
    - Come `int`, `float` o `string`
    - Classi di base, usate pervasivamente
    - Classi di altre librerie, non evidenziate nel modello

---

# Classe derivata

- Specializzazione: relazione *is-a* tra classe derivata e classe base
- Principio di sostituibilità tra classi
    - È sempre possibile usare una classe derivata al posto di una classe base
- La classe derivata
    - Eredita tutte le caratteristiche **public** della classe base
    - Non può accedere alle caratteristiche **private** della classe base
    - Può dichiarare nuove caratteristiche che non sono visibili dalle classi base (Eckel: *is-like-a*)
- La classe base
    - Può definire delle caratteristiche **protected** a cui solo lei e le classi derivate possono accedere

---

# Classe astratta

- Contiene metodi che possono essere implementati solo dalle sue classi derivate
    - Informazioni non sufficienti nella classe base
    - Meccanismi specifici per implementare un metodo
    - …
- Una classe astratta non può essere istanziata

---

# Figure geometriche

![large](images/dev/abs-shapes.svg)

---

# Ereditarità e riusabilità

- Strutture dati ed algoritmi possono essere implementati in funzione della classe `Shape`
    - Anzichè di una specifica classe derivata, come `Rectangle`
    - Ad esempio, l'ordinamento può sfruttare il fatto che tutte le figure hanno un area
- Massimizzazione di riuso e flessibilità
    - Dipendenza dalla classe più alta nella gerarchia...
    - Che offre le caratteristiche richieste

---

# A cosa serve l’ereditarità?

- Due utilizzi principali
    - Modellare il problema (o la soluzione), molto importante nella fase di analisi
    - Massimizzare il riuso, molto importante nella fase di progettazione
- I due utilizzi sono legati perchè la prima bozza di un progetto è il modello che analizza il dominio del problema (o della soluzione)
- Eckel: **ereditarietà o composizione?**
    - “*Do I need to **upcast**?*”

---

# Ereditarietà multipla

- Un quadrato è contemporaneamente…
    - Un rettangolo
    - Un poligono regolare
- La classe `Square` dovrebbe estendere sia `RegularPolygon` che `Rectangle`
    - Quale stato usare?
    - Quale metodi eseguire?
- A volte ereditarietà multipla non ammessa o non conveniente
    - No ambiguità, no “*diamond problem*”

---

# Interfaccia

- Interfaccia di un oggetto: descrizione dei suoi metodi pubblici
    - Modo che ha per interagire con il mondo
    - Servizi che offre agli altri oggetti
- I corpi dei metodi, cioè come i servizi vengono implementati, non sono parte dell’interfaccia
    - L’interfaccia indica cosa un oggetto sa fare e non come lo fa
- Interfaccia di un rettangolo
    - `float area()`
    - `float perimeter()`

---

# Classe astratta pura

- Una interfaccia è una classe astratta pura
    - Tutti i metodi sono astratti
    - Implementazione in classe concreta
    - Libertà su come memorizzare stato ed implementare metodi
- Usando le interfacce
    - Migliore pulizia del modello ed aderenza alla realtà modellata
    - Possibilità di migliorare la riusabilità

---

# Implementazioni di Shape

![large](images/dev/shapes.svg)

---

# Framework e librerie

- Ma introdurre un’interfaccia per ogni classe non è sempre l’approccio migliore!
    - Mantenere basso il numero di livelli d'astrazione
    - Può bastare `Shape`, + classi concrete?
- **Libreria**: l'utente usa...
    - Poche e semplici interfacce (astrazioni chiave)
    - Implementazione dietro le quinte (*factory*)
    - È sempre il codice utente che chiama la libreria
- **Framework**: l'utente fornisce...
    - Implementazione di metodi di certe classi astratte
    - Classi che implementano certe interfacce
    - Il framework può chiamare il codice utente

---

# Generalizzazione e riuso

- Riuso tramite **ereditarietà**
    - Aggiungere nuovi servizi a classi già esistenti
    - Si riutilizza il codice della classe esistente
    - Si possono sfruttare anche parti *protected* della classe base
    - Ma si eredita anche l'*interfaccia* pubblica!
- Riuso tramite **generalizzazione**
    - Costruire sistemi che operano su astrazioni di alto livello
    - Specializzati mediante oggetti che implementano date interfacce
    - Si riutilizza un intero sistema, modificandone il comportamento
    - Oggi, composizione e generalizzazione sono i meccanismi di riuso più apprezzati


