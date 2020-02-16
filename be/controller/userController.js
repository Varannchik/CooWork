const UserModel = require('../models/user');


module.exports.CreateOne = async (login, pwd)=> {   
    try {            
        const user = await UserModel ({login, pwd});        
        const data = await user.save();
        console.log(data);
            return data;
    }     
    catch(err) {
        console.log(err);
    }    
}