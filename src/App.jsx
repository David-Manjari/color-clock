import { format } from "date-fns";

function App() {
  return (
    <div className="container">
      <p>
        {format(new Date(), "MMMM dd, yyyy hh:mm:ss a")}
        </p>
    </div>
  );
}

export default App;

