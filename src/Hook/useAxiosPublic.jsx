import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tourism-management-server-jet.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;