import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SIZES } from "../../../constants";
import styles from "./tabs.style.js";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TabButton
              name={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab(item)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
