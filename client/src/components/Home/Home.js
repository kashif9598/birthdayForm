import Button from '../Button/Button';
import classes from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const viewListHandler = () => {
        navigate('/list')
    }
    return (
        <div className={classes.home}>
            <h3>Click below to view the list</h3>
            <Button className={classes.buttonContainer} onClick={viewListHandler}>View List</Button> 
        </div>
    )
}

export default Home;