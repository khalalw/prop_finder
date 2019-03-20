import { createStackNavigator } from "react-navigation";
import SearchPage from "./app/SearchPage";
import SearchResults from "./app/SearchResults";

export const MainNavigator = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
