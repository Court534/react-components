import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
      author="Sam" 
      timeAgo="Today at 13:00" 
      comment="Nice blog post"
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Alex" 
      timeAgo="Today at 18:30" 
      comment="Great post!"
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Jane" 
      timeAgo="Today at 10:00" 
      comment="Awesome read"
      avatar={faker.image.avatar()}
      />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));