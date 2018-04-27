import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const { dispatch, match, hasCryptocurrencies } = this.props;
        if (hasCryptocurrencies) {
            dispatch(fetchCryptocurrency(match.params.currencyId));
        } else {
            dispatch(fetchCryptocurrencies());
        }
    }
    
    render() {
        const { currency = {}, classes, isFetching } = this.props;

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
                        <Typography component="p">
                            {`price: ${currency.price_usd} - bitcoin price: ${currency.price_btc}`} <br />
                            {`1h change: ${currency.percent_change_1h}%, 24h change: ${currency.percent_change_24h}%, 7d change: ${currency.percent_change_7d}%`} <br />
                            {`available supply: ${currency.available_supply}, total supply: ${currency.total_supply}`}
                        </Typography>
                    </Paper>
                }
            </div>
        )
    }
}

CryptocurrencyDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    currency: state.currencies.cryptocurrencies.find((currency) => currency.id === ownProps.match.params.currencyId),
    hasCryptocurrencies: state.currencies.cryptocurrencies.length,
    isFetching: state.currencies.isFetching
});

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyDetails));