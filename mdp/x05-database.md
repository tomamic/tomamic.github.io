![](images/db/overflow.png)
# Basi di dati
## Introduzione all'informatica

---

# Sistema informativo

---

# Sistema informativo

- Sistema informativo
    - Informazioni di interesse nei processi aziendali
    - Modalità in cui esse sono gestite
    - Risorse coinvolte, sia umane sia tecnologiche
- ICT: insieme di programmi concorrenti
    - Ogni programma opera su un certo insieme di dati
    - Certi dati possono essere condivisi tra i programmi
- Casi semplici: ogni programma gestisce i suoi dati
- Altrimenti: sistema di gestione tra programmi e dati

---

![](images/db/mgmt.svg)
# Gestione distinta dei dati

- **Ridondanza** : più copie dello stesso dato
- **Inconsistenza** : copie modificate diversamente
- **Riservatezza** : dati riservati accessibili a persone non autorizzate
- **Integrità** : operazioni sbagliate o incomplete sui dati
- **Concorrenza** : accesso e aggiornamento dati non sincronizzato tra programmi differenti

---

![](images/db/dbms.svg)
# Gestione condivisa dei dati

- Tutte le azioni sui dati vengono mediate dal **DBMS** (*DataBase Management System*)
- Dati in formato standard, con backup/ripristino
- Controlli su:
    - Ridondanza, consistenza, distribuzione
    - Riservatezza, integrità
    - Accesso concorrente
- Ma risorse hw/sw (stesso DBMS)

---

# Basi di dati con DBMS

- Da preferire quando:
    - Dati organizzati secondo **modelli** predefiniti
    - **Grandi** : fino e oltre TByte, memoria secondaria
    - **Condivisi** : accesso da app. ed utenti diversi
    - **Persistenti** : tempo di vita > esecuzione app.
- Da evitare quando:
    - Insieme dati piccolo e semplice
    - Poche modifiche nel tempo
    - Non condiviso
    - Prestazioni in tempo reale

---

![](images/db/concurrency.svg) Stesso CC, <br> disponibilità 1000 € <br> Alla fine CC = -1000€, <br> oppure 0!
# Accessi concorrenti

- Problemi di consistenza dei dati condivisi
- Es. prelievo da un conto corrente come sequenza operazioni
    - Verifica disponibilità
    - Sottrazione importo

---

![](images/db/transaction.svg): Stesso CC, <br> disponibilità 1000 € <br> Permessa solo prima <br> transazione: OK!
# Transazione

- **Insieme di operazioni non decomponibili**
    - Eseguite completamente, prima che stessi dati siano nuovamente disponibili
    - **ACID** : *Atomicity, Consistency, Isolation, Durability*
- Es. precedente:
    - Verifica disponibilità
    - Sottrazione importo
    - Unica transazione!

---

# Architettura a tre livelli

![large](images/db/dbms-levels.svg)

---

# Linguaggi DDL e DML

- **DDL** (*Data Definition Language*), intensionale
    - Usato dal DBA (amministratore)
    - Definire lo schema dati, secondo il modello concettuale: gerarchico, relazionale ecc.
    - Definire tabelle, campi, chiavi ecc.
- **DML** (*Data Manipulation Language*), estensionale
    - Usato all'interno delle applicazioni
    - Operazioni **CRUD** (*Create, Read, Update, Delete*)
    - SQL (INSERT, SELECT, UPDATE, DELETE)
    - ~ 4 verbi HTTP (POST, GET, PUT, DELETE)

---

# Modelli dei dati

- Caratterizza livello concettuale e esterno DBMS
- Definito da regole precise, per esprimere sia le proprietà statiche che quelle dinamiche dei dati
- Evoluzione dei modelli:
    - **Gerarchico** (anni 1960)
    - **Reticolare** (anni 1970)
    - **Relazionale** (anni 1970)
    - **Object-relational**, **object-oriented** (anni 1980)

---

# Modello relazionale

---

![](images/hist/1971-codd.jpg) Edgar F. Codd
# Modello relazionale

- *Edgar F. Codd* @ IBM, 1970
    - Turing Award, 1981
    - DBMS reali di Oracle e IBM, 1981
- Si basa sul concetto matematico di **relazione**
    - Relazioni rappresentate da familiari *tabelle*
    - Successo anche per *semplicità* di utilizzo
- A ciascun **dominio** è associato un nome (*attributo*), unico nella relazione
    - Il nome “descrive” il ruolo del dominio
    - Attributi usati come intestazioni delle *colonne*
