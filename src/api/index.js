import axios from "axios"

const token = process.env.REACT_APP_API_KEY
const apiUrl = 'http://api.football-data.org/v2/'
const headers = {'X-Auth-Token':token}


//only for free account
export const availableLeagues = ['2000','2001','2002','2003','2013','2014','2015','2016','2017','2018','2019','2021']


export const fetchData = async (requestedData) => {
    const dataUrl = apiUrl + requestedData
    const {data} = await axios.get(dataUrl, {headers})
    return data
}