import React, { useEffect, useState } from 'react'
import styles from './componentStyling.module.css'

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];

export default function AutoComplete(props) {
  const {options = indianStates} = props; //here options is an array of string
  const [searchText, setSearchText] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  // This active suggestion for CSS styling purpose to point current active option
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e) => {
    setSelectedValue('')
    setSearchText(e?.target?.value);
  }

  useEffect(() => {
    if(searchText && !selectedValue){
      setShowModel(true);
      const filter = options.filter(option => option?.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1);
      setFilteredSuggestions(filter);
    }
    else{
      setShowModel(false);
    }
  },[searchText])

  const handleOnClick = (e) => {
    setSearchText(e.target.innerText);
    setSelectedValue(e.target.innerText);
    setShowModel(false)
    setActiveSuggestionIndex(0)
  }

  //handle for selecting option via key using Enter, and moving on option using UP DOWN Arrow
  const handleOnKeyDown = (e) => {
    console.log({filteredSuggestions,activeSuggestionIndex,keyCode: e.keyCode})
    if (e.keyCode === 13) { // enter key
      setSearchText(filteredSuggestions[activeSuggestionIndex]);
      setSelectedValue(filteredSuggestions[activeSuggestionIndex]);
      setShowModel(false);
      setActiveSuggestionIndex(0)
    } else if (e.keyCode === 38) { // up arrow key
      setActiveSuggestionIndex(prevActiveSuggestionIndex => {
        if(prevActiveSuggestionIndex > 0){
          return prevActiveSuggestionIndex - 1;
        }
        else{
          return filteredSuggestions.length - 1 ;
        }
      })
    } else if (e.keyCode === 40) { // down arrow key
      setActiveSuggestionIndex(prevActiveSuggestionIndex => {
        if(prevActiveSuggestionIndex < filteredSuggestions.length - 1){
          return prevActiveSuggestionIndex + 1;
        }
        else{
          return 0;
        }
      })
    }
  }

  return (
    <>
        <div className={styles.flexContainer} onClick={()=>setShowModel(false)}>
            <h3>Auto Complete Search</h3>
            <input 
              type='text' 
              placeholder='search state' 
              className={styles.input}
              onChange={handleChange}
              onKeyDown={handleOnKeyDown}
              value={searchText}
            />
            {showModel && <ul className={styles.ul}>
                {filteredSuggestions.map((option, index) => (
                  <li 
                    key={index}
                    className={styles.li} 
                    style={index === activeSuggestionIndex ? activeStyle.activeSuggestion : {}}
                    onClick={handleOnClick}>
                    {option}
                  </li>
                ))
                }
            </ul>}
        </div>
    </>
  )
}

const activeStyle = {
  activeSuggestion :{
    backgroundColor: 'rgb(224, 224, 224)'
  }
}