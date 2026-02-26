const SIZE = 10;
    const EMPTY = 0;
    const BLACK = 1;
    const WHITE = 2;
    const DIRS = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];

    const I18N = {
      zh: {
        page_title: "贴贴棋",
        game_title: "贴贴棋 10x10",
        lang_title: "语言",
        lang_zh: "简体中文",
        lang_en: "English",
        mode_title: "模式",
        mode_local: "本地1v1",
        mode_pve: "PVE",
        mode_host: "在线主机",
        mode_join: "在线加入",
        setup_title: "开局",
        label_black: "黑",
        label_white: "白",
        btn_manual_setup: "手动摆子",
        btn_random_setup: "随机摆子",
        btn_restart: "重新开局",
        remote_title: "远程",
        btn_create_room: "创建房间",
        btn_disconnect: "断开",
        placeholder_room_id: "房间号",
        btn_join_room: "加入房间",
        state_title: "状态",
        room_not_connected: "未连接",
        room_id_prefix: "房间号: {id}",
        connected_prefix: "已连接: {id}",
        joined_prefix: "已加入: {id}",
        stats_text: "黑: {black} | 白: {white}",
        hint_rules: "游戏规则：以移动黑棋为例,<br>如果走到的地方周围三面为空（不考虑移动前的位置，因为总是为空，下同），则任取一面置黑色；<br>如果一面有白棋、两面为空，则将白棋和任意一面空的同时置为黑色；<br>如果两面有白棋、一面为空，则啥也不做；<br>如果三面有白棋，则踩过去自己变白棋。<br>如果某方无路可走，或者只剩一个棋子，则游戏结束，确定胜负。",
        status_setup_manual: "手动摆子：先摆黑棋，再摆白棋。",
        status_setup_not_enough: "摆子数量不足。",
        status_setup_count_line: "黑({blackNow}/{blackTarget}) 白({whiteNow}/{whiteTarget})",
        status_piece_over_capacity: "棋子总数超过棋盘容量。",
        status_random_ready: "随机摆子完成。",
        status_black_skip_start: "黑方开局无路可走，回合跳过到白方。",
        status_black_turn: "黑棋回合",
        status_white_turn: "白棋回合",
        status_choose_move_hint: "请选择一个{side}棋移动至上/下/左/右中的任一方向。",
        status_game_over_black: "终局：黑胜 ({black}:{white})",
        status_game_over_white: "终局：白胜 ({white}:{black})",
        status_game_over_draw: "终局：平局 ({black}:{white})",
        status_setup_complete: "摆子完成。",
        status_placing_black: "正在摆黑棋。",
        status_placing_white: "正在摆白棋。",
        status_action_required_finish: "需要额外落子。\n请点击一个高亮格完成本次走子。",
        status_action_required_place: "需要额外落子。\n请点击一个高亮格放置额外棋子。",
        status_illegal_move: "非法移动",
        reason_out_of_board: "越界",
        reason_source_not_yours: "起点不是己方棋子",
        reason_target_not_empty: "目标格非空",
        reason_only_one_step: "只能直线走一步",
        reason_invalid_extra_target: "额外落子位置非法",
        status_move_request_sent: "已发送走子请求，等待主机确认。",
        status_move_failed: "走子失败",
        status_no_legal_move_skip: "{side}方无路可走，回合跳过。",
        status_ai_thinking: "白棋（AI）思考中...",
        status_switch_host_mode: "请先切换到“在线主机”。",
        status_room_created: "房间已创建，等待对手加入。",
        status_switch_join_mode: "请先切换到“在线加入”。",
        status_input_room_id: "请输入房间号。",
        status_network_error: "联机错误: {msg}",
        status_peer_disconnected: "连接已断开。",
        status_cannot_init_network: "无法创建联机: {msg}",
        status_connected_host_guest: "联机成功。主机黑先，加入方白棋。",
        status_opponent_disconnected: "对手离线。",
        status_data_channel_error: "数据通道错误。",
        status_state_synced: "已同步主机棋局。",
        status_reject_move: "主机拒绝走子: {reason}",
        status_synced_from_host: "已同步主机棋局。",
        status_restart_done: "已重新开局。",
        action_banner_pick_extra: "请在高亮格中选择一个位置，放置额外棋子。",
        side_black: "黑",
        side_white: "白",
        unknown: "未知"
      },
      en: {
        page_title: "Reverse Drop Chess",
        game_title: "Reverse Drop Chess 10x10",
        lang_title: "Language",
        lang_zh: "简体中文",
        lang_en: "English",
        mode_title: "Mode",
        mode_local: "Local 1v1",
        mode_pve: "PVE",
        mode_host: "Online Host",
        mode_join: "Online Join",
        setup_title: "Setup",
        label_black: "Black",
        label_white: "White",
        btn_manual_setup: "Manual Setup",
        btn_random_setup: "Random Setup",
        btn_restart: "Restart",
        remote_title: "Remote",
        btn_create_room: "Create Room",
        btn_disconnect: "Disconnect",
        placeholder_room_id: "room id",
        btn_join_room: "Join Room",
        state_title: "State",
        room_not_connected: "Not connected",
        room_id_prefix: "Room ID: {id}",
        connected_prefix: "Connected: {id}",
        joined_prefix: "Joined: {id}",
        stats_text: "Black: {black} | White: {white}",
        hint_rules: "Game Rules (taking a black move as an example):<br>· If all three adjacent sides of the landing square are empty (excluding the source side, which is always empty; same below), choose any one side and place a black piece there.<br>· If one side has a white piece and the other two sides are empty, turn that white piece black and also place a black piece on any one of the empty sides.<br>· If two sides have white pieces and one side is empty, nothing happens.<br>· If all three sides have white pieces, the moved piece itself turns white after stepping there.<br>· If either side has no legal moves, or has only one piece left, the game ends and the winner is decided.",
        status_setup_manual: "Manual setup: place black pieces first, then white.",
        status_setup_not_enough: "Not enough pieces in setup.",
        status_setup_count_line: "Black({blackNow}/{blackTarget}) White({whiteNow}/{whiteTarget})",
        status_piece_over_capacity: "Piece count is larger than board capacity.",
        status_random_ready: "Random setup completed.",
        status_black_skip_start: "Black has no legal move at start, turn skipped to White.",
        status_black_turn: "Black turn",
        status_white_turn: "White turn",
        status_choose_move_hint: "Choose one {side} piece and move one step up/down/left/right.",
        status_game_over_black: "Game Over: Black wins ({black}:{white})",
        status_game_over_white: "Game Over: White wins ({white}:{black})",
        status_game_over_draw: "Game Over: Draw ({black}:{white})",
        status_setup_complete: "Setup complete.",
        status_placing_black: "Now placing black pieces.",
        status_placing_white: "Now placing white pieces.",
        status_action_required_finish: "Action required.\nClick one highlighted cell to finish this move.",
        status_action_required_place: "Action required.\nClick one highlighted cell to place the extra piece.",
        status_illegal_move: "Illegal move",
        reason_out_of_board: "Out of board",
        reason_source_not_yours: "Source is not your piece",
        reason_target_not_empty: "Target is not empty",
        reason_only_one_step: "Only one orthogonal step allowed",
        reason_invalid_extra_target: "Invalid extra target",
        status_move_request_sent: "Move request sent. Waiting host confirmation.",
        status_move_failed: "Move failed",
        status_no_legal_move_skip: "{side} has no legal move, turn skipped.",
        status_ai_thinking: "White AI thinking...",
        status_switch_host_mode: "Switch to Online Host mode first.",
        status_room_created: "Room created. Waiting for opponent.",
        status_switch_join_mode: "Switch to Online Join mode first.",
        status_input_room_id: "Input a room id.",
        status_network_error: "Network error: {msg}",
        status_peer_disconnected: "Peer disconnected.",
        status_cannot_init_network: "Cannot init network: {msg}",
        status_connected_host_guest: "Connected. Host is black, guest is white.",
        status_opponent_disconnected: "Opponent disconnected.",
        status_data_channel_error: "Data channel error.",
        status_state_synced: "State synced from host.",
        status_reject_move: "Host rejected move: {reason}",
        status_synced_from_host: "State synced from host.",
        status_restart_done: "Restarted.",
        action_banner_pick_extra: "Action required: choose one highlighted cell to place the extra piece.",
        side_black: "Black",
        side_white: "White",
        unknown: "unknown"
      }
    };

    const state = {
      board: createEmptyBoard(),
      phase: "idle",
      currentPlayer: BLACK,
      selected: null,
      movable: [],
      pendingMove: null,
      animations: null,
      message: "",
      mode: "local",
      lang: detectDefaultLanguage(),
      setup: {
        blackTarget: 3,
        whiteTarget: 5,
        placedBlack: 0,
        placedWhite: 0,
        placingColor: BLACK
      },
      network: {
        role: null,
        peer: null,
        conn: null,
        roomId: "",
        connected: false
      },
      lockInput: false
    };

    const el = {
      board: document.getElementById("board"),
      gameTitle: document.getElementById("gameTitle"),
      status: document.getElementById("status"),
      actionBanner: document.getElementById("actionBanner"),
      stats: document.getElementById("stats"),
      hintRules: document.getElementById("hintRules"),
      langTitle: document.getElementById("langTitle"),
      modeTitle: document.getElementById("modeTitle"),
      setupTitle: document.getElementById("setupTitle"),
      remoteTitle: document.getElementById("remoteTitle"),
      stateTitle: document.getElementById("stateTitle"),
      labelBlack: document.getElementById("labelBlack"),
      labelWhite: document.getElementById("labelWhite"),
      blackCount: document.getElementById("blackCount"),
      whiteCount: document.getElementById("whiteCount"),
      manualSetup: document.getElementById("manualSetup"),
      randomSetup: document.getElementById("randomSetup"),
      startPlay: document.getElementById("startPlay"),
      modeLocal: document.getElementById("modeLocal"),
      modePve: document.getElementById("modePve"),
      modeHost: document.getElementById("modeHost"),
      modeJoin: document.getElementById("modeJoin"),
      createRoom: document.getElementById("createRoom"),
      disconnectRoom: document.getElementById("disconnectRoom"),
      joinInput: document.getElementById("joinInput"),
      joinRoom: document.getElementById("joinRoom"),
      roomInfo: document.getElementById("roomInfo"),
      langZh: document.getElementById("langZh"),
      langEn: document.getElementById("langEn")
    };

    bindEvents();
    applyLanguage();
    startManualSetup();

    function detectDefaultLanguage() {
      const source = (navigator.language || "").toLowerCase();
      return source.startsWith("zh") ? "zh" : "en";
    }

    function t(key, params = {}) {
      const table = I18N[state.lang] || I18N.en;
      const template = table[key] || I18N.en[key] || key;
      return template.replace(/\{(\w+)\}/g, (_, name) => (params[name] !== undefined ? String(params[name]) : ""));
    }

    function sideName(color) {
      return color === BLACK ? t("side_black") : t("side_white");
    }

    function applyLanguage() {
      document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
      document.title = t("page_title");
      el.gameTitle.textContent = t("game_title");
      el.langTitle.textContent = t("lang_title");
      el.modeTitle.textContent = t("mode_title");
      el.setupTitle.textContent = t("setup_title");
      el.remoteTitle.textContent = t("remote_title");
      el.stateTitle.textContent = t("state_title");
      el.labelBlack.textContent = t("label_black");
      el.labelWhite.textContent = t("label_white");
      el.modeLocal.textContent = t("mode_local");
      el.modePve.textContent = t("mode_pve");
      el.modeHost.textContent = t("mode_host");
      el.modeJoin.textContent = t("mode_join");
      el.manualSetup.textContent = t("btn_manual_setup");
      el.randomSetup.textContent = t("btn_random_setup");
      el.startPlay.textContent = t("btn_restart");
      el.createRoom.textContent = t("btn_create_room");
      el.disconnectRoom.textContent = t("btn_disconnect");
      el.joinInput.placeholder = t("placeholder_room_id");
      el.joinRoom.textContent = t("btn_join_room");
      el.langZh.textContent = t("lang_zh");
      el.langEn.textContent = t("lang_en");
      el.hintRules.innerHTML = t("hint_rules");
      if (!state.network.connected) {
        el.roomInfo.textContent = t("room_not_connected");
      } else if (state.network.role === "host" && state.network.conn) {
        el.roomInfo.textContent = t("connected_prefix", { id: state.network.conn.peer });
      } else if (state.network.role === "join" && state.network.roomId) {
        el.roomInfo.textContent = t("joined_prefix", { id: state.network.roomId });
      }
      refreshLanguageButtons();
      render();
    }

    function refreshLanguageButtons() {
      el.langZh.classList.toggle("active", state.lang === "zh");
      el.langEn.classList.toggle("active", state.lang === "en");
    }

    function setLanguage(lang) {
      if (lang !== "zh" && lang !== "en") return;
      if (state.lang === lang) return;
      state.lang = lang;
      applyLanguage();
    }

    function bindEvents() {
      el.modeLocal.addEventListener("click", () => setMode("local"));
      el.modePve.addEventListener("click", () => setMode("pve"));
      el.modeHost.addEventListener("click", () => setMode("online-host"));
      el.modeJoin.addEventListener("click", () => setMode("online-join"));
      el.langZh.addEventListener("click", () => setLanguage("zh"));
      el.langEn.addEventListener("click", () => setLanguage("en"));

      el.blackCount.addEventListener("change", syncTargetsFromInputs);
      el.whiteCount.addEventListener("change", syncTargetsFromInputs);
      el.manualSetup.addEventListener("click", () => {
        if (!canLocalControlSetup()) return;
        startManualSetup();
        syncToGuest();
      });
      el.randomSetup.addEventListener("click", () => {
        if (!canLocalControlSetup()) return;
        randomSetup();
        syncToGuest();
      });
      el.startPlay.addEventListener("click", () => {
        if (!canLocalControlSetup()) return;
        startManualSetup();
        syncToGuest();
      });

      el.createRoom.addEventListener("click", createRoom);
      el.joinRoom.addEventListener("click", joinRoom);
      el.disconnectRoom.addEventListener("click", disconnectNetwork);
    }

    function createEmptyBoard() {
      return Array.from({ length: SIZE }, () => Array(SIZE).fill(EMPTY));
    }

    function cloneBoard(board) {
      return board.map((row) => row.slice());
    }

    function setMode(mode) {
      if (state.mode === mode) return;
      state.mode = mode;
      state.selected = null;
      state.pendingMove = null;
      state.lockInput = false;
      if (mode !== "online-host" && mode !== "online-join") {
        disconnectNetwork();
      }
      refreshModeButtons();
      startManualSetup();
      render();
    }

    function refreshModeButtons() {
      const map = {
        local: el.modeLocal,
        pve: el.modePve,
        "online-host": el.modeHost,
        "online-join": el.modeJoin
      };
      [el.modeLocal, el.modePve, el.modeHost, el.modeJoin].forEach((button) => button.classList.remove("active"));
      map[state.mode].classList.add("active");
      updateControlAvailability();
    }

    function syncTargetsFromInputs() {
      const black = clamp(parseInt(el.blackCount.value, 10) || 3, 1, 30);
      const white = clamp(parseInt(el.whiteCount.value, 10) || 5, 1, 30);
      el.blackCount.value = String(black);
      el.whiteCount.value = String(white);
      state.setup.blackTarget = black;
      state.setup.whiteTarget = white;
      if (state.phase === "setup") {
        state.setup.placedBlack = Math.min(state.setup.placedBlack, black);
        state.setup.placedWhite = Math.min(state.setup.placedWhite, white);
        if (state.setup.placedBlack >= black) {
          state.setup.placingColor = WHITE;
        }
      }
      render();
    }

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function startManualSetup() {
      syncTargetsFromInputs();
      state.board = createEmptyBoard();
      state.phase = "setup";
      state.currentPlayer = BLACK;
      state.selected = null;
      state.pendingMove = null;
      state.animations = null;
      state.setup.placedBlack = 0;
      state.setup.placedWhite = 0;
      state.setup.placingColor = BLACK;
      setStatus(t("status_setup_manual"));
      render();
    }

    function randomSetup() {
      syncTargetsFromInputs();
      const total = state.setup.blackTarget + state.setup.whiteTarget;
      if (total > SIZE * SIZE) {
        setStatus(t("status_piece_over_capacity"));
        return;
      }
      const board = createEmptyBoard();
      const picks = [];
      for (let i = 0; i < SIZE * SIZE; i += 1) picks.push(i);
      shuffleInPlace(picks);
      for (let i = 0; i < state.setup.blackTarget; i += 1) {
        const index = picks[i];
        board[Math.floor(index / SIZE)][index % SIZE] = BLACK;
      }
      for (let i = state.setup.blackTarget; i < total; i += 1) {
        const index = picks[i];
        board[Math.floor(index / SIZE)][index % SIZE] = WHITE;
      }
      state.board = board;
      state.phase = "setup";
      state.setup.placedBlack = state.setup.blackTarget;
      state.setup.placedWhite = state.setup.whiteTarget;
      state.setup.placingColor = WHITE;
      setStatus(t("status_random_ready"));
      beginPlay();
    }

    function shuffleInPlace(values) {
      for (let i = values.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
      }
    }

    function beginPlay() {
      state.phase = "playing";
      state.currentPlayer = BLACK;
      state.selected = null;
      state.movable = [];
      state.pendingMove = null;
      state.animations = null;
      state.lockInput = false;
      const verdict = evaluateEndByNewRule(state.board);
      if (verdict.end) {
        state.phase = "ended";
        applyWinnerStatus(verdict.black, verdict.white);
      } else {
        setStatus(turnText(), true);
      }
      render();
      maybeRunAI();
    }

    function applyWinnerStatus(black, white) {
      if (black > white) setStatus(t("status_game_over_black", { black, white }));
      else if (white > black) setStatus(t("status_game_over_white", { black, white }));
      else setStatus(t("status_game_over_draw", { black, white }));
    }

    function evaluateEndByNewRule(board) {
      const { black, white } = countPieces(board);
      const blackHas = hasAnyMove(board, BLACK);
      const whiteHas = hasAnyMove(board, WHITE);
      const noPath = !blackHas || !whiteHas;
      const onePieceLeft = black <= 1 || white <= 1;
      return {
        end: noPath || onePieceLeft,
        black,
        white
      };
    }

    function turnText() {
      const side = state.currentPlayer === BLACK ? sideName(BLACK) : sideName(WHITE);
      const turn = state.currentPlayer === BLACK ? t("status_black_turn") : t("status_white_turn");
      return `${turn}\n${t("status_choose_move_hint", { side })}`;
    }

    function setStatus(text, ok = false) {
      state.message = text;
      el.status.classList.toggle("ok", ok);
    }

    function countPieces(board = state.board) {
      let black = 0;
      let white = 0;
      for (let r = 0; r < SIZE; r += 1) {
        for (let c = 0; c < SIZE; c += 1) {
          if (board[r][c] === BLACK) black += 1;
          if (board[r][c] === WHITE) white += 1;
        }
      }
      return { black, white };
    }

    function render() {
      renderBoard();
      const { black, white } = countPieces();
      el.stats.textContent = t("stats_text", { black, white });
      el.status.textContent = statusText();
      updateActionBanner();
      updateControlAvailability();
    }

    function updateActionBanner() {
      if (state.pendingMove) {
        el.actionBanner.textContent = t("action_banner_pick_extra");
        el.actionBanner.classList.add("show");
        return;
      }
      el.actionBanner.textContent = "";
      el.actionBanner.classList.remove("show");
    }

    function statusText() {
      if (state.phase === "setup") {
        const line = t("status_setup_count_line", {
          blackNow: state.setup.placedBlack,
          blackTarget: state.setup.blackTarget,
          whiteNow: state.setup.placedWhite,
          whiteTarget: state.setup.whiteTarget
        });
        return `${state.message}\n${line}`;
      }
      return state.message || "";
    }

    function updateControlAvailability() {
      const isOnline = state.mode === "online-host" || state.mode === "online-join";
      const hostControls = state.mode === "online-host";
      const joinControls = state.mode === "online-join";
      const connected = state.network.connected;
      const canSetup = canLocalControlSetup();

      el.blackCount.disabled = !canSetup;
      el.whiteCount.disabled = !canSetup;
      el.manualSetup.disabled = !canSetup;
      el.randomSetup.disabled = !canSetup;
      el.startPlay.disabled = !canSetup;

      el.createRoom.disabled = !hostControls || connected;
      el.joinInput.disabled = !joinControls || connected;
      el.joinRoom.disabled = !joinControls || connected;
      el.disconnectRoom.disabled = !isOnline || !state.network.peer;
    }

    function canLocalControlSetup() {
      if (state.mode === "online-host") return true;
      if (state.mode === "online-join") return false;
      return true;
    }

    function renderBoard() {
      const movableSet = new Set(state.movable.map((point) => `${point.r},${point.c}`));
      const choiceSet = new Set((state.pendingMove?.options || []).map((point) => `${point.r},${point.c}`));
      const dropSet = new Set((state.animations?.drop || []).map((point) => `${point.r},${point.c}`));
      const flipSet = new Set((state.animations?.flips || []).map((point) => `${point.r},${point.c}`));
      el.board.innerHTML = "";

      for (let r = 0; r < SIZE; r += 1) {
        for (let c = 0; c < SIZE; c += 1) {
          const cell = document.createElement("button");
          cell.className = "cell";
          cell.type = "button";
          cell.tabIndex = -1;
          cell.dataset.r = String(r);
          cell.dataset.c = String(c);
          const key = `${r},${c}`;

          if (state.selected && state.selected.r === r && state.selected.c === c) {
            cell.classList.add("selected");
          }
          if (movableSet.has(key)) {
            cell.classList.add("movable");
          }
          if (choiceSet.has(key)) {
            cell.classList.add("choice");
          }
          cell.addEventListener("click", () => onCellClick(r, c));

          const value = state.board[r][c];
          if (value !== EMPTY) {
            const piece = document.createElement("span");
            piece.className = `piece ${value === BLACK ? "black" : "white"}`;
            if (dropSet.has(key)) {
              piece.classList.add("drop");
            }
            if (flipSet.has(key)) {
              piece.classList.add("flip-hit");
            }
            cell.appendChild(piece);
          }

          el.board.appendChild(cell);
        }
      }
    }

    function onCellClick(r, c) {
      if (state.lockInput) return;

      if (state.phase === "setup") {
        if (!canLocalControlSetup()) return;
        placeSetupPiece(r, c);
        syncToGuest();
        return;
      }
      if (state.phase !== "playing") return;
      if (!isLocalTurn()) return;

      if (state.pendingMove) {
        const hit = state.pendingMove.options.find((point) => point.r === r && point.c === c);
        if (!hit) {
          setStatus(t("status_action_required_finish"));
          render();
          return;
        }
        commitMove(state.pendingMove.from, state.pendingMove.to, hit);
        state.pendingMove = null;
        return;
      }

      const value = state.board[r][c];
      const current = state.currentPlayer;
      if (value === current) {
        state.selected = { r, c };
        state.movable = legalDestinations(r, c);
        render();
        return;
      }

      if (state.selected && value === EMPTY && isAdjacent(state.selected, { r, c })) {
        previewOrMove(state.selected, { r, c });
      }
    }

    function placeSetupPiece(r, c) {
      if (state.board[r][c] !== EMPTY) return;

      if (state.setup.placingColor === BLACK) {
        if (state.setup.placedBlack >= state.setup.blackTarget) {
          state.setup.placingColor = WHITE;
          return;
        }
        state.board[r][c] = BLACK;
        state.setup.placedBlack += 1;
        if (state.setup.placedBlack >= state.setup.blackTarget) {
          state.setup.placingColor = WHITE;
        }
      } else {
        if (state.setup.placedWhite >= state.setup.whiteTarget) return;
        state.board[r][c] = WHITE;
        state.setup.placedWhite += 1;
      }

      if (state.setup.placedBlack >= state.setup.blackTarget && state.setup.placedWhite >= state.setup.whiteTarget) {
        setStatus(t("status_setup_complete"));
        beginPlay();
      } else {
        setStatus(state.setup.placingColor === BLACK ? t("status_placing_black") : t("status_placing_white"));
        render();
      }
    }

    function isAdjacent(a, b) {
      return Math.abs(a.r - b.r) + Math.abs(a.c - b.c) === 1;
    }

    function legalDestinations(r, c, board = state.board) {
      return DIRS
        .map(([dr, dc]) => ({ r: r + dr, c: c + dc }))
        .filter((point) => inBounds(point.r, point.c) && board[point.r][point.c] === EMPTY);
    }

    function inBounds(r, c) {
      return r >= 0 && r < SIZE && c >= 0 && c < SIZE;
    }

    function previewOrMove(from, to) {
      const preview = resolveMove(state.board, from, to, state.currentPlayer, null);
      if (!preview.ok) {
        setStatus(preview.reason || t("status_illegal_move"));
        state.selected = null;
        state.movable = [];
        render();
        return;
      }
      if (preview.needChoice) {
        state.pendingMove = {
          from,
          to,
          options: preview.options
        };
        state.selected = null;
        state.movable = [];
        setStatus(t("status_action_required_place"));
        render();
        return;
      }
      commitMove(from, to, null);
    }

    function opponent(color) {
      return color === BLACK ? WHITE : BLACK;
    }

    function resolveMove(board, from, to, color, choice) {
      if (!inBounds(from.r, from.c) || !inBounds(to.r, to.c)) {
        return { ok: false, reason: t("reason_out_of_board") };
      }
      if (board[from.r][from.c] !== color) {
        return { ok: false, reason: t("reason_source_not_yours") };
      }
      if (board[to.r][to.c] !== EMPTY) {
        return { ok: false, reason: t("reason_target_not_empty") };
      }
      if (!isAdjacent(from, to)) {
        return { ok: false, reason: t("reason_only_one_step") };
      }

      const next = cloneBoard(board);
      next[from.r][from.c] = EMPTY;
      next[to.r][to.c] = color;

      const dr = to.r - from.r;
      const dc = to.c - from.c;
      const backR = -dr;
      const backC = -dc;
      const opp = opponent(color);
      const oppCells = [];
      const emptyCells = [];

      for (const [rr, cc] of DIRS) {
        if (rr === backR && cc === backC) continue;
        const nr = to.r + rr;
        const nc = to.c + cc;
        if (!inBounds(nr, nc)) continue;
        const value = next[nr][nc];
        if (value === opp) oppCells.push({ r: nr, c: nc });
        else if (value === EMPTY) emptyCells.push({ r: nr, c: nc });
      }

      const changed = [{ r: to.r, c: to.c }];
      if (oppCells.length === 0 && emptyCells.length === 3) {
        if (!choice) return { ok: true, needChoice: true, options: emptyCells };
        if (!containsPoint(emptyCells, choice)) {
          return { ok: false, reason: t("reason_invalid_extra_target") };
        }
        next[choice.r][choice.c] = color;
        changed.push({ r: choice.r, c: choice.c });
        return { ok: true, board: next, changed };
      }

      if (oppCells.length === 1 && emptyCells.length === 2) {
        if (!choice) return { ok: true, needChoice: true, options: emptyCells };
        if (!containsPoint(emptyCells, choice)) {
          return { ok: false, reason: t("reason_invalid_extra_target") };
        }
        const victim = oppCells[0];
        next[victim.r][victim.c] = color;
        next[choice.r][choice.c] = color;
        changed.push(victim, { r: choice.r, c: choice.c });
        return { ok: true, board: next, changed };
      }

      if (oppCells.length === 3) {
        next[to.r][to.c] = opp;
        changed.push({ r: to.r, c: to.c });
        return { ok: true, board: next, changed };
      }

      return { ok: true, board: next, changed };
    }

    function containsPoint(points, target) {
      return points.some((point) => point.r === target.r && point.c === target.c);
    }

    function commitMove(from, to, choice) {
      if (state.mode === "online-join") {
        sendNet({
          type: "requestMove",
          payload: { from, to, choice }
        });
        state.selected = null;
        state.movable = [];
        state.pendingMove = null;
        setStatus(t("status_move_request_sent"));
        render();
        return;
      }

      applyMoveLocally(from, to, choice);
      if (state.mode === "online-host") {
        syncToGuest();
      }
    }

    function applyMoveLocally(from, to, choice) {
      const movingColor = state.currentPlayer;
      const resolved = resolveMove(state.board, from, to, movingColor, choice);
      if (!resolved.ok || resolved.needChoice) {
        setStatus(resolved.reason || t("status_move_failed"));
        render();
        return false;
      }

      state.board = resolved.board;
      state.selected = null;
      state.movable = [];
      state.pendingMove = null;
      const flips = resolved.changed.filter((point) => !(point.r === to.r && point.c === to.c));
      if (resolved.board[to.r][to.c] !== movingColor) {
        flips.push({ r: to.r, c: to.c });
      }
      state.animations = {
        drop: [{ r: to.r, c: to.c }],
        flips
      };
      render();
      setTimeout(() => {
        state.animations = null;
        render();
      }, 420);

      finalizeTurn();
      return true;
    }

    function finalizeTurn() {
      const movedColor = state.currentPlayer;
      const verdict = evaluateEndByNewRule(state.board);
      if (verdict.end) {
        state.phase = "ended";
        applyWinnerStatus(verdict.black, verdict.white);
      } else {
        state.currentPlayer = opponent(movedColor);
        setStatus(turnText(), true);
      }
      render();
      maybeRunAI();
    }

    function hasAnyMove(board, color) {
      for (let r = 0; r < SIZE; r += 1) {
        for (let c = 0; c < SIZE; c += 1) {
          if (board[r][c] !== color) continue;
          if (legalDestinations(r, c, board).length > 0) return true;
        }
      }
      return false;
    }

    function isLocalTurn() {
      if (state.mode === "online-host") {
        return state.network.connected && state.currentPlayer === BLACK;
      }
      if (state.mode === "online-join") {
        return state.network.connected && state.currentPlayer === WHITE;
      }
      if (state.mode === "pve") {
        return state.currentPlayer === BLACK;
      }
      return true;
    }

    function maybeRunAI() {
      if (state.mode !== "pve") return;
      if (state.phase !== "playing") return;
      if (state.currentPlayer !== WHITE) return;

      state.lockInput = true;
      setStatus(t("status_ai_thinking"), true);
      render();

      setTimeout(() => {
        const action = pickBestAction(state.board, WHITE);
        state.lockInput = false;
        if (!action) {
          finalizeTurn();
          return;
        }
        applyMoveLocally(action.from, action.to, action.choice || null);
      }, 380);
    }

    function allActions(board, color) {
      const actions = [];
      for (let r = 0; r < SIZE; r += 1) {
        for (let c = 0; c < SIZE; c += 1) {
          if (board[r][c] !== color) continue;
          const from = { r, c };
          for (const to of legalDestinations(r, c, board)) {
            const preview = resolveMove(board, from, to, color, null);
            if (!preview.ok) continue;
            if (preview.needChoice) {
              for (const option of preview.options) {
                actions.push({ from, to, choice: option });
              }
            } else {
              actions.push({ from, to, choice: null });
            }
          }
        }
      }
      return actions;
    }

    function pickBestAction(board, color) {
      const actions = allActions(board, color);
      if (actions.length === 0) return null;

      let best = [];
      let bestScore = -Infinity;
      for (const action of actions) {
        const result = resolveMove(board, action.from, action.to, color, action.choice);
        if (!result.ok || result.needChoice) continue;
        const score = evalBoard(result.board, color);
        if (score > bestScore) {
          bestScore = score;
          best = [action];
        } else if (score === bestScore) {
          best.push(action);
        }
      }
      return best[Math.floor(Math.random() * best.length)];
    }

    function evalBoard(board, color) {
      const { black, white } = countPieces(board);
      const own = color === BLACK ? black : white;
      const opp = color === BLACK ? white : black;
      return own - opp;
    }

    function createRoom() {
      if (state.mode !== "online-host") {
        setStatus(t("status_switch_host_mode"));
        return;
      }
      disconnectNetwork();
      ensurePeer((peer) => {
        state.network.role = "host";
        state.network.roomId = peer.id;
        el.roomInfo.textContent = t("room_id_prefix", { id: peer.id });
        setStatus(t("status_room_created"));
        peer.on("connection", (conn) => {
          if (state.network.conn) {
            conn.close();
            return;
          }
          setupConnection(conn);
        });
      });
    }

    function joinRoom() {
      if (state.mode !== "online-join") {
        setStatus(t("status_switch_join_mode"));
        return;
      }
      const target = (el.joinInput.value || "").trim();
      if (!target) {
        setStatus(t("status_input_room_id"));
        return;
      }
      disconnectNetwork();
      ensurePeer((peer) => {
        state.network.role = "join";
        state.network.roomId = target;
        const conn = peer.connect(target, { reliable: true });
        setupConnection(conn);
      });
    }

    function ensurePeer(onReady) {
      try {
        const peer = new Peer();
        state.network.peer = peer;
        peer.on("open", () => {
          updateControlAvailability();
          onReady(peer);
        });
        peer.on("error", (error) => {
          setStatus(t("status_network_error", { msg: error.type || error.message || t("unknown") }));
          render();
        });
        peer.on("disconnected", () => {
          state.network.connected = false;
          setStatus(t("status_peer_disconnected"));
          el.roomInfo.textContent = t("room_not_connected");
          render();
        });
      } catch (error) {
        setStatus(t("status_cannot_init_network", { msg: error.message || t("unknown") }));
        render();
      }
    }

    function setupConnection(conn) {
      state.network.conn = conn;
      conn.on("open", () => {
        state.network.connected = true;
        const peerId = state.network.role === "host" ? conn.peer : state.network.roomId;
        el.roomInfo.textContent = state.network.role === "host"
          ? t("connected_prefix", { id: peerId })
          : t("joined_prefix", { id: state.network.roomId });
        setStatus(t("status_connected_host_guest"), true);
        if (state.network.role === "host") {
          sendNet({ type: "sync", payload: exportState() });
        }
        render();
      });

      conn.on("data", onNetData);
      conn.on("close", () => {
        state.network.connected = false;
        state.network.conn = null;
        setStatus(t("status_opponent_disconnected"));
        el.roomInfo.textContent = t("room_not_connected");
        render();
      });
      conn.on("error", () => {
        setStatus(t("status_data_channel_error"));
        render();
      });
    }

    function onNetData(message) {
      if (!message || typeof message !== "object") return;

      if (message.type === "sync" && state.network.role === "join") {
        importState(message.payload);
        setStatus(t("status_synced_from_host"), true);
        render();
        return;
      }

      if (message.type === "requestMove" && state.network.role === "host") {
        if (state.phase !== "playing" || state.currentPlayer !== WHITE) return;
        const payload = message.payload || {};
        const ok = applyMoveLocally(payload.from, payload.to, payload.choice || null);
        if (!ok) {
          sendNet({ type: "rejectMove", payload: { reason: t("status_illegal_move") } });
          return;
        }
        syncToGuest();
        return;
      }

      if (message.type === "rejectMove" && state.network.role === "join") {
        const reason = (message.payload && message.payload.reason) || t("unknown");
        setStatus(t("status_reject_move", { reason }));
        render();
      }
    }

    function exportState() {
      return {
        board: state.board,
        phase: state.phase,
        currentPlayer: state.currentPlayer,
        setup: { ...state.setup },
        mode: state.mode
      };
    }

    function importState(payload) {
      if (!payload || !Array.isArray(payload.board)) return;
      state.board = payload.board.map((row) => row.slice());
      state.phase = payload.phase || "setup";
      state.currentPlayer = payload.currentPlayer || BLACK;
      state.setup = { ...state.setup, ...(payload.setup || {}) };
      state.selected = null;
      state.movable = [];
      state.pendingMove = null;
      state.animations = null;
    }

    function sendNet(data) {
      const conn = state.network.conn;
      if (!conn || !state.network.connected) return;
      conn.send(data);
    }

    function syncToGuest() {
      if (state.mode !== "online-host") return;
      if (!state.network.connected) return;
      sendNet({ type: "sync", payload: exportState() });
    }

    function disconnectNetwork() {
      if (state.network.conn) {
        try { state.network.conn.close(); } catch (_) {}
      }
      if (state.network.peer) {
        try { state.network.peer.destroy(); } catch (_) {}
      }
      state.network = {
        role: null,
        peer: null,
        conn: null,
        roomId: "",
        connected: false
      };
      el.roomInfo.textContent = t("room_not_connected");
      render();
    }
