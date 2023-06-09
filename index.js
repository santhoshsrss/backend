const express =require('express');
const app = express();

const PORT = 7000;

const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "9584671232",
      access: "Project Manger",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "7854963218",
      access: "Resource manager",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "8547692135",
      access: "Business analyst",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 46,
      phone: "9214256742",
      access: "UI/UX Designer",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 37,
      phone: "7214451189",
      access: "Frontend Developer",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 31,
      phone: "8325456483",
      access: "Backend Developer",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 29,
      phone: "9431240123",
      access: "al Manager=> ",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "8844665522",
      access: "SEO expert",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 34,
      phone: "7775556239",
      access: "Copywriter",
    },
  ];

  app.get('/mockDataTeam', (req,res) => {
    res.json(mockDataTeam)
})

const mockDataContacts = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, SY 10001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 10001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      city: "New York",
      zipCode: "87281",
      registrarId: 4132513,
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
      city: "New York",
      zipCode: "15551",
      registrarId: 123512,
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      address: "11122 Welping Ave, Tenting, CD 21321",
      city: "Tenting",
      zipCode: "14215",
      registrarId: 123512,
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      address: "1234 Canvile Street, Esvazark, NY 10001",
      city: "Esvazark",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      address: "22215 Super Street, Everting, ZO 515234",
      city: "Evertin",
      zipCode: "51523",
      registrarId: 123512,
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      address: "4123 Ever Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 512315,
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      address: "51234 Avery Street, Cantory, ND 212412",
      city: "Colunza",
      zipCode: "111234",
      registrarId: 928397,
    },
    {
      id: 10,
      name: "Enteri Redack",
      email: "enteriredack@gmail.com",
      age: 42,
      phone: "(222)444-5555",
      address: "4123 Easer Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 533215,
    },
    {
      id: 11,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      age: 11,
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      city: "Colunza",
      zipCode: "1234",
      registrarId: 92197,
    },
  ];
  
  app.get('/mockDataContacts', (req,res) => {
    res.json(mockDataContacts)
})

const mockDataInvoices = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      cost: "21.24",
      phone: "(665)121-5454",
      date: "03/12/2022",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      cost: "1.24",
      phone: "(421)314-2288",
      date: "06/15/2021",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      cost: "11.24",
      phone: "(422)982-6739",
      date: "05/02/2022",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      cost: "80.55",
      phone: "(921)425-6742",
      date: "03/21/2022",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      cost: "1.24",
      phone: "(421)445-1189",
      date: "01/12/2021",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      cost: "63.12",
      phone: "(232)545-6483",
      date: "11/02/2022",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      cost: "52.42",
      phone: "(543)124-0123",
      date: "02/11/2022",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      cost: "21.24",
      phone: "(222)444-5555",
      date: "05/02/2021",
    },
  ];

  app.get('/mockDataInvoices', (req,res) => {
    res.json(mockDataInvoices)
})

const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];

  app.get('/mockTransactions',(req,res) => {
    res.json(mockTransactions)
})


const mockBarData = [
    {
      country: "India",
      "hot dog": 100,
      "hot dogColor": "hsl(229, 70%, 50%)",
      increment: 66,
      incrementColor: "hsl(296, 70%, 50%)",
      salary: 52,
      salaryColor: "hsl(97, 70%, 50%)",
      profits: 50,
      profitsColor: "hsl(340, 70%, 50%)",
    },
    {
      country: "USA",
      "hot dog": 100,
      "hot dogColor": "hsl(307, 70%, 50%)",
      increment: 28,
      incrementColor: "hsl(111, 70%, 50%)",
      salary: 58,
      salaryColor: "hsl(273, 70%, 50%)",
      profits: 29,
      profitsColor: "hsl(275, 70%, 50%)",
    },
    {
      country: "France",
      "hot dog": 100,
      "hot dogColor": "hsl(72, 70%, 50%)",
      increment: 23,
      incrementColor: "hsl(96, 70%, 50%)",
      salary: 34,
      salaryColor: "hsl(106, 70%, 50%)",
      profits: 102,
      profitsColor: "hsl(256, 70%, 50%)",
    },
    {
      country: "Iran",
      "hot dog": 100,
      "hot dogColor": "hsl(257, 70%, 50%)",
      increment: 52,
      incrementColor: "hsl(326, 70%, 50%)",
      salary: 43,
      salaryColor: "hsl(110, 70%, 50%)",
      profits: 83,
      profitsColor: "hsl(9, 70%, 50%)",
    },
    {
      country: "Africa",
      "hot dog": 100,
      "hot dogColor": "hsl(190, 70%, 50%)",
      increment: 50,
      incrementColor: "hsl(325, 70%, 50%)",
      salary: 52,
      salaryColor: "hsl(54, 70%, 50%)",
      profits: 35,
      profitsColor: "hsl(285, 70%, 50%)",
    },
    {
      country: "UK",
      "hot dog": 100,
      "hot dogColor": "hsl(208, 70%, 50%)",
      increment: 41,
      incrementColor: "hsl(334, 70%, 50%)",
      salary: 57,
      salaryColor: "hsl(182, 70%, 50%)",
      profits: 48,
      profitsColor: "hsl(76, 70%, 50%)",
    },
    {
      country: "Japan",
      "hot dog": 100,
      "hot dogColor": "hsl(87, 70%, 50%)",
      increment: 47,
      incrementColor: "hsl(141, 70%, 50%)",
      salary: 108,
      salaryColor: "hsl(224, 70%, 50%)",
      profits: 49,
      profitsColor: "hsl(274, 70%, 50%)",
    },
  ];
  app.get('/mockBarData', (req,res) => {
    res.json(mockBarData)
})

const mockPieData = [
    {
      id: "Freshers",
      label: "Freshers",
      value: 239,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "Project",
      label: "Project",
      value: 170,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "Management",
      label: "Management",
      value: 322,
      color: "hsl(291, 70%, 50%)",
    },
    {
      id: "Employee",
      label: "Employee",
      value: 503,
      color: "hsl(229, 70%, 50%)",
    },
    {
      id: "Salary",
      label: "Salary",
      value: 584,
      color: "hsl(344, 70%, 50%)",
    },
  ];
  app.get('/mockPieData', (req,res) => {
    res.json(mockPieData)
})

const mockLineData = [
    {
      id: "2001",
      
      data: [
        {
          x: "India",
          y: 101,
        },
        {
          x: "USA",
          y: 75,
        },
        {
          x: "UK",
          y: 36,
        },
        {
          x: "France",
          y: 216,
        },
        {
          x: "China",
          y: 35,
        },
        {
          x: "Pakistan",
          y: 236,
        },
        {
          x: "Russia",
          y: 88,
        },
        {
          x: "Germany",
          y: 232,
        },
        {
          x: "Thailand",
          y: 281,
        },
        {
          x: "Turkey",
          y: 1,
        },
        {
          x: "Japan",
          y: 35,
        },
        {
          x: "others",
          y: 14,
        },
      ],
    },
    {
      id: "2011",
      
      data: [
        {
          x: "India",
          y: 212,
        },
        {
          x: "USA",
          y: 190,
        },
        {
          x: "UK",
          y: 270,
        },
        {
          x: "France",
          y: 9,
        },
        {
          x: "China",
          y: 75,
        },
        {
          x: "Pakistan",
          y: 175,
        },
        {
          x: "Russia",
          y: 33,
        },
        {
          x: "Germany",
          y: 189,
        },
        {
          x: "Thailand",
          y: 97,
        },
        {
          x: "Turkey",
          y: 87,
        },
        {
          x: "Japan",
          y: 299,
        },
        {
          x: "others",
          y: 251,
        },
      ],
    },
    {
      id: "2021",
      
      data: [
        {
          x: "India",
          y: 191,
        },
        {
          x: "USA",
          y: 136,
        },
        {
          x: "UK",
          y: 91,
        },
        {
          x: "France",
          y: 190,
        },
        {
          x: "China",
          y: 211,
        },
        {
          x: "Pakistan",
          y: 152,
        },
        {
          x: "Russia",
          y: 189,
        },
        {
          x: "Germany",
          y: 152,
        },
        {
          x: "Thailand",
          y: 8,
        },
        {
          x: "Turkey",
          y: 197,
        },
        {
          x: "Japan",
          y: 107,
        },
        {
          x: "others",
          y: 170,
        },
      ],
    },
  ];

  app.get('/mockLineData', (req,res) => {
    res.json(mockLineData)
})

app.get('/', (req,res) => {
    res.json({
        mockDataTeam :"/mockDataTeam",
        mockDataContacts: "/mockDataContacts",
        mockDataInvoices: "/mockDataInvoices",
        mockTransactions:"/mockTransactions",
        mockBarData:"/mockBarData",
        mockPieData:"/mockPieData",
        mockLineData:"/mockLineData"
    });
});



app.listen(PORT,() => 
console.log(`The server is listening on ${PORT}`));