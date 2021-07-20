import styled from 'styled-components';

export const DropContainer = styled.div`
    width: 100%;
    max-height: 625px;
    position: absolute;
    top: 50px;
    left: 0;
    padding: 20px 0;
    background: #fff;
    z-index: 1;
    display: flex;
`;

export const DropInner = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    ul {
        display: block;
        width: 20%;
        margin-bottom: 4px;
    }
    }
`;

export const DropRow = styled.ul`
    display: block;
    width: 20%;
    margin-bottom: 4px;
`;

export const DropItem = styled.li`
    display: block;
    a {
        white-space: nowrap;
        line-height: 1.8;
        color: #999;
        font-size: 13px;
    }
`;
