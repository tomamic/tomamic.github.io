![](images/dev/cpp.svg)
# Linguaggio C++
## Introduzione alla programmazione

---

# Output su file

``` cpp
#include <fstream>
```

``` cpp
int n; float r; string w;
cin >> n >> r >> w;

ofstream file2{"output.txt"};  // file output stream
if (file2) {                   // is stream available?
    file2 << "Values: " << n << " " << r << " " << w << endl;
}
file2.close();
```

---

# Lettura di righe

``` cpp
ifstream file1{"input.txt"};  // when finished, close file1!
```

``` cpp
string first_line, second_line;
getline(file1, first_line);   // no newline at end
getline(file1, second_line);  // no newline at end
```

``` cpp
string whole_text;
getline(file1, whole_text, '\0');  // read whole file
```

``` cpp
string line;
// for each line in file1...
while (getline(file1, line)) {
    cout << line << endl;
}
```

>

<http://tomamic.github.io/p5-matrici.html#/4>

---

# Flussi e stringhe

- Si può gestire una stringa come uno stream
    - `istringstream`, `ostringstream` in libreria `<sstream>`
    - Per estrarre valori e inserire valori, rispettivamente

``` cpp
/* Split a text into a sequence of strings */
string text = "one:two::three";
istringstream sstr{text};  // a stream view on a string
for (string item; getline(sstr, item, ':');) {
    cout << "- " << item << endl;
}
```

``` output
- one
- two
-
- three
```

---

# Lettura di dati

``` cpp
ifstream file1{"input.txt"};
```

``` cpp
if (file1) {                         // is stream available?
    int n; float r; string w;
    file1 >> n >> r >> w;
}
```

``` cpp
for (int val; file1 >> val;) {       // or float, string ...
    cout << setw(4) << val << endl;  // val occupies 4 chars
}                                    // setw in <iomanip>
```

``` cpp
file1 >> noskipws;                   // scan also whitespaces
for (char val; file1 >> val;) {      // for each char in file1
    cout << val << endl;
}
```

---

# 🥷 Parametri per riferimento

- Parametri per riferimento (`&`) sono *alias*
    - Le modifiche riguardano anche le variabili esterne
    - Limitarne l'uso!

``` cpp
// pass by reference: external vars can be modified
void swap(int& m, int& n) {
    int tmp = m;
    m = n; n = tmp;
}

int main() {
    int a = 5, b = 7;
    swap(a, b);
    cout << a << " " << b << endl;
}
```

---

# Strutture dati lineari

---

![large](images/fun/dynamic-array.svg)
# Vector, array dinamici

- **Array**: area di memoria che contiene in *celle contigue* elementi tutti dello *stesso tipo*
- Usato internamente dai `vector` del C++
    - Riallocazione dinamica e trasparente per inserimenti e rimozioni
- `Vector` come **array dinamici**
    - Accesso casuale: `O(1)`
    - Aggiunta o rimozione in fondo all'array: `O(1)`, ma a volte riallocazione
    - Inserimento o rimozione: `O(n)`

---

# Vector di float

``` cpp
class FloatVector {  // ...
    int capacity_;
    int size_;
    float* data_;
public:
    FloatVector(int size, float val);
    float get(int pos);
    void set(int pos, float val);
    void insert(int pos, float val);
    float remove(int pos);
    int size();
};
```

Implementazione nel repository di esempi

---

# Inserimento in vector

``` cpp
void FloatVector::insert(int pos, float val) {
    if (pos < 0 || pos > size_) throw out_of_range("wrong pos");
    if (size_ == capacity_) expand_capacity();
    for (int i = size_; i > pos; --i) data_[i] = data_[i - 1];
    data_[pos] = val;
    ++size_;
}
void FloatVector::expand_capacity() {
    capacity_ *= 2;
    float* bigger = new float[capacity_];
    for (int i = 0; i < size_; i++) bigger[i] = data_[i];
    delete[] data_;
    data_ = bigger;
}
```

---

# Liste concatenate

![](images/fun/linked-list.svg)

- Ciascun **nodo** contiene un *valore* della lista e un *puntatore* al nodo successivo
    - Accesso casuale: `O(n)`
    - Aggiunta o rimozione in testa all'array: `O(1)`
    - Aggiunta o rimozione in fondo all'array: `O(n)`, oppure `O(1)` se noto ultimo nodo
    - Inserimento o rimozione: `O(1) + O(n)` per ricerca

---

# Lista di float

``` cpp
struct Node {
    float val;
    Node* next;
};
class FloatList {  // ...
    Node* head_; int size_;
public:
    FloatList(int size, float val);
    float get(int pos);
    void set(int pos, float val);
    void insert(int pos, float val);
    float remove(int pos);
    int size();
};
```

Implementazione nel repository di esempi

---

# Inserimento in lista

``` cpp
void FloatList::insert(int pos, float val) {
    if (pos < 0 || pos > size_) throw out_of_range("wrong pos");
    if (pos == 0) {
        head_ = new Node{val, head_};
    } else {
        Node* n = head_;
        for (int i = 0; i < pos - 1; ++i) n = n->next;
        n->next = new Node{val, n->next};
    }
    ++size_;
}
```

---

# Template C++

- **Programmazione generica**: codice che opera su *tipi parametrizzati*
    - Es. liste di `int`, `string` ecc.: cambia solo il tipo di dato!
- **Template**: meccanismo di programmazione generica in C++
    - Generaz. trasparente di codice specializzato per un tipo
    - Es. `vector<float>` genera una classe ≈ `FloatVector`

``` cpp
template <class T>
T max(T a, T b) {
    if (a >= b) return a;
    return b;
}
```

``` cpp
double x = max<double>(5.0, 3.5);  # <double>, <int>: optional
int i = max<int>(4, 6);            # inferred from parameters

