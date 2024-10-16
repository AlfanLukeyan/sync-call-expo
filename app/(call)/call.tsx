import { StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import React from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Call() {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView
        lightColor={Colors.light.background}
        darkColor={Colors.dark.background}
        style={styles.container}
      >
        <ThemedView style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.dismiss()}>
            <Ionicons
              size={24}
              name="arrow-back"
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
          </TouchableOpacity>
          <ThemedText type="default">End-to-end encryted</ThemedText>
          <TouchableOpacity>
            <Ionicons
              name="person-add"
              size={24}
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={{ flex: 1, rowGap: 5 }}>
          <ThemedView
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
            style={{
              flex: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText>Widagdo</ThemedText>
            <ThemedText type="subtitle">Ringing</ThemedText>
          </ThemedView>
          <ThemedView
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
            style={{
              flex: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText>Widagdo</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView
          style={styles.footerContainer}
          lightColor={Colors.light.secondary}
          darkColor={Colors.dark.secondary}
        >
          <TouchableOpacity>
            <ThemedView
              style={{ borderRadius: 30, padding: 10 }}
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
            >
              <Ionicons
                size={24}
                name="camera-reverse"
                color={
                  colorScheme === "light"
                    ? Colors.light.background
                    : Colors.dark.background
                }
              />
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedView
              style={{ borderRadius: 30, padding: 10 }}
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
            >
              <Ionicons
                size={24}
                name="mic"
                color={
                  colorScheme === "light"
                    ? Colors.light.background
                    : Colors.dark.background
                }
              />
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedView
              style={{ borderRadius: 30, padding: 10 }}
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
            >
              <Ionicons
                size={24}
                name="videocam-off"
                color={
                  colorScheme === "light"
                    ? Colors.light.background
                    : Colors.dark.background
                }
              />
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedView
              style={{ borderRadius: 30, padding: 10 }}
              lightColor="red"
              darkColor="red"
            >
              <Ionicons
                size={24}
                name="call"
                color={
                  colorScheme === "light"
                    ? Colors.light.background
                    : Colors.dark.background
                }
              />
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    rowGap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
