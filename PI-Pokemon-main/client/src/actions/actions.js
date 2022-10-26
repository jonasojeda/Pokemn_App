export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const dataPokemons = await axios.get("http://localhost:3001/pokemons");  //Back
            return dispatch({
                type: 'GET_POKEMONS',
                payload: dataPokemons.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};