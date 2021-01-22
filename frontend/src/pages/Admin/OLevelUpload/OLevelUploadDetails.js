import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Person as PersonIcon, Message as MessageIcon } from '@material-ui/icons'
import { Input, FormControl } from '@material-ui/core'
import { TextareaAutosize, InputLabel, InputAdornment } from '@material-ui/core'
import { UserProfileContainer, AdminButton, AdminButtonAlt, AdminButtonPro, RightAlign, AdminHeader } from "../../../styles/AdminStyles"
import { colors } from "../../../styles/breakpoints"
import CurrencyFormat from "react-currency-format"
import { Card, CardContent, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../../components/Loaders/SimpleLoader"
import { DropzoneDialog } from 'material-ui-dropzone'
import queryString from "query-string"
import { useLocation } from "react-router-dom"
import MessageModal from "../../../components/Utils/MessageModal"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import {
    adminOlevelFileUpload,
    getOlevelUploadOrderDetailsById,
    getOlevelUploadBlob,
    deleteOlevelUploadOrder,
    listOlevelUploadOrders
} from '../../../redux/actions/oLevelResultUploadActions';
import { emailAUser } from '../../../redux/actions/userActions';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));


const OLevelUploadDetails = ({ setValue }) => {
    const classes = useStyles();

    const [deletePrompt, setDeletePrompt] = useState(false)
    const [subject, setSubject] = useState("")
    const [emailBody, setEmailBody] = useState("")

    const dispatch = useDispatch()
    const location = useLocation()
    const { orderId } = queryString.parse(location.search)

    useEffect(() => {
        if (orderId) {
            dispatch(getOlevelUploadOrderDetailsById(orderId))
        }
    }, [dispatch, orderId])

    const [upload, setUpload] = useState({
        open: false,
        files: []
    })

    const oLevelUploadOrderDetails = useSelector(state => state.oLevelUploadOrderDetails)
    const { loading, error, order } = oLevelUploadOrderDetails

    const userEmail = useSelector(state => state.userEmail)
    const { loading: emailLoading, message } = userEmail

    const handleMessageSend = (e) => {
        e.preventDefault()
        dispatch(emailAUser(order.user._id, { subject, emailBody }))
    }

    const handleFileSave = (files) => {
        setUpload({ files: files, open: false })
        const formData = new FormData()
        formData.append('document', files[0])
        dispatch(adminOlevelFileUpload(orderId, formData))

    }

    const handleOrderDelete = () => {
        dispatch(deleteOlevelUploadOrder(orderId))
        dispatch(listOlevelUploadOrders())
        setValue(0)
    }

    return (
        <UserProfileContainer>
            {
                loading ? <Loader />
                    : error ? error
                        :
                        order ?
                            <React.Fragment>
                                <Card className="card__image">
                                    <CardContent>

                                        {

                                            order.admin_upload &&
                                            <object data={order.admin_upload.image} type="application/pdf" width="300px" height="300px">
                                                <p>Alternative text - include a link <a href={order.admin_upload && `/${order.admin_upload}`}>to the PDF!</a></p>
                                            </object>
                                        }

                                        <div>
                                            <AdminButtonAlt onClick={() => setUpload({ ...upload, open: true })}>
                                                <PhotoCameraIcon />Upload Result</AdminButtonAlt>
                                            <DropzoneDialog
                                                open={upload.open}
                                                filesLimit={1}
                                                clearOnUnmount={false}
                                                onChange={(files) => console.log('Files:', files)}
                                                onSave={handleFileSave}
                                                submitButtonText="Add file"
                                                acceptedFiles={['image/jpeg', 'image/png']}
                                                showPreviews={true}
                                                maxFileSize={1000000}
                                                onClose={() => setUpload({ ...upload, open: false })}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="card__content">
                                    <CardContent>
                                        <div className="heading">
                                            <h2>{order.user && order.user.name}</h2>
                                            <div>
                                                <span>Balance:</span>
                                                <CurrencyFormat value={order.price}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'₦'}
                                                    renderText={value => <h4>{value}</h4>}
                                                />
                                            </div>
                                        </div>
                                        <Divider />
                                        <div className="contents">
                                            <div>
                                                <span>Candidate's name:</span>
                                                <span>{order.orderItems && order.orderItems.name}</span>
                                            </div>

                                            <div>
                                                <span>Candidate's Profile Code:</span>
                                                <span>{order.orderItems && order.orderItems.profileCode}</span>
                                            </div>

                                            <div>
                                                <span>Candidate's Order Type:</span>
                                                <span>{order.orderItems && order.orderItems.type}</span>
                                            </div>

                                            <div className="fullwidth">
                                                <div className="embossitem">
                                                    {
                                                        order.orderItems &&
                                                        order.orderItems.files &&
                                                        order.orderItems.files.map((file) => (
                                                            file && (
                                                                <div key={file._id}>
                                                                    <img src={file.image} alt={file.image} />

                                                                </div>
                                                            )
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <span>Paid on:</span>
                                                <span>{new Date(order.paidAt).toDateString()}</span>
                                            </div>
                                            <div>
                                                <span>Payment method:</span>
                                                <span>{order.paymentMethod}</span>
                                            </div>
                                            <div>
                                                <span>Payment ID:</span>
                                                <span>{order.paymentResult && order.paymentResult.id}</span>
                                            </div>
                                            <div>
                                                <span>Payment Email:</span>
                                                <span>{order.paymentResult && order.paymentResult.email}</span>
                                            </div>
                                            <div>
                                                <span>Payment Status:</span>
                                                <span>{order.paymentResult && order.paymentResult.status}</span>
                                            </div>

                                            <div>
                                                <span>Created on:</span>
                                                <span>{new Date(order.createdAt).toDateString()}</span>
                                            </div>

                                            <div>
                                                <span>Last update on:</span>
                                                <span>{new Date(order.updatedAt).toDateString()}</span>
                                            </div>

                                        </div>

                                        <Divider />
                                        <div className="actions">
                                            <AdminButton onClick={() => setDeletePrompt(true)}>Delete Order</AdminButton>
                                        </div>

                                    </CardContent>
                                </Card>


                                <form className="messagecontainer" onSubmit={handleMessageSend}>
                                    {/* Send message to user */}

                                    {
                                        message &&
                                        <AdminHeader>
                                            <Grid item xs>
                                                <Typography className="message" variant="span" component="p">
                                                    {message}
                                                </Typography>
                                            </Grid>
                                        </AdminHeader>

                                    }

                                    {
                                        emailLoading ? <Loader />
                                            :
                                            <Card className="card__content">
                                                <CardContent>
                                                    <div className="heading">
                                                        <h2>Send message to {order.user.name}</h2>
                                                    </div>
                                                    <Divider />
                                                    <div className="contents">
                                                        <div className="fullwidth">
                                                            <FormControl fullWidth className={classes.formControl}>
                                                                <InputLabel htmlFor="standard-adornment-name">Subject</InputLabel>
                                                                <Input
                                                                    id="standard-adornment-name"
                                                                    value={subject}
                                                                    required
                                                                    onChange={(e) => setSubject(e.target.value)}
                                                                    startAdornment={<InputAdornment position="start"><PersonIcon /> </InputAdornment>}
                                                                />
                                                            </FormControl>
                                                        </div>

                                                        <div className="fullwidth">
                                                            <FormControl className={classes.formControl}>
                                                                <TextareaAutosize
                                                                    aria-label="minimum height"
                                                                    onChange={e => setEmailBody(e.target.value)}
                                                                    value={emailBody}
                                                                    rowsMin={5}
                                                                    startAdornment={<InputAdornment position="start"><MessageIcon /> </InputAdornment>}
                                                                    placeholder="Additional Information (Optional)" />
                                                            </FormControl>
                                                        </div>

                                                    </div>

                                                    <Divider />
                                                    <div className="actions">

                                                        <AdminButtonPro
                                                            type="submit"
                                                            color={colors.goldish}
                                                        >Send message</AdminButtonPro>
                                                    </div>

                                                </CardContent>
                                            </Card>
                                    }

                                </form>



                                <MessageModal
                                    open={deletePrompt}
                                    setOpen={setDeletePrompt}
                                    caption={`Delete ${order && order.user.name}'s order`}
                                    message={
                                        <div className='delete'>
                                            <h4 className="deleteheader">This action is not reversable</h4>
                                            <p>Are you sure you want to delete {order.user.name}'s order?</p>
                                            <p>This will also delete the pin, serial no and token</p>
                                            <div className="deleteconfirm">
                                                <AdminButton onClick={() => setDeletePrompt(false)}>No</AdminButton>
                                                <AdminButton onClick={handleOrderDelete}>Yes</AdminButton>
                                            </div>
                                        </div>
                                    }
                                />


                            </React.Fragment>
                            :
                            <Card>
                                <CardContent>
                                    You have not selected any user
                            </CardContent>
                            </Card>
            }
        </UserProfileContainer >
    )
}

export default OLevelUploadDetails
