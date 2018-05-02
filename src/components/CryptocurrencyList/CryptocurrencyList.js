import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';

import { fetchCryptocurrencies } from './../../actions';

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
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
});

class CryptocurrencyList extends Component {
    componentDidMount() {
        this.handleFetchCryptocurrencies();
    }

    handleFetchCryptocurrencies() {
        const { dispatch, selectedFiatCurrency } = this.props;
        dispatch(fetchCryptocurrencies(selectedFiatCurrency));
    }

    render() {
        const { currencies = [], isFetching, classes, selectedFiatCurrency } = this.props;

        return (
            <div className={classes.root}>
                <Button variant="raised" className={classes.button} fullWidth onClick={this.handleFetchCryptocurrencies.bind(this)}>
                    Refresh
                </Button>
                {isFetching ?
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div> :
                    <List>
                        {currencies.map((currency) => {
                            const currencyText = `${currency.rank} | ${currency.symbol} | ${currency[`price_${selectedFiatCurrency.toLowerCase()}`]} (${selectedFiatCurrency}) | ${currency.percent_change_24h}% (24h)`;
                            const currencyDetailLink = `/currency/${currency.id}`;
                            return (
                                <Link to={currencyDetailLink} key={currency.id} className={classes.currencyLink}>
                                    <ListItem button>
                                        <ListItemText primary={currencyText} />
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies.cryptocurrencies,
    isFetching: state.currencies.isFetching,
    selectedFiatCurrency: state.settings.fiatCurrency
});

CryptocurrencyList.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedFiatCurrency: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    currencies: PropTypes.array.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyList));