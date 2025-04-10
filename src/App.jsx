import { useState } from "react";
import "./App.css";
// import Layout from "./components/shared/Layout";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import EmailSignUpForm from "./components/modules/auth/EmailSignUpForm";
import ModalUI from "./components/ui/ModalUI";

function App() {
  const [isSignupModalOpen, setIsSignUpModalOpen] = useState(true);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(true);
  return (
    <div className="">
      {/* <Homepage /> */}
      <SignIn />
    </div>
  );
}

export default App;
