import { IInput, INPUT_TYPES } from "../../types"
import './Input.css'

const Input = ({ placeholder, label, value, onChange, type, disabled, errorMessage, className }: IInput) => {
    return (
        <div>
            <h3 className="input-label">{label}</h3>
            {type === INPUT_TYPES.TEXTAREA ?
                <textarea
                    className={"input-default " + className}
                    placeholder={placeholder}
                    onChange={(e: any) => onChange(e)}
                    value={value}
                    disabled={disabled}
                /> :
                <input
                    className={"input-default " + className}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: any) => onChange(e)}
                    type={type}
                    disabled={disabled}
                />
            }
            {errorMessage && <span style={{ display: 'block', color: 'red' }}>{errorMessage}</span>}
        </div>
    )
}

export { Input }