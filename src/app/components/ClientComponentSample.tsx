// INTRODUCTION
// - a client component is a component which will be required to download in browser.
// - why use client component instead of server component?
//   because you may want to use some client component features which you can't use on a server component:
//   like "useState", "createContext" etc.
// - you can nest a server components as child component ONLY if they are accepted in the "children" prop.

// convert the server component to a client component.
"use client";

import React from "react";

interface ClientComponentSampleProps {
  children: React.ReactNode;
}

const ClientComponentSample = ({ children }: ClientComponentSampleProps) => {
  // this will only be logged in server(terminal) unless you use "use client" declaration.
  console.log("ClientComponentSample rendered");

  return (
    <div>
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> on the server
      </p>
      {children}
    </div>
  );
};

export default ClientComponentSample;
