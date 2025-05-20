# Labo String CLI

Una CLI Node.js per manipolare stringhe: inversione, verifica palindromi, troncamento e conteggio caratteri.

## Descrizione

Questo progetto fornisce una utility da riga di comando per eseguire operazioni comuni sulle stringhe. È pensato come esercizio di best practice per la configurazione, il testing e il workflow Git/GitHub in un contesto Node.js.

## Funzionalità

- **Inversione stringa**
- **Verifica palindromo**
- **Troncamento stringa**
- **Conteggio caratteri**

## Requisiti

- Node.js >= 16
- npm >= 8

## Installazione

```bash
git clone https://github.com/KintsuKayaba/labo-string.git
cd labo-string
npm install
```

## Utilizzo

```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

### Opzioni disponibili

| Numero | Funzione            | Parametri aggiuntivi           |
|--------|---------------------|-------------------------------|
| 1      | Inverti Stringa     | -                             |
| 2      | Controlla Palindromo| -                             |
| 3      | Tronca Stringa      | <lunghezza_massima>           |
| 4      | Conta Caratteri     | -                             |

**Esempi:**
```bash
node index.js 1 "Ciao mondo"
node index.js 2 "Anna"
node index.js 3 "Supercalifragilistico" 5
node index.js 4 "hello"
```

## Struttura del progetto

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

## Testing

I test sono scritti con Jest.

```bash
npm test
```

Per generare il report di coverage:
```bash
npm test -- --coverage
```

## Contributi

Contributi e segnalazioni sono benvenuti! Apri una issue o una pull request seguendo il flusso GitHub standard.

## Licenza

UniGE
