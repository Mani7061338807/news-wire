import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getNewsItemById } from '../store/action/index'
const ShowNews = () => {
  const newsStore = useSelector((state) => state.news);
	const dispatch = useDispatch();
	const { id } = useParams();
	

	useEffect(
		() => {
			dispatch(getNewsItemById(id));
		},
		[ dispatch, id ]
	);
  
  return (
    <React.Fragment>
    {newsStore.newsItem ? (
      <div className="article_container">
        <h1>{newsStore.newsItem.title}</h1>
        <div style={{ background: `url(https://picsum.photos/1920/1080)` }} className="image" />
        <div className="author">
          <span>Created By: {newsStore.newsItem.author} | </span>
          {/* <Moment format="YYYY/MM/DD">{newsStore.newsItem.createdAt}</Moment> */}
        </div>
        <div className="my-3 content">{newsStore.newsItem.body}</div>
        {/* <LinkContainer to={`/news/${newsStore.newsItem._id}/edit`}>
          <button className="btn btn-warning mb-4">Edit</button>
        </LinkContainer> */}
        {/* <button onClick={deleteNews} className="btn btn-danger mb-4 ms-3">
          Delete
        </button> */}
      </div>
    ) : null}
  </React.Fragment>
  ) 
}

export default ShowNews