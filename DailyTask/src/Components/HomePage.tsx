import { useNavigate } from 'react-router-dom'


function HomePage() {
    const navigate = useNavigate();
  // const [count, setCount] = useState(0)


  return (
    <>
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 ">
            <button onClick={() => navigate("/maintask")} className="border-1 w-[120px]">Simple Form</button>
            <button className="border-1 w-[120px]">Optional Form</button>
        </div>
    </div>
    </>
  )
}

export default HomePage;