# Intelligent Alarm Clock – Kent, OH

This project is a smart IoT-inspired dashboard that provides real-time weather conditions and transit alerts for users in Kent, Ohio. It features both a C++ backend for data processing and a clean, browser-based frontend for user interaction.

---

## Features

-  Live Clock
-  Real-time Weather (OpenWeatherMap API)
-  Transit Data (Mocked, expandable to real-time)
-  Alert System for Weather Conditions
-  Modern Web Dashboard UI
-  Auto-refresh every 30 seconds

---

##  Technologies Used

| Component     | Tech                          |
|---------------|-------------------------------|
| Backend       | C++ (libcurl for API calls)   |
| Frontend      | HTML, CSS, JavaScript         |
| Weather API   | OpenWeatherMap (free key)     |
| Transit API   | Simulated (via C++)           |
| Build Tool    | CMake                         |

---

##  Getting Started

###  Requirements

- A C++ compiler (e.g. `g++`)
- CMake
- libcurl

###  Build & Run Backend (C++)

```bash
cd backend
mkdir build
cd build
cmake ..
make
./dashboard
```

###  Run the Frontend

```bash
cd frontend
python3 -m http.server 8080
```

Open your browser and navigate to:

```
http://localhost:8080
```

---

##  Folder Structure

```
Intelligent_Alarm_Clock_Complete/
├── backend/        # C++ source code
├── frontend/       # Dashboard HTML/CSS/JS
└── README.md       # This file
```

---

##  Notes

- Weather is fetched live using the API key: `8ba6252ebf04116772c8f1324495bf85`
- Transit logic is mocked but easily extendable to real-time APIs such as Passio GO!
- Designed with project proposal specs in mind for Kent State University.

---

---

##  Developed by

**Prajwal Devaraj**  
Kent State University  
