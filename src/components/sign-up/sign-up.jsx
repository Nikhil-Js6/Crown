import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-up.scss';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ name: '', email: '', password: '', confirmPassword: '' });
    }

    render() {

        const { name, email, password, confirmPassword } = this.state;

        return (
            <div className='signup'>
                <h2 className='title'>Don't have an account?</h2>
                <span className='text'>Sign up with your email and password!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='name'
                        value={name}
                        type='text'
                        label={'Name'}
                        required
                        onChange={this.handleChange}
                    />
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
                    <FormInput
                        name='confirmPassword'
                        value={confirmPassword}
                        type='password'
                        label={'Confirm Password'}
                        required
                        onChange={this.handleChange}
                    />
                    <span className='button-wrapper'>
                        <CustomButton type='submit'>
                            Sign Up
                            <img className='button-img' src='/sign-up.png' alt='img' />
                        </CustomButton>
                    </span>
                </form>
            </div>
        );
    }
}

export default SignUp;
