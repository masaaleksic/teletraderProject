import Header from '../../components/header';
import {useEffect} from "react";
import axios from "axios";
import {bindActionCreators} from "redux";
import {setHomeSymbols, setSymbolsData} from "../../../app/store/symbols/action";
import {connect} from "react-redux";
import MainTable from "../../components/mainTable";
import getSymbolDetails from "../../components/symbolDetails";
import { useState } from 'react';

const Home = (props) => {
    const {homeSymbols, symbolsData} = props;
    const [symobolData, setSymbolsData] = useState([]);
    const [homeSymbolsFetched, setHomeSymbolsFetched] = useState(false);

    
    useEffect(() => {
        (async ()=> {
            await axios.get('https://api.bitfinex.com/v1/symbols').then((resp) => {
                if (resp.status === 200) {
                    const firstFiveSymbols = [];
                    for (let i = 0; i < 5; i++) {
                        firstFiveSymbols.push(resp.data[i]);
                    }
                    props.setHomeSymbols(firstFiveSymbols);
                    setHomeSymbolsFetched(true);
                }
            });
        }) ();
    }, []);

    useEffect(() => {
        (async ()=> {
        if (props.homeSymbols.length > 0) {
            const array = await getSymbolDetails(props.homeSymbols);
            props.setSymbolsData(array);
        }
        }) ();
    }, [props.homeSymbols]);

    return (
        <>
            <Header/>
            <MainTable />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        homeSymbols: state.symbols.homeSymbols,
        symbolsData: state.symbols.symbolsData
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setHomeSymbols,
        setSymbolsData
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);