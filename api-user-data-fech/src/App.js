import react, { useState, useEffect } from 'react';
import { Button, Card, Container, Navbar, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);


  const userData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1")
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  }
  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div>
      <Navbar bg='dark' variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src="https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg"
              width="100"
              height="40"
              className="d-inline-block align-top"
            />{' '}

          </Navbar.Brand>
          <Button variant="outline-light" onClick={userData}>Get Users</Button>{' '}
        </Container>
      </Navbar>
      <div className='RowContainer'>
        {
          users.map((curElm) => {
            return (
              <Card style={{ width: '25rem' }} border='dark' bg='info'  >
                <Card.Img variant="top" src={curElm.avatar} />
                <Card.Body>
                  <Card.Title>
                    Name-{curElm.first_name}  {curElm.last_name}
                  </Card.Title>
                  <Card.Subtitle>
                    Email- {curElm.email}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>

  )
};