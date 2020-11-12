import React, { useState, useEffect } from "react";
import { ItemContentLeft } from "../contents";
import axios from "axios";
import "./css/contentLeft.css";

export default function ContentLeft() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://2i8yt.sse.codesandbox.io/posts");

        if (res.data.posts) {
          setPosts(res.data.posts);
        }
      } catch (e) {
        //
        console.log("errror", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-left">
      {posts.map((post, index) => {
        return (
          <ItemContentLeft
            key={index}
            userPost={post.userPost}
            image={post.image}
            like={post.like}
            content={post.content}
          />
        );
      })}
    </div>
  );
}
