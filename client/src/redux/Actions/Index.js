import axios from "axios";
export const GET_ALL_PETS = "GET_ALL_PETS";
export const PET_DETAIL = "PET_DETAIL";

export function getAllPets() {
      return async dispatch => {
        const res = await axios.get(
            `http://localhost:3001/pets/getAllPets`
        );
 
        dispatch({ type: GET_ALL_PETS, payload: res.data });
      };
    }
    
export function getPetDetail(id) {
        return async dispatch => {
          const res = await axios.get(
            `/product/` + id || `http://localhost:3001//getPetById/` + id
          );
          dispatch({ type: PET_DETAIL, payload: res.data });
        };
      }
      export function clearProductDetail() {
        return {
          type: PET_DETAIL,
          payload: []
        };
      }