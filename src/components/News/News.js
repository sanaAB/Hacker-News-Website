import React from "react";
import './News.css';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function News ({ news, isLoading, isError, setIsError}) {
  console.log(news);
  return (
<div>
{  
    isError ? (
        <Alert variant="danger"  onClose={() => setIsError(false)} dismissible>
          <div></div>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <h4>
          Failed to load results.
          Please reload the page and try again.

          </h4>
        </Alert>
      ) : (

    isLoading ? (
    <div className= "content">
     <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>) : (
   <ol>
    {news.hits.length!==0 ? (news.hits.map((newsPost) => (
          <li 
               key={newsPost.objectID}>
              <a href= {newsPost.url} target= "blank"> 
              {newsPost.title}
              </a>
              <div> <span>{newsPost.points} points |</span>  <span> author: {newsPost.author} |  </span> <span> comments: {newsPost.num_comments}   </span> </div>  
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



// <h4>Failed to load results, something went wrong ... </h4>