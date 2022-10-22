
const io = require('socket.io')(8800,{
    cors :{
        origin:'http://localhost:3000'
    }
})

let activeUsers = []

io.on("connection",(socket)=>{

    // Add New User
    socket.on('new-user-add',(newUserId)=>{

        //if newuser is not added previously
        if(!activeUsers.some((user)=>user.userId === newUserId))
        {
            activeUsers.push({
                userId : newUserId,
                socketId : socket.id 
            })
        }

        console.log("connected user",activeUsers);
        io.emit('get-users', activeUsers)
    })

     //send-message 
     socket.on('send-message',(data)=>{
        const {receiverId}=data;
        const user = activeUsers.find((user)=>user.userId === receiverId) 

        console.log("sendin-message from socket " , receiverId)
        console.log("data" , data)
         if (user){
            io.to(user.socketId).emit("receive-message",data)
         }
    })

    //disconnection 
    socket.on('disconnect', ()=>{
        activeUsers = activeUsers.filter((user)=>user.socketId !== socket.id);
        console.log("user disconnected",activeUsers);
        io.emit('get-users', activeUsers)
    })

   
})