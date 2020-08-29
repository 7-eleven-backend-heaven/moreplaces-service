const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/morePlaces');

const morePlaces = mongoose.Schema({
  propertyId: Number,
  img: String,
  isSuperHost: Boolean,
  propertyType: String,
  numOfRooms: Number,
  rating: Number,
  numOfRatings: Number,
  description: String,
  price: Number,
  similarPlaces: Array,
});

const relatedPlaces = mongoose.model('MorePlaces', morePlaces);

const getProperty = (req, callback) => {
  relatedPlaces.find({propertyId: req.propertyId}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      let newArray = [];
      for (let i = 0; i < results[0].similarPlaces.length; i += 1) {
        //able to find the specified listing but not able to push into array. How would I do that?
        relatedPlaces.find({ propertyId: results[0].similarPlaces[i] }, (err, result) => {
          if (err) {
            callback(err);
          } else {
            newArray.push(result[0]);
          };
        });
      };
      setTimeout( () => {
        callback(null, newArray);
      }, 1000)
    }
  })
}

const getAllProperties = (callback) => {
  relatedPlaces.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const { length } = results;
      for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < 12; j += 1) {
          // console.log(results, 'results ')
          // console.log(randomNum)
          const randomNumGen = () => {
            if (results[i].similarPlaces.length >= 12) {
              return;
            }
            const randomNum = Math.floor(Math.random() * Math.floor(results.length));
            if (randomNum === i || results[i].similarPlaces.indexOf(randomNum) !== -1) {
              return randomNumGen();
            }
            results[i].similarPlaces.push(results[randomNum].propertyId);
            results[i].save((error) => {
              if (error) {
                console.error(error);
              }
            });
          };
          randomNumGen();
        }
      }
      // console.log(faker.random.arrayElement(results), 'results')
      callback(null, results);
    }
  });
};

module.exports.getProperty = getProperty;
module.exports.relatedPlaces = relatedPlaces;
module.exports.getAllProperties = getAllProperties;
