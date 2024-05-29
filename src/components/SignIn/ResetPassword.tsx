import { useDispatch } from "react-redux"
import { Button } from "../Button"
import { Input } from "../Input"
import { useState } from "react"
import { signInUser } from "../../redux/actionCreators"
import { INPUT_TYPES } from "../../types"

const ResetPassword = () => {
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
        <div className="wrapResetPassword">
            <Input
                label='Email'
                placeholder='Your email'
                value={formState.email}
                onChange={(e: any) => handler('email', e.target.value)}
                type={INPUT_TYPES.TEXT}
            />
            <Button children="RESET" className="butSign" onClick={handleSignIn}></Button>
        </div>
    )
}
export { ResetPassword }