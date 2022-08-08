import {useEffect} from "react";
import {bindActionCreators} from "redux";
import {setSymbolsData} from "../../../app/store/symbols/action";
import {connect} from "react-redux";
import MainTable from "../../components/mainTable";
import getSymbolDetails from "../../components/symbolDetails";
import Header from '../../components/header';

const Favorites = (props) => {
    const {symbolsData} = props;

    const favv = localStorage.getItem('favoriteSymbols')
    const favoriteSymbols = JSON.parse(favv);

    useEffect(() => {
        (async ()=>{
            if (favoriteSymbols !== null && favoriteSymbols.length > 0) {
                const array = await getSymbolDetails(favoriteSymbols);
                props.setSymbolsData(array);
            } else {
                props.setSymbolsData([]);
            }
        })();
        const interval = setInterval(() => {
            (async ()=>{
                if (favoriteSymbols !== null && favoriteSymbols.length > 0) {
                    const array = await getSymbolDetails(favoriteSymbols);
                    props.setSymbolsData(array);
                } else {
                    props.setSymbolsData([]);
                }
            })()
        }, 10000)
          clearInterval(interval);
    }, []);

    return (
        <>
            <Header/>
            <MainTable/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        symbolsData: state.symbols.symbolsData
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setSymbolsData
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);