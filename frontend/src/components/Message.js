import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = ({variant, children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity = {variant}>
        {/* <AlertTitle>Error</AlertTitle> */}
        {children}
      </Alert>      
    </div>
  );
}

Message.defaultProps = {
    severity: "error"
}

export default Message;