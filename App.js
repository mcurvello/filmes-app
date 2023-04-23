import { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "./src/services/api";
import Filmes from "./src/Filmes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get("r-api/?api=filmes");
    this.setState({ filmes: response.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.loading}>
          <ActivityIndicator color="#09a6ff" size={40} />
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
