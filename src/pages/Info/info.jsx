const Info = ({ myAnimals }) => {
  console.log(myAnimals.nombre);

  return (
    <div>
      <p>Nombre: {myAnimals.nombre} </p>

      <p>Nombre: {myAnimals.edad} </p>
      <p>Raza: {myAnimals.raza}</p>
      <p>Raza: {myAnimals.desc}</p>
      <img src={`/images/${myAnimals.imagen}`} alt="perros" />
    </div>
  );
};

export default Info;
