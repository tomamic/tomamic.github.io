![](images/dev/cpp.svg)
# Linguaggio C++
## Classi e oggetti

---

# Classi e oggetti

- Una classe è un tipo che ha *variabili membro* e *funzioni membro*
- Il valore di una variabile di un tipo classe è detto *oggetto*
- Un programma è un insieme di oggetti che interagiscono

---

# Incapsulamento

- Una classe è un tipo completo
- Un **tipo di dato** consiste di
    - Un insieme di *valori*
    - Un insieme di *operazioni*
- Tipo di dato **astratto** (ADT)
    - L’utilizzo è *indipendente dall’implementazione*
    - I tipi di dati predefiniti sono ADT
    - Le classi devono essere ADT

---

# Membri privati e pubblici

- Membri *privati*
    - Possono essere referenziati solo all’interno delle definizioni delle funzioni membro
    - Buona norma rendere private tutte le variabili membro
- Membri *pubblici*
    - Possono essere referenziati ovunque
    - Buona norma rendere pubbliche le sole funzioni membro necessarie
    - Quelle che espongono le funzionalità della classe

---

# Sezioni pubblica e privata

- Generalmente si definisce una sola sezione pubblica e una sola sezione privata
- Generalmente la sezione pubblica compare prima
    - Maggior chiarezza verso chi legge il codice
- In assenza di specificazione, C++ considera i membri privati
    - Indicativo della necessità di nascondere il maggior numero possibile di dettagli

---

# Classi: utilizzo pratico

- Una volta definita, la classe può essere usata per dichiarare oggetti, array, puntatori e riferimenti

``` cpp
Time sunset;
Time arrayOfTimes[5];
Time *pointerToTime;
Time &dinnerTime = sunset;
```

---

# Funzioni accessor e mutator

- Funzioni che forniscono un accesso controllato ai dati
    - Le funzioni *accessor* consentono di leggere i dati dell’oggetto
    - Le funzioni *mutator* consentono di modificare i dati dell’oggetto
    - Generalmente si definiscono funzioni *setter/getter*
- Buona norma mantenere private le variabili membro
    - Dotarle di funzioni accessor e mutator solo se necessario
- *Validation*
    - Una funzione che setta il valore di un dato dovrebbe anche controllarne la validità
    - Dovrebbe comunque lasciare il dato in uno stato consistente (oppure lanciare un’eccezione...)

---

# Interfaccia ed implementazione

- L’*interfaccia* di una classe consiste di
    - Dichiarazioni delle funzioni membro pubbliche
    - Commenti
- L’*implementazione* di una classe consiste di
    - Dichiarazioni di variabili e funzioni membro private
    - Definizioni delle funzioni membro
- Possono stare in file diversi, ma è importante la separazione concettuale
    - Interfaccia definita in *file header* (`.h` o `.hpp`)
    - Incluso da tutti i file che usano la classe (direttiva `#include`)
- Chi vende librerie sw fornisce solo file header e codice oggetto

---

# Programmazione orientata agli oggetti

- Un programmatore deve poter usare la classe conoscendo solo l’*interfaccia*
- Vantaggio: è possibile cambiare l’implementazione
    - Senza cambiare altro codice che usa la classe
- Filosofia: descrivere il problema in termini di *oggetti che interagiscono*
    - Piuttosto che algoritmi che operano su dati
    - Anche algoritmi e dati possono cambiare

---

# Classe di esempio: interfaccia

``` cpp
// prevent multiple inclusions of header file
#ifndef TIME1_H
#define TIME1_H
// Time abstract data type definition
class Time {
public:
    Time(); // constructor
    void setTime( int, int, int ); // set hour, minute, second
    void printMilitary(); // print military time format
    void printStandard(); // print standard time format
private:
    int hour; // 0 - 23
    int minute; // 0 - 59
    int second; // 0 - 59
};
#endif
```

---

# Classe di esempio: implementazione

``` cpp
#include "time1.h"
Time::Time() { hour = minute = second = 0; }
void Time::setTime( int h, int m, int s ) {
    hour = (h >= 0 && h < 24) ? h : 0;
    minute = (m >= 0 && m < 60) ? m : 0;
    second = (s >= 0 && s < 60) ? s : 0;
}
void Time::printMilitary() {
    cout << (hour < 10 ? "0" : "") << hour << ":"
         << (minute < 10 ? "0" : "") << minute;
}
void Time::printStandard() {
    cout << ((hour == 0 || hour == 12) ? 12 : hour % 12) << ":"
         << (minute < 10 ? "0" : "") << minute << ":"
         << (second < 10 ? "0" : "") << second
         << (hour < 12 ? " AM" : " PM");
}
```

