import styled, { keyframes } from 'styled-components';
 
export const bounceright = keyframes`
    from {
        -webkit-transform: translateX(0);
    }
    to {
        -webkit-transform: translateX(3px);
    }
`;

export const wiggle = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(30deg);
    }
`;