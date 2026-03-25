const mongoose =require('monooose');

const Userschema = new mongoose.Schema({
    fullname :{
        firstname:{
            type: String,
            required : true,
            minlength: [3,'First name must be at least 3 characters long ']
        },
        lastname:{
            type:String,
            minlength: [ 3,'last name must be at least 3 characters long ']

        }, 

        email:{
            type:String,
            required:true,
            unique: true,
            minlength: [ 3,'last name must be at least 3 characters long ']

        }, 
     
        password:{
            type:String,
            required: true,
        },

        socketId:{
            type:String,
        },


    }
})