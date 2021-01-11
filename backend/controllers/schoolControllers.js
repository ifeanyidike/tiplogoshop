import asyncHandler from "express-async-handler"
import School from "../models/schoolModels.js"

// @desc    Fetch all schools
// @route   GET /api/schools/
// @access  Public

export const getAllSchools = asyncHandler(async (req, res)=>{     
    const schools = await School.find({})
    res.json({schools: schools})
})


// @desc    Fetch institutions by degree
// @route   GET /api/schools/${programme}
// @access  Public

export const getSchoolsByProgramme = asyncHandler(async (req, res)=>{
    const programme = req.params.programme    
    const schools = await School.find({programme: programme})
    res.send(schools)
})

// @desc    Fetch schools by Id
// @route   GET /api/schools/:id/
// @access  Public

export const getSchoolsById = asyncHandler(async (req, res)=>{    
    const school = await School.findById(req.params.id)
    res.send(school)
})


// @desc    Create a school
// @route   POST /api/school
// @access  Private/Admin

export const createSchool = asyncHandler( async(req, res)=>{
    const school = new School({
        programme: 'degree',
        institution: 'Sample School',
        courses: []        
    })
    const createdSchool = await school.save()
    res.status(201).json(createdSchool)
})

// @desc    Update a school
// @route   PUT /api/schools/:id
// @access  Private/Admin

export const updateSchool = asyncHandler( async(req, res)=>{
    const{programme, institution, courses} = req.body
    const school = await School.findById(req.params.id)
    
    if(school){
        school.programme = programme
        school.institution = institution
        for(course of courses){
            school.courses.push(course)
        }        
        const updatedSchool = await school.save()
        res.json(updatedSchool)
    }else{
        res.status(404)
        throw new Error('School not found')
    }
})


