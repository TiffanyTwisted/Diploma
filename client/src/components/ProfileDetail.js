import React,{useContext, useState} from 'react';
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

const ProfilePage = observer( () => {
    const {user} = useContext(Context);
    const photoLink = user.photo
    console.log(user)

    return (
        <Container>
           <Card>
                <CardImg 
                  height={250}
                  src="http://storge.pic2.me/c/1360x800/386/5834c93d71c5f.jpg" />
                 <Image 
                  style={ 
                  { width : 150,
                   heigth : 150,
                   borderRadius : 75,
                   borderColor:'white'}
                 }
                 src="https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg"/>
                 <CardTitle>{user.first_name}</CardTitle>
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
