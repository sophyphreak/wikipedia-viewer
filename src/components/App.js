import React from 'react';
import RandomArticle from './RandomArticle';
import ArticleSearch from './ArticleSearch';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">Welcome to Wikipedia Viewer</h1>
        <h4 className="subtitle">Created by Andrew Horn</h4>
        <RandomArticle/>
        <ArticleSearch/>
      </div>
    );
  }
};

export default App;
