const pg = require('pg');
const express = require('express');
const app = express();
const JSONParser = express.json();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(JSONParser);

app.get('/api/grades', (req, res) => {
  const grades = `
    select *
      from "grades"
  `;

  db.query(grades)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000');
});