---

# Classe di esempio: utilizzo

``` cpp
#include "time1.h"
int main() {
    Time t1;
    t1.setTime(17, 15, 0);
    t1.printStandard();
    Time *t2 = new Time;
    t2->setTime(17, 20, 0); // (*t2).setTime(17, 20, 0);
    t2->printStandard(); // (*t2).printStandard();
    delete t2;
}
```

---

# Costruttore

- Funzione membro speciale, per *inizializzazione*
    - In sezione pubblica, ha stesso nome della classe
- Chiamato *automaticamente* quando dichiarato un oggetto
    - Non può essere invocato come altre f. membro
    - Non può restituire un valore
- Alternativa preferibile: *lista di inizializzazione* (vedi)
- Spesso si ha *overloading* dei costruttori

---

# Costruttore senza argomenti

- Quando si vuole invocare il **costruttore senza argomenti**, non si usano le parentesi
    - Altrimenti, il compilatore intende una *dichiarazione di funzione*
    - `Time t1();  // ⚠️ function declaration! avoid parens`
- *Uniform initialization*, Modern C++
    - Chiamata al costruttore con parentesi *graffe*
- In assenza di costruttore, creato un **costruttore di default** senza aromenti
    - Se definito almeno un costruttore, non creato il costruttore di default
- Meglio includere un costruttore senza parametri, se possibile

>

<https://www.fluentcpp.com/2018/01/30/most-vexing-parse/>

---

# 🥷 Chiamata esplicita del costruttore

- Il costruttore può essere chiamato esplicitamente per modificare le variabili membro di un oggetto
- Crea un oggetto anonimo e lo inizializza con i valori degli argomenti
- L’oggetto anonimo può essere assegnato a una variabile del tipo classe
    - Ex.: `DayOfYear date{4, 5};`
    - `date = DayOfYear{10, 14};`
    - Può essere più efficiente usare le mutator functions
- Se sono disponibili funzioni *mutator*
    - Chiamarle anche dal costruttore, per non ripetere codice

---

# Lista di inizializzazione

- Variabili membro: create e inizializzate nell’ordine in cui sono definite
- Lista di inizializzazione: più efficiente per variabili membro di tipo classe
- Le variabili membro *possono* essere inizializzate all’interno di una lista di inizializzazione
- Costanti, riferimenti e oggetti inizializzati in lista di inizial., oppure alla dichicarazione

---

# Lista di inizializzazione (2)

``` cpp
class Increment {
public:
    Increment(int c = 0, int d = 1);
    void addDelta() { count += delta; }
    void print() const;
private:
    int count;
    const int delta; // const data member
};
// Constructor for class Increment
Increment::Increment(int c, int d)
    : count{c}, delta{d} // initializer for members (same order)
{
    // count = c;  // alternative, only for non-const members
}
```

---

# Membri di tipo classe

- **Composizione**
    - Una classe può avere una variabile membro di tipo classe
- *Lista di inizializzazione*
    - Notazione speciale per invocare il costruttore della variabile membro nel costruttore della classe più esterna
    - I parametri del costruttore della classe più esterna possono essere usati nella chiamata del costruttore della variabile membro

---

# Distruttore

- Funzione membro speciale, chiamata *automaticamente* quando oggetto distrutto
    - Non riceve parametri e non restituisce valori
    - Una classe può avere al massimo un unico distruttore
    - *Naming*: `~` + nome classe
- *Non distrugge* l’oggetto
    - Ma svolge operazioni utili prima che l’oggetto sia distrutto
    - Es.: *rilascio della memoria* allocata dinamicamente
- Se distruzioni a catena per oggetti annidati...
    - Distruttori chiamati in *ordine inverso* rispetto ai costruttori

>

<https://github.com/tomamic/paradigmi/tree/master/oopcpp/lezione04>

---

# Variabili dinamiche di tipo classe

- Quando si usa l’operatore new con un tipo classe viene chiamato il costruttore
- Quando si usa l’operatore delete con un tipo classe viene chiamato il distruttore

``` cpp
MyClass *classPtr;
classPtr = new MyClass;
classPtr = new MyClass{2, 45.3};
// …
delete classPtr;
```

