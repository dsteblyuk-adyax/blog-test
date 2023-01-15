import React from 'react';
import { postPropTypes } from '../../../proptypes/post';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    title,
    excerpt,
    imageUrl,
  } = post;

  return (
    <div className="hover:-translate-y-2 transition-all min-h-full relative pb-20 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href="#">
        <div className={`${styles.imageWrap} relative overflow-hidden`}>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={imageUrl}
            alt={title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src="/images/no-image.jpg";
            }}
          />
        </div>
        <div className="p-5">
          <p className="text-blue-700 text-sm mb-1">Video</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {excerpt}
          </p>
        </div>
      </a>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center not-italic">
          <div className="flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-4 w-10 h-10 rounded-full" src="http://placekitten.com/100/100" alt="" />
            <div>
              <a href="#" className="text-l font-bold text-gray-900 dark:text-white">Roel Aufderehar</a>
              <p className="text-l text-gray-500 dark:text-gray-400">
                Mar 16, 2022 · 6 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: postPropTypes.isRequired,
};

export default Post;
