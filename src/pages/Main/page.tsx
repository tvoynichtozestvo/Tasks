import MainPage from "../../widgets/MainPage/MainPage.tsx";
import Mainpageimg from "../../widgets/MainpageImg/Mainpageimg.tsx";
import Mainpageimgsecond from "../../widgets/MainpageImgsecond/Mainpageimg.tsx";
import Line from "../../shared/ui/Line/Line.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";
import SideBar from "../../widgets/SideBar/SideBar.tsx";




export default function Home() {
    return(
        <>
            <SideBar task={'active'}/>
        <MainPage/>
        <Mainpageimg/>
            <Line/>
         <Mainpageimgsecond/>
            <Footer/>
        </>
    )
}