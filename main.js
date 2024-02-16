// ===== Stat Loading ==========================================================

// * Character stats
var characters = [];
// Fetch the character data
function fetchCharacterData() {
    fetch("data/chars.csv")
        .then((response) => response.text())
        .then((text) => {
            // Map the CSV data to a json array
            // Remove line 1
            let lines = text.split("\n");
            lines.shift();

            // Remove the \r from each line
            lines = lines.map((line) => line.replace("\r", ""));

            // Split each line on commas
            lines = lines.map((line) => line.split(","));

            // Remove any empty lines
            lines = lines.filter((line) => line.length > 1);

            // Convert to charData objects
            characters = lines.map((line) => {
                return {
                    name: line[0],
                    miniTurbo: parseInt(line[1]),
                    speed: {
                        ground: parseInt(line[2]),
                        water: parseInt(line[3]),
                        glider: parseInt(line[4]),
                        antiGravity: parseInt(line[5]),
                    },
                    acceleration: parseInt(line[6]),
                    weight: parseInt(line[7]),
                    handling: {
                        ground: parseInt(line[8]),
                        water: parseInt(line[9]),
                        glider: parseInt(line[10]),
                        antiGravity: parseInt(line[11]),
                    },
                    traction: parseInt(line[12]),
                    invincibility: parseInt(line[13]),
                };
            });
        });
}
fetchCharacterData(); // On load
var prevCharacter = 0;

// * Vehicle stats
var vehicles = [];
// Fetch the vehicle data
function fetchVehicleData() {
    fetch("data/karts.csv")
        .then((response) => response.text())
        .then((text) => {
            // Map the CSV data to a json array
            // Remove line 1
            let lines = text.split("\n");
            lines.shift();

            // Remove the \r from each line
            lines = lines.map((line) => line.replace("\r", ""));

            // Split each line on commas
            lines = lines.map((line) => line.split(","));

            // Remove any empty lines
            lines = lines.filter((line) => line.length > 1);

            // Convert to charData objects
            vehicles = lines.map((line) => {
                return {
                    name: line[0],
                    miniTurbo: parseInt(line[1]),
                    speed: {
                        ground: parseInt(line[2]),
                        water: parseInt(line[3]),
                        glider: parseInt(line[4]),
                        antiGravity: parseInt(line[5]),
                    },
                    acceleration: parseInt(line[6]),
                    weight: parseInt(line[7]),
                    handling: {
                        ground: parseInt(line[8]),
                        water: parseInt(line[9]),
                        glider: parseInt(line[10]),
                        antiGravity: parseInt(line[11]),
                    },
                    traction: parseInt(line[12]),
                    invincibility: parseInt(line[13]),
                    type: line[14],
                };
            });
        });
}
fetchVehicleData(); // On load
var prevKart = 0;

// * Tire stats
var tires = [];
// Fetch the tire data
function fetchTireData() {
    fetch("data/tires.csv")
        .then((response) => response.text())
        .then((text) => {
            // Map the CSV data to a json array
            // Remove line 1
            let lines = text.split("\n");
            lines.shift();

            // Remove the \r from each line
            lines = lines.map((line) => line.replace("\r", ""));

            // Split each line on commas
            lines = lines.map((line) => line.split(","));

            // Remove any empty lines
            lines = lines.filter((line) => line.length > 1);

            // Convert to charData objects
            tires = lines.map((line) => {
                return {
                    name: line[0],
                    miniTurbo: parseInt(line[1]),
                    speed: {
                        ground: parseInt(line[2]),
                        water: parseInt(line[3]),
                        glider: parseInt(line[4]),
                        antiGravity: parseInt(line[5]),
                    },
                    acceleration: parseInt(line[6]),
                    weight: parseInt(line[7]),
                    handling: {
                        ground: parseInt(line[8]),
                        water: parseInt(line[9]),
                        glider: parseInt(line[10]),
                        antiGravity: parseInt(line[11]),
                    },
                    traction: parseInt(line[12]),
                    invincibility: parseInt(line[13]),
                };
            });
        });
}
fetchTireData(); // On load
var prevTire = 0;

// * Glider stats
var gliders = [];
// Fetch the tire data
function fetchGliderData() {
    fetch("data/gliders.csv")
        .then((response) => response.text())
        .then((text) => {
            // Map the CSV data to a json array
            // Remove line 1
            let lines = text.split("\n");
            lines.shift();

            // Remove the \r from each line
            lines = lines.map((line) => line.replace("\r", ""));

            // Split each line on commas
            lines = lines.map((line) => line.split(","));

            // Remove any empty lines
            lines = lines.filter((line) => line.length > 1);

            // Convert to charData objects
            gliders = lines.map((line) => {
                return {
                    name: line[0],
                    miniTurbo: parseInt(line[1]),
                    speed: {
                        ground: parseInt(line[2]),
                        water: parseInt(line[3]),
                        glider: parseInt(line[4]),
                        antiGravity: parseInt(line[5]),
                    },
                    acceleration: parseInt(line[6]),
                    weight: parseInt(line[7]),
                    handling: {
                        ground: parseInt(line[8]),
                        water: parseInt(line[9]),
                        glider: parseInt(line[10]),
                        antiGravity: parseInt(line[11]),
                    },
                    traction: parseInt(line[12]),
                    invincibility: parseInt(line[13]),
                };
            });
        });
}
fetchGliderData(); // On load
var prevGlider = 0;

