import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@material-ui/core";

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 200,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 200,
  },
  {
    field: "providerGuid",
    headerName: "Provider Guid",
    width: 200,
  },
  {
    field: "active",
    headerName: "Active",
    width: 200,
  },
];

const DataGridExample = () => {
  // const [rows, setRows] = React.useState<Array<Provider>>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [dataGridPageSize, setDataGridPageSize] = React.useState<number>(10);

  const handlePageSizeChanged = (pageSize: number) => {
    setDataGridPageSize(pageSize);
  };

  /*React.useEffect(() => {
    loadData()
      .then(res => {
        setLoading(false);
        const rowsWithId = res.map(row => {
          return { id: row.providerId, ...row };
        });
        setRows(rowsWithId);
        setError('');
      })
      .catch(err => {
        setLoading(false);
        setRows([]);
        setError(`Something went wrong while loading data: ${err}`);
      });
  }, []);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" margin={15}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" margin={15}>
        <CircularProgress color="primary" />
      </Box>
    );
  }*/

  const rows = [
    {
      id: 606308,
      active: "Inactive",
      external: false,
      firstName: "Anastacio",
      lastName: "Okuneva",
    },
    {
      id: 44029,
      active: "Inactive",
      external: false,
      firstName: "Bart",
      lastName: "Rau",
    },
    /*{
      id: 697864,
      active: "Active",
      external: false,
      firstName: "Cecilia",
      lastName: "Leffler",
    },
    {
      id: 935159,
      active: "Inactive",
      external: false,
      firstName: "Brice",
      lastName: "Batz",
    },
    {
      id: 185117,
      active: "Processing",
      external: false,
      firstName: "Randi",
      lastName: "Smitham",
    },
    {
      id: 514714,
      active: "Inactive",
      external: true,
      firstName: "Meredith",
      lastName: "Kozey",
    },
    {
      id: 422870,
      active: "Inactive",
      external: true,
      firstName: "Carroll",
      lastName: "Lowe",
    },
    {
      id: 342389,
      active: "Inactive",
      external: true,
      firstName: "Otto",
      lastName: "Cartwright",
    },
    {
      id: 484993,
      active: "Active",
      external: false,
      firstName: "Mathilde",
      lastName: "Emmerich",
    },
    {
      id: 988049,
      active: "Active",
      external: false,
      firstName: "Gaetano",
      lastName: "Predovic",
    },
    {
      id: 126985,
      active: "Inactive",
      external: true,
      firstName: "Tyrique",
      lastName: "Haley",
    },
    {
      id: 588237,
      active: "Active",
      external: true,
      firstName: "Petra",
      lastName: "Herzog",
    },
    {
      id: 638251,
      active: "Processing",
      external: true,
      firstName: "Mina",
      lastName: "O'Conner",
    },
    {
      id: 891797,
      active: "Inactive",
      external: true,
      firstName: "Rafael",
      lastName: "Wintheiser",
    },
    {
      id: 824946,
      active: "Active",
      external: true,
      firstName: "Lysanne",
      lastName: "Schultz",
    },
    {
      id: 880025,
      active: "Processing",
      external: true,
      firstName: "Opal",
      lastName: "Abshire",
    },
    {
      id: 591118,
      active: "Processing",
      external: false,
      firstName: "Otto",
      lastName: "Botsford",
    },
    {
      id: 794735,
      active: "Processing",
      external: true,
      firstName: "Jaleel",
      lastName: "Kling",
    },
    {
      id: 588009,
      active: "Active",
      external: false,
      firstName: "Adah",
      lastName: "O'Conner",
    },
    {
      id: 515713,
      active: "Inactive",
      external: false,
      firstName: "Laurine",
      lastName: "McCullough",
    },
    {
      id: 875894,
      active: "Inactive",
      external: true,
      firstName: "Nia",
      lastName: "Fisher",
    },
    {
      id: 33868,
      active: "Processing",
      external: true,
      firstName: "Noemy",
      lastName: "Lesch",
    },
    {
      id: 275199,
      active: "Inactive",
      external: true,
      firstName: "Kurt",
      lastName: "Cummerata",
    },
    {
      id: 948929,
      active: "Processing",
      external: true,
      firstName: "Jeromy",
      lastName: "Abbott",
    },
    {
      id: 725972,
      active: "Inactive",
      external: false,
      firstName: "Bill",
      lastName: "Lemke",
    },
    {
      id: 640558,
      active: "Inactive",
      external: false,
      firstName: "Lawrence",
      lastName: "Deckow",
    },
    {
      id: 686065,
      active: "Inactive",
      external: true,
      firstName: "Audie",
      lastName: "Shanahan",
    },
    {
      id: 970831,
      active: "Active",
      external: true,
      firstName: "Otto",
      lastName: "Muller",
    },
    {
      id: 127536,
      active: "Processing",
      external: false,
      firstName: "Elta",
      lastName: "Bergnaum",
    },
    {
      id: 276463,
      active: "Inactive",
      external: true,
      firstName: "Dexter",
      lastName: "Harris",
    },
    {
      id: 666906,
      active: "Active",
      external: true,
      firstName: "Nathan",
      lastName: "O'Reilly",
    },
    {
      id: 975003,
      active: "Inactive",
      external: true,
      firstName: "Grayson",
      lastName: "Langosh",
    },
    {
      id: 967408,
      active: "Active",
      external: true,
      firstName: "Genoveva",
      lastName: "Schuppe",
    },
    {
      id: 919594,
      active: "Inactive",
      external: true,
      firstName: "Arturo",
      lastName: "Hayes",
    },
    {
      id: 690468,
      active: "Processing",
      external: false,
      firstName: "Emil",
      lastName: "Dare",
    },
    {
      id: 792014,
      active: "Inactive",
      external: false,
      firstName: "Hans",
      lastName: "Wiegand",
    },
    {
      id: 419733,
      active: "Inactive",
      external: true,
      firstName: "Ray",
      lastName: "Kassulke",
    },
    {
      id: 50846,
      active: "Inactive",
      external: false,
      firstName: "Kaleigh",
      lastName: "Schowalter",
    },
    {
      id: 513850,
      active: "Processing",
      external: false,
      firstName: "Jillian",
      lastName: "McDermott",
    },
    {
      id: 891633,
      active: "Inactive",
      external: false,
      firstName: "Bonita",
      lastName: "Cronin",
    },
    {
      id: 541579,
      active: "Active",
      external: true,
      firstName: "Alexandrine",
      lastName: "Macejkovic",
    },
    {
      id: 801784,
      active: "Processing",
      external: true,
      firstName: "Tyreek",
      lastName: "Murphy",
    },
    {
      id: 384420,
      active: "Inactive",
      external: true,
      firstName: "Kody",
      lastName: "Thompson",
    },
    {
      id: 979980,
      active: "Inactive",
      external: true,
      firstName: "Ophelia",
      lastName: "Kreiger",
    },
    {
      id: 265066,
      active: "Inactive",
      external: true,
      firstName: "Vincenzo",
      lastName: "Schulist",
    },
    {
      id: 271609,
      active: "Processing",
      external: true,
      firstName: "Evan",
      lastName: "Bergstrom",
    },
    {
      id: 492566,
      active: "Inactive",
      external: false,
      firstName: "Avis",
      lastName: "Nicolas",
    },
    {
      id: 30697,
      active: "Inactive",
      external: false,
      firstName: "Alexandre",
      lastName: "Buckridge",
    },
    {
      id: 807527,
      active: "Active",
      external: true,
      firstName: "Martine",
      lastName: "Kuhn",
    },
    {
      id: 635624,
      active: "Active",
      external: true,
      firstName: "Mertie",
      lastName: "Langworth",
    },
    {
      id: 495741,
      active: "Inactive",
      external: true,
      firstName: "Jodie",
      lastName: "Douglas",
    },
    {
      id: 776988,
      active: "Inactive",
      external: false,
      firstName: "Caterina",
      lastName: "McGlynn",
    },
    {
      id: 727591,
      active: "Processing",
      external: true,
      firstName: "Phyllis",
      lastName: "Hudson",
    },
    {
      id: 330132,
      active: "Active",
      external: true,
      firstName: "Margarett",
      lastName: "Schaefer",
    },
    {
      id: 638914,
      active: "Inactive",
      external: false,
      firstName: "Asha",
      lastName: "Ortiz",
    },
    {
      id: 541399,
      active: "Processing",
      external: false,
      firstName: "Makenna",
      lastName: "Hagenes",
    },
    {
      id: 676658,
      active: "Processing",
      external: true,
      firstName: "Lucie",
      lastName: "Davis",
    },
    {
      id: 665583,
      active: "Inactive",
      external: true,
      firstName: "Friedrich",
      lastName: "Carter",
    },
    {
      id: 619099,
      active: "Active",
      external: true,
      firstName: "Alene",
      lastName: "Osinski",
    },
    {
      id: 112060,
      active: "Inactive",
      external: false,
      firstName: "Freddy",
      lastName: "Cormier",
    },
    {
      id: 412238,
      active: "Processing",
      external: true,
      firstName: "Winfield",
      lastName: "Bednar",
    },
    {
      id: 930892,
      active: "Inactive",
      external: false,
      firstName: "Breanna",
      lastName: "Parker",
    },
    {
      id: 217585,
      active: "Active",
      external: false,
      firstName: "Neva",
      lastName: "Greenfelder",
    },
    {
      id: 792606,
      active: "Processing",
      external: false,
      firstName: "Lilliana",
      lastName: "Kreiger",
    },
    {
      id: 456854,
      active: "Active",
      external: false,
      firstName: "Lori",
      lastName: "Dooley",
    },
    {
      id: 195579,
      active: "Inactive",
      external: false,
      firstName: "Verna",
      lastName: "Reynolds",
    },
    {
      id: 595634,
      active: "Processing",
      external: true,
      firstName: "Wellington",
      lastName: "Kessler",
    },
    {
      id: 454847,
      active: "Inactive",
      external: true,
      firstName: "Lesley",
      lastName: "Toy",
    },
    {
      id: 772308,
      active: "Processing",
      external: true,
      firstName: "Meggie",
      lastName: "Jakubowski",
    },
    {
      id: 347641,
      active: "Processing",
      external: false,
      firstName: "Peggie",
      lastName: "Franecki",
    },
    {
      id: 548050,
      active: "Inactive",
      external: true,
      firstName: "Melody",
      lastName: "Olson",
    },
    {
      id: 484416,
      active: "Processing",
      external: true,
      firstName: "Vena",
      lastName: "Streich",
    },
    {
      id: 344827,
      active: "Processing",
      external: true,
      firstName: "Felicity",
      lastName: "Stoltenberg",
    },
    {
      id: 244648,
      active: "Active",
      external: false,
      firstName: "Jonas",
      lastName: "Bechtelar",
    },
    {
      id: 569809,
      active: "Processing",
      external: true,
      firstName: "Shanon",
      lastName: "Stark",
    },*/
  ];

  const dataGridProps = {
    rows,
    columns,
    pageSize: dataGridPageSize,
    onPageSizeChange: handlePageSizeChanged,
    rowsPerPageOptions: [10, 20, 50],
    checkboxSelection: true,
    disableSelectionOnClick: true,
  };

  return (
    <Box height="95vh" width="95vw">
      <Box height={700} width="100%">
        <DataGrid {...dataGridProps} />
      </Box>
    </Box>
  );
};

export default DataGridExample;