- Informazioni inserite nelle *righe* della tabella

>

<https://dl.acm.org/doi/10.1145/362384.362685>

---

# Definizione di relazione

- Relazione `R`: insieme di n-uple ordinate <br> `(d₁ … dₙ)` tali che `d₁ ϵ D₁ ... dₙ ϵ Dₙ`
- Cioè `R` è sottoinsieme del prodotto cartesiano `D₁ × D₂ × … × Dₙ`
- Insiemi `D₁ … Dₙ` (anche non distinti) detti **domini**
- Valore `n` detto **grado** di `R`
- Il numero di n-uple in `R` è detto **cardinalità** di `R`

---

# Database universitario

![large](images/db/university.svg)

---

# Terminologia

![large](images/db/terminology.svg)

---

# Dominio di un attributo

- Tuple di una relazione definite dall'insieme dei valori corrispondenti agli attributi
- **Dominio** di un attributo: insieme di tutti e soli i valori che quell'attributo può assumere
- Es. Dominio dei codici fiscali
-    Formato dalle stringhe di 16 caratteri che rispettano con precisione le regole di generazione dei codici fiscali

---

# Modello E-R

---

# Modello E-R

- Si creano **associazioni** tra entità **distinte**, tramite condivisione di attributi
    - Le righe di diverse tabelle hanno domini in comune
- Es. Database universitario
    - `Studenti` ed `esami` sono associati tramite gli attributi `matricola` e `studente`
    - `Insegnamenti` ed `esami` sono associati tramite gli attributi `insegnamento` e `codice`
- Semplicità: forza del modello relazionale!

---

# Chiave primaria

- Una tabella (relazione) non dovrebbe contenere due righe identiche
    - Sempre possibile scegliere un sottoinsieme di campi t.c. ...
    - Ciascuna riga della tabella identificata univocamente
- **Chiave primaria** (*primary key, PK*) di una tabella:
    - Minimo sottoinsieme di campi che permette di...
    - Identificare univocamente le righe della tabella

---

# Chiave esterna

- Le informazioni presenti in tabelle diverse possono essere associate tra loro perché tali tabelle hanno dei domini in comune
- Quando il dominio di un campo `K` che è chiave primaria in una tabella `A` è presente anche in un’altra tabella `B`...
- Allora questo campo `K` è detto **chiave esterna** (*foreign key, FK*) verso la tabella A

---

# Concetto e tipo di chiave

![large](images/db/keys.svg)

---

# Chiave candidata

- Le **chiavi candidate** sono gli attributi in una relazione con la proprietà di poter essere la chiave primaria:
    - Tra le chiavi candidate deve essere scelta la chiave primaria
    - Le chiavi escluse si dicono chiavi alternative
- Le righe di una tabella rappresentano “entità” del mondo reale
- La chiave primaria rappresenta il modo con cui è possibile distinguere queste entità

---

# Normalizzazione

- Processo di organizzazione dei dati per evitare **ridondanza**, anomalie, inefficienza
- Stessa informazione in più copie → svantaggi
    - Maggior uso di *memoria*
    - *Modifiche ripetute* della stessa informazione
    - *Inconsistenza* dei dati, se aggiornati in modo indipendente; la stessa informazione potrebbe assumere valori diversi

---

![large](images/db/shop-0.svg) ![](images/db/shop-1.svg)
# Prima forma normale

- La relazione rispetta il modello relazionale
- Le tuple hanno un numero fisso di attributi definiti su domini elementari
    - Non ci sono **righe uguali**
    - Atomicità: solo **attributi elementari**
    - Non ci sono **attributi ripetitivi**

---

![large](images/db/shop-2.svg)
# Seconda forma normale

- Non ci sono attributi non-chiave che dipendono **parzialmente** dalla chiave

---

![large](images/db/shop-3.svg)
# Terza forma normale

- Non ci sono attributi non-chiave che dipendono **transitivamente** dalla chiave
    - Ossia dipendenti da campi non-chiave

---

# Operatori relazionali

---

# Operatori relazionali

- Base teorica per i linguaggi di interrogazione delle basi di dati relazionali
    - Operano su intere tabelle considerate come insiemi, piuttosto che record per record
    - Prendono in input tabelle
    - Generano in output nuove tabelle
- Operatori
    - **Unione**, **intersezione**, **differenza** (*op. insiemistici*, applicabili a relazioni definite sugli stessi attributi)
    - **Selezione**, **proiezione** (*un solo operando*)
    - **Prodotto cartesiano**, **join** (*più operandi*)

