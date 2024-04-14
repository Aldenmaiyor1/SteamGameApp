# React Native Steam Game Discount Finder App

This React Native application serves as a Steam game discount finder, utilizing APIs from Steam Community and CheapShark to retrieve deal and game information. The app allows users to search for specific games on sale and set price ranges for their searches.

## Installation Guide

### Using Expo

To create a React Native application using Expo, follow these steps:

1. Run the following command:2. Choose a template and name for your app.
3. Start your app using the provided commands.

### Installing Simulators

To run and test your app, you'll need to set up virtual devices:

- For macOS: Install Xcode.
- For Android: Install Android Studio.

### Running the App

1. Clone the repository into your local environment.
2. Open the folder in VSCode.
3. Run `npm install` in the terminal to install dependencies.
4. Start an Android virtual device or an iOS device (Android is recommended).
5. Run `npm run android` with the virtual device open to start the app.

## Testing the Application on a Phone

To test the application on your phone:

1. Download Expo Go:
- For Android users, download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
- For iOS users, download from [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Open the project folder in VSCode.
3. Run `npm run ios` if using iPhone or `npm run android` if using Android.
4. Scan the QR code using Expo Go (Android) or the Camera app (iOS).

## Expo Routing Introduction

Expo simplifies routing with its file-based routing system. You can navigate to other pages by importing `router` from Expo router and calling `router.push()` with the relative file path.

Dynamic routing is denoted by square brackets, allowing navigation using parameters retrieved by the `useLocalSearchParams` hook.

## React Native Basics

### Components

- **View**: Container for elements, similar to a `div`.
- **Text**: Must enclose text, unlike React where various text components are available.
- **Image**: Displays an image, defined in the `source` prop.
- **ScrollView**: Container allowing scrolling of overflowed elements.
- **FlatList**: Renders a list efficiently, rendering only items currently on screen.
- **TouchableOpacity**: Container with an `onPress` prop, executing a function when pressed.

### Hooks

- **useState**: Creates a variable or state.
- **useEffect**: Runs a callback function on render or when dependencies change.
- **useLocalSearchParams**: Retrieves the name of a parameter in dynamic routes.

## App Walkthrough

### Index Page

Entry page with buttons navigating to different parts of the app: game list, meme generator, and site map.

### List Page

Displays games on sale from the Steam API. Includes search functionality and price range filters.

### Game Information Page

Displays information about a specific game obtained from the Steam API, including screenshots and Metacritic details.

### Meme Generator Page

Fetches a meme from an API and displays it.

