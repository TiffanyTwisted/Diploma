import React,{useContext, useState, useEffect} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {Context} from '../index.js';
import { observer } from 'mobx-react-lite';
import { readUserInfo } from '../http/userAPI';

const UserInfo = observer( () => {
    const [userInfo, setUserInfo] = useState({ })
    const {user} = useContext(Context);

    useEffect(()=>{
      readUserInfo( user.user.id ).then(data => {setUserInfo(data) } )
  }, [])
  

    return (
        <Container>
          <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Роль в системе</Form.Label>
                    <Form.Control placeholder={
                            userInfo.role
                        }
                        disabled/>
                </Form.Group>
            </Form>
        </Container>
    );
} ) 

export default UserInfo;

