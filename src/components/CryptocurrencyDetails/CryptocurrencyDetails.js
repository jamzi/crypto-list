import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

import { fetchCryptocurrency, fetchCryptocurrencies } from './../../actions';

const styles = theme => ({
    root: {
        width: '100%'
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 3,
    }),
    button: {
        margin: theme.spacing.unit,
        width: '99%'
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
});

class CryptocurrencyDetails extends Component {
    componentDidMount() {
        this.handleFetchCryptocurrency();
    }    
    
    handleFetchCryptocurrency() {
        const { dispatch, match, hasCryptocurrencies, selectedFiatCurrency } = this.props;
        if (hasCryptocurrencies) {
            dispatch(fetchCryptocurrency(match.params.currencyId), selectedFiatCurrency);
        } else {
            dispatch(fetchCryptocurrencies(selectedFiatCurrency));
        }
    }
    
    render() {
        const { currency = {}, classes, isFetching, selectedFiatCurrency } = this.props;

        return (
            <div className={classes.root}>
                <Button variant="raised" className={classes.button} fullWidth onClick={this.handleFetchCryptocurrency.bind(this)}>
                    Refresh
                </Button>
                { isFetching ?
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div> :
                    <Paper className={classes.paper} elevation={4}>
                        <Typography variant="headline" component="h3">
                            {`${currency.name} (${currency.symbol}) - rank: ${currency.rank}`}
                        </Typography>
                        <Typography component="li">
                            <p>{`price: ${currency[`price_${selectedFiatCurrency.toLowerCase()}`]} (${selectedFiatCurrency})`} </p>
                            <p>{`24h volume: ${currency[`24h_volume_${selectedFiatCurrency.toLowerCase()}`]} (${selectedFiatCurrency})`} </p>
                            <p>{`market cap: ${currency[`market_cap_${selectedFiatCurrency.toLowerCase()}`]} (${selectedFiatCurrency})`} </p>
                            <p>{`bitcoin price: ${currency.price_btc}`} </p>
                            <p>{`1h change: ${currency.percent_change_1h}%, 24h change: ${currency.percent_change_24h}%, 7d change: ${currency.percent_change_7d}%`} </p>
                            <p>{`available supply: ${currency.available_supply}, total supply: ${currency.total_supply}`}</p>
                        </Typography>
                    </Paper>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currency: state.currencies.cryptocurrencies.find((currency) => currency.id === ownProps.match.params.currencyId),
    hasCryptocurrencies: state.currencies.cryptocurrencies.length,
    isFetching: state.currencies.isFetching,
    selectedFiatCurrency: state.settings.fiatCurrency
});

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyDetails));