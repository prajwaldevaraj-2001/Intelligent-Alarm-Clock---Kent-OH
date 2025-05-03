#include "transit_api.h"
#include <string>

std::string getTransitData() {
    return R"({
        \"route\": \"Kent Loop\",
        \"status\": \"On Time\",
        \"next_arrival\": \"5 mins\"
    })";
}