import React, { FC, useEffect } from 'react';
import {CardInfo} from '../Components';
import { useActions } from '../../Hooks/useActions';
import { useTypedSelector } from '../../Hooks/useTypedSelector';



const Stories: FC = () => {
    const {getTopNews} = useActions();
    const { id } = useTypedSelector(state => state.stories)
    useEffect(()=>{
        getTopNews()

        console.log(id);
    },[])

    return <div>test</div>
}

export default Stories;