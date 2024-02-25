const app = require('express');
const BookController = require('../controllers/book.controller');
const router = app.Router();

router.route('/create').post(BookController.createBook);
router.route('/getAll').get(BookController.getAllBook);
router.route('/update/:bookId').patch(BookController.updateBook);
router.route('/delete/:bookId').delete(BookController.deleteBook);

module.exports = router;
