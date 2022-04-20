import { loginFailure, loginStart, loginSuccess , logout } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";


export const login = async (dispatch, user) => {

  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));

  } catch (err) {
    dispatch(loginFailure());


  }
};
export const Logout = ( dispatch ) => {
  console.log("about dispatch");
  dispatch(logout())
}

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  console.log("id", id);

  const res = await userRequest.delete(`/products/${id}`);
  // dispatch(deleteProductSuccess(id));
  console.log("its about to be delete", res.data);
  // } catch (err) {
  //   console.log("error in deleting" ,err);
  //   dispatch(deleteProductFailure());
  // }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    console.log(res);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());

  }
};