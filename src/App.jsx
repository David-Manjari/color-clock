import { format } from "date-fns";
import { useEffect, useState } from "react";

function App() {
  const [CurrTime, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container">
      <p>
        {format(new Date(), "MMMM dd, yyyy hh:mm:ss ")}
        </p>
    </div>
  );
}

export default App;

