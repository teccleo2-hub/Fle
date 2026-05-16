# FLEKO-X BOT 🚀

<p align="center">
  <a href="https://github.com/teccleo2-hubb/RAVEN_BOT/fork">
    <img src="https://img.shields.io/github/forks/teccleo2-hubb/RAVEN_BOT?label=Fork&style=social" alt="Fork">
  </a>
  <a href="https://github.com/teccleo2-hubb/RAVEN_BOT/stargazers">
    <img src="https://img.shields.io/github/stars/teccleo2-hubb/RAVEN_BOT?label=Star&style=social" alt="Star">
  </a>
</p>

A powerful, feature-rich, and highly customizable WhatsApp bot built with the Baileys library. Optimized for deployment on Heroku, Pterodactyl panels, and VPS. Featuring a decorative video menu and stable pairing.

## ⚙️ Features
- **Prefix**: Customizable (Default: `.`)
- **Mode**: Public/Private
- **Auto Status View**: Automatically views status updates.
- **Anti-Call**: Automatically rejects incoming calls with a custom message.
- **Anti-Delete**: Prevents messages from being deleted.
- **Always Online**: Keeps the bot active 24/7.
- **Custom Branding**: Personalized bot name, watermark, and owner details.

## 🚀 Deployment

### 1. Deploy to Heroku 🚀
Click the button below to deploy **FLEKO-X BOT** directly to Heroku using your repository:

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/teccleo2-hubb/RAVEN_BOT">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku">
  </a>
</p>

### 2. Deploy to Pterodactyl Panel
1. Upload the files to your panel.
2. Run `npm install`.
3. Set the startup command to `node index.js`.
4. Scan the QR code in the console.

### 3. Manual Installation
```bash
git clone https://github.com/teccleo2-hubb/RAVEN_BOT.git
cd RAVEN_BOT
npm install
node index.js
```

## 🛠️ Configuration
Edit `config.js` to customize your bot's settings:
- `BOTNAME`: Name of your bot.
- `OWNERNUMBER`: Your WhatsApp number.
- `PREFIX`: Command prefix.
- `MODE`: `public` or `private`.

---
Developed by **X** | ©CypherX is on fire!🔥
