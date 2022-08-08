import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { setSymbolsData } from "../../../app/store/symbols/action";
import { connect } from "react-redux";
import MainTable from "../../components/mainTable";
import getSymbolDetails from "../../components/symbolDetails";
import Header from '../../components/header';
import "./scss/index.scss";
import { useState } from "react";

const Detail = (props) => {

    const { symbolsData, selectedSymbol, isLoggedIn } = props;
    const [favorite, setFavorite] = useState('');

    const addToFavorites = () => {
        const array = localStorage.getItem('favoriteSymbols');
        const favoriteSymbols = array ? JSON.parse(array) : [];
        favoriteSymbols.push(selectedSymbol);
        localStorage.setItem('favoriteSymbols', JSON.stringify(favoriteSymbols));
        setFavorite(true);
    }

    const removeFromFavorites = () => {
        const array = localStorage.getItem('favoriteSymbols');
        const favoriteSymbols = array ? JSON.parse(array) : [];
        const index = favoriteSymbols.indexOf(selectedSymbol);
        if (index > -1) {
            favoriteSymbols.splice(index, 1);
        }
        localStorage.setItem('favoriteSymbols', JSON.stringify(favoriteSymbols));
        setFavorite(false);
    }

    const favv = localStorage.getItem('favoriteSymbols');
    const favoriteSymbols = favv ? JSON.parse(favv) : [];

    const item = symbolsData.find((item) =>
        item.name === selectedSymbol
    );
    
    const isFavorite = favoriteSymbols.includes(selectedSymbol);

    useEffect(()=>{
        setFavorite(isFavorite);
    },[]);

    return (
        <>
            <Header />
            <div className="mx-3">
                <table className="detail-table">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th className="align-right">Last</th>
                            <th className="align-right">High</th>
                            <th className="align-right">Low</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item &&
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.data.last_price}</td>
                                <td>{item.data.high}</td>
                                <td>{item.data.low}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {
                (isLoggedIn && favorite) &&
                <button onClick={()=>removeFromFavorites()} className="remove-btn mt-4 ms-3 px-3 py-2">Remove from favorites</button>
            }
            {
                (isLoggedIn && !favorite) &&
                <button onClick={()=>addToFavorites()} className="add-btn mt-4 ms-3 px-3 py-2">Add to favorites</button>
            }
        </>);
}

const mapStateToProps = (state) => {
    return {
        symbolsData: state.symbols.symbolsData,
        selectedSymbol: state.symbols.selectedSymbol,
        isLoggedIn: state.login.isLoggedIn
    };
};

export default connect(
    mapStateToProps
)(Detail);