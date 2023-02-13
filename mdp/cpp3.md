![](images/dev/cpp.svg)
# Linguaggio C++
## Template

---

# Template

- I template consentono di definire funzioni e classi molto generali che hanno parametri al posto dei tipi
- Tecnica particolarmente apprezzata perché consente una notevole riusabilità del software

---

# Template di funzioni

- I template di funzioni supportano l’astrazione algoritmica: esprimere algoritmi in modo molto generale trascurando dettagli implementativi
- Esempio: scambio dei valori di due variabili

---

# Funzioni template: sintassi

- La dichiarazione e la definizione di una funzione template devono essere precedute dal prefisso di template
    - `template<class T>`
- Una funzione template corrisponde a un insieme di definizioni di funzione, il compilatore ne produce una per ogni tipo per cui si usa il template

---

# Funzioni template: sintassi (2)

- È possibile avere template di funzioni con più di un parametro di tipo
    - `template<class T1, class T2>`
- Generalmente si usano template di funzioni con un solo parametro di tipo

---

# Funzioni template e compilatori

- Molti compilatori non supportano la compilazione separata e richiedono che la definizione della funzione template sia nello stesso file in cui viene usata, prima della prima invocazione
- È possibile mettere la definizione della funzione template in un file separato ed includere questo file

---

# Definzione e uso di funzioni template

- È buona norma scrivere prima una funzione ordinaria e, solo dopo che la si è verificata, convertirla in un template
- Una funzione template può essere usata per ogni tipo per cui il codice della funzione ha senso

---

# Template di classi

- La definizione di una classe template deve essere preceduta da
    - `template<class T>`
- Le funzioni membro sono template
- Specificando il tipo è possibile dichiarare oggetti della classe template, usare il nome della classe come tipo di un parametro di una funzione, …

---

# Template di classi (2)

- Spesso le definizioni di classi template hanno restrizioni implicite sui tipi che possono essere sostituti al parametro
- Molti compilatori non supportano la compilazione separata, occorre includere anche il file di implementazione nel file di applicazione

---

# Template ed ereditarietà

- È possibile definire una classe template derivata a partire da una classe base (anche non template)

---

# Gestione delle eccezioni

- C++ fornisce strumenti per gestire situazioni eccezionali
- Terminologia
    - Sollevare un’eccezione (to throw an exception) = segnalare una situazione eccezionale
    - Intercettare l’eccezione (to catch or handle the exception) = gestire la situazione eccezionale

---

# Costrutto try-throw-catch

``` cpp
try
{
    /* Some statements */
    if (Exceptional_Case) throw exception;
    /* Some more statements */
}
catch(Type e)
{
    /* Code to be performed if a value of type `Type` */
    /* is thrown in the try block */
}
```

---

# Blocco try

- Contiene il codice per gestire le situazioni normali
- Può riconoscere e segnalare situazioni speciali sollevando eccezioni
- Se non si verificano eccezioni, l’esecuzione del blocco try è quella standard
- E’ buona norma inserire in un blocco try il solo codice che potenzialmente può sollevare un’eccezione

---

# Istruzione throw

- Usata per “lanciare” un valore detto eccezione
- Il valore lanciato può essere di qualsiasi tipo
- L’esecuzione del blocco try termina e il controllo passa a un blocco catch

---

# Blocco catch

- Contiene il codice per gestire la situazione eccezionale
- Ha un parametro che
    - Specifica quale tipo di valore può essere intercettato dal blocco
    - Consente di utilizzare il valore intercettato all’interno del blocco
- Se non viene sollevata nessuna eccezione l’esecuzione del blocco try viene completata e il blocco catch viene ignorato
- Una volta completato il blocco catch, viene eseguito il codice che segue
- Un blocco catch risponde solo a un blocco try immediatamente precedente
- Se non c’è un blocco catch del tipo opportuno il programma termina

---

# Classi di eccezioni

