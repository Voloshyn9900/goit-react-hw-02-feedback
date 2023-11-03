import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 10px;

  background-color: '#f5f4fa';
  border: 0;
  border-radius: 4px;
  color: black;
  font-weight: 700;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${props => props.theme.colors.lightBlueHover};
    color: white;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