---

# Operatori insiemistici

![large](images/db/set-ops.svg)

---

# Unione

![large](images/db/union.svg)

---

# Intersezione

![large](images/db/intersection.svg)

---

# Differenza

![large](images/db/difference.svg)

---

# Selezione e proiezione

![large](images/db/selection-projection.svg)

---

# Selezione

![large](images/db/selection.svg)

---

# Proiezione

![large](images/db/projection.svg)

---

# Prodotto cartesiano

![large](images/db/cartesian-product.svg)

---

# Join

![large](images/db/join.svg)

---

# Proiezione + selezione

![large](images/db/query-1.svg)

---

# Join + selezione

![large](images/db/query-2.svg)

---

# Join + proiezione

![large](images/db/query-3.svg)

---

# Structured Query Language

---

# Structured Query Language

- **SQL**: riferimento per manipolazione e interrogazione di basi di dati relazionali
- Deriva da una prima proposta di linguaggio di Ibm chiamato *Sequel* (1974)
- Prime implementazioni di Ibm e Oracle (1981)
- Da 1983 “standard di fatto”
- Evoluzione corrispondente ad aggiornamenti delle specifiche (1986, 1989, 1992, 1999...)

---

# Es. Tabelle parentele

``` sql
create table Person (
    Name character(20) primary key,
    Age numeric(3),
    Income numeric(9)
);
create table Paternity (
    Father character(20),
    Child character(20) unique
);
create table Maternity (
    Mother character(20),
    Child character(20) unique
);
```

---

# Es. Ricerche semplici

- Tell me name and income of people less than 30 yo
- Tell me everything of people less than 30 yo
- Fathers of people earning more than 50

``` sql
select Name, Income from Person where Age < 30

select * from Person where Age < 30

select Paternity.Father
    from Person
    join Paternity
    on Paternity.Child = Person.Name
    where Person.Income > 50
```

---

# Es. Manipolazione dati

``` sql
insert into Person
    values ('Mario', 25, 52);
insert into Person (Name, Age)
    values ('Pino', 25);
delete from Person
    where Age < 18;
update Person
    set Income = 45
    where Name = 'Piero';
update Person
    set Income = Income * 1.1
    where Age < 30;
```

---

# Es. Ricerche complesse

- Tell me name, income and fathers' age of people earning more than their father
- Tell me the name of each person's mother and father

``` sql
select C.Name, C.Income, F.Age
    from Person C
    join Paternity P on C.Name = P.Child
    join Person F on F.Name = P.Father
    where C.Income > F.Income;

select Paternity.Child, Father, Mother
    from Paternity
    join Maternity on Paternity.Child = Maternity.Child
```

---

# Es. Tabella impiegati

``` sql
create table Employee (
    Id character(6) primary key,
    Name character(20) not null,
    Surname character(20) not null,
    Location character(15),
    Salary numeric(9) default 0,
    City character(15),
    foreign key(Location)
        references Department(DepName),
    unique (Surname, Name)
)
```

---

# Create, select

``` sql
create table Table (
    Attribute Domain [Constraints],
    Attribute Domain [Constraints]
    …
    [OtherConstraints]
)
select Attribute, Attribute …
    from Table, Table …
    [where Conditions]
```

---

# Insert, update, delete

``` sql
insert into Table [(Attributes)] values(Values)
insert into Table [(Attributes)] select …
update Table set Attribute =
    <Expression | select … | null | default>
    [where Condition]
delete from Table [where Condition]
```

---

![](images/db/nosql.png)
# NoSQL

---

![](images/db/nosql.png)
# Movimento NoSQL

- *Not Only SQL*
    - Paradigma relazionale : non sempre la migliore scelta
- Varie tipologie alternative, spesso ibride
- *Document-oriented DB* : Documenti JSON (o XML…)
    - MongoDB, CouchDB
- *Graph DB* : archi e nodi, annotati
    - Neo4j
- *Key-Value DB* : Record opachi
    - Redis
- *Wide-column stores* : Record con colonne diverse
    - Cassandra, HBase

---

# Document-oriented DB

- Caratteristiche
    - Documenti strutturati
    - Isolamento operazioni su singolo doc
    - *Sharding* per partizionamento e replicazione
    - *Eventual consistency*
- Ma senza…
    - *Senza schema fisso*
    - *Senza integrità referenziale* tra i doc
    - *No ACID*, senza transazioni
- Vantaggi
    - Flessibilità e agilità di sviluppo
    - Analisi di dati semi-strutturati
    - Elevate prestazioni
    - Scalabilità e disponibilità

---

![](images/db/json.svg)
# JSON - Tipi di dati

- *Booleani* : `true` o `false`
- *Numeri* : interi o float
- *Stringhe* : racchiuse da doppi apici `""`
- *Array* : racchiusi in parentesi quadre `[]`
    - Sequenze ordinate di valori
    - Separati da virgole
- *Oggetti* : racchiusi in parentesi graffe `{}`
    - Sequenze coppie chiave-valore
    - Separate da virgole
    - Chiavi stringa
- *`null`*

---

![](images/db/json.svg)
# JSON - Esempio

``` json
{
    "name" : "Mario",
    "surname" : "Rossi",
    "active" : true,
    "favoriteNumber" : 42,
    "birthday" : {
        "day" : 1,
        "month" : 1,
        "year" : 2000
    },
    "languages" : [ "it", "en" ]
}
```

---

# JSON in Python

- Tipi JSON simili a quelli Python
    - `None` → `null`
    - `True`/`False` → `true`/`false`
    - Stringhe tra doppi apici `"`

``` py
>>> import json
>>> json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
'["foo", {"bar": ["baz", null, 1.0, 2]}]'
>>> json.loads('["foo", {"bar":["baz", null, 1.0, 2]}]')
['foo', {'bar': ['baz', None, 1.0, 2]}]
```

---

![](images/db/mongodb.svg)
# MongoDB

---

![](images/db/mongodb.svg)
# MongoDB

- Pensato per i Big Data (*“humongous”*)
- Database orientato ai documenti
    - Documenti raggruppati in *collezioni*, non omogenee
    - **Non esiste** vincolo di *integrità referenziale* tra documenti
- ⇒ Pensare in JSON
- *Community edition*
    - Open source
    - Ma licenza *non proprio* free

---

# Installazione

- *Server* `mongod`
    - <https://www.mongodb.com/try/download/community>
    - Decomprimere l'archivio `tgz`
    - Oppure in cloud su *MongoDB Atlas* (512 MB gratis)
    - Oppure installare con `atp`, dal suo repository
- *Client* `mongosh`
    - `sudo apt install mongodb-mongosh`

---

# Shell

``` sh
 # run mongod as a user's process
~/apps/mongodb/bin/mongod --dbpath ~/data/db
```

``` sh
 # otherwise, start mongod as a service
sudo service mongod start
```

``` sh
$ mongosh
MongoDB shell version v4.2.0
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("d6382e28-ca58-41af-b237-a75e52c6993e") }
MongoDB server version: 4.2.0
>
```

---

# Scegliere DB e collection

``` mongo
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
unipr   0.000GB
> use unipr
switched to db unipr
> show collections
teachers
```

---

# DB e collezioni

- *DB* : database, organizzato in varie collezioni
    - Si può chiamare `use` su un DB inesistente
    - DB creato automaticamente, al primo inserimento di dati
    - Non esiste operazione *create* esplicita
    - `db.dropDatabase`
- *Collection* : raccolta di documenti, anche eterogenei
    - Creata implicitamente, al primo inserimento di dati
    - `db.createCollection`
    - `db.collection.drop`

---

# Operazioni CRUD

- *Create* : `insertOne`/`Many`
- *Read* : `find`
- *Update* : `updateOne`/`Many`
- *Delete* : `deleteOne`/`Many`
- ⭐ Manuale dettagliato
    - <https://docs.mongodb.com/manual/>

---

# InsertOne

- Collection creata implicitamente

``` mongo
> db.teachers.insertOne({
    "familyname" : "Angiani",
    "name" : "Giulio",
    "age" : 46,
    "email" : "giulio.angiani@unipr.it",
    "role" : "Adjunct professor"
})
{
    "acknowledged" : true,
    "insertedId" : ObjectId("5d612377e503102a50f614ea")
}
```

---

# InsertMany

``` mongo
> db.teachers.insertMany([
    { "cognome" : "Mordonini", "nome" : "Monica",
      "ufficio" : { "palazzina" : 1,
                   "stanza" : 102,
                   "piano" : 1,
                   "telefono" : "+39 0521 905735"
                },
      "ruolo" : "Ricercatrice", "email" : "monica.mordonini@unipr.it"
    },
    { "cognome" : "Tomaiuolo", "nome" : "Michele", "eta" : 43,
      "ruolo" : "Ricercatore", "email" : "michele.tomaiuolo@unipr.it",
      "ufficio" : { "telefono" : "+39 0521 905708" }
    }
])
```

