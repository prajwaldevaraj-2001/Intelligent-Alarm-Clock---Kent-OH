#include <iostream>
#include <string>
#include "weather_api.h"
#include "transit_api.h"

int main() {
    std::string weather = getWeatherData();
    std::string transit = getTransitData();

    std::cout << "Weather Info:\n" << weather << "\n";
    std::cout << "Transit Info:\n" << transit << "\n";

    return 0;
}