const {authorizeUser} = require('../common/authCommon')

module.exports = (req, res, next)=>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).send({error: 'User must be logged in.'});
    }

    authorizeUser(authorization, (err, payload)=>{
        if(err){
            return res.status(401).send({error: 'User must be logged in.'});
        }
        const {id} = payload;
        if(id!==parseInt(req.params.id)){
            return res.status(401).send({error: 'Mismatched user token.'});
        }
        next();
    });
};