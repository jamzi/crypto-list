import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

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
        const { dispatch } = this.props;
        dispatch(fetchCryptocurrencies());
    }
    
    render() {
        const { currencies = [], isFetching, classes } = this.props;

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
                    </List>}
            </div>
        );
    }
}

CryptocurrencyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    currencies: state.currencies.cryptocurrencies,
    isFetching: state.currencies.isFetching
});

export default withStyles(styles)(connect(mapStateToProps)(CryptocurrencyList));