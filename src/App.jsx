import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">I'm Ishu Shrestha, I'm a doctor.</p>
      <p className="mt-4 text-lg">Contact: ishushrestha.au@gmail.com</p>
      <p className="mt-4 text-lg">
        You may refer to{" "}
        <a
          href="https://www.nabin-prajapati.com.np"
          className="text-blue-500 hover:underline"
        >
          this website
        </a>
        .
      </p>
      <p className="mt-4 text-lg">
        For more information, please see{" "}
        <a
          href="https://www.sabinprajapati7.com.np"
          className="text-blue-500 hover:underline"
        >
          this website
        </a>
        .
      </p>

      <p className="mt-4 text-lg text-red-500">Website under development</p>
    </div>
  );
};

export default App;