---

# Selezione senza filtro

- Come `select * from teachers`

``` Mongo
> db.teachers.find()
{ "_id" : ObjectId("5d612377e503102a50f614ea"), "familyname" : "Angiani", "name" : "Giulio",
"age" : 46, "email" : "giulio.angiani@unipr.it" }
{ "_id" : ObjectId("5d6126d3e503102a50f614eb"), "cognome" : "Mordonini", "nome" : "Monica",
"email" : "monica.mordonini@unipr.it", "ufficio" : { "palazzina" : 1, "stanza" : 102,
"piano" : 1, "telefono" : "+39 0521 905735" }, "ruolo" : "Ricercatrice" }
{ "_id" : ObjectId("5d6126d3e503102a50f614ec"), "cognome" : "Tomaiuolo", "nome" : "Michele",
"eta" : 43, "email" : "michele.tomaiuolo@unipr.it", "ruolo" : "Ricercatore",
"ufficio" : { "telefono" : "+39 0521 905708" } }
```

---

# Selezione con filtro

- Come `select * from teachers where name = 'Giulio'`

``` mongo
> db.teachers.find({"name" : "Giulio"})
{ "_id" : ObjectId("5d612377e503102a50f614ea"), "familyname" : "Angiani", "name" : "Giulio",
"age" : 46, "email" : "giulio.angiani@unipr.it" }

> db.teachers.find({"name" : "Giulio"}).pretty()
{
    "_id" : ObjectId("5d612377e503102a50f614ea"),
    "familyname" : "Angiani",
    "name" : "Giulio",
    "age" : 46,
    "email" : "giulio.angiani@unipr.it"
}
```

---

# Selezione su campi annidati

- In SQL solo con join o query nidificate

``` mongo
> db.teachers.find({"ufficio.palazzina" : 1 }).pretty()
{
    "_id" : ObjectId("5d6126d3e503102a50f614eb"),
    "cognome" : "Mordonini",
    "nome" : "Monica",
    "email" : "monica.mordonini@unipr.it",
    "ufficio" : {
        "palazzina" : 1,
        "stanza" : 102,
        "piano" : 1,
        "telefono" : "+39 0521 905735"
    },
    "ruolo" : "Ricercatrice"
}
```

---

# Selezione con regexp

- In SQL si potrebbe usare `like '%9057%'`

``` mongo
> db.teachers.find({"ufficio.telefono" : /9057/ })
{ "_id" : ObjectId("5d6126d3e503102a50f614eb"), "cognome" : "Mordonini", "nome" : "Monica",
"email" : "monica.mordonini@unipr.it", "ufficio" : { "palazzina" : 1, "stanza" : 102,
"piano" : 1, "telefono" : "+39 0521 905735" }, "ruolo" : "Ricercatrice" }
{ "_id" : ObjectId("5d6126d3e503102a50f614ec"), "cognome" : "Tomaiuolo", "nome" : "Michele",
"eta" : 43, "email" : "michele.tomaiuolo@unipr.it", "ruolo" : "Ricercatore",
"ufficio" : { "telefono" : "+39 0521 905708" } }
```

---

# Selezione con più clausole

``` mongo
> db.teachers.find({"ruolo" : /^Ricerc/ , "eta" : {$lt: 45}}).pretty()
> db.teachers.find({$and : [{"ruolo" : /^Ricerc/ },  {"eta" : {$lt: 45}}]} ).pretty()
{
    "_id" : ObjectId("5d6126d3e503102a50f614ec"),
    "cognome" : "Tomaiuolo",
    "nome" : "Michele",
    "eta" : 43,
    "email" : "michele.tomaiuolo@unipr.it",
    "ruolo" : "Ricercatore",
    "ufficio" : {
        "telefono" : "+39 0521 905708"
    }
}
```

---

# Proiezione

- Scelta di campi principali e annidati

``` mongo
> db.teachers.find( {$and: [{"ruolo" : /^Ricerc/ }, {"eta": {$lt: 45}}]},
                    {"nome" : 1, "cognome" : 1, "eta" : 1, "_id" : 0}
                  ).pretty()
{"cognome" : "Tomaiuolo", "nome" : "Michele", "eta" : 43}

> db.teachers.find({$and: [{"ruolo" : /^Ricerc/ }, {"eta": {$lt: 45}}]} ,
                   {"nome" : 1, "cognome" : 1, "eta" : 1, "_id" : 0,
                    "ufficio.telefono" : 1} ).pretty()
{
    "cognome" : "Tomaiuolo",
    "nome" : "Michele",
    "eta" : 43,
    "ufficio" : {
        "telefono" : "+39 0521 905708"
    }
}
```

