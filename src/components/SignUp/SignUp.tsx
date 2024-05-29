import { useState } from 'react';
import { ISignUp, INPUT_TYPES } from "../../types"
import { Input } from '../Input';
import { Button } from '../Button';
import './SignUp.css'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const disputch = useDispatch()
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    })
    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value,
        }))
    }
    const handleSignUp = () => {
        const { confirm, ...other } = formState
        disputch(signUpUser(other))
    }
    return (
        <div className='wrapSignUp'>
            <div className='wrapButHead'>
                <Link to='/sign-in'><button className='sign_but sign_but-signup'>SIGN IN</button></Link>
                <button className='sign_but sign_but-signin'>SIGN UP</button>
            </div>
            <div className='wrapInput'>
                <Input
                    label='Name'
                    placeholder='Your name'
                    value={formState.username}
                    onChange={(e: any) => handler('username', e.target.value)}
                    type={INPUT_TYPES.TEXT}
                />
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
                <Input
                    label='Confirm password'
                    placeholder='Confirm password'
                    value={formState.confirm}
                    onChange={(e: any) => handler('confirm', e.target.value)}
                    type={INPUT_TYPES.PASSWORD}
                    errorMessage={formState.password !== formState.confirm ? 'Wrong password' : ''}
                />
            </div>
            <Button children='Sign Up' className='butSign' onClick={handleSignUp} />
        </div>
    )
}

export { SignUp }