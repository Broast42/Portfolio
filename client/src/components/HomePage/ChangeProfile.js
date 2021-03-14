import React from 'react';

const ChangeProfile = (props) => {

    return(
        <div className="profile-change pro-change-themed">
            <div>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type="text" placeholder={props.profile} onChange={(e)=>{props.setInput(e)}}/>
                    <button onClick={()=>{props.changeProfile()}}>Submit</button>
                </form>   
            </div>
            <div>
                <p>Type in your GitHub username to change the profile card bellow</p>
            </div>    
        </div>
    )
}

export default ChangeProfile;