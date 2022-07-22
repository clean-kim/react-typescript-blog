import React from 'react';
import Style from '../assets/css/Title.module.scss';
import {Link, Outlet} from "react-router-dom";
import {Button} from "./Button";

function Main() {
    return (
        <div className={Style.m30}>
            <h1>
                <Link to={'/'} className={Style.title}>BLOG</Link>
            </h1>
            <React.Fragment>
                <Button />
            </React.Fragment>
          <div className="App-margin">
              <Outlet />
          </div>
        </div>
    )
}

export default Main;