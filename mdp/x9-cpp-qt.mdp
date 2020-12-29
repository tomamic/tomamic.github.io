![](images/dev/qt.svg)
# Gui con Qt
## Introduzione alla programmazione

---

# Caratteristiche di Qt

- **Sviluppo con meno codice**
    - *Design OO*: classi intuitive, riusabili ed estendibili
    - Sviluppo *visuale* o *dichiarativo* di gui
    - Personalizzazione aspetto delle app con *CSS*
- **Sviluppo libero e multipiattaforma**
    - *Qt Project*: codice open source
    - *Qt Creator*: ambiente integrato di sviluppo
- **App portabili e avanzate**: buone prestazioni con poche risorse
    - Sistemi desktop: Windows, MacOS, Linux …
    - Mobile/embedded: Android, iOS, Symbian, BlackBerry QNX, MeeGo-JollaOS, Tizen, Ubuntu Touch, Raspberry Pi …
    - KDE, KOffice, VLC, Google Earth, Skype (Linux), Mathematica…

---

# Libreria modulare

- Qt Core: classi base, stringhe ecc.
- **Qt Gui**: supporto grafica 2D
    - Integraz. OpenGL, anti-aliasing, trasparenza, trasformaz. vettoriali
- **Qt Widgets**: bottoni e componenti grafici evoluti
    - Usabilità, esperienza più soddisfacente per utente
- Qt Multimedia, Qt Multimedia Widgets
- Qt Network
- Qt QML, Qt Quick, Qt Quick Controls, Qt Quick Layouts
- Qt SQL
- Qt Test
- Qt WebKit, Qt WebKit Widgets

---

# Bottoni e display

![](images/qt/buttons.jpg)

![](images/qt/displays.jpg)

---

![](images/qt/calendar-example.png) Esempio, con `QCalendarWidget`
# Input

![](images/qt/inputs.jpg)

---

# Viste di elementi

![](images/qt/views.jpg)

---

# Contenitori

![](images/qt/single-page-containers.jpg)

![](images/qt/multi-page-containers.jpg)

>

Inoltre: QMenu, QMenuBar, QToolBar, QStatusBar

---

# Finestre di dialogo

![](images/qt/feedback-dialogs.jpg)

---

# File e stampa

![](images/qt/file-print-dialogs.jpg)

---

# Colori e font

![](images/qt/color-font-dialogs.jpg)

---

# Stili

- Qt sfrutta le primitive grafiche della piattaforma
    - Efficienza, aspetto familiare
    - Ma possibile stile personalizzato!
    - `QApplication::setStyle(new QWindowsStyle);`
    - `QApplication::setStyleSheet`
    - `QWidget::setStyleSheet`

![](images/qt/styles.png)

---

# Disposizione dei widget

---

![](images/qt/notepad-1.png)
# Visualizzare un widget

``` cpp
#include <QApplication>
#include <QTextEdit>

int main(int argc, char* argv[]) {
    QApplication app{argc, argv};

    QTextEdit text_edit;
    text_edit.show();

    return app.exec();  // event management
}
```

---

# Creare un nuovo widget

- Estendere **`QWidget`**, o una sua sottoclasse
    - Creare nuovi campi e metodi, sovrascrivere metodi *virtual*
    - Altrimenti, **ereditate** le caratteristiche della classe base
- Incapsulare parti dell'interfaccia utente
    - Nuovo widget: **composto** da widget elementari
    - Resto dell'applicazione non ha bisogno di conoscere i dettagli
- Nuovo widget riusabile
    - Nella stessa applicazione o in altri progetti

---

![](images/qt/notepad-2.png)
# Sottoclasse di QWidget

``` cpp
class Notepad : public QWidget {
public:
    Notepad();

private:
    QTextEdit* text_edit;      // simple widgets:
    QPushButton* exit_button;  // encapsulated as private fields
};
```

- Da *Qt Creator*:
    - *Create Project →  Applications →  Qt Gui Application*
    - *Base class*: `QWidget` -- *Generate form*: `no`
- **C++17**: aggiungere al file `.pro` (di progetto): `CONFIG += C++17`

---

![](images/qt/notepad-2.png)
# Costruire la GUI

``` cpp
Notepad::Notepad() {
    // construtor: build the GUI
    // QObject::tr translates GUI texts (see Qt Linguist)

    text_edit = new QTextEdit;
    exit_button = new QPushButton{tr("Quit")};

    // widgets in a vertical layout
    auto layout = new QVBoxLayout;
    layout->addWidget(text_edit);
    layout->addWidget(exit_button);

    setLayout(layout); // QWidget
}
```

---

# Layout principali

- Qt usa il meccanismo dei *layout* per disporre i widget
- Ci sono tre classi di layout pricipali
    - `QHBoxLayout`
    - `QVBoxLayout`
    - `QGridLayout`
- Per installare un layout su un widget, dobbiamo invocare il metodo `setLayout` del widget
- Il layout gestisce l'area *interna* al widget

---

![](images/qt/notepad-layout.png) ![](images/qt/notepad-nostretch.png) Con/senza *stretch*
# Layout compositi

- È possibile inserire un layout dentro un altro
- Es. Layout aggiuntivo a destra, con bottoni in verticale

``` cpp
// ctor
auto button_layout = new QVBoxLayout;
button_layout->addWidget(open_button);
button_layout->addWidget(save_button);
button_layout->addWidget(exit_button);
button_layout->addStretch();

auto main_layout = new QHBoxLayout;
main_layout->addWidget(text_edit);
main_layout->addLayout(button_layout);  // <-- compose layouts
setLayout(main_layout);
```

---

# Click dei bottoni

---

# Definire gli slot

``` cpp
class Notepad : public QWidget {
public:
    Notepad();
    // like slots, to connect with signals
    void open();
    void save();
    void exit();
private:
    QTextEdit* text_edit = new QTextEdit;
    QPushButton* open_button = new QPushButton{tr("&Open")};
    QPushButton* save_button = new QPushButton{tr("&Save")};
    QPushButton* exit_button = new QPushButton{tr("E&xit")};
};
```

---

# Connettere segnali e slot

``` cpp
Notepad::Notepad() {
    // ... at the end of ctor ...
    connect(open_button, &QPushButton::clicked, this, &Notepad::open);
    connect(save_button, &QPushButton::clicked, this, &Notepad::save);
    connect(exit_button, &QPushButton::clicked, this, &Notepad::exit);
}
```

![](images/qt/notepad-connections.svg)

---

![](images/qt/abstract-connections.png)
# Accoppiamento tra segnali e slot

- **Accoppiamento lasco**
    - Un oggetto emette un *segnale*, ma non sa quali *slot* lo ricevono
    - Molti segnali ad un singolo slot, un segnale a molti slot
- **Type safe**
    - *Firma* di segnale e slot collegati deve corrispondere (per numero e tipo di parametri)
    - Se la firma di uno slot è più corta, trascura degli argomenti che riceve
    - Compilatore rileva errori
- **Estensione alla sintassi C++**
    - Segnali e slot sono una estensione specifica di Qt alla sintassi del C++

---

# Aprire un file

``` cpp
void Notepad::open() {
    // choose the input file
    auto filename = QFileDialog::getOpenFileName(this).toStdString();
    if (filename != "") {
        ifstream fin{filename};
        if (fin) {
            // read the whole text
            string content; getline(fin, content, '\0');
            text_edit->setText(content.c_str());
        } else {
            QMessageBox::critical(this, tr("Error"),
                                  tr("Could not open file"));
        }
    }
}
```

---

# Salvare in un file

``` cpp
void Notepad::save() {
    // choose the output file
    auto filename = QFileDialog::getSaveFileName(this).toStdString();
    if (filename != "") {
        ofstream fout{filename};
        if (fout) {
            // write the whole text
            auto text = text_edit->toPlainText().toStdString();
            fout << text;
        } else {
            QMessageBox::critical(this, tr("Error"),
                                  tr("Could not save file"));
        }
    }
}
```

---

# Chiudere l'app

``` cpp
void Notepad::exit() {
    auto button = QMessageBox::question(
        this,
        tr("Notepad - Quit"),
        tr("Do you really want to quit?"),
        QMessageBox::Yes | QMessageBox::No);

    if (button == QMessageBox::Yes) {
        window()->close();
    }
}

// See documentation (F1): QMessageBox, QInputDialog, QDialog
```

---

![](images/qt/mainwindow.png)
# Finestra principale

- `QMainWindow`: widget complesso, con un proprio layout particolare, per aggiungere:
    - `QMenuBar`, `QStatusBar`, `QToolBar`, `QDockWidget`
    - Widget principale al centro

``` cpp
// ... set a layout in the central area
setCentralWidget(new QWidget);
centralWidget()->setLayout(layout);
```

