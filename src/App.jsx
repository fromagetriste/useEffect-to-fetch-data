import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      // on prend la data reçue et on update le state user avec le setUser et la data reçue en argument
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
    // console.log(user.results); après avoir setUser, on peut s'assurer de la data reçue en console.log(user)
  };

  useEffect(() => {
    fetchData();
  }, []); // les [] sont la dependency array, le composant App() fera un re-render à chaque fois que la valeur de la dependency array change. On peut laisser vide, comme dans le cas présent

  // si la length de l'array retournée par la méthode Object (ici, user) est égale à 0, il n'y a aucun user
  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>
        Name : {user.results[0].name.first} {user.results[0].name.last}{" "}
      </h2>
      <img src={user.results[0].picture.large} alt="user's profile picture" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

// ________________________________________________________________________
// For information, we use the Object.keys() method to return an array with the keys of an object.
// Object.keys(object) works on objects and also on strings

// An other example,

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);
// Object.keys() returns an enumerable array of the keys of an object:
// output :
// 0,1,2,3

//More info at https://www.w3schools.com/jsref/jsref_object_keys.asp
// ________________________________________________________________________
