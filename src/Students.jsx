import PropTypes from 'prop-types';

export default function Students(props){

    return(
        <>
        <div className="students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"} </p>
        </div>
         
        </>
    )
}
//Default Props
Students.defaultProps= {
     name:"Guest",
     age: 0,
     isStudent: false,
}

// Ensures that data should be of a cetain data type without affecting the display 
// visible in the console

Students.propTypes={
    name: PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}