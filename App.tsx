import RootStack from "./navigation/RootStack";
import {ThemeContextProvider} from "./context/ThemeContext";
import {FoodProvider} from "./context/FoodContext";
import {VoiceReaderProvider} from "./context/VoiceReaderContext";
import {UserInfoProvider} from "./context/UserInfoContext";

export default function App() {
    return (
        <UserInfoProvider>
            <VoiceReaderProvider>
                <ThemeContextProvider>
                    <FoodProvider>
                        <RootStack/>
                    </FoodProvider>
                </ThemeContextProvider>
            </VoiceReaderProvider>
        </UserInfoProvider>
    );
}

