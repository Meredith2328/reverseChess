# Reverse Drop Chess (10x10)

![pic](./pic.png)

## 中文说明

### 项目简介

这是一个可直接在浏览器打开的 10x10 黑白棋变体小游戏，支持：

- 本地 1v1
- PVE（白方 AI）
- 远程 1v1（PeerJS）

无需安装依赖或构建工具，直接打开 `index.html` 即可运行。

### 规则

- 棋盘大小：`10 x 10`
- 移动方式：选择己方棋子，向上下左右移动一步到空格
- 黑棋先手
- 翻面判定基于“落点三面”（不考虑来路那一面）
- 边界外按“墙”处理，不算空位

以移动黑棋为例，关键是**复制、同化、保留和被同化**这四种情况：

1. （**复制**）如果走到的地方周围三面为空（不考虑移动前的位置，因为总是为空，下同），则任取一面置黑色。
2. （**同化**）如果一面有白棋、两面为空，则将白棋和任意一面空的同时置为黑色。
3. （**保留**）如果两面有白棋、一面为空，则啥也不做。
4. （**被同化**）如果三面有白棋，则踩过去自己变白棋。
5. 如果某方无路可走，或者只剩一个棋子，则游戏结束，确定胜负。

### 开局与对局

- 可设置开局黑白数量（默认 `3 + 5`）
- 支持手动摆子和随机摆子
- 摆子完成后自动开始对局

### 联机

- 在线主机：执黑
- 在线加入：执白
- 使用 PeerJS 公共服务，需要联网

### 项目结构

```text
reverseChess/
  index.html
  assets/
    css/style.css
    js/game.js
```

### 自适应显示

- 页面保留正常滚动，避免内容裁切
- 棋盘尺寸会根据视口高度自动收缩，并保持正方形比例
- 鼠标滚轮可正常滚动页面

---

## English

### Overview

This is a browser-openable 10x10 reverse chess variant with:

- Local 1v1
- PVE (White AI)
- Online 1v1 (PeerJS)

No installation or build step is required. Open `index.html` directly.

### Rules

- Board size: `10 x 10`
- Movement: select your piece and move exactly one orthogonal step to an empty cell
- Black moves first
- Flip logic is evaluated from the three sides around the landing cell (excluding the source side)
- Off-board counts as wall (not empty)

Taking a black move as an example:

1. If all three adjacent sides of the landing square are empty (excluding the source side, which is always empty; same below), choose any one side and place a black piece there.
2. If one side has a white piece and the other two sides are empty, turn that white piece black and also place a black piece on any one of the empty sides.
3. If two sides have white pieces and one side is empty, nothing happens.
4. If all three sides have white pieces, the moved piece itself turns white after stepping there.
5. If either side has no legal moves, or has only one piece left, the game ends and the winner is decided.

### Setup and Match Flow

- You can set initial black/white piece counts (default `3 + 5`)
- Manual setup and random setup are both supported
- The game starts automatically once setup is complete

### Online Play

- Host side: Black
- Join side: White
- Uses PeerJS public infrastructure, internet connection required

### Project Structure

```text
reverseChess/
  index.html
  assets/
    css/style.css
    js/game.js
```

### Adaptive View

- Normal page scrolling is preserved to avoid clipping
- Board size shrinks with viewport height while keeping a square ratio
- Mouse-wheel page scrolling remains available

