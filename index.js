// Code your solutions in this file
const writeCards = (arr, adj) => {
    const msg = []
    for (let i=0; i < arr.length; i++){
        msg[i] = `Thank you, ${arr[i]}, for the wonderful ${adj} gift!`
    }
    return msg
}

const countDown = (num) =>{
    while(num >=0){
        console.log(num)
        num--
    }
}

//countDown(10)