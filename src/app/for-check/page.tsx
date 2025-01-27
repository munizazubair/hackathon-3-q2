"use client";
import { useEffect, useState } from 'react';
import { getPosts } from '../lib/getPost';
import { createPost } from '../lib/createPost';
import { updatePost } from '../lib/updatePost';
import { deletePost } from '../lib/deletePost';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({ title: '', body: '', author: '' });

  // Fetch posts on page load
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Create new post
  const handleCreate = async () => {
    const result = await createPost(newPost);
    setPosts([...posts, result]);
    setNewPost({ title: '', body: '', author: '' }); // Clear form
  };

  // Update an existing post
  const handleUpdate = async (postId:any) => {
    const updatedData = { title: 'Updated Title', body: 'Updated Content' };
    const result = await updatePost(postId, updatedData);
    const updatedPosts = posts.map((post) =>
      post._id === postId ? { ...post, ...updatedData } : post
    );
    setPosts(updatedPosts);
  };

  // Delete a post
  const handleDelete = async (postId:any) => {
    const result = await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><i>by {post.author}</i></p>
            <button onClick={() => handleUpdate(post._id)} className='p-3 bg-red-700 text-white'>Update</button>
            <button onClick={() => handleDelete(post._id)} className='p-3 bg-red-700 text-white'>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
      />
      <button onClick={handleCreate}>Create Post</button>
    </div>
  );
}
