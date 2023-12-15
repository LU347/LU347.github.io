import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario'); //replaces html like document.innerHTML = ''

    const handleClick = () => {
        if (name === 'mario') {
            setName('luigi');
        } else {
            setName('mario');
        }
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}
 
export default Home;