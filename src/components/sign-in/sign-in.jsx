import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className='signin'>
                <h2 className='title'>Already have an account?</h2>
                <span className='text'>Sign in with your email and password!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={email}
                        type='email'
                        label={'Email'}
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        name='password'
                        value={password}
                        type='password'
                        label={'Password'}
                        required
                        onChange={this.handleChange}
                    />
                    <span className='button-wrapper'>
                        <CustomButton type='submit'>
                            Sign in
                            <img className='button-img' src='/log-in.png' alt='img' />
                        </CustomButton>
                        <CustomButton type='submit' 
                            style={{ backgroundColor: '#1775e5', color: '#fff' }}
                        >
                            Sign in with Google
                            <img className='button-img' src='/google.png' alt='img' />
                        </CustomButton>
                    </span>
                </form>
            </div>
        );
    }
}

export default SignIn;
