import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
  },
  taskStatusContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 32,
  },
  taskStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdTasksText: {
    fontSize: 16,
    color: "#1E6F9F",
    fontWeight: "normal",
  },
  taskCount: {
    color: "#fff",
    backgroundColor: "#262626",
    borderRadius: 999,
    width: 24,
    height: 19,
    textAlign: "center",
    marginLeft: 8,
  },
  finishedTasks: {
    fontSize: 16,
    color: "#5E60CE",
  },
  emptyIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 16,
    fontWeight: "bold",
  },
  listEmptyTextRegular: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
  },
});