---

# Modificatore const: 1° uso

- Per un parametro di tipo classe
    - Preferibile *call-by-reference*
    - Più efficiente di *call-by-value*
- Se la funzione *non modifica* il parametro si usa il modificatore `const`

---

# Modificatore const: 2° uso

- Funzione membro che *non modifica l’oggetto* chiamante
    - `const` sia nella dichiarazione che nella definizione
- *Attenzione*: `const` richiede consistenza!

---

# Reference come valore di ritorno

- É possibile per una funzione membro pubblica restituire…
    - Una reference a membri privati della classe
- Operazione sintatticamente corretta…
    - Ma può violare il principio di information hiding

---

# Reference come valore di ritorno (2)

``` cpp
#ifndef TIME4_H
#define TIME4_H
class Time {
public:
    Time( int = 0, int = 0, int = 0 );
    void setTime( int, int, int );
    int getHour();
    int &badSetHour( int ); // DANGEROUS reference return
private:
    int hour;
    int minute;
    int second;
};
#endif
```

---

# Funzioni inline

- Definizione di funzione membro può essere posta *inline*
    - All’interno della definizione della classe
- Il compilatore *può* inserire il codice della funzione in ogni punto di chiamata
    - Svantaggio: mescoliamo interfaccia e implementazione
    - *Inline* solo funzioni molto corte
    - Ma alla fine sceglie il compilatore

``` cpp
class A {
    void hello() {
        cout << "Hello!\n";
    }
}
```

---

# Membri static: variabili

- Una variabile membro *static* è condivisa da tutti gli oggetti di una classe
- Usata dagli oggetti della classe per comunicare e coordinarsi
- Solo gli oggetti della classe possono accedervi
- Se *public*, allora accessibile con *scope resolution*
- Va inizializzata al di fuori della definizione della classe, una sola volta

``` cpp
class A {
    static int i;  // con init here, if const
};
int A::i = 5;
```

---

# Membri static: funzioni

- Una funzione membro *static* accede solo ai membri *static*
- Non può accedere ai dati dell’oggetto chiamante
- Viene invocata usando il nome della classe e lo *scope resolution operator* (`::`)
- La parola chiave `static` va messa solo nella dichiarazione

>

<https://github.com/tomamic/paradigmi/tree/master/oopcpp/lezione05>

---

# Overloading di operatori

---

# Operatori come funzioni

- Gli operatori (+, -, ==, …) non sono altro che…
    - *Funzioni* usate con una sintassi particolare
- C++ consente di *sovraccaricare* gli operatori per accettare oggetti
    - Caratteristica tra le più apprezzate del linguaggio
    - Può rendere alcuni programmi più chiari
    - Non abusarne quando invece l’uso non è chiaro!
- Almeno uno degli operandi deve essere di tipo classe

---

# Overloading di operatori

- Un operatore si scrive *come una comune funzione*
    - *Nome* dato dalla parola chiave `operator`
    - Seguita dal simbolo dell’operatore di cui fare l’*overloading*
- Unici *operatori predefiniti* su membri di tipo classe:
    - `=` (assegnamento)
    - `&` (indirizzo)
- L’*overloading* deve essere *sempre esplicito*
    - Es. Overload di `=` non condiziona `+=`, `-=`, o `!=`
    - Es. Se si implementa solo l’op. `+`, non si può usare `+=`

---

# Operatori come funzioni membro

- Il primo operando è l’oggetto chiamante, quindi:
    - Gli operatori binari hanno un solo parametro
    - Gli operatori unari non hanno parametri
- Vantaggi
    - È più nello spirito *OOP*
    - È più efficiente
- C’è uno svantaggio
    - Il primo operando (l’oggetto più a sinistra) deve essere membro della classe
    - Non sempre conviene, non sempre è possibile
    - Es. operatori `>>` e `<<`

---

# Costruttori e conversione di tipo automatica

- Conversioni automatiche di tipo
    - Se definizione di classe contiene i costruttori appropriati
- Es.: `myAmount + 25`
    - Creato un oggetto di classe `Amount`
    - Al costruttore viene passato `25`
- Operatore binario sovraccaricato *come membro*
    - Conversione automatica del 2° operando (argomento)
    - Non del 1° (oggetto chiamante)
- Es.: `25 + myAmount`
    - *Non funziona*, se operatore membro

---

# Operatori come funzioni non membro

- Possibile *overloading* dichiarando le funzioni
    - Senza che siano membro della classe