---

![](images/qt/notepad-toolbar.png)
# Menù e toolbar

``` cpp
class NotepadWindow: public QMainWindow // ...
```

``` cpp
NotepadWindow::NotepadWindow() {
    auto notepad = new Notepad;
    setCentralWidget(notepad);
    QMenu* menu = menuBar()->addMenu(tr("&File"));
    QAction* open = menu->addAction(tr("&Open"));
    QAction* save = menu->addAction(tr("&Save"));
    menu->addSeparator();
    QAction* exit = menu->addAction(tr("E&xit"));
    // auto tools = addToolBar(tr("&File")); tools->addAction(open); ...
    connect(open, &QAction::triggered, notepad, &Notepad::open);
    connect(save, &QAction::triggered, notepad, &Notepad::save);
    connect(exit, &QAction::triggered, notepad, &Notepad::exit);
}
```

---

# Griglia di bottoni

---

![](images/qt/calculator.png)
# Griglia di bottoni

- **`QGridLayout`**: dispone i widget in una griglia
- All'inserimento del widget, specificare riga e colonna (*0-indexed*)
- Possibile specificare anche l'occupazione di più celle adiacenti

---

![](images/qt/fifteen-puzzle.jpg)
# BoardGame astratto

``` cpp
class BoardGame {
public:
    virtual void play_at(int x, int y) = 0;
    virtual int cols() = 0;
    virtual int rows() = 0;
    virtual std::string get_val(int x, int y) = 0;
    virtual bool finished() = 0;
    virtual std::string message() = 0;
};
```

``` cpp
class BoardGameGui : public QWidget {
    BoardGame* game;
public:
    BoardGameGui(BoardGame* g);
    void update_buttons();
};
```

---

![](images/qt/puzzle.png)
# BoardGame – Gui generica

``` cpp
BoardGameGui::BoardGameGui(BoardGame* g) {
    game = g;
    auto grid = new QGridLayout;
    setLayout(grid);
    for (auto y = 0; y < game->rows(); y++) {
        for (auto x = 0; x < game->cols(); x++) {
            auto b = new QPushButton;
            grid->addWidget(b, y, x);
            connect(b, &QPushButton::clicked, [=]{
                game->play_at(x, y);  // lambda function ...
                update_buttons();     // closure captures this, x, y
            });
        }
    }
    update_buttons();
}
```

---

![](images/qt/puzzle-solved.png)
# BoardGame – Aggiornamento bottoni

``` cpp
void BoardGameGui::update_buttons() {
    for (auto y = 0; y < game->rows(); ++y) {
        for (auto x = 0; x < game->cols(); ++x) {
            auto val = game->get_val(x, y).c_str();
            auto i = y * game->cols() + x;
            auto b = layout()->itemAt(i)->widget();
            b->setProperty("text", val);
        }
    }
    if (game->finished()) {
        auto msg = game->message().c_str();
        QMessageBox::information(this, tr("Game finished"), tr(msg));
        window()->close();
    }
}
```

---

![](images/qt/puzzle.png)
# PyQt5 – Costruzione gui

``` python
class BoardGameGui(QWidget):
    def __init__(self, g: BoardGame):
        QWidget.__init__(self)
        self._game = g
        self.setLayout(QGridLayout())
        for y in range(g.rows()):
            for x in range(g.cols()):
                b = QPushButton()
                self.layout().addWidget(b, y, x)
                b.clicked.connect(lambda state, x=x, y=y:
                                  (self._game.play_at(x, y),
                                   self.update_buttons()))
        self.update_buttons()

    # ...
```

---

![](images/qt/puzzle-solved.png)
# PyQt5 – Aggiornamento bottoni

``` python
class BoardGameGui(QWidget):
    # ...

    def update_buttons(self):
        for y in range(self._game.rows()):
            for x in range(self._game.cols()):
                val = self._game.get_val(x, y)
                i = y * self._game.cols() + x
                b = self.layout().itemAt(i).widget()
                b.setText(val)
        if self._game.finished():
            QMessageBox.information(self, self.tr('Game finished'),
                                    self.tr(self._game.message()))
            self.window().close()
```

---

# Eventi in Qt

---

# Dispatching degli eventi

- Eventi
    - Attività *esterne* che interessano l'applicazione
    - O cambiamenti *interni* all'applicazione
    - Gestibili da qualsiasi istanza di `QObject` (spesso widget)
