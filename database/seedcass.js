const fs = require('fs');
const faker = require('faker');

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
      const prop1 = faker.random.number({ min: 1, max: 500 });
      const prop2 = faker.random.number({ min: 501, max: 1000 });
      const prop3 = faker.random.number({ min: 1001, max: 1500 });
      const prop4 = faker.random.number({ min: 1501, max: 2000 });
      const prop5 = faker.random.number({ min: 2001, max: 2500 });
      const prop6 = faker.random.number({ min: 2501, max: 3000 });
      const prop7 = faker.random.number({ min: 3001, max: 3500 });
      const prop8 = faker.random.number({ min: 3501, max: 4000 });
      const prop9 = faker.random.number({ min: 4001, max: 4500 });
      const prop10 = faker.random.number({ min: 4501, max: 5000 });
      const prop11 = faker.random.number({ min: 5001, max: 5500 });
      const prop12 = faker.random.number({ min: 5501, max: 6000 });

      const data = `${id};[${prop1}, ${prop2}, ${prop3}, ${prop4}, ${prop5}, ${prop6}, ${prop7}, ${prop8}, ${prop9}, ${prop10}, ${prop11}, ${prop12}]\n`;

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

const relatedHeader = 'mainpropid;relatedid\n';
const writeRelated = fs.createWriteStream('cassRelated.csv');
writeRelated.write(relatedHeader);
relatedGenerator(writeRelated, 10000000, () => {
  console.log('related data success:', new Date());
});
