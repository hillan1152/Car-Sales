import React from 'react';
import { connect } from 'react-redux';

//Actions
import { addFeature } from '../actions';

const AdditionalFeature = props => {
  const buyItem = item => {
    props.addFeature(item)
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {buyItem(props.feature.id)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addFeature,
}

export default connect(state => state, mapDispatchToProps)(AdditionalFeature);
