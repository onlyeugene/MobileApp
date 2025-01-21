import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";

interface Theme {
  background: string;
  text: string;
  // [key: string]: string; // Add other keys if your theme has more properties
}
interface colorSchemeProps {

}

// Define the type for menu items
interface MenuItem {
  id: number;
  title: string;
  description: string;
}

// Update your MenuScreen component
export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme() ?? "light"; // Default to light if undefined or null
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme); // Assuming colorSchemeProps is an empty interface, this should work

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComp = <View style={styles.seperator} />
  // const headerComp = <Text style={styles.comp}>Top of List</Text>
  const FooterComp = <Text style={{color: theme.text}}>End of Menu</Text>

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item: MenuItem) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => separatorComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={FooterComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
            </View>
            <Image
              style={styles.image}
              source={MenuImages[item.id - 1]} // Assuming the index matches the id
            />
          </View>
        )}
      />
    </Container>
  );
}

// Define your styles
function createStyles(theme: Theme, colorScheme: colorSchemeProps) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    row: {
      flexDirection: "row", // Align image and text horizontally
      width: '100%',
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      // alignItems: 'center',
      // padding: 10,
      borderRadius: 20,
      overflow: 'hidden',
      // borderColor: theme.textColor,
      borderWidth: 1,
      marginHorizontal: 'auto'
      // marginBottom: 10, // Adds spacing between items
      // backgroundColor: theme.background,
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
      // fontSize: 16,
      // fontWeight: "bold",
      // marginBottom: 5,
    },
    menuItemTitle :{
      fontSize: 18,
      textDecorationLine: 'underline'
    },
    menuItemText :{
      color: theme.text,
    },
    description: {
      // color: theme.textColor,
      // fontSize: 14,
    },
    image: {
      width: 100,
      height: 100,
      // resizeMode: "cover",
      // marginLeft: 10, // Adds spacing between text and image
    },
    seperator: {
      height: 1,
      backgroundColor:  colorScheme === 'dark' ? 'papayawhip' : '#000',
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    footerComp :{
      marginHorizontal: 'auto'
    },
  });
}
