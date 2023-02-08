import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = () => {

    const path = useLocation().pathname;

    return (
        <div className='header'>
            <Link to={'/'} className='logo-wrapper'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link 
                    to={'/shop'} 
                    className={path === '/shop' ? 'active link' : 'link'}
                >
                    SHOP
                </Link>
                <Link 
                    to={'/contact'} 
                    className={path === '/contact' ? 'active link' : 'link'}
                >
                    CONTACT
                </Link>
                <Link 
                    to={'/signin'} 
                    className={path === '/signin' ? 'active link' : 'link'}
                >
                    SIGN IN/ SIGN UP
                </Link>
                <span className='link'>
                    <img src='/cart.png' alt='img' style={{ width: '32px', height: '32px' }}/>
                </span>
            </div>
        </div>
    )
}

export default Header;