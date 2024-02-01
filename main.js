// ===== Stats =================================================================

// * Character stats
var characters = [
    {
        name: "Baby Peach",
        miniTurbo: 5,
        speed: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 4,
        weight: 0,
        handling: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        traction: 5,
        invincibility: 6,
    },
    {
        name: "Baby Daisy",
        miniTurbo: 5,
        speed: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 4,
        weight: 0,
        handling: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        traction: 5,
        invincibility: 6,
    },
    {
        name: "Baby Rosalina",
        miniTurbo: 5,
        speed: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 5,
        weight: 0,
        handling: {
            ground: 9,
            water: 9,
            glider: 9,
            antiGravity: 9,
        },
        traction: 3,
        invincibility: 6,
    },
];

// ===== Reroll ================================================================

// Converts a statistical value from base integers to a percentage for sliders
function toPercent(value) {
    barValue = (value + 3) / 4; // MK8DX computation
    return (barValue / 6) * 100; // 6 is the maximal value of a bar
}

// Update a character's individual stats
function updateCharacterStats(character) {
    let image = document.querySelector("article > .chars > .image > img");
    let name = document.querySelector("article > .chars > .stats > h2");
    let miniTurbo = document.querySelector(
        "article > .chars > .stats > .labelset > input#miniTurbo"
    );
    let speedGround = document.querySelector(
        "article > .chars > .stats > fieldset#speed > input#ground"
    );
    let speedWater = document.querySelector(
        "article > .chars > .stats > fieldset#speed > input#water"
    );
    let speedGlider = document.querySelector(
        "article > .chars > .stats > fieldset#speed > input#air"
    );
    let speedAntiGravity = document.querySelector(
        "article > .chars > .stats > fieldset#speed > input#antiGravity"
    );
    let acceleration = document.querySelector(
        "article > .chars > .stats > .labelset > input#acceleration"
    );
    let weight = document.querySelector(
        "article > .chars > .stats > .labelset > input#weight"
    );
    let handlingGround = document.querySelector(
        "article > .chars > .stats > fieldset#handling > input#ground"
    );
    let handlingWater = document.querySelector(
        "article > .chars > .stats > fieldset#handling > input#water"
    );
    let handlingGlider = document.querySelector(
        "article > .chars > .stats > fieldset#handling > input#air"
    );
    let handlingAntiGravity = document.querySelector(
        "article > .chars > .stats > fieldset#handling > input#antiGravity"
    );
    let traction = document.querySelector(
        "article > .chars > .stats > .labelset > input#traction"
    );
    let invincibility = document.querySelector(
        "article > .chars > .stats > .labelset > input#invincibility"
    );

    image.src = `img/chars/${character.name.replace(".", "")}.webp`;

    name.textContent = character.name;

    miniTurbo.value = toPercent(character.miniTurbo);

    speedGround.value = toPercent(character.speed.ground);
    speedWater.value = toPercent(character.speed.water);
    speedGlider.value = toPercent(character.speed.glider);
    speedAntiGravity.value = toPercent(character.speed.antiGravity);

    acceleration.value = toPercent(character.acceleration);

    weight.value = toPercent(character.weight);

    handlingGround.value = toPercent(character.handling.ground);
    handlingWater.value = toPercent(character.handling.water);
    handlingGlider.value = toPercent(character.handling.glider);
    handlingAntiGravity.value = toPercent(character.handling.antiGravity);

    traction.value = toPercent(character.traction);

    invincibility.value = toPercent(character.invincibility);
}

function reroll() {
    // Pick a random build
    let character = characters[Math.floor(Math.random() * characters.length)];

    updateCharacterStats(character);
}
