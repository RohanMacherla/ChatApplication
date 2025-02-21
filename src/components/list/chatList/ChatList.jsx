import "./chatList.css"
import { useState } from "react"
const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="search" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
                onClick={()=>setAddMode((prev)=>!prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" className="avatar" />
                <div className="texts">
                    <span>Rohit</span>
                    <p>Hi, how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" className="avatar" />
                <div className="texts">
                    <span>Varun</span>
                    <p>Hi, how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" className="avatar" />
                <div className="texts">
                    <span>Sanjay</span>
                    <p>Hi, how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" className="avatar" />
                <div className="texts">
                    <span>Nishanth</span>
                    <p>Hi, how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" className="avatar" />
                <div className="texts">
                    <span>Raghuram</span>
                    <p>Hi, how are you?</p>
                </div>
            </div>
        </div>
    )
}
export default ChatList