const fs = require('fs');
const faker = require('faker');

const type = ['Entire Villa', 'Entire Apartment', 'Entire Place', 'Entire Castle', 'Private House', 'Private Room'];

const rooms = [2, 3, 4, 5];

const description = [
  "Beautiful room overlooking city",
  "Great place for family vacation",
  "Little summer get away home",
  "Private place to relax",
  "Historic house in center of city",
  "Great location in middle of attractions",
  "Lovely place for relaxation",
  "Luxury hide-away",
  "Hakuna Matata - close to downtown",
  "Professionally designed place!",
  "Nantucket Style Beach House",
  "Very large backyard with grill and swings!",
  "House w/big yard!",
  "Pet friendly bungalow",
  "Entire Guesthouse fits plenty",
]

const propertiesSeeder = (entries) => {
  let dataString = '';

  for (let i = 0; i < entries; i++) {
    const imageUrl = faker.image.imageUrl();
    const superhost = faker.random.boolean();
    const propertyType = type[i % 6];
    const numOfRooms = rooms[i % 4];
    const rating = faker.finance.amount(3, 5, 2);
    const numOfRatings = faker.random.number({ min: 1, max: 800 });
    const caption = description[i % 15];
    const price = '$' + faker.random.number({ min: 200, max: 700 });

    dataString += `${imageUrl},${superhost},${propertyType},${numOfRooms},${rating},${numOfRatings},${caption},${price}\n`;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('propertiesData.csv', dataString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

propertiesSeeder(50);
