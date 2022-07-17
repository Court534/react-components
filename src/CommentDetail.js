import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.image()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className='author'>
            {props.author}
          </a>
          <div className="metedata">
            <span className='date'>Today at 18:00</span>
          </div>
          <div className="text">Nice blog post </div>
        </div>
      </div>
  );
};

export default CommentDetail;