- Sono classi i cui oggetti contengono l’informazione che si vuole lanciare al blocco catch
- In questo modo si ottiene un diverso tipo per ogni possibile situazione eccezionale
- Può essere utile definire una gerarchia di classi di eccezioni

---

# Eccezioni multiple

- Un blocco try può potenzialmente sollevare più eccezioni di tipi diversi
- In ogni esecuzione verrà sollevata al massimo una eccezione
- Ogni blocco catch può intercettare valori di un solo tipo
- Si possono avere più blocchi catch dopo un blocco try per gestire eccezioni di tipo diverso

---

# Blocco catch di default

- Quando in un blocco try viene sollevata un’eccezione, i blocchi catch che seguono sono considerati in ordine, viene eseguito il primo che intercetta quel tipo di eccezione
- Blocco catch speciale che intercetta ogni tipo di eccezione, da usare come default
    - `catch(...) { cout << “Unexplained exception”; }`

---

# Sollevare un’eccezione in una funzione

- Spesso è utile ritardare la gestione di un’eccezione
- Una funzione può sollevare un’eccezione e non intercettarla
- Sarà il programma che usa la funzione a gestire l’eccezione
- Il programma metterà la chiamata della funzione in un blocco try seguito da un blocco catch che intercetta l’eccezione

---

# Specifica delle eccezioni

- Elenca le eccezioni che possono essere sollevate da una funzione e non vengono da essa intercettate
- Deve apparire sia nella dichiarazione che nella definizione della funzione
- Se viene sollevata un’eccezione che non viene intercettata e non compare nella specifica, viene chiamata la funzione unexpected che per default termina il programma, ma può essere ridefinita

---

# Specifica delle eccezioni ed ereditarietà

- Se `B->D`, un’eccezione di tipo `D` viene gestita come se fosse di tipo `B`, anche rispetto alla specifica
- Quando si dà una nuova definizione o si fa overriding di una funzione ereditata, non si possono aggiungere eccezioni alla specifica, ma se ne possono eliminare

---

# Quando sollevare un’eccezione

- Se la funzione è in grado di gestire in modo semplice il caso speciale, non deve sollevare l’eccezione
- Se invece il modo in cui il caso speciale va gestito dipende da dove la funzione è usata, si delega la gestione al livello superiore (le eccezioni non intercettate risalgono di scope)
- Non usare le eccezioni nei distruttori

---

# Esempio: allocazione dinamica

``` cpp
#include <new>
using std::bad_alloc;
//…
try
{
    int *p = new int[100];
}
catch(bad_alloc)
{
    cout << “Cannot alloc p”;
    //…
}
```

---

# Abuso delle eccezioni

- La gestione delle eccezioni genera overhead sia temporale che spaziale
- Le istruzioni throw rendono contorto il flusso di controllo (come le istruzioni di salto)
- La gestione delle eccezioni va usata con moderazione

---

# Vantaggi della gestione delle eccezioni

- In un linguaggio che non la supporta si può restituire un codice di errore
    - Occorre controllarlo ogni volta
    - Il programma può ignorarlo
    - Alcune funzioni non possono restituire un codice di errore
- In C++
    - Gestione uniforme delle eccezioni per tutte le funzioni
    - L’eccezione non può essere ignorata
    - Non si mescola la gestione del caso speciale e dei casi normali
    - Migliora la gestione delle variabili locali

---

# Strutture dati collegate

- Sono composte da variabili dinamiche di tipo struct o classe dette nodi
- I nodi contengono puntatori che puntano ad altri nodi
- La Standard Template Library (STL) contiene versioni predefinite di queste strutture dati

---

# Liste concatenate

- Sono liste di nodi in cui ogni nodo contiene un puntatore che punta al nodo successivo
- Il primo nodo è detto testa, la lista è referenziata tramite un puntatore alla testa
- L’ultimo nodo contiene un puntatore NULL

---

# Pile o stack

- Una pila (o stack) è una struttura dati che gestisce i dati in modo LIFO
- Ha due operazioni base:
    - Aggiungere un elemento in cima alla pila (push)
    - Prelevare un elemento dalla cima della pila (pop)
