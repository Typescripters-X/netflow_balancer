import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";


const LoginPage = React.lazy(() => import("./pages/auth/LoginPage"));
const OverViewPage = React.lazy(() => import("./pages/admin/OverViewPage"));
const ClientsPage = React.lazy(() => import("./pages/admin/ClientsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));


const App = () => {
  return (
    <Suspense fallback={<h2>loading... </h2>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<OverViewPage />} />
            <Route path="clients" element={<ClientsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App