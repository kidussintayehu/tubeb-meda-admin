import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [data, setData] = useState([])
  const [message, setMessage] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  // const [body, setBody] = useState({})


 
  useEffect( async () => {
    async function fetchData() {
      const res = await userRequest.get(`/user/find/${userId}`);
      // 
      setData(res.data)


    }
    // try {
     
    // } catch (err) {
    //   console.log(err);
    // }

    fetchData();
  }, [userId]);

  const handleClick = async (e) => {
    e.preventDefault();
    let body = {}
    try {
      
      if(password === ""){
        setMessage("password should be filled")
         return 
      }
      
       
      
     

      const res = await userRequest.put(`/user/${userId}` , body);
      console.log("user is about to update",res.data)
      setMessage("user has been updated")

    } catch (error) {
      console.log("error" , error)
    setMessage("")

    }

  }
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data.username}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">account created at {data.createdAt}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">account updated at {data.updatedAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  value={`${data.username}`}
                  className="userUpdateInput"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>password</label>
                <input
                  type="text"
                  placeholder="userpassword"
                  className="userUpdateInput"
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  value={`${data.email}`}
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              

            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                {/* <input type="file" id="file" style={{ display: "none" }} /> */}
              </div>
              <button className="userUpdateButton"
                onClick={handleClick}
              >Update</button>
            </div>
          </form>
        </div>
      </div>
      <h1>
        {message}
      </h1>
    </div>
  );
}