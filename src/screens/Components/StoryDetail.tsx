import React, {FC, useEffect, useState} from 'react'
import '../CSS/index.css'
import { StoriesResponseModel, UsersResponseModel } from '../../Models/index'
import { useTypedSelector } from '../../Hooks/useTypedSelector';

interface Props {
    story: StoriesResponseModel | undefined,
    user: UsersResponseModel | undefined
}

const StoryDetail: FC<Props> = ({story, user}) => {
    console.log('user',user)
    
  return (
    <div className='story'>
        <li className='story__container'>
            <div className='story__header_title'>Title: </div>
            <div className='story__header_body'>{story?.title}</div>
        </li>
        <li className='story__container'>
            <div className='story__header_title'>Url: </div>
            <div className='story__header_body'>{story?.url}</div>
        </li>
        <li className='story__container'>
            <div className='story__header_title'>Time: </div>
            <div className='story__header_body'>{story?.time}</div>
        </li>
        <li className='story__container'>
            <div className='story__header_title'>Score: </div>
            <div className='story__header_body'>{story?.score}</div>
        </li>
        <li className='story__container'>
            <div className='story__header_title'>Author Id: </div>
            <div className='story__header_body'>{user?.id}</div>
        </li>
        <li className='story__container'>
            <div className='story__header_title'>Author Karma Score: </div>
            <div className='story__header_body'>{user?.karma}</div>
        </li>
    </div>
  )
}

export default StoryDetail
