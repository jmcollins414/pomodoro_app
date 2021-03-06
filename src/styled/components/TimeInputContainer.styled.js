import styled from "styled-components";

const StyledTimeInputContainer = styled.div`
  position: relative;
  .arrows_container{
      position: absolute;
      z-index: 2;
      top: 5%;
      left: 80%;
      @media(min-width: 760px){
        left: 65%
      }
  }
`;
export default StyledTimeInputContainer;
