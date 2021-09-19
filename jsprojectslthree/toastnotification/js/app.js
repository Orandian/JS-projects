// UI
const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five"
]

// button.addEventListener('click',()=>createnotifications());
// button.addEventListener('click',()=>createnotifications("Can't access!"));
button.addEventListener('click',()=>createnotifications("Can't access!","danger"));

function createnotifications(message,type){
    // const notify = document.createElement("div");
    // notify.classList.add("toast");
    // notify.innerText = getrandommessage();
    // // console.log(notify);
    // toasts.appendChild(notify);

    // setTimeout(() => {
    //     notify.remove();
    // }, 3000);

    // const notify = document.createElement("div");
    // notify.classList.add("toast");
    // notify.innerText = message ? message : getrandommessage();

    // toasts.appendChild(notify);

    // setTimeout(() => {
    //     notify.remove();
    // }, 3000);

    const notify = document.createElement("div");
    notify.classList.add("toast");
    notify.classList.add(type ? type : "info");
    notify.innerText = message ? message : getrandommessage();

    toasts.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}
// console.log(getrandommessage());