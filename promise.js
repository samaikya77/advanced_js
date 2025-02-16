/*var mypromise=new Promise((resolve,reject)=>{

  var isright=true
  if(isright==true){
    resolve('she is right')
  }else{
    reject('she is wrong')
  }
})
mypromise
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})
.finally(()=>{
    console.log('code executed')
})*/


/*try{
    var a=jskjsd
    console.log(a);
}
catch(error){
    console.log( 'a wiil show error');
}*/

/*var mypromise=new Promise((resolve,reject)=>{
  var isright=true;
  if(isright==true){
      console.log('yes, she is right')
  }else{
      console.log('she is wrong')
  }
})
.then((result)=>{
  console.log(result);
})
.catch((result)=>{
  console.log(result);
})
.finally(()=>{
  console.log('code executed');
})*/

fetch('https://fakestoreapi.com/products')
.then((response)=>{
  if(!response.ok){
    console.log('invalid url')
  }
    return response.json()
  
})
.then((result)=>{
  console.log(result)
})
.catch(()=>{
  console.log('error in the url')
})

async function  fetchdata(){
  try{
    var response=await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
      console.log('invalid url')
    }
    var data=await response.json()
    console.log(data)
  }catch{
    console.log('no data ')
  }
}
fetchdata()


