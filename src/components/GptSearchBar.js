import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"


const GptSearchBar = () => {

  const langKey = useSelector(store => store?.config?.lang)

  return (
    <div className="pt-[9%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input type="text" 
            className="p-2 mx-1 my-2 col-span-9 rounded-lg ml-2 border border-red-600" 
            placeholder={lang[langKey].gptSearchPlaceholder} 
            />
            <button className="px-4 py-2 my-2 bg-blue-900 mx-4 col-span-3 font-medium text-white rounded-lg">
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar