import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section className="mx-auto p-4 max-w-xl mt-16">
      <h2 className="text-2xl font-bold container">Add a New Post</h2>
      <form className="bg-white rounded ">
        <label
          htmlFor="postTitle"
          className="block text-gray-700 text-sm font-bold mb-2 mt-8 container mx-auto"
        >
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          className="shadow container mx-auto appearance-none border rounded max-w-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={onTitleChanged}
        />
        <label
          htmlFor="postAuthor"
          className="block text-gray-700 text-sm font-bold mb-2 mt-8 container mx-auto"
        >
          Author:
        </label>
        <select
          className="shadow container mx-auto appearance-none border rounded max-w-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label
          htmlFor="postContent"
          className="block text-gray-700 text-sm font-bold mt-8 container mx-auto"
        >
          Content:
        </label>

        <textarea
          id="postContent"
          name="postContent"
          value={content}
          className="shadow container mx-auto appearance-none border rounded max-w-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={onContentChanged}
        />

        <button
          type="button"
          className="bg-purple-300 hover:bg-purple-500 hover:text-white rounded-md px-3 py-1 mt-4 mb-8"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
