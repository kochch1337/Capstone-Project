const data = [
  {
    Id: "1",
    Solution: "Einkauf",
    Team: "AA",
    BPE: "Sebastian Brucker",
    BSEINT: "Jochen Maier",
    BSEGR: "Helmut Schön",
    LeadDevloper: "Veit Maurer",
    CBO: "Ahmet Peros",
    SupportGroup: "supp-einkauf",
    Modules: [
      {
        Modul: "ABC",
        Developers: [
          {
            DevloperId: "1",
            Firstname: "Thomas",
            Lastanme: "Müller",
          },
          {
            DeveloperId: "2",
            Firstname: "Jarno",
            Lastanme: "Recklinghausen",
          },
        ],
        BPA: [
          {
            BpaId: "1",
            Firstname: "Reiko",
            Lastanme: "Mann",
          },
          {
            BpaId: "2",
            Firstname: "Carmen",
            Lastanme: "Müller",
          },
        ],
      },
      {
        Modul: "AFK",
        Developer: [
          {
            DevloperId: "1",
            Firstname: "Thomas",
            Lastanme: "Müller",
          },
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "1",
            Firstname: "Reiko",
            Lastanme: "Mann",
          },
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
        ],
      },
      {
        Modul: "WTF",
        Developer: [
          {
            DevloperId: "4",
            Firstname: "Andrea",
            Lastanme: "See",
          },
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
          {
            BpaId: "4",
            Firstname: "Thorsten",
            Lastanme: "Kurz",
          },
        ],
      },
    ],
  },
  {
    Id: "2",
    Solution: "Controlling",
    Team: "TX",
    BPE: "Tom Heinrich",
    BSEINT: "Reiko Carlson",
    BSEGR: "Maria Angstmann",
    LeadDevloper: "Stefan Hirtel",
    CBO: "August Keller",
    SupportGroup: "supp-controlling",
    Modules: [
      {
        Modul: "TTC",
        Developers: [
          {
            DevloperId: "1",
            Firstname: "Thomas",
            Lastanme: "Müller",
          },
        ],
        BPA: [
          {
            BpaId: "1",
            Firstname: "Reiko",
            Lastanme: "Mann",
          },
        ],
      },
      {
        Modul: "KKS",
        Developer: [
          {
            DevloperId: "1",
            Firstname: "Thomas",
            Lastanme: "Müller",
          },
          {
            DeveloperId: "2",
            Firstname: "Jarno",
            Lastanme: "Recklinghausen",
          },
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "1",
            Firstname: "Reiko",
            Lastanme: "Mann",
          },
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
          {
            BpaId: "4",
            Firstname: "Thorsten",
            Lastanme: "Kurz",
          },
        ],
      },
      {
        Modul: "AXX",
        Developer: [
          {
            DevloperId: "4",
            Firstname: "Andrea",
            Lastanme: "See",
          },
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "4",
            Firstname: "Thorsten",
            Lastanme: "Kurz",
          },
        ],
      },
    ],
  },
  {
    Id: "3",
    Solution: "Verkauf",
    Team: "AA",
    BPE: "Heidrung Maier",
    BSEINT: "Andrea Meier",
    BSEGR: "Diana Carosi",
    LeadDevloper: "Luka Ambrosios",
    CBO: "Serkan Turhan",
    SupportGroup: "supp-verkauf",
    Modules: [
      {
        Modul: "DKP",
        Developers: [
          {
            DeveloperId: "2",
            Firstname: "Jarno",
            Lastanme: "Recklinghausen",
          },
        ],
        BPA: [
          {
            BpaId: "2",
            Firstname: "Carmen",
            Lastanme: "Müller",
          },
        ],
      },
      {
        Modul: "WIB",
        Developer: [
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
        ],
      },
      {
        Modul: "XML",
        Developer: [
          {
            DevloperId: "4",
            Firstname: "Andrea",
            Lastanme: "See",
          },
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
          {
            BpaId: "4",
            Firstname: "Thorsten",
            Lastanme: "Kurz",
          },
        ],
      },
    ],
  },
  {
    Id: "4",
    Solution: "Verwaltung",
    Team: "AA",
    BPE: "Sebastian Brucker",
    BSEINT: "Reiko Carlsen",
    BSEGR: "Diana Carosi",
    LeadDevloper: "Sergej Seehl",
    CBO: "Thomas Bauernfeind",
    SupportGroup: "supp-verwaltung",
    Modules: [
      {
        Modul: "NHC",
        Developers: [
          {
            DeveloperId: "3",
            Firstname: "Simone",
            Lastanme: "Winterberg",
          },
        ],
        BPA: [
          {
            BpaId: "3",
            Firstname: "Laura",
            Lastanme: "Hammer",
          },
        ],
      },
    ],
  },
];

function getAllData() {
  return data;
}

function getDataById(id) {
  return data.find((solution) => solution.id === id);
}

const hostname = "http://localhost:3000/";

function fetcher(url) {
  if (!url) return;

  return fetch(hostname + url).then((res) => res.json());
}

function fakeFetcher(url) {
  if (!url) return;

  switch (true) {
    case "/api/data" === url:
      return getAllData();
    case url?.startsWith("/api/data/"):
      return getDataById(url.split("/").at(-1));
    default:
      throw new Error("unmapped request");
  }
}

export default data;
export { getAllData, fetcher, fakeFetcher };
