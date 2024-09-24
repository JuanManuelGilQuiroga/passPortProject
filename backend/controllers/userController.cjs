const {GoogleUser, FacebookUser, DiscordUser, user, insertUser, findOneUserByNameEmailOrOauthId, findOneUserByEmail, findOneUserByNameAndPassword} = require('../models/User.cjs');

module.exports = class UserController {
    
    async crearUsuario(req, res) {
        try {
            const userExist = await findOneUserByNameEmailOrOauthId(req.body);
            if (userExist) {
                console.log('Ya existe un usuario con ese email o nick');
                return res.status(409).json({ message: 'Usuario ya registrado' });
            }
            const newUser = await insertUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
    
    

    async logUsuario(req, res) {
        try {
            const { email, password } = req.body;
            const user = await findOneUserByEmail(email); // Busca al usuario por email
            
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