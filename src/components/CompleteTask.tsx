import { completeTaskState } from "../states/completeTask.state";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inCompleteTitleState } from "../states/inCompleteTitle";
import { addTitleState } from "../states/addTitle.state";

const CompleteTask = () => {
  type ID = string;
  //完了したタスク一覧を管理
  const [completeTask, setCompleteTask] = useRecoilState(completeTaskState);
  //未完了のタスク一覧の管理
  const [inCompleteTitle, setInCompleteTitle] = useRecoilState(inCompleteTitleState)
  const setAddTitle = useSetRecoilState(addTitleState)

  const handleReturn = (id: ID) => {
    //クリックされたタスクを取得
    const clickedTask = completeTask.find((task) => task.id === id)
    if(!clickedTask) return;
    //未完了タスクの配列を作成
    const newInComoleteTask =  [...inCompleteTitle, clickedTask];
    // 完了タスクの配列からクリックされたタスクを削除
    const newCompleteTask = completeTask.filter((task) => task.id !== id);
    //完了タスクのセット
    setCompleteTask(newCompleteTask)
    //未完了タスクのセット
    setInCompleteTitle(newInComoleteTask)
    //タスク一覧を更新する
    setAddTitle(newInComoleteTask)
  }

  const onClickCompleteDelete = (id: ID) => {
    const deleteTask = completeTask.filter((task) => task.id !== id)
    setCompleteTask(deleteTask)
  }

  return (
    <div>
      <div>
      <p>完了したタスク一覧</p>
      <ul>
      {completeTask.map((task) => (
        <li key={task.id}>
          {task.title}
          <button type="button" onClick={() => handleReturn(task.id)}>戻す</button>
          <button type="button" onClick={() => onClickCompleteDelete(task.id)}>削除</button>
        </li>
      ))}
      </ul>
      </div>
    </div>
  )
}

export default CompleteTask
