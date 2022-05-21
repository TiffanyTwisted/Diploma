import React, {useContext} from 'react';
import {observer} from "mobx-react-lite"
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from '../index';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import DatePicker from 'sassy-datepicker';

const MenuBar = observer(( ) => {
    const {school, user} = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
    <ListGroup className='mt-3 border border-primary rounded-top'>  
        { school.menuitems.map(menuitem => 
        <NavLink onClick={() => navigate(menuitem.path)} to={menuitem.path} activeStyle={{
            fontWeight: "bold",
            color: "white"
          }} style={{ textDecoration: 'none'}}>
       <ListGroup.Item action
       style={{cursor:'pointer'}}
       variant = "primary"
       active = { menuitem.id === school.selectedItem.id}
       onClick={() => school.setSelectedItem(menuitem)}
       key={menuitem.id}
       >
           {menuitem.name}
           </ListGroup.Item></NavLink>   )} 
    </ListGroup> 
     <DatePicker className='mt-5'/>
    </>)
});

export default MenuBar;