- Può essere implementata tramite una lista concatenata

---

# Code

- Una coda (o queue) è una struttura dati che gestisce i dati in modo FIFO
- Può essere implementata tramite una lista concatenata
- Occorrono due puntatori: uno alla testa e un uno alla fine della lista

---

# Classi friend

- Se una classe F è friend di una classe C, tutte le funzioni membro di F sono friend della classe C

``` cpp
class F; // forward declaration
class C
{
public:
    /*…*/
    friend class F;
    /*…*/
};
class F
{ /*…*/ };
```

---

# Iteratori

- Un iteratore è un costrutto usato per indicare un elemento all’interno di una struttura dati
- Una classe iteratore estende il concetto di puntatore definendo operatori che consentono di usare la sintassi dei puntatori con gli oggetti della classe (++, --, ==, !=, *)
- Un iteratore è usato insieme a una classe struttuta dati che ha le funzioni membro begin() e end()

---

# Standard Template Library

- Progettata per gestire insiemi di dati in modo comodo ed efficiente senza conoscere dettagli implementativi
- Fa parte dello standard C++
- È basata sulla programmazione generica
- Containers
    - Sono classi template usate per contenere insiemi di dati
- Iterators
    - Servono per muoversi nell’insieme di dati
- Algorithms
    - Implementazioni di molti algoritmi per operare sull’insieme di dati

---

# Iteratori

- È un’astrazione progettata per nascondere i dettagli implementativi e fornire un modo uniforme per esplorare le strutture dati
- Ogni classe container ha il suo tipo di iteratori ma la terminologia, la sintassi e la semantica sono le stesse

---

# Operatori per iteratori

- Operatore di incremento ++ (in forma prefissa e postfissa)
    - Fa avanzare l’iteratore all’elemento successivo
- Operatore di decremento -- (in forma prefissa e postfissa)
    - Fa retrocedere l’iteratore all’elemento precedente
- Operatori di confronto == e !=
    - Per verificare se due iteratori puntano allo stesso elemento
- Operatore di dereferenziazione *
    - Per accedere all’elemento puntato dall’iteratore (l’accesso può essere di sola lettura)

---

# Iteratori e containers

- Le classi container hanno due funzioni membro che restituiscono iteratori collocati in posizioni speciali
    - begin() restituisce un iteratore che punta al primo elemento
    - end() restituisce un valore speciale che può essere usato per verificare se un iteratore punta oltre l’ultimo elemento

---

# Tipi di iteratori

- Gli iteratori sono classificati secondo il tipo di operazioni ad essi applicabili
    - Forward iterators: si può applicare l’operazione ++
    - Bidirectional iterators: si possono applicare le operazioni ++ e --
    - Random access iterators: si possono applicare le operazioni ++ e -- e si può accedere a qualsiasi elemento in un solo passo
- Ogni categoria include le precedenti

---

# Iteratori constant e mutable

- Un iteratore di qualsiasi tipo è
    - Constant se l’operatore `*` restituisce l’elemento puntato come r-value
    - Mutable se l’operatore `*` restituisce l’elemento puntato come l-value
- Se una classe container ha iteratori mutable, ha anche iteratori const

---

# Reverse iterators

- Se una classe container ha iteratori bidirezionali, per passare gli elementi in ordine inverso si possono usare i “reverse iterators”
- La funzione membro `rbegin()` restituisce un iteratore che punta all’ultimo elemento
- La funzione membro `rend()` restituisce un valore speciale che può essere usato per verificare se un reverse iterator punta oltre il primo elemento
- L’operatore ++ fa avanzare un reverse iterator in senso inverso

---

# Sequential containers

- Gli elementi sono ordinati in base al modo in cui sono inseriti
    - slist (lista concatenata semplice, non standard)
    - list (lista concatenata doppia)
    - vector
    - deque (coda in cui si inseriscono e rimuovono elementi a entrambe le estremità)

---

# List (vs. vector)

