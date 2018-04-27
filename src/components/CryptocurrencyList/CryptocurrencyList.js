import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
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

const CryptocurrencyList = ({ classes }) => (
    <div className={classes.root}>
        <Button variant="raised" className={classes.button} fullWidth>
            Refresh
        </Button>
        <List component="nav">
            <ListItem button>
                <ListItemText primary="Currency1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Currency2" />
            </ListItem>
        </List>
    </div>
);

CryptocurrencyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptocurrencyList);