import {
  Button,
  Li,
  ButtonList,
} from '../Feedback.styled';


export const FeedbackOptions = ({options, onLeaveFeedback }) => {
  const categories = Object.keys(options);

  return (
    <ButtonList>
      {categories.map(category => (
        <Li key={category}>
          <Button onClick={() => onLeaveFeedback(category)}>{category}</Button>
        </Li>
      ))}
    </ButtonList>
  );
};