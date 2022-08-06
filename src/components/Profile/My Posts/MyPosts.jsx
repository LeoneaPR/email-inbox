import React from 'react';
import './MyPosts.css'
import Post from "./Posts/Post";
const MyPosts= (props) =>{
    let postsElements = props.posts.map(p=> <Post message = {p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

  props.dispatch({type:'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action ={type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action)
    }

    return (
        <div className='postsBlock'>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>

                </div>
                <button onClick={addPost}>add post</button>
                <div>
                    <button>remove</button>
                </div>
                <div className='gots'>
                    {postsElements}
                </div>
            </div>
        </div>

    )


}
export default MyPosts