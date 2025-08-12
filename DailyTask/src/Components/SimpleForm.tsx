import { useState } from "react"



function SimpleForm() {
   const [value, setValue] = useState("");
   const [display, setDisplay] = useState("");

   const handleClick = (e: React.MouseEvent) => {
       e.preventDefault();
       setDisplay(value);
     };

     const handleEraser = (e: React.MouseEvent) => {
      e.preventDefault();
      setDisplay("");
     }

   
  return (
    <>
      <div className="flex justify-center items-center">

        <div className="flex justify-center items-center border-2 w-[270px] h-[130px] mt-[100px]">
        <form className="flex flex-col gap-4" action="">
        <div className="flex gap-2">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="border-1" type="text" />
          <button onClick={handleClick} className="border-1 p-1">Add</button>
        </div>
          <p>Name:{display}</p>
          <button onClick={handleEraser} className="border-1 w-[100px]">Erase</button>
        </form>
        </div>

      </div>
    </>
  )
}

export default SimpleForm;