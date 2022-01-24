import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { io } from "socket.io-client";
import { useEffect, useState } from 'react';


export default function Home() {
  const [socket, setSocket] = useState(null);
  const [msg, setMsg] = useState("");
  const [myId, setMyId] = useState("");
  // const [chatMsg, setChatMsg] = useState("");
  const [chatList, setChatList] = useState([]);

  const [temp, setTemp] = useState({});

  /*
  {
    senderId, 
    msg
  }
  */

  useEffect(() => {
    //token!!! 
    const _socket = io("http://localhost:3000/", {query: 'token!!'});

    _socket.on("connect", () => {
      console.log('----')
      console.log(_socket.id)
      setMyId(_socket.id);
    } )

    _socket.on('chat message', (chatObj) => {
      console.log('chat received.')
      console.log(chatObj.msg);
      console.log(chatObj.senderId);

      setTemp({
        msg: chatObj.msg,
        senderId: chatObj.senderId,
        uuid: Math.random()
      })

      setMsg("");
    });

    setSocket(_socket);
  }, [])

  useEffect(() => {
    const cp = [...chatList]
    cp.push(temp)
    setChatList(cp);
  }, [temp])

  const emitData = () => {
    // socket.emit("hello", "world");
    socket.emit('chat message', msg);
  }
  
  return (
    <div>
      hi this is sungpah.!!!
      {myId}
      <textarea 
      style={{width:200}}
      value={msg}
      onChange={e => setMsg(e.target.value)}></textarea>

      <div onClick={e => emitData()}>emit data</div>

      <div>
        what your friend typed..<br/>
        {chatList.map((chatObj,index) => {
          return <div key={index}>
            
            {chatObj.senderId === myId ?
            <>me: {chatObj.msg}
            </>
            :
            <>
            {chatObj.senderId}: {chatObj.msg}</>
            }
          <br/>
          </div>
        })}
      </div>
    </div>
  )
}
