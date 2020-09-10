import React, { useState, useEffect }from "react";

const Walker = (props) => {
    const [walker, setWalker] = useState({
        "name": "",
        "height": "",
        "mass": "",
        "hair_color": "",
        "skin_color": "",
    });
    
    const searchWalker = () => {
        fetch(`https://swapi.dev/api/people/${props.id}`)
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setWalker({
                "name": response.name,
                "height": response.height,
                "mass": response.mass,
                "hair_color": response.hair_color,
                "skin_color": response.skin_color,
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
        <h1>{ walker.name }</h1>
        <h3>Height: { walker.height }</h3>
        <h3>Mass: { walker.mass }</h3>
        <h3>Hair Color: { walker.hair_color }</h3>
        <h3>Skin Color: { walker.skin_color }</h3>
    </div>
    )
};

export default Walker;