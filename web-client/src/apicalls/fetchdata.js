import axios from "axios";



const fetchdata = async() =>
{
    let a = await axios.get("http://ec2-65-0-99-186.ap-south-1.compute.amazonaws.com/api/person") ;
    return a.data;
    
}

export default fetchdata;