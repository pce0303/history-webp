import express from 'express';
import conn from './database/db.js';
import eraRouter from './routes/era.js'
import detailRouter from './routes/detail.js';
import path from 'path';
const __dirname = import.meta.dirname;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../fe/dist')));
app.use('/era/*', eraRouter);
app.use('/title/*', detailRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../fe/dist/index.html'));
})

app.get('/', (req, res) => {
    conn.query('SELECT * FROM event', function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
