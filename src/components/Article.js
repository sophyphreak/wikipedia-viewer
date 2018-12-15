import React from 'react';

const Article = (props) => (
  <div className="links">
    <h4><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
    <p>{props.blurb}</p>
  </div>
);

export default Article;