import React from 'react'

export const PostsCard = ( {item}  ) => {
  return (
    <>
        <div className="card m-1">
            <div className='card-header'>
                {item.user_name}
            </div>
            <div className='card-body'>
                {item.description}
            </div>

        </div>
    </>
  )
}