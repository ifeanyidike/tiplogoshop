import {
  SCHOOL_LIST_REQUEST,
  SCHOOL_LIST_SUCCESS,
  SCHOOL_LIST_FAIL,

  SCHOOL_DETAILS_REQUEST,
  SCHOOL_DETAILS_SUCCESS,
  SCHOOL_DETAILS_FAIL,

  SCHOOL_CREATE_REQUEST,
  SCHOOL_CREATE_SUCCESS,
  SCHOOL_CREATE_FAIL,

  SCHOOL_UPDATE_REQUEST,
  SCHOOL_UPDATE_SUCCESS,
  SCHOOL_UPDATE_FAIL,

  SCHOOL_BY_PROGRAMME_REQUEST,
  SCHOOL_BY_PROGRAMME_SUCCESS,
  SCHOOL_BY_PROGRAMME_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_FAIL
} from '../constants/schoolConstants'


export const courseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DELETE_REQUEST:
      return {
        loading: true
      }
    case COURSE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case COURSE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}


export const schoolListReducer = (state = { schools: [] }, action) => {
  switch (action.type) {
    case SCHOOL_LIST_REQUEST:
      return { loading: true, schools: [] }
    case SCHOOL_LIST_SUCCESS:
      return {
        loading: false,
        schools: action.payload
      }
    case SCHOOL_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const schoolDetailsReducer = (state = { school: {} }, action) => {
  switch (action.type) {
    case SCHOOL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SCHOOL_DETAILS_SUCCESS:
      return {
        loading: false,
        school: action.payload
      }
    case SCHOOL_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}


export const schoolByProgrammeReducer = (state = { schools: [] }, action) => {
  switch (action.type) {
    case SCHOOL_BY_PROGRAMME_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SCHOOL_BY_PROGRAMME_SUCCESS:
      return {
        loading: false,
        schools: action.payload
      }
    case SCHOOL_BY_PROGRAMME_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}


export const schoolCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHOOL_CREATE_REQUEST:
      return {
        loading: true
      }
    case SCHOOL_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        school: action.payload
      }
    case SCHOOL_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const schoolUpdateReducer = (state = { school: {} }, action) => {
  switch (action.type) {
    case SCHOOL_UPDATE_REQUEST:
      return {
        loading: true
      }
    case SCHOOL_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        school: action.payload
      }
    case SCHOOL_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

