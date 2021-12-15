import { Grid } from "@chakra-ui/react"

import CourseData from "./data/courses.json"

import {CourseSkills} from "./Skills"
import { Course } from './course';

export const Courses = () => {
  return (
    <Grid
      mt="5"
      justifyItems="center"
      templateRows='repeat(2, 1fr)'
      px={["","10px","15px","20px"]}
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(3, 1fr)']}
      gap={[4, 5, 10]} 
    >
        {CourseData.coursesData.map(course => {
          return(
            <Course
              key={course.id}
              title={course.title}
              where={course.where}
              coursesLink={course.coursesLink}
              status={course.status}
              about={course.about}
              >
                {course.skills.map(skill => {
                  return(
                    
                    <CourseSkills key={course.id} title={skill}/>
                  )
                })}
            </Course>
          )
        })}
    </Grid>
  )
}