const express = require('express')
const axios= require('axios')//SERVE PER LE RICHIESTE HTTP
const router= express.Router()
require('dotenv').config()


router.get('/articoli-pallavolo', async (req, res)=>{
    try{
        const response= await axios.get('https://newsapi.org/v2/everything', {
            params:{
                q:' Pallavolo',
                language:'it',
                apiKey: process.env.NEWS_API_KEY,
            },
        })
        res.json(response.data);
    } catch (error){
        console.error('ERRORE', error.message)
        res.status(500).json({error: 'ERRORE'})
    }
})

module.exports= router