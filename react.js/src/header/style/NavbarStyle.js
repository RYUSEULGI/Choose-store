import styled from 'styled-components';

export const NavContainer = styled.nav`
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid rgb(155, 151, 151);
    z-index: 9999;
`;

export const NavInner = styled.ul`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        margin: 0 auto;
        height: 50px;
        width: 90%;
        padding: 5px;
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        height: 50px;
        width: 90%;
    }
`;

export const Logo = styled.li`
    height: 50px;
    width: 15%;
    a {
        img {
            margin-top: 15px;
            width: 75px;
        }
    }
`;

export const MainMenu = styled.li`
    text-align: center;
`;

export const MainMenuTitle = styled.a`
    padding: 20px 20px 12px 20px;
    font-size: 14px;
    :hover {
        border-bottom: 4px solid #36f;
    }
`;

export const SubMenu = styled.li`
    width:24%;
    display: flex,
    justify-content: space-between,
    align-items: center,
`;

export const SignUpLogin = styled.button`
    position: relative;
    padding: 5px 8px;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
`;

export const Service = styled.button`
    position: relative;
    padding: 5px 8px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const EnterPrise = styled.div`
    padding: 5px 10px;
    border: 1px solid rgb(155, 151, 151);
    border-radius: 20px;
    color: #666;
    font-size: 14px;
`;
