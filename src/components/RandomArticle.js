import React from 'react';
import { Button } from 'reactstrap';

class RandomArticle extends React.Component {
  
  randomArticle() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  }
  
  render() {
    return (
      <Button color="primary" className="random-button" onClick={this.randomArticle}>Click here to see a random article</Button>
    );
  }
};

export default RandomArticle;