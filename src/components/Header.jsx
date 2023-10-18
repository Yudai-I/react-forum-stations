import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <>
        <div className="Header">
        <span className='ThreadsPage'>掲示板</span>
        <span className="newthread"><Link to="/thread/new">スレッド作成</Link></span>
        </div>
        </>
      )
    }
    
    export default Header