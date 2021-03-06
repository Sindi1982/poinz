import styled from 'styled-components';

import {
  COLOR_BACKGROUND_GREY,
  COLOR_BLUE,
  COLOR_LIGHTER_GREY,
  COLOR_ORANGE,
  COLOR_WARNING
} from './colors';
import {MEDIA_MIN_WIDTH_THRESH, RIGHT_MENU_WIDTH, TOPBAR_HEIGHT} from './dimensions';

export const StyledUserMenu = styled.div`
  z-index: 10;
  position: fixed;
  width: ${(props) => (props.shown ? '100%' : RIGHT_MENU_WIDTH + 'px')};
  top: ${TOPBAR_HEIGHT}px;
  bottom: 0;
  right: ${(props) => (props.shown ? '0' : RIGHT_MENU_WIDTH * -1 + 'px')};
  transition: all 0.2s ease-out;
  background: ${COLOR_BACKGROUND_GREY};
  box-sizing: border-box;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${MEDIA_MIN_WIDTH_THRESH}) {
    width: ${RIGHT_MENU_WIDTH}px;
  }

  &:after {
    content: '';
    top: 10px;
    left: 0;
    position: absolute;
    bottom: 20px;

    @media (min-width: ${MEDIA_MIN_WIDTH_THRESH}) {
      border-right: 1px solid ${COLOR_LIGHTER_GREY};
    }
  }

  h5 {
    color: ${COLOR_ORANGE};
    font-weight: 700;
    margin-bottom: 8px;
    margin-top: 0;
  }
  .pure-form {
    overflow-y: auto;
  }
`;

export const StyledSection = styled.div`
  background: white;
  border: 1px solid ${COLOR_LIGHTER_GREY};
  padding: 8px;
  margin: 0 0 16px 0;
`;

export const StyledTextInput = styled.div`
  display: flex;
  align-items: stretch;
  padding: 4px;

  input {
    width: 80%;
    border: none;
    border-bottom: 1px solid ${COLOR_LIGHTER_GREY};
    padding: 1px 0;
    margin-right: 4px;
  }
`;

export const StyledRadioButton = styled.div`
  label {
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
  }

  input[type='radio'] {
    margin-right: 4px;
    display: inline-block;
  }
`;

export const StyledLicenseHint = styled.div`
  font-size: small;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const StyledAvatarGrid = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledMiniAvatar = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-right: 4px;
  border-radius: 50%;
  border: ${({selected}) => (selected ? '2px solid ' + COLOR_ORANGE : '2px solid transparent')};
  padding: 2px;

  &:hover {
    box-shadow: inset 0 82px 15px -60px rgba(194, 194, 194, 0.65);
  }
`;

export const StyledLinkButton = styled.a`
  padding: 0.5em 1em;
  box-sizing: border-box;
  color: white;
  border-radius: 2px;
  background: ${COLOR_BLUE};
  text-decoration: none;
  font-size: 100%;

  &:hover {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1));
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  font-family: monospace;
  min-height: 300px;
`;

export const StyledExpandButton = styled.button`
  padding: 3px;
  font-size: small;
  margin: 0 4px;
`;

export const ErrorMsg = styled.p`
  color: ${COLOR_WARNING};
  margin-bottom: 2px;
  font-size: small;
`;
