console.log('person1 : shows a ticket');
console.log('person2 : shows a ticket');









const promiseWifeBringingTicks = new Promise((reslove, reject)=>{
    setTimeout(() => {
        reslove('ticket');
    }, 3000);
})
const getPopcorn = promiseWifeBringingTicks.then((t)=>{
   //console.log(`person3 : shows ${t}`);
   console.log('wife : here is the tickets');
   console.log('husband : we should go in');
   console.log('wife : no i am hungry');
   return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
})



const getButter = getPopcorn.then((t)=>{
    //console.log(`person3 : shows ${t}`);
    console.log('husband : i got some popcorn');
    console.log('husband : we should go in');
    console.log('wife : I need butter on my popcorn');
    return new Promise((resolve, reject)=> resolve(`${t} butter`));
 })

const getColdDrinks = getButter.then((t)=>{
    console.log('husband : i got added butter on popcorn');
    console.log('husband : we should go in ');
    console.log('wife : I need some Cold Drinks with Popconr');
    return new Promise ((resolve, reject)=> resolve(`${t} Coke`));
})
getColdDrinks.then((t)=>console.log(t));




// const preMovie = async()=> {
//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//       });
//       const getPopcorn =  new Promise((resolve, reject) => {
//             return resolve(`popcorn`);
//       });
      
//       const addButter =  new Promise((resolve, reject) => {
//              return resolve(`butter`);
//       });

//       const getColdDrinks = new Promise ((resolve, reject)=>{
//               return resolve(`Cold Drinks`);
//       })
    
//        let ticket = await promiseWifeBringingTicks;
//        let [popcorn, butter, coke] = await Promise.all([getPopcorn, addButter, getColdDrinks])

//        console.log(`${popcorn}, ${butter}, ${coke}`);
    
//     //   console.log('wife : here is the tickets');
//     //   console.log('husband : we should go in');
//     //   console.log('wife : no i am hungry');
      
//     //   let popcorn = await getPopcorn;
//     //   console.log('husband : i got some popcorn');
//     //   console.log('husband : we should go in');
//     //   console.log('wife : I need butter on my popcorn');
      
//     //   let butter = await addButter;
//     //   console.log(`I got some ${butter} on popcorn`);
       
//     //   console.log(`Husband:Anything else darling`);
//     //    console.log('wife : I need some cold drinks');

//     //    let coldrinks = await getColdDrinks;
//     //     console.log('husband : here is your ColdDrink Darling');
//     //     console.log('Husband : Anything else you want');
//     //     console.log(`Wife: lets go we are going to miss the preivew`);
//     //     console.log(`Husband: thanks for the reminder *grin*`);
      
//       return ticket;
// }

// preMovie().then((m)=> console.log(`Person3 : shows a ${m}`));

console.log('person4 : shows a ticket');
console.log('person5 : shows a ticket');