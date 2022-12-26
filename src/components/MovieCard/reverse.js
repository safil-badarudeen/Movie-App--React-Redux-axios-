// reverse a String
// const item = "safil"



// function reverse(data){
 
//  const len= data.length-1;
//  const backwards=[]
 
//     for(let index =len; index =0; i-- ){
//        backwards.push(data[index])
//     }
//     console.log(backwards)
//     return backwards.join('')
// }

function reverse(str){
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
      returnbackwards.join('');
     
  }
console.log(data)
reverse('safil')