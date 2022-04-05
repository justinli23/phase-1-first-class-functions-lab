const drivers = ['Alex', 'Brian', 'Carl'];
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);  
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    const fareMultiplier = (fare) => multiplier * fare;
    return fareMultiplier;
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (drivers, selectedDrivers) => {
    if (selectedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (selectedDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}
