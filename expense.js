var form = document.querySelector('#my-form');

form.addEventListener('submit', saveToLocalStorage);


function saveToLocalStorage(e){
    e.preventDefault();
    const amount = e.target.amount.value;
    const description = e.target.description.value;
    const category = document.getElementById('choice');
    console.log(category);
    const obj = {
        amount, 
        description,
    };
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showNewUserOnScreen(obj);
}


function showNewUserOnScreen(user){
    const parentNode = document.getElementById('users');
    const childNode = `<li id=${user.description}>${user.amount}- ${user.description}
    <button class = "delete" onclick=deleteUser('${user.description}')>Delete </button> 
    <button class = "edit"  onclick=editUser('${user.amount}','${user.description}')>Edit </button>
    </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childNode;
  }
  function deleteUser(udescription){
    localStorage.removeItem(udescription);
    removeUserFromScreen(udescription);
}

function editUser(uamount, udescription){
    document.getElementById('amount').value= uamount;
    document.getElementById('description').value= udescription;
    deleteUser(udescription);
}

function removeUserFromScreen(udescription){
const parentNode = document.getElementById('users');
const childNode = document.getElementById(udescription);
if(childNode){
parentNode.removeChild(childNode);
}
}