# Opponiti - Stop al Telemarketing Selvaggio

La prima piattaforma italiana che certifica le aziende legittime e combatte quelle abusive attraverso azioni legali collettive.

## 🎯 Missione

Opponiti rivoluziona il marketing digitale attraverso un approccio dual-track:
- **Per gli Utenti**: €1 di bonus alla registrazione + guadagni per referral + partecipazione ad azioni legali collettive
- **Per le Aziende**: Sistema di certificazione con badge verde per distinguersi dalla concorrenza sleale
- **Marketing Rivoluzionario**: Paghiamo direttamente gli utenti invece di spendere in pubblicità tradizionale

## 🚀 Tecnologie

**Framework**: Next.js 15.3.4 con App Router  
**Package Manager**: pnpm  
**UI Library**: shadcn/ui con primitivi Radix UI  
**Styling**: Tailwind CSS v4 con PostCSS  
**Animazioni**: Framer Motion per interazioni fluide  
**Language**: TypeScript con modalità strict  
**Theme**: Design dark-first con effetti glass morphism  

### Dipendenze Principali
- `@radix-ui/*` - Primitivi UI accessibili
- `framer-motion` - Animazioni avanzate
- `lucide-react` - Libreria di icone moderne
- `class-variance-authority` - Varianti componenti
- `tailwind-merge` - Styling condizionale

## 🏗️ Struttura del Progetto

```
src/
├── app/
│   ├── page.tsx              # Homepage (utenti finali)
│   ├── aziende/page.tsx      # Pagina certificazione aziende
│   ├── roadmap/page.tsx      # Piano di sviluppo
│   ├── layout.tsx            # Layout principale
│   └── globals.css           # Stili globali
├── components/
│   ├── ui/                   # Componenti shadcn/ui
│   │   ├── animated-modal.tsx
│   │   ├── registration-modal.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── content/              # Componenti di contenuto
│   │   ├── hero-content.tsx
│   │   ├── features-content.tsx
│   │   ├── cta-content.tsx
│   │   └── ...
│   └── interactive/          # Componenti interattivi
└── lib/
    └── utils.ts              # Funzioni utility
```

## 🎨 Design System

**Tema**: Dark-first con accenti neon  
**Colori**:
- Primary: Gradienti rossi (brand)
- Success: Emerald (certificazioni, denaro)
- Info: Blue (funzionalità business)
- Warning: Yellow (avvisi)
- Error: Red (problemi)

**Componenti**: Costruiti con shadcn/ui per consistenza  
**Animazioni**: Scroll-triggered, hover effects e micro-interazioni  
**Tipografia**: Effetti di testo con gradienti per enfasi  

## 🛠️ Comandi di Sviluppo

```bash
# Server di sviluppo con Turbopack (raccomandato)
pnpm dev

# Build per produzione
pnpm build

# Avvia server di produzione
pnpm start

# Esegui ESLint
pnpm lint
```

## 📱 Funzionalità Implementate

### Homepage (/) - Focus Utenti
- Sezione hero con incentivo €1 alla registrazione
- Dichiarazione del problema con statistiche
- Spiegazione della soluzione in 3 step
- Confronto marketing rivoluzionario
- Survey utenti per validazione mercato
- Sezione download app con bonus early bird

### Pagina Business (/aziende) - Focus Aziende
- Design professionale con badge business
- Benefici certificazione e metriche ROI
- Tre tier di pricing (Starter/Professional/Enterprise)
- Form richiesta demo con campi dettagliati
- Messaggistica e testimonial B2B

### Roadmap (/roadmap)
- Piano di sviluppo in fasi
- Milestone e obiettivi chiari
- Call-to-action per registrazione

### Funzionalità Condivise
- Tema scuro con sfondi animati
- Effetti glass morphism e backdrop blur
- Design responsive (mobile-first)
- Cross-linking tra flussi utente e business
- Performance ottimizzate con Turbopack
- Modal di registrazione animate con React Portal
- Supporto per dispositivi mobile con dynamic viewport height (dvh)

## 🎯 Modello di Business

**Acquisizione Utenti**: Bonus €1 alla registrazione invece di pubblicità tradizionale  
**Flussi di Ricavo**:
- Certificazioni aziendali (€99-799/mese)
- Revenue sharing da azioni legali
- Licensing API e partnership

**Value Proposition**:
- Gli utenti vengono pagati per usare l'app (rivoluzionario)
- Le aziende ottengono legittimità verificata
- Entrambi ottengono protezione dagli abusi del telemarketing

## 🚀 Getting Started

Prima di tutto, installa le dipendenze:

```bash
pnpm install
```

Poi avvia il server di sviluppo:

```bash
pnpm dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il risultato.

## 🔧 Note di Sviluppo

- Focus sull'ottimizzazione delle conversioni per entrambi i pubblici
- Implementare gestione form appropriata per raccolta lead
- Preparare per integrazione app mobile
- Considerare A/B testing per diversi importi di incentivi
- Costruire con scalabilità in mente per crescita rapida utenti
- Sistema di modal unificato per esperienza utente consistente
- Ottimizzazioni mobile-first con dynamic viewport height

## 📄 Licenza

© 2025 Opponiti. Tutti i diritti riservati.