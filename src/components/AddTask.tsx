import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitle.state";
import { completeTaskState } from "../states/completeTask.state";
import { Task } from "../Types/Task";

const AddTask: React.FC = () => {
  type ID = string;
  //追加されたTODOを管理
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);
  //完了TODOを管理
  const [completeTask, setCompleteTask] = useRecoilState(completeTaskState);
  //編集内容を取得する
  const [inputEditText, setInputText] = useState("");
  //編集状態を管理するstate
  const [editTodo, setEditTodo] = useState(false);

  //削除ボタン機能
  const onClickDelete = (id: ID) => {
    const newTask = addTitle.filter((task) => task.id !== id);
    setAddTitle(newTask);
  };

  //完了ボタン
  const onClickComplete = (id: ID) => {
    //クリックされたタスクを取得
    const clickedTask = addTitle.find((task) => task.id === id);
    if (!clickedTask) return;
    //未完了タスクの配列を作成
    const newInComoleteTask = addTitle.filter((task) => task.id !== id);
    //未完了タスクをセット
    setAddTitle(newInComoleteTask);
    //完了タスクをセット
    setCompleteTask([...completeTask, clickedTask]);
  };
  //編集ボタンが押された処理
  const onClickEditTask = (id: ID) => {
    //クリックされたインデックスを見つける
    const EditTodo = addTitle.find((task) => task.id === id);
    console.log(EditTodo);
    if (!EditTodo) return;
    setEditTodo(true);
  };

  //編集内容
  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  //編集内容を保存
const onClickSave = (id: ID) => {
  // 入力された編集内容を取得
  const editedTitle: string = inputEditText;
  
  // Task一覧を更新する
  const updatedTasks: Task[] = addTitle.map((task: Task) => {
    if (task.id !== id) {
      return { ...task, title: editedTitle };
    }
    return task;
  });

  // 編集されたタスクリストをセットする
  setAddTitle(updatedTasks);
  // 編集モードを終了する
  setEditTodo(false);
  // 編集内容をリセットする
  setInputText("");
};

  const onClickCancel = () => {
    setEditTodo(false);
  };

  return (
    <div>
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task) => (
          <li key={task.id}>
            {task.title}
            <button type="button" onClick={() => onClickComplete(task.id)}>
              完了
            </button>
            <button type="button" onClick={() => onClickEditTask(task.id)}>
              編集
            </button>
            <button type="button" onClick={() => onClickDelete(task.id)}>
              削除
            </button>
            <select>
              <option value="status">未実施</option>
              <option value="status">進行中</option>
            </select>
          </li>
        ))}
      </ul>
      {editTodo && (
        <div>
          <input type="text" onChange={onChangeEdit} value={inputEditText} />
          <button onClick={(task) => onClickSave(task.id)}>保存</button>
          <button onClick={onClickCancel}>キャンセル</button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
