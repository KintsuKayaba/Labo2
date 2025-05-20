# Labo String CLI

[![CI Coverage](https://github.com/KintsuKayaba/Labo2/actions/workflows/ci-coverage.yml/badge.svg?branch=main)](https://github.com/KintsuKayaba/Labo2/actions/workflows/ci-coverage.yml)

Una CLI Node.js moderna per manipolazione avanzata di stringhe: inversione, verifica palindromi, troncamento e conteggio caratteri.

---

## 🚀 Descrizione

**Labo String CLI** è una utility da riga di comando progettata per eseguire operazioni comuni e utili sulle stringhe, ideale per esercitarsi con best practice di sviluppo Node.js, testing automatizzato e workflow Git/GitHub.

---

## 🛠️ Funzionalità

- 🔄 **Inversione stringa**
- 🔍 **Verifica palindromo**
- ✂️ **Troncamento stringa**
- 🔢 **Conteggio caratteri**

---

## 📦 Requisiti

- **Node.js** >= 20
- **npm** >= 8

---

## ⚡ Installazione

```bash
git clone https://github.com/KintsuKayaba/labo-string.git
cd labo-string
npm install
```

---

## 🖥️ Utilizzo

```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

### Opzioni disponibili

| Numero | Funzione             | Parametri aggiuntivi  |
| ------ | -------------------- | --------------------- |
| 1      | Inverti Stringa      | -                     |
| 2      | Controlla Palindromo | -                     |
| 3      | Tronca Stringa       | `<lunghezza_massima>` |
| 4      | Conta Caratteri      | -                     |

**Esempi:**

```bash
node index.js 1 "Ciao mondo"
node index.js 2 "Anna"
node index.js 3 "Supercalifragilistico" 5
node index.js 4 "hello"
```

---

## 📁 Struttura del progetto

```
├── src/
│   └── stringUtils.js
├── index.js
├── package.json
├── .gitignore
├── README.md
└── test/
    └── stringUtils.test.js
```

---

## 🧪 Testing

I test sono scritti con [Jest](https://jestjs.io/).

```bash
npm test
```

Per generare il report di coverage:

```bash
npm test -- --coverage
```

---

## 🤝 Come contribuire

Contributi, segnalazioni e idee sono benvenuti!  
Apri una **issue** o una **pull request** seguendo il flusso GitHub standard.

1. Fai fork del progetto
2. Crea un branch (`git checkout -b feature/nuova-funzionalita`)
3. Fai commit delle tue modifiche
4. Push e apri una pull request

---

## 📄 Licenza

UniGE
