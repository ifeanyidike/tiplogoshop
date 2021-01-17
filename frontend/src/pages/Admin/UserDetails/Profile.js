import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../../components/Loaders/SimpleLoader"
import CurrencyFormat from "react-currency-format"
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    makeStyles
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 100,
        width: 100
    }
}));

const Profile = ({ className, ...rest }) => {
    const classes = useStyles();

    const { loading, error, user } = useSelector(state => state.userList)
    console.log(user)
    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            {
                loading ? <Loader />
                    :
                    error ? error
                        :
                        <CardContent>
                            <Box
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                            >
                                <Avatar
                                    className={classes.avatar}
                                    src={user && user.profile.picture}
                                />
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h4"
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.email}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.profile && user.profile.phoneNo && user.profile.phoneNo}
                                </Typography>
                                <Typography
                                    className={classes.dateText}
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {new Date(user.createdAt).toDateString()}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.isAdmin ? 'Admin' : 'Not admin'}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.confirmed ? 'Email confirmed' : 'Email not confirmed'}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.type === 'facebook' ?
                                        'Signed up with facebook' : 'Local sign up'}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    {user.confirmed ? 'Email confirmed' : 'Email not confirmed'}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    <CurrencyFormat value={user.wallet}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'₦'}
                                        renderText={value => <div>{value}</div>}
                                    />
                                </Typography>
                            </Box>

                        </CardContent>
            }
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
        </Button>
            </CardActions>
        </Card>
    );
};

Profile.propTypes = {
    className: PropTypes.string
};

export default Profile;