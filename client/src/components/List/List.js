import classes from "./List.module.css"
import axios from 'axios'
import { useState } from 'react';

const List = () => {
    const [people, setPeople] = useState([])
    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/api/people')
        setPeople(response.data);
        console.log(people)
    }

    getUser()
    return (
        <>
             {people.map((person) => {
                const { name, gender, city, contact } = person;
                return (
                    <article className={classes.personContainer}>
                        <div className={classes.personDetail}>
                            <h2>List of Peoples</h2>
                            <h4>{name}</h4>
                            <h4>{gender}</h4>
                            <h4>{city}</h4>
                            <h4>{contact}</h4>
                        </div>
                    </article>
                 )
             })} 
        </>
    )
}

export default List;