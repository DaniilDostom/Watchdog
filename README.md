# Watchdog GitHub Pages Site

Sito GitHub Pages per il progetto **Watchdog**, basato su Bootstrap 5 con tema dark.

## Struttura del progetto

```
Watchdog/
├── index.html            # Landing page principale
├── assets/
│   ├── css/
│   │   └── style.css     # Stili custom dark mode
│   └── js/
│       └── main.js       # Logica JS (navbar, animazioni, form)
└── README.md
```

## Sezioni della pagina

| Sezione | ID | Descrizione |
|---|---|---|
| Navbar | – | Fissa in alto, con logo e menu |
| Hero | `#hero` | Titolo, sottotitolo, CTA, statistiche |
| Features | `#features` | 6 card con funzionalità chiave |
| About | `#about` | Storia del progetto, valori, info |
| Contact | `#contact` | 3 card di contatto + form |
| Footer | – | Link, copyright, social |

## Funzionalità JavaScript

- **Navbar**: diventa solida allo scroll
- **Smooth scroll** per tutti i link interni
- **Scroll reveal**: animazione fade-in per le card
- **Active nav link**: evidenzia la sezione corrente nel menu
- **Contact form**: UI con spinner e messaggio di successo

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub (es. `username/watchdog` o `username/username.github.io`)
2. Carica tutti i file con `git push`
3. Vai su **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. Il sito sarà live su `https://username.github.io/watchdog/`

## Personalizzazione rapida

- **Nome progetto**: cerca e sostituisci `Watchdog` in `index.html`
- **Colore primario**: cambia `#0d6efd` in `style.css` con il tuo colore
- **Link GitHub**: sostituisci `https://github.com/` con il link reale
- **Email**: sostituisci `hello@example.com` nel form e nei link
- **Form reale**: integra [Formspree](https://formspree.io/) o EmailJS in `main.js`

