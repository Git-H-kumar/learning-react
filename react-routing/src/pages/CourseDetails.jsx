import { useParams } from "react-router"

const CourseDetails = () => {

  const param = useParams()
  

  return (
    <div>
        <h1> {param.id} CourseDetails page</h1>
    </div>
  )
}

export default CourseDetails