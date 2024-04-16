import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"; 
import { toast } from "react-toastify"; 

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "",phone: "", password: "",});

  const navigate = useNavigate();
  const {storeTokenInLS,API}=useAuth()     //contextapi to store token in local storage

  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value, }); };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json",  },
        body: JSON.stringify(user),
      });
 
      const res_data = await response.json();
      // console.log("res from server extradetails-->" ,res_data.extraDetails) 
     // console.log("messsssssss", res_data.message)
  
      if (response.ok) {  
        storeTokenInLS(res_data.token)
        toast.success('Registered Successfully and you are logged in now')
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } 

      else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
      console.log(response)
    } catch (error) {console.log("register -->");  }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/0002.png"
                  alt="a girl is trying to do registration"
                  width="600"
                  height="500"
                />
              </div>

              {/* let tackle registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3" >registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;