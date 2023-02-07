import MyNavbar from "../../components/navbar"
import Footer from "../footer"
import Signin from "./signin"

export default function SignIn() {
  return (
    < >  
      <MyNavbar/>
      <div className="pb-64 pt-32 mx-auto">
        <Signin/>
      </div>
      <Footer/>
    </>
  )
}