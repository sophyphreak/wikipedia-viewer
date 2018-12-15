import React from 'react';
import FlipMove from 'react-flip-move';
import Article from './Article';

class ArticleList extends React.Component {
  renderArticles() {
    if (this.props.links.length === 0) {
      return;
    } else {
      return this.props.links[1].map((val, i) => {
        return (
          <Article title={this.props.links[1][i]} blurb={this.props.links[2][i]} url={this.props.links[3][i]}/>
        );
      });
    }
  }
  
  render() {
    return (
      <div>
        <FlipMove>
          {this.renderArticles()}
        </FlipMove>
      </div>  
    );
  }
};

export default ArticleList;