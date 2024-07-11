import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

function MyTable({ hits }) {
    if (!hits) {
        return (
            <div className="text-center pt-12 text-2xl">Not avilable for this query.</div>
        )
    }
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Person</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name&nbsp;(g)</TableCell>
                        <TableCell align="right">Gender&nbsp;(g)</TableCell>
                        <TableCell align="right">Email&nbsp;(g)</TableCell>
                        <TableCell align="right">Job&nbsp;(g)</TableCell>
                        <TableCell align="right">Department&nbsp;(g)</TableCell>
                        <TableCell align="right">Salary&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hits.map((element) => {
                        let { id, first_name, last_name, gender, email, job, department, salary } = element["_source"];
                        return (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {first_name}
                                </TableCell>
                                <TableCell align="right">{id}</TableCell>
                                <TableCell align="right">{first_name}</TableCell>
                                <TableCell align="right">{last_name}</TableCell>
                                <TableCell align="right">{gender}</TableCell>
                                <TableCell align="right">{email}</TableCell>
                                <TableCell align="right">{job}</TableCell>
                                <TableCell align="right">{department}</TableCell>
                                <TableCell align="right">{salary}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}





export default MyTable;

