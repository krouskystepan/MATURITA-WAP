const mongoose = require('mongoose');

/* 
mongoose.Schema - vytvoří schéma
 - Struktura:
      firstName: { type: String, required: true }  
      lastName: { type: String, required: true }
      age: { type: Number, required: true }
*/
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);
