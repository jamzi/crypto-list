import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Settings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
    flex: {
        flex: 1,
    },
    settingsIcon: {
        color: '#fff'
    },
    title: {
        textDecoration: 'none',
        color: '#fff'
    },
    rightSide: {
        display: 'flex',
        alignItems: 'center'
    }
};

export const Header = ({ classes, selectedFiatCurrency }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
                <Link to="" className={classes.title}>
                    <h3>Crypto List</h3>
                </Link>
            </Typography>
            <div className={classes.rightSide}>
                <div className="selectedFiatCurrency">{selectedFiatCurrency}</div>
                <Link className="settingsLink" to="/settings">
                    <IconButton className={classes.settingsIcon}>
                        <Settings />
                    </IconButton>
                </Link>
            </div>
        </Toolbar>
    </AppBar>
);

const mapStateToProps = (state, ownProps) => ({
    selectedFiatCurrency: state.settings.fiatCurrency
});

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedFiatCurrency: PropTypes.string.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(Header));