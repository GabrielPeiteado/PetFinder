import { React } from "react";

import { Link } from "react-router-dom";

const Pets = ({ name, mascota, peso, descripcion, provincia, ciudad, genero, edad, img, id }) => {
  // let productsFavourite = useSelector((state) => state.productFavourite);

  let history = useHistory();


  return (
    <div className="row center">
      <div key={name} className="pet">
        <Link to={`/pet-detail/${id}`}>
          <img className="image_product" src={`${img}`} alt="error" />
        </Link>
        <div className="pet__data">
          <h3 onClick={() => {  window.scroll({
          top: 100,
          left: 100,
          behavior: 'smooth'
         });history.push(`/pet-detail/${id}`)}}>{name}</h3>
          <br /> 
          <p>{mascota}</p>
          <p>{peso}</p>
          <p>{descripcion}</p>
          <p>{provincia}</p>
          <p>{ciudad}</p>
          <p>{genero}</p>
          <p>{edad}</p>
         

          <br />
          
        </div>
      </div>
    </div>
  );
};

export default Pets;
