import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setProfilePhoto, setUserImage, updateUser} from "../redux/actions/userActions"
import {ProfileContainer, UploadButton} from "../styles/ProfileStyle"
import Header from "../components/MainHeader"
import NotLoggedIn from "../components/Utils/NotLoggedIn"
import {IconButton}  from "@material-ui/core"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TabIndex from "../components/Profile/TabIndex"
import SaveIcon from '@material-ui/icons/Save';
import Loader from "../components/Loaders/SimpleLoader"
import Wallet from "../components/Utils/Wallet"

const ProfilePage = () => {
const [showButton, setShowButton] = useState(false)
const [image, setImage] = useState('')
const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNo: '',
    image: '',
    message: ''
})
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(setUserImage())
}, [dispatch])

const profilePhoto  = useSelector(state => state.profilePhoto)
const {loading: photoLoading, error: photoError, success, photoUrl } = profilePhoto

const userLogin = useSelector(state => state.userLogin)
const {loading: userLoading, userInfo, error: userError} = userLogin

const photo = useSelector(state => state.photo)
const {imageUrl} = photo

const handleFileChange = (e) =>{
        
    const file = e.target.files[0]
    const formData = new FormData()
    console.log(file)
    formData.append('image', file)
    formData.append('id', userInfo._id)
    dispatch(setProfilePhoto(formData))
    
    setShowButton(true)
    
}

const uploadFileHandler = (e) => { 
    
    e.preventDefault()        
    if(photoError){
        console.log(photoError)
    }
   
    dispatch(updateUser({
        _id: userInfo._id,
        profile:{...userInfo.profile, picture: photoUrl}
    }))    
    if(success){
        dispatch(setUserImage(photoUrl))
    }
}

const submitHandler = (e) => {
    e.preventDefault()
    if(userInfo && userInfo._id){
        dispatch(
            // updateUser({
            //     _id: userInfo._id,
            //     name,
            //     price,
            //     image,
            //     brand,
            //     category,
            //     description,
            //     countInStock,
            // })
        )
    }
}
    
    return (
        <div>
            <Header />
            {
                !userInfo ? <NotLoggedIn /> :
                <div>
                    
                    <ProfileContainer>
                        <div className="backgroundheader">  
                            <div className="wallet">
                                <Wallet mb={15} />
                            </div>                          
                        </div>
                        <form className="profileimage" onSubmit={uploadFileHandler}>
                            <img src={
                                imageUrl ? imageUrl :
                                userInfo.profile && userInfo.profile.picture ? 
                                userInfo.profile.picture
                                :
                                'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
                            } 
                            alt=""/>
                            <IconButton  className="filebutton">
                                <AddAPhotoIcon />
                                <input                                     
                                    className="file"
                                    type="file" 
                                    onChange={handleFileChange} />
                            </IconButton>
                            <UploadButton 
                                style={{display: showButton ? 'flex' : 'none'}}
                                className="submitbutton" 
                                type="submit">
                                Save 
                                <SaveIcon fontSize="small" />
                            </UploadButton>
                        </form>
                        <div>
                            
                            
                        </div>
                        
                        <>
                            <TabIndex values={values} setValues={setValues} />
                        </>
                        
                    </ProfileContainer>
                
                </div>
            }
        </div>
    )
}

export default ProfilePage
