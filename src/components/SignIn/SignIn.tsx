import { useState } from 'react';
import { INPUT_TYPES } from "../../types"
import { Input } from '../Input';
import { Button } from '../Button';
import './SignIn.css'
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const disputch = useDispatch()
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })
    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value,
        }))
    }
    const handleSignIn = () => {
        disputch(signInUser(formState))
    }

    return (
        <div className='wrapSignIn'>
            <div className='wrapButHead'>
                <button className='sign_but sign_but-signin'>SIGN IN</button>
                <Link to='/sign-up'><button className='sign_but sign_but-signup'>SIGN UP</button></Link>
            </div>
            <div className='wrapInput'>
                <Input
                    label='Email'
                    placeholder='Your email'
                    value={formState.email}
                    onChange={(e: any) => handler('email', e.target.value)}
                    type={INPUT_TYPES.TEXT}
                />
                <Input
                    label='Password'
                    placeholder='Your password'
                    value={formState.password}
                    onChange={(e: any) => handler('password', e.target.value)}
                    type={INPUT_TYPES.PASSWORD}
                />
            </div>
            <Link to='/reset-password' className='spanSignIn-link'><div className='spanSignIn'>Forgot password ?</div></Link>
            <Button children='Sign In' className='butSign' onClick={handleSignIn} />
        </div>
    )
}

export { SignIn }