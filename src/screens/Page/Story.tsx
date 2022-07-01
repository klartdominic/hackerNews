import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../Hooks/useActions';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import '../CSS/index.css';
import { StoriesList } from '../Components';



const Stories: FC = () => {
    const { getTopNews } = useActions();
    const { topStories } = useTypedSelector(state => state.stories)
    const [stories , setStories] = useState<number []>([])

    useEffect(()=>{
        getTopNews()
    },[])

    useEffect(()=>{
        if(topStories){
            setStories(getMultipleRandom(topStories, 10));
        }
    },[topStories])

    const getMultipleRandom = (arr:number[], num: number) => {
        const shuffled = [...arr].sort(()=> 0.5 - Math.random()) ;

        return shuffled.slice(0, num);
    }

    return <div className='container'>
        <span className='headertitle'>Hacker News</span>
        <StoriesList stories={stories} />
    </div>
}

export default Stories;