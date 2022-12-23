
let {createCipheriv} = require('crypto')
let key = '<Buffer 5a 01 94 8f 74 9a 7c 32 7a b0 0d d3 34 68 c2 d4 a9 d0 49 4d 70 31 49 69 a6 24 55 9c 1d 0b b8 f0>'
let iv = '<Buffer 27 a4 d6 b5 a2 9f e9 a3 86 dc 98 5a c7 31 59 cd>'
let cypher_decypher = createCipheriv('aes-256-gcm',key,iv)
//getting user's name 
let button = document.getElementById("namebtn")
let userNameIp = document.getElementById("username")

let name='';

button.addEventListener("click",()=>{
    name = userNameIp.value
    document.getElementById("firstscreen").classList="hidden"
    socket.emit('new-user-joined', name);
})

//main chat
const socket = io('http://localhost:8000')
const audio = new Audio("/dist/assets/ting.mp3")

//getting sendmsg elements from dom
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageinp')
const messageContainer = document.querySelector("#messagesContainer")

//main logic
const append = (message, classList)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    
    messageElement.classList.add(classList);
    messageContainer.append(messageElement);
    if(classList.includes('float-left')){ 
        audio.play();
    }
}

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'sm:[w-30%] w[50%] bg-slate-800 bg-opacity-60 text-gray-400 border-solid border-2 shadow-md shadow-black rounded-xl p-2 mx-3 my-2 clear-both text-center')
})

socket.on('receive', data =>{
    data=decypher.update(data,'hex','utf-8')+decypher.final('utf-8')
    append(`${data.name}: ${data.message}`, 'sm:w-[30%] text-white w-[50%] bg-slate-700 bg-opacity-60  border-solid border-2 shadow-md shadow-black rounded-xl p-3 mx-3 my-2 float-left  clear-both')
})

socket.on('left', name =>{
    append(`${name} left the chat`, 'sm:[w-30%] w[50%] bg-slate-800 bg-opacity-60 text-gray-400 border-solid border-2 shadow-md shadow-black rounded-xl p-2 mx-3 my-2 clear-both text-center')
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = messageInput.value;
    message =cypher.update(message,'utf-8','hex')+cypher.final('hex')

    append(`You: ${message}`, 'sm:w-[30%] text-white w-[50%] bg-green-700 bg-opacity-60  border-solid border-2 shadow-md shadow-black rounded-xl p-3 mx-3 my-2 float-right clear-both');
    socket.emit('send', message);
    messageInput.value = ''
})

