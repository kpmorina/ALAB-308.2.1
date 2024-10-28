
const PI = 3.1415;
const radius = 5; // meters
const gardenArea = PI * radius * radius;
const plantSpace = 0.8; // space required per plant in square meters
const initialPlants = 20;

// Calculate the garden's maximum capacity
const maxCapacity = Math.floor(gardenArea / plantSpace);

function predictGrowth(weeks) {
    let plantCount = initialPlants;
    for (let i = 0; i < weeks; i++) {
        plantCount *= 2; // plants double each week
    }
    return plantCount;
}

function controlSystem(plantCount) {
    const capacity80 = maxCapacity * 0.8;
    const capacity50 = maxCapacity * 0.5;
    
    if (plantCount > capacity80) {
        return "Prune: Plant count exceeds 80% of garden capacity.";
    } else if (plantCount > capacity50) {
        return "Monitor: Plant count is between 50% and 80% of garden capacity.";
    } else {
        return "Plant more: Plant count is below 50% of garden capacity.";
    }
}

// Test growth prediction and control system for 1, 2, and 3 weeks
for (let weeks = 1; weeks <= 3; weeks++) {
    const plantCount = predictGrowth(weeks);
    const action = controlSystem(plantCount);
    console.log(`Week ${weeks}: Plant Count = ${plantCount}, Action = ${action}`);
}


function calculateRequiredSpace(initialPlants, weeks) {
    let plantCount = initialPlants;
    for (let i = 0; i < weeks; i++) {
        plantCount *= 2;
    }
    return plantCount * plantSpace; // total space required
}

function calculateRadius(area) {
    return Math.sqrt(area / PI); // radius from area
}

// Calculate space and radius needed if starting with 100 plants, unchecked for 10 weeks
const startingPlants = 100;
const weeksWithoutPruning = 10;

const requiredArea = calculateRequiredSpace(startingPlants, weeksWithoutPruning);
const requiredRadius = calculateRadius(requiredArea);

console.log(`Required Area for 100 plants unchecked for 10 weeks: ${requiredArea.toFixed(2)} square meters`);
console.log(`Required Radius for expanded garden: ${requiredRadius.toFixed(2)} meters`);



function simulateGrowthWithErrorHandling(initialPlants, weeks) {
    try {
        const plantCount = predictGrowth(weeks);
        const requiredSpace = plantCount * plantSpace;
        
        if (requiredSpace > gardenArea) {
            throw new Error("Insufficient space: The plants exceed the garden's capacity.");
        }
        
        const action = controlSystem(plantCount);
        console.log(`Week ${weeks}: Plant Count = ${plantCount}, Action = ${action}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Simulate with starting 100 plants in the original garden for 1, 2, and 3 weeks
const testInitialPlants = 100;
for (let weeks = 1; weeks <= 3; weeks++) {
    console.log(`--- Testing with ${testInitialPlants} plants for ${weeks} weeks ---`);
    simulateGrowthWithErrorHandling(testInitialPlants, weeks);
}
