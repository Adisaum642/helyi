import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Package from "./components/Package/Package"
import FooterBanner from './components/FooterBanner/FooterBanner'


export default function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
      <Package/>
      <FooterBanner/>
    </div>
  )
}