---

# Proiezione

- Scelta di campi non esistenti (principali e annidati)

``` mongo
> db.teachers.find( {$and : [{"ruolo" : /^Ricerc/ },  {"eta" : {$lt: 45}}]} ,
                    {"nome" : 1, "cognome" : 1, "eta" : 1, "_id" : 0, "altezza" : 1,
                     "ufficio.palazzina" : 1} ).pretty()
{
    "cognome" : "Tomaiuolo",
    "nome" : "Michele",
    "eta" : 43,
    "ufficio" : {}
}
```

---

# Update

- Tre metodi
    - `db.collection.updateOne(<filter>, <update>, <options>)`
    - `db.collection.updateMany(<filter>, <update>, <options>)`
    - `db.collection.replaceOne(<filter>, <update>, <options>)`

---

# UpdateOne

- In SQL sarebbe `"update teachers set age = 47 where cognome = 'Angiani'"`

``` mongo
> db.teachers.updateOne(
   { "familyname": "Angiani" },
   { $set: { "age" : 47 } }
)
```

>

<https://docs.mongodb.com/manual/>

---

# Verifica update

``` mongo
> db.teachers.find({"familyname" : "Angiani"}).pretty()
{
    "_id" : ObjectId("5d7797b0b47376d19599cba4"),
    "familyname" : "Angiani",
    "name" : "Giulio",
    "age" : 47,
    "email" : "giulio.angiani@unipr.it",
    "role" : "Adjunct professor"
}
```

---

# Dati aggregati

- Esempio di doc

``` json
{ "_id": "10280", "city": "NEW YORK", "state": "NY", "pop": 5574 }
```

- Stati con populazione superiore a 10M
    - Richiesta *pipeline* di aggregazione, come lista

``` mongo
db.zipcodes.aggregate( [
    { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
    { $match: { totalPop: { $gte: 10*1000*1000 } } }
] )
```

>

<https://media.mongodb.org/zips.json>
<br>
<https://docs.mongodb.com/manual/tutorial/aggregation-zip-code-data-set/>

---

# Aggregazioni a catena

- Per ogni stato, calcolare la popolazione media delle città

```
db.zipcodes.aggregate( [
   { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
   { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } }
] )
```

---

# PyMongo

---

# Installazione e accesso

``` sh
$ python -m pip install pymongo
```

``` py
import pymongo, pprint
client = pymongo.MongoClient()
db = client.unipr
collection = db.teachers  # or: collection = db["teachers"]
```

- ⭐ Documentazione
<https://api.mongodb.com/python/current/>

---


# Selezione con PyMongo

``` py
# primo elemento trovato
t = collection.find_one()
pprint.pprint(t)
```

``` txt
{'_id': ObjectId('5d779a009a5f39e0ea5c1bbf'),
 'familyname': 'Angiani',
 'email': 'giulio.angiani@unipr.it',
 'age': '47',
 'name': 'Giulio',
 'role': 'Adjunct professor'}
```

---

# Selezione con PyMongo

``` py
 # selection
t = collection.find_one({"cognome" : "Tomaiuolo"})
pprint.pprint(t)
```

``` txt
{'_id': ObjectId('5d779a009a5f39e0ea5c1bc1'),
 'age': 43.0,
 'cognome': 'Tomaiuolo',
 'email': 'michele.tomaiuolo@unipr.it',
 'nome': 'Michele',
 'ruolo': 'Ricercatore',
 'ufficio': {'telefono': '+39 0521 905708'}}
```

---

# Risultati da PyMongo

``` py
res = collection.find() # returns a pymongo.cursor.Cursor, iterable
for t in res:
    print(t.get("cognome"), t.get("nome"), t.get("email"), t.get("eta"))
```

``` txt
('Angiani', 'Giulio', 'giulio.angiani@unipr.it', 47)
('Tomaiuolo', 'Michele', 'michele.tomaiuolo@unipr.it', 43.0)
('Mordonini', 'Monica', 'monica.mordonini@unipr.it', None)
```

---

# Selezione con ordinamento

