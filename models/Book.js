const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: Array,
  description: String,
  image: String,
  link: String,
  targetDate: {type: Date, default: new Date().setDate(new Date().getDate()+21)},
  completed: {type: Boolean, default: true},
}, { toJSON: { virtuals: true } });

bookSchema.virtual("overdue").get(function () {
  return (this.targetDate < Date.now())
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
