import styled from "styled-components";

const StyledTimerCircle = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media(min-width: 760px){
    margin-top: 109px;
  }

  .clock_container {
    grid-row: 1/2;
    grid-column: 1/2;
    width: 300px;
    height: 300px;
    margin: 0 auto 0 auto;
    border-radius: 100%;
    background-color: var(--color_blue_black);
    box-shadow: -30px -50px 100px #272c5a, 50px 50px 100px #121530;
    @media(min-width: 760px){
      width: 410px;
      height: 410px;
    }
  }
  .circle_container {
    margin-left: auto;
    margin-left: auto;
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: center;
    position: relative;
    z-index: 1;
  }

  .gradient_circle {
    fill: none;
    stroke: url("#g1");
    stroke-width: 45;
  }
  .timer_circle {
    fill: none;
    stroke: ${props => props.themeColor};
    stroke-width: 15;
  }
`;
export default StyledTimerCircle;
