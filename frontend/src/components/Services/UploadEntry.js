import { TextField } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import UploadChoices from './UploadChoices'


const SubjectOptions = () => {

    const { loading, success, subjects } = useSelector(state => state.subjectList)

    return <>
        {
            loading ? "Loading..."
                :
                success &&
                subjects.map(subject =>
                    <option key={subject._id} value={subject.name} >{subject.name}</option>
                )

        }
    </>
}

const GradeOptions = () => {

    return <>
        <option value="" >Select grade</option>
        <option value="A1">A1</option>
        <option value="B2">B2</option>
        <option value="B3">B3</option>
        <option value="C4">C4</option>
        <option value="C5">C5</option>
        <option value="C6">C6</option>
        <option value="D7">D7</option>
        <option value="E8">E8</option>
        <option value="F9">F9</option>
    </>
}

const ExamTypeOptions = () => {
    return <>
        <option value="" >Select exam type</option>
        <option value="WAEC">WAEC</option>
        <option value="NECO">NECO</option>
        <option value="NABTEB">NABTB</option>
    </>
}

const UploadEntry = ({ num, entryState, setEntryState }) => {

    const handleChange = (prop) => (e) => {
        setEntryState({ ...entryState, [prop]: e.target.value });
    };

    return (
        <div className='entry'>
            <span>{num}</span>
            <UploadChoices
                value={entryState.subject}
                onChange={handleChange('subject')}
                options={<SubjectOptions />}
            />
            <UploadChoices
                value={entryState.grade}
                onChange={handleChange('grade')}
                options={<GradeOptions />}
            />
            <TextField
                label="Exam No"
                value={entryState.examNumber}
                onChange={handleChange('examNumber')}
                autoComplete="Enter phonenumber"

            />
            <UploadChoices
                value={entryState.examType}
                onChange={handleChange('examType')}
                options={<ExamTypeOptions />}
            />
        </div>
    )

}

export default UploadEntry
