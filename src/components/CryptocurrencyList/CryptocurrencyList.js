import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%'
    },
    button: {
        margin: theme.spacing.unit,
        width: '99%'
    },
    currencyLink: {
        textDecoration: 'none',
        color: '#000'
    }
});

const CryptocurrencyList = ({ currencies, classes }) => (
    <div className={classes.root}>
        <Button variant="raised" className={classes.button} fullWidth>
            Refresh
        </Button>
        <List>
            {currencies.map((currency) => {
                const currencyText = `${currency.name} | ${currency.rank} | ${currency.symbol} | ${currency.price_usd} | ${currency['24h_volume_usd']}`;
                const currencyDetailLink = `/currency/${currency.id}`;
                return (
                    <Link to={currencyDetailLink} key={currency.id} className={classes.currencyLink}>
                        <ListItem button>
                            <ListItemText primary={currencyText} />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    </div>
);

CryptocurrencyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    currencies: state.cryptoCurrencies.currencies
});

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyList));