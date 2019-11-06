# Vorbereitungen

Zum Start des Workshops setzen wir einige Software-Installationen auf deinem Rechner voraus. Hier findest du eine Checkliste und Hinweise, wie du die einzelnen Komponenten installieren kannst.

## Hardware und Betriebssystem

* Einen Rechner, der nicht älter als 10 Jahre ist. 
* Ein Rechner mit Windows 10, Mac OS X oder einer modernen Linux-Distribution. Alternativ eine virtuelle Machine.

## Software
* NodeJS-Installation
* Entwicklungsumgebung: Visual Studio Code
> Gerne auch alternative Entwicklungsumgebungen, jedoch können wir die Unterstützung im Einzelfall nicht im vollen Maße gewährleisten.
* optional: Git-Client

## Installation von NodeJS
Falls ihr noch kein NodeJS installiert habt, genügt die Installation des aktuellen LTS-Release über die [Internetpräsenz von NodeJS](https://nodejs.org/de/).

Da wir im Entwicklungsalltag oft zwischen verschiedenen NodeJS-Installationen wechseln, lohnt sich der Einsatz eines Versionsmanagers. NVM ist ein CLI-Tool, mit dem Ihr bequem zwischen Versionen wechseln könnt. Ein Ableger für Windows ist als NVM for Windows verfügbar.

### NVM unter Linux installieren

Eine Anleitung zur Installation von nvm unter Linux findet sich auf dem [Github-Repository des Entwicklers](https://github.com/nvm-sh/nvm).

> Für das ausführen von Scripten aus dem Internet ist jeder selbst verantwortlich. Im Zweifel solltet ihr das Script auf der Seite prüfen, bevor ihr es laut Anleitung ausführt.

### NVM for Windows installieren
der aktuelle Installer für _NVM for Windows_ ist auf dem [Github-Repository](https://github.com/coreybutler/nvm-windows/releases) zu finden. 

### eine Node-Version mittels NVM installieren

Eine Liste der verfügbaren Node-Versionen lässt sich mit folgendem Befehl abrufen:
```
nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    13.0.1    |   12.13.0    |   0.12.18    |   0.11.16    |
|    13.0.0    |   10.17.0    |   0.12.17    |   0.11.15    |

...
``` 
Wir wollten die aktuelle LTS-Version nutzen. Diese installieren und aktivieren wir mit folgenden Befehlen:

```
nvm install 12.13.0
nvm use 12.13.0
```

## Installation von Visual Studio Code

Ein Installationspaket für dein Entsprechendes Betriebssystem findest du auf der [Internetpräsenz von Visual Studio Code](https://code.visualstudio.com/).
Die Installation selbst sollte selbsterklärend sein.

## Ready To Go?

Stimmt deine Entwicklungsumgebung? Das kannst du schnell überprüfen, indem du deine Versionen überprüfst:

```
node --version
v12.13.0

npm --version
6.12.0

npx --version
6.12.0
```

Wenn du die gleichen oder ähnliche Ausgaben wie oben erhälts, kann es losgehen. Ob wirklich alles funktioniert prüfen wir, in dem wir ein neues, temporäres Projekt anlegen:

```
npx create-react-app temp
npx: installed 91 in 11.272s

Creating a new React app in E:\Development\Repositories\git.redoak.me\RedOakUniversity\react-basics-workshop\temp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

...

We suggest that you begin by typing:

  cd temp
  npm start

Happy hacking!

```

Der Befehl läuft fehlerfrei durch und du erhälst ein Ähnliches Ergebnis wie oben? Super, dann können wir gemeinsam starten! 

## Probleme bei der Installation?

Wir glauben, dass die Entwickler dieser Tools und Software hervoragende Dokumentation bieten. Solltest du im Einzelfall dennoch Probleme haben, kannst du dich gerne bei uns [melden](mailto:robin.wloka@red-oak-consulting.com)!