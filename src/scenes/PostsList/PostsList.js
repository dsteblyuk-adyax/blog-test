import React from 'react';
import { arrayOf } from 'prop-types';
import { postPropTypes } from '../../../proptypes/post';
import Post from '../../components/Post/Post';
import NoItems from '../../components/NoItems/NoItems';

const PostsList = ({ posts }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {posts && posts.length > 0 ? posts.map((post) => (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10" key={post.id}>
          <Post post={post} />
        </div>
      )) : <NoItems text="No post here..." />}
    </div>
  );
};

PostsList.propTypes = {
  posts: arrayOf(postPropTypes).isRequired,
};

export default PostsList;
