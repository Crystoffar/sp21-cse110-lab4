let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const cars in statistics) {
    if (cars.charAt(0) == 'r') {
        console.log(statistics[cars]);
    } else if ((statistics[cars] % 2) != 0) {
        console.log(statistics[cars]);
    }
}