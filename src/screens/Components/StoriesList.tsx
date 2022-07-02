import React, { FC, useEffect, useState } from 'react'
import '../CSS/index.css'
import StoryDetail from './StoryDetail';
import { useTypedSelector} from '../../Hooks/useTypedSelector';
import {  StoriesResponseModel, UsersResponseModel } from '../../Models/index'


interface Props {
    stories: StoriesResponseModel[];
}

const StoriesList: FC<Props> = ({stories}) => {
    const [sortedStories, setSortedStories ] = useState<StoriesResponseModel[]>([]);
    const { users } = useTypedSelector(state => state.stories)


    useEffect(()=>{
        setSortedStories(
            stories.sort((a,b) => (a.score > b.score) ? 1 : -1)
        )
    },[stories])
    

    return (
        <div className='stories'>
            {sortedStories.map((story) => {
                const user = users.find((userItem)=> userItem?.id === story?.by);
                // const user = usersData.find((userItem) => {return userItem.id === story?.by});
                console.log('user loop',user,'users', users,'stoyr', story)
                return <StoryDetail story={story} user={user}/>
            })}
        </div>
    )
}

export default StoriesList
