import React, {useState} from 'react';

type currencyType = "all" | "RUBLS" | "Dollars";
const MicroTaskFilter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filtredCur, setFiltredCur] = useState<currencyType>("all")


    function onClickFilterHandler(cur: currencyType) {
        // if(cur === "all") setFiltredCur(money);
        // if(cur === "RUBLS") setFiltredCur(money.filter(c => c.banknots ===  cur));
        // if(cur === "Dollars") setFiltredCur(money.filter(c => c.banknots ===  cur));
        setFiltredCur(cur);
    }

    let currentMoney = money;
    if(filtredCur === "RUBLS") currentMoney = currentMoney.filter(c => c.banknots ===  filtredCur);
    if(filtredCur === "Dollars") currentMoney = currentMoney.filter(c => c.banknots ===  filtredCur)

    return (
        <>
            <ul>
                {currentMoney.map((cur, index) => (
                    <li key={index}>
                        <span>{cur.banknots}</span><span>{cur.value}</span><span>{cur.number}</span>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler("all")}>All</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>RUB</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>USD</button>
            </div>
        </>
    )
};

export default MicroTaskFilter;