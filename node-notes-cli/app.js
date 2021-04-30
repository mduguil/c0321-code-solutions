const fs = require('fs');

const command = process.argv[2];

const read = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dataObj = JSON.parse(data);
    for (const key in dataObj.notes) {
      console.log(key + ': ' + dataObj.notes[key]);
    }
  });
};

const create = () => {
  const input = process.argv[3];
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dataObj = JSON.parse(data);
    let nextId = dataObj.nextId;

    const combineData = data => {
      dataObj.notes[nextId] = data;

      nextId++;
      dataObj.nextId = nextId;

      return dataObj;
    };

    const combinedData = JSON.stringify(combineData(input), null, 2);

    fs.writeFile('data.json', combinedData, 'utf8', err => {
      if (err) throw err;
    });
  });
};

const deleteInput = () => {
  const idNum = process.argv[3];
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dataObj = JSON.parse(data);

    const deleteData = id => {
      delete dataObj.notes[id];
      return dataObj;
    };

    const shortendData = JSON.stringify(deleteData(idNum), null, 2);

    fs.writeFile('data.json', shortendData, 'utf8', err => {
      if (err) throw err;
    });
  });
};

const update = () => {
  const idNum = process.argv[3];
  const inputNote = process.argv[4];

  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dataObj = JSON.parse(data);

    const updateData = (id, note) => {
      dataObj.notes[id] = note;
      return dataObj;
    };

    const updatedData = JSON.stringify(updateData(idNum, inputNote), null, 2);

    fs.writeFile('data.json', updatedData, 'utf8', err => {
      if (err) throw err;
    });
  });
};

switch (command) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'delete':
    deleteInput();
    break;
  case 'update':
    update();
    break;
}
