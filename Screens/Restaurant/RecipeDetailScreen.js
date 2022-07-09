import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import SPACING from "../../config/SPACING";
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/Restaurant/colors";

const RecipeDetailScreen = ({ recipe }) => {
  return (
    <View>
      <Text>RecipeDetailScreen</Text>
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});
