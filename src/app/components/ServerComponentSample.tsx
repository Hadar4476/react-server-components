// INTRODUCTION
// - a server component is a component which is not need to be downloaded in the browser
//    because it exists only in server.
// - you can nest a client components as child component in a server component.

import React from "react";
import ClientComponentSample from "./ClientComponentSample";

const ServerComponentSample = async () => {
  console.log("ServerComponentSample rendered");

  return (
    <div>
      <h2>A React Server Component</h2>
      <p>
        Will <strong>ONLY</strong> be rendered on the server or at build time.
      </p>
      <p>
        <strong>NEVER</strong> on the client-side!
      </p>
      <ClientComponentSample>
        <div></div>
      </ClientComponentSample>
    </div>
  );
};

export default ServerComponentSample;
