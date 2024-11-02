import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const SafeView = ({ children }) => {
  return (
    <>
 
    <SafeAreaProvider>
        <SafeAreaView>

            {children}
            </SafeAreaView>
      </SafeAreaProvider>
    
      
    </>
  );
};
