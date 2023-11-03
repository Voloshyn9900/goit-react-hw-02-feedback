import { Feedback } from './Feedback';
import { Section, Container, Title } from './App.styled';

export const App = () => {
  return (
    <Section>
      <Container>
        <Title>Please leave feedback</Title>
        <Feedback ></Feedback >
      </Container>
    </Section>
  );
};
