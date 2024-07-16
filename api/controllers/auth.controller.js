import User from '../models/User.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const Signup = async(req, res, next) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password || username.length ==='' || email.length === '' || password.length ===''){
            next(errorHandler(400, "All fields are required"))
        }

        const hashpassword = bcryptjs.hashSync(password, 10) 

        const newUser = new User({
            username,
            email,
            password: hashpassword
        })
        await newUser.save()  
        res.json(200).json('signu successfull') 

    } catch (error) {
        next(error)
    }
} 