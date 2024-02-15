import "../styles/Home.scss";
import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
/*
Animation Inspired by: 
https://codepen.io/Hyperplexed/full/zYWvXMM 
https://codepen.io/sharnajh/full/YzXOGpm
*/
function Home() {
  /* TILE ANIMATION START */
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(false);
  const [tiles, setTiles] = useState([]);

  const createGrid = () => {
    const size = document.body.clientWidth > 800 ? 100 : 50;
    const calculatedColumns = Math.floor(document.body.clientWidth / size);
    const calculatedRows = Math.floor(document.body.clientHeight / size);
    setColumns(calculatedColumns);
    setRows(calculatedRows);
    createTiles(calculatedColumns * calculatedRows);
  };

  const handleOnClick = (index) => {
    setToggled((prevToggled) => {
      const newToggled = !prevToggled; // Toggle the state
      // Add or remove the "toggled" class from the body element
      if (newToggled) {
        document.body.classList.add("toggled");
        document.querySelector(".introduction-2").classList.add("fade-in");
        document.querySelector(".alt-introduction-2").classList.add("fade-in");
      } else {
        document.body.classList.remove("toggled");
        document.querySelector(".introduction-2").classList.remove("fade-in");
        document
          .querySelector(".alt-introduction-2")
          .classList.remove("fade-in");
      }
      anime({
        targets: ".tile",
        opacity: newToggled ? 0 : 1, // Use the updated value
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: index,
        }),
      });
      return newToggled; // Return the new state
    });
  };

  const createTile = (index) => {
    const tileOpacity = toggled ? 0 : 1; // Calculate the opacity based on the toggled state
    return (
      <div
        key={index}
        className="tile"
        style={{ opacity: tileOpacity }}
        onClick={() => handleOnClick(index)}
      ></div>
    );
  };

  const createTiles = (quantity) => {
    const newTiles = Array.from(Array(quantity)).map((_, index) =>
      createTile(index)
    );
    setTiles(newTiles);
  };

  const handleResize = () => {
    createGrid(); // Recreate grid on window resize
  };

  useEffect(() => {
    createGrid(); // Initial grid creation
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, [columns, rows]); // Empty dependency array ensures the effect runs only once after the initial render
  /* TILE ANIMATION END */

  const menu = document.getElementById("work");
  Array.from(document.getElementsByClassName("work-menu-item")).forEach(
    (item, index) => {
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      };
    }
  );
  return (
    <div className="home-container bg-neutral-900 text-neutral-100">
      <div
        className="tiles-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {tiles}
      </div>
      <div className="introduction">
        <span className="introduction-2 material-symbols-outlined">
          contact_page
        </span>
        <span className="alt-introduction-2 text-neutral-900 fw-bold">
          Hi there. <br /> I'm <span className="text-accent-900">Nicholas</span>
        </span>
      </div>
      <a className="scroll-link" href="#work">
        <div className="scroll-down fs-500 text-accent-900">Learn more</div>
      </a>
    </div>
  );
}
export default Home;
