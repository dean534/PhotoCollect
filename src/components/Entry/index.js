import React from 'react';
import { Background } from './style'
import { Segment, Icon ,Header, Button } from 'semantic-ui-react';


function index() {
  return (
    <Background>
      <Segment placeholder inverted>
        <Header icon>
          <Icon name='search' />
          This is a album. You can search images and put them in it. 
        </Header>
        <Segment.Inline center>
          <Button primary>Login</Button>
          <Button>Sign Up</Button>
        </Segment.Inline>
      </Segment>
    </Background>
  )
}

export default index
