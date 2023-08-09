const URL = "https://api.thecatapi.com/v1/images/search"


// creamos el fetch aquí por si en algún momento necesitamos el servicio del componente 


export const getInitialCat = async () => {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}