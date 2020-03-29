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
