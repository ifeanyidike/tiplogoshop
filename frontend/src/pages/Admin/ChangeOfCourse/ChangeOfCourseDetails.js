import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Person as PersonIcon, Message as MessageIcon } from '@material-ui/icons'
import { Input, FormControl } from '@material-ui/core'
import { TextareaAutosize, InputLabel, InputAdornment } from '@material-ui/core'
import { UserProfileContainer, AdminButton, AdminButtonAlt, AdminButtonPro, RightAlign } from "../../../styles/AdminStyles"
import { colors } from "../../../styles/breakpoints"
import CurrencyFormat from "react-currency-format"
import { Avatar, Card, CardContent, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../../components/Loaders/SimpleLoader"
import { DropzoneDialog } from 'material-ui-dropzone'
import queryString from "query-string"
import { useLocation } from "react-router-dom"
import MessageModal from "../../../components/Utils/MessageModal"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { deleteCard } from "../../../redux/actions/cardActions"
import { adminChangeOfCourseUpload, getChangeOfCourseOrderDetailsById } from '../../../redux/actions/changeOfCourseActions';
import { Document, Page } from 'react-pdf';

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


const ChangeOfCourseDetails = ({ setValue }) => {
    const classes = useStyles();
    const [deletePrompt, setDeletePrompt] = useState(false)

    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()
    const location = useLocation()
    const { orderId } = queryString.parse(location.search)

    useEffect(() => {
        if (orderId) {
            dispatch(getChangeOfCourseOrderDetailsById(orderId))
        }
    }, [dispatch, orderId])


    const [upload, setUpload] = useState({
        open: false,
        files: []
    })
    // const handleCardDelete = () => {
    //     dispatch(deleteCard(card._id))
    //     dispatch(listCards())
    //     setValue(0)
    // }

    const handleCardUpdate = () => {
        const formData = new FormData()
        formData.append('document', upload.files[0])
    }

    const changeOfCourseOrderDetails = useSelector(state => state.changeOfCourseOrderDetails)
    const { loading, error, order } = changeOfCourseOrderDetails

    const handleFileSave = (files) => {
        setUpload({ files: files, open: false })
        const formData = new FormData()
        formData.append('document', files[0])
        formData.append('email', order.user.email)
        dispatch(adminChangeOfCourseUpload(orderId, formData))
        dispatch(getChangeOfCourseOrderDetailsById(orderId))
    }

    console.log(order)

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
                                        <Avatar className="profile_pic"
                                            src="/uploads/2-1610377585128.jpg"
                                        />

                                        <embed
                                            src={order.admin_upload && `/${order.admin_upload}`}
                                            width="100px"
                                            height="100px"
                                        />

                                        <div>
                                            <AdminButtonAlt onClick={() => setUpload({ ...upload, open: true })}>
                                                <PhotoCameraIcon />Change</AdminButtonAlt>
                                            <DropzoneDialog
                                                open={upload.open}
                                                filesLimit={1}
                                                clearOnUnmount={false}
                                                onChange={(files) => console.log('Files:', files)}
                                                onSave={handleFileSave}
                                                submitButtonText="Add image"
                                                acceptedFiles={['image/jpeg', 'application/pdf', 'image/png']}
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
                                                <span>{order.orderItems && order.orderItems.fullName}</span>
                                            </div>
                                            <div>
                                                <span>Candidate's OTP:</span>
                                                <span>{order.orderItems && order.orderItems.otp}</span>
                                            </div>
                                            <div>
                                                <span>Candidate's Profile Code:</span>
                                                <span>{order.orderItems && order.orderItems.profileCode}</span>
                                            </div>
                                            <div>
                                                <span>Candidate's regNo:</span>
                                                <span>{order.orderItems && order.orderItems.regNo}</span>
                                            </div>
                                            <div>
                                                <span>Candidate's Order Type:</span>
                                                <span>{order.orderItems && order.orderItems.type}</span>
                                            </div>

                                            <div className="fullwidth">
                                                {
                                                    order.orderItems &&
                                                    order.orderItems.choices &&
                                                    order.orderItems.choices.map((choice, index) => (
                                                        choice && (
                                                            <div className="embossitem" key={choice._id}>
                                                                <div>
                                                                    <span>Course {index + 1}: </span>
                                                                    <span>{choice.course}</span>
                                                                </div>
                                                                <div>
                                                                    <span>Institution {index + 1}: </span>
                                                                    <span>{choice.institution}</span>
                                                                </div>
                                                                <div>
                                                                    <span>Programme {index + 1}: </span>
                                                                    <span>{choice.preferredProgramme}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    ))
                                                }
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


                                <div className="messagecontainer">
                                    {/* Send message to user */}

                                    <Card className="card__content">
                                        <CardContent>
                                            <div className="heading">
                                                <h2>Send message to {order.user.name}</h2>
                                            </div>
                                            <Divider />
                                            <div className="contents">
                                                <div className="fullwidth">
                                                    <FormControl fullWidth className={classes.formControl}>
                                                        <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
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
                                                            onChange={e => setMessage(e.target.value)}
                                                            value={message}
                                                            rowsMin={5}
                                                            startAdornment={<InputAdornment position="start"><MessageIcon /> </InputAdornment>}
                                                            placeholder="Additional Information (Optional)" />
                                                    </FormControl>
                                                </div>

                                            </div>

                                            <Divider />
                                            <div className="actions">

                                                <AdminButtonPro color={colors.goldish}
                                                    onClick={handleCardUpdate}
                                                >Send message</AdminButtonPro>
                                            </div>

                                        </CardContent>
                                    </Card>

                                </div>



                                {/* <MessageModal
                                        open={deletePrompt}
                                        setOpen={setDeletePrompt}
                                        caption={`Delete ${card && card.name}`}
                                        message={
                                            <div className='delete'>
                                                <h4 className="deleteheader">This action is not reversable</h4>
                                                <p>Are you sure you want to delete {card.name}?</p>
                                                <p>This will also delete the pin, serial no and token</p>
                                                <div className="deleteconfirm">
                                                    <AdminButton onClick={() => setDeletePrompt(false)}>No</AdminButton>
                                                    <AdminButton onClick={handleCardDelete}>Yes</AdminButton>
                                                </div>
                                            </div>
                                        }
                                    /> */}


                            </React.Fragment>
                            :
                            <Card>
                                <CardContent>
                                    You have not selected any user
                            </CardContent>
                            </Card>
            }


        </UserProfileContainer>
    )
}

export default ChangeOfCourseDetails
