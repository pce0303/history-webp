import express from 'express';
import conn from '../database/db.js';

const router = express.Router();

router.get('/:era', (req, res) => {
  const era = req.params.era;

  conn.query('SELECT id, title, summary FROM event WHERE era = ?', [era], (err, results, fields) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send({ error: 'database query error' });
      return;
    }
    res.json(results);
  });
});

export default router;
