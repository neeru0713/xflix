import MainSection from "./MainSection";
import Header from "./Header";

function Home(props){
    return(
        <div>
            <Header showSubHeader="true" showSearchBar="true" showButton="true"></Header> 
            <MainSection></MainSection>
        </div>
       
    )
}

export default Home