// ===== Reroll ================================================================

// Converts a statistical value from base integers to a percentage for sliders
function toPercent(value) {
    barStat = (value + 3) / 4;
    return (barStat / 6) * 100;
}

// Update a character's individual stats
function updateStats(selection, part, type) {
    let image = document.querySelector(`article > .${part} > .image > img`);
    let name = document.querySelector(`article > .${part} > .stats > h2`);
    let miniTurbo = document.querySelector(
        `article > .${part} > .stats > .labelset > input#miniTurbo`
    );
    let speedGround = document.querySelector(
        `article > .${part} > .stats > fieldset#speed > input#ground`
    );
    let speedWater = document.querySelector(
        `article > .${part} > .stats > fieldset#speed > input#water`
    );
    let speedGlider = document.querySelector(
        `article > .${part} > .stats > fieldset#speed > input#air`
    );
    let speedAntiGravity = document.querySelector(
        `article > .${part} > .stats > fieldset#speed > input#antiGravity`
    );
    let acceleration = document.querySelector(
        `article > .${part} > .stats > .labelset > input#acceleration`
    );
    let weight = document.querySelector(
        `article > .${part} > .stats > .labelset > input#weight`
    );
    let handlingGround = document.querySelector(
        `article > .${part} > .stats > fieldset#handling > input#ground`
    );
    let handlingWater = document.querySelector(
        `article > .${part} > .stats > fieldset#handling > input#water`
    );
    let handlingGlider = document.querySelector(
        `article > .${part} > .stats > fieldset#handling > input#air`
    );
    let handlingAntiGravity = document.querySelector(
        `article > .${part} > .stats > fieldset#handling > input#antiGravity`
    );
    let traction = document.querySelector(
        `article > .${part} > .stats > .labelset > input#traction`
    );
    let invincibility = document.querySelector(
        `article > .${part} > .stats > .labelset > input#invincibility`
    );

    image.src = `img/${part}/${selection.name
        .replace(".", "")
        .replace("(", "")
        .replace(")", "")}.webp`;

    let nameString = selection.name;
    if (type) {
        nameString += ` (${type})`;
    }
    name.textContent = nameString;

    miniTurbo.value = toPercent(selection.miniTurbo);

    speedGround.value = toPercent(selection.speed.ground);
    speedWater.value = toPercent(selection.speed.water);
    speedGlider.value = toPercent(selection.speed.glider);
    speedAntiGravity.value = toPercent(selection.speed.antiGravity);

    console.log(selection.speed.ground, toPercent(selection.speed.ground));

    acceleration.value = toPercent(selection.acceleration);

    weight.value = toPercent(selection.weight);

    handlingGround.value = toPercent(selection.handling.ground);
    handlingWater.value = toPercent(selection.handling.water);
    handlingGlider.value = toPercent(selection.handling.glider);
    handlingAntiGravity.value = toPercent(selection.handling.antiGravity);

    traction.value = toPercent(selection.traction);

    invincibility.value = toPercent(selection.invincibility);
}

function reroll() {
    // Pick a random build
    let characterIndex = Math.floor(Math.random() * characters.length);
    let vehicleIndex = Math.floor(Math.random() * vehicles.length);
    let tireIndex = Math.floor(Math.random() * tires.length);
    let gliderIndex = Math.floor(Math.random() * gliders.length);

    // Re-pick any that are the same as the previous choice
    while (characterIndex === prevCharacter) {
        characterIndex = Math.floor(Math.random() * characters.length);
    }
    while (vehicleIndex === prevKart) {
        vehicleIndex = Math.floor(Math.random() * vehicles.length);
    }
    while (tireIndex === prevTire) {
        tireIndex = Math.floor(Math.random() * tires.length);
    }
    while (gliderIndex === prevGlider) {
        gliderIndex = Math.floor(Math.random() * gliders.length);
    }
    prevCharacter = characterIndex;
    prevKart = vehicleIndex;
    prevTire = tireIndex;
    prevGlider = gliderIndex;

    // Set selections
    let character = characters[characterIndex];
    let vehicle = vehicles[vehicleIndex];
    let tire = tires[tireIndex];
    let glider = gliders[gliderIndex];

    // Update stats
    updateStats(character, "chars", null);
    updateStats(vehicle, "karts", vehicle.type);
    updateStats(tire, "tires", null);
    updateStats(glider, "gliders", null);
}
