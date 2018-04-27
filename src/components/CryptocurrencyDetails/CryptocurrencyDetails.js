import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        width: '100%'
    },
    button: {
        margin: theme.spacing.unit,
        width: '99%'
    }
});

const CryptocurrencyDetails = ({ match, classes }) => (
    <div className={classes.root}>
        <Button variant="raised" className={classes.button} fullWidth>
            Refresh
        </Button>
        <h3>{match.params.currencyId}</h3>
    </div>
);

CryptocurrencyDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptocurrencyDetails);