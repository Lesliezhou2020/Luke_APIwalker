import React, { useState, useEffect } from "react";

const Planet = (props) => {
    const [planet, setPlanet] = useState({
        "name": "",
        "climate": "",
        "terrain": "",
        "surface_water": "",
        "population": ""
    });

    const searchWalker = () => {
        fetch(`https://swapi.dev/api/planets/${props.id}`)
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPlanet({
                "name": response.name,
                "climate": response.climate,
                "terrain": response.terrain,
                "surface_water": response.surface_water,
                "population": response.population,
            })
        }).catch(err=>{
            console.log(err);
        });
    };

    useEffect(() => {
        searchWalker();
    }, [props.id]);


    return(
        <div>
            <h1>{ planet.name }</h1>
            <h3>Climate: { planet.climate }</h3>
            <h3>Terrain: { planet.terrain }</h3>
            <h3>Surface Water: { planet.surface_water }</h3>
            <h3>Population: { planet.population }</h3>
        </div>
        )
};

export default Planet;