- Gli elementi non sono contigui in memoria
- Non forniscono accesso casuale agli elementi
- L’inserimento e la rimozione degli elementi impiegano lo stesso tempo in tutte le posizioni
- L’inserimento o la rimozione di un elemento non invalidano puntatori, iteratori e reference

---

# Container adapters

- Sono classi template implementate a partire da altre classi
    - stack, queue basate su deque
    - priority_queue basata su vector
- È possibile specificare un container sottostante differente da quello di default
    - Es: stack<int, vector<int> >

---

# Associative containers

- Ogni elemento ha associato un valore detto chiave
- Gli elementi sono individuati per mezzo della chiave
- set, multiset, map, multimap

---

# Set

- Ogni elemento coincide con la sua chiave
- Ogni elemento può comparire al più una volta
- Per motivi di efficienza memorizza gli elementi in ordine rispetto al loro valore (i set sono implementati come alberi binari)
- Per default l’ordinamento usa l’operatore <
    È possibile specificare un diverso criterio di ordinamento purché sia
    - Antisimmetrico: op(x,y)=TRUE -> op(y,x)=FALSE
    - Transitivo: op(x,y)=TRUE && op(y,z)=TRUE -> op(x,z) = TRUE
    - Irriflessivo: op(x,x) = FALSE
- multiset è come set ma consente la ripetizione degli elementi

---

# Map

    È un insieme di coppie ordinate di elementi (corrisponde a una funzione)
    - Es: map<string, int> numberMap;
- Per motivi di efficienza memorizza gli elementi in ordine rispetto al valore della chiave
- Se non si specifica un ordinamento, viene usato quello di default
- multimap è come map ma consente che più valori siano associati alla stessa chiave

---

# Algoritmi generici

- STL contiene algoritmi generici
- STL specifica non solo
    - sintassi (interfaccia)
    - semantica (relazioni di I/O)
- ma anche
    - tempo di calcolo

---

# Miscellanea

- Regole di buona programmazione
    - Pre-condizioni e post-condizioni
    - Programmazione difensiva
    - La macro assert
- Checklist for class authors
- Cosa fare ora

---

# Pre- e post-condizioni

    È buona norma includere nella dichiarazione di una funzione un commento che indichi
    - Pre-condizioni: condizioni che devono esistere quando la funzione è chiamata
    - Post-condizioni: condizioni che si verificano dopo che la funzione è eseguita
    -     Descrizione del valore restituito o delle modifiche al valore degli argomenti

---

# Esempio di pre- e post-condizioni

``` cpp
void showInterest(double balance, double rate);
//Precondition: balance is a non-negative savings
//account balance, rate is the interest rate expressed
//as a percentage, such as 5 for 5%.
//Postcondition: the amount of interest on the given
//balance at the given rate is shown on the screen.
```

---

# Programmazione difensiva

- Metodologia che punta alla prevenzione dell’errore piuttosto che alla sua correzione
- Si introducono controlli (detti invarianti) in punti del programma in cui certe condizioni devono sicuramente essere verificate

---

# Macro assert

- Un altro modo per introdurre controlli di errore al fine di documentare e verificare la correttezza dei programmi
- Valuta un’espressione booleana:
    - se è vera non accade nulla
    - se è falsa il programma termina e invia un messaggio di errore

---

# Macro assert (2)

- Può essere usata per verificare le pre-condizioni
    È definita nella libreria cassert
- Utile nella fase di debug, dopo il test introduco #define NDEBUG e gli assert vengono ignorati
    - assert infatti è definita come una macro: definendo NDEBUG prima di includere assert.h, si disattiva la macro

---

# Deallocazione autom.

- Reference counting vs. garbage collection
    - Quando ci sono 0 riferimenti, oggetto rimosso
    - Risolve maggior parte di memory leak
    - Non funziona con riferim. ciclici! (Cfr. weak_ptr)
- TR1 (2005) di C++ introduce shared_ptr
    - // vector<Polygon*> elements; vector<shared_ptr<Polygon> > elements;
    - Oggetti rimossi quando si distrugge il vector
    - O cmq quando si annulla l'ultimo shared_ptr
