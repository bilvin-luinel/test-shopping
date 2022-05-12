import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ["TOP", "JUNGLE", "MID", "AD Carry", "Supporter", "HOT", "NEW", "SALE"];

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    const goToMain = () => {
        navigate("/");
    }
    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div className="loginButton" >
                <img className="loginIcon" src="img/icon_beginner.png" />
                {authenticate ? (<div className="loginText" onClick={()=>setAuthenticate(false)}>로그아웃</div>) : (<div className="loginText" onClick={goToLogin}>로그인</div>)}
            </div>

            <div className="logo">
                <img className="logo-img" src="img/logo.png" onClick={goToMain} />
            </div>

            <div className="menu-bar">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search">
                    <img src="img/icon_voice.png" />
                    <input type="text" placeholder="제품 검색" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar