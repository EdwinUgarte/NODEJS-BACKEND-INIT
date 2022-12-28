const mongoose = require("mongoose");

const dbConnection = async() => {
    
    
    try {
        // process.env."variable de hambiente declarada en el archivo .env"
        await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
       });
       
       console.log('Base de datos online');

    } catch (error) {
        console.log(error);
    }
    

}



module.exports = {
    dbConnection
}


//? Conexion con la base de datos de MongoDB