- *Last one out, turn off the lights*

---

# Lista con smart ptr

``` cpp
#include <memory>
typedef std::shared_ptr<Polygon> PolyPtr;

class ListOfPolygons {
  public:
    void addElement(PolyPtr p) { elements.push_back(p); }
    PolyPtr getElement(int i) { return elements[i]; }
    int getSize() { return elements.size(); }
    void sort() { /* … */ }
  private:
    vector<PolyPtr> elements;
}

typedef std::shared_ptr<ListOfPolygons> ListPtr;
```

---

# Smart ptr all'opera

``` cpp
// Create a list and fill it with polygons
auto list = make_shared<ListOfPolygons>();
list->addElement(make_shared<Rectangle>(5, 7));
list->addElement(make_shared<Square>(6));
list->addElement(make_shared<Triangle>(3, 4, 5));
list->addElement(make_shared<RegularPolygon>(5, 7));

// Print areas
list->sort();
for (int i = 0; i < list->getSize(); ++i) {
  PolyPtr p = list->getElement(i);
  cout << p->getName() << ": " << p->area();
}

// Delete polygons and list
list = nullptr; // No need for anything else!

---

# Organizzazione del codice

---

# Suddivisione del codice in file

- Separazione tra la classe e i programmi che la usano
    - Riuso: parti separate facilmente riusabili (libreria)
    - Compilazione selettiva
- Separazione tra interfaccia e implementazione
    - Incapsulamento: occultamento dei dettagli
    - Diverse implementazioni di una stessa libreria

---

# Regole per incapsulamento

- Rendere private tutte le variabili membro
- Raggruppare definizione della classe, dichiarazioni degli operatori e commenti nel file di interfaccia (header file)
- Raggruppare le definizioni delle funzioni membro, degli operatori e delle funzioni ausiliarie e l’inizializzazione delle variabili static nel file di implementazione

---

# Compilazione separata

- Il file che contiene il programma che usa la classe si chiama file di applicazione
- Sia l’implementazione che l’applicazione devono includere l’header file
- L’implementazione e l’applicazione vengono compilate separatamente
- Per ottenere l’eseguibile occorre linkare i due oggetti

---

# Compilazione separata (2)

- Sorgenti
    - `dtime.cpp`
    - `timedemo.cpp`
    - `dtime.h`
- Oggetti
    - `g++ -c dtime.cpp`
    - `dtime.o`
    - `timedemo.o`
- Eseguibile
    - `g++ -c timedemo.cpp`
    - `g++ dtime.o timedemo.o –o timedemo`
    - `timedemo`

---

# Comando make

- Capisce quali moduli devono essere ricompilati e invia i comandi opportuni
- Utilizza un file chiamato makefile o Makefile che descrive le dipendenze e contiene i comandi per aggiornare i file
- Verifica il tempo di ultima modifica dei file per decidere quali richiedono aggiornamento

---

# Makefile: esempio

``` make
timedemo: timedemo.o dtime.o
g++ timedemo.o dtime.o -o timedemo
timedemo.o: timedemo.cpp dtime.h
g++ -c -W -Wall -pedantic timedemo.cpp
dtime.o: dtime.cpp dtime.h
g++ -c -W -Wall -pedantic dtime.cpp
```

---

# Vantaggi della compilazione separata

- Separando l’interfaccia e l’implementazione della classe dall’applicazione
    - Posso riusare la classe in diversi programmi senza riscriverla
    - Posso compilare l’implementazione solo una volta
- Separando l’interfaccia dall’implementazione
    - Se cambio l’implementazione non devo cambiare i programmi che usano la classe
    - Devo solo ricompilare l’implementazione e rifare il link

---

# Librerie header-only

- Codice contenuto tutto in file di header (`.h` o `.hpp`)
- Non richiesta installazione
- Non richiesta compilazione separata
- Necessario se presenti template
- Approccio adottato da molte librerie [Boost](https://www.boost.org/)
- Però, tempo di compilazione più lungo

---

# Problema di inclusione ripetuta

``` cpp
// classA.h
class A { /* … */ };
```

``` cpp
//classB.h
#include “classA.h”
class B {
    A var;
};
```

``` cpp
// main.cpp
#include “classA.h”
#include “classB.h”
// …
```

- Implementazioni nei file header o in file `classA.cpp` e `classB.cpp`

---

# Uso di #ifndef

- Un header file può includere altri header file
- Per evitare che il contenuto di un header file venga incluso più volte è necessario racchiudere il codice tra queste due sezioni:

``` cpp
#ifndef NOMEHEADER_H
#define NOMEHEADER_H
```

``` cpp
#endif
```

- Come identificatore si usa il nome del file in maiuscolo e con l’underscore al posto del punto
- Convenzione usata in tutti gli header std (iostream, vector, string,…)

---

# Inclusione ripetuta corretta

``` cpp
#ifndef CLASSA_H
#define CLASSA_H

