# Hikari

A mental health support platform with a marketing website and a Flutter mobile/web app.

## Project Structure

```
Hikari/
├── web/                    # Marketing website
│   ├── index.html         # Main landing page
│   ├── styles.css         # Global styles
│   └── script.js          # Interactive features
│
└── app/                   # Flutter application
    ├── lib/              # Dart source code
    │   ├── core/        # Constants, models, shared widgets
    │   ├── features/    # Feature screens
    │   ├── services/    # Firebase, analytics
    │   ├── providers/   # Riverpod state management
    │   ├── navigation/  # App routing
    │   └── theme/       # Material 3 theme
    ├── assets/          # Images, icons, mascot
    ├── pubspec.yaml     # Flutter dependencies
    └── web/             # Web build output
```

## Getting Started

### Marketing Website
The website is located in the `web/` folder. Simply open `web/index.html` in a browser or serve it with any web server.

### Flutter App
The Flutter app is in the `app/` folder. Follow the setup steps below:

1. Install Flutter and the Flutter SDK
2. Navigate to the `app/` folder:
   ```bash
   cd app
   ```
3. Install dependencies:
   ```bash
   flutter pub get
   ```
4. Connect Firebase (if needed):
   ```bash
   flutterfire configure
   ```
5. Run the app:
   ```bash
   flutter run -d chrome  # For web
   # or
   flutter run           # For mobile/default platform
   ```

## Key Files

- **Website:** All marketing content is in `web/` with a single-page design
- **App Configuration:** See `app/pubspec.yaml` for dependencies
- **Ko Mascot Setup:** See `app/KO_SETUP_GUIDE.md` for animation and expression details
- **App Theme:** Customizable Material 3 theme in `app/lib/theme/app_theme.dart`

## Features

### Website
- Landing page with feature showcase
- Information about Hikari's approach
- Links to crisis support and app features

### Mobile/Web App
- Mood tracking and journaling
- Peer and professional support directory
- Crisis resources and emergency help
- Mental health education content
- Interactive Ko mascot with expressions

---

For more details, see:
- `app/README.md` - Flutter app documentation
- `app/KO_SETUP_GUIDE.md` - Ko mascot setup guide
