import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    getAllPets,
  
  // addProductToDBCart
} from "../../Actions/Index";
import Pets from "../Pets/pet";

function AllPets({ pets, GetPets,  }) {
  // const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    GetPets();
  }, [GetPets]);

  

  return (
    <div>
      <div className="catalogo">
        {pets.length ? (
          pets.map(p => {
            return (
              <div key={p.id}>
                <Pets
                  id={p.id}
                  name={p.name}
                  img={p.img}
                  mascota={p.mascota}
                  peso={p.peso}
                  descripcion={p.descripcion}
                  provincia={p.provincia}
                  ciudad={p.ciudad}
                  genero={p.genero}
                  edad={p.edad}
                />
              </div>
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pets: state.getAllPets,
  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetPets: () => dispatch(getAllPets()),
   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPets);
