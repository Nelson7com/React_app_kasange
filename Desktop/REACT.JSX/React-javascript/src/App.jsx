import Header from "./Header"
import Footer from "./Footer"
import BookSlider from "./Home/Home"
import Stastics from "./stastic/stastic"
import Gallery from "./Gallery/Gallery"

function App() {
  return(
     <>
     <Header/>
     <BookSlider></BookSlider>
     <Stastics></Stastics>

     <Gallery></Gallery>
     
     <Footer name="nelson"></Footer>
     </>
  )
}
export default App
