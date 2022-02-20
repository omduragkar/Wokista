const mongoose = require('mongoose');


const  chatModel = mongoose.Schema({
    chatName:{
        type: String,
        required:true,
        trim: true
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    groupChat:{
        type: Boolean,
        default: false
    },
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},{
    timestamps: true,
})

const Chat = mongoose.model("Chats", chatModel);
module.exports = Chat;