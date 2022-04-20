import Sidebar from "./components/siderbar/sideBar";
import Topbar from "./components/topbar/Topbar";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login"
import ErrorMessage from "./pages/message/error";
import SuccessMessage from "./pages/message/success";
import { useSelector } from "react-redux";
function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  // const admin = useSelector((state) => state.user);
  // const admin = false
  console.log("admin",admin);
  // console.log("user",user);

  // console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser);
  return (

    <BrowserRouter>
      <Topbar />
      
      {!admin ? (
        <Routes>
        <Route path="/"
          element={<Login />}
        />
      </Routes>
      ):
      <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/home"
              element={<Home />} />
            <Route path="/users"
              element={<UserList />} />
            <Route path="/user/:userId"
              element={<User />}
            />
            <Route path="/newUser"
              element={<NewUser />
              }
            /><Route path="/products"
              element={<ProductList />
              }
            /><Route path="/product/:productId"
              element={<Product />
              }
            /><Route path="/newproduct"
              element={<NewProduct />
              }
            />
            <Route path="/error"
              element={<ErrorMessage />
              }
            />
            <Route path="/succces"
              element={<SuccessMessage />
              }
            />
          </Routes>
        </div>

      }

          {/* <Route path="/login"
          element={ <Login /> }
        /> */}
          {/* {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route path="/"
                element={<Home />} />
              <Route path="/users"
                element={<UserList />} />
              <Route path="/user/:userId"
                element={<User />}
              />
              <Route path="/newUser"
                element={<NewUser />
                }
              /><Route path="/products"
                element={<ProductList />
                }
              /><Route path="/product/:productId"
                element={<Product />
                }
              /><Route path="/newproduct"
                element={<NewProduct />
                }
              />

            </div>
          </>
        )
        } */}
          {/* </Routes> */}
        </BrowserRouter >
      )
      }

      export default App;
