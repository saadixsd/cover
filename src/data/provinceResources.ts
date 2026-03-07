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

export const provinces: ProvinceResource[] = [
  {
    name: "Alberta",
    code: "AB",
    crisis: "Alberta's One Line",
    crisisPhone: "1-866-594-0533",
    dvHelpline: "Family Violence Info Line",
    dvPhone: "310-1818",
    govLink: "https://www.alberta.ca/family-violence-get-help",
    govLabel: "Alberta Family Violence Help",
    legalAid: "Legal Aid Alberta",
    legalAidLink: "https://www.legalaid.ab.ca",
    additionalResources: [
      { label: "Alberta Council of Women's Shelters", url: "https://acws.ca" },
    ],
  },
  {
    name: "British Columbia",
    code: "BC",
    crisis: "BC Crisis Line",
    crisisPhone: "1-800-784-2433",
    dvHelpline: "VictimLink BC",
    dvPhone: "1-800-563-0808",
    govLink: "https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime",
    govLabel: "BC Victims of Crime",
    legalAid: "Legal Aid BC",
    legalAidLink: "https://legalaid.bc.ca",
    additionalResources: [
      { label: "BC Society of Transition Houses", url: "https://bcsth.ca" },
    ],
  },
  {
    name: "Manitoba",
    code: "MB",
    crisis: "Manitoba Suicide Prevention & Support Line",
    crisisPhone: "1-877-435-7170",
    dvHelpline: "Manitoba Domestic Violence Crisis Line",
    dvPhone: "1-877-977-0007",
    govLink: "https://www.gov.mb.ca/fs/fvpp/",
    govLabel: "Manitoba Family Violence Prevention",
    additionalResources: [
      { label: "Manitoba Association of Women's Shelters", url: "https://maws.mb.ca" },
    ],
  },
  {
    name: "New Brunswick",
    code: "NB",
    crisis: "Chimo Helpline",
    crisisPhone: "1-800-667-5005",
    govLink: "https://www2.gnb.ca/content/gnb/en/departments/women/Violence_Prevention.html",
    govLabel: "NB Violence Prevention",
    additionalResources: [
      { label: "NB Transition House Association", url: "https://www.nbtha-amtnb.ca" },
    ],
  },
  {
    name: "Newfoundland and Labrador",
    code: "NL",
    crisis: "NL Crisis Line",
    crisisPhone: "1-888-737-4668",
    govLink: "https://www.gov.nl.ca/vpi/",
    govLabel: "NL Violence Prevention Initiative",
    additionalResources: [
      { label: "Transition House Association of NL", url: "https://thanl.org" },
    ],
  },
  {
    name: "Nova Scotia",
    code: "NS",
    crisis: "Nova Scotia Crisis Line",
    crisisPhone: "1-888-429-8167",
    govLink: "https://novascotia.ca/coms/svs/",
    govLabel: "NS Victim Services",
    additionalResources: [
      { label: "Transition House Association of NS", url: "https://thans.ca" },
    ],
  },
  {
    name: "Ontario",
    code: "ON",
    crisis: "Ontario Mental Health Helpline",
    crisisPhone: "1-866-531-2600",
    dvHelpline: "Assaulted Women's Helpline",
    dvPhone: "1-866-863-0511",
    govLink: "https://www.ontario.ca/page/domestic-violence",
    govLabel: "Ontario Domestic Violence Resources",
    legalAid: "Legal Aid Ontario",
    legalAidLink: "https://www.legalaid.on.ca",
    additionalResources: [
      { label: "Ontario Association of Interval & Transition Houses", url: "https://www.oaith.ca" },
      { label: "Fem'aide (French)", url: "https://femaide.ca" },
    ],
  },
  {
    name: "Prince Edward Island",
    code: "PE",
    crisis: "PEI Island Helpline",
    crisisPhone: "1-800-218-2885",
    govLink: "https://www.princeedwardisland.ca/en/information/justice-and-public-safety/victim-services",
    govLabel: "PEI Victim Services",
    additionalResources: [
      { label: "PEI Family Violence Prevention Services", url: "https://www.fvps.ca" },
    ],
  },
  {
    name: "Quebec",
    code: "QC",
    crisis: "Tel-Aide",
    crisisPhone: "514-935-1101",
    dvHelpline: "SOS Violence Conjugale",
    dvPhone: "1-800-363-9010",
    govLink: "https://www.quebec.ca/en/family-and-support-for-individuals/violence/conjugal-violence",
    govLabel: "Quebec Conjugal Violence Resources",
    additionalResources: [
      { label: "Regroupement des maisons pour femmes victimes de violence conjugale", url: "https://maisons-femmes.qc.ca" },
    ],
  },
  {
    name: "Saskatchewan",
    code: "SK",
    crisis: "Saskatchewan Crisis Line",
    crisisPhone: "306-933-6200",
    govLink: "https://www.saskatchewan.ca/residents/justice-crime-and-the-law/victims-of-crime-and-abuse",
    govLabel: "SK Victims of Crime & Abuse",
    additionalResources: [
      { label: "Provincial Association of Transition Houses SK", url: "https://pathssk.org" },
    ],
  },
  {
    name: "Northwest Territories",
    code: "NT",
    crisis: "NWT Help Line",
    crisisPhone: "1-800-661-0844",
    govLink: "https://www.justice.gov.nt.ca/en/victim-services/",
    govLabel: "NWT Victim Services",
    additionalResources: [],
  },
  {
    name: "Nunavut",
    code: "NU",
    crisis: "Nunavut Kamatsiaqtut Help Line",
    crisisPhone: "1-800-265-3333",
    govLink: "https://www.gov.nu.ca/family-services",
    govLabel: "Nunavut Family Services",
    additionalResources: [],
  },
  {
    name: "Yukon",
    code: "YT",
    crisis: "Yukon Crisis Line",
    crisisPhone: "1-844-533-3030",
    dvHelpline: "VictimLink BC (serves Yukon)",
    dvPhone: "1-800-563-0808",
    govLink: "https://yukon.ca/en/legal-and-social-supports/support-victims-crime",
    govLabel: "Yukon Victim Support",
    additionalResources: [
      { label: "Yukon Women's Transition Home Society", url: "https://yukontransitionhome.ca" },
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
