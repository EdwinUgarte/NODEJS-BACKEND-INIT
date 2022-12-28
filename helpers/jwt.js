const jwt = require('jsonwebtoken')


const generarJWT= ( uid, name) => {
    
    const payload = {uid, name};

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
    
            if(err){
                console.log(err);
                reject(err)
            }else{
                resolve(token)
            }
    
    
        })

    })

}

module.exports = {
    generarJWT
}



//* Esta funcion nos ayuda a generar los tokens, recibe los datos con los cuales querramos crear el token
//* (id, name, email... etc)