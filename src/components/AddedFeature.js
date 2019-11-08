import React from 'react';
import { connect } from 'react-redux';

// Actions
import { removeFeature } from '../actions';

const AddedFeature = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  removeFeature
}

export default connect(state => state, mapDispatchToProps)(AddedFeature);
