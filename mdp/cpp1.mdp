![](images/dev/cpp.svg)
# Linguaggio C++
## Programmazione strutturata

---

# C++ basics

- Elementi fondamentali
    - Variabili e costanti, espressioni, assegnamenti
- Istruzioni di controllo
    - Espressioni booleane, istruzioni di branching (if-else, switch), cicli (while, do-while, for)
- Funzioni e parametri
    - Call-by-value, call-by-reference
- Array e strutture
- Puntatori e allocazione dinamica

---

# Funzione main()

- Punto di partenza del programma
- Lo standard ANSI/ISO C++
    - Impedisce la dichiarazione priva di tipo (`int`) della funzione main
    - Consente di omettere l’istruzione
    - `return 0;`
    - nella funzione `main`

---

# Variabili

- Variabili
    - Convenzione sui nomi (`lower_case`, o `camelCase`)
    - Convenzione da usare per:
    -     variabili, parametri, funzioni, campi e metodi
    - Posizione della dichiarazione
- Costanti
    - Convenzione sui nomi (`UPPER_CASE`)
- Tipi e classi
    - Convenzione sui nomi (`TitleCase`)
- Suggerimento: mantenere nomi di variabili, costanti, ecc. in lingua inglese

---

# Namespace

- Insiemi di definizioni di nomi (classi, funzioni, …)
- Le librerie standard mettono i loro nomi nel namespace `std`
- Per usare queste definizioni occorre la direttiva
    - `using namespace std;`
- Per usare una specifica definizione
    - `using std::cin;`

---

# Namespace (2)

``` cpp
#include <iostream>
int main() {
    int integer1, integer2, sum; // declaration
    std::cout << "Enter first integer\n"; // prompt
    std::cin >> integer1; // read an integer
    std::cout << "Enter second integer\n"; // prompt
    std::cin >> integer2; // read an integer
    sum = integer1 + integer2; // assignment of sum
    std::cout << "Sum is " << sum << std::endl; // print sum
    return 0; // program ended successfully
}
```

---

# Namespace (3)

``` cpp
#include <iostream>
using std::cout; // program uses cout
using std::cin; // program uses cin
using std::endl; // program uses endl

int main() {
    int num1, num2;
    cout << "Enter two integers";
    cin >> num1 >> num2; // read two integers
    if (num1 == num2) }
        cout << num1 << " is equal to " << num2 << endl;
    }
    return 0; // program ended successfully
}
```

---

# Strutture di controllo

- `if/else`
- `while`
- `for`
- `do/while`
- `switch`
- Programmazione ad oggetti: tende ad essere meno strutturata di quella procedurale

---

# Funzioni

- Elementi costitutivi delle classi
    - Funzioni membro = metodi
- Caratterizzate da nome, parametri (numero, ordine e tipo) e tipo di ritorno
- Le funzioni hanno un prototipo
- Il prototipo non è necessario se la definizione della funzione appare prima del suo utilizzo
- Nel prototipo i parametri possono non avere nome, ma per chiarezza in genere lo si mette

---

# Funzioni (2)

- Direttiva `#include` per importare prototipi di funzioni delle librerie standard
- Ogni libreria standard ha un file header
    - Dichiarazione di funzioni, tipi di dati e costanti
- Funzioni `inline`
    - Generata una copia della funzione ogni volta che questa viene utilizzata
    - Evita l’overhead del chiamare la funzione
    - Utile per funzioni brevi ed usate spesso

---

# Funzioni (3)

``` cpp
#include <iostream>
using std::cout;
using std::endl;

int cube(int y); // prototype

int main() {
    int x;
    for ( x = 1; x <= 10; x++ )
    cout << cube( x ) << endl;
    return 0;
}

int cube( int y ) {
    return y * y * y;
}
```

---

# Parametri per valore o riferimento (1)

- **Call-by-value**
    - L’argomento può essere una variabile o un’espressione
    - Il parametro formale viene inizializzato al valore dell’argomento
    - La funzione riceve una *copia* del valore dell’argomento
- **Call-by-reference**
    - “`&`” attaccato al tipo del parametro formale
    - L’argomento deve essere una variabile
    - Il parametro formale viene sostituito con la variabile argomento
    - La funzione può modificare la variabile argomento
    - Vantaggio: migliori prestazioni
    - Svantaggio: minore modularità, la funzione chiamata può corrompere i dati della chiamante

---

