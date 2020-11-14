import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //SOME CLEAVER DB STUFF
        setInput("");
        setImageUrl("");
    };
    

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder={`Comparte con la comunidad`}/>

                    <input value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder={"image URL (Optional"} />

                    <button onClick={handleSubmit} type="submit">
                         Enviar
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
             <div className="messageSender__option">
                 <PhotoLibraryIcon style={{color: "green"}} />
                 <h3>Photo/Video</h3>
             </div>

             <div className="messageSender__option">
                 <InsertEmoticonIcon style={{color: "orange"}} />
                 <h3>Feeling/Activity</h3>
             </div>
            </div>
        </div>
    )
}

export default MessageSender
