import React from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from 'redux'
import renderTextField from '../Form/TextField/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import styles from './style';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
function Sign(props) {
    const { handleSubmit, classes } = props;
    return (
        <div className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper>
                <Typography component="h1" variant="h5">
                    Sign Up!
                </Typography>
                <div className="formLogin">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="Usename"
                                component={renderTextField}
                                label="Usename"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                className={classes.width_}
                            />
                        </div>
                        <div>
                            <Field
                                name="Password"
                                component={renderTextField}
                                label="Password"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                className={classes.width_}
                            />
                        </div>
                        <div>
                            <Field
                                name="ConfirmPassword"
                                component={renderTextField}
                                label="Confirm Your Password"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                className={classes.width_}
                            />
                        </div>
                        <Link to="/login"><h5 className={classes.hasAccountHeader}>Already Have An Account?</h5></Link>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                    </form>
                </div>
            </Paper>
        </div>
    );
}
const ContactFormSignup = reduxForm({
    form: "fieldLevelValidation",
});
export default compose(ContactFormSignup, withStyles(styles))(Sign);