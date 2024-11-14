import joi from "joi-oid"; // Extensión de Joi que añade un tipo de ObjectId

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'any.required': 'El ID es requerido',
        'string.pattern.name': 'El ID debe ser un ObjectId válido'
    }),
    name: joi.string()
        .pattern(/^[a-zA-Z0-9\s]+$/)
        .min(15)
        .max(60)
        .messages({
            'string.base': 'El nombre debe ser una cadena de texto',
            'string.pattern.base': 'El nombre solo puede contener letras, números y espacios',
            'string.min': 'El nombre debe tener al menos 15 caracteres',
            'string.max': 'El nombre debe tener un máximo de 60 caracteres'
        }),

    type: joi.string()
        .valid("Real Estate", "Vehicle", "Stock", "Bond", "Cryptocurrency")
        .messages({
            'any.only': 'El tipo de propiedad debe ser uno de los siguientes: Real Estate, Vehicle, Stock, Bond, Cryptocurrency'
        }),

    value: joi.number()
        .positive()
        .precision(2)
        .messages({
            'number.base': 'El valor debe ser un número',
            'number.positive': 'El valor debe ser positivo',
            'number.precision': 'El valor puede tener hasta dos decimales'
        }),

    userId: joi.objectId()
        .messages({
            'any.required': 'El ID del usuario es obligatorio'
        })
});

export default schema;
