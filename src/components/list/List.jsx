import ChatList from './chatList/ChatList'
import "./list.css"
import Userinfo from './userInfo/userInfo'
const List = () => {
    return (
        <div className='list'>
            <Userinfo/>
            <ChatList/>
        </div>
    )
}
export default List