class A { /* … */ };

#endif
```

- Lo stesso, per tutti i file header

---

# Namespace e direttiva using

- Un namespace è un insieme di definizioni di nomi (classi, funzioni, …)
- Se il codice non è messo esplicitamente in un namespace è nel namespace globale (accessibile ovunque)
- Per creare un namespace

``` cpp
namespace Name_Space_Name {
    /* Some code */
}
```

- Per rendere disponibili tutti i nomi di un namespace si usa la *direttiva* `using`
- Lo scope della direttiva using va dal punto di occorrenza alla fine del file o del *blocco*

``` cpp
using namespace Name_Space_Name;
```

---

# Dichiarazione using

- Per rendere disponibile un solo nome di un namespace uso la *dichiarazione*
    - `using Name_Space_Name::One_Name;`
- Utile con (molte) chiamate a pochi nomi

``` cpp
using std::cin;
using std::cout;
using std::string;
```

---

# Differenze tra direttiva e dichiarazione

- La *dichiarazione* introduce un solo nome
- La *direttiva* introduce tutti i nomi del namespace, ma solo potenzialmente
    - Si possono avere sovrapposizioni potenziali
    - Non si possono avere sovrapposizioni *esplicite*

---

# Qualificazione dei nomi

- Si può qualificare un nome ogni volta che lo si usa
    - Es.: `std::cin`
- Quando il nome è usato poche volte
    - Per specificare il tipo dei parametri…
- Entro lo scope di una direttiva `using` per un altro namespace, che definisce lo stesso nome

``` cpp
using namespace MySpace;  // defines istream

void someFunction(istream p1, std::istream p2);
```

---

# Come specificare il namespace?

- Evitare l’uso della *direttiva* `using` all’inizio del file
    - Vanifica il meccanismo dei namespace
- La maggior parte delle volte è preferibile l’uso della *dichiarazione* `using`
- Se il programma usa namespace diversi in punti diversi può essere opportuno inserire le direttive o dichiarazioni using in *blocchi*
- Negli header file usare la *qualificazione* dei nomi
    - Altrimenti, nomi importati anche nel codice che usa la libreria

---

# Namespace senza nome

- *Unità di compilazione*, costituita da…
    - Un file `cpp`
    - Tutti gli header file da esso inclusi
- Ogni unità di compilazione ha un *namespace senza nome*
    - Contiene nomi locali all’unità di compilazione
    - Non usare il namespace senza nome nei file header

``` cpp
namespace { … }
```

---

# Nascondere le funzioni ausiliarie

- Funzione membro privata
    - Se la funzione accede ai dati dell’oggetto
- Nel namespace senza nome, nel file di implementazione
    - Se la funzione non accede ai dati dell’oggetto

``` cpp
// library.cpp
void f() {}  // f is defined here and not declared anywhere
namespace {
   void g() {}  // same as above, except within an anonymous namespace
}
```

``` cpp
// client.cpp
void f();  // declare f
int main() {
   f();  // f is available
   g();  // compilation error, not available here
}
```
