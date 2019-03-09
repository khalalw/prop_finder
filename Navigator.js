import { createStackNavigator } from "react-navigation";
import SearchPage from "./app/SearchPage";

export const MainNavigator = createStackNavigator({
  Home: { screen: SearchPage },
});
