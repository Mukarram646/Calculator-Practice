
// let days_names =['sun','Mon' , 'tue' , 'wed' , 'Thu' , 'fri' , 'sat' ]
// let today_date=new Date();
// let my_hours= today_date.getHours();
// let my_mins=today_date.getMinutes();
// let my_sec=today_date.getSeconds();
// let the_day=today_date.getDay();
// let today=days_names[the_day]
// console.log(my_hours,my_mins,my_sec,today);


// let obj ={
//     name:"mukarram" ,
//     age: 23,



// }
// console.log(obj.name);

// let numbers =prompt("which number you want " )
// let limit =prompt( "tell the limt " )
// for (let index = 1; index <= limit; index++) {
// console.log(numbers+ "x" + index+ "=" + index*numbers) ;}

// let obtained_marks =+prompt("enter obtained marks")
// let total_marks =+prompt("enter total marks")
// console.log(obtained_marks/total_marks*100 +"%" );


//  var bigDecimal = Math.random();
//   var improvedNum = (bigDecimal * 6) + 1;
//  var numberOfStars = Math.floor(improvedNum);

var my_display = document.getElementById("my_screen")

const Enter_no =(userNum)=>{
   
    
    var last_char=my_display.value.slice(-1)
    var my_operators=['+','-','/','*']
    var my_alphabats=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    
    
    if (my_operators.includes(last_char) && my_operators.includes(userNum)) {
        
        
        return
        
    }
    my_display.value = my_display.value + userNum    
   
}

const del =()=>{
my_display.value =my_display.value.slice(0,-1)
}

const Clear_all =()=>{
    my_display.value=""
}

function my_Cal_result() {

    try {
        
        my_display.value= eval(my_display.value)
    } catch (error) {
        my_display.value= 'wrong input'
        
    }

}
