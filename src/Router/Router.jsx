import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import ViewScore from "../Component/ViewScore/ViewScore";
import ArrangeMatch from "../Component/ArrangeMatch/ArrangeMatch";
import MatchScoreEntry from "../Component/MatchScoreEntry/MatchScoreEntry";
import SignIn from "../Component/SignIn/SignIn";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/viewScore',
                element:<ViewScore></ViewScore> 
            },
            {
                path:'/arrangeMatch',
                element:<ArrangeMatch></ArrangeMatch>
            },
            {
                path:'/scoreEntry',
                element:<MatchScoreEntry></MatchScoreEntry>
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default Router;