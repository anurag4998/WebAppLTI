import axios from "axios";



const deleteData = async(data) =>
{
    delete data.tableData;
    await axios.delete("http://ec2-65-0-99-186.ap-south-1.compute.amazonaws.com/api/person",{
        data: data
    },
    {
        headers: {
            "Content-Type": "application/json"
        },
    });
    return true;
    
}

export default deleteData;