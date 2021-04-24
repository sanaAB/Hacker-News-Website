import React, {useState} from "react";
import './SearchBar.css';

//import { Link } from "react-router-dom";


export default function SearchBar ({ news }) {
    const[inputValue, setInputValue] = useState( " ");

    function handleOnKeyDown({ keyCode}){
		if(keyCode === 13){
			compareInput();
		}
	}

    function handleInputValue({target}){
		setInputValue(target.value);
	}

  function compareInput(){
    let searchString = inputValue.toLowerCase().split(' ')
    console.log(news.hits.filter(string => {
        let containsAtLeastOneWord = false;
        // If at least a word is matched return it!
        searchString.forEach(word => {
            if (string.title.toLowerCase().includes(word))
                containsAtLeastOneWord = true;
        })
        if (containsAtLeastOneWord)
            return string
    }));

        // if(news.contains())
        // const results = news.filter()
  }

  return (
      <div>
              <input onKeyDown={handleOnKeyDown} onChange= {handleInputValue} type="text" placeholder="Search.."/>
              <button onClick = {compareInput}><i className = "fa fa-search"></i></button>
      </div>

)
}