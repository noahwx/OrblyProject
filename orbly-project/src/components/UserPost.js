import React from "react";

const UserPost = () => {
    return ( 
        <div className="user-post-area">
            <div className='user-feed-post'>
                <textarea className='user-feed-post-text' placeholder='What do you want to talk about?' />
            </div>
            <button className='user-feed-post-button'>
                <span>Post</span>
            </button>
        </div>
    );
}
 
export default UserPost;