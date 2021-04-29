import React from "react";
import './News.css';
//import { Link } from "react-router-dom";


export default function News ({ news, isLoading }) {
  return (
  <div>
{    isLoading ? (
    <div>
     <p> Loading news ...</p>
     <i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>) : (
   <ol>
    {news.hits.length!==0 ? (news.hits.map((newsPost) => (
          <li key={newsPost.title}>
              <a href= {newsPost.url} target= "blank">
              {newsPost.title}
              </a>
              <div> <span>{newsPost.points} points</span> | <span>{newsPost.author} | </span></div>
          </li>


        ))) : (<p> Empty respone </p>)
        }
    </ol>
    )}
  </div>
);
}