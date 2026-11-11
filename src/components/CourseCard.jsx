
function CourseCard({code, courseName, credits, description, classTime}){

    return(
        <>
        <h4>{code} | {courseName} | {credits} | {classTime}</h4>
        <p>{description}</p>
        </>
    );

}

export default CourseCard;