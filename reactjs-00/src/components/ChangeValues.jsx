import React, { useState } from "react";

function ShowAndHide() {
    const [show, SetShow] = useState(false);

    const handleClick = (e) => {
        SetShow(!show);
    };

    return (
        <div>
            <button onClick={handleClick}>{show ? "Ocultar texto" : "Mostrar texto"}</button>
            {show && <h2>¡Ocúltame!</h2>}
        </div>);
}

export default ShowAndHide;