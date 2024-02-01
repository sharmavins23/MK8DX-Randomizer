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
    {
        name: "Lemmy",
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
    {
        name: "Baby Mario",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 4,
        invincibility: 5,
    },
    {
        name: "Baby Luigi",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 4,
        invincibility: 5,
    },
    {
        name: "Dry Bones",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 4,
        invincibility: 5,
    },
    {
        name: "Mii (Light)",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 4,
        invincibility: 5,
    },
    {
        name: "Koopa Troopa",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 4,
        weight: 2,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Lakitu",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 4,
        weight: 2,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Bowser Jr.",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 4,
        weight: 2,
        handling: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Toadette",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Wendy",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Isabelle",
        miniTurbo: 4,
        speed: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Toad",
        miniTurbo: 4,
        speed: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Shy Guy",
        miniTurbo: 4,
        speed: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Larry",
        miniTurbo: 4,
        speed: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Cat Peach",
        miniTurbo: 4,
        speed: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        traction: 3,
        invincibility: 3,
    },
    {
        name: "Villager (Female)",
        miniTurbo: 4,
        speed: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        traction: 3,
        invincibility: 3,
    },
    {
        name: "Inkling (Girl)",
        miniTurbo: 4,
        speed: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        traction: 3,
        invincibility: 3,
    },
    {
        name: "Diddy Kong",
        miniTurbo: 4,
        speed: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        acceleration: 4,
        weight: 3,
        handling: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        traction: 3,
        invincibility: 3,
    },
    {
        name: "Peach",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 4,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Daisy",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 4,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Birdo",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 4,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Yoshi",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 4,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Peachette",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 4,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Tanooki Mario",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 5,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 1,
    },
    {
        name: "Inkling (Boy)",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 5,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 1,
    },
    {
        name: "Villager (Male)",
        miniTurbo: 4,
        speed: {
            ground: 6,
            water: 6,
            glider: 6,
            antiGravity: 6,
        },
        acceleration: 3,
        weight: 5,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 1,
    },
    {
        name: "Luigi",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 3,
    },
    {
        name: "Iggy",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 3,
    },
    {
        name: "Kamek",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 5,
            water: 5,
            glider: 5,
            antiGravity: 5,
        },
        traction: 1,
        invincibility: 3,
    },
    {
        name: "Mario",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Ludwig",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Mii (Medium)",
        miniTurbo: 3,
        speed: {
            ground: 7,
            water: 7,
            glider: 7,
            antiGravity: 7,
        },
        acceleration: 2,
        weight: 6,
        handling: {
            ground: 4,
            water: 4,
            glider: 4,
            antiGravity: 4,
        },
        traction: 2,
        invincibility: 3,
    },
    {
        name: "Rosalina",
        miniTurbo: 2,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 7,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 4,
    },
    {
        name: "King Boo",
        miniTurbo: 2,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 7,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 4,
    },
    {
        name: "Link",
        miniTurbo: 2,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 7,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 4,
    },
    {
        name: "Pauline",
        miniTurbo: 2,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 7,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 4,
    },
    {
        name: "Petey Piranha",
        miniTurbo: 1,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 10,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 1,
        invincibility: 6,
    },
    {
        name: "Metal Mario",
        miniTurbo: 1,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 10,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 1,
        invincibility: 3,
    },
    {
        name: "Pink Gold Peach",
        miniTurbo: 1,
        speed: {
            ground: 8,
            water: 8,
            glider: 8,
            antiGravity: 8,
        },
        acceleration: 1,
        weight: 10,
        handling: {
            ground: 3,
            water: 3,
            glider: 3,
            antiGravity: 3,
        },
        traction: 1,
        invincibility: 3,
    },
    {
        name: "Wiggler",
        miniTurbo: 1,
        speed: {
            ground: 9,
            water: 9,
            glider: 9,
            antiGravity: 9,
        },
        acceleration: 1,
        weight: 8,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        traction: 0,
        invincibility: 4,
    },
    {
        name: "Waluigi",
        miniTurbo: 1,
        speed: {
            ground: 9,
            water: 9,
            glider: 9,
            antiGravity: 9,
        },
        acceleration: 1,
        weight: 8,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        traction: 0,
        invincibility: 4,
    },
    {
        name: "Donkey Kong",
        miniTurbo: 1,
        speed: {
            ground: 9,
            water: 9,
            glider: 9,
            antiGravity: 9,
        },
        acceleration: 1,
        weight: 8,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        traction: 0,
        invincibility: 4,
    },
    {
        name: "Roy",
        miniTurbo: 1,
        speed: {
            ground: 9,
            water: 9,
            glider: 9,
            antiGravity: 9,
        },
        acceleration: 1,
        weight: 8,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 2,
        },
        traction: 0,
        invincibility: 4,
    },
    {
        name: "Wario",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 9,
        handling: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        traction: 1,
        invincibility: 5,
    },
    {
        name: "Dry Bowser",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 9,
        handling: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        traction: 1,
        invincibility: 5,
    },
    {
        name: "Funky Kong",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 9,
        handling: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        traction: 1,
        invincibility: 5,
    },
    {
        name: "Mii (Heavy)",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 9,
        handling: {
            ground: 1,
            water: 1,
            glider: 1,
            antiGravity: 1,
        },
        traction: 1,
        invincibility: 5,
    },
    {
        name: "Bowser",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 10,
        handling: {
            ground: 0,
            water: 0,
            glider: 0,
            antiGravity: 0,
        },
        traction: 0,
        invincibility: 6,
    },
    {
        name: "Morton",
        miniTurbo: 0,
        speed: {
            ground: 10,
            water: 10,
            glider: 10,
            antiGravity: 10,
        },
        acceleration: 0,
        weight: 10,
        handling: {
            ground: 0,
            water: 0,
            glider: 0,
            antiGravity: 0,
        },
        traction: 0,
        invincibility: 6,
    },
];

