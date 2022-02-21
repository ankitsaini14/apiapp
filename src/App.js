import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import "./App.css";
const Posts = lazy(() => import("./components/Posts"));
const Pagination = lazy(() => import("./components/Pagination"));
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <>
      <Suspense fallback={<div>Please wait...</div>}>
        <Posts posts={currentPost} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Suspense>
    </>
  );
};
export default App;
