import "./App.scss";

//////// Card
// import { GlobalStyles } from "./GlobalStyles";
// import Card2 from "./components/card/Card2";
// import { ThemeProvider } from "styled-components";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";

// const theme = {
//     colors: {
//         blue: "#2979ff",
//     },
// };

/**
 * Card Again
 */
import CardAgain from "./components/cardAgain/CardAgain";
import CardAgainList from "./components/cardAgain/CardAgainList";
import { GlobalStylesAgain } from "./GlobalStylesAgain";

function App() {
    return (
        // <ThemeProvider theme={theme}>
        //     <GlobalStyles></GlobalStyles>
        //          <CardList>
        //              <Card2 secondary={true}></Card2>
        //          </CardList>
        // </ThemeProvider>

        // <div>
        //     <CardList>
        //         <CardTailwind primary fontSize="text-2xl"></CardTailwind>
        //     </CardList>
        // </div>

        //////////////// Card Again ////////////////
        <div>
            <GlobalStylesAgain></GlobalStylesAgain>
            <CardAgainList>
                <CardAgain secondary={true}></CardAgain>
                <CardAgain></CardAgain>
                <CardAgain></CardAgain>
                <CardAgain></CardAgain>
                <CardAgain></CardAgain>
                <CardAgain></CardAgain>
            </CardAgainList>
        </div>
    );
}

export default App;
