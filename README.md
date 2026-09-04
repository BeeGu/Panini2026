# 🏆 Panini Tracker 2026

> A modern Android application for managing a **Panini FIFA World Cup 2026** sticker collection.

Panini Tracker 2026 helps collectors manage their physical sticker album digitally.

The application keeps track of:

* Owned stickers
* Missing stickers
* Duplicate stickers
* Sticker notes
* Sections and national teams
* Album and team progress
* Statistics
* Achievements
* Recent activity
* Sticker trades
* Local backups

Built with **React Native + Expo** and designed primarily for Android.

---

# ✨ Features

## 📖 Album

* Browse the complete FIFA World Cup 2026 sticker album
* Browse stickers by section
* Browse stickers by national team
* Expand / collapse sections and teams
* View sticker details
* Display national team flags
* Track album progress
* Track section progress
* Track national team progress
* Support for extra stickers

---

## 🔍 Search & Filters

The album can be searched by:

* Sticker number
* Player name
* National team

Available filters:

* All
* Missing
* Owned
* Duplicates

---

## 📋 Collection Management

Each sticker can be managed individually.

* Mark sticker as owned / missing
* Add duplicates
* Remove duplicates
* Update duplicate quantity
* Add notes
* View owned stickers
* View missing stickers
* View duplicate stickers

All collection data is stored locally on the device.

---

## 📊 Statistics

The application provides a dedicated statistics section.

### Album statistics

* Total stickers
* Owned stickers
* Missing stickers
* Duplicate quantity
* Duplicate sticker count
* Completion percentage

### Progress

* Progress by national team
* Progress by section
* Team rankings
* Section progress
* Collection activity

### Charts

* Album completion
* Duplicate distribution
* Team statistics
* Section statistics
* Collection progress

---

## 🏆 Achievements

The application includes an achievement system that tracks collection milestones.

Examples include:

* First Sticker
* Collector I
* Collector II
* Collector III
* Half Album
* Almost There
* Album Master
* Team Complete
* Section Complete

Achievements display:

* Icon
* Title
* Description
* Progress
* Target
* Completion status
* Progress bar

---

## 🔄 Trade

Panini Tracker includes a dedicated trade system.

The application identifies:

* Stickers available for trading
* Missing stickers
* Total duplicate quantity
* Potential trade matches

### Trade list export

Trade lists can be exported as:

* Plain text
* JSON

The JSON trade file contains:

* Application information
* Album information
* Export timestamp
* User name
* Duplicate stickers
* Missing stickers
* Sticker codes
* Sticker numbers
* Sticker names
* Sticker types
* Duplicate quantities

### Trade import

Another user can import the JSON trade file into the application.

The application compares the imported collection with the local collection and identifies:

* **They can give me** — stickers the other user has as duplicates that I am missing
* **I can give them** — stickers they are missing that I have as duplicates

Trade results can be searched individually to make physical sticker matching easier.

---

## 💾 Backup & Restore

The application includes a local backup system.

Backups contain:

* Album information
* Application version
* Database statistics
* Collection state
* Owned status
* Duplicate quantities
* Notes

Backups can be:

* Created locally
* Imported
* Restored
* Deleted
* Shared as JSON files

---

## 🕐 Recent Activity

The application tracks recently updated stickers.

Recent activity includes:

* Sticker name
* Update information
* Relative date/time

---

## ⚙️ Settings

The Settings screen provides application and collection information.

Displayed information includes:

* Application version
* Database version
* Number of sections
* Number of national teams
* Total stickers
* Owned stickers
* Missing stickers
* Duplicates

Additional settings include:

* Language selection
* Appearance/theme
* Developer mode
* Database inspector
* Collection reset
* Database rebuild
* Backup manager

The application also stores a local **trade user name**, which is included when creating trade JSON files.

---

## 🌍 Localization

The application uses **i18next** for localization.

Currently supported languages:

* 🇬🇧 English
* 🇷🇴 Romanian

Application text, trade functionality and user interface labels are localized through translation resources.

---

# 💾 Local Database

Panini Tracker 2026 uses **SQLite** for local storage.

The database contains the album structure and collection state.

```text
Sections
   │
   └── National Teams
          │
          └── Stickers
```

Collection information stored locally includes:

