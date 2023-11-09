import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import classes from "./Posts.module.scss";

import SinglePost from "./SinglePost";

const getUsers = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_wAYTx8wsqFf8YKTbmchPeDJOulEnsw82Hreznjr7sA4RykKLpkM2jk2l7KgZYbpz`
  );
  const data = await res.json();
  return { ...data, pageParam };
};

function Posts() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    getNextPageParam: (lastPage, allPages, context) => {
      console.log(allPages);
      console.log(context);
      return lastPage.pageParam + 10;
    },
    config: {
      staleTime: Infinity, // Set to a large value to prevent automatic refetching
    },
  });

  let articles = [];
  if (data) {
    const newData = data.pages.map((element) => {
      const arr = Object.values(element);
      arr.splice(arr.length - 1, 1);
      return arr;
    });
    //console.log(newData);
    articles = newData.flatMap((page) =>
      page.map((cat) => ({ id: cat.id, name: cat['breeds'][0].name, origin: cat['breeds'][0].origin, url: cat.url, description: cat['breeds'][0].description}))
    );
  }
  //console.log(articles);

  return (
    <InfiniteScroll
      dataLength={articles ? articles.length : 0}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loading={<div>Loading...</div>}
    >
      <div className={classes.Posts}>
        {articles.map((obj, index)=>{
          return (<SinglePost
            key={index}
            name={obj.name}
            url={obj.url}
            description={obj.description}
            origin={obj.origin}
          />);
        })}
      </div>
    </InfiniteScroll>
  );
}

export default Posts;
