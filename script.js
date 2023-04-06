const prompt=require("prompt-sync")({sigint:true})
let user=prompt("Enter rock,paper or scissor :")
let cupi=Math.floor(Math.random() * 3)
let cpu=["rock","paper","scissor"][cupi]
console.log("--------------------------\n\n")
if(cpu===user){
    console.log("Match is tie")
}
else if(cpu=="rock" && user=="paper"){
    console.log("You won")
}
else if (cpu=="paper" && user=="rock") {
    console.log("Winner is cpu")
}
else if (cpu=="scissor" && user=="rock") {
    console.log("You won")
}
else if (cpu=="rock" && user=="scissor") {
    console.log("Winner is cpu")
}
else if (cpu=="paper" && user=="scissor") {
    console.log("You won")
}
else if (cpu=="scissor" && user=="paper") {
    console.log("Winner is cpu")
}
else{
    console.log("Wrong input Check you spelling")
}
console.log("User :",user)
console.log("Cpu :",cpu)