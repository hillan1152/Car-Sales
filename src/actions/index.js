// Action Types
export const ADD_FEATURE = "ADD_FEATURE"; 

// Action Creators
export const addFeature = feature => ({
        type: ADD_FEATURE,
        payload: feature
})