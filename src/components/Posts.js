import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <table>
      <tr>
        <th>userId</th>
        <th>title</th>
        <th>id</th>
        <th>body</th>
      </tr>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.id}</td>
          <td>{post.body}</td>
        </tr>
      ))}
    </table>
  );
};

export default Posts;