``` py
res = collection.find().sort("nome", 1)  # nota: 1 asc [default], -1 desc
for t in res:
    print(t.get("cognome"), t.get("nome"), t.get("email"), t.get("eta"))
```

``` txt
Tomaiuolo Michele michele.tomaiuolo@unipr.it 43.0
Mordonini Monica monica.mordonini@unipr.it None
```

---

# Inserimento con PyMongo

``` py
doc = {
    "cognome" : "Cagnoni",
    "nome" : "Stefano",
    "eta" : 58,
    "ruolo" : "Professore Associato",
    "email" : "stefano.cagnoni@unipr.it"
}

 # simple insertion: collection.insert_one(doc)
 # insert and collect the new `_id`:
id = collection.insert_one(doc).inserted_id
```

---

# Verifica inserimento

``` py
res = collection.find().sort("nome", -1)  # nota: 1 asc [default], -1 desc
for t in res:
    print(t.get("cognome"), t.get("nome"), t.get("email"), t.get("eta"))
```

``` txt
Cagnoni Stefano stefano.cagnoni@unipr.it 58.0
Mordonini Monica monica.mordonini@unipr.it None
Tomaiuolo Michele michele.tomaiuolo@unipr.it 43.0
```

<https://api.mongodb.com/python/current/>

---

![](images/db/python-requests.png)
# Python requests

---

![](images/db/python-requests.png)
# Python requests

- Accesso semplificato ai servizi REST
- Richieste e risposte gestite in JSON
- ⭐ Documentazione
    - <https://docs.python-requests.org/>

``` sh
$ python -m pip install requests
```

``` py
>>> import requests
>>> r = requests.get('https://api.github.com/events')
>>> r.status_code
200
>>> r.json()
[{'id': '19289544450', 'type': 'PushEvent', 'actor': {'id': 694745, 'login': 'rmayr' ...
```

---

# Operazioni CRUD

- Richieste con url e parametri opzionali
    - `params`, `data`, `json`, `headers`…
    - <https://docs.python-requests.org/en/latest/api/>

``` py
>>> payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
>>> c = requests.post('https://httpbin.org/post', data=payload)
>>> c.request.body
key1=value1&key2=value2&key2=value3
>>> r = requests.get('https://httpbin.org/get', params=payload)
>>> r.url
https://httpbin.org/get?key1=value1&key2=value2&key2=value3
>>> u = requests.put('https://httpbin.org/put', data=payload)
>>> d = requests.delete('https://httpbin.org/delete')
```

---

# Oggetto risposta

- Codice di risposta
    - Campo `r.status_code`
    - Metodo `raise_for_status`
- Intestazioni e cookie
    - Campi `headers` e `cookies`, di tipo `dict`
- Contenuto testuale
    - Campi `encoding` e `text`
- Contenuto binario, oppure socket
    - Campi `content` e `raw`
- Decodifica *json* del contenuto
    - Metodo `json`

---

![](images/db/twitter.svg)
# Esempio su Twitter

---

![](images/db/twitter.svg)
# Applicazione pratica

- Molti servizi utilizzano dati in formato JSON
    - Formato dati spesso diverso
    - Dati non normalizzati
    - Sufficiente che siano in formato JSON
    - Nessuna trasformazione anche se provenienti sorgenti diverse
- Ricostruire relazioni su Twitter
    - Nodi => Utenti/Tweet
    - Archi => Relazione di following o retweeting

---

![](images/db/mongo-graph.png)
# Esempio di tweet

``` json
{"contributors": null,
 "coordinates": null,
 "created_at": "Sun Sep 15 16:29:55 +0000 2019",
 "entities": {"hashtags": [{"indices": [20, 33],
                            "text": "PresidentPAB"}],
               "symbols": [],
               "urls": [],
               "user_mentions": [{"id": 462288600,
                                   [...]
```

>

<http://tomamic.github.io/data/tweet.json>

---

# Richieste a Twitter

- Occorre un token di autenticazione `bearer`
    - Registrarsi come sviluppatori su Twitter

``` py
import requests

def request(url, bearer, params):
    headers = {"Authorization": "Bearer {}".format(bearer)}
    response = requests.request("GET", url, headers=headers, params=params)
    print("Endpoint Response Code: " + str(response.status_code))
    if response.status_code != 200:
        response.raise_for_status()
    return response.json()
```

>

<https://developer.twitter.com/en/portal/projects/…/apps/…/keys>

---

# Ricerca di tweet

