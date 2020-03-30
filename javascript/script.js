function ghanaName(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var dayOfMonth = document.getElementById("day").value;
    var date = new Date (`${year}-${month}-${dayOfMonth}`);
    var birthDay = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var result = document.getElementById("result");
    var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
    
    
    if (year == "" || year.length < 4 || year.length > 4){
        alert("Please enter a valid year!"); 
    }
    if (month < 1 || month > 12 ){
        alert("Please enter a valid month!");
    }
    if (dayOfMonth < 1 || dayOfMonth >31) {
        alert("Please enter a valid day!");
    }
    if (male.checked == false && female.checked == false){
        alert("Please enter your gender!");     
    }
    else if (male.checked == true){
        result.innerHTML ="Your Ghanian name is " + maleNames[birthDay] +  " since you were born on a " + days[birthDay];
    } 
    else if (female.checked == true){
        result.innerHTML = "Your Ghanian name is " + femaleNames[birthDay] +  " since you were born on a " + days[birthDay];
    } 
    else {
        alert("Error");
   }

};