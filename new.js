let image= [
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5"),
document.getElementById("6"),
document.getElementById("7"),
document.getElementById("8"),
document.getElementById("9")
]
let array =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
function randomcolor(){
    let str=""
    for(i=0;i<=5;i++){
        
        let lol=Math.floor(Math.random() * 16);
        str= str+array[lol]
    
    }
    
    document.querySelector("body").style.backgroundColor = "#"+str;
}


document.getElementById("start").addEventListener("click",function(){
    setInterval(lol,1000)
    document.getElementById("diff").style.display="block"

})

function lol(){
    for(j=0;j<9;j++){
        image[j].src="hole.png"
    }
    let i = Math.floor(Math.random() * 9) 
    image[i].src="mole.png"
    
    randomcolor()


}
let winscore=10
let score=0
document.getElementById("winlol").innerHTML="score required to win:-"+winscore

for(i=0;i<9;i++){
    image[i].addEventListener("click",function(){
        if(this.getAttribute('src')=="mole.png"){
            score++
            document.getElementById('score').innerHTML="score:-"+score
            if(score>=winscore){
                document.getElementById('win-screen').style.display="block"
            }
        }
    })
   
} 


document.getElementById('nextBtn').addEventListener('click',()=>{
    score=0
    document.getElementById("score").innerHTML="score:-"+score
    winscore+=5
    document.getElementById('win-screen').style.display="none"
    document.getElementById("winlol").innerHTML="score required to win:-"+winscore

})