- Quando si verifica un evento:
    - Creato oggetto per rappresentarlo, istanza (indiretta) di `QEvent`
    - `QResizeEvent`, `QPaintEvent`, `QMouseEvent`, `QKeyEvent`, `QCloseEvent`
- Sulla base del **tipo** di evento:
    - Invocato un **metodo specifico** dell'oggetto interessato
    - Dispatching attraverso il metodo `event` di `QObject`
    - L'evento può essere accettato oppure ignorato

---

![](images/qt/tetrix.png)
# Eventi della tastiera

``` cpp
void TetrixBoard::keyPressEvent(QKeyEvent* e) {
    switch (e->key()) {
    case Qt::Key_Left:
        tryMove(curPiece, curX - 1, curY);
        break;
        // ...
    case Qt::Key_Down:
        tryMove(curPiece.rotatedRight(), curX, curY);
    break;
        default:
        QFrame::keyPressEvent(e);
    }
}
```

Metodi `keyPressEvent` e `keyReleaseEvent` per gestire la tastiera

---

![](images/qt/analogclock.png)
# Segnali periodici

``` cpp
AnalogClock::AnalogClock() {
    QTimer* timer = new QTimer{this};
    connect(timer, &QTimer::timeout,
            this, &AnalogClock::update);
    timer->start(1000);
}

void AnalogClock::paintEvent(QPaintEvent *event) {
    QPainter painter{this};
    // draw the clock ...
}
```

`QTimer`: periodicamente emette segnale `timeout`, da associare ad uno (o più) slot

Metodo `paintEvent` per ridisegno di un widget, con oggetto `painter`

---

# Disegni e animazioni

---

# Ridisegno

- Metodo **`update`** accoda una richiesta di ridisegno *asincrono* del widget (evento)
    - L'operazione non avviene immediatamente
    - L'*event dispatcher* esegue il metodo **`paintEvent`** appena può
- Widget Qt operano di default in *double buffering*
    - No *flicker* dovuto a lettura e scrittura effettuate direttamente su aree di memoria → schermo
    - Es. si traccia sfondo prima di img in primo piano
    - Se parte visualizzazione a schermo, img in primo piano scompare per un frame

---

![](images/qt/coord-rect.png) ![](images/qt/coord-line.png)
# Sistema di coordinate

``` cpp
// ...
QPainter painter{this};
painter.setPen(Qt::darkGreen);
painter.drawRect(1, 2, 6, 4);
painter.drawLine(2, 7, 6, 1);
```

---

# Disegno di immagini

- `QPainter` può disegnare anche immagini `QPixmap`
    - `QPainter::drawPixmap(int x, int y, const QPixmap& pixmap);`
    - Immagine caricata facilmente da file, passandone il nome al costruttore
- Immagini su bottoni ed etichette
    - `QPushButton::setPixmap(QPixmap& pixmap)`
    - `QLabel::setIcon(QIcon& icon)`, oppure `setText` con HTML
    - Altrimenti, sfondo: `QWidget::setStyleSheet`
- `QPixmap` sono anche superfici di disegno custom
    - `QPainter::QPainter{QPaintDevice* d};`

---

![](images/dev/qt.svg) ![](images/oop/raster-coord.png)
# Rettangoli e cerchi con Qt

``` cpp
#include <QtWidgets>
```

``` cpp
QPixmap screen{600, 400}; QPainter painter{&screen};

painter.setBrush(QColor{255, 255, 0});
painter.drawRect(50, 75, 90, 50);

painter.setBrush(QColor{0, 0, 255});
painter.drawEllipse(QPoint{300, 50}, 20, 20);

QLabel label; label.setPixmap(screen); label.show();
```

``` Project
QT += widgets
CONFIG += console c++17
```

>

Progetto: *Application* → *Qt Widgets Application*

---

# Ciclo di animazione in Qt

``` cpp
// fields: int x = 0; QPixmap image{"ball.png"};

Widget::Widget() {
    startTimer(1000 / 60);  // 60 fps
}
void Widget::timerEvent(QTimerEvent* event) {
    x = (x + 5) % 600;  // or width()
    update();           // async: this widget should be redrawn
}
void Widget::paintEvent(QPaintEvent* event) {
    QPainter painter{this};
    painter.drawPixmap(x, 10, image);
}
```

>

Progetto: *Application* → *Qt Widgets Application*

---

![](images/qt/graphicsview.png)
# Superfici ed elementi grafici

