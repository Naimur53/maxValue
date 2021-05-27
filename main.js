var ami = 223, tomi = 400002, toi = 323,max=0;
if(ami>tomi && ami > toi){
    max=ami;
} 
else if (tomi > ami && tomi > toi){
    max=tomi;
}
else{
    max=toi;
}
console.log(max);