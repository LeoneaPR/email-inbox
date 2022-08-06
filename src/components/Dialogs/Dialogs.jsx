import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        alert (text);
    }


    let dialogsElements = props.state.dialogs
        .map(d => <DialogsItems name={d.name} avatar={d.avatar} id={d.id}/>);

    let messageElements= props.state.messages.map(m => <Message message= {m.message}/>)

    return(
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messageElements}
                <div className="textblock">
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>add post</button>
                <div>
                    <button>remove</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs