// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// export default function Compare() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
// ComparisonTable.jsx
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Compare.css';

const Compare = () => {
  const rows = [
    
    { specification: 'Battery', se03Lite: '1.8Kwh', se03: '2.7Kwh', se03Max: '2.7Kwh' },
    { specification: 'Battery features', se03Lite: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', se03: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', se03Max: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)' },
    { specification: 'Battery warranty', se03Lite: '3 years', se03: '3 Years', se03Max: '3 Years' },
    { specification: 'Charging time', se03Lite: '3 hours (12A)', se03: '4 hours (12A)', se03Max: '4 hours (12A)' },
    { specification: 'Motor', se03Lite: '1500W', se03: '1500W', se03Max: '2000W' },
    { specification: 'Max speed', se03Lite: '55 km/h', se03: '55 km/h', se03Max: '65 km/h' },
    { specification: 'Warranty on electronics', se03Lite: '1 year', se03: '1 year', se03Max: '1 year' },
    { specification: 'Max range (@30km/h)', se03Lite: '100 km', se03: '150 km', se03Max: '120 km' },
    { specification: 'Max range (@45km/h)', se03Lite: '90 km', se03: '110 km', se03Max: '100 km' },
    { specification: 'Max range (@full speed)', se03Lite: '60 km', se03: '90 km', se03Max: '80 km' },
    { specification: 'Other key benefits', se03Lite: 'Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe', se03: 'Fire-safe battery\nRange prediction\nComfortable ride\nStable and safe', se03Max: 'Fire-safe battery\nRange prediction\nComfortable ride\nStable and safe' },
  ];
  return (
    <TableContainer component={Paper}  >
      <Table aria-label="comparison table" className="table-container">
        <TableHead>
          <TableRow>
            <TableCell className="header-cell  ">Specification</TableCell>
            <TableCell className="header-cell">Rhyno SE03 Lite</TableCell>
            <TableCell className="header-cell">Rhyno SE03</TableCell>
            <TableCell className="header-cell">Rhyno SE03 Max</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.specification}>
              <TableCell className="spec-cell">{row.specification}</TableCell>
              <TableCell className="data-cell">{row.se03Lite}</TableCell>
              <TableCell className="data-cell">{row.se03}</TableCell>
              <TableCell className="data-cell">{row.se03Max}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};



export default Compare;
