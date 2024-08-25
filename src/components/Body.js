import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

    const dispatch = useDispatch();


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in,
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    }, [])

    return (
        <div>
           <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;




// if (user) {
//               // User is signed in,
//               const {uid, email, displayName} = user;
//               dispatch(addUser({uid: uid, email: email, displayName: displayName}));
// above is part of a function that checks if a user is signed in, and if so, it extracts some details about the user and dispatches an action to add the user's information to a state management system.