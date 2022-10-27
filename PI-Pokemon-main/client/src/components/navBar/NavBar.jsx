import React from 'react'

export default function NavBar() {
    const dispatch = useDispatch();
  return (
    <div>
        <header className='navBar'>
            <div className='return'>
                <Link to={'/main'}> <img src={pokebola} alt="pokepola" height='70' width='70' /></Link>
            </div>
            <div>
                <Link to={'/home'}>
                    <button className='homeButton' type="button" onClick={() =>dispatch(getPokemons())}>
                    <img className = 'imgHome'
                        src={Logo}
                        width={290}
                        height={210}
                        alt="PruebaInicio" />
                    </button>
                    
                </Link>
            </div>
            <div>
                <Button link={'/create'} name={"Create"} classname={"secundary"}/>
            </div>
        </header>
    </div>
  )
}
