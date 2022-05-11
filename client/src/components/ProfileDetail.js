import React,{useContext, useState, useEffect} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {Context} from '../index.js';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
import { Upload } from './UploadImg.js';
import Image from 'react-bootstrap/Image';
import { observer } from 'mobx-react-lite';
import { readUserInfo } from '../http/userAPI';
import StatusTable from '../components/StatusTable'  

const ProfilePage = observer( () => {
    const [userInfo, setUserInfo] = useState({ })
    const {user} = useContext(Context);
    const photoLink = user.photo
    console.log(user)

    useEffect(()=>{
      readUserInfo( user.email ).then(data => setUserInfo(data) )
  }, [])

    return (
        <Container>
           <Card>
             <div className='d-flex justify-content-center'>
                 <Image className='mt-3'
                  style={ 
                  { width : 150,
                   heigth : 150,
                   borderRadius : 75,
                   borderColor:'white'}
                 }
                 src="https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg"/>
                 </div>
                 <CardTitle>{user.first_name}</CardTitle>
                 <CardBody>
                   <StatusTable/>
                 </CardBody>
           </Card>
        </Container>
    );
} ) 

export default ProfilePage;
/*
{ photoLink != null ? 
  <CardImg width={50}
  height={50}
src={user.photo}/> :*/
