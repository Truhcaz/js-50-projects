const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    { 
        text : "New friend invitation",
        type : "info"
    },
    { 
        text : "ERROR 404 : REFRESH PLEASE",
        type : "error"
    },
    { 
        text : "You changed your password successfuly",
        type : "success"
    },
    { 
        text : "Alice liked your photo",
        type : "info"
    }

]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(){
    let message = getRandomMessage();
    let text = message.text;
    let type = message.type;

    let notif = document.createElement("div");
    notif.innerText = text;
    notif.classList.add('toast');
    notif.classList.add(type);

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
