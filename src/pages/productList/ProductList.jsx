import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getProducts } from "../../redux/apiCalls";
// import { userRequest } from "../../../../cleint/src/requestMethod";
import axios from 'axios'

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = async (id) => {
    // deleteProduct(id, dispatch);
    console.log("axios is about to lounch")
    const res = await axios.delete(`"https://tibebmeda.herokuapp.com/api/products/${id}`);
    console.log("its about to be delete", res.data);
    setMessage("products has been deleted")

  };
  console.log("products", products);
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
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
  ];

  return (
    <>
      <p> {message} </p>
      <div className="productList">
        <DataGrid
          rows={products}
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