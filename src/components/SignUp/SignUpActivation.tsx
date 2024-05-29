import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button"
import './SignUp.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { activateSignUp } from "../../redux/actionCreators";

const SignUpActivation = () => {
    const { uid = '', token = '' } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(activateSignUp({ uid, token }))
    }, [])

    return (
        <div className='wrapSignUp'>
            <div className='wrapButHeadActivation'>
                <button className='butHead'>Back to home</button>
                <h1 className='headH1'>Registration Confirmation</h1>
            </div>
            <div className='wrapSignUpActivationMain'>
                <h4 className="signUpActivationText">
                    Registration successful! Welcome aboard!<br />
                    Please check your email.
                </h4>
                <Button children='Go to home' className='butSignUp' onClick={() => { }} />
            </div>
        </div>
    )
}

export { SignUpActivation }