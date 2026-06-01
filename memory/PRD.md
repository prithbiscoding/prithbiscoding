# OffPitch - World Cup 2026 Hub

## Original Problem Statement
Build a hyper-viral World Cup entertainment app to replace Twitter & OneFootball for football fans. Mobile-first PWA with neon dark mode aesthetic, colorful & engaging, ready for deployment.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion + Lucide Icons
- **State**: AppContext with LocalStorage persistence (profile, squad, posts, predictions, chat history)
- **Data**: Comprehensive mockData.js with full 2026 WC data
- **Backend**: FastAPI scaffold (currently unused - app is fully client-side)

## What's Been Implemented (Feb 2026)

### Core Modules
- **Module 1 - Profile & Fandom Hub**: Username, avatar upload, team selection from 48 WC teams, dynamic theme colors per team
- **Module 2 - Fantasy Tournament**: 4-3-3 visual pitch, 11 slot squad builder, £100M budget enforcement, lock/unlock squad, friend leaderboard with trends
- **Module 3 - Banter Feed**: Stories bar (Instagram-style), trending hashtags, post filters (Hot Takes/Meme Wars/My Matches), reactions (🔥💀🐐), cheer/jeer/bookmark, floating composer, VAR Toxicity guard modal
- **Module 4 - AI Tactics Room**: 6 legendary coach personas (Mourinho, Pep, Zlatan, Ronaldo, Messi, Klopp) with hardcoded response matrices and typing indicators
- **Module 5 - Live Match Hub**: Live score card, Spicy Mode toggle (professional ↔ banter commentary), formations with player stats modal, fan predictions, social media trending widget, rotating trivia ticker

### New Sections Added
- **Stats Center** (`/stats`): Golden Boot, Golden Glove, Golden Ball, Best Young Player races with podium + full rankings; Group Standings table
- **Schedule** (`/calendar`): Full 2026 WC calendar from group stage through Final (July 19, 2026), filterable by stage, grouped by date, with venues
- **News Feed**: OneFootball-style news cards on home page with categories, sources, read counts
- **Today's Matches**: Upcoming matches widget on home

### Mobile-First UX
- Floating bottom nav with "More" menu for secondary items
- Glass-morphism navigation
- Stories with progress bar
- Slide-up modals
- Safe area handling
- Emergent badge auto-hidden on mobile (no click blocking)

### Real Data
- 35+ real players with Wikipedia photos & current clubs
- 48 World Cup 2026 qualified teams with proper groups
- Real venues (MetLife, SoFi Stadium, Estadio Azteca, etc.)
- Realistic stats (Haaland leads Golden Boot with 16 goals, Salah 14, Mbappé 13)

### PWA
- Manifest.json with standalone display
- Service worker registered
- "Add to Home Screen" capable

## Prioritized Backlog (P0/P1/P2)

### P0 (Next)
- Connect to real FIFA API for live data during World Cup
- Push notifications for match start/goals
- User-to-user direct messaging

### P1
- Friend system & invites
- Live match watching parties
- Predictor leagues with prizes
- Match highlight video integration

### P2
- Multi-language support
- Player-by-player voting (MOTM)
- AI-generated match summaries (via Emergent LLM)
- Stripe integration for premium subscriptions
