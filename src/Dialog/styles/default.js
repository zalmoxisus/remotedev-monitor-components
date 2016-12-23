import { css } from 'styled-components';

export const style = ({ theme, open, fullWidth }) => css`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 4;
  display: ${open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:first-child {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${theme.base02};
    opacity: 0.5;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    max-height: 100%;
    min-width: 320px;
    ${fullWidth ? 'width: 99%;' : ''}
    padding: 16px;
    margin-bottom: 16px;
    border: 1px outset ${theme.base06};
    border-radius: 2px;
    background-color: ${theme.base07};
    box-shadow:
      0 9px 46px 8px rgba(0, 0, 0, 0.14),
      0 11px 15px -7px rgba(0, 0, 0, 0.12),
      0 24px 38px 3px rgba(0, 0, 0, 0.2);

    > div:first-child {
      display: flex;
      align-items: center;
      font-weight: 600;
      margin: -17px -17px 16px;
      padding: 16px;
      color: ${theme.base07};
      background-color: ${theme.dark ? theme.base03 : theme.base02};
      border: none;

      > div:first-child {
        flex-grow: 1;
      }

      > button {
        box-sizing: border-box;
        font-size: 1.5em;
        line-height: 1;
        font-weight: bold;
        margin: 0px;
        padding: 0px 5px;
        cursor: pointer;
        color: inherit;
        background-color: transparent;
        border: 0px;
        -webkit-appearance: none;
        outline: none;
      }
    }

    > div:nth-child(2) {
      overflow: auto;

      > form {
        padding: 0;
        
        > .form-group { margin-bottom: 0; }

        > div > fieldset {
          legend { display: none; }
          #root__description { margin-top: 0; }
        }

        .hidden { display: none; }
      }
    }

    > div:nth-child(3) {
      min-height: 45px;
      box-sizing: border-box;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 16px -16px -16px;
      padding: 2px 10px;
      border-top: 1px solid ${theme.base04};
    }
  }
`;
