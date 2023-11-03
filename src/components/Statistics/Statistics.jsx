import {
  StatisticsSpan,
  Li,
  StatisticsList,
} from '../Feedback.styled';

export const Statistics = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {

    return(<>
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
              <StatisticsSpan>Total {totalFeedback}</StatisticsSpan>
            </Li>
            <Li>
              <StatisticsSpan>
                {positivePercentage > 0
                  ? `Positive feedback ${positivePercentage}%`
                  : `Positive statistics is not available`}
              </StatisticsSpan>
            </Li>
          </StatisticsList>
      </>)
};
