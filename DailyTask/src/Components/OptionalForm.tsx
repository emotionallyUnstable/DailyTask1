import { useState } from "react"


function OptionalForm() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isErrorEmail, setIsErrorEmail] = useState(false);
 const [isErrorPassword, setIsErrorPassword] = useState(false);
//  const [value, setValue] = useState("");

const handleSubmit = (e: React.MouseEvent) => {
  e.preventDefault();

  let isValid = true;

  if (password.length >= 6) {
    setIsErrorPassword(false)
  } else {
    setIsErrorPassword(true);
    isValid = false;
  }
  if (email.includes("@") && email.includes(".")) {
    setIsErrorEmail(false)
  } else {
    setIsErrorEmail(true);
    isValid = false;
  }

  if(isValid) {
    alert("Welcome");
  } else {
    alert("Access Denied");
  }

}

  return (
    <>
      <div>

        <div className="flex justify-center mt-[100px]">
          <form className="border-1 flex flex-col w-[300px] h-[150px] gap-5" action="">

            <div className="flex justify-around mt-[10px]">
              <label htmlFor="email">Email:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={`border-1 ${isErrorEmail ? "border-red-500" : ""}`} type="email" id="email" required />
            </div>

            <div className="flex justify-around">
              <label htmlFor="password" id="password">Password:</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className={`border-1 ${isErrorPassword ? "border-red-500" : ""}`} type="password" id="password" required />
            </div>

            <button onClick={handleSubmit} className="ml-[100px] border-1 w-[100px]">Sign In</button>

          </form>
        </div>
  
      </div>
    </>
  )
}

export default OptionalForm;