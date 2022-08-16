import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: "#262626",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskName: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 8,
  },
  taskNameFinished: {
    flex: 1,
    fontSize: 16,
    color: "#808080",
    marginLeft: 8,
    textDecorationLine: 'line-through'
  },

  button: {
    width: 32,
    height: 32,
    borderRadius: 5,
    padding: 20,

    alignItems: "center",
    justifyContent: "center",
  },
});
