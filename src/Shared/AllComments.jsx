import { useLoaderData } from "react-router-dom";
import FeedBack from "./FeedBack";
const AllComments = () => {

    const allComments = useLoaderData()

    return (
        <div>
        <p>{allComments.length}</p>
            {
                allComments.map(feedBack =><FeedBack
                key={feedBack._id}
                feedBack={feedBack}></FeedBack>)
            }
        </div>
    );
};

export default AllComments;