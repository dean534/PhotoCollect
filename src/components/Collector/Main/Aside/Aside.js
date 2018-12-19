import React from "react";
import {Menu, Icon} from 'semantic-ui-react'

function Aside() {
  const addControler =()=>{
    console.log('addControler: work')
  }
  return (
    <Menu vertical>
      <Menu.Item>
        <Menu.Header>Source</Menu.Header>
        <Menu.Menu>
          <Menu.Item>Pixabay</Menu.Item>
          <Menu.Item>Pexels</Menu.Item>
          <Menu.Item onClick={addControler}><Icon name="add circle"/></Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Favorite</Menu.Header>
        <Menu.Menu>
          <Menu.Item>Animal</Menu.Item>
          <Menu.Item>Family</Menu.Item>
          <Menu.Item onClick={addControler}><Icon name="add circle"/></Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}

export default Aside;
