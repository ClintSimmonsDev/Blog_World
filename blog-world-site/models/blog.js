const mongoose = require('mongoose');
//mongoose.Schema is a constructor function
const Schema = mongoose.Schema;

//create blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, 
//second Schema argument - sets timestamps automatically
{ timestamps: true });

//model method takes 2 args, name of model/collection singular, and schema created above
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;