const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginTop : theme.spacing.unit * 15,
        textAlign: 'center',
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    width_: {
        width: '80%'
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    hasAccountHeader: {
        width: '80%',
        display: 'flex',
        justifyContent: 'end',
        margin: 'auto',
        cursor: 'pointer',
        marginTop: theme.spacing.unit * 3,
    },
});

export default styles;