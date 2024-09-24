const {validationResult} = require('express-validator');
const UserRepository = require('../../domain/repositories/userRepository.cjs');

module.exports = class UserController {
    constructor() {
        this.userRepository = new UserRepository();
    }
    
    async crearUsuario(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
            // Verificar si el usuario ya existe
            console.log('Datos para verificar usuario:', req.body);
            const userExist = await this.userRepository.getOneUserByNameEmailOrOauthId(req.body);
            
            if (userExist) {
                console.log('Ya existe un usuario con ese email o nick');
                return res.status(409).json({ message: 'Usuario ya registrado' });
            }
    
            // Si no existe, guardamos el nuevo usuario
            const newUser = await this.userRepository.save(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
    
    

    async logUsuario(req, res) {
        try {
            const { email, password } = req.body;
            const user = await this.userRepository.getOneUserByNameEmail(email); // Busca al usuario por email
            
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            
            // Verificamos la contraseña directamente
            if (password !== user.password) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }
            
            return res.status(200).json({ message: 'Usuario loggeado', user });
        } catch (error) {
            console.error(error); // Agregamos un log para ver detalles del error
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
    
    
    
}