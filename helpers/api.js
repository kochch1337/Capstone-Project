const data = [
  {
    solution_Id: "1",
    solution: "Einkauf",
    team: "AA",
    bpe: [9, 10],
    bseint: [10],
    bsegr: [11],
    leadDeveloper: [12],
    cbo: [13],
    supportGroup: "supp-einkauf",
    modules: [
      {
        module: "ABC",
        developer: [
          {
            personal_Id: "1",
            firstname: "Thomas",
            lastname: "Müller",
            role: "dev",
          },
          {
            personal_Id: "2",
            firstname: "Jarno",
            lastname: "Recklinghausen",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "5",
            firstname: "Reiko",
            lastname: "Mann",
            role: "bc",
          },
          {
            personal_Id: "6",
            firstname: "Carmen",
            lastname: "Müller",
            role: "bc",
          },
        ],
      },
      {
        module: "AFK",
        developer: [
          {
            personal_Id: "1",
            firstname: "Thomas",
            lastname: "Müller",
            role: "dev",
          },
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "5",
            firstname: "Reiko",
            lastname: "Mann",
            role: "bc",
          },
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
        ],
      },
      {
        module: "WTF",
        developer: [
          {
            personal_Id: "4",
            firstname: "Andrea",
            lastname: "See",
            role: "dev",
          },
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
          {
            personal_Id: "8",
            firstname: "Thorsten",
            lastname: "Kurz",
            role: "bc",
          },
        ],
      },
    ],
  },
  {
    solution_Id: "2",
    solution: "Controlling",
    team: "TX",
    bpe: [14],
    bseint: [15],
    bsegr: [16],
    leadDeveloper: [17],
    cbo: [18],
    supportGroup: "supp-controlling",
    modules: [
      {
        module: "TTC",
        developer: [
          {
            personal_Id: "1",
            firstname: "Thomas",
            lastname: "Müller",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "5",
            firstname: "Reiko",
            lastname: "Mann",
            role: "bc",
          },
        ],
      },
      {
        module: "KKS",
        developer: [
          {
            personal_Id: "1",
            firstname: "Thomas",
            lastname: "Müller",
            role: "dev",
          },
          {
            personal_Id: "2",
            firstname: "Jarno",
            lastname: "Recklinghausen",
            role: "dev",
          },
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "5",
            firstname: "Reiko",
            lastname: "Mann",
            role: "bc",
          },
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
          {
            personal_Id: "8",
            firstname: "Thorsten",
            lastname: "Kurz",
            role: "bc",
          },
        ],
      },
      {
        module: "AXX",
        developer: [
          {
            personal_Id: "4",
            firstname: "Andrea",
            lastname: "See",
            role: "dev",
          },
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "8",
            firstname: "Thorsten",
            lastname: "Kurz",
            role: "bc",
          },
        ],
      },
    ],
  },
  {
    solution_Id: "3",
    solution: "Verkauf",
    team: "AA",
    bpe: [19],
    bseint: [20],
    bsegr: [21],
    leadDeveloper: [22],
    cbo: [23],
    supportGroup: "supp-verkauf",
    modules: [
      {
        module: "DKP",
        developer: [
          {
            personal_Id: "2",
            firstname: "Jarno",
            lastname: "Recklinghausen",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "6",
            firstname: "Carmen",
            lastname: "Müller",
            role: "bc",
          },
        ],
      },
      {
        module: "WIB",
        developer: [
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
        ],
      },
      {
        module: "XML",
        developer: [
          {
            personal_Id: "4",
            firstname: "Andrea",
            lastname: "See",
            role: "dev",
          },
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
          {
            personal_Id: "8",
            firstname: "Thorsten",
            lastname: "Kurz",
            role: "bc",
          },
        ],
      },
    ],
  },
  {
    solution_Id: "4",
    solution: "Verwaltung",
    team: "AA",
    bpe: [9],
    bseint: [15],
    bsegr: [21],
    leadDeveloper: [24],
    cbo: [25],
    supportGroup: "supp-verwaltung",
    modules: [
      {
        module: "NHC",
        developer: [
          {
            personal_Id: "3",
            firstname: "Simone",
            lastname: "Winterberg",
            role: "dev",
          },
        ],
        bpa: [
          {
            personal_Id: "7",
            firstname: "Laura",
            lastname: "Hammer",
            role: "bc",
          },
        ],
      },
    ],
  },
];

function getAllData() {
  return data;
}

function fakeFetcher(url) {
  if (!url) return;

  switch (true) {
    case "/api/data" === url:
      return getAllData();
    default:
      throw new Error("unmapped request");
  }
}

export default data;
export { getAllData, fakeFetcher };
