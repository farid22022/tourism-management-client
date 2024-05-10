import { useLoaderData } from "react-router-dom";
import List from "../../Shared/List";
import Menu from "../../Shared/Menu";


const MyList = () => {

    const myLists = useLoaderData();


    return (
        <div className="grid-cols-1">
            <Menu></Menu>
            <h2 className="text-3xl font-serif font-extrabold text-center text-blue-950 pt-12">My Visited Places are : {myLists.length}</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 lg:pl-12">
             {
                myLists.map(list =><List
                key={list._id}
                list={list}
                ></List>)
            }
        </div>
        </div>
    );
};

export default MyList;