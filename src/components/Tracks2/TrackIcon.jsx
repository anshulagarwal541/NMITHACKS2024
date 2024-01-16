import React from 'react'
import styled from 'styled-components';

function TrackIcon(props) {
  return (
    <Image>
        <img src={props.url} alt="" />
    </Image>
  )
}

export default TrackIcon;

const Image=styled.div`
    img{
        width:30px;
        height:30px;
    }
`;