import React, {FC} from 'react'
import '../CSS/index.css'

interface Props {
    story: number
}

const StoryDetail: FC<Props> = ({story}) => {
  return (
    <div className='story'>
      { story }
    </div>
  )
}

export default StoryDetail
