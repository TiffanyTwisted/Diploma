import React, {useContext} from 'react';
import {observer} from "mobx-react-lite"
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from '../index';
import { NavLink } from "react-router-dom";

const MenuBar = observer(( ) => {
    const {school} = useContext(Context);
    return (
    <ListGroup className='mt-3'>  
        { school.menuitems.map(menuitem => 
        <NavLink to={menuitem.path} activeStyle={{
            fontWeight: "bold",
            color: "white"
          }} style={{ textDecoration: 'none'}}>
       <ListGroup.Item 
       style={{cursor:'pointer'}}
       variant = "primary"
       active = { menuitem.id === school.selectedItem.id}
       onClick={() => school.setSelectedItem(menuitem)}
       key={menuitem.id}
       >
           {menuitem.name}
           </ListGroup.Item></NavLink>   )} 
    </ListGroup> )
});

export default MenuBar;

