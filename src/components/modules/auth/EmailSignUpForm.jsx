import React, { useState } from "react";
import TextFieldUI from "../../ui/TextFieldUI";
import ModalUI from "../../ui/ModalUI";
import ButtonUI from "../../ui/ButtonUI";
import DatePickerUI from "../../ui/DatePickerUI";

const EmailSignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateState, setDateState] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dateState);
    console.log("Form submitted!");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[290px] md:w-[465px] gap-4">
          <div className="flex justify-start">
            <h2 className="text-3xl my-4 font-bold text-white">
              {"Create your account"}
            </h2>
          </div>
          {/* <textarea
              className="w-full p-2 border rounded"
              placeholder="What's happening?"
            /> */}

          <TextFieldUI
            fieldState={name}
            setFieldState={setName}
            disabled={false}
            readOnly={false}
            label="Name"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />
          <TextFieldUI
            fieldState={email}
            setFieldState={setEmail}
            disabled={false}
            readOnly={false}
            label="Email"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />

          <div className="mt-4 max-w-[400px]" role="note">
            <h3
              className="text-gray-200 text-[15px] font-bold"
              id="dob-disclaimer"
            >
              Date of birth
            </h3>
            <p
              className="text-gray-500 text-[13px] mt-1"
              aria-labelledby="dob-disclaimer"
            >
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </div>
          <DatePickerUI setDateState={setDateState} dateFormat="mm/dd/yy" />
          <div className="my-8 mx-auto flex justify center">
            <ButtonUI
              label={"Next"}
              // size="x-large"
              bgColor={"gray"}
              textColor="black"
              externalClass="h-[50px] w-[290px] md:w-[450px] bg-gray-500 text-black"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailSignUpForm;
