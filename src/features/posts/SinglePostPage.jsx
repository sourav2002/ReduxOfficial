import React from "react";
import { useSelector } from "react-redux";
import { Link , useParams} from "react-router-dom";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  const {postId}  = useParams()
  console.log(postId);

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section className="text-center text-2xl">
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div className="mt-10 mb-10 p-4 mx-auto max-w-xl">

    <article className="post-excerpt p-4 " key={post.id}>
      <h3 className="text-4xl">{post.title}</h3>
      <div className="mt-2">
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
      <p className="post-content py-4 items-center text-gray-800">{post.content}</p>
      <ReactionButtons post={post} />
      <Link to={`/editPost/${post.id}`} className="bg-blue-600 px-3 py-2  rounded-sm  text-white font-bold">
        Edit Post
      </Link>
    </article>
    </div>
  );
};
export default SinglePostPage;
