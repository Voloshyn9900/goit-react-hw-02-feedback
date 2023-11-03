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
    const { good, neutral, bad } = this.state;
    return Math.round((100 / (good + neutral + bad)) * good);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();


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
              <StatisticsSpan>Good {this.state.good}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Neutral {this.state.neutral}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Bad {this.state.bad}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>Total {this.countTotalFeedback()}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>
                {this.countPositiveFeedbackPercentage() > 0
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
