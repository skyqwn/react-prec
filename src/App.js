import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집!";
  let [title, setTitle] = useState([
    "남자코트추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [changeTitle, setChangeTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          setTitle(copy.sort());
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      {title.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setChangeTitle(i);
              }}
            >
              {title[i]}
              <span
                onClick={() => {
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>7월 23일 발행</p>
          </div>
        );
      })}
      {modal === true ? (
        <Modal changeTitle={changeTitle} setTitle={setTitle} title={title} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[props.changeTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
};

export default App;
