import { useState } from "react";
import useCricketTeams from "./hooks/useFetchCricketTeams";
import useTeamDetail from "./hooks/useTeamDetail";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const TeamsGrid = ({ props }) => {
  const { searchValue } = props;
  const [page, setPage] = useState(1);

  const { teams, loading, error } = useCricketTeams(
    "https://api.balldontlie.io/v1/teams/"
  );

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= teams.length / 5) {
      setPage(selectedPage);
    }
  };

  // console.log(teams);
  if (loading) {
    return <div>Loading Teams....</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>NBL Teams</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Team Name</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Abbreviation</TableCell>
              <TableCell align="center">Conference</TableCell>
              <TableCell align="center">Division</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(teams) &&
              teams.slice(page * 5 - 5, page * 5).map((team) => (
                <TableRow
                  key={team.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {team.name}
                  </TableCell>
                  <TableCell align="center">{team.city}</TableCell>
                  <TableCell align="center">{team.abbreviation}</TableCell>
                  <TableCell align="center">{team.conference}</TableCell>
                  <TableCell align="center">{team.division}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <span
          onClick={() => selectPageHandler(page - 1)}
          className={page > 1 ? "" : "pagination__disabled"}
        >
          ◀
        </span>
        {[...Array(teams.length / 5)].map((_, i) => {
          return (
            <span
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          onClick={() => selectPageHandler(page + 1)}
          className={page < teams.length / 5 ? "" : "pagination__disabled"}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default TeamsGrid;