# Parametri per valore o riferimento (2)

- Oggetti di grandi dimensioni possono essere passati per riferimento, dichiarandoli però costanti
    - `const int &x;`
- Suggerimento
    - Parametri piccoli e non modificabili: call-by-value
    - Parametri modificabili: puntatori
    - Parametri grandi e non modificabili: reference a costante (oppure puntatore a costante)

---

# Puntatori

- I puntatori contengono come valori indirizzi di memoria
- Quindi mentre una variabile contiene direttamente un valore, un puntatore lo contiene indirettamente: indirection
- L’operatore `*` (*indirection*) ritorna un sinonimo dell’oggetto a cui il suo operando (un puntatore) punta

---

# Puntatori (2)

``` cpp
#include <iostream>
using std::cout;
using std::endl;

int main() {
    int a;  // a is an integer
    int *aPtr;  // aPtr is a pointer to an integer
    a = 7;
    aPtr = &a;  // aPtr set to address of a
    cout << "The address of a is " << &a << "\nThe value of aPtr is " << aPtr;
    cout << "\n\nThe value of a is " << a << "\nThe value of *aPtr is " << *aPtr;
    cout << "\n\nShowing that * and & are inverses of each other." <<
         "\n&*aPtr = " << &*aPtr << "\n*&a = " << *&a << endl;
    return 0;
}
```

---

# Puntatori e allocazione dinamica

- L’operatore new crea una variabile dinamica e restituisce un puntatore ad essa
    - Esempio:
    - `int *p;`
    - `p = new int;`
- L’operatore delete distrugge la variabile e dealloca la memoria
    - Esempio:
    - `delete p;`

---

# Arrays, dynamic arrays, vectors

- Arrays: insiemi di dati dello stesso tipo, allocati staticamente
    - Esempio: `int a[10];`
- Dynamic arrays: la dimensione è determinata (e può variare) durante l’esecuzione
    - Esempio: `int *p = new int[10]; /*...*/ delete[] p;`
    - `delete[]` chiama prima il *distruttore* di ogni elemento
- Vector: una classe template della STL
    - Esempio: `vector<int> a;`

---

# Parametri array

- Se un parametro formale è di tipo array ([] dopo il nome del parametro) l’argomento passato è il nome di un array (senza [])
- La funzione può modificare gli elementi dell’array (di fatto viene passato un puntatore costante al primo elemento dell’array)
- Si deve passare alla funzione anche la dimensione dell’array

---

# Parametri const (1)

- Se prima di un parametro è inserito il modificatore `const`, il compilatore verifica che la funzione non lo modifichi
- Va usato sia nella definizione che nella dichiarazione (prototipo)
- Se un parametro const è passato a un’altra funzione, anche in essa deve essere const
- Il corretto utilizzo consente di assegnare ai metodi delle classi solo i privilegi effettivamente necessari, rispettando i concetti della programmazione object oriented e facilitando il debug

---

# Parametri const (2)

``` cpp
#include <iostream>
using std::cout; using std::endl;

// sPtr cannot modify the character it points to
// it is a non-const pointer to const data ("read-only" ptr)
void printCharacters( const char *sPtr ) {
    for ( ; *sPtr != '\0'; sPtr++ ) { cout << *sPtr; }
}

int main() {
    char string[] = "print characters of a string";
    cout << "The string is:\n";
    printCharacters( string );
    return 0;
}
```

---

# Casting

- In generale pericoloso, sorgente di errori a run time
- Quattro nuovi costrutti di casting: più specifici, meno potenti (è un bene!)
    - `static_cast<tipo>(expr)` : conversione tra tipi
    - `const_cast<tipo>(expr)` : attributo const (on/off)
    - `dynamic_cast<tipo>(espressione)` : gerarchie di classi
    - `reinterpret_cast<tipo>(expr)` : puntatori, int

---

# Overloading (1)

- C++ consente di avere più funzioni con definizioni diverse e lo stesso nome
- Devono differire per il numero di parametri e/o il tipo di almeno un parametro (signature)
- Non possono differire solo per
    - Valore ritornato
    - Modificatore const
    - Call-by-value vs. call-by-reference
- Funzionalità importante della programmazione ad oggetti: è corretto che se una stessa operazione può essere applicata a tipi di dati differenti, il nome dell’operazione non cambi

---

# Overloading (2)

- Signature di una funzione
    - Nome più lista dei tipi dei parametri
    - Deve essere unica per ogni definizione di funzione
