import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
// import { userData, userRows } from "../../dummyData";
export default function UserList() {
  // const [data, setData] = useState(userRows);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
    console.log("axios is about to lounch")
    const res = await userRequest.delete(`user/${id}`);
    console.log("its about to be delete", res.data);
    setMessage("user has been deleted")
  };
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/");
        setUsers(res.data);
      } catch { }
    };
    getUsers();
  }, []);
  console.log("data", users)



  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'username', headerName: 'Username', width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'isAdmin', headerName: 'isAdmin', width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ]
  return (
    <>
    <h2> {message} </h2>
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={15}
        checkboxSelection
      />
    </div>
    </>
  );
}