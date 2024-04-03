import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/addTitle.state";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  //メモを保持するための状態を取得
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [inputTitle]
  );

  const handleClick = () => {
    if(inputTitle !== "") {
      setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    } else {
      return alert("エラー：入力してください")
    }
    setInputTitle("");
  };

  return (
    <div className="">
      <input type="text" onChange={onChange} value={inputTitle} placeholder="新しいTODOを入力"/>
      <button type="button" onClick={handleClick}>追加</button>
    </div>
  );
};

export default InputTask;
