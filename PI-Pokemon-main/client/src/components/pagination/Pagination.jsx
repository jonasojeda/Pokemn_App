import React,{ useState } from 'react'

export default function Pagination({ totalPoke, setPokeCurrent }) {

    const cards = 12;
    const [currentPag, setCurrentPag] = useState(0);


    const next = () => {
        const totalPokemons = totalPoke.length
        const next = currentPag + 1
        const index = next * cards
        if (index > totalPokemons) return;
        setPokeCurrent([...totalPoke].splice(index, cards))
        setCurrentPag(next)
    };

    const prev = () => {
        const prev = currentPag - 1
        if (prev < 0) return;
        const index = prev * cards
        setPokeCurrent([...totalPoke].splice(index, cards))
        setCurrentPag(prev)
    };

  return (
    <div>
        <div>
        <button onClick={()=>prev()}>Prev</button>
                <label> {currentPag + 1}  </label>
                <button onClick={()=>next()}>Next</button>
        </div>
    </div>
  )
}

