import { IButton } from "../../types"
import './Button.css'

const Button = ({ children, className, isActive = true, onClick }: IButton) => {
    return (
        <button disabled={!isActive} onClick={(e) => onClick(e)}
            className={'button-default ' + className + (isActive ? '' : ' button-disabled')}>
            {children}
        </button>
    )
}


export { Button }