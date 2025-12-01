import { useState } from "react"

export default function Section () {
    let [meme, setMeme] = useState({
        topTxt:"One does not simply",
        bottomTxt:"Walk into Mordor",
        imageURL:"http://i.imgflip.com/1bij.jpg"
    });


    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMeme(old => {
            return {
                ...old,
                [name]:event.target.value
            }
        })
    }
    return (
        <>
            <section className="meme-sec">
                <div className="form">
                    <label>
                        Top Text
                        <input 
                            type="text"
                            placeholder="One does not simply"
                            name="topTxt"
                            onChange={handleChange}
                            value={meme.topTxt}
                        />
                    </label>
                    <label>
                        Bottom Text
                        <input 
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomTxt"
                            onChange={handleChange}
                            value={meme.bottomTxt}
                        />
                    </label>
                    <button> Get a new Meme Image  </button>

                </div>
                <div className="meme">
                    <img src={meme.imageURL} alt="" />
                    <span className="top">{meme.topTxt}</span>
                    <span className="bottom">{meme.bottomTxt}</span>
                </div>

            </section>
        </>
    )
}