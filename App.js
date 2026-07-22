import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { initializeAppDatabase } from "./src/database/DatabaseManager";
import ToastProvider from "./src/context/ToastProvider";
import SettingsProvider from "./src/context/SettingsProvider";
import AlbumProvider from "./src/context/AlbumProvider";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function init() {
            await initializeAppDatabase();
            setReady(true);
        }

        init();
    }, []);

    if (!ready) {
        return null;
    }
  
    return (

        <SafeAreaProvider>
  
            <ToastProvider>
        
                <SettingsProvider>
        
                    <AlbumProvider>
        
                        <AppNavigator />
        
                    </AlbumProvider>
        
                </SettingsProvider>
        
            </ToastProvider>
        
        </SafeAreaProvider>
    );
}
