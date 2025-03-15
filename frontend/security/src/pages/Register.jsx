import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({ setToken, setRoles }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    roles: ["USER"],
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      const response = await axios.post("/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      // const { jwt } = response.data;
      // setToken(jwt);
      // localStorage.setItem("token", jwt);
      // const roles = parseJwt(jwt).roles.map((r) => r.authority);
      // setRoles(roles);
      // localStorage.setItem("roles", JSON.stringify(roles));
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration failed");
    }
  };

  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  };

  return (
    <div className="form-card">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        {/* Uncomment for testing roles */}
        {/* <div>
          <label>Roles (e.g., USER,ADMIN)</label>
          <input
            type="text"
            value={formData.roles.join(',')}
            onChange={(e) => setFormData({ ...formData, roles: e.target.value.split(',') })}
          />
        </div> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
