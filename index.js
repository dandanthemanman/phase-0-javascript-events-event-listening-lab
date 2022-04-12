function addingEventListener() {
const input = document.getElementById('input'); 
console.log(input);
input.addEventListener('click', clickAlert);
function clickAlert(){
    alert("I was clicked!")
}
}

addingEventListener();