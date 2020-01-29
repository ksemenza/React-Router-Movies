import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {
  //console.log(props);
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      return movie;
    })}
    <div className="home-button"><NavLink to='/'>Home</NavLink></div>
  </div>
)};

export default SavedList;
