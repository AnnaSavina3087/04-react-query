import React from "react";
import styles from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onSelect }) => {
  return (
    <div className={styles.grid}>
      {movies.map((m) => (
        <div key={m.id} className={styles.item} onClick={() => onSelect(m)}>
          {m.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              alt={m.title}
            />
          ) : (
            <div style={{ height: 300, background: "#ddd" }} />
          )}
          <h3>{m.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
