// <p>{students.length && "No students found!"}</p> -> (&&) both of condition is true, then return 1, otherwise,0
// !boolean
// legth of array
// lenght of array === 0

export const InterviewQuestion = () => {
  const students = [];
  return <p>{!students.length && "No students found!"}</p>;
  
};
