


// // Code your solutions in this file
function writeCards(names , eventName){
  let newArr = []
  for(let i=0; i<names.length;i++){
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArr;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(num){
  
  while(num>=0){
    console.log(num);
    num --;
  }
}

countDown(10);