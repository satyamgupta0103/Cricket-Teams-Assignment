import { useState } from "react";
import useCricketTeams from "./hooks/useFetchCricketTeams";
import useTeamDetail from "./hooks/useTeamDetail";

const TeamsGrid = () => {
  //   const { teams, loading, error } = useCricketTeams(
  //     "https://api.balldontlie.io/v1/teams/"
  //   );

  const { teamDetail, loading, error } = useTeamDetail(
    "https://api.balldontlie.io/v1/teams/2"
  );

  if (loading) {
    return <div>Loading Teams....</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Cricket Teams {console.log(teamDetail)}</h2>
    </div>
  );
};

export default TeamsGrid;
