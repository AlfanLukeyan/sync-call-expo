import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "@/constants/Colors";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: object;
  [key: string]: any;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={!showPassword ? "eye-off" : "eye"}
              size={24}
              color={
                colorScheme === "light" ? Colors.light.tint : Colors.dark.tint
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#E5E5E5",
    fontFamily: "Poppins-Medium",
    marginBottom: 8,
  },
  inputContainer: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#1C1C1E",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#333335",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
});

export default FormField;
