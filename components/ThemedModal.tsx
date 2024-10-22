import React from "react";
import {
  Modal,
  ViewProps,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedModalProps = ModalProps &
  ViewProps & {
    lightColor?: string;
    darkColor?: string;
  };

export function ThemedModal({
  children,
  lightColor,
  darkColor,
  style,
  ...modalProps
}: ThemedModalProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <Modal {...modalProps}>
      <TouchableWithoutFeedback onPress={modalProps.onRequestClose}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={[
              { backgroundColor },
              style,
              { padding: 20, borderRadius: 30 },
            ]}
          >
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
