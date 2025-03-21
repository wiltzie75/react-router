import { useState, useEffect } from "react";

const Colors = () => {
    const [color, setColor] = useState("");
    const [error, setError] = useState(null);
    const [mystery, setMystery] = useState(false);

    useEffect(() => {
        async function fetchColors() {
            try {
                const response = await fetch("https://www.thecolorapi.com/random");
                const color = await response.json();
                console.log(color.rgb.value);
                setColor(color.rgb.value);
            } catch (error) {
                setError(error)
            }
        }
        fetchColors();
    }, [mystery]);

   function handleClick() {
        setMystery(!mystery)
        }
        
return ( 
    <>
        <div 
            className="mystery" 
            onClick={handleClick}
            style={{ backgroundColor: color, color: "white" }}
        >
            <h1>{`MYSTERY COLOR IS: ${color}`}</h1>
        </div>
    </>

 );

}

export default Colors;
