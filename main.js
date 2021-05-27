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
console.log(max);


//arry max value
var value = [3,533,34,2,524654564];
var maxArry= value[0];
for(var i=0;i<value.length;i++){
    if(value[i]>maxArry){
        maxArry=value[i];
    }
}
console.log(maxArry);