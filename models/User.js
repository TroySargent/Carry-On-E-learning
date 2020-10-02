const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  }]
}, { toJSON: { virtuals: true } });

UserSchema.virtual('completedBooks',{
  ref:"Book",
  localField: "books",
  foreignField:"_id",
  match: { completed: true},
  count: true
})

const User = mongoose.model("User", UserSchema);

module.exports = User;