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
    ]
  };

  export const carReducer = (state = initialState, action) => {
      console.log('Reducer Workin', state.car.features)
      switch(action.type){
          case "ADD_FEATURE":
              console.log('Add feature payload', action.payload)
              const feature = state.store.find(item => item.id === action.payload)
              return {...state, 
                     additionalPrice: (state.additionalPrice + feature.price),
                     car: {...state.car, features: [...state.car.features, feature]},}
          case "REMOVE_FEATURE":
                console.log('Removing Feature', action.payload)
                return{
                    ...state,
                    additionalPrice: (state.additionalPrice - action.payload.price),
                    car: {...state.car,
                    features: state.car.features.filter(item => { return item.id !== action.payload.id})},
                    store:[...state.store]    
                }
          default:
              return state
      }
  }

