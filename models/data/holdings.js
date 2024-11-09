import "dotenv/config.js"
import "../../config/database.js"
import Holding from "../Holding.js"

const holdings = [];
const propertyTypes = ["Real Estate", "Vehicle", "Stock", "Bond", "Cryptocurrency"];

userIds.forEach(userId => {
    for (let i = 0; i < 50; i++) {
        holdings.push({
            name: `Property ${i + 1} of User ${userId}`,
            type: propertyTypes[i % propertyTypes.length], // Tipo de propiedad cíclico
            value: Math.floor(Math.random() * 50000) + 5000, // Valor aleatorio entre 5000 y 54999
            user: userId
        });
    }
});

console.log(holdings);

Holding.insertMany(holdings)