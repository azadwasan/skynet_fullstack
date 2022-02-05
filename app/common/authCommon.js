const bcrypt        = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "A VERY SECRET KEY";

function encryptPassword(password){
    return new Promise((resolve, reject)=>{
        const SALT_ROUNDS = 10;
        if(!password){
            reject('Password was empty!');
        }
    
        bcrypt.genSalt(SALT_ROUNDS, (err, salt) =>{
            if(err){
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash);
            })
        });
    });
}

function getToken(id){
    return jwt.sign({id}, SECRET_KEY);
}

function comparePassword(candidatePassword, savedPassword){
    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatePassword, savedPassword, (err, isMatch)=>{
            if(err){
                return reject(err);
            }
            if(!isMatch){
                return resolve(false);
            }
            resolve(true);
        });
    });
}

module.exports = {encryptPassword, getToken, comparePassword};