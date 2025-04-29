import React from 'react';
import styled from 'styled-components';

const Button = ({label}) => {
  return (
    <StyledWrapper>
      <button>{label}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    --color: #D32F2F; /* Red 700 */
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    z-index: 1;
    font-size: 17px;
    background: none;
    border-radius: 6px;
    font-weight: 500;
    color: #fff; /* Force hover text color */
  }

  button::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: -30px; /* Hover position */
    left: -30px; /* Hover position */
    transition: none; /* Disable transition if you want it static */
  }

  button:active::before {
    background: #9A0007; /* Red 900 on active */
    transition: background 0s;
  }
`;

export default Button;
