import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Card } from "../../components/Card";
import Logo from "../../assets/logo.svg";
import {
  Clipboard,
  ClipboardText,
  Plus,
  PlusCircle,
} from "phosphor-react-native";

import { styles } from "./styles";

interface Props {
  id: number;
  name: string;
  finished: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Props[]>([]);
  const [taskName, setTaskName] = useState("");

  const tasksFinished = tasks.filter(
    (taskFiltered) => taskFiltered.finished === true
  ).length;

  function handleAddTask() {
    if (!taskName.trim()) {
      return Alert.alert(
        "Tarefa já cadastrada!",
        "Já existe um tarefa na lista com esse nome."
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { id: Math.random(), name: taskName, finished: false },
    ]);
    setTaskName("");
  }

  function handleRemoveTask(taskName: string) {
    Alert.alert("Remover", `Remover a tarefa ${taskName}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== taskName)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleFinishTask(taskName: string) {
    const finishedTasks = tasks.map((task) => {
      if (task.name === taskName) {
        return {
          ...task,
          finished: !task.finished,
        };
      }
      return task;
    });
    setTasks(finishedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            {<PlusCircle color="#fff" size={16} />}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskStatusContainer}>
        <View style={styles.taskStatus}>
          <Text style={styles.createdTasksText}>Criadas</Text>
          <Text style={styles.taskCount}>{tasks.length}</Text>
        </View>
        <View style={styles.taskStatus}>
          <Text style={styles.finishedTasks}>Concluídas</Text>
          <Text style={styles.taskCount}>{tasksFinished}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingTop: 20 }}
        renderItem={({ item }) => (
          <Card
            task={item}
            onRemove={() => handleRemoveTask(item.name)}
            onFinished={() => handleFinishTask(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View style={styles.emptyIcon}>
              <ClipboardText color="#808080" size={56} />
            </View>

            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas{"\n"}
            </Text>
            <Text style={styles.listEmptyTextRegular}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </>
        )}
      />
    </View>
  );
}