* Owned status
* Duplicate count
* Notes
* Sticker metadata
* Application metadata/settings

The application initializes and seeds the local database automatically.

---

# 📥 Album Data Import

Album data is maintained using Excel files and converted into JSON data used by the application.

```text
Excel files
    │
    ▼
excel-to-json.js
    │
    ▼
JSON data
    │
    ├── sections.json
    ├── teams.json
    └── album.json
    │
    ▼
SQLite database
```

This makes maintaining and updating the large sticker dataset easier.

---

# 🏗 Project Structure

```text
Panini2026/
│
├── src/
│   ├── components/
│   │   ├── achievements/
│   │   ├── album/
│   │   ├── common/
│   │   ├── statistics/
│   │   ├── stickerDetails/
│   │   ├── stickers/
│   │   └── trade/
│   │
│   ├── constants/
│   ├── context/
│   ├── database/
│   │   └── repositories/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── theme/
│   └── utils/
│
├── assets/
├── tools/
│
├── app.json
├── eas.json
├── package.json
├── PROJECT_PLAN.md
└── README.md
```

---

# 🧩 Architecture

The application follows a **React Context + Service + Repository** architecture.

```text
Screens
   │
   ▼
React Components
   │
   ▼
Context / Hooks
   │
   ├── AlbumService
   ├── StatisticsService
   ├── AchievementService
   ├── TradeService
   ├── TradeExportService
   └── SettingsService
   │
   ▼
Repositories
   │
   ▼
SQLite
```

### Main services

**AlbumService**
Handles album and collection operations.

**StatisticsService**
Calculates collection statistics and progress.

**AchievementService**
Calculates achievement progress and completion.

**TradeService**
Handles trade data, JSON import and trade matching.

**TradeExportService**
Handles text/JSON trade export, clipboard and sharing.

**SettingsService**
Handles application settings and local user configuration.

**Repositories**
Provide the database access layer.

---

# 🛠 Tech Stack

## Core

* React Native
* Expo SDK 57
* React 19
* React Navigation

## Storage

* Expo SQLite
* SQLite

## UI

* React Native
* React Native SVG
* Expo Vector Icons
* React Native Gifted Charts

## Localization

* i18next
* react-i18next

## File handling

* Expo File System
* Expo Document Picker
* Expo Sharing

## Build

* Expo Application Services (EAS)
* Android APK

---

# 📦 Installation

## Requirements

* Node.js
* npm
* Expo
* EAS CLI
* Android device or emulator

## Clone

```bash
git clone https://github.com/<your-user>/Panini2026.git
cd Panini2026
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npx expo start
```

The application can then be run using:

* Expo Go
* Android emulator
* Development build

---

# 🧪 Development

Check the project configuration:

```bash
npx expo-doctor
```

Run the project with a cleared Expo cache:

```bash
npx expo start --clear
```

Check Git status:

```bash
git status
```

Inspect the project structure:

```bash
tree src
```

Check Expo configuration:

```bash
npx expo config --type public
```

Check dependency compatibility:

```bash
npx expo install --check
```

---

# 📱 Android APK

The application uses EAS Build to generate Android APK files.

For a preview APK:

```bash
export EAS_SKIP_AUTO_FINGERPRINT=1
eas build -p android --profile preview
```

The generated APK can be installed directly on an Android device.

For a production Google Play build:

```bash
eas build --platform android --profile production
```

The production profile generates an Android App Bundle (`.aab`).

---

# 🔧 Troubleshooting

If Expo behaves unexpectedly, clear local caches:

```bash
rm -rf .expo
rm -rf .eas
rm -rf node_modules/.cache
```

Then reinstall/update dependencies:

```bash
npx expo install
```

Run Expo Doctor again:

```bash
npx expo-doctor
```

---

# 🚧 Future Improvements

Possible future improvements include:

* Cloud synchronization
* Sticker images
* Wishlist
* Advanced trade management
* Multiple album editions
* Online collection sharing
* Pack history
* Additional statistics
* More advanced trade matching

---

# 📄 License

MIT License

---

# ❤️ About

Panini Tracker 2026 is a personal collection-management application created for collectors of the Panini FIFA World Cup 2026 sticker album.

Made with ❤️ for Panini collectors.
