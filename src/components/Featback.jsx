import { Component } from 'react';
import { Button } from './Featback.styled';

export class Featback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClick = () => {
    console.log('this handleClick', this);
  };

  handleClick2() {
    console.log('this handleClick', this);
  }

  render() {
    return (
      <div>
        <span>0</span>

        <div>
          <Button onClick={this.handleClick}>Good</Button>
          <Button
            onClick={() => {
              this.handleClick2()
            }}
          >
            Neutral
          </Button>
          <Button onClick={this.handleClick2}>Bad</Button>
        </div>
      </div>
    );
  }
}
