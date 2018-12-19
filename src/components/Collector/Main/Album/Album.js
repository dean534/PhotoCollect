import React from 'react'
import { Segment } from 'semantic-ui-react';
import Content from './Content'
import SearchBar from './SearchBar'

function Album() {
  return (
    <Segment attached>
        <SearchBar />
        <Content />
    </Segment>
  )
}

export default Album
