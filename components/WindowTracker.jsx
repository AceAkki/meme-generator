import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(()=> {
        function watch () {
            //console.log(window.innerWidth)
            setWindowWidth(window.innerWidth)
        }   
        window.addEventListener("resize", watch);

        return () => {
            window.removeEventListener("resize", watch)
        }
    }, [])
    return (
        <h1>
            Window width : {windowWidth}
        </h1>
    )
}