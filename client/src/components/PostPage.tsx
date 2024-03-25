import React from 'react';
import PostContents from './PostContents';
import PostHeader from './PostHeader';

const PostPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
      <PostHeader />
      <PostContents />
    </div>
  );
};

export default PostPage;
