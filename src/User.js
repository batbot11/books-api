import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, index: true},
    passwordHash: {type: String, required: true}
});

schema.methods.isValidPassword = function isValidPassword (password) {
    return bcrypt.compareSync(password, this.passwordHash)
}

schema.methods.toAuthJSON = function toAuthJSON () {
    return {
        email: this.email,
        token: this.generateToken()
    }
}

schema.methods.generateToken = function generateToken () {
    return jwt.sign({
        email: this.email
    }, "secretkey")
}

export default mongoose.model("User", schema);