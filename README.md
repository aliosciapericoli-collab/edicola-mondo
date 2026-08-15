# Edicola Mondo

**Il Mondo in Prima Pagina** — aggregatore AI di notizie generaliste: esteri,
Italia, politica, economia, scienza e tech, cultura, sport, salute, ambiente.
Oltre 50 fonti italiane e internazionali (BBC, CNN, Guardian, NYT, Spiegel, Le Figaro, El Mundo, SCMP…)
**tradotte automaticamente in italiano**, più le principali testate italiane.

Terza testata della famiglia Edicola (stesso motore di Edicola Giuridica ed
Edicola Ecclesiastica): server Node + SPA React + SQLite, traduzioni con cache
persistente, web app installabile, auto-update da GitHub ogni 20 minuti.

- Porta **3200** · processo PM2 `edicola-mondo` · dominio **edicolamondo.com**
- Nessun corpus normativo: solo notizie (nav: Notizie + Manifesto)

## Deploy sul server

```bash
cd /home/work
git clone https://github.com/aliosciapericoli-collab/edicola-mondo.git
cd edicola-mondo
npm ci
cp /home/work/edicola-giuridica/.env .env
ECCL_GIURIDICA_SRC=/home/work/edicola-giuridica/data/giuridica.db node scripts/init-db.js
pm2 start ecosystem.config.js && pm2 save
```

Caddy punta già `edicolamondo.com → localhost:3200`: appena PM2 parte, il
dominio è online.
