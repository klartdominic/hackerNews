import React, { FC, useEffect } from 'react';
import { useActions } from '../../Hooks/useActions';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import '../CSS/index.css';
import { StoriesList } from '../Components';



const Stories: FC = () => {
    const { getTopNews, getItems, getUsers } = useActions();
    const { topStories, stories, isUsersDone, isDone, isItemsDone } = useTypedSelector(state => state.stories)

    useEffect(() => {
        getTopNews();
    }, []);

    useEffect(()=>{
        if(topStories && isDone){
            getItems([...topStories]);
        }
    }, [topStories , isDone])

    useEffect(()=>{
        if(stories.length){
            if(stories.length === topStories.length ){
                getUsers([...stories])
            } 
        }
        
    },[stories, isItemsDone])


    return <div className='container'>
        <span className='headertitle'>Hacker News</span>
        {isUsersDone && <StoriesList stories={stories} />}
    </div>
}

export default Stories;