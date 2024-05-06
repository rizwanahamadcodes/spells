import { RouterProvider, createBrowserRouter } from "react-router-dom";
import pathConstants from "./routes/pathConstants";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Spells from "./pages/Spells";
import SpellDetails from "./pages/SpellDetails";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
    {
        path: pathConstants.HOME,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: pathConstants.SPELLS,
                children: [
                    {
                        index: true,
                        element: <Spells />,
                    },
                    {
                        path: pathConstants.SPELL_DETAILS,
                        element: <SpellDetails />,
                    },
                ],
            },
            {
                path: pathConstants.FAVORITES,
                element: <Favorites />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
