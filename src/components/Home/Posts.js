import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import classes from "./Posts.module.scss";

import SinglePost from "./SinglePost";

let catBreeds = [];
const getCatBreeds = async () => {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/breeds/");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

try {
  catBreeds = await getCatBreeds();
} catch (e) {
  console.log("");
}

function Posts() {
  const [Page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const callapi = async () => {
      try {
        const Index = Math.floor(Math.random() * catBreeds.length);

        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catBreeds[Index].id}&api_key=live_wAYTx8wsqFf8YKTbmchPeDJOulEnsw82Hreznjr7sA4RykKLpkM2jk2l7KgZYbpz`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        //console.log("API Response Data:", data);
        const newData = data.map((obj) => {
          return {
            id: obj.id,
            url: obj.url,
            name: obj["breeds"][0].name,
            description: obj["breeds"][0].description,
            origin: obj["breeds"][0].origin,
          };
        });
        setArticles((prev) => {
          return [...prev, ...newData];
        });
      } catch (e) {}
    };
    callapi();
  }, [setArticles, Page]);

  const fetchMoreData = () => {
    //console.log("fetchNextPage" + Page);
    setPage((prev) => {
      return prev + 1;
    });
  };

  return (
    <InfiniteScroll
      dataLength={articles ? articles.length : 0}
      next={fetchMoreData}
      hasMore={true}
      loading={<div>Loading...</div>}
    >
      <div className={classes.Posts}>
        {articles.map((obj, index) => {
          return (
            <SinglePost
              key={index}
              name={obj.name}
              url={obj.url}
              description={obj.description}
              origin={obj.origin}
            />
          );
        })}
      </div>
    </InfiniteScroll>
    // <div>
    //   <SinglePost />
    //   <SinglePost />
    //   <SinglePost />
    // </div>
  );
}

export default Posts;
