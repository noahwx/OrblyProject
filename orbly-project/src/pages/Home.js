import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return ( 
        <div>
            <Header />
            <div className='Home'>
                <div className='feed'>
                    <h1 className='feed-heading'>Your Feed</h1>
                    <div className='user-feed-post'>
                        <textarea className='user-feed-post-text' placeholder='What do you want to talk about?' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;