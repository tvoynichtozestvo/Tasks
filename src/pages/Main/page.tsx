import MainPage from "../../widgets/MainPage/MainPage.tsx";
import Mainpageimg from "../../widgets/MainpageImg/Mainpageimg.tsx";
import Mainpageimgsecond from "../../widgets/MainpageImgsecond/Mainpageimg.tsx";
import Line from "../../widgets/Line/Line.tsx";

export default function Home() {
    return(
        <>
        <MainPage/>
        <Mainpageimg/>
            <Line/>
         <Mainpageimgsecond/>
        </>
    )
}