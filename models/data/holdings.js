import "dotenv/config.js"
import "../../config/database.js"
import Holding from "../Holding.js"

const holdings = [];
const propertyTypes = ["Real Estate", "Vehicle", "Stock", "Bond", "Cryptocurrency"];
const userIds = [
    "672ecb44e576c9c9517df213",  // Alexander Lopez0
    "672ecb44e576c9c9517df214",  // Alexander Lopez1
    "672ecb44e576c9c9517df215",  // Alexander Lopez2
    "672ecb44e576c9c9517df216",  // Alexander Lopez3
    "672ecb44e576c9c9517df217",  // Alexander Lopez4
    "672ecb44e576c9c9517df218",  // Alexander Lopez5
    "672ecb44e576c9c9517df219",  // Alexander Lopez6
    "672ecb44e576c9c9517df21a",  // Alexander Lopez7
    "672ecb44e576c9c9517df21b",  // Alexander Lopez8
    "672ecb44e576c9c9517df21c"   // Alexander Lopez9
];

userIds.forEach(userId => {
    for (let i = 0; i < 5; i++) {
        holdings.push({
            name: `Property ${i + 1} of User ${userId}`,
            type: propertyTypes[i % propertyTypes.length], // Tipo de propiedad cíclico
            value: Math.floor(Math.random() * 50000) + 5000, // Valor aleatorio entre 5000 y 54999
            userId: userId
        });
    }
});

console.log(holdings);

Holding.insertMany(holdings)