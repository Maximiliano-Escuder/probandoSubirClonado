import React from 'react'
import { Header, Navbar, ListContainer } from "./headerStyles"

const HeaderComponent = ({ tareasTotales, tareasTerminadas, tareasPendientes }) => (
  (
    <Header>
      <Navbar>
        <ListContainer>
          <ul>
            <li>Todas: {tareasTotales.length}</li>
            <li>Terminadas: {tareasTerminadas.length}</li>
            <li>Pendientes: {tareasPendientes.length}</li>
          </ul>
        </ListContainer>
      </Navbar>
    </Header>
  )
)

export default HeaderComponent;