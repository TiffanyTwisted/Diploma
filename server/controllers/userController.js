const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const { json } = require('express/lib/response');


class userController {
    async registration(req, res, next) {
        try{
        const {
            email,
            password
        } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный Email или Password'))
        }
        const user = await User.create({
            email,
            password
        })
        return res.json({user})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
        

        /*
        // check user exists
        let candidate = await User.findOne({where: {
                email
            }})
        if (candidate) {
            return next(ApiError.badRequest('Пользовательно с таким email уже существует'))
        }
        const user = await User.create({
            email,
            password: hashPassword
        });
        return res.json({user})*/
      /*  "first_name": "Sasha",
        "middle_name": "-",
        "last_name": "Pupkin",
        "role":"student"
        const token = jwt.sign({ id: user.id, email},   //payload
                                process.env.SECRET_KEY, // salt
                                {expiresIn: '24h'});    // other options
        return res.json({token})*/
      
    }
    async login(req, res) {}
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new userController()
