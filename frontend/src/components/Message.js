import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Message = ({ variant, children }) => {

  return (
    <div >
      <Alert severity={variant}>
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