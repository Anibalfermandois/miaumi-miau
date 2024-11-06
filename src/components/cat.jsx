import React from "react";

const Bird = ({ birdPosition }) => {

    return (
        <img
            src={"https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif"}
            alt="cat"
            className="cat"
            style={{
                left: birdPosition.x,
                top: birdPosition.y,
            }}
            draggable={false}
        />
    );
};

export default Bird;