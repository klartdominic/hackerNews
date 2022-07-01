import React, { FC } from 'react'
import '../CSS/index.css'
import StoryDetail from './StoryDetail';

interface Props {
    stories: number[];
}

const StoriesList: FC<Props> = ({stories}) => {
  return (
    <div className='stories'>
        {stories.map((story) => {
            console.log(story);
            return <StoryDetail story={story}/>
        })}
    </div>
  )
}

export default StoriesList