- *Svantaggio*: no accesso a campi privati
    - Necessità di utilizzare *accessor*
    - La classe è obbligata a fornire tali *accessor*
    - Overhead nella chiamata degli *accessor*
- Perciò, gli *operatori non membro* generalmente sono dichiarati come `friend` (…)

---

# Funzioni friend

- Funzione `friend` di una classe ha accesso ai membri privati
    - Pur non essendone membro
- Dichiarata `friend` nella definizione della classe
    - Per chiarezza meglio se all’inizio
    - Viene definita e chiamata come una funzione ordinaria
- Le funzioni `friend` hanno migliori prestazioni
    - Non necessitano di *accessor*

---

# Funzioni friend

- Le funzioni *friend* più comuni sono gli operatori sovraccaricati
- Una funzione può essere *friend* di più classi
- Offrono il vantaggio della conversione automatica di tutti gli operandi
- Ma per alcuni autori non sono nello spirito *OOP*
- Evitarle, se possibile: *violano l’incapsulamento*

---

# Funzioni friend: esempio

``` cpp
#include <iostream>
using std::cout;
using std::endl;
class Count {
    friend void setX( Count &, int ); // friend declaration
public:
    Count() { x = 0; }
    void print() const { cout << x << endl; } // output
private:
    int x; // data member
};
// Can modify private data of Count because
// setX is declared as a friend function of Count
void setX( Count &c, int val ) {
    c.x = val; // legal: setX is a friend of Count
}
```

---

# Valore di ritorno const

- Se una funzione *restituisce un oggetto*
    - Uso di `const` per valore restituito impedisce modifiche all’oggetto
    - Es: `(m1+m2).input();` // compiler error
- Funzioni *accessor* che restituiscono variabili membro di tipo classe
    - Bene usare `const` per il valore restituito
- Restituire valori di *tipi predefiniti* come `const` *non ha senso*

>

<https://github.com/tomamic/paradigmi/tree/master/oopcpp/lezione06>

---

# Operatori << e >>

- Operatori `<<` e `>>` sovraccaricati per *I/O* degli oggetti di una classe
- Notazione di immediata comprensione
- *Non possono essere sovraccaricati come membri*
- Operando più a sinistra è `ostream&`, oppure `istream&`
- Non è del tipo della classe per cui sovraccaricare `<<` e `>>`

---

# Operatori << e >>

- Di fatto le chiamate effettuate sono nella forma:
    - `cin >> object; // operator>>(cin, object);`
    - `cout << object; // operator<<(cout, object);`
- Gli operatori `<<` e `>>` restituiscono rispettivamente un oggetto `ostream` e `istream`
- In questo modo, si possono *concatenare* più chiamate all’operatore stesso
    - `cout << object1 << object2;`

---

# Puntatore this

- Un oggetto ha accesso al proprio indirizzo mediante il puntatore `this`
    - Puntatore predefinito che punta all’oggetto chiamante
- `this` non è parte dell’oggetto
    - Piuttosto è passato come *argomento implicito*
    - A tutte le funzioni membro dell’oggetto
    - Tranne le funzioni membro *static*
- Tipo del puntatore `this`:
    - Funzione membro non costante: `Employee* const`
    - Funzione membro costante: `const Employee* const`
    - Non si può cambiare il suo valore (sempre `const`)

---

# Operatori ++ e --

- Occorre un modo per distinguere la forma prefissa dalla forma postfissa
- La forma **prefissa** è sovraccaricata come qualsiasi altro operatore unario
- Nella forma **postfissa** si aggiunge un *parametro fittizio* di tipo `int`
    - Nella dichiarazione e nella definizione
    - Si tratta di un “*dummy value*” senza nessun altro scopo

---

# Operatori ++ e --

- Risultato per *riferimento* nella forma *prefissa*
- Risultato per *valore* nella forma *postfissa*

``` cpp
// Preincrement operator overloaded as a member function.
Date &Date::operator++() {
    helpIncrement(); // The increment is in this utility function
    return *this; // reference return to create an lvalue
}
// Postincrement operator overloaded as a member function. Note
// that the dummy int parameter does not have a name.
Date Date::operator++(int) {
    Date temp = *this;
    helpIncrement(); // The increment is in this utility function
    // return non-incremented, saved, temporary object
    return temp; // value return; not a reference return
}
```

---

# Operatore []

