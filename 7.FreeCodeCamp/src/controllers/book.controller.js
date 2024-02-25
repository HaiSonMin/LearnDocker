const bookModel = require('../models/book.model');

class BookController {
  static async createBook(req, res) {
    console.log('Create book');
    const newBook = await bookModel.create(req.body);
    return res.send({
      status: 201,
      newBook,
    });
  }

  static async getAllBook(req, res) {
    const books = await bookModel.find();
    return res.send({
      status: 200,
      books,
    });
  }

  static async updateBook(req, res) {
    const bookUpdated = await bookModel.findByIdAndUpdate(
      req.params.bookId,
      req.body
    );

    if (!bookUpdated) throw new Error('Update error');

    return res.send({
      status: 200,
      bookUpdated,
    });
  }

  static async deleteBook(req, res) {
    const bookDeleted = await bookModel.findByIdAndDelete(req.params.bookId);

    if (!bookDeleted) throw new Error('Delete error');

    return res.send({
      status: 200,
      bookDeleted,
    });
  }
}

module.exports = BookController;
