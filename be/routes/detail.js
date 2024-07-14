import express from 'express';
import conn from '../database/db.js';

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;

  conn.query('SELECT * FROM event WHERE id = ?', [id], (err, results, fields) => {
    if(err) {
      console.error(err);
      res.status(500).send({ error: err });
      return;
    }
    res.json(results[0]);
  });
});

export default router;
