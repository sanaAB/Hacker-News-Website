import React, {useState} from "react";
import './SearchBar.css';


export default function SearchBar ({ news, query, setQuery, seturl }) {
    const [inputValue, setInputValue] = useState(" ");
    function handleOnKeyDown({ keyCode, target}){
		if(keyCode === 13){
     console.log("from enter key");
    setQuery(inputValue)
		}
	}

function handleInputValue({target}){
		setInputValue(target.value);
	}

  return (
      <div>
              <input onChange={handleInputValue} onKeyDown = {handleOnKeyDown}    type="text" placeholder="Search.."  />
              <button  onClick = {() => setQuery(inputValue)} ><i className = "fa fa-search"></i></button>
      </div>

)
}
























// const filteredArray = [];





  // function compareInput(){
  //   let searchString = inputValue.toLowerCase().split(' ')
  //   news.hits.filter(string => {
  //       let containsAtLeastOneWord = false;
  //       // If at least a word is matched return it!
  //       searchString.forEach(word => {
  //           if (string.title.toLowerCase().includes(word))
  //               containsAtLeastOneWord = true;
  //       })
  //       if (containsAtLeastOneWord){
  //           filteredArray.push(string);
  //       }

  //   }
  //   );
  //   console.log("string is ", filteredArray)

  //   return filteredArray;

  // }



//<input onKeyDown={handleOnKeyDown} onChange={event => setQuery(event.target.value)}  type="text" placeholder="Search.." value= {query}/>
//onChange={event => setQuery(event.target.value)}
