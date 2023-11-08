import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import "./app.css";

const getUsers = async ({ pageParam = 0 }) => {
  console.log('pageParam');
  console.log(pageParam);
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
  );
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

const App = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getUsers,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }

      return lastPage.prevOffset + 10;
    },
  });
  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);
  
  if(data){
    console.log(data.pages);
  }

  return (
    <div>
      <h1>Hello monsterlessons</h1>

      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loading={<div>Loading...</div>}
      >
        <div>
          {articles &&
            articles.map((article, index) => (
              <div key={index} className="element">
                {article.title}
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;

//npm install react-infinite-scroll-component
//npm i @tanstack/react-query
