# Cine-shop

Cine-shop is a movie-shopping mobile application developed with React Native and Expo. The app allows users to discover movies, explore film details, watch trailers, and manage their shopping cart through a cinematic user interface.

## App Screenshots

### Home Screen
![Cine-shop home screen](assets/screenshots/home.png)

### Movie Details
![Movie details screen](assets/screenshots/detail.png)

### Search Movies
![Movie search screen](assets/screenshots/start.png)

### Profile
![Cine-shop profile screen](assets/screenshots/profile.png)

### Shopping Cart
![Cine-shop shopping cart](assets/screenshots/cart.png)


## Features

- **Discover movies:** Browse popular movies using the TMDb API.
- **Search movies:** Find films by title.
- **Movie details:** Explore descriptions, ratings, cast information, and trailers.
- **User authentication:** Register and log in using Firebase Authentication.
- **Shopping cart:** Add movies to the cart, change quantities, and remove items.
- **Persistent cart:** Save cart contents locally using AsyncStorage.
- **Separate user carts:** Keep guest and signed-in users' cart data separate.
- **Bottom navigation:** Navigate between Home, Profile, and Cart.
- **Cinematic design:** Enjoy a dark background, red accents, and a custom Cine-shop logo.

##  Technologies

- React Native
- Expo
- JavaScript
- React Navigation
- Redux Toolkit
- AsyncStorage
- Firebase Authentication
- TMDb API

##  Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js and npm installed
- Expo Go on your phone, or an iOS Simulator
- A TMDb API key
- A Firebase project with Email/Password Authentication enabled

### Installation

1. Clone the repository:


   git clone https://github.com/Urwa6/Cine-shop.git
   

2. Navigate to the project directory:

   
   cd Cine-shop


3. Install dependencies:

   
   npm install


4. Create a `.env` file in the project root and add your own API configuration:

   
   EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id


5. Start the development server:

   
   npx expo start
   

6. Scan the QR code with Expo Go, or press `i` to open the iOS Simulator.

##  Environment Variables

The `.env` file stores local project configuration and should not be committed to Git. It is excluded using `.gitignore`.

Variables prefixed with `EXPO_PUBLIC_` are bundled into the client application, so they must not be treated as private secrets.

##  Project

Cine-shop is an individual course project focused on mobile app development, external API integration, user authentication, state management, and persistent data storage.

##  Acknowledgements

- [TMDb](https://www.themoviedb.org/) — movie data
- [Expo](https://expo.dev/) — mobile app development platform
