import {Button, Card} from "antd";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.wrap}>
      <Card>
        <div>我是一个修改过padding-bottom样式的卡片</div>

        <div>单独访问时padding-bottom为140px</div>

        <div>在微前端中，padding-bottom因为style的顺序问题被覆盖了</div>
      </Card>
    </div>
  );
}

export default App;
