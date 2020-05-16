function writeCards(cards,gift) {
  const newArr = [];
  for (let i = 0; i < cards.length; i++) {
    newArr.push(`Thank you, ${cards[i]}, for the wonderful ${gift} gift!`);
  }

  return newArr;
}

writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');


function countDown(num) {
while(num >= 0){
  console.log(num);
  num--;
}

}


countDown(10);










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