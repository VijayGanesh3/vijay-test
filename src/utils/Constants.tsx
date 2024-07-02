// REPORT TYPES
export const REPORT_QUALITY = "Quality";
export const REPORT_PRODUCTION_LOG = "ProductionLog";
export const REPORT_TECH_LOG = "TechLog";
export const REPORT_COATING_LOG = "CoatingProductionLog";
export const REPORT_PARTS_REQUEST = "PartsRequest";
export const REPORT_DAMAGE = "Damage";
// DATE FORMATS
export const DATE = "DD/MMM/YY";
export const DATETIMESEC = "DD/MMM/YY, hh:mm:ss A";
export const DATETIME = "DD-MMM-YY, hh:mm A";
export const DATETIMEFULL = "YYYY-MM-DD hh:mm:ss";
// CREATE NEW PASSWORD
export const CHALLENGE_NAME = "NEW_PASSWORD_REQUIRED";
// Number Pattern
export const COUNT_PATTERN = new RegExp(/^[0-9]*$/);
// Email Pattern
export const EMAIL_PATTERN = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
export const PASSWORD_PATTERN = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,99}$/
);

export const TITLE = "Password Policy";

export const PRIVACY_LINK = "https://www.crcevans.com/privacy-policy/";
export const TERMS_AND_USE = "";
export const CURR_YEAR = new Date().getFullYear();
