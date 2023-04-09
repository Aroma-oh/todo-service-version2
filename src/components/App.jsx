import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Header } from "../layout/Header";
import { Sidebar } from "../layout/Sidebar";
import { Main } from "../layout/Main";
import { CreateModal } from "../components/CreateModal";
import { Calendar } from "./calendar/Calendar";

function App() {
    const themeMode = useSelector((state) => state.theme.themeMode);
    const theme = useSelector((state) => state.theme.theme[themeMode]);
    const type = useSelector((state) => state.event.type);

    return (
        <>
            {/* ThemeProvider의 theme prop은 객체로 전달되어야함 */}
            <ThemeProvider theme={theme}>
                <Header />
                <Sidebar />
                <Main />
                <CreateModal type />
                <Calendar />
            </ThemeProvider>
        </>
    );
}

export default App;
