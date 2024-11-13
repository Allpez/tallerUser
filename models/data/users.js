import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users = [];

for (let i = 0; i < 10; i++) {
    users.push({
        name: `Alexander Lopez${i}`,
        email: `alexanderlopez@backend${i}.com`,
        address: `Calle # ${i} - ${i}`,
        phone: `123123${i.toString().repeat(4)}`,
        password: `${i.toString().repeat(4)}`
    });
}

console.log(users);

User.insertMany(users)