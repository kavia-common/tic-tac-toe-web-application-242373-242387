import React, { useMemo, useState } from "react";
import "./App.css";

/**
 * Winning line indices for a 3x3 tic-tac-toe board.
 * Each entry is a triplet of indices in the board array.
 */
const WINNING_LINES = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
];

function calculateWinner(board) {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

function isBoardFull(board) {
  return board.every((cell) => cell !== null);
}

// PUBLIC_INTERFACE
function App() {
  /** Board cells: null | "X" | "O" */
  const [board, setBoard] = useState(Array(9).fill(null));
  /** True => X's turn; False => O's turn */
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(
    () => !winner && isBoardFull(board),
    [winner, board]
  );

  const currentPlayer = xIsNext ? "X" : "O";

  const statusText = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "Draw game";
    return `Current player: ${currentPlayer}`;
  }, [winner, isDraw, currentPlayer]);

  // PUBLIC_INTERFACE
  function handleSquareClick(index) {
    // Prevent moves after game is over
    if (winner || isDraw) return;

    // Prevent overwriting an occupied square
    if (board[index] !== null) return;

    const nextBoard = board.slice();
    nextBoard[index] = currentPlayer;

    setBoard(nextBoard);
    setXIsNext((prev) => !prev);
  }

  // PUBLIC_INTERFACE
  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="App">
      <main className="ttt-page" role="main" aria-label="Tic Tac Toe">
        <section className="ttt-card" aria-label="Game panel">
          <header className="ttt-header">
            <h1 className="ttt-title">Tic Tac Toe</h1>
            <p
              className={[
                "ttt-status",
                winner ? "is-win" : "",
                isDraw ? "is-draw" : "",
              ].join(" ")}
              aria-live="polite"
            >
              {statusText}
            </p>
          </header>

          <div className="ttt-boardWrap">
            <div
              className="ttt-board"
              role="grid"
              aria-label="3 by 3 tic tac toe board"
            >
              {board.map((value, idx) => {
                const isWinningCell = line?.includes(idx);
                const isDisabled = Boolean(value) || Boolean(winner) || isDraw;

                return (
                  <button
                    key={idx}
                    type="button"
                    className={[
                      "ttt-cell",
                      value ? "is-filled" : "",
                      value === "X" ? "is-x" : "",
                      value === "O" ? "is-o" : "",
                      isWinningCell ? "is-winning" : "",
                    ].join(" ")}
                    onClick={() => handleSquareClick(idx)}
                    disabled={isDisabled}
                    role="gridcell"
                    aria-label={`Cell ${idx + 1}${value ? `, ${value}` : ""}${
                      isWinningCell ? ", winning cell" : ""
                    }`}
                  >
                    <span className="ttt-cellText" aria-hidden="true">
                      {value ?? ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <footer className="ttt-footer">
            <button
              type="button"
              className="ttt-restartBtn"
              onClick={resetGame}
            >
              Restart
            </button>

            <p className="ttt-hint">
              Tip: You can’t place a mark on an occupied square.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
