import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <>
        <div class="Header">
        <p class='headname'>掲示板<Link to="/thread/new">スレッド作成</Link></p>
        </div>
        </>
      )
    }
    
    export default Header