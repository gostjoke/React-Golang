import React, { Fragment, useEffect, useState, useRef } from 'react';
import './App.css';
import Input from './Input';

function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(true);
    const [crowd, setCrowd]=useState([]);
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [dob, setDob]=useState("")

    // refs
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const dobRef = useRef();

    const toggleTrue = () => {
        if (isTrue){
            setIsTrue(false);
            return
        }
        setIsTrue(true)
    };

    useEffect(() =>{
        console.log("useEffect fired!")
        let people = [
            { 
            id:1,
            firstname: "Marry",
            lastname: "Jones",
            dob:"1997-05-02"
            },
            { 
            id:2,
            firstname: "Jocab",
            lastname: "Stone",
            dob:"1997-05-03"
            },
        ]
        setCrowd(people);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (lastName !== ""){
            addPerson(firstName, lastName, dob)
        }
        console.log(firstName, lastName, dob)
    }

    const addPerson = (newFirst, newLast, newDob) => {
        let newPerson = {
            id: crowd.length + 1,
            firstname: newFirst,
            lastname: newLast,
            dob: newDob,
        }

        const newList = crowd.concat(newPerson);

        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName){
                return -1
            } else if (a.lastName > b.lastName){
                return 1;
            }
            return 0;
        })

        setCrowd(sorted);
        setFirstName("");
        setLastName("");
        setDob("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";
    }

    return (
        <Fragment>
            <hr />
            <h1 className="h1-green">{props.msg}</h1>
            <hr />
            {isTrue && 
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr/>
                </Fragment>
            }
            <hr/>
            {isTrue ? <p>Is true</p> : <p>Is false</p>}
            {/* change the value of True */}
            <hr/>
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>
            <hr/>
                <form autoComplete='off' onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='first-name'>First Name</label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          ref={firstNameRef}
                          autoComplete="first-name-new"
                          className='form-control'
                          onChange={(event) =>setFirstName(event.target.value)}
                        ></input>
                    </div>

                    <Input 
                        title="Last Name"
                        type="text"
                        name="last-name"
                        ref = {lastNameRef}
                        autoComplete="last-name-new"
                        className="form-control"
                        onChange={(event) => setLastName(event.target.value)}
                    ></Input>

                    <Input 
                        title="Date of Birth"
                        type="date"
                        name="dob"
                        ref = {dobRef}
                        autoComplete="dob-new"
                        className="form-control"
                        onChange={(event) => setDob(event.target.value)}
                    ></Input>

                    <input type='submit' value="Submit" className='btn-btn-primary'/>

                </form>

                <div>
                    First Name: {firstName} <br />
                    Last Name: {lastName} <br />
                    DOB: {dob} <br />
                </div>


            <hr/>
            <h3>People</h3>
            <ul className='list-group'>
                {crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>{m.firstname} {m.lastname}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default HelloWorld;