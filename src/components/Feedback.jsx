import { Component } from 'react';
import {Notification} from './Notification';
import {
  Button,
  StatisticsSpan,
  Li,
  FeedbackBlock,
  ButtonList,
  StatisticsList,
} from './Feedback.styled';

export class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();


    return (
      <FeedbackBlock>
        <ButtonList>
          <Li>
            <Button onClick={() => this.handleClick('good')}>Good</Button>
          </Li>
          <Li>
            <Button onClick={() => this.handleClick('neutral')}>Neutral</Button>
          </Li>
          <Li>
            <Button onClick={() => this.handleClick('bad')}>Bad</Button>
          </Li>
        </ButtonList>
        <h2>Statistics</h2>
        {totalFeedback > 0 ? ( // Проверка на наличие хотя бы одного отзыва
          <StatisticsList>
            <Li>
              <StatisticsSpan>Good {good}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Neutral {neutral}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Bad {bad}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Total {this.countTotalFeedback()}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>
                {positivePercentage > 0
                  ? `Positive feedback ${this.countPositiveFeedbackPercentage()}%`
                  : `Positive statistics is not available`}
              </StatisticsSpan>
            </Li>
          </StatisticsList>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackBlock>
    );
  }
}
