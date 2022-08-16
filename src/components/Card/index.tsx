import { Trash, Circle, CheckCircle } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  task: {
    name: string;
    finished: boolean;
  };
  onRemove: () => void;
  onFinished: () => void;
};

export function Card({ task, onRemove, onFinished }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onFinished}>
        {task.finished ? (
          <CheckCircle size={24} color="#8284FA" />
        ) : (
          <Circle size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      {task.finished ? (
        <Text style={styles.taskNameFinished}>{task.name}</Text>
      ) : (
        <Text style={styles.taskName}>{task.name}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        {<Trash size={24} color="#808080" />}
      </TouchableOpacity>
    </View>
  );
}
