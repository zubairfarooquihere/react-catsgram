import React, { useState, useEffect, useCallback } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { Responsive, WidthProvider } from "react-grid-layout";
import { useSelector, useDispatch } from "react-redux";
import { layoutActions } from "../../redux/Layout-slice";

import classes from "./Explore.module.scss";

import Post from "./Post";

const ResponsiveGridLayout = WidthProvider(Responsive);
function ExploreExplore() {
  const dispatch = useDispatch();
  const [Data, setData] = useState([]);
  const [Breakpoint, setBreakpoint] = useState("lg");

  const layoutObj = useSelector((state) => state.layout);
  const layout = layoutObj.layout;

  const onBreakpointChange = (gotBreakpoint) => {
    setBreakpoint(gotBreakpoint);
  };

  const storeLayoutAction = useCallback(
    //apiArr requires id;
    (apiArr) => {
      let xValue = 0;
      const postArr = apiArr.map((ele) => {
        let obj = { id: ele.id, x: xValue, y: 0 };
        xValue++;
        if (xValue === 3) {
          xValue = 0;
        }
        return obj;
      });
      dispatch(
        layoutActions.addLayout({
          postArr: postArr,
        })
      );
    },
    [dispatch]
  );

  const callApi = useCallback(async () => {
    try {
      //console.log("callApi");
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=21&api_key=live_wAYTx8wsqFf8YKTbmchPeDJOulEnsw82Hreznjr7sA4RykKLpkM2jk2l7KgZYbpz`
      );
      const data = await res.json();
      const newData = data.map((obj) => ({
        id: obj.id,
        url: obj.url,
      }));
      return newData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // rethrow the error for the calling function to handle
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arr = await callApi();
        setData((prev) => {
          return [...prev, ...arr];
        });
        storeLayoutAction(arr);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    fetchData(); // Call the async function
  }, [dispatch, storeLayoutAction, callApi]);

  const fetchMoreData = async () => {
    try {
      const arr = await callApi();
      setData((prev) => {
        const filteredArr = arr.filter((newItem) => {
          // Check if the item's id is already present in the previous data
          return !prev.some((prevItem) => prevItem.id === newItem.id);
        });

        return [...prev, ...filteredArr];
      });
      storeLayoutAction(arr);
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={Data ? Data.length : 0}
      next={() => {
        fetchMoreData();
      }}
      hasMore={true}
      loading={<div>Loading...</div>}
      style={{ overflow: "hidden" }}
    >
      <ResponsiveGridLayout
        layouts={layout}
        breakpoints={layoutObj["breakpoints"]}
        cols={layoutObj["cols"]}
        rowHeight={layoutObj["rows"][Breakpoint]}
        width={1200}
        onBreakpointChange={onBreakpointChange}
        className={classes.ExploreLayout}
        isDraggable={false}
        containerPadding={[0, 0]}
        margin={[3, 4]}
      >
        {Data.map((ele, index) => {
          return (
            <div data-grid={layout[Breakpoint][index]} key={ele.id}>
              <Post url={ele.url} />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </InfiniteScroll>
  );
}

export default ExploreExplore;
