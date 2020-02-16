const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    
    login: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    }
});

// UserSchema.methods.hashPwd = async (pwd)=> {
//     try {
//       const hash = await new Promise((resolve, reject) => {
//         bcrypt.hash(pwd, 10, function(err, hash) {
//           if (err) reject(err)
//           resolve(hash)
//         });
//       })
    
//       return hash;
//     }
//     catch(err) {
//         console.log(err);
//     }
// };
    
const Model = mongoose.model('User', UserSchema);
module.exports = Model;