// pages/Janken.jsx

import { useState } from "react";
import { ActionButton } from "../components/ActionButton";
import "./App.css";

export const Jankenv3 = () => {
  const [jankenResult, setJankenResult] = useState({
    myHand: "勝負！",
    comHand: "スタンバイ",
    result: "判定",
  });

  const [history, setHistory] = useState([]);

  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー","キュー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 4);
    const resultSheet = [
      ["あいこ", "勝ち", "あいこ","負け"],
      ["負け", "あいこ", "勝ち","あいこ"],
      ["あいこ", "負け", "あいこ","勝ち"],
      ["勝ち", "あいこ", "負け","あいこ"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };

  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    setHistory([result, ...history]);
  };

  return (
    <>
      <p>じゃんけんの画面</p>
       <div className="push-button">
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />
      <ActionButton text="キュー" action={() => getJanken("キュー")} />
       </div>
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>
      <p>戦歴</p>
      <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {/* 🔽 履歴の配列から要素を生成して表示する */}
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};