- L’operatore `[]` deve essere sovraccaricato come membro
- Se si vuole usare il valore restituito come *l-value*, deve essere una *reference*
- Il parametro **indice** può essere di *qualsiasi tipo* ed è l’argomento della chiamata alla funzione membro

---

# Overloading: riassunto

- Almeno un operando deve essere di tipo classe
- **Non si può**
    - Creare un nuovo operatore
    - Cambiare il numero di operandi di un operatore
    - Cambiare la precedenza di un operatore
    - Dare un argomento di default a un operatore sovraccaricato
- I seguenti operatori possono essere sovraccaricati *solo come membri*
    - `= [] -> ()`

---

# Overloading: riassunto

- I seguenti operatori possono essere sovraccaricati solo come *non membri* o *friend*
    - `<< >>`
- I seguenti operatori *non possono essere sovraccaricati*
    - `. :: sizeof ?:`
- Per alcuni operatori l’overloading è *sconsigliato*
    - `&&` e `||` quando sovraccaricati effettuano la valutazione completa dell’espressione
    - `,` quando sovraccaricato non garantisce l’ordine di valutazione da sinistra a destra

>

<https://github.com/tomamic/paradigmi/tree/master/oopcpp/lezione07>

---

# Copia di oggetti

---

# Operatore =

- L’operatore `=` (*assegnamento*) deve essere sovraccaricato come membro
- Se non viene sovraccaricato, viene creato automaticamente
- L’operatore `=` *di default* copia i valori delle variabili membro...
    - Da un oggetto a un altro oggetto, in variabili membro corrisp.
- *Problemi nel caso ci siano puntatori*: l’operatore `=` deve essere sovraccaricato!

---

# Operatore = di default

- Copia i valori dell’oggetto sorgente ( *r-value* ) nell’oggetto destinazione ( *l-value* )
- *Problemi* se la classe include una variabile *membro puntatore*
- Dopo assegnamento, oggetto sorgente e destinazione hanno puntatori alla stessa area di memoria
- **Memory leak**: forse l'area prima puntata dall’oggetto destinazione non è più referenziata:
- **Dangling pointer**: il primo distruttore chiamato, tra i due, distrugge la memoria a cui puntano entrambi

---

# Shallow e deep copy

- La **shallow copy** (o “copia superficiale”) di A in B si realizza copiando byte a byte i valori presenti in A. In questo modo viene di fatto copiato il solo oggetto, ma non gli oggetti “figli” a cui il “padre” fa riferimento
- La **deep copy** si realizza invece copiando anche tutti gli oggetti “figli” facenti parte dell’oggetto “padre”

>

In *Python*: funzioni `copy` e `deepcopy` in modulo `copy`

---

# Overloading operatore =

- L’operatore `=` predefinito restituisce il suo operando sinistro per *reference* (permettendo così assegnamenti in cascata)
- Quando si ridefinisce l’operatore `=` per una classe si restituisce l’oggetto chiamante per reference (usando il puntatore `this`)
- Fare attenzione al caso dell’*auto-assegnamento*

``` cpp
class A {
public:
    A& operator=(const A& other) {
        if (this != &other) {  // ... deallocate; copy data from other
        }
        return *this;  // at the end, return *this
    }
// ...
};
```

---

# Auto-assegnamento

- Se si fornisce un operatore `=`...
- Evitare auto-assegnamenti, o rischio *memory-leak*

``` cpp
// Overloaded = operator; avoids self assignment
const String &String::operator=(const String &right) {
    cout << "operator= called\n";
    if ( &right != this ) { // avoid self assignment
        delete [] sPtr; // prevents memory leak
        length = right.length; // new String length
        setString( right.sPtr ); // call utility function
    } else {
        cout << "Attempted assignment of a String to itself\n";
    }
    return *this; // enables cascaded assignments
}
```

---

# Memory leak

- Un *memory leak* (falla nella memoria) è un particolare tipo di **errore**
    - Consumo non voluto di memoria
- Dovuto al *mancato rilascio della memoria* non più utilizzata da parte dei processi
    - Il termine non è etimologicamente corretto, visto che la memoria non viene persa fisicamente
    - Piuttosto diventa inutilizzabile per un difetto del software

---

# Distruttore

- È una funzione membro che viene *chiamata automaticamente*
    - Quando termina lo **scope** di un oggetto
