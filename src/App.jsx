import PropTypes from "prop-types";
import anon from "/anon.png";
import "./App.css";

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  src: PropTypes.string,
};

function App() {
  return (
    <div className="container">
      <UserCard 
        username="John Doe"
        backgroundColor="#734b6d"
        status="true"
        src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de"
      />
      <UserCard
        username="Jane Doe"
        backgroundColor="#3a6073"
        status="falsqwee"
        src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6"
      />
      <UserCard
        username="Johnatan Doe"
        backgroundColor="#4CA1AF"
        status="true"
      />
    </div>
  );
}



function UserCard({ username, backgroundColor, status, src }) {
  const hasSource = src !== undefined;

  return (
    <div
      className={`user-card ${status == "true" ? "animation" : ""}`}
      style={{ backgroundColor: backgroundColor, padding: "20px" }}
    >
      <img src={hasSource ? src : anon} alt={username} />
      <h2>{username}</h2>
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
