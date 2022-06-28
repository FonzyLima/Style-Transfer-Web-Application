import '../styles/styles.scss';
const axios = require('axios')

function Nav() {
    return (
        <nav>
            <div className='navcontent'>
                <div className='logo'>Style Transfer</div>
                <div className='right'>
                    <a className='home'>Home</a>
                    <a className='demo'>Demo</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
