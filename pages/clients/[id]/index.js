import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
  const router = useRouter();

  const handleProjectClick = (event) => {
    // router.push(`/clients/${router.query.id}/${event.currentTarget.id}`);
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: router.query.id,
        clientProjectId: event.currentTarget.id,
      },
    });
  };
  return (
    <div>
      <h1>ClientProjectsPage</h1>

      <ul>
        <li>
          Project A&nbsp;
          <button id="projectA" onClick={handleProjectClick}>
            Go to project
          </button>
          <br />
          Project B&ensp;
          <button id="projectB" onClick={handleProjectClick}>
            Go to project
          </button>
          <br />
          Project C&emsp;
          <button id="projectC" onClick={handleProjectClick}>
            Go to project
          </button>
          <br />
        </li>
      </ul>
    </div>
  );
};

export default ClientProjectsPage;
