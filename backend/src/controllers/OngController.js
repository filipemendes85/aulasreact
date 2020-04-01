const crypto = require('crypto');
const db = require('../database/connection');


module.exports = {
    async index(req, res) {
        const ongs = await db('ongs').select('*');
       
        res.json(ongs);
    },

    async create( req, res){
        const {name, email, whatsapp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
      
        await db('ongs').insert({
          id, name, email, whatsapp, city, uf
        })
      
        return res.json({id});
      
    }
}