import { useEffect, useState } from "react";
import FeedBack from "./FeedBack";

const AllComments = () => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feed')
            .then(res => res.json())
            .then(data => setAllComments(data))
            .catch(error => console.error("Error fetching feedback data:", error));
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="grid grid-cols-2 space-x-3 space-y-3 mt-24">
            {
                allComments.map(feedBack => <FeedBack
                    key={feedBack._id}
                    feedBack={feedBack}></FeedBack>)
            }
        </div>
    );
};

export default AllComments;
