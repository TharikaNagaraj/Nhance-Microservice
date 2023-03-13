import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'

const ViewModal = (props) => 
{
    const {email,toggleView,viewToggle} = props
    const [show,setShow] = useState(viewToggle)
    const [userInfo,setUserInfo] = useState({})
    const [imagePath,setImagePath] = useState("")
    useEffect(() => 
    {
        axios.get(`http://localhost:3060/api/app2/user-bio/${email}`)
            .then((ele) => 
            {
                console.log(ele.data)
                const data = ele.data
                const userResult = data.find((ele) => 
                {
                    return(ele.hasOwnProperty("email"))
                })
                setUserInfo(userResult)
                const imageResult = data.find((ele) => 
                {
                    return(ele.hasOwnProperty("imgName"))
                })
                console.log('filepath',imageResult.imgPath)
                setImagePath(imageResult.imgPath)

            })
            .catch((err) => 
            {
                console.log(err)
            })
    },[viewToggle])

    const handleClose = () => 
    {
        toggleView()
    }

    return(
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>{userInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                Name - {userInfo.name}<br />
                                Email - {userInfo.email}<br />
                                Gender - {userInfo.gender}<br />
                                Degree - {userInfo.degree}<br />
                                Occupation - {userInfo.occupation}<br />
                                Marital Status - {userInfo.maritalStatus}<br />
                                Home Town - {userInfo.homeTown}<br />
                                State - {userInfo.state}<br />
                            </Col>
                            <Col xs={6} md={4}>
                                <img src={`${imagePath}`} style={{width:"100px",height:"150px"}}/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewModal