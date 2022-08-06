    import React from 'react';
import './Post.css'
    const Post = (props) => {
        return (
            <div className='item'>
                <img alt='avatar' src='https://cdn-icons-png.flaticon.com/512/147/147142.png'/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>


        )
    }
    export default Post
