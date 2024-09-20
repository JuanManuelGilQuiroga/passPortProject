const {validationResult} = require('express-validator');
const UserRepository = require('../../domain/repositories/userRepository.cjs');

module.exports = class UserController {
    constructor() {
        this.userRepository = new UserRepository();
    }
    
    async crearUsuario(req, res)  {
        // console.log(this.userRepository)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
            const userExist = await this.userRepository.getOneUserByNameEmailOrOauthId(req.body);
            const newUser = await this.userRepository.save(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }

    async logUsuario (req,res) {
        try {
            const user = await this.userRepository.logIn(req.body);
            return res.status(201).json({ message: 'Usuario loggeado' });
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}