import { useState } from "react"

const Todotop: React.FC = () => { // Specify the component type

    const [display, setDisplay] = useState<string>(""); // Add type for useState

    function handleClick(): void { // Specify return type
        // Handle click logic here
    }

  return (
    <div className="flex gap-2 mt-4">       
            <input type="text" className="border border-solid py-2 rounded-lg px-4" />
            <button className="text-white bg-black text-sm rounded-lg px-6" onClick={handleClick}>Add</button> {/* Added onClick handler */}
    </div>
  )
}

export default Todotop