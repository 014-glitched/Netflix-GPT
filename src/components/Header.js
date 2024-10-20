import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
          
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in,
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
            }
          });
          //unsubscribe when component unmount. onAuthStateChanged returns unsubscribe function
          //
          return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () => {
      //Toggle GPT Search
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
      // console.log(e.target.value); 
      dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black rounded-sm z-10 flex justify-between">
            <img className="w-44 "
             src={LOGO} alt="logo" 
             />
             {user && 
              <div className="flex p-2">
                {showGptSearch && (       //To show language button only on GPT search page
                  <select className="h-9 mt-3 bg-gray-800 text-white rounded-lg" onChange={handleLanguageChange}>
                      {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} 
                      value={lang.identifier}>
                        {lang.name}
                      </option>)} 
                  </select>
                )}
                <button 
                  className="bg-purple-800 px-4 my-2 mx-4 font-medium text-white rounded-lg"
                  onClick={handleGptSearchClick}>
                  {showGptSearch ? "Homepage" : "GPT Search"}
                </button>
                <img 
                className="w-12 h-12"
                src={user?.photoURL} alt="usericon" 
                />
                <button onClick={handleSignOut} className="px-1 font-bold text-white">(Sign Out)</button>
             </div>}
            
        </div>
    )
}

export default Header;





// if (user) {
//               // User is signed in,
//               const {uid, email, displayName} = user;
//               dispatch(addUser({uid: uid, email: email, displayName: displayName}));
// above is part of a function that checks if a user is signed in, and if so, it extracts some details about the user and dispatches an action to add the user's information to a state management system.