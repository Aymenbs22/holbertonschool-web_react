import UNSELECT_COURSE from './courseActionTypes';
import SELECT_COURSE from './courseActionTypes';

export function selectCourse(index){
    return {
        type: SELECT_COURSE,
        index};
    
}

export const selectCoursebound = (index) => {dispatch(selectCourse(index));}

export function unSelectCourse(index){
    return {
        type: UNSELECT_COURSE,
        index};
    
}

export const unSelectCourse = (index) => {dispatch(selectCourse(index));}
