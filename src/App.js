import React, { useReducer } from 'react';
import { connect } from 'react-redux';


//Reducers
import { addFeature } from './actions';

//Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';






const App = (state) => {
  console.log(state)
  const removeFeature = item => {
    // dispatch an action here to remove an item
    
  };

  const buyItem = item => {
    state.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeature
}


const mapStateToProps = state => {
  console.log('Map', state); 
  return {
        car: state.car,
        store: state.store, 
        additionalPrice: state.additionalPrice
    }    
}

export default connect(mapStateToProps, {mapDispatchToProps})(App);
