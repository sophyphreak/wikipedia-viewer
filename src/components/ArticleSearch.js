import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'reactstrap';
import ArticleList  from './ArticleList';

class ArticleSearch extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      links: []
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = e.target.searchTerm.value;
    searchTerm = searchTerm.split(' ').join('%20').split(';').join('%3B');
    const axiosUrl = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&limit=100&namespace=0&format=json';
    
    axios.get(axiosUrl)
    .then(res => {
      const links = res.data;
      this.setState({ links });
    })
    .catch(error => {
      console.log(error);
      });
  };
  
  render() {
    return (
      <div>
        <Form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <label className="label">Or enter something below to search:</label>
          <Input className="form__input" name="searchTerm" type="text" placeholder="Zhuangzi"/>
          <Button color="link" className="search-button">And then click here</Button>
        </Form> 
        <ArticleList links={this.state.links}/>
      </div>
    );
  }
};

export default ArticleSearch;