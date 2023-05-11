import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getnewsItems } from "../store/action";
import Masonry from "react-masonry-css";
import {LinkContainer} from 'react-router-bootstrap'

import { Button } from "react-bootstrap";
const Home = () => {
  const newsItem = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getnewsItems());
  }, [dispatch]);

  return (
    
    <React.Fragment> 
      <Masonry breakpointCols={3} className="my-masonry-grid"  columnClassName="my-masonry-grid_column">
        {newsItem.news?
         newsItem.news.map((item)=>(
          <div key={item.id}>
            <img src="https://picsum.photos/700" alt="" style={{width:'100%',height:'250px'}}/>
            <div className="author">
								<span>{item.author}</span>
							</div>
							<div className="content">
								<div className="title">{item.title}</div>
								<div className="excerpt">{item.body}</div>
								<LinkContainer to={`/news/${item.id}`}>
									<Button variant="dark" className="mt-3">
										Read More
									</Button>
								</LinkContainer>
							</div>
          </div>
         ))
        :null}
      </Masonry>
    </React.Fragment>
  );
};

export default Home;
