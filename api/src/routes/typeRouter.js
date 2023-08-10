const { Router } = require('express');
const getType = require("../handlers/getTypes");
const URL = "https://pokeapi.co/api/v2/type"
const {Type} = require("../db");
const type = Router();


type.get("/", async (req, res) => {
     const allTypes = [];
     try {
          const apiDataBase = await Type.findAll()
          if(apiDataBase.length === 0){
            const apiData = await getType(req, res, URL);
          for (const item of apiData) {
              const {name} =  item; 
              await Type.create({name})
              allTypes.push(name);
         }  
         return res.status(200).send(allTypes)
          }
         return res.status(200).send(apiDataBase);

     } catch (error) {
        res.status(200).send({"error": error.message})
     }
})


module.exports = type;
