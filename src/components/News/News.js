import React from "react";
import './News.css';


export default function News ({ news, isLoading, isError}) {
  return (
<div>
{  
    isError ? (<h4>Failed to load results, something went wrong ... </h4>) : (
    isLoading ? (
    <div className= "content">
     <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>) : (
   <ol>
    {news.hits.length!==0 ? (news.hits.map((newsPost) => (
          <li key={newsPost.title}>
              <a href= {newsPost.url} target= "blank">
              {newsPost.title}
              </a>
              <div> <span>{newsPost.points} points</span> | <span>{newsPost.author} | </span></div>
          </li>


        ))) : (<h4> No results match your search, please try again. </h4>)
        }
    </ol>
    )
    )
}
  </div>
);
}