- Il compilatore risolve la chiamata di funzione in base alla signature
- É possibile effettuare l’overloading non solo delle funzioni, ma anche degli operatori

---

# Risoluzione overloading

- Il compilatore cerca, nell’ordine:
    - Match esatto
    - Match con promozione tra tipi interi o tra tipi floating-point
    - Match con altra conversione tra tipi predefiniti
    - Match con conversione tra tipi definiti dall’utente
- Se in uno dei tentativi trova più match, dà errore

---

# Esempio overloading

``` cpp
#include <iostream>
using std::cout;
using std::endl;

int square( int x ) { return x * x; }
double square( double y ) { return y * y; }

int main() {
    cout << "The square of integer 7 is " << square( 7 ) <<
        "\nThe square of double 7.5 is " << square( 7.5 ) << "\n";
    return 0;
}
```

---

# Argomenti di default

- Per i parametri call-by-value si può specificare un valore di default
- Se il corrispondente argomento manca, il parametro assume il valore di default
- Il valore di default va inserito nella prima tra dichiarazione e definizione
- I parametri con valore di default devono stare nelle posizioni più a destra
- Nella chiamata gli argomenti vanno omessi a partire da destra

---

# Overloading e arg. default

- Entrambi consentono di invocare un nome di funzione in più modi
- Gli argomenti di default vanno usati quando:
    - Esiste un valore di default sensato (es.: se il valore fosse nullo, meglio l’overloading)
    - La funzione usa lo stesso algoritmo indipendentemente dal numero di argomenti nella chiamata
- Attenzione: l’overload unito all’uso di argomenti di default può portare a codice di difficile comprensione

---

# Rappresentazione stringhe

- C++ offre due modi per rappresentare le stringhe di caratteri
    - Il modo ereditato dal linguaggio C (*C-strings*)
    - Oggetti della classe string (presente nella libreria standard)

---

# C-strings

- Array di char terminati col carattere `\0`
- I valori di tipo stringa (es. `"Hello"`) sono implementati come C-string

``` cpp
char message[10] = "Ciao";
char short_string[] = "abc";
char array_of_char[] = {'a', 'b', 'c'};
char s[10];
```

---

# Libreria cstring

- Le C-strings non consentono l’uso degli operatori `=` e `==`
- La libreria cstring contiene funzioni per la manipolazione delle C-strings (definizioni nel namespace globale)
    - Es. `strcpy, strcmp, strcat, strlen`
- Lo standard C++ ha aggiunto versioni safe di queste funzioni
    - Es. `strncpy, strncmp, strncat, strnlen`

---

# I/O di C-strings

- *Inserimento* di una C-string in un output stream, con op. `<<`

``` cpp
char message[] = "Hello";
cout << message;
```

- *Estrazione* di una parola da un input stream, con op. `>>`
    - Ignora eventuali caratteri di spaziatura iniziali
    - Lettura si ferma al primo carattere di spaziatura
- Lettura di un’intera riga di input con metodo `getline` di istream
- ⚠️ Attentione al **buffer overflow**

``` cpp
char a[80], b[80], c[80];
cin.width(80);
cin >> a >> b;
cin.getline(c, 80);
```

---

# Classe std::string

- Con le C-strings ci si deve occupare dei dettagli di implementazione
- La classe string consente di trattare le stringhe di caratteri come un tipo base
    - Con l’operatore `=` si può assegnare un valore a una variabile string
    - Con l’operatore `+` si possono concatenare due stringhe
- Classe string: definita nella libreria string, definizioni nel namespace std

---

# Conversione tra C-strings e std::string

- Le C-strings sono convertite automaticamente in oggetti string
    - Inizializzazione di un oggetto string con una C-string
    - Assegnamento di una C-string ad un oggetto string
    - Concatenazione di oggetti string e C-strings
- Non c’è conversione automatica di oggetti string in C-strings
    - Funzione membro `c_str()`

---

# I/O di std::string

- *Inserimento* di una `std::string` in un output stream, con op. `<<`
    - Es: `string message("Hello"); cout << message;`
- *Estrazione* di un oggetto string da un input stream, con op. `>>`
    - Ignora eventuali caratteri di spaziatura iniziali
    - Lettura si ferma al primo carattere di spaziatura
    - Es: `string s1, s2; cin >> s1 >> s2;`