// * Vehicle stats
var vehicles = [
    {
        name: "Biddybuggy",
        type: "Kart",
        miniTurbo: 7,
        speed: {
            ground: 0,
            water: 1,
            glider: 1,
            antiGravity: 2,
        },
        acceleration: 7,
        weight: 0,
        handling: {
            ground: 5,
            water: 4,
            glider: 4,
            antiGravity: 5,
        },
        traction: 4,
        invincibility: 0,
    },
    {
        name: "Mr. Scooty",
        type: "Bike",
        miniTurbo: 7,
        speed: {
            ground: 0,
            water: 1,
            glider: 1,
            antiGravity: 2,
        },
        acceleration: 7,
        weight: 0,
        handling: {
            ground: 5,
            water: 4,
            glider: 4,
            antiGravity: 5,
        },
        traction: 4,
        invincibility: 0,
    },
    {
        name: "Streetle",
        type: "Kart",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 5,
            glider: 2,
            antiGravity: 0,
        },
        acceleration: 6,
        weight: 0,
        handling: {
            ground: 4,
            water: 5,
            glider: 3,
            antiGravity: 2,
        },
        traction: 6,
        invincibility: 3,
    },
    {
        name: "Landship",
        type: "Kart",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 5,
            glider: 2,
            antiGravity: 0,
        },
        acceleration: 6,
        weight: 0,
        handling: {
            ground: 4,
            water: 5,
            glider: 3,
            antiGravity: 2,
        },
        traction: 6,
        invincibility: 2,
    },
    {
        name: "Pipe Frame",
        type: "Kart",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 3,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 6,
        weight: 1,
        handling: {
            ground: 5,
            water: 4,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Varmint",
        type: "Bike",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 3,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 6,
        weight: 1,
        handling: {
            ground: 5,
            water: 4,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 2,
    },
    {
        name: "City Tripper",
        type: "Bike",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 3,
            glider: 1,
            antiGravity: 1,
        },
        acceleration: 6,
        weight: 1,
        handling: {
            ground: 5,
            water: 4,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 2,
    },
    {
        name: "Cat Cruiser",
        type: "Kart",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 4,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 3,
    },
    {
        name: "Teddy Buggy",
        type: "ATV",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 4,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 1,
    },
    {
        name: "Comet",
        type: "Sport Bike",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 4,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 2,
    },
    {
        name: "Yoshi Bike",
        type: "Sport Bike",
        miniTurbo: 6,
        speed: {
            ground: 2,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        acceleration: 5,
        weight: 2,
        handling: {
            ground: 4,
            water: 2,
            glider: 4,
            antiGravity: 3,
        },
        traction: 3,
        invincibility: 2,
    },
    {
        name: "W 25 Silver Arrow",
        type: "Kart",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 3,
            antiGravity: 4,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 4,
            water: 3,
            glider: 3,
            antiGravity: 4,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Standard Bike",
        type: "Bike",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 3,
            antiGravity: 4,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 4,
            water: 3,
            glider: 3,
            antiGravity: 4,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Flame Rider",
        type: "Bike",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 3,
            antiGravity: 4,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 4,
            water: 3,
            glider: 3,
            antiGravity: 4,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Wild Wiggler",
        type: "ATV",
        miniTurbo: 5,
        speed: {
            ground: 2,
            water: 2,
            glider: 3,
            antiGravity: 4,
        },
        acceleration: 5,
        weight: 1,
        handling: {
            ground: 4,
            water: 3,
            glider: 3,
            antiGravity: 4,
        },
        traction: 5,
        invincibility: 4,
    },
    {
        name: "Tanooki Kart",
        type: "Kart",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 2,
        weight: 3,
        handling: {
            ground: 4,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        traction: 7,
        invincibility: 4,
    },
    {
        name: "Koopa Clown",
        type: "Kart",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 2,
        weight: 3,
        handling: {
            ground: 4,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        traction: 7,
        invincibility: 3,
    },
    {
        name: "Master Cycle Zero",
        type: "Sport Bike",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        acceleration: 2,
        weight: 3,
        handling: {
            ground: 4,
            water: 4,
            glider: 3,
            antiGravity: 3,
        },
        traction: 7,
        invincibility: 3,
    },
    {
        name: "Mach 8",
        type: "Kart",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 3,
            glider: 4,
            antiGravity: 5,
        },
        acceleration: 3,
        weight: 3,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Sports Coupe",
        type: "Kart",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 3,
            glider: 4,
            antiGravity: 5,
        },
        acceleration: 3,
        weight: 3,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 3,
    },
    {
        name: "Inkstriker",
        type: "ATV",
        miniTurbo: 5,
        speed: {
            ground: 3,
            water: 3,
            glider: 4,
            antiGravity: 5,
        },
        acceleration: 3,
        weight: 3,
        handling: {
            ground: 2,
            water: 2,
            glider: 2,
            antiGravity: 4,
        },
        traction: 4,
        invincibility: 1,
    },
];

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
    let character = characters[Math.floor(Math.random() * characters.length)];
    let vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];

    // Update stats
    updateStats(character, "chars", null);
    updateStats(vehicle, "karts", vehicle.type);
}
