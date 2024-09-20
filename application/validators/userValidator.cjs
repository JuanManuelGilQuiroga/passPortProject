const { body, query, param } = require("express-validator");

module.exports = class UserValidator {
    validateUserData = () => {
        return [
            body('nick').notEmpty().isString().withMessage('Envia el NickName'),
            body('email').notEmpty().isEmail().withMessage('Envia el email'),
            body('password').notEmpty().isString().withMessage('Envia la contraseña'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`);
                }
                return true;
            })
        ];
    };

    validateUserLogin = () => {
        return [
            body('nick').notEmpty().isString().withMessage('Envia el NickName'),
            body('password').notEmpty().isString().withMessage('Envia la contraseña'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`);
                }
                return true;
            })
        ];
    };
}