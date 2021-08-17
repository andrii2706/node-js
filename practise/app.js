const fs = require('fs');
const path = require('path');

const manOlder20 = path.join(__dirname,'manOlder20' );
const wemanOlder20 = path.join(__dirname,'wemanOlder20');
const manUnder20 = path.join(__dirname,'manUnder20');
const wemanUnder20 = path.join(__dirname,'wemanUnder20')

const users = [
    {name: "Olya", gender: "female", age: 21},
    {name: "Valya", gender: "female", age: 22},
    {name: "Natasha", gender: "female", age: 23},
    {name: "Lena", gender: "female", age: 14},
    {name: "Ulya", gender: "female", age: 15},
    {name: "Vasya", gender: "male", age: 21},
    {name: "Petya", gender: "male", age: 22},
    {name: "Sasha", gender: "male", age: 23},
    {name: "Seryu", gender: "male", age: 14},
    {name: "Vitalik", gender: "male", age: 15}
]

fs.mkdir(manOlder20,{recursive: true}, err => {
    if (err){
        console.log(err);
    }
    fs.mkdir(wemanOlder20,{recursive: true}, err => {
        if (err){
            console.log(err);
        }
        fs.mkdir(manUnder20,{recursive:true},err1 => {
            if (err1){
                console.log(err1);
            }
            fs.mkdir(wemanUnder20,{recursive:true}, err2 => {
                console.log(err2);
            for (let value of users){
                if (value.gender === 'male'){
                    if (value.age > 20){
                        fs.writeFile(path.join(manOlder20, `${value.name}.json`),JSON.stringify(value), err3 => {
                            if (err3){
                                console.log(err3);
                            }
                        })
                    }else {
                        fs.writeFile(path.join(manUnder20,`${value.name}.json`),JSON.stringify(value),err4 =>{
                         if (err4){
                             console.log(err4);
                         }   
                        })
                    }
                } else {
                    if (value.age >20){
                        fs.writeFile(path.join(wemanOlder20, `${value.name}.json`),JSON.stringify(value),err5 =>{
                         if (err5){
                             console.log(err5);
                         }   
                        })
                    }else {
                        fs.writeFile(path.join(wemanUnder20,`${value.name}.json`),JSON.stringify(value),err6 =>{
                            if (err6){
                                console.log(err6);
                            }
                        })
                    }
                }
            }
            })
        })
    })
})

