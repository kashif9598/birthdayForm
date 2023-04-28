import classes from './Button.module.css';

const Button = ({children, onClick, className}) => {
    return (
        <button type='submit' onClick={onClick} className={`${className} ${classes.button}`} >{children}</button>
        )
}

export default Button