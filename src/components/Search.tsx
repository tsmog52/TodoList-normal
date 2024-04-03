import { useRecoilState, useRecoilValue } from 'recoil';
import { searchTitleState } from '../states/searchTitle';
import { useCallback } from 'react';
import { addTitleState } from '../states/addTitle.state';
import { Task } from '../Types/Task';

const Search = () => {
  //入力の状態を保持する
  const [inputSearchTitle, setInputSearchTitle] = useRecoilState(searchTitleState);
  const addTitle = useRecoilValue(addTitleState)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputSearchTitle(e.target.value);
    },
    [inputSearchTitle]
  );

  const handleClick = () => {
  const filteredData: Task[] = addTitle.filter((taskItem) => taskItem.title.includes(inputSearchTitle));
  const titles: string[] = filteredData.map(task => task.title)
  if(filteredData.length === 0) {
    alert('検索条件に一致しません')
  } return
  setInputSearchTitle("")
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={inputSearchTitle} placeholder='検索キーワードを入力'/>
      <button type="button" onClick={handleClick}>検索</button>
      <ul>
      {addTitle.map((task, index) => {
          if (inputSearchTitle && task.title.includes(inputSearchTitle)) {
            return <li key={index}>{task.title}</li>;
          }
          return null;
        })}      
      </ul>
    </div>
  )
}

export default Search
