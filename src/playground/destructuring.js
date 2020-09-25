// const person = {
//     name: 'Ivan',
//     age: 36,
//     location: {
//         city: 'Belgrade',
//         temp: 33
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// const address = ['Strahinjica Bana 12', 'Belgrade', 'Serbia', '11000'];

// const [, city = 'Novi Sad', country] = address;

// console.log(`You are in ${city} ${country}`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`)