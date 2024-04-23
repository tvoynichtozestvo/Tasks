import MainPage from "../../widgets/MainPage/MainPage.tsx";
import Mainpageimg from "../../widgets/MainpageImg/Mainpageimg.tsx";
import Mainpageimgsecond from "../../widgets/MainpageImgsecond/Mainpageimg.tsx";
import Line from "../../shared/ui/Line/Line.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";
import Header from "../../widgets/Header/Header.tsx";





export default function Home() {
    return(
        <><Header/>
        <MainPage/>
        <Mainpageimg/>
            <Line/>
         <Mainpageimgsecond/>
            <Footer/>
        </>
    )
}