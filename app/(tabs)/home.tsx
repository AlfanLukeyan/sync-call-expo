import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  useColorScheme,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();
  const redirectNewMeeting = () => {
    return router.push("/call");
  };

  const usersData = [
    { initial: "R", username: "Rizki" },
    { initial: "R", username: "Rizki" },
    { initial: "R", username: "Rizki" },
    { initial: "A", username: "Alfan" },
    { initial: "A", username: "Alfan" },
    { initial: "A", username: "Alfan" },
    { initial: "A", username: "Alfan" },
    { initial: "A", username: "Alfan" },
    { initial: "A", username: "Alfan" },
    { initial: "B", username: "Budi" },
  ];
  const roomsData = [
    { name: "Daily Stand-Up", code: "XW81489", status: "Expired" },
    { name: "Daily Stand-Up", code: "XW81489", status: "Expired" },
    { name: "Scrum", code: "JSD2414", status: "Expired" },
    { name: "Scrum", code: "JSD2414", status: "Expired" },
    { name: "Scrum", code: "JSD2414", status: "Expired" },
    { name: "Sprint 11", code: "SJDHADAS7", status: "Expired" },
    { name: "Sprint 11", code: "SJDHADAS7", status: "Expired" },
  ];

  const middleIndexRoomsData = Math.ceil(roomsData.length / 2);

  const firstHalfRoomsData = roomsData.slice(0, middleIndexRoomsData);
  const secondHalfRoomsData = roomsData.slice(middleIndexRoomsData);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === "light"
            ? Colors.light.background
            : Colors.dark.background,
      }}
    >
      <StatusBar
        barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
        backgroundColor={
          colorScheme === "light"
            ? Colors.light.background
            : Colors.dark.background
        }
      />
      <ScrollView>
        <ThemedView
          lightColor={Colors.light.background}
          darkColor={Colors.dark.background}
          style={styles.container}
        >
          <ThemedView style={styles.headerContainer}>
            <Ionicons
              size={24}
              name="person"
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
            <ThemedText type="default">Hii, Good noon</ThemedText>
            <Ionicons
              name="notifications"
              size={24}
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
          </ThemedView>
          <ThemedText type="title" style={styles.headline}>
            Using Sync Call makes it EASY~
            <HelloWave />
          </ThemedText>
          <ThemedView
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
            style={styles.cardContainer}
          >
            <ThemedText style={{ textAlign: "center" }}>
              Create and share the meeting code with others that you want to
              meet with
            </ThemedText>
            <Button
              title="New meeting"
              onPress={redirectNewMeeting}
              style={{ marginTop: 20 }}
            />
          </ThemedView>

          <ThemedView
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
            style={styles.cardContainer}
          >
            <ThemedText style={{ textAlign: "center" }}>Contacts</ThemedText>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {usersData.map((user, index) => (
                <View key={index}>
                  <Button title={user.initial} onPress={redirectNewMeeting} />
                  <ThemedText style={{ textAlign: "center", marginTop: 5 }}>
                    {user.username}
                  </ThemedText>
                </View>
              ))}
            </ScrollView>
          </ThemedView>

          <ThemedView
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
            style={styles.cardContainer}
          >
            <ThemedText style={{ textAlign: "center" }}>
              Available room's
            </ThemedText>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {firstHalfRoomsData.map((room, index) => (
                <ThemedView
                  key={index}
                  lightColor={Colors.light.tint}
                  darkColor={Colors.dark.tint}
                  style={styles.cardRoomContainer}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <ThemedText
                        darkColor={Colors.dark.background}
                        lightColor={Colors.light.background}
                      >
                        {room.name}
                      </ThemedText>
                      <View
                        style={{
                          flexDirection: "row",
                          columnGap: 5,
                          marginTop: 10,
                        }}
                      >
                        <ThemedView
                          style={{ borderRadius: 30, paddingHorizontal: 5 }}
                        >
                          <ThemedText
                            darkColor={Colors.dark.text}
                            lightColor={Colors.light.text}
                          >
                            {room.code}
                          </ThemedText>
                        </ThemedView>
                        <ThemedView
                          style={{ borderRadius: 30, paddingHorizontal: 5 }}
                        >
                          <ThemedText
                            darkColor={Colors.dark.text}
                            lightColor={Colors.light.text}
                          >
                            {room.status}
                          </ThemedText>
                        </ThemedView>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor:
                          colorScheme === "light"
                            ? Colors.light.background
                            : Colors.dark.background,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                        paddingHorizontal: 5,
                        marginLeft: 50,
                      }}
                    >
                      <Ionicons
                        name="enter"
                        size={32}
                        color={
                          colorScheme === "light"
                            ? Colors.light.tint
                            : Colors.dark.tint
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </ThemedView>
              ))}
            </ScrollView>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    rowGap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headline: {
    marginVertical: 20,
  },
  cardContainer: {
    borderRadius: 30,
    padding: 30,
  },
  cardRoomContainer: {
    borderRadius: 20,
    padding: 20,
  },
  scrollContainer: {
    paddingVertical: 10,
    columnGap: 9,
  },
});
