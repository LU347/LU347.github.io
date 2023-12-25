import React from 'react';
import DinoGame from '../DinoGame.js';

const Home = () => {
    return (  
        <div className="home">
            <DinoGame />
            <div class="content">
                <div class="container">
                    <p class="description">
                        Hello, I am a Computer Science student that is passionate about Web and Game development. I am someone that loves learning new things such as spoken languages, musical instruments, and random subjects.
                    </p>
                </div>
                <div class="container">
                    <a href="/projects" class="link">Projects ➤</a>
                </div>
            </div>
        </div>
    );
}
 
export default Home;