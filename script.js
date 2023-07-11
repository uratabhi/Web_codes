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
     phone
   };
   localStorage.setItem(obj.email, JSON.stringify(obj));
   showNewUserOnScreen(obj);
}

function showNewUserOnScreen(user){
      const parentNode = document.getElementById('users');
      const childNode = `<li id=${user.email}>userName=${user.name} <br> userEmail=${user.email} <br> userPhone=${user.phone} 
      <button class = "delete" onclick=deleteUser('${user.email}')>Delete </button> 
      <button class = "edit"  onclick=editUser('${user.name}','${user.email}','${user.phone}')>Edit </button>
      </li>`
      parentNode.innerHTML = parentNode.innerHTML+childNode;
    }

function deleteUser(emailId){
     localStorage.removeItem(emailId);
     removeUserFromScreen(emailId);
}

function editUser(userName, emailId, phoneNumber){
        document.getElementById('name').value= userName;
        document.getElementById('email').value= emailId;
        document.getElementById('phone').value = phoneNumber;
        deleteUser(emailId);
}

function removeUserFromScreen(emailId){
   const parentNode = document.getElementById('users');
   const childNode = document.getElementById(emailId);
   if(childNode){
    parentNode.removeChild(childNode);
   }
}