import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { setIsLoggedIn } from "../../../app/store/login/action";
import "./scss/index.scss";

const Header = (props) => {

    return(
        <div className='row p-3 mx-0 header-div'>
            <div className='col-8 d-flex justify-content-start align-items-center'>
                <NavLink className={({ isActive }) => 
                      (isActive ? "active-link" : "not-active-link")} to='/'>Home</NavLink> &emsp;
                {props.isLoggedIn === true &&
                    <NavLink className={({ isActive }) => 
                    (isActive ? "active-link" : "not-active-link")} to='/favorites'>Favorites</NavLink>
                }
            </div>
            {
                props.isLoggedIn !== true &&
                <div className='col-4 d-flex justify-content-end '>
                    <button className='login-button px-5 py-2' onClick={()=> {
                        localStorage.setItem('isLoggedIn', true);
                        props.setIsLoggedIn(true);
                    }}>Login</button>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setIsLoggedIn
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);