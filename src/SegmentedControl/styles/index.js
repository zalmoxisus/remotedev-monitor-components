import { css } from 'styled-components';

export const style = ({ theme, disabled, align }) => css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 10px;
  background-color: ${theme.base02};
  ${align === 'left' && `
    flex-direction: row-reverse;
  `}

  > span {
    margin: 0 10px 0 10px;
    font-size: 1.2em;
  }
  > div {
    display: flex;
    ${align === 'right' && `
      margin-left: auto;
    `}
    ${align === 'left' && `
      margin-right: auto;
    `}
  }
  > div > [data-selected] {
    background-color: ${theme.base03};
  }
  button {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border: 1px solid ${theme.base03};
    padding: 5px 10px;
    margin-left: -1px;
    ${disabled ? `
    cursor: not-allowed;
    color: ${theme.base04};
    opacity: 0.7;
    ` : `
    cursor: pointer;
    color: ${theme.base05};
    background-color: ${theme.base01};
    &:hover {
      background-color: ${theme.base03};
    }
    `}
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;