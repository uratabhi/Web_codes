 const createPost = ()=>{
    return new Promise()
 }


 const user = {
    username : 'Abhishek',
    lastactivitytime : '17th of July'
 }

 const updateLastUserActivityTime =() =>{
    return new Promise((resolve, reject)=>{
         setTimeout(() => {
              user.lastactivitytime = new Date().getTime();
              resolve(user.lastactivitytime);
         }, 1000);
    })
 }

 function userUpdateapost(){
     Promise.all([createPost, updateLastUserActivityTime]).then(([cPresolves, aTresloves])=>{
        console.log(aTresloves);
     })
 }

 userUpdateapost();