const { body, query, param } = require("express-validator");

module.exports = class ProductValidator {
    validateProductData = () => {
        return [
            body('name').notEmpty().isString().withMessage('Envia el nombre'),
            body('brand').notEmpty().isEmail().withMessage('Envia la marca'),
            body('description').notEmpty().isString().withMessage('Envia la descripcion'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`No mandar nada en la url`);
                }
                return true;
            })
        ];
    };

    validateProductEmpty = () => {
        return [
            body().custom((value, { req }) => {
                if (Object.keys(req.body).length > 0) {
                    throw new Error('No mandar nada en el cuerpo');
                }
                return true;
            }),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`No mandar nada en la url`);
                }
                return true;
            })
        ];
    }
}