# 🌦️ Weather Search App

A responsive weather application built using **React.js and Vite** that allows users to search for cities and view current weather information using the OpenWeatherMap API.

The application uses geocoding to identify a city's geographical coordinates and retrieves its current weather data, providing users with a simple and intuitive weather-search experience.

🔗 **GitHub Repository:** [Weather Search App](https://github.com/ShyamKumarChaurasiya/Weather-Search-App)

## ✨ Features

- 🌍 Search weather information by city name
- 🌡️ Display current temperature in Celsius
- 🌤️ Retrieve current weather conditions
- 📍 Convert city names into latitude and longitude using geocoding
- ☁️ Fetch weather information using the OpenWeatherMap API
- ⚡ Fast development experience with Vite
- ⚛️ Component-based UI using React
- 📱 Responsive user interface
- ❌ Handle invalid city names and API errors
- 🔐 Store the API key using environment variables

## 🛠️ Technologies Used

- **React.js** – Component-based frontend development
- **Vite** – Development server and build tool
- **JavaScript (ES6+)** – Application logic and API handling
- **HTML5** – Application structure
- **CSS3** – Styling and responsive design
- **Fetch API** – Making HTTP requests
- **OpenWeatherMap API** – Geocoding and current weather data
- **Git & GitHub** – Version control and project hosting

## 🌐 API Integration

This application uses the OpenWeatherMap API to retrieve weather information.

### Geocoding API

The city name is converted into geographical coordinates.

```text
https://api.openweathermap.org/geo/1.0/direct
```

### Current Weather API

The latitude and longitude are used to retrieve current weather data.

```text
https://api.openweathermap.org/data/2.5/weather
```

The application uses the metric unit system to display temperature in Celsius.

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ShyamKumarChaurasiya/Weather-Search-App.git
```

### 2. Navigate to the Project Folder

```bash
cd Weather-Search-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the API Key

Create a `.env` file in the root directory of the project.

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your API key from [OpenWeatherMap](https://openweathermap.org/api).

> **Important:** The `.env` file is excluded from Git using `.gitignore`. Vite variables prefixed with `VITE_` are exposed to the client-side application, so the API key should not be treated as a private secret.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Open the local URL displayed in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
Weather-Search/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── cold.jpg
│   │   ├── hot.avif
│   │   └── rain.jpg
│   │
│   ├── Components/
│   │   ├── ErrorMessage.jsx
│   │   ├── SearchBox.jsx
│   │   ├── Weather.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── Services/
│   │   └── weatherApi.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Weather.css
│
├── .env                      # Local API key (not uploaded)
├── .gitignore                # Excludes node_modules and .env
├── index.html                # Main HTML document
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
├── README.md                 # Project documentation
├── vite.config.js             # Vite configuration
└── .oxlintrc.json             # Oxlint configuration
```

## 💡 How to Use

1. Run the application locally or open its deployed version.
2. Enter the name of a city in the search field.
3. Submit the city name.
4. The application retrieves the city's geographical coordinates.
5. Current weather information is fetched from OpenWeatherMap.
6. View the weather details displayed by the application.

## 🎯 Learning Objectives

This project helped me practice:

- Building user interfaces with React
- Understanding React components
- Using Vite for frontend development
- Fetching data from external APIs
- Working with asynchronous JavaScript and `async/await`
- Handling API responses and errors
- Using environment variables in Vite
- Understanding geocoding and latitude-longitude coordinates
- Organizing components and API services
- Creating responsive web interfaces
- Managing projects using Git and GitHub

## 🔒 Environment Variables

The project uses the following environment variable:

| Variable | Description |
|---|---|
| `VITE_WEATHER_API_KEY` | OpenWeatherMap API key |

The `.env` file and `node_modules/` directory are excluded from Git using `.gitignore`.

## 👨‍💻 Author

**Shyam Kumar Chaurasiya**

- GitHub: [ShyamKumarChaurasiya](https://github.com/ShyamKumarChaurasiya)

---

⭐ If you like this project, feel free to star the repository!
