const gradeBook  = require("../function").gradeBook;
const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('hello World')
});

app.get('/grade', function(req,res){
    let grades = req.query.grades.split(',');
    for(let i = 0; i < grades.length; i+=1){
        gradeBook.addGrade(parseInt(grades[i]));
    }
    avg = gradeBook.avgGrade();
    letter = gradeBook.letterGrade(avg);
    res.send('the average grade is'+ avg+ 'letter is'+ letter);
});

app.listen(3000);
console.log('server is ready on port 3000');