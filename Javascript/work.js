let input=[0,1,2,3,4,5,6,7,8,9,10]
let target=20

for(let i=0; i<=10; i++){
    for (let j=0; j<=10; j++){
        let sum=input[i]+input[j]
        if(sum == target){
            console.log("the input indexes are", "(", i, ",", j, ")","Because", i, "+", j, "=", target)
            return
        }
        else if(i==10 && j==10){
            console.log("Target summasion between 2 elements doesn't exist in the array")
        }
    }
}