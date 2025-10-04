import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import { AppProvider } from "@/context/AppContext";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AppProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}
