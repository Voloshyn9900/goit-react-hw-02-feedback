import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

`;

export const Container = styled.div`
  max-width: 600px;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;

  border: 3px solid ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radii.md};

`;

export const Title = styled.h1`
  margin-top: 16px;
  text-align: center;
`;

