/* COUNT NUMBER OF ITEM SELECTED*/

var count=0;
var output=document.getElementById("out");
function itemCount(){
    count+=1;
    out.innerHTML = count;
 
}

const button = document.querySelectorAll('.price');
console.log(button[24]);

let pricetag=0;

button.forEach(bt=>{
    bt.addEventListener('click', (e) => {
        pricetag = e.target.innerHTML;
        document.getElementById("pr").innerHTML=pricetag;
    })
});
