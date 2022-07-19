import Style from '../assets/css/Title.module.scss';
import {Outlet} from "react-router-dom";

function Title() {
    return (
        <div className={Style.m30}>
            <h1 style={Style}>BLOG</h1>
          <div className="App-margin">
              <Outlet />
          </div>
        </div>
    )
}

export default Title;