import joi from "joi-oid"; //Extension de joi que añade un tipo de objectId

const schema = joi.object({     // Creamos el schema que vamos a validar, es un objeto de joi.
    _id: joi.objectId().required().messages({
        'any.required': 'El ID es requerido',
        'string.pattern.name': 'El ID debe ser un ObjectId válido'
    }),
    name: joi.string().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'El nombre no puede usar solo números',
        'string.pattern.base': 'El nombre solo puede contener letras, números y espacios',
        'string.min': 'El nombre debe tener al menos 3 caracteres',
        'string.max': 'El nombre debe tener un máximo de 22 caracteres'
    }), 
    email: joi.string().email({ tlds: { allow: false } }).messages({
        'string.email': 'Debe ser un correo electrónico válido'
    }),    
    address: joi.string().min(5).max(40).pattern(/^[a-zA-Z0-9\s,#-]+$/).messages({
        'string.min': 'La dirección debe tener al menos 5 caracteres',
        'string.max': 'La dirección debe tener un máximo de 40 caracteres',
        'string.pattern.base': 'La dirección solo puede contener letras, números y algunos caracteres especiales (#, -, ,)'
    }),    
    phone: joi.string().pattern(/^\d{10}$/).messages({
        'string.pattern.base': 'El teléfono debe tener exactamente 10 dígitos'
    }),
    
    password: joi.string().required().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.pattern.base': 'La contraseña debe incluir al menos una letra, un número y un carácter especial'
    }),    
    online: joi.boolean()
})

export default schema