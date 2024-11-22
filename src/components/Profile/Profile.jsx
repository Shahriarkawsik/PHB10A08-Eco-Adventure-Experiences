import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == `/profile`) {
      document.title = ` Profile | Eco-Adventure Experiences`;
    }
  }, [pathname]);
  return (
    // className="w-11/12 lg:w-1/2 mx-auto space-y-6 my-32"
    <div className="text-center w-11/12 lg:w-1/2 mx-auto space-y-6 my-32">
      <h1 className="text-color1 text-2xl lg:text-4xl ">
        Welcome{" "}
        <span className="text-color2 font-bold">{user?.displayName}</span> !
        Discover Nature’s Wonders Today!
      </h1>
      <img
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="mx-auto w-64 border-2 rounded-full shadow-xl"
        src={user?.photoURL}
        alt=""
      />
      <h2 className="text-3xl font-bold">{user?.displayName}</h2>
      <p className="text-base font-bold">{user?.email}</p>
      <Link className="btn bg-teal-500 hover:bg-teal-600 text-white" to={"/updateProfile"}>
        Update Profile
      </Link>
    </div>
  );
};

export default Profile;
