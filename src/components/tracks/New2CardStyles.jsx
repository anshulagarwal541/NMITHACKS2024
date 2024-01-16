import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  height:500px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #f84611;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  flex-wrap:wrap;
  @media (min-width:716px) and (max-width:839px) {
    grid-template-columns:30vw;
    grid-template-rows:18vh 18vh 18vh;
    gap:2px;
    max-height:55vh;
  }
  @media (min-width:840px) and (max-width:1024px) {
    grid-template-columns:30vw;
    grid-template-rows:18vh 18vh 18vh;
    gap:2px;
    max-height:55vh;
  }
  @media (min-width:281px) and (max-width:715px) {
    grid-template-columns:30vw;
    grid-template-rows:18vh 18vh 18vh;
    gap:0px;
    max-height:70vw;
  }
  @media (max-width:280px){
    grid-template-columns:30vw;
    grid-template-rows:18vh 18vh 18vh;
    gap:0px;
    max-height:70vw;
  }
  /* @media (min-width:716px) and (max-width:765px){
    grid-template-columns:30vw;
    grid-template-rows:18vh 18vh 18vh;
    gap:0px;
    max-height:70vw;
  } */
`;

export const CardImage = styled.div`
  border:3px solid #f84611;
  grid-area: image;
  background:rgb(194 65 12 / var(--tw-bg-opacity));
  background-color:white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    width:8vw;
    height:8vw;
  };
  @media (max-width:1024px) {
    width:30vw;
    height:15vh;
  }
  @media (min-width:281px) and (max-width:715px) {
    width:30vw;
    height:35vw;
  }
  @media (max-width:280px){
    width:30vw;
    height:35vw;
  }
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:5px;
  width:fit-content;
  height:fit-content;
  @media (max-width:1024px) {
    margin:1px;
  }
  @media (min-width:281px) and (max-width:359px) {
    margin:3.5vw 1px;
  }
  @media (min-width:360px) and (max-width:535px) {
    margin:3vw 1px;
  }
  @media (min-width:536px) and (max-width:715px){
    margin:20vw 1px;
  }
  @media (max-width:280px){
    margin:0px 1px;
  }
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  margin-bottom:5px;
  padding:2px;
  font-weight:700;
  background-color:#101010;
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
