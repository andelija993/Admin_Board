import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Bar from "./components/scenes/bar/index"
import Calendar from "./components/scenes/calendar";
import Contacts from "./components/scenes/contacts/index"
import Dashboard from "./components/scenes/dashboard/index"
import FAQ from "./components/scenes/faq/index"
import Form from "./components/scenes/form/index"
// import Geography from "./scenes/geography";
import Invoices from "./components/scenes/invoices/index"
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import Sidebar from "./components/scenes/global/Sidebar"
import Team from "./components/scenes/team/index"
import Topbar from "././components/scenes/global/Topbar"
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;