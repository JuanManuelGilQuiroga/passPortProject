const { insertUser, findOneUserByNameEmailOrOauthId, findOneUserByNameAndPassword } = require('../models/userModel.cjs')

module.exports = class UserRepository {
    async getOneUserByNameEmailOrOauthId(arg) {
        try {
            return await findOneUserByNameEmailOrOauthId(arg);
        } catch (error) {
            throw new Error(JSON.stringify({status: 400, message: 'Usuario no encontrado.'}));
        }
    }

    async save(arg) {
        try {
            console.log("hola")
            return await insertUser(arg);
        } catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Usuario no guardado.'}));
        }
    }

    async logIn(arg) {
        try {
            return await findOneUserByNameAndPassword(arg);
        } catch (error) {
            throw new Error(JSON.stringify({status: 400, message: 'Credenciales erroneas.'}));
        }
    }
}