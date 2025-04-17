# 🚗 sPARK - Smart Parking Solution

![sPARK Logo](src/assets/spark_logo.png)

## 📱 About
sPARK is a modern mobile application that revolutionizes the way people find and manage parking spaces. Whether you're looking for a parking spot or want to rent out your parking space, sPARK provides an intuitive platform for all your parking needs.

## ✨ Features

- 🔐 Secure Authentication System
  - Email & Password Registration
  - Login with Firebase
  - Password Recovery
- 📍 Location-based Services
  - Find parking spaces near you
  - Search parking at your destination
- 💰 Parking Space Management
  - Register your parking space
  - Rent out available spaces
- 🎨 Modern UI/UX
  - Clean and intuitive interface
  - Responsive design
  - Custom themed components

## 🛠 Technical Stack

- **Frontend Framework**: React Native with Expo
- **UI Components**: React Native Paper
- **Authentication**: Firebase Auth
- **Navigation**: React Navigation
- **State Management**: React Hooks
- **Code Quality**: Prettier

## 📦 Dependencies

```json
{
  "expo": "^35.0.0",
  "firebase": "^7.2.2",
  "react": "16.8.3",
  "react-native": "sdk-35.0.0",
  "react-native-paper": "^3.0.0",
  "react-navigation": "^4.0.10"
}
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   - Create a Firebase project
   - Update Firebase config in `src/core/config.js`
4. Start the development server:
   ```bash
   npm start
   ```


## 🔒 Environment Setup

Make sure you have the following installed:
- Node.js (v12 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## 🏗 Project Structure

```
src/
├── api/          # API and Firebase integration
├── assets/       # Images and static assets
├── components/   # Reusable UI components
├── core/         # Core configurations
└── screens/      # Application screens
```

## 🎨 Theme Customization

The app uses a custom theme defined in `src/core/theme.js`. Primary and secondary colors can be modified to match your branding.

```javascript
colors: {
  primary: "#6a1b9a",
  secondary: "#38006b",
  error: "#f13a59",
  success: "#00B386"
}
```

## 📄 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here]

## 📞 Support

[Add support contact information here]

---
Made with ❤️ by [Your Name/Organization]