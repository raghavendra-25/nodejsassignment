const xm2json = require('xml2json');
const fs = require('fs');

const xmlParser = function(path){
    fs.access(path,fs.constants.F_OK,(error)=>{
        if(error){
            console.log('Invalid path');
            return error;
        } 
        fs.readFile(path,'utf8',(error,content)=>{
            if(error) return err;
            console.log('JSON Output',xm2json.toJson(content));
        })
    })
}

xmlParser('food.xml');