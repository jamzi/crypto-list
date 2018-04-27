import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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
    }
});

const CryptocurrencyDetails = ({ match, currency, classes }) => (
    <div className={classes.root}>
        <Button variant="raised" className={classes.button} fullWidth>
            Refresh
        </Button>
        <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h3">
                { `${currency.name} (${currency.symbol}) - rank: ${currency.rank}` }
        </Typography>
            <Typography component="p">
                { `price: ${currency.price_usd} - bitcoin price: ${currency.price_btc}` } <br/>
                { `1h change: ${currency.percent_change_1h}%, 24h change: ${currency.percent_change_24h}%, 7d change: ${currency.percent_change_7d}%` } <br/>
                { `available supply: ${currency.available_supply}, total supply: ${currency.total_supply}` }
        </Typography>
        </Paper>
    </div>
);

CryptocurrencyDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    currency: state.cryptoCurrencies.currencies.find((currency) => currency.id === ownProps.match.params.currencyId)
});

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyDetails));