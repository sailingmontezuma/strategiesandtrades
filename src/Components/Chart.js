import React from "react";
import axios from 'axios';



export default class Chart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

componentWillMount() {
  axios.get(`/data/${this.props.id}`)
    .then(response => this.setState(response.data))

/*
  axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
*/

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. 
        Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}