- **`QGraphicsScene`**
    - Superficie che contiene diversi elementi grafici bidimensionali: fornisce supporto per animazioni e rilevamento collisioni
- **`QGraphicsItem`**
    - Immagini, linee, poligoni, testo e altri elementi
- **`QGraphicsView`**
    - Widget per visualizzare l'intera scena o per zoomare su una parte

---

# Dichiarazione di segnali

---

# Dichiarazione di segnali

- Qt: distribuzione dei segnali gestita automaticamente
    - I segnali si dichiarano in maniera simile a metodi
    - Non devono essere implementati da nessuna parte
    - Devono restituire `void`
- Nota sugli argomenti
    - L'esperienza mostra che segnali e slot sono più riusabili se non usano tipi speciali
    - Raccogliere segnali da diversi widget sarebbe molto più difficile

---

# Emissione di segnali

- Un oggetto emette un segnale chiamando `emit`
    - Quando si verifica evento o stato interno cambia
    - Se il cambiamento può interessare altri oggetti
- Emesso segnale → slot connessi eseguiti subito
    - Come una normale chiamata a metodo
    - Codice seguente ad `emit` eseguito dopo aver eseguito tutti gli slot connessi al segnale
    - Se più slot, eseguiti in sequenza arbitraria
- Esistono anche connessioni asincrone (*queued*)
    - Codice dopo `emit` eseguito subito, poi gli slot

---

# Meta-Object Compiler

- Il *moc* è un programma che gestisce le estensioni di Qt al C++
- Se una dichiarazione di classe contiene la macro `Q_OBJECT`, il *moc* produce altro codice C++ per quella classe
- Tra le altre cose, il “*meta-object code*” è necessario per il meccanismo di segnali e slot
- **Segnali e slot sono una estensione specifica di Qt alla sintassi C++**

---

# Bottone con click destro

``` cpp
class RightPushButton : public QPushButton {
    Q_OBJECT
public:
    using QPushButton::QPushButton;
protected:
    void mouseReleaseEvent(QMouseEvent* e);
signals:
    void rightClicked();  // new signal, in addition to QPushButton::clicked
};
```

``` cpp
void RightPushButton::mouseReleaseEvent(QMouseEvent* e) {
    if (e->button() == Qt::RightButton) emit rightClicked();
    QPushButton::mouseReleaseEvent(e);  // base class behaviour
}
```

---

# Altre caratteristiche di Qt

---

# Altre caratteristiche di Qt

![](images/qt/resources.png)

- Possibile inserire dati (img, snd ecc.) direttamente nel file eseguibile
    - Aggiungere un “*Qt Resource File*” al progetto
    - Aggiungere le singole risorse al descrittore `.qrc`
    - Percorso delle risorse richiede “`:`” come prefisso


---

# Gruppo di bottoni

- **`QButtonGroup`**: raggruppamento *logico* di bottoni
- Non fornisce **nessuna rappresentazione** *visuale*
- Utile per associare i bottoni ad un indice intero
    - Definisce il segnale **`buttonClicked`**, che trasmette come parametro l'indice del bottone
    - Possibile connettere questo segnale anziché il segnale `clicked` di ciascun bottone
- Utile anche per raggruppare bottoni radio
    - Gestisce lo stato di tutti i bottoni nel gruppo
    - Se `exclusive`, solo un bottone selezionato

---
# Utilizzare le traduzioni

``` cpp
int main(int argc, char* argv[]) {
    QApplication a{argc, argv};

    // run lupdate(.pro->.ts), linguist and lrelease(.ts->.qm), first!
    QTranslator appTranslator;
    appTranslator.load(":/translations/myapp_"
      + QLocale::system().name());
    a.installTranslator(&appTranslator);

    QTranslator qtTranslator;
    qtTranslator.load("qt_" + QLocale::system().name(),
      QLibraryInfo::location(QLibraryInfo::TranslationsPath));
    a.installTranslator(&qtTranslator);

    return a.exec();
}
```

---

# QString

- Caratteri `QChar` a 16 bit (UTF-16, rari simboli a due QChar)
- Metodi `static`: *`fromStdString`*, `number`
- Metodi: *`toStdString`*, `toInt`, `toFloat`
- Metodo `split` (genera una `QStringList`)
- Sostituzione automatica di numeri, caratteri e stringhe
    - `QString status = QString{"Processing file %1 of %2: %3"}.arg(i).arg(total).arg(fileName);`
- Operatori `[], >, <, ==, +, +=` ecc.