- Lettura di un’intera linea di input con la funzione `getline(a_stream, a_string)` definita nella libreria string
- Le operazioni di lettura di `std::string` evitano il **buffer overflow**

---

# Altre funzionalità

- Sono fornite funzioni di utilità per:
    - Comparazione
    - Manipolazione
    - Estrazione di sottostringhe
    - Rimpiazzo o inserimento di caratteri
    - Iterazione tra gli elementi
    - ...

---

# Classe std::vector

- Oggetti di tipo `std::vector`
- Array la cui dimensione può cambiare durante l’esecuzione
- Template di classe della *Standard Template Library (STL)*
- Definito nella libreria `vector` all’interno del namespace `std`

``` cpp
#include <vector>
using namespace std;
```

``` cpp
vector<int> v;
```

---

# Operatore [] dei vector

- Accesso agli elementi di un `vector`
- Può essere usato per leggere un elemento
- Può essere usato per cambiare un elemento che ha già un valore
- Non può essere usato per inizializzare un nuovo elemento
- Non controlla se l’elemento esiste
- Per aggiungere elementi (in ordine di posizione) si usa il metodo `push_back()`

---

# Costruttore con un argomento intero

- Crea un numero di elementi pari all’argomento e li inizializza…
    - Con lo zero del tipo numerico se è un vettore di numeri
    - Con il costruttore di default se il tipo base è un tipo classe

``` cpp
vector<int> v(10);
vector<DayOfYear> days(3);
```

---

# Dimensioni e capacità

- Dimensione: numero di elementi in un vector
    - Restituita dal metodo `size()`
    - Metodo `resize()` modifica la dimensione del vector
- Capacità: numero di elementi per i quali c’è memoria allocata
    - Restituita dal metodo `capacity()`
    - Metodo `reserve()` riserva una capacità minima
- Posso ignorare la gestione della capacità se non serve efficienza
    - Se aggiungo elementi oltre la capacità…
    - Questa viene automaticamente aumentata

---

# Modern C++

---

![](images/dev/cpp.svg)
# Modern C++

- Nuova versione dello linguaggio, approvata da ISO il 2011-08-12
    - Initializer lists
    - Uniform initialization
    - Type inference
    - Range-based for loop
    - Lambda functions
    - ...
- Successive versioni nel 2014, 2017, 2020, ...

> C++11 feels like a new language (Bjarne Stroustrup)

---

![](images/algo/my-shoes.png)
# Tipizzazione statica

- Modello di memoria: le comuni variabili non sono *riferimenti*, ma *contenitori* di dati
    - Occorrono **dichiarazioni** di tipo
    - Ma possibile *type inference* (`auto`)
- Tipi principali: `int`, `float` e `double`, `bool`, `string` e `char`

``` cpp
int x = 10;
double h = 3.7;
string s = "hello";

auto y = 5;        // type inference
auto k = 2.2;
auto t = "hola"s;  // recent compiler
```

---

# Stringhe

- `std::string`: sequenza *mutevole* di byte (tipo `char`)
- Operazioni di confronto; concatenazione: `+`

``` cpp
#include <string>
using std::string, std::to_string, std::stoi;
// ...

string sentence = "Lorem ipsum";
sentence[6] = 'I';
cout << sentence[6];  // 'I'

int n = 5;
string txt = to_string(n);
int val = stoi(txt);  // see also `stod`, `stof`...
```

---

![](images/fun/shopping-list.jpg)
# Vector, array dinamici

``` cpp
#include <vector>
using std::vector;
// ...

// initialization list
vector<string> grocery = {"spam", "egg", "beans"};
cout << grocery[1] << endl;  // egg
cout << grocery.size() << endl;  // 3
grocery[0] = "sausage";  // replace an elem

grocery.push_back("bacon");  // add elem to the end
grocery.pop_back();  // remove last elem

grocery.insert(begin(grocery) + 1, "bacon");  // other elems shift
grocery.erase(begin(grocery) + 1);  // remove elem at index
```

>

<http://tomamic.github.io/fondinfo/p3-composizione.html#/4>

---

# Cicli for, range-based

``` cpp
for (auto product : grocery) {
    // for each product in grocery
    cout << product << endl;
}
```

``` cpp
for (int i = 0; i < 5; ++i) {
    // for each i : 0 <= i < 5
    cout << i * i << endl;
}
```

>

<http://tomamic.github.io/fondinfo/p3-composizione.html#/8>


