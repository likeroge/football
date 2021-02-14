import {useEffect, useState} from 'react'
import {fetchData} from '../api'
import { MatchesList } from '../components/MatchesList'

export const TodaysMatchesContainer = () => {
    const [todaysMatches, setTodaysMatches] = useState([])
    
    //Fetch all todays matches
    useEffect(()=>{
        (async ()=> {
            const fetchedData = await fetchData('matches')
            setTodaysMatches(fetchedData.matches)
        })()
    }, [])

    return (
        <MatchesList matches={todaysMatches}/>
    )
}
