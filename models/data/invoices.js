import "dotenv/config.js"
import "../../config/database.js"
import Invoice from "../Invoice.js"

const invoices = [];
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
    for (let i = 1; i <= 20; i++) {  
        invoices.push({
            date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Fecha aleatoria en el pasado
            description: `Invoice for service ${i} for user ${userId}`,
            value: Math.floor(Math.random() * 1000) + 50, // Valor aleatorio entre 50 y 1049
            asset: Math.random() > 0.5,                   // Activo aleatorio (true o false)
            userId: userId
        });
    }
});

console.log(invoices);

Invoice.insertMany(invoices)
