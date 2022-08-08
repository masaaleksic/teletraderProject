import axios from "axios";

async function getSymbolDetails (symbols) {
        try {
            const tableItems = new Array();
            for (let i = 0; i < symbols.length; i++) {
                const symbolsName = symbols[i].toUpperCase();
                await axios.get(`https://api.bitfinex.com/v1/pubticker/${symbolsName}`).then(
                    (resp) => {
                        if (resp.status === 200) {
                            tableItems.push({
                                name: symbolsName,
                                data: resp.data
                            });
                        }
                    }
                );
            }
            return tableItems;
        } catch (error) {
            console.log('Error catched');
        }
}

export default getSymbolDetails;