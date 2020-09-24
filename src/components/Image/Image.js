import React from 'react';

const Image = (props) => {

    const pokeImageURL = props.pokeImageURL;
    
    return(
        <div className="Image">
            <img src={pokeImageURL} />
        </div>
    );
}

export default Image;