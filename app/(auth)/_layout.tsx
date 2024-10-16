import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Loader from "@/components/Loader";
// import { useGlobalContext } from "../../context/GlobalProvider";
import { Redirect } from "expo-router";

const AuthLayout = () => {
  //   const { loading, isLogged } = useGlobalContext();
  const isLogged = false;

  if (isLogged) {
    return <Redirect href="/(tabs)" />;
  }
  //   if (!loading && isLogged) {
  //     return <Redirect href="/home" />;
  //   }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* Loader shows while loading */}
      {/* <Loader isLoading={loading} /> */}

      <StatusBar backgroundColor="#161622" style="light" />
    </View>
  );
};

export default AuthLayout;
