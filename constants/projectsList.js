const projectsList = [
  {
    name: "MasterExchange",
    desc: (
      <span>
        A marketplace for investing in music royalties.
        <br />
        Led the entire tech stack from the React frontend to the FastAPI backend
        and AWS deployment. handling thousands of concurrent user transactions and trades.
      </span>
    ),
    images: "/project-images/masterexchange",
    tags: "React - FastAPI - AWS - PostgreSQL",
    url: "https://www.masterexchange.com",
  },
  {
    name: "PointsOwl",
    desc: (
      <span>
        A music-tech SaaS helping creators and their teams optimize royalties.
        <br />
        Built using Next.js, Node.js, and PostgreSQL, handling hundreds of
        thousands of rows of royalty data.
      </span>
    ),
    images: "/project-images/pointsowl",
    tags: "Next.js - Node.js - PostgreSQL",
    url: "https://www.pointsowl.com",
  },
  {
    name: "Predli",
    desc: (
      <span>
        A global firm driving emerging AI technologies.
        <br />
        Developed scalable SaaS solutions using Next.js, FastAPI, and AWS to
        enhance business efficiency.
      </span>
    ),
    images: "/project-images/predli",
    tags: "Next.js - FastAPI - AWS",
    url: "https://www.predli.com",
  },
];

export default projectsList;
