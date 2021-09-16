import{
    PET_DETAIL,
    GET_ALL_PETS
} from "../Actions/Index";

const initialState = {
    getAllPets: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_PETS: {
            return {
              ...state,
              getAllProducts: action.payload
            };
        }
        case PET_DETAIL: {
            return {
              ...state,
              petDetail: action.payload
            };
          }
          default: {
            return state;
          }
    }
    

}
export default rootReducer;