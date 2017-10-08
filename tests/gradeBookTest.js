let book = require('../function.js').gradeBook

module.exports["setUp"] = function(callback){
    book.clearGrades();
    callback();
}

module.exports["adding new grades"] = function(test){
    book.addGrade(90);
    let count = book.getCountOfGrades();
    test.equal(count,1);
    test.done();
}

module.exports["can average grades"] = function(test){
    book.addGrade(100);
    book.addGrade(50);
    let avg = book.avgGrade();
    test.equal(avg,75);
    test.done();
}

module.exports["can give As"] = function(test){
    let a = "B"
    book.addGrade(90);
    book.addGrade(70);
    let avg = book.avgGrade();
    test.equal(book.letterGrade(), a);
    test.done();
}

