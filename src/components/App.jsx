import { Featback } from './Featback'
import { Section, Container, Title } from './App.styled';

export const App = () => {
  return (
    <Section>
      <Container>
        <Title>Please leave feedback</Title>
        <Featback></Featback>
      </Container>
    </Section>
  );
};
