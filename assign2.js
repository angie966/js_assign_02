let ang=[]

 
 aRRayAdd(ang)
 
function aRRayAdd(ang){
ang.push(1,2,3)
console.log("Original values in array",ang)
for(let i=0;i<ang.length;i++){
    ang[i]=ang[i]+2
}
 console.log("values after Adding",ang)
}