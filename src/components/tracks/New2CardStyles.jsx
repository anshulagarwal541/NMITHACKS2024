import styled from "styled-components";

export const CardWrapper = styled.div`
  border:1px solid white;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items: center;
  width:300px;
  height:500px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255,0.2);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  text-align: center;
  @media (min-width:716px) and (max-width:739px) {
    width:30vw;
    gap:2px;
    max-height:55vh;
  }
  @media (min-width:740px) and (max-width:839px){
    width:30vw;
    gap:2px;
    max-height:70vh;
  }

  @media (min-width:840px) and (max-width:890px) {
    width:30vw;
    gap:2px;
    height:78vh;
  }
  @media (min-width:470px) and (max-width:715px) {
    width:28vw;
    height:20rem;
  }
  @media (min-width:291px) and (max-width:469px) {
    width:26vw;
    height:14rem;
  }
  @media (max-width:290px){
    width:30vw;
    max-height:60vw;
  }
  @media (min-width:891px) and (max-width:1030px){
    width:30vw;
    gap:2px;
    max-height:80vh;
  }
`;

export const CardImage = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  min-height:50%;
  img{
    width:8vw;
    height:8vw;
  };
  @media (max-width:1024px) {
    width:30vw;
    height:15vh;
  }
  @media (min-width:840px) and (max-width:1023px) {
    img{
      width:20vw;
      height:20vw;
    }
  }
  @media (min-width:740px) and (max-width:839px) {
    img{
      width:18vw;
      height:18vw;
    }
  }
  @media (min-width:470px) and (max-width:715px)
  {
    width:24vw;
    img{
      width:18vw;
      height:18vw;
    }
  }
  @media (min-width:291px) and (max-width:469px) {
    width:24vw;
    img{
      width:18vw;
      height:18vw;
    }
  }
  @media (max-width:290px){
    width:20vw;
    height:20vw;
    img{
      width:15vw;
      height:15vw;
    }
  }
`;

export const CardTextWrapper = styled.div`
  margin: 25px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;
  width:fit-content;
  height:50%;
  height:fit-content;
  @media (max-width:1024px) {
    margin:1px;
  }
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:5px;
  padding:2px;
  font-weight:700;
  background-color:rgb(248,70,17);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width:1024px){
    font-size:4vw;
    line-height:1.2;
  }
`;

export const CardTextBody = styled.p`
  color: white;
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  font-weight: 500;
  padding:2px;
  @media (max-width:1024px) {
    font-size:1.7vw;
  }
  @media (min-width: 1030px) and (max-width: 1366px)  
  {
    font-size:1.5vw;
  }
  @media (min-device-width : 768px) and (max-device-width : 1024px)  
  {
    font-size:1.8vw;
  }
  @media (min-width:291px) and (max-width:715px) {
    font-size:1.5vw;
  } 
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 5px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;

//checked...