const app = require('express');
const router = app.Router();

const bookRouter = require('./book.route');

console.log('Use Api');
router.use('/api/v1/books', bookRouter);

module.exports = router;
