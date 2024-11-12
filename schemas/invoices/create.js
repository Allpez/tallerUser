import joi from "joi-oid"; // Extensión de Joi que añade un tipo de ObjectId

const schema = joi.object({
    date: joi.date().required()
        .max('now')
        .messages({
            'date.max': 'La fecha no puede ser futura',
            'date.base': 'La fecha debe ser válida'
        }),

    description: joi.string()
        .required()
        .pattern(/^[a-zA-Z0-9\s,#-]+$/)
        .min(6)
        .max(50)
        .messages({
            'string.min': 'La descripción debe tener al menos 6 caracteres',
            'string.max': 'La descripción debe tener un máximo de 50 caracteres',
            'string.pattern.base': 'La descripción solo puede contener letras, números y algunos caracteres especiales (#, -, ,)'
        }),

    value: joi.number()
        .required()
        .positive()
        .precision(2)
        .messages({
            'number.base': 'El valor debe ser un número',
            'number.positive': 'El valor debe ser positivo',
            'number.precision': 'El valor puede tener hasta dos decimales'
        }),

    asset: joi.boolean()
        .required()
        .messages({
            'boolean.base': 'El valor de asset debe ser true o false'
        }),

    userId: joi.objectId()
        .required()
        .messages({
            'any.required': 'El ID del usuario es obligatorio',
            'string.pattern.name': 'El ID del usuario debe ser un ObjectId válido'
        })
});

export default schema;
