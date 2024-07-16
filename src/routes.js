import Favoritos from "paginas/Favoritos"
import Inicio from "./paginas/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "paginas/Player"
import NaoEncontrada from "paginas/NaoEncontrada"
import PaginaBase from "paginas/PaginaBase"

function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />} />
                            <Route path="favoritos" element={<Favoritos />} />
                            <Route path=":id" element={<Player />}/>
                            <Route path="*" element={NaoEncontrada} />
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes