# 🏆 Panini Tracker 2026

> A modern Android application for managing your **Panini FIFA World Cup 2026** sticker collection.

Built with **React Native + Expo**, the application allows collectors to keep track of owned stickers, duplicates, collection progress and statistics without carrying the physical album.

---

# ✨ Features

## 📖 Album

- Browse stickers by **Group**
- Browse stickers by **National Team**
- Expand / Collapse sections
- Sticker details screen
- Country flags (SVG)
- Progress bars for album, groups and teams

## 🔍 Search & Filter

- Search by sticker number
- Search by player name
- Search by national team

Filters:

- All
- Missing
- Owned
- Duplicates

## 📋 Collection

- Mark sticker as owned
- Add / remove duplicates
- Notes for every sticker
- Collection statistics

## 💾 Database

- SQLite local database
- Automatic database creation
- Automatic seed
- JSON import generated from Excel

---

# 📱 Screens

- Dashboard
- Album
- Sticker Details

---

# 🏗 Project Structure

```
src
│
├── components
│   ├── album
│   ├── common
│   ├── stickerDetails
│   └── stickers
│
├── context
├── database
├── hooks
├── navigation
├── repositories
├── services
├── theme
├── utils
└── data
```

---

# 🛠 Tech Stack

- React Native
- Expo SDK 57
- Expo SQLite
- React Navigation
- React Native SVG
- Expo Vector Icons

---

# 📦 Database

```
sections
    │
    └── teams
            │
            └── stickers
```

---

# 📥 Excel Import

Project data is maintained in Excel and converted automatically to JSON.

```
sections.xlsx
teams.xlsx
album.xlsx
        │
        ▼
importData.js
        │
        ▼
sections.json
teams.json
album.json
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/<your-user>/Panini2026.git
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npx expo start
```

Build APK

```bash
eas build -p android --profile preview
```

---

# 🚧 Roadmap

## Collection

- [x] SQLite database
- [x] Excel importer
- [x] Search
- [x] Filters
- [x] Sticker details
- [x] Country flags
- [x] Duplicate management
- [x] Progress bars
- [x] Group / Team accordion

## Next

- [ ] Dashboard improvements
- [ ] Collection statistics
- [ ] Backup / Restore
- [ ] Import new Panini editions
- [ ] Dark Mode
- [ ] Admin / Developer mode
- [ ] Sticker images
- [ ] Trade list
- [ ] Wishlist
- [ ] Cloud Sync

---

# 📄 License

MIT License

---

Made with ❤️ for Panini collectors.