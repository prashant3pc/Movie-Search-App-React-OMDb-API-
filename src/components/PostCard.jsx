import React from "react";

const PostCard = ({ movie }) => {
  // const movies = [
  //   {
  //     Title: "Batman Begins",
  //     Year: "2005",
  //     imdbID: "tt0372784",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
  //   },
  return (
    <div
      key={movie.imdbID}
      className="w-full max-w-[200px] bg-gray-500 m-6 h-85 rounded-xl overflow-hidden"
    >
      <img
        src={movie.Poster}
        alt={movie.Year}
        className="w-full h-[280px] object-cover rounded-t-xl"
      />
      <div className="p-2">
        <p className="text-white ml-2">MOVIE</p>
        <span className="text-blue-800 font-bold ml-2 block truncate">
          {movie.Title}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
