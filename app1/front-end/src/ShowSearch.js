import React, { useState,useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import ViewModal from "./ViewModal";

const ShowSearch = (props) => 
{
    const {userSearchToggle,searchUserToggle,searchedUser} = props
    const {showUserToggle,toggleShowUser} = props
    const [show,setShow] = useState(showUserToggle)
    const [displayUser,setDisplayUser] = useState([])
    const [viewToggle,setViewToggle] = useState(false)
    const [email,setEmail] = useState("")

    useEffect(() => 
    {
        axios.get("http://localhost:3050/api/app1/users-all")
            .then((ele) => 
            {
                console.log(ele.data)
                setDisplayUser(ele.data)
            })
            .catch((err) => 
            {
                console.log(err)
            })
       
    },[])

    const handleClose = () => 
    {
       toggleShowUser()
    }

    const toggleView = () => 
    {
        setViewToggle(!viewToggle)
    }
    const handleView = (e,email) => 
    {
        setEmail(email)
        toggleView()
    }
    return( 
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Users</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>options</th>
                            {/* <th>Degree</th>
                            <th>Occupation</th>
                            <th>Marital Status</th>
                            <th>Home Town</th>
                            <th>State</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {displayUser.map((ele,i) => 
                        {
                            return(
                                <tr key={ele._id}>
                                    <td>{i+1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td><button className="btn btn-primary" onClick={(e) => {handleView(e,ele.email)}}>View</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
        {(viewToggle) && (<ViewModal email={email} toggleView={toggleView} viewToggle={viewToggle}/>)}
        </div>
    )
}
export default ShowSearch