```
def get_tweets(query, bearer, params={}):
    endpoint = "https://api.twitter.com/2/tweets/search/recent"
    params["query"] = query
    '''
    params["expansions"] = "author_id,in_reply_to_user_id,geo.place_id…"
    params["tweet.fields"] = "id,text,author_id,in_reply_to_user_id,geo…",
    params["user.fields"] = "created_at,description,entities,id,location…",
    params["place.fields"] = "full_name,id,country,country_code,geo,name…"
    '''
    return request(endpoint, bearer, params)
```

>

[developer.twitter.com/en/docs/twitter-api/tweets](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent)

---

# Profilo di un utente

```
def get_user(id, bearer, params={}):
    url = "https://api.twitter.com/2/users/" + id
    params["user.fields"] = ("created_at,description,entities,id,location,"
    "name,pinned_tweet_id,profile_image_url,protected,"
    "public_metrics,url,username,verified,withheld")
    return request(url, bearer, params)
```

>

[developer.twitter.com/en/docs/twitter-api/users](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id)

---

# Raccolta tweet nel DB

``` py
bearer = open("bearer.txt").read().strip()
result = get_tweets("starwars", bearer)
result_count = result["meta"].get("result_count")
next_token = result["meta"].get("next_token")
tweets = result["data"]

for t in tweets:
    #pprint.pprint(t)
    if not db.tweets.find_one({"id": t.id}):
        db.tweets.insert_one(t)
```

---

# Raccolta utenti nel DB

``` py
pipeline = [ {"$group": {"_id": "$author_id", "count": {"$sum": 1}}},
    {"$sort": {"count": -1}},
    {"$match": {"count": {"$gte": 2} }} ]
authors = db.tweets.aggregate(pipeline)

for a in authors:
    print(a)
    result = get_user(a["_id"], bearer)
    u = result["data"]
    if not db.users.find_one({"id": u["id"]}):
        db.users.insert_one(u)
```

---

# Es. Tutti gli utenti

``` py
# all users
users = db.users.find({}, {"username": 1}).sort({"username": pymongo.ASCENDING})
for u in users:
    print(u["username"])
```

``` txt
Alfredo88461728
AllCruiseNews
BertoDryden
BradfordCotton5
BurrellMinistry
CloseToHomeInc
…
```

---

# Es. Utenti attivi

``` py
pipeline = [{"$group": {"_id": "$author_id", "count": {"$sum": 1}}},
            {"$sort": {"count": pymongo.DESCENDING}},
            {"$limit": 3}]

users = db.tweets.aggregate(pipeline)
id = None
print("First 3 elements:")
for elem in users:
    print(elem["_id"], elem["count"])
    if not id: id = elem["_id"]

print(f"Most active user: {id}\n")
tws = db.tweets.find({"author_id" : id})
for t in tws:  # all the user's tweets
    print(t["lang"] + " : " +  t["text"])
```

---

# Es. Utente attivo in inglese

``` py
pipeline = [{"$match" : {"lang" : "en"} },
    {"$group" : {"_id" : "$author_id", "count" : {"$sum" : 1}}},
    {"$sort" : {"count": -1}},
    {"$limit": 1}]

for t in db.tweets.aggregate(pipeline):
    # most active user
    id = t["_id"]
    print(f"Most active user: {id}\n")
    # most active user's tweets
    tws = db.tweets.find({"author_id" : id})
    for t in tws:
        print(t["lang"] + " : " +  t["text"])
```

---

# Es. Join di più documenti

``` Mongo
db.users.aggregate([ { "$lookup": {
    "from": "tweets", "as": "user_tweets",
    "localField": "id", "foreignField": "author_id" } } ])
```

- Si può anche definire un campo `pipeline`, nel *lookup*

---

# Es. Join con limite

- Join + limit + proiezione su entrambe le collections

``` py
users = db.users.aggregate([
    {"$lookup": {"from": "tweets", "as": "user_tweets",
        "localField": "id", "foreignField": "author_id"}},
    {"$limit": 3},
    {"$project": {"username": 1, "user_tweets.text" : 1}}])
```

---

# Esercizi

* Scegliere tre #hashtag e un paio di @utenti da seguire
* Scaricare 100 tweet per ogni tipologia (con lingue diverse)
* Strutturare il DB con Mongo
* Eseguire le seguenti query
    * Testi dei tweet di un certo utente ordinati per data di pubblicazione
    * Testi di tutti i tweet in lingua inglese
    * Conteggio dei tweet di ciascun utente nelle diverse lingue
    * Utenti che hanno pubblicato in più lingue
