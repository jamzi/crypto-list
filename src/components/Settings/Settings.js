import React from 'react';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import { connect } from 'react-redux';
import { setFiatCurrency } from '../../actions';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    }
});

const Settings = ({ fiatCurrency, changeFiatCurrency, classes }) => (
    <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl} fullWidth>
            <FormLabel component="legend">Currency</FormLabel>
            <RadioGroup
                aria-label="currency"
                name="currency"
                className={classes.group}
                value={fiatCurrency}
                onChange={changeFiatCurrency}
            >
                <FormControlLabel value="USD" control={<Radio />} label="USD" />
                <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                <FormControlLabel value="CNY" control={<Radio />} label="CNY" />
            </RadioGroup>
        </FormControl>
    </div>
);

const mapStateToProps = state => ({
    fiatCurrency: state.settings.fiatCurrency
});

const mapDispatchToProps = dispatch => ({
    changeFiatCurrency: (event) => {
        const selectedFiatCurrency = event.target.value;
        dispatch(setFiatCurrency(selectedFiatCurrency));
    },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Settings));