import axios from 'axios';

const url ='https://covid19.mathdro.id/api'
export const fetchData = async() => {
    try {
        const { data :{confimed, recovered, deaths, lastUpdate }} = await axios.get(url)

        return {confimed, recovered, deaths, lastUpdate }
        //console.log(response)
       
    } catch (error) {
        console.log('Something Went Wrong')
        console.log(error)
    }
}