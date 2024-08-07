import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
            , "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    }
});

//Regular node server
//const User = model("User", UserSchema);

// The "moddels" object is provided by the mongoose library and stores all the registered models.

// If a model named "User" already exists in the "model" object, it assign that existing model to the "User" variable

// This prevents redefining the model and ensures that the existing model is reused

// if a model named "User" does not exist in the "model" object, the "model" function from mongoose is called to create a new Model

// The newly craeted model is then assigned to the "User" variable

const User = models.User || model("User", UserSchema);

export default User;