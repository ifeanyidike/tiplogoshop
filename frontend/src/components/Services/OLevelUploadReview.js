import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ListFeatureElement, ButtonGroup, NextButton, NoMarginBackButton } from "../../styles/ServiceStyle"
import { colors } from "../../styles/breakpoints"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const OLevelUploadReview = ({
  type,
  name,
  profileCode,
  upload,
  activeStep,
  setActiveStep
}) => {
  const classes = useStyles();
  console.log(upload)
  return (
    <div>
      <List>
        <ListItem className={classes.listItem} key={type}>
          <ListItemText primary="Upload Type" secondary="NECO or WAEC?" />
          <Typography variant="body2">{type}</Typography>
        </ListItem>
        <ListItem className={classes.listItem} key={name}>
          <ListItemText primary="Candidate's Name" secondary={`Name of ${type} candidate`} />
          <Typography variant="body2">{name}</Typography>
        </ListItem>
        <ListItem className={classes.listItem} key={profileCode}>
          <ListItemText primary="Candidate's Profile Code" secondary={`Profile Code ${type} candidate`} />
          <Typography variant="body2">{profileCode}</Typography>
        </ListItem>

        {
          upload.files && upload.files.map((file, index) => (
            <ListFeatureElement key={index}>
              <ListItem className={classes.listItem} key={file.name}>
                <ListItemText primary="File Name" secondary='Name of the file' />
                <Typography variant="body2">{file.name}</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key={file.type}>
                <ListItemText primary="File Type" secondary='Type the file' />
                <Typography variant="body2">{file.type}</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key={file.size}>
                <ListItemText primary="File Size" secondary='Size the file' />
                <Typography variant="body2">{
                  (file.size / 1024 ** 2) < 1 ?
                    `${(file.size / 1024).toFixed(2)}KB` :
                    `${(file.size / 1024 ** 2).toFixed(2)}MB`
                }</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key={file.lastModified}>
                <ListItemText primary="Uploaded At" secondary='Time of Upload' />
                <Typography variant="body2">{new Date(file.lastModified).toDateString()}</Typography>
              </ListItem>
            </ListFeatureElement>
          ))
        }

        <ButtonGroup>
          <NoMarginBackButton
            variant={colors.darkred}
            onClick={() => setActiveStep(activeStep - 1)}>
            <NavigateBeforeIcon /> Previous
              </NoMarginBackButton>
          <NextButton
            variant={colors.darkblue}
            onClick={() => setActiveStep(activeStep + 1)}>
            Next <NavigateNextIcon />
          </NextButton>
        </ButtonGroup>
      </List>
    </div>
  )
}

export default OLevelUploadReview
