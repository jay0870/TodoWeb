import { toast } from "react-toastify";
import { Navbar } from "../components/Navbar";

export function ErrorPage() {
    toast.error("Page Not Found");
  return (
    <>
      <Navbar />
      <h1
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          padding: "250px",
          fontFamily:"-moz-initial",
          fontSize:"40px",
          backgroundColor:"white",
          width:"100wh",
          height:"22vh",
          cursor:"default"
         

        }}
      >
        Page Not Found!!
      </h1>
    </>
  );
}
