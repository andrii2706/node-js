// Посортувати юзерів по папках.
//     У вас є дві папки. 1800 та 2000. В кожній з цих папок є файлики аля Karina.txt в якому міститься {"gender": "female"}
// Oleg.txt в якому міститься {"gender": "male"}
// Вам потрібно перемістити всіх дівчат на 1800 а хлопців на 2000.
///////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');

const femailPath = path.join(__dirname, 'Current_location', '2000', 'karina.txt' );
const mailPath = path.join(__dirname, 'Current_location', '1800', 'andrii.txt');

fs.mkdir(femailPath,{recursive: true} , err => {
if (err){
    console.log(err);
}
})
fs.writeFile(femailPath, '{(name):Karina, (gender):femail}', err => {
    console.log(err);
})

fs.mkdir(mailPath,{recursive: true}, err => {
    if (err){
        console.log(err);
    }
})

fs.writeFile(mailPath, '{(name): Andrii , (gender): mail}', err => {
    console.log(err);
})

// fs.readdir(mailPath,(err, files) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     files.forEach(file =>{
//         const filePath = path.join(mailPath, file)
//         fs.stat(filePath, (err1, stats) => {
//             if (err1){
//                 console.log(err1);
//                 return
//             }if (stats.isFile()){
//                 fs.readFile(filePath, (err2, data) => {
//                     if (err2){
//                         console.log(err2);
//                         return
//                     }
//                 })
//             }
//             let fileData = JSON.parse(data)
//             if (fileData.gender === 'mail'){
//                 fs.rename(filePath, err=>{
//                     if (err){
//                         console.log(err);
//                         return
//                     }
//                     console.log('done');
//                 })
//             }
//         })
//     })
//
// });

// fs.readdir(femailPath, (err, files) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     files.forEach(file =>{
//         const filePath = path.join(femailPath, file)
//         fs.stat(filePath, (err1, stats) => {
//             if (err1){
//                 console.log(err1);
//                 return
//             }if (stats.isFile()){
//                 fs.readdir(filePath, (err2, files1) => {
//                     if(err2){
//                         console.log(err2);
//                         return
//                     }
//                 })
//             }
//             const fileData = JSON.parse(data)
//             if (fileData.gender === 'femail'){
//                 fs.rename(filePath, err=>{
//                     if (err){
//                         console.log(err);
//                         return
//                     }
//                     console.log('Done-2');
//                 })
//             }
//         })
//     })
// })
