const fs = require('fs');
const faker = require('faker');

// DATA FOR PROPERTIES TABLE
const type = ['Entire Villa', 'Entire Apartment', 'Entire Place', 'Entire Castle', 'Private House', 'Private Room'];

const rooms = [2, 3, 4, 5];
const boolean = [true, false, false];
const avg = [3.77, 4.55, 4.30, 4.27, 3.95, 4.88, 4.10, 4.65, 4.44, 3.86];
const ratings = [77, 100, 186, 290, 350, 438, 470, 520, 632, 759];
const amount = [190, 236, 250, 375, 420, 488, 570, 633, 745, 800];
const saved = [1, 2, 3, 4, null, 5, 6, null, 7];

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

const propertiesGenerator = (writer, entries, callback) => {
  const start = new Date();
  console.log('properties:', start);

  let id = 0;

  function write() {
    let ok = true;
    do {
      entries -= 1;
      id += 1;
      const imageUrl = images[entries % 26];
      const superhost = boolean[entries % 3];
      const propertyType = type[entries % 6];
      const numOfRooms = rooms[entries % 4];
      const rating = avg[entries % 10];
      const numOfRatings = ratings[entries % 10];
      const caption = description[entries % 15];
      const price = `$${amount[entries % 10]}`;
      const list = saved[entries % 9];

      const dataString = `${id},${imageUrl},${superhost},${propertyType},${numOfRooms},${rating},${numOfRatings},${caption},${price},${list}\n`;

      if (entries === 0) {
        writer.write(dataString, 'utf-8', callback);
      } else {
        ok = writer.write(dataString, 'utf-8');
      }
    } while (entries > 0 && ok);
    if (entries > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

// DATA FOR SAVED LIST
const location = ['Oakland', 'Los Angeles', 'New York', 'London', 'Ibiza', 'Paris', 'Tokyo'];

const savedListGenerator = (entries) => {
  const start = new Date();
  console.log('saved:', start);

  let data = '';

  for (let i = 1; i <= entries; i += 1) {
    const city = location[i - 1];
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
const relatedGenerator = (writer, entries, callback) => {
  const start = new Date();
  console.log('related:', start);

  let id = 0;

  function write() {
    let ok = true;
    do {
      entries -= 1;
      id += 1;

      let data = `${id},${faker.random.number({ min: 1, max: 100 })}\n`;
      data += `${id},${faker.random.number({ min: 200, max: 300 })}\n`;
      data += `${id},${faker.random.number({ min: 400, max: 500 })}\n`;
      data += `${id},${faker.random.number({ min: 600, max: 700 })}\n`;
      data += `${id},${faker.random.number({ min: 800, max: 900 })}\n`;
      data += `${id},${faker.random.number({ min: 1000, max: 1100 })}\n`;
      data += `${id},${faker.random.number({ min: 1200, max: 1300 })}\n`;
      data += `${id},${faker.random.number({ min: 1400, max: 1500 })}\n`;
      data += `${id},${faker.random.number({ min: 1700, max: 1800 })}\n`;
      data += `${id},${faker.random.number({ min: 1900, max: 2000 })}\n`;
      data += `${id},${faker.random.number({ min: 2100, max: 2200 })}\n`;
      data += `${id},${faker.random.number({ min: 5000, max: 6000 })}\n`;

      if (entries === 0) {
        writer.write(data, 'utf-8', callback);
      } else {
        ok = writer.write(data, 'utf-8');
      }
    } while (entries > 0 && ok);
    if (entries > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

const writeProperties = fs.createWriteStream('propertiesData.csv');
propertiesGenerator(writeProperties, 10, () => {
  console.log('properties data success:', new Date());
});

const writeRelated = fs.createWriteStream('relatedData.csv');
relatedGenerator(writeRelated, 10, () => {
  console.log('related data success:', new Date());
});

// savedListGenerator(7)
//   .then(() => { console.log('saved data success:', new Date()); })
//   .catch(() => { console.log('daved data failed'); });
