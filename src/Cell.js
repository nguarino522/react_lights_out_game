import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

const Cell = ({ flipCellsAroundMe, isLit = false }) => {
  const cssClass = `Cell ${isLit ? "Cell-lit" : ""}`;
  return (
    <td className={cssClass} onClick={flipCellsAroundMe} role="button" />
  )

}

export default Cell;
// return (
//   <div className={cssClass}>
//     test
//   </div>
// )