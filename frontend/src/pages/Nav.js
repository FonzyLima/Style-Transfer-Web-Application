import '../styles/styles.scss';
import {Link} from 'react-router-dom'
const axios = require('axios')

function Nav() {
    return (
        <nav>
            <div className='navcontent'>
                <div className='logo'>Style Transfer</div>
                <div className='right'>
                <Link className='home' to="/">Home</Link>
                <Link className='demo' to="/Input">Demo</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
