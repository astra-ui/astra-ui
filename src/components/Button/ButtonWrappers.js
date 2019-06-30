import styled from 'styled-components';
import { theme } from '../DefaultTheme';
import { bounceright, wiggle } from './ButtonKeyframes';

// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
export const DangerButtonWrapper = styled.button`    
    background: ${theme.dangerBgPallete};
	border: 1px solid ${theme.dangerBgPallete};
    border-radius: 0;
    cursor: pointer;
    color: ${theme.dangerTextPallete};
    outline: none;
	padding: 8px 15px;
    
    &:hover{
        background: ${theme.secondaryDangerBgPallete};
        border: 1px solid ${theme.secondaryDangerBgPallete};
    }
`;

export const DefaultButtonWrapper = styled.button`
    background: ${theme.defaultBgPallete};
    border: 1px solid ${theme.defaultTextPallete};
    border-radius: 0;
    color: ${theme.defaultTextPallete};
    cursor: pointer;
    outline: none;
    padding: 8px 15px;

    &:hover{
        border: 1px solid ${theme.primaryBgPallete};
        color: ${theme.primaryBgPallete};
    }
`;

export const EmailButtonWrapper = styled.button`
    background: #C673B3;
    border: none;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    min-width: 240px;
    padding: 8px 15px;
    padding-right: 75px;
    position: relative;
    transition: 0.2s;
    -webkit-font-smoothing: antialiased;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding-top: inherit;
        padding-bottom: inherit;
        width: 45px;
        content: "";
        text-align: center;
        transition: 0.2s;
        transform-origin: 50% 60%;
        background: rgba(0, 0, 0, 0.1);
    }
    &:active,
    &:focus {
        background: #963d82;
    }
    & svg {
        position: absolute;
        top: 4px;
        bottom: 0;
        right: 0;
        width: 45px;
        font-size: 14px;
    }
    &:hover {
        background: #b74f9f;

        svg {
            -webkit-animation: none;
            -webkit-transform: skew(-20deg);
            animation: none;
            transform: skew(-20deg);
            text-indent: 0.1em;
        }
    }
`;

export const PhoneButtonWrapper = styled.button`
    background: #139675;
    border: none;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    min-width: 240px;
    padding: 8px 15px;
    padding-right: 75px;
    position: relative;
    transition: 0.2s;
    -webkit-font-smoothing: antialiased;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding-top: inherit;
        padding-bottom: inherit;
        width: 45px;
        content: "";
        text-align: center;
        transition: 0.2s;
        transform-origin: 50% 60%;
        background: rgba(0, 0, 0, 0.1);
    }
    &:active,
    &:focus {
        background: #083b2e;
    }
    & svg {
        position: absolute;
        top: 4px;
        bottom: 0;
        right: 0;
        width: 45px;
        font-size: 14px;
    }
    &:hover {
        background: #0d6952;

        svg {
            -webkit-animation: ${wiggle} 0.05s alternate ease infinite;
            animation: ${wiggle} 0.05s alternate ease infinite;
        }
    }
`;

export const PrimaryButtonWrapper = styled.button`
    background: ${theme.primaryBgPallete};
	border: 1px solid ${theme.primaryBgPallete};
    border-radius: 0;
	color: ${theme.primaryTextPallete};
    cursor: pointer;
    outline: none;
	padding: 8px 15px;
    
    &:hover{
        background: ${theme.secondaryBgPallete};
        border: 1px solid ${theme.secondaryBgPallete};
    }
`;

export const ReadMoreButtonWrapper = styled.button`
    background: #FE5F55;
    border: none;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    min-width: 240px;
    padding: 8px 15px;
    padding-right: 75px;
    position: relative;
    transition: 0.2s;
    -webkit-font-smoothing: antialiased;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding-top: inherit;
        padding-bottom: inherit;
        width: 45px;
        content: "";
        text-align: center;
        transition: 0.2s;
        transform-origin: 50% 60%;
        background: rgba(0, 0, 0, 0.1);
    }
    &:active,
    &:focus {
        background: #b90c01;
    }
    & svg {
        position: absolute;
        top: 4px;
        bottom: 0;
        right: 0;
        width: 45px;
        font-size: 14px;
    }
    &:hover {
        background: #fe2f22;

        svg {
            -webkit-animation: ${bounceright} 0.3s alternate ease infinite;
            animation: ${bounceright} 0.3s alternate ease infinite;
        }
    }
`;

export const SearchButtonWrapper = styled.button`
    background: #009ed8;
    border: none;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    min-width: 240px;
    padding: 8px 15px;
    padding-right: 75px;
    position: relative;
    transition: 0.2s;
    -webkit-font-smoothing: antialiased;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding-top: inherit;
        padding-bottom: inherit;
        width: 45px;
        content: "";
        text-align: center;
        transition: 0.2s;
        transform-origin: 50% 60%;
        background: rgba(0, 0, 0, 0.1);
    }
    &:active,
    &:focus {
        background: #002e3f;
        outline: none;
    }
    & svg {
        position: absolute;
        top: 4px;
        bottom: 0;
        right: 0;
        width: 45px;
        font-size: 14px;
    }
    &:hover {
        background: #0079a5;

        svg {
            -webkit-animation: none;
            -webkit-transform: scale(1.4);
            animation: none;
            transform: scale(1.4);
        }
    }
`;

export const PrimarySwipeWrapper = styled.button`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  padding: 8px 15px;
  border: 1px solid currentColor;
  background-color: ${theme.primaryBgPallete};
  color: ${theme.primaryTextPallete};
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${theme.secondaryBgPallete};
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    color: ${theme.primaryTextPallete};
    z-index: -1;
  }
  &:hover {
    color: ${theme.primaryTextPallete};
  }
  &:hover:before {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const PrimaryDiagonalSwipeWrapper = styled.button`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  padding: 8px 15px;
  background-color: ${theme.primaryBgPallete};
  color: ${theme.primaryTextPallete};
  border: 1px solid currentColor;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-bottom: 80px solid ${theme.secondaryBgPallete};
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    z-index: -1;
  }
  &:hover {
    color: ${theme.primaryTextPallete};
  }
  &:hover:before {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const PrimarySliceWrapper = styled.button`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  padding: 8px 15px;
  background-color: ${theme.primaryBgPallete};
  color: ${theme.primaryTextPallete};
  border: 1px solid currentColor;
  z-index: 1;

  &:after {
    content: "";
    width: 0;
    height: 0;
    -webkit-transform: rotate(360deg);
    border-style: solid;
    border-width: 0 0 0 0;
    border-color: transparent ${theme.secondaryBgPallete} transparent transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  &:before {
    content: "";
    width: 0;
    height: 0;
    -webkit-transform: rotate(360deg);
    border-style: solid;
    border-width: 0 0 0 0;
    border-color: transparent transparent transparent ${theme.secondaryBgPallete};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  &:before {
    bottom: 0;
    left: 0;
    border-color: transparent transparent transparent ${theme.secondaryBgPallete};
  }
  &:after {
    top: 0;
    right: 0;
    border-color: transparent ${theme.secondaryBgPallete} transparent transparent;
  }
  &:hover {
    color: ${theme.primaryTextPallete};
  }
  &:hover:before,
  &:hover:after {
    border-width: 80px 262.5px;
  }
`;