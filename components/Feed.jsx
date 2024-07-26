"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    filterPost(text);
  };

  const filterPost = (text) => {
    const regex = new RegExp(text)
    const newSearchPosts = posts.filter((post) => {
      return (regex.test(post.prompt))
            || (regex.test(post.tag))
            || (regex.test(post.creator.username));
    })
    setSearchPosts(newSearchPosts);
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
    filterPost(tag);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();


      setPosts(data);
      setSearchPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={searchPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
