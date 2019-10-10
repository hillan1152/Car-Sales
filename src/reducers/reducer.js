import { ADD_ITEM, REMOVE_ITEM } from '../actions/actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    
]};

export const reducer = ( state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        const { price } = action.payload;
        if (!state.car.features.includes(action.payload)) {
          return {
            ...state,
            additionalPrice: (state.additionalPrice += price),
            car: {
              ...state.car,
              features: [...state.car.features, action.payload]
            }
          };
        } else {
          return state;
        }
      }
    
      if (action.type === REMOVE_ITEM) {
        const { price, id } = action.payload;
        return {
          ...state,
          additionalPrice: (state.additionalPrice -= price),
          car: {
            ...state.car,
            features: state.car.features.filter(feature => feature.id !== id)
          }
        };
      }
      return state;
    };
    
    export default reducer;