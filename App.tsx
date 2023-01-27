import RootStack from "./navigation/RootStack";
import {ThemeContextProvider} from "./context/ThemeContext";
import {FoodProvider} from "./context/FoodContext";

export default function App() {
    return (
        <ThemeContextProvider>
            <FoodProvider>
                <RootStack/>
            </FoodProvider>
        </ThemeContextProvider>
    );
}

