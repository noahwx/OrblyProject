import React from 'react';
import Header from '../components/Header';
import UserPost from '../components/UserPost';

const Home = () => {
    return ( 
        <div>
            <Header />
            <div className='Home'>
                <div className='feed'>
                    <h1 className='feed-heading'>Your Feed</h1>
                    <UserPost />
                </div>
            </div>
        </div>
     );
}
 
export default Home;