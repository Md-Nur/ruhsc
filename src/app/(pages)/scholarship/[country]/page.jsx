import CardContainer from "@/components/CardContainer";

const scholarship = [
  {
    id: 1,
    name: "UK Government Chevening Scholarships",
    provider: "UK Government",
    amount: "Full tuition fees, monthly stipend, travel costs",
    eligibilityCriteria:
      "Must be a citizen of a Chevening-eligible country, have an undergraduate degree, and at least two years of work experience",
    applicationDeadline: "November 2, 2024",
    description:
      "Chevening Scholarships are awarded to individuals with strong academic backgrounds and leadership potential. The scholarship offers financial support to study for a master’s degree at any UK university.",
    country: "UK",
  },
  {
    id: 2,
    name: "Commonwealth Scholarships",
    provider: "Commonwealth Scholarship Commission",
    amount: "Full tuition fees, airfare, living allowance",
    eligibilityCriteria:
      "Must be a citizen of a Commonwealth country, hold an undergraduate degree, and meet the academic requirements of the chosen university",
    applicationDeadline: "December 22, 2024",
    description:
      "Commonwealth Scholarships are aimed at talented individuals who have the potential to make a positive impact on the global stage. These scholarships support master's and PhD study in the UK.",
    country: "UK",
  },
  {
    id: 3,
    name: "Gates Cambridge Scholarships",
    provider: "Bill and Melinda Gates Foundation",
    amount:
      "Full cost of studying at Cambridge, including tuition fees, maintenance allowance, and travel costs",
    eligibilityCriteria:
      "Must be applying to pursue a full-time postgraduate degree at the University of Cambridge",
    applicationDeadline: "October 11, 2024",
    description:
      "Gates Cambridge Scholarships are awarded to outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge.",
    country: "UK",
  },
  {
    id: 4,
    name: "Rhodes Scholarships",
    provider: "Rhodes Trust",
    amount:
      "Full tuition fees, annual stipend, health insurance, and travel expenses",
    eligibilityCriteria:
      "Must be between 19-25 years old, have completed a bachelor's degree, and demonstrate academic excellence and leadership potential",
    applicationDeadline: "July 31, 2024",
    description:
      "Rhodes Scholarships are prestigious awards that enable outstanding young people from around the world to study at the University of Oxford. Scholars are selected on the basis of their exceptional intellect, character, leadership, and commitment to service.",
    country: "UK",
  },
  {
    id: 5,
    name: "University of Edinburgh Global Scholarships",
    provider: "University of Edinburgh",
    amount: "£10,000 towards tuition fees",
    eligibilityCriteria:
      "Must be an international student applying for a full-time one-year postgraduate master's program",
    applicationDeadline: "June 1, 2024",
    description:
      "The University of Edinburgh offers Global Scholarships to high-achieving international students. The scholarship is available for postgraduate master's programs across various disciplines.",
    country: "UK",
  },
  {
    id: 6,
    name: "British Council GREAT Scholarships",
    provider: "British Council",
    amount: "£10,000 towards tuition fees",
    eligibilityCriteria:
      "Must be a citizen of one of the 14 eligible countries and applying for a postgraduate course in the UK",
    applicationDeadline: "May 15, 2024",
    description:
      "The GREAT Scholarships program offers a minimum of £10,000 towards tuition fees for a wide range of one-year taught postgraduate courses in the UK. The scholarships are jointly funded by the UK government and participating UK higher education institutions.",
    country: "UK",
  },
  {
    id: 7,
    name: "Fulbright Foreign Student Program",
    provider: "U.S. Government",
    amount: "Full tuition fees, living stipend, health insurance, travel costs",
    eligibilityCriteria:
      "Must be a citizen of a participating country, have completed undergraduate education, and meet the host institution's requirements",
    applicationDeadline: "October 1, 2024",
    description:
      "The Fulbright Foreign Student Program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States.",
    country: "USA",
  },
  {
    id: 8,
    name: "Stanford Knight-Hennessy Scholars",
    provider: "Stanford University",
    amount:
      "Full funding including tuition, stipend, graduate program, and related academic expenses",
    eligibilityCriteria:
      "Must be applying for a full-time graduate degree at Stanford University, demonstrate leadership and civic commitment",
    applicationDeadline: "September 12, 2024",
    description:
      "The Knight-Hennessy Scholars program cultivates a diverse, multidisciplinary community of emerging leaders from around the world as they prepare to tackle the complex challenges facing society.",
    country: "USA",
  },
  {
    id: 9,
    name: "AAUW International Fellowships",
    provider: "American Association of University Women (AAUW)",
    amount: "Up to $30,000",
    eligibilityCriteria:
      "Must be a woman, a non-U.S. citizen, hold an academic degree equivalent to a U.S. bachelor’s degree, and intend to return to her home country to pursue a professional career",
    applicationDeadline: "November 15, 2024",
    description:
      "AAUW International Fellowships are awarded for full-time study or research in the United States to women who are not U.S. citizens or permanent residents.",
    country: "USA",
  },
  {
    id: 10,
    name: "Yale University Scholarships",
    provider: "Yale University",
    amount: "Varies from a few hundred dollars to over $70,000 per year",
    eligibilityCriteria:
      "Must be applying to Yale University, demonstrate financial need, and meet the academic standards of the university",
    applicationDeadline: "January 2, 2024",
    description:
      "Yale University offers a range of need-based scholarships for international students who demonstrate financial need and academic excellence.",
    country: "USA",
  },
  {
    id: 11,
    name: "Hubert H. Humphrey Fellowship Program",
    provider: "U.S. Government",
    amount:
      "Full funding including tuition, living allowance, health insurance, and travel expenses",
    eligibilityCriteria:
      "Must be a mid-career professional in a leadership position, have a minimum of five years of professional experience, and demonstrate leadership qualities",
    applicationDeadline: "October 1, 2024",
    description:
      "The Humphrey Fellowship Program provides a year of professional enrichment in the United States for experienced professionals from designated countries undergoing development or political transition.",
    country: "USA",
  },
  {
    id: 12,
    name: "Vanier Canada Graduate Scholarships",
    provider: "Canadian Government",
    amount: "CAD 50,000 per year for three years",
    eligibilityCriteria:
      "Must be a doctoral student, demonstrate leadership skills, and have a high standard of scholarly achievement in graduate studies",
    applicationDeadline: "November 1, 2024",
    description:
      "The Vanier CGS program aims to attract and retain world-class doctoral students by supporting students who demonstrate both leadership skills and a high standard of scholarly achievement.",
    country: "Canada",
  },
  {
    id: 13,
    name: "Pierre Elliott Trudeau Foundation Scholarships",
    provider: "Pierre Elliott Trudeau Foundation",
    amount: "Up to CAD 60,000 per year for up to four years",
    eligibilityCriteria:
      "Must be pursuing doctoral studies in the social sciences and humanities, demonstrate academic excellence and leadership potential",
    applicationDeadline: "December 15, 2024",
    description:
      "These scholarships support doctoral candidates pursuing research in areas related to the humanities and social sciences, promoting academic excellence and community leadership.",
    country: "Canada",
  },
  {
    id: 14,
    name: "University of Toronto Lester B. Pearson International Scholarships",
    provider: "University of Toronto",
    amount:
      "Full tuition, books, incidental fees, and full residence support for four years",
    eligibilityCriteria:
      "Must be an international student applying to undergraduate programs, demonstrate exceptional academic achievement and creativity, and recognized as a leader within their school",
    applicationDeadline: "January 15, 2024",
    description:
      "The Lester B. Pearson International Scholarships at the University of Toronto provide an unparalleled opportunity for outstanding international students to study at one of the world's best universities.",
    country: "Canada",
  },
  {
    id: 15,
    name: "UBC International Leader of Tomorrow Award",
    provider: "University of British Columbia",
    amount: "Full-ride scholarships based on financial need and academic merit",
    eligibilityCriteria:
      "Must be applying for an undergraduate program, demonstrate superior academic achievement, and require financial assistance to study at UBC",
    applicationDeadline: "December 1, 2024",
    description:
      "The International Leader of Tomorrow Award recognizes international undergraduate students who",
    country: "Canada",
  },
  {
    id: 16,
    name: "DAAD Scholarships",
    provider: "German Academic Exchange Service (DAAD)",
    amount:
      "Monthly stipend, travel allowance, health insurance, and study costs",
    eligibilityCriteria:
      "Must be a graduate or doctoral candidate, demonstrate academic excellence, and meet the requirements of the specific scholarship program",
    applicationDeadline: "October 15, 2024",
    description:
      "DAAD Scholarships offer graduates and doctoral candidates the opportunity to pursue further education and research in Germany. They support a range of study and research opportunities.",
    country: "Other",
  },
  {
    id: 17,
    name: "Heinrich Böll Foundation Scholarships",
    provider: "Heinrich Böll Foundation",
    amount: "Monthly stipend plus various allowances",
    eligibilityCriteria:
      "Must be an international student pursuing a master's or PhD degree in Germany, demonstrate academic excellence and social engagement",
    applicationDeadline: "March 1, 2024",
    description:
      "The Heinrich Böll Foundation awards scholarships to international students who demonstrate academic excellence, social engagement, and interest in the foundation's values of ecology, sustainability, democracy, human rights, self-determination, and justice.",
    country: "Other",
  },
];

const page = ({ params }) => {
  return (
    <CardContainer title={`${params.country.toUpperCase()}'s Scholarship`}>
      {scholarship
        .filter((scholar) => scholar.country.toLowerCase() === params.country)
        .map((scholar) => (
          <div key={scholar.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{scholar.name}</h2>
              <p>
                <strong>Provider:</strong> {scholar.provider}
              </p>
              <p>
                <strong>Amount:</strong> {scholar.amount}
              </p>
              <p>
                <strong>Eligibility Criteria:</strong>{" "}
                {scholar.eligibilityCriteria}
              </p>
              <p>
                <strong>Application Deadline:</strong>{" "}
                {scholar.applicationDeadline}
              </p>
              <p>{scholar.description}</p>
            </div>
          </div>
        ))}
    </CardContainer>
  );
};

export default page;
