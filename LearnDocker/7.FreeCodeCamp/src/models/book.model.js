const { model, Schema } = require('mongoose'); // Erase if already required
// Declare the Schema of the Mongo model
const BookSchema = new Schema(
  {
    book_name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    book_author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = model('Book', BookSchema);
