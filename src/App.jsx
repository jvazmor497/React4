import PropTypes from "prop-types";
import anon from "/anon.png";
import "./App.css";

UserCard.propTypes = {
  options: PropTypes.shape({
    username: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    src: PropTypes.string,
  }),
};

function App() {
  return (
    <div className="container">
      <UserCard
        options={{
          username: "John Doe",
          backgroundColor: "#348F50",
          status: "true",
          src: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de",
        }}
      />
      <UserCard
        options={{
          username: "Johnatan Doe",
          backgroundColor: "#24574F",
          status: "false",
          src: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6",
        }}
      />
      <UserCard
        options={{
          username: "Pedro Joya",
          backgroundColor: "#56B4D3",
          status: "true",
        }}
      />
    </div>
  );
}

function UserCard({ options }) {
  const hasSource = options.src !== undefined;

  return (
    <div
      className={`user-card ${options.status == "true" ? "animation" : ""}`}
      style={{ backgroundColor: options.backgroundColor, padding: "20px" }}
    >
      <img src={hasSource ? options.src : anon} alt={options.username} />
      <h2>{options.username}</h2>
    </div>
  );
}

/*
 * La principal diferencia entre es el espacio que ocupa, pero realmente hacen
 * lo mismo. La versión con operador ternario es más corta y fácil de leer.
 */

// function UserCardIf({ username, backgroundColor, status, src }) {
//   const hasSource = src !== undefined;
//   if (hasSource) {
//     return (
//       <div
//         className="user-card"
//         style={{ backgroundColor: backgroundColor, padding: "20px" }}
//       >
//         <img src={src} alt={username} />
//         <h2>{username}</h2>
//       </div>
//     );
//   }
//   return (
//     <div
//       className="user-card"
//       style={{ backgroundColor: backgroundColor, padding: "20px" }}
//     >
//       <img src={anon} alt={username} />
//       <h2>{username}</h2>
//     </div>
//   );
// }

export default App;
