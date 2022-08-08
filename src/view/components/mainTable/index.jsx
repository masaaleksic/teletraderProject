import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { setSelectedSymbol } from "../../../app/store/symbols/action";
import "./scss/index.scss";

const MainTable = (props) => {
    return (
        <div className="mx-3">
            <table className="main-table">
                <thead>
                    <tr>
                        <th className="ps-3">Name</th>
                        <th className="align-right">Last</th>
                        <th className="align-right">Change</th>
                        <th className="align-right">Change Percent</th>
                        <th className="align-right">High</th>
                        <th className="pe-3 align-right">Low</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.symbolsData?.map((item, index) => {
                            const change = (item.data.high - item.data.low).toFixed(5);
                            const changePercent = (change/100).toFixed(2);
                            return (
                                <tr key={index}>
                                    <td onClick={() => props.setSelectedSymbol(item.name)} className="ps-3"><Link to={'/detail'} className="symbol-link-text">{item.name}</Link></td>
                                    <td>{item.data.last_price}</td>
                                    <td>{change}</td>
                                    <td>{changePercent}%</td>
                                    <td>{item.data.high}</td>
                                    <td className="pe-3">{item.data.low}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        symbolsData: state.symbols.symbolsData
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setSelectedSymbol
    }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTable);