const fs = require('fs');
const faker = require('faker');

// DATA FOR PROPERTIES TABLE
const type = ['Entire Villa', 'Entire Apartment', 'Entire Place', 'Entire Castle', 'Private House', 'Private Room'];

const rooms = [2, 3, 4, 5];
const boolean = [true, false, false];
const ratings = [77, 100, 186, 290, 350, 438, 470, 520, 632, 759];
const amount = [190, 236, 250, 375, 420, 488, 570, 633, 745, 800];
const saved = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const description = [
  'Beautiful room overlooking city',
  'Great place for family vacation',
  'Little summer get away home',
  'Private place to relax',
  'Historic house in center of city',
  'Great location in middle of attractions',
  'Lovely place for relaxation',
  'Luxury hide-away',
  'Hakuna Matata - close to downtown',
  'Professionally designed place!',
  'Nantucket Style Beach House',
  'Very large backyard with grill and swings!',
  'House w/big yard!',
  'Pet friendly bungalow',
  'Entire Guesthouse fits plenty',
];

const propertiesGenerator = (entries) => {
  let dataString = '';

  for (let i = 1; i <= entries; i += 1) {
    const imageUrl = faker.image.imageUrl();
    const superhost = boolean[i % 3];
    const propertyType = type[i % 6];
    const numOfRooms = rooms[i % 4];
    const rating = faker.finance.amount(3, 5, 2);
    const numOfRatings = ratings[i % 10];
    const caption = description[i % 15];
    const price = '$' + amount[i % 10];
    const list = saved[i % 10];

    const time = new Date();
    const ms = time.getMilliseconds();

    dataString += `${imageUrl},${superhost},${propertyType},${numOfRooms},${rating},${numOfRatings},${caption},${price},${list} --${time}-${ms}\n`;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('propertiesData.csv', dataString, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

propertiesGenerator(1000)
  .then(() => {console.log('properties data success')})
  .catch(() => {console.log('proeprties data failed')});

// DATA FOR SAVED LIST
const location = ['Oakland', 'Los Angeles', 'New York', 'London', 'Ibiza', 'Paris', 'Tokyo'];

const savedListGenerator = (entries) => {
  let data = '';

  for (let i = 1; i <= entries; i++) {
    const city = location[i % 7];
    data += `${i},${city}\n`;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('savedData.csv', data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

savedListGenerator(1000)
  .then(() => {console.log('saved data success')})
  .catch(() => {console.log('daved data failed')});

// DATA FOR RELATED PROPERTIES

/* Each property entry should have 12 related properties */
