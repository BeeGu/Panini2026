# Panini Tracker 2026

## Status
🚧 In Development

## Milestone 1
- [x] Expo setup
- [x] Git
- [x] Navigation
- [x] Theme
- [x] ProgressBar

## Milestone 2
- [ ] Dashboard
- [ ] SQLite
- [ ] Album

Milestone 2 - UX & Design
✓ Dashboard nou (Home)
✓ Bottom Tabs complete
✓ Search Screen
✓ Statistics Screen
✓ Settings Screen

abia apoi

✓ Import complet Excel
✓ Grupare pe secțiuni
✓ Favorite teams
✓ Backup

## Milestone 3
- [ ] Search
- [ ] Duplicates
- [ ] Statistics

## Future
- [ ] Pack History
- [ ] Backup
- [ ] Import / Export
- [ ] Cloud Sync

---

# Pasul 2 - ROADMAP.md

```markdown
# Roadmap

## v0.1
- Home Screen
- Album
- SQLite

## v0.2
- Search
- Filters
- Progress

## v0.3
- Sections by Team
- Statistics

## v0.4
- Duplicates
- Exchanges

## v0.5
- Import Excel

## v0.6
- Export Backup

## v1.0
- Stable Release


⚠️ pkg install tree
apoi ruleaza: tree src

⚠️ run project:
npx expo start --clear

#Excel to json
#node tools/excel-to-json.js

⚠️ Rulează doctor să vedem dacă există probleme de configurare.
npx expo-doctor
npx expo-doctor --verbose


export EAS_SKIP_AUTO_FINGERPRINT=1

⚠️ Build. Din Termux:
eas build -p android --profile preview

⚠️ Dacă vrei versiunea finală pentru Google Play atunci:
eas build --platform android --profile production
si produce .aab


🟢🟢🟢
3. Curăță cache-ul Expo
rm -rf .expo
rm -rf .eas
rm -rf node_modules/.cache

npx expo install

eas build -p android --profile preview
🟢🟢🟢


⚠️ 4. Verifică dacă ai un folder foarte mare
Din rădăcina proiectului:
du -sh .
du -sh node_modules

⚠️
npx expo config --type public

