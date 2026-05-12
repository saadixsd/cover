export interface ProvinceResource {
  name: string;
  code: string;
  crisis: string;
  crisisPhone: string;
  dvHelpline?: string;
  dvPhone?: string;
  govLink: string;
  govLabel: string;
  legalAid?: string;
  legalAidLink?: string;
  shelterLink?: string;
  additionalResources: { label: string; url: string }[];
}

const commonCrisis = {
  crisis: "Tel-Aide (Greater Montreal)",
  crisisPhone: "514-935-1101",
  dvHelpline: "SOS Violence Conjugale",
  dvPhone: "1-800-363-9010",
  govLink: "https://www.quebec.ca/en/family-and-support-for-individuals/violence/conjugal-violence",
  govLabel: "Quebec Conjugal Violence Resources",
  legalAid: "Juripop — Legal Help",
  legalAidLink: "https://juripop.org",
};

export const provinces: ProvinceResource[] = [
  {
    ...commonCrisis,
    name: "Downtown Montreal (Ville-Marie)",
    code: "MTL-DT",
    additionalResources: [
      { label: "Maison Flora Tristan", url: "https://maisonfloratristan.com" },
      { label: "Women Aware / Femmes Averties", url: "https://www.womenaware.ca" },
      { label: "La Rue des Femmes", url: "https://laruedesfemmes.org" },
      { label: "Passages", url: "https://passagesmtl.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Plateau-Mont-Royal",
    code: "MTL-PL",
    additionalResources: [
      { label: "Women's Centre of Montreal", url: "https://centredesfemmesdemtl.org" },
      { label: "Centre de Solidarité Lesbienne", url: "https://www.solidaritelesbienne.qc.ca" },
    ],
  },
  {
    ...commonCrisis,
    name: "Côte-des-Neiges",
    code: "MTL-CDN",
    additionalResources: [
      { label: "Femmes du Monde", url: "https://femmesdumondecdn.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Saint-Laurent",
    code: "MTL-SL",
    additionalResources: [
      { label: "Amal Center for Women", url: "https://www.amalwomencenter.ca" },
      { label: "Le Centre des Femmes de Saint-Laurent", url: "https://www.cfstl.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Rosemont",
    code: "MTL-RO",
    additionalResources: [
      { label: "Maison Secours aux Femmes", url: "https://www.maisonsecoursauxfemmes.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Montréal-Nord",
    code: "MTL-N",
    additionalResources: [
      { label: "Halte-Femmes MTL Nord", url: "https://haltefemmes.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Rivière-des-Prairies",
    code: "MTL-RDP",
    additionalResources: [
      { label: "Centre des Femmes de Rivière-des-Prairies", url: "https://www.cdfrdp.com" },
    ],
  },
  {
    ...commonCrisis,
    name: "Montréal-Est",
    code: "MTL-E",
    additionalResources: [
      { label: "Centre des Femmes de Montréal-Est", url: "https://www.cdfmepat.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "West Island",
    code: "MTL-WI",
    additionalResources: [
      { label: "West Island Women's Shelter", url: "https://wiws.ca" },
      { label: "West Island Women's Centre", url: "https://wiwc.ca" },
    ],
  },
  {
    ...commonCrisis,
    name: "Dorval",
    code: "MTL-DV",
    additionalResources: [
      { label: "Les Parados", url: "https://www.leparados.ca" },
    ],
  },
  {
    ...commonCrisis,
    name: "Laval",
    code: "LAV",
    additionalResources: [
      { label: "Maison le Prélude", url: "https://www.maisonleprelude.com" },
      { label: "Maison L'Esther", url: "https://maisonlesther.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Longueuil",
    code: "LON",
    additionalResources: [
      { label: "CALACS Longueuil", url: "https://www.calacslongueuil.org" },
      { label: "Maison de la Paix", url: "https://maisonsdelapaix.org" },
    ],
  },
  {
    ...commonCrisis,
    name: "Montreal (city-wide)",
    code: "MTL",
    additionalResources: [
      { label: "Chez Doris", url: "https://chezdoris.org" },
      { label: "Logifem", url: "https://logifem.org" },
      { label: "Le Chaînon", url: "https://lechainon.org" },
      { label: "MSAC / CVASM", url: "https://cvasm.org" },
    ],
  },
];

export const nationalResources = [
  { label: "Talk Suicide Canada", phone: "1-833-456-4566", url: "https://talksuicide.ca" },
  { label: "Kids Help Phone", phone: "1-800-668-6868", url: "https://kidshelpphone.ca" },
  { label: "Canadian Women's Foundation", url: "https://canadianwomen.org" },
  { label: "Department of Justice — Family Violence", url: "https://www.justice.gc.ca/eng/cj-jp/fv-vf/index.html" },
  { label: "Government of Canada — Violence & Abuse", url: "https://www.canada.ca/en/public-health/services/health-promotion/stop-family-violence.html" },
];
