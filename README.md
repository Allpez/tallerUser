Debe ejecutar el comando:

 - npm install express
 - npm install -- save-dev nodemon
 - npm install dotenv
 - npm install mongoose
 - npm i cors
 - npm i morgan
 - npm install joi
 - 

Taller Express

Crear un servidor de Express, descargar y configurar todo lo necesario para poder cumplir con los siguientes puntos

Crear un modelo de Usuario con mínimo las siguientes propiedades:
Nombre: String
Correo: String
Dirección: String
Teléfono: Number
Contraseña: String (Tiene que ser un hash)
En Linea: Booleano
2 Crear un modelo de Registro(Factura) con mínimo las siguientes propiedades:
     
Fecha: Date
Descripción: String
Valor: Number
Activo: Booleano
Usuario: ObjectId User
Crear un modelo de Propiedad con mínimo las siguientes propiedades:
Nombre: String
Tipo: String
Valor: Number
Usuario: ObjectId User
Crear Scripts de data para cada uno de los modelos, Usuarios mínimo 10, Registros mínimo 20 por cada usuario, Propiedad mínimo 5 por cada usuario
Crear endpoints para cada modelos usando los enrutadores y controladores, Hacer el CRUD completo y El endpoint de all debe recibir query params dependiendo del modelo.
Poner todas las validaciones necesarias usando JOI
Crear Toda la configuración de inicio usando JWT y passport.


Nota: Configurar correctamente los archivos y carpetas, seguir el orden visto en clase y poner nombres de variables y archivos coherentes, lo mismo en la ruta de consumo del endpoint.
