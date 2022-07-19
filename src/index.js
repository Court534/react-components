import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="Today at 13:00" 
        comment="Nice blog post"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      author="Alex" 
      timeAgo="Today at 18:30" 
      comment="Great post!"
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      author="Jane" 
      timeAgo="Today at 10:00" 
      comment="Awesome read"
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));