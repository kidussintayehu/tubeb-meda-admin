import "./newUser.css";
import { useState } from "react";
import styled from "styled-components";
// import { async } from "@firebase/util";/
import { userRequest } from "../../requestMethods";


const Button = styled.button`
width: 200px;
border: none;
background-color: darkblue;
color: white;
padding: 7px 10px;
font-weight: 600;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
&:disabled{
  color: green;
  cursor: not-allowed;
}
`
export default function NewUser() {
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [isadmin, setisadmin] = useState(false);
  const [message, setmessage] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      username , email , password , isadmin
    }
    try {
      const res = await userRequest.post('auth/register' , body)
      console.log("response",res.data)
      setmessage("user succesfully created")
    } catch (error) {
      setmessage("something is wrong maybe duplicate input or server error ")

      
    }
   

  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text"
            placeholder="john"
            name="usename"
            onChange={(e) => { setusername(e.target.value) }}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text"
            placeholder="John Smith"

          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email"
            name="email"
            placeholder="john@gmail.com"
            onChange={(e) => { setemail(e.target.value) }}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"
            name="password"
            onChange={(e) => { setpassword(e.target.value) }}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>IsAdmin</label>
          {/* <select className="newUserSelect" name="active" id="active">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select> */}
          <input type="text" name="isadmin" placeholder="false"
            onChange={(e) => { setisadmin(e.target.value) }}
          />

        </div>
        <Button
          disabled={
            username === "" || email === "" || password === ""
              || isadmin === "" ? true : false
          }
          onClick={handleClick}
        >Create</Button>
        {/* <button className="newUserButton">Create</button> */}
      </form>
      <h2>
        { message }
      </h2>
    </div>
  );
}