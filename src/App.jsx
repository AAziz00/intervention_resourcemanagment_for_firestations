import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./Pages/Login";

import DashBoard from "./Pages/DashBoard";
import Services from "./Pages/Services";
import Incidents from "./Pages/Incidents";
import Employee from "./Pages/Employee";
import Attendence from "./Pages/Attendence";
import Events from "./Pages/Events";
import Inventory from "./Pages/inventory";
import ResourceManagment from "./Pages/ResourceManagment";
import Checkin_out from "./Pages/Checkin-out";
import Training from "./Pages/Training";
import PageNotFound from "./Pages/PageNotFound";
import AuthProvider from "./contexts/LoginAuthContext";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route
            path="app"
            element={
              <PrivateRoute>
                <AppLayout />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="services" element={<Services />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="employee" element={<Employee />} />

            <Route path="attendence" element={<Attendence />} />
            <Route path="training" element={<Training />} />

            <Route path="resourcemanagment" element={<ResourceManagment />} />
            <Route path="events" element={<Events />} />
            <Route path="inventory" element={<Inventory />} />

            <Route path="checkin_out" element={<Checkin_out />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
