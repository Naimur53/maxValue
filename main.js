var ami = 223, tomi = 400002, toi = 323,max=0;
max=Math.max(ami, tomi, toi);
/**
if(ami>tomi && ami > toi){
    max=ami;
} 
else if (tomi > ami && tomi > toi){
    max=tomi;
}
else{
    max=toi;
}
**/
console.log("max value in variable",max);


//arry max value
var value = [3,533,34,2,524654564];
var maxArry= value[0];
for(var i=0;i<value.length;i++){
    if(value[i]>maxArry){
        maxArry=value[i];
    }
}
console.log("max value in array",maxArry);
 


//sum of array

var arrayOfSum = [2,453,234,243,],resultOfArray=0;
for(var i=0;i<arrayOfSum.length;i++){
   resultOfArray= resultOfArray + arrayOfSum[i]; 
}
console.log("result of array",resultOfArray);

// removed duplicate item form array 

var dup = [3,52,23,234,2];
var enter = [3];
for(var i=0;i<dup.length;i++)
{
     
    if(enter.indexOf(dup[i])== -1)
    {
        enter.push(dup[i]);
    }

}
 console.log(enter);
 
 
 //word counter 

 var word = "f dffo n rfj aliej   saj s";
 var count = 0;
 for(var i = 0; i<word.length;i++)
 {
     if(word[i]==" " && word[i-1]!=" "){
         count++;
     }
 }
 count++;
 console.log(count);
 
 //reverse string
 function rev(str){
     var reverse ="";
     for(var i=0; i<str.length;i++)
     {
         reverse = str[i] + reverse;
     }
      return reverse;
 } 
 var re =rev("idas naimur");
 console.log(re);
 // ANIMAL COUNTER
 var animal = 0;
 var depth = 12;
 if(depth<=10){
     animal = depth*10;
 }
 else if(depth <=20)
 {
     var first = 10*10;
     var second = depth - 10;
     var remaning = second * 20;
     animal = first + remaning; 
 }
 console.log("animal",animal)