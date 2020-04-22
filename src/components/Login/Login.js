import React from 'react';
import { Field, reduxForm } from "redux-form";
import renderTextField from '../Form/TextField/index';
import { compose } from 'redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './style';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
function Login(props) {
    const { classes, handleSubmit } = props;
    return (
        <div className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper>
                <Typography component="h1" variant="h5">
                    Log In!
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
                        <Link to="/signup"><h5 className={classes.hasAccountHeader}>Sign up</h5></Link>
                       <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                    </form>
                </div>
            </Paper>
        </div>
    );
}
const ContactFormLogin = reduxForm({
    form: "fieldLevelValidation",
});
export default compose(ContactFormLogin, withStyles(styles))(Login);