import "./App.scss";
import { GlobalStyles } from "./GlobalStyles";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        blue: "#2979ff",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles></GlobalStyles>
            <CardList>
                <Card2 secondary={true}></Card2>
            </CardList>
        </ThemeProvider>
    );
}

export default App;
