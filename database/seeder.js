const fs = require('fs');
const faker = require('faker');

// DATA FOR PROPERTIES TABLE
const type = ['Entire Villa', 'Entire Apartment', 'Entire Place', 'Entire Castle', 'Private House', 'Private Room'];

const rooms = [2, 3, 4, 5];
const boolean = [true, false, false];
const avg = [3.77, 4.55, 4.30, 4.27, 3.95, 4.88, 4.10, 4.65, 4.44, 3.86];
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

const images = [
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/AreaRoom1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/AreaRoom2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bathroom1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bathroom2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bed1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Outside1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Patio1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Couch1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Kitchen1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/PoolArea1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/PoolArea2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/WindowView1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/bedroom.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/bedroom2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/terrace.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/terrace2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/diningarea.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bedroom1.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bedroom2.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/livingroom.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bathroom.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/outsideview.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/roofterrace.jpg',
  'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/lobbybar.jpg',
];

const propertiesGenerator = (entries) => {
  let dataString = '';

  for (let i = 1; i <= entries; i += 1) {
    const imageUrl = images[i % 26];
    const superhost = boolean[i % 3];
    const propertyType = type[i % 6];
    const numOfRooms = rooms[i % 4];
    const rating = avg[i % 10];
    const numOfRatings = ratings[i % 10];
    const caption = description[i % 15];
    const price = `$${amount[i % 10]}`;
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

// DATA FOR SAVED LIST
const location = ['Oakland', 'Los Angeles', 'New York', 'London', 'Ibiza', 'Paris', 'Tokyo'];

const savedListGenerator = (entries) => {
  let data = '';

  for (let i = 1; i <= entries; i += 1) {
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

// DATA FOR RELATED PROPERTIES
/* Each property entry should have 12 related properties */
const relatedGenerator = (entries) => {
  let data = '';
  for (let i = 1; i <= entries; i += 1) {
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
    data += `${i},${faker.random.number({ min: 1, max: 1000 })}\n`;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('relatedData.csv', data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

propertiesGenerator(1000)
  .then(() => { console.log('properties data success'); })
  .catch(() => { console.log('proeprties data failed'); });

savedListGenerator(1000)
  .then(() => { console.log('saved data success'); })
  .catch(() => { console.log('daved data failed'); });

relatedGenerator(2)
  .then(() => { console.log('related data success'); })
  .catch(() => { console.log('related data failed'); });
