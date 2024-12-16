import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CharacterCounter from './components/CharacterCounter'
// import CharacterCounter2 from './components/CharacterCounter'
import { doSomething } from './components/CharacterCounter'
import EmployeeComponent from './components/EmployeeComponent'
import SalaryComponent from './components/SalaryComponent'
import SalaryContext, { SalaryContextProvider } from './contexts/SalaryContext'
import OvertimeComponent from './components/OvertimeComponent'
import OvertimeContext, { OvertimeContextProvider } from './contexts/OvertimeContext'
import EmployeeList from './pages/EmployeeList'
import EmployeeView from './pages/EmployeeView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import EmployeeEdit from './pages/EmployeeEdit'
import EmployeeCreate from './pages/EmployeeCreate'
import Login from './pages/Auth/Login'
import { AuthContextProvider } from './contexts/AuthContext'
import SecureRoutes from './SecureRoutes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <CharacterCounter /> */}
      {/* <OvertimeContextProvider>
        <SalaryContextProvider>
          <OvertimeContext.Consumer>
            {(overtimeProvider) => (
              <SalaryContext.Consumer>
                {(salaryProvider) => (
                  <>
                    <EmployeeComponent Id="007" firstName="James" lastName="Bond" age="35" salaryProvider={salaryProvider} overtimeProvider={overtimeProvider} />
                    <SalaryComponent />
                    <OvertimeComponent />
                  </>
                )}
              </SalaryContext.Consumer>
            )}
          </OvertimeContext.Consumer>
        </SalaryContextProvider>
      </OvertimeContextProvider> */}

      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<SecureRoutes />}>
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/create" element={<EmployeeCreate />} />
              <Route path="/employees/:id" element={<EmployeeView />} />
              <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>

    </>
  )
}

export default App
