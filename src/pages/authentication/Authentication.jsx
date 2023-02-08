import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './authentication.scss';

const Authentication = () => {
    return (
        <div className='auth-wrapper'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication