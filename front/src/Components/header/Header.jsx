import "../header/Header.css";
import logo from '../../Assets/argentBankLogo.png'
import User from "../../Assets/user.svg";
//import SignOut from "../../Assets/sign-out.svg";
import { Link } from 'react-router-dom';


const Header =() =>{
  return(
    <div className="headerWrapper">
  
    <Link to="/">
        <img src={logo} alt="Argent Bank logo" className="logo"/>
    </Link>
    
   
    <div className={"authentication-links"}>
  
            <div className="sign">
                <img className="userIcon" src={User} alt="User icon" />
                <Link to="/signIn">Sign In</Link>
            </div>
       
     
           {/* <div className="signOut">
                <img className="iconSignOut" src={User} alt="User icon"/>
                <Link className="userName" to="/user">{'Your Account'}</Link>
                <img className="iconSignOut" src={SignOut} alt="Icon sign-out"/>
                {/* Lien qui déclenche la déconnexion 
                <Link to="/" >Sign Out</Link>
            </div>*/}
    
    </div>
</div>
);
};
export default Header;