import React, { useState } from 'react';
import logo from '../../image/wanted-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import {
    EnterPrise,
    Logo,
    MainMenu,
    MainMenuTitle,
    NavContainer,
    NavInner,
    SignUpLogin,
    SubMenu,
    Service,
} from '../../style/NavbarStyle';
import Dropdown from './Dropdown';

const mainMenu = [
    '탐색',
    '커리어 성장',
    '직군별 연봉',
    '이력서',
    '매치업',
    '프리랜서',
    'Ai 합격예측',
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <NavContainer>
                <NavInner>
                    <Logo>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </Logo>
                    <MainMenu onMouseOver={() => setToggle(true)}>
                        {mainMenu.map((menu, idx) => {
                            return (
                                <MainMenuTitle key={idx}>{menu}</MainMenuTitle>
                            );
                        })}
                    </MainMenu>
                    <Dropdown setToggle={setToggle} />
                    <SubMenu>
                        <SearchIcon />
                        <SignUpLogin>회원가입/로그인</SignUpLogin>
                        <Service>
                            <EnterPrise>기업 서비스</EnterPrise>
                        </Service>
                    </SubMenu>
                </NavInner>
            </NavContainer>
        </>
    );
};

export default Navbar;
