import './Profile.module.css'
import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My Posts/MyPosts";


const Profile = (props) => {
    console.log(">>>>>>>>>>>>>>>>>>>>", props)
    return(

        <div className='profile'>
            <Profileinfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.dispatch.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}


export default Profile