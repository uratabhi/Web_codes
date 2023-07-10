const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value==='') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
      } 
      else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Username=${nameInput.value} Email= ${emailInput.value} Phone= ${phoneInput.value}`));
        userList.appendChild(li);
         let myobj = {
            username :  nameInput.value,
            useremail : emailInput.value,
            userphone : phoneInput.value,
         };
         let myobj_serilized = JSON.stringify(myobj);
         localStorage.setItem(`${nameInput.value}`, myobj_serilized);
      }
      
}