- Se una classe ha variabili membro *dinamiche* è bene che il distruttore le de-allochi
- Ha lo stesso *nome* della classe preceduto dal simbolo “~”
    - Non ha parametri e non ha valore di ritorno
    - Non ha argomenti e non può essere sovraccaricato
- Quando vengono chiamati più costruttori, i distruttori vengono chiamati in ordine inverso

---

# Costruttore di copia

- È un costruttore con un parametro dello stesso tipo della classe (*const call-by-ref*)
    - **const**: deve semplicemente essere costruita una copia)
    - **by reference**: altrimenti si creerebbe un ciclo ricorsivo di chiamate!
- Viene chiamato automaticamente quando
    - Un oggetto viene dichiarato e inizializzato con un altro oggetto dello stesso tipo
    - Una funzione restituisce un valore di tipo classe
    - Un oggetto viene passato per valore a una funzione

---

# Costruttore di copia di default

- Se non viene definito viene *creato automaticamente*
- Il costruttore di copia di default fa una *shallow copy*
- Se la classe comprende *puntatori* e variabili dinamiche deve essere *ri-definito*

---

# The big three

- Creati automaticamente dal compilatore
    - **Operatore `=`**
    - **Distruttore**
    - **Costruttore di copia**
- Se la classe usa *puntatori* e variabili dinamiche devono essere *ri-definiti*
    - Non farlo è un grave *errore logico*
- Di fatto sono legati dalle stesse problematiche relative all’uso di puntatori

> If you need any of them, you need all three

Esempio: `PFArrayD.cpp` di Savitch, “partially filled array of double”
<br>
<https://github.com/tomamic/paradigmi/tree/master/oopcpp/lezione10-11/PFArrayD>

---

# Ereditarietà

---

# Ereditarietà

- Una nuova classe ( *classe derivata* ) viene creata a partire da una classe esistente ( *classe base* )
- Eredita interfaccia e implementazione della classe base
    - Variabili membro, o *campi*
    - Funzioni membro, o *metodi*
- Può aggiungere variabili membro e funzioni membro

---

# Relazione “is a”

- Un oggetto di una classe derivata può essere usato ovunque può essere usato uno della classe base (*Liskov*)
- Un oggetto di una classe derivata ha più di un tipo

``` cpp
class HourlyEmployee : public Employee {
public:
    HourlyEmployee(string name, string code,
                   double wageRate, double hours);
    // …
private:
    // …
};
```

---

# Overriding

- Una classe derivata può **ridefinire un metodo** della classe base
    - La classe derivata deve contenere la dichiarazione del metodo ereditato
- È ancora possibile invocare la *versione della classe base*, utilizzando:
    - Il nome della classe base
    - Seguito dall’operatore di *scope resolution* `::`
    - Seguito dal nome del metodo
    - `obj_ptr->BaseClass::method_name()`
- Altrimenti, il metodo potrebbe chiamare se stesso, in *loop*

---

# Overriding / overloading

- Diverse funzioni membro con lo stesso nome
- **Overriding**
    - Una funzione ridefinita in una *classe derivata* ha lo *stesso numero e tipo di parametri* della funzione della classe base
    - Sostituisce la funzione della classe base
- **Overloading**
    - Una funzione sovraccaricata ha un diverso *numero e/o tipo di parametri*
    - La classe ha entrambe le funzioni
    - Stesso meccanismo delle *normali funzioni*

---

# Membri privati della classe base

- I membri privati della classe base non sono referenziabili nelle definizioni delle funzioni membro della classe derivata
- Diversamente verrebbe violato il principio di *incapsulamento*
- Le funzioni membro della classe derivata possono accedere alle variabili membro private della classe base tramite le funzioni *accessor* e *mutator*
- Le funzioni membro private della classe base non sono accessibili (di fatto non sono ereditate)

---

# Qualificatore protected

- Una variabile o funzione membro qualificata come `protected` può essere referenziata nelle funzioni membro di una classe derivata
- Le variabili membro protette agiscono come se fossero protette in ogni classe derivata
- Molti ritengono che l’uso di variabili membro protette comprometta l’incapsulamento
    - È quindi buona norma utilizzare `protected` solo quando assolutamente necessario

---

# Cosa non viene ereditato

- Oltre alle funzioni membro private non vengono ereditati
    - *Costruttori*
    - *Distruttori*
    - *Costruttori di copia*
    - *Operatori di assegnamento*
- Se non vengono definiti vengono creati quelli di default

---

# Costruttori nelle classi derivate

