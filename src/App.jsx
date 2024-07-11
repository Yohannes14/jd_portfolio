import LandingPage from "./LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import loading from "./assets/loading.gif";


function App() {


  return (
  
      <div className="bg-light-1">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
      
          {/* <div className="flex w-full min-h-screen justify-center items-center bg-white">
            <img src={loading} alt="Loading Gif" className="w-60" />
          </div> */}
        
      </div>
  );
}

export default App;
