var dado = {
    tamanho: 6,
    peso: 50,
    roladas: 0,
    rolar: function(){
        var result;
        result = Math.ceil(this.tamanho * Math.random());
        this.roladas++;
        return result; 
   
    },

};

var bola = {
    tamanho: 7,
    peso: 55,
    roladas: 3,
    rolar: function(){
        var result;
        result = Math.ceil(this.tamanho * Math.random());
        this.roladas++;
        return result; 
   
    },

};



var gradeBook = {
    _grades: [],
    
    addGrade: function(newGrade){
        if(newGrade<=100){
        this._grades.push(newGrade);
        }
        else{
            console.log("add a number smaller than 100");
        }
   },

   getCountOfGrades: function getCountOfGrades(){
       return this._grades.length;
   }, 

   clearGrades: function clearGrades(){
        this._grades = [];
   },

   avgGrade: function avgGrade(){
       let avg;
       let total = 0;
       for(let i=0;i<this._grades.length;i++){
           total+=this._grades[i];
       }
       avg = total/this._grades.length;
       return avg;
    },

    letterGrade: function letterGrade(){
        let letter;
        const avgGrade = this.avgGrade;
        if( avgGrade>=90 && avgGrade<=100){
            letter = "A"
            ;}
        if( avgGrade>=70 && avgGrade<=90){
            letter = "B"
            ;}
        if( avgGrade>=40 && avgGrade<=50){
            letter = "C"
            ;}
        if( avgGrade>=20 && avgGrade<=40){
            letter = "D"
            ;}
        if( avgGrade>=0 && avgGrade<=20){
            letter = "E";
        }

        
        return letter;
    }
   
    

};

module.exports = {
    dado: dado,
    bola: bola,
    gradeBook: gradeBook
};