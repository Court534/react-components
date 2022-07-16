import React from 'react';

const CommentDetail = () => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.image()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className='author'>
            Sam
          </a>
          <div className="metedata">
            <span className='date'>Today at 18:00</span>
          </div>
          <div className="text">Nice blog post </div>
        </div>
      </div>
  );
};