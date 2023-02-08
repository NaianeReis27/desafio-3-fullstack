import styled from "styled-components";

interface sideProps{
  animation: boolean  
}

const Side = styled.div<sideProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-navbar);
  height: 100%;
  width:300px;
  right:  0;
  z-index: 100;
  animation: 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  overflow: hidden;
  animation-name: ${({animation})=> animation? "slide-right": "slide-left"};

  button{
    width: 100%;
    margin:  5px 0;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px white;
    background: none;
  }
  

 
`;

export default Side