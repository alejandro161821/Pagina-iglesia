import React from "react";
import "./Header.css";
/*import logo from "";*/
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




function Header(){

    return(
        <div className="header">
          <div className="header__left">
            
            {/*<img src={logo} alt=""/>*/}

            <div className="header__input">
              <SearchIcon />
            <input placeholder="Buscar" type="text"/>
            </div> 
          </div>
    
        <div className="header__center">
            <div className="header__option header__option__active">
              <HomeIcon fontSize="large"/>
            </div>

            <div className="header__option">
              <FlagIcon fontSize="medium"/>
            </div>

            <div className="header__option">
              <SubscriptionsIcon fontSize="medium"/>
            </div>

            <div className="header__option">
              <ArrowDownwardIcon fontSize="Medium"/>
            </div>

            <div className="header__option">
              <SupervisorAccountIcon fontSize="Medium"/>
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
              <Avatar />
                <h4>Alejandro</h4>
            </div>
              <IconButton>
                <AddIcon />
              </IconButton>

              <IconButton>
                <ForumIcon />
              </IconButton>

              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>

              <IconButton>
                <ExpandMoreIcon/>
              </IconButton>
          </div>
        </div>
    )
}

export default Header;