- I costruttori della classe base non sono ereditati
- Per inizializzare le variabili ereditate…
    - Un costruttore della classe derivata può invocare esplicitamente un costruttore della classe base, nella **lista di inizializzazione**
    - Altrimenti, viene invocato automaticamente il *costruttore senza parametri* della classe base

``` cpp
HourlyEmployee::HourlyEmployee(string name, string number,
                               double wageRate, double hours)
        : Employee(name, number), wageRate(wageRate), hours(hours)
{
    // deliberately empty
}
```

---

# Ordine di chiamata dei costruttori

- La chiamata del costruttore della classe base è la prima azione del costruttore della classe derivata
- Se `A ⇽ B ⇽ C`, quando viene creato un oggetto di classe `C`…
    - Prima viene chiamato un costruttore della classe `A`
    - Poi un costruttore della classe `B`
    - Infine un costruttore della classe `C`

---

# Distruttori in classi derivate

- Quando il distruttore di una classe derivata è invocato, viene invocato automaticamente il distruttore della classe base
- I distruttori sono chiamati in *ordine inverso* rispetto ai costruttori
- Se `A ⇽ B ⇽ C`, quando termina lo scope di un oggetto di classe `C`…
    - Viene chiamato prima il distruttore della classe `C`
    - Poi quello della classe `B`
    - Infine quello della classe `A`

---

# Operatori di assegnamento in classi derivate

- Una classe derivata quando sovraccarica l’operatore di assegnamento può fare uso dell’operatore di assegnamento della classe base

``` cpp
Derived& Derived::operator=(const Derived& rtside)
{
    Base::operator=(rtSide);
    //…
}
```

---

# Costruttori di copia in classi derivate

- Una classe derivata quando sovraccarica il costruttore di copia può fare uso del costruttore di copia della classe base

``` cpp
Derived::Derived(const Derived& obj) : Base(obj), …
{
    // …
}
```

---

# Relazioni tra oggetti

- Relazione “**is a**”
    - Esempio: *a HourlyEmployee is an Employee*
    - Utile soprattutto per polimorfismo
    - Sempre possibile usare un oggetto di una sotto-classe al posto di un oggetto di una classe base
- Relazione “**has a**”
    - Esempio: *an Employee has a Date (of employment)*
    - Serve per riutilizzo di funzionalità
    - Grado elevato di flessibilità: ...
    - Gli oggetti membri sono di solito nascosti
    - Inaccessibili ai programmatori che usano l’oggetto esterno
    - Possono essere cambiati senza disturbare il codice esterno
- Attenzione al modello: un lavoratore può cambiare *ruolo* e *contratto*

---

# Ereditarietà e riuso

- La classe base contiene il codice comune alle classi derivate
    - L’ereditarietà è una forma di *riuso del codice*
    - Si eredita il codice della classe base
- Ma la classe derivata è strettamente dipendente dalla classe base
    - Ne eredita anche l’interfaccia!
- Per il semplice riuso è meglio far ricorso alla *composizione*
    - Oggetti incapsulati forniscono funzionalità di base
    - Vedi Eckel, *Thinking in C++*: <http://www.mindview.net/Books>

---

# Ereditarietà protetta e privata

- **Ereditarietà protetta**
    - I membri pubblici della classe base hanno accessibilità protetta nella classe derivata
- **Ereditarietà privata**
    - Tutti i membri della classe base hanno accessibilità privata nella classe derivata
- La relazione “*is a*” non è valida
    - Sono raramente usate

---

# Ereditarietà multipla

- Una classe derivata può avere più di una classe base
- Possono esserci situazioni ambigue

``` cpp
class A  { /* ... */ };
class B  { /* ... */ };

class C: public B, public A  // Note the order  {
public:
  C()  { cout << "C's constructor called" << endl; }
};

int main()  {  C c; }
```

---

# The slicing problem

- Assegnamento di un oggetto di una classe derivata ad una *variabile della sua classe base*
    - Variabili e funzioni membro aggiunte dalla classe derivata vengono perse
- Il problema può essere risolto usando:
    - *Puntatori ad oggetti*
    - *Funzioni virtuali*

---

# Upcasting e downcasting

- Il casting da un tipo discendente a un tipo antenato è detto **upcasting** ed è sicuro
- Il casting da un tipo antenato a un tipo discendente è detto **downcasting** ed è pericoloso
- **Dynamic cast** per downcasting sicuro, su *puntatori*
    - `dynamic_cast < new_type > ( expression )`
    - Se il cast riesce (cioè se il tipo dinamico corrisponde al tipo che si vuole ottenere)...
    - Restituisce un puntatore al nuovo tipo
    - Altrimenti restituisce `nullptr`

---

# Polimorfismo

---

# Polimorfismo e funzioni virtuali

- Meccanismo fondamentale per realizzare *sistemi estensibili*
- Oggetti di tutte le classi di una gerarchia trattati come oggetti della *classe base*
- Risultato:
    - Scrittura di programmi più semplici (meno *branching logic*)
    - Favorito il testing ed il mantenimento del codice

---

# Metodi virtuali

- Quando un metodo di una classe base è dichiarato virtuale…
- Se invocato tramite un puntatore o un riferimento…
    - Il programma sceglie a tempo di esecuzione la funzione della classe appropriata (*late binding*, o *dynamic binding*)
- Se invocato su un oggetto…
    - La risoluzione del riferimento avviene a tempo di compilazione (*static binding*)
    - La funzione chiamata è quella della classe dell’oggetto (ottimizzazione)

---

# Metodi virtuali

- Per specificare che una funzione è virtuale si include il modificatore `virtual` nella dichiarazione (non nella definizione)
- Quando la definizione di una funzione virtuale viene cambiata in una classe derivata si parla di *overriding*
- La proprietà di essere una funzione virtuale viene ereditata lungo tutta la gerarchia

---

# Polimorfismo

- Se oggetti di classi derivate da una classe base comune ...
- ... rispondono in modi diversi alla chiamata di una certa funzione
- Si implementa tramite le **funzioni virtuali**
- Chiamata di una funzione virtuale tramite un *puntatore alla classe base*
    - Il programma sceglie la ridefinizione corretta della funzione
    - Nella classe derivata appropriata

---

# Polimorfismo

- Se una funzione **non virtuale** è ridefinita in una classe derivata non si ha polimorfismo
    - Se viene chiamata tramite un *puntatore alla classe base*, è utilizzata la versione della classe base
    - Se viene chiamata tramite un *puntatore alla classe derivata*, è utilizzata la versione della classe derivata

---

# Implementazione delle funzioni virtuali

- Le funzioni virtuali introducono *overhead*
- Compilatore crea una **tabella delle funzioni virtuali**
    - Solo se una classe ha una o più funzioni membro virtuali
    - La tabella contiene l’indirizzo di ciascuna funzione virtuale
- Ogni *istanza* contiene un puntatore alla tabella delle funzioni virtuali
- Quando una funzione virtuale viene chiamata usando un *puntatore* all’oggetto...
    - Il sistema **runtime** decide quale definizione della funzione usare
    - Usa la tabella, invece del tipo del puntatore

---

# Classi astratte e funzioni virtuali pure

- Una funzione **virtuale pura** non ha definizione
- Una classe con una o più funzioni virtuali pure è detta **astratta**
- Una classe astratta può essere usata solo come classe base per derivare altre classi, *non si possono istanziare* oggetti

``` cpp
class Abs {
public:
    virtual void f() = 0;
};
```

---

# Ereditarietà di interfaccia e di implementazione

- Con l’ereditarietà pubblica si può ereditare:
    - La sola interfaccia (funzioni *virtuali pure*), oppure...
    - L’interfaccia più...
    - Un’implementazione di default (funzioni *virtuali*)
    - Un’implementazione obbligatoria (funzioni *non virtuali*)
- È bene non ridefinire le funzioni ereditate non virtuali

---

# Polimorfismo

- *Aumento di generalità*
    - È il runtime a doversi occupare delle specificità, non il programmatore
- *Estendibilità*
    - Il codice è scritto indipendentemente dai tipi derivati
    - Nuovi tipi possono essere aggiunti...
    - Senza dover apportare modifiche a quanto già sviluppato

---

# Funzioni virtuali e parametri di default

- Quando si eredita una funzione virtuale con un parametro di default, è bene non cambiarne il valore
- Motivazione
    - Le funzioni virtuali usano *dynamic binding*
    - I parametri di default usano *static binding*

---

# Distruttori delle classi base

- Se si dealloca un oggetto di una classe derivata...
    - Attraverso un puntatore alla classe base...
    - E la classe base ha un distruttore non virtuale
    - ⇒ Il risultato è indefinito
- È bene dichiarare *virtuali* i distruttori delle classi base

