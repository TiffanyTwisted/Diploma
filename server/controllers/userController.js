const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const {json} = require('express/lib/response');
const bcrypt = require('bcrypt');

const generateJWT = (id, email, role) => {
   return  jwt.sign({id, email, role}, process.env.SECRET_KEY, { expiresIn : '24h' })
}

const validateEmail = (email) =>{
    console.log(process.env.EMAIL_REG)
    if ( email.match( process.env.EMAIL_REG ) === false ){
        return next(ApiError.badRequest('Некорректный Email'))
    }
}

class userController {
    async registration(req, res, next) {
        try {
            const {
                first_name,
                middle_name,
                last_name,
                email,
                password,
                role
            } = req.body
            // Checks 
            if (!email || !password) {
                return next(ApiError.badRequest('Email или Password не могут быть пустыми'))
            }

            if (!first_name || !last_name) {
                return next(ApiError.badRequest('Имя и Фамилия не могут быть пустыми'))
            }

            validateEmail(email)

            let candidate = await User.findOne({where: {
                    email
                }})

            if (candidate) {
                return next(ApiError.badRequest('Пользовательно с таким email уже существует'))
            }

            const hashPassword = await bcrypt.hash(password,5);
            const user = await User.create({
                first_name,
                middle_name,
                last_name,
                email,
                password : hashPassword,
                role
            })

            const token = generateJWT(user.id, email, role)

            return res.json({token})
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where : {email}});
        if (!user){
            next(ApiError.internal("Пользователь не найден"))
        }
        let comparePasswords = bcrypt.compareSync(password, user.password);
        if(!comparePasswords){
            next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token})

    }
    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async readUserInfo (req, res) {
        const {id} = req.params
        const user = await User.findOne({where : {id}});
        if (!user){
            next(ApiError.internal("Пользователь не найден"))
        }
        return res.json({user})
    }
}

module.exports = new userController()
