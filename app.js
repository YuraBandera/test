
const socket = io();

function send(){
  const msg=document.getElementById('msg').value;
  socket.emit('message',msg);
}

socket.on('message',msg=>{
  const div=document.createElement('div');
  div.innerText=msg;
  document.getElementById('chat').appendChild(div);
});

async function register(){
 await fetch('/register',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    email:rEmail.value,
    password:rPass.value
  })
 });
 alert("OK");
}

async function login(){
 const res=await fetch('/login',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    email:lEmail.value,
    password:lPass.value
  })
 });
 const data=await res.json();
 localStorage.setItem("token",data.token);
 alert("Logged");
}
