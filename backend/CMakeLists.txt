cmake_minimum_required(VERSION 3.10)
project(IntelligentAlarmDashboard)

set(CMAKE_CXX_STANDARD 11)

find_package(CURL REQUIRED)

add_executable(dashboard main.cpp weather_api.cpp transit_api.cpp)
target_link_libraries(dashboard CURL::libcurl)