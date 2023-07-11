var form = document.getElementById('my-form');
form.addEventListener('submit', saveToLocalStorage);

function saveToLocalStorage(e){
   e.preventDefault();
   const name = e.target.userName.value;
   const email = e.target.emailId.value;
   const phone = e.target.phoneNumber.value;
   const obj = {
     name,
     email,
     phone,
   };
   localStorage.setItem(obj.email, JSON.stringify(obj));
   showNewUserOnScreen(obj);
}

function showNewUserOnScreen(user){
      const parentNode = document.getElementById('users');
      const childNode = `<li id=${user.email}>userName=${user.name} <br> userEmail=${user.email} <br> userPhone=${user.phone} 
      <button class = "delete" onclick=deleteUser('${user.email}')>Delete </button> </li>`
      parentNode.innerHTML = parentNode.innerHTML+childNode;
    }

function deleteUser(emailId){
     localStorage.removeItem(emailId);
     removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
   const parentNode = document.getElementById('users');
   const childNode = document.getElementById(emailId);
   if(childNode){
    parentNode.removeChild(childNode);
   }
}