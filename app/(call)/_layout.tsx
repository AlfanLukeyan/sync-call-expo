import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function CallLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="call"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
