import React from "react";
import { Card, Image, Button, Reveal, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import {Img,ImgContain, Imgs} from './style'

function Content(props){
  const {photos} = props
  console.log(photos)
    return (
      <Imgs>
        {photos.map(data=>(
        <ImgContain>
          <Img src={data.largeImageURL} alt="img" />
        </ImgContain>
        ))}
      </Imgs>
    )
  }


const mapStateToProps = (state)=>{
  return{
    photos: state.search.photosData
  }
}

export default connect(mapStateToProps)(Content);
