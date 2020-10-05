const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  channelTitle: String, 
  description: String, 
  url: String,
  targetDate: {type: Date, default: new Date().setDate(new Date().getDate()+21)},
  completed: {type: Boolean, default: false},
}, { toJSON: { virtuals: true } });

videoSchema.virtual("overdue").get(function () {
  return (this.targetDate < Date.now()) // if target date is less than now, book is not overdue
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
