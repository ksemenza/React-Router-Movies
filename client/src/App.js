import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const isEquivalent = (a, b) => {
    // To check if two objects are the 'same':
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

  const addToSavedList = movie => {
    //Add movie to savedList if movie is not already in the list:
    if (!savedList.find(item => isEquivalent(item, movie))) {
    setSavedList( [...savedList, movie] );
    };
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
