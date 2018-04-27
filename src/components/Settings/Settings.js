import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

const Settings = ({ classes }) => (
    <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Currency</FormLabel>
            <RadioGroup
                aria-label="currency"
                name="currency"
                className={classes.group}
                value={"USD"}
                onChange={this.handleChange}
            >
                <FormControlLabel value="USD" control={<Radio />} label="USD" />
                <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                <FormControlLabel value="CNY" control={<Radio />} label="CNY" />
            </RadioGroup>
        </FormControl>
    </div>
);

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);