import { Route, Routes } from "react-router-dom"
import HomePage from "../pages"
import { CarsPage } from "../pages/cars"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarsPage />} />
            </Routes>
        </>
    )
}
