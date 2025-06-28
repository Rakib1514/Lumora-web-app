import { useParams } from "react-router";

const Collections = () => {

  const params = useParams()
  
  console.log(params)
  
  return (
    <div>
      Collections
    </div>
  );
};

export default Collections;