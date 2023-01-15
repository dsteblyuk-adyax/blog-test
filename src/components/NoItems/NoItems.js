import React from 'react';
import { string } from 'prop-types';

const NoItems = ({ text }) => {
  return (
    <div className="w-full text-center p-10">
      {text}
    </div>
  );
};

NoItems.propTypes = {
  text: string.isRequired,
};

export default NoItems;