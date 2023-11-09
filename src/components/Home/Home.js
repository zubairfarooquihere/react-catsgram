import React from 'react'
import classes from './Home.module.scss'

import Stories from './Stories'
import Posts from './Posts'

function Home() {
  return (
    <div className={classes.layout}>
        <div className={classes.stories}>
            <Stories />
        </div>
        <div className={classes.posts}>
            <Posts />
        </div>
    </div>
  )
}

export default Home