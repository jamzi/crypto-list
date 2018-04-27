import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Settings from '@material-ui/icons/Settings';

const styles = {
    flex: {
        flex: 1,
    }
};

const Header = ({ classes }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
                Crypto List
            </Typography>
            <div>
                <IconButton
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <Settings />
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);