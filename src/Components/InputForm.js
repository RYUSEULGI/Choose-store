import React from 'react';


function InputForm() {
    return (
        <form>
            <input type="text" />
            <button type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" id="filter">
                    <option value="all">전체보기</option>
                    <option value="complete">완료</option>
                    <option value="ing">진행중</option>
                </select>
            </div>
        </form>
    );
}

export default InputForm;
