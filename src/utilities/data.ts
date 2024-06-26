export const APPDATA = {};
export const SIDE_NAV_DATA = [
  {
    subject: "CUSTOMERS",
    subitems: [
      { subitem: "Users", icon: "users" },
      { subitem: "Guarantors", icon: "guarantors" },
      { subitem: "Loans", icon: "loans" },
      { subitem: "Decision Models", icon: "decision-models" },
      { subitem: "Savings", icon: "savings" },
      { subitem: "Loan Requests", icon: "loan-requests" },
      { subitem: "Whitelist", icon: "whitelist" },
      { subitem: "Karma", icon: "karma" },
    ],
  },
  {
    subject: "BUSINESSES",
    subitems: [
      { subitem: "Organization", icon: "organization" },
      { subitem: "Loan Products", icon: "loan-products" },
      { subitem: "Savings Products", icon: "savings-products" },
      { subitem: "Fees and Charges", icon: "fees-and-charges" },
      { subitem: "Transactions", icon: "transactions" },
      { subitem: "Services", icon: "services" },
      { subitem: "Service Account", icon: "service-account" },
      { subitem: "Settlements", icon: "settlements" },
      { subitem: "Reports", icon: "reports" },
    ],
  },
  {
    subject: "SETTINGS",
    subitems: [
      { subitem: "Preferences", icon: "preferences" },
      { subitem: "Fees and Pricing", icon: "fees-and-pricing" },
      { subitem: "Audit Logs", icon: "audit-logs" },
    ],
  },
];

export const SIDE_NAVIGATION = {
  ITEMS: [
    {
      name: "Analytics",
      route: "/dashboard",
      activePage: "analytics",
      icon: "analytics",
    },
    {
      name: "Indicator Management",
      route: "/dashboard/indicator-management",
      activePage: "indicator-management",
      icon: "home",
    },
    {
      name: "Result Framework",
      route: "/dashboard/result-framework",
      activePage: "result-framework",
      icon: "result-framework",
    },
    {
      name: "Project Component",
      route: "/dashboard/project-component",
      activePage: "project-component",
      icon: "project-component",
    },
    {
      name: "Third Party",
      route: "/dashboard/third-party",
      activePage: "third-party",
      icon: "analytics",
    },
    {
      name: "GIS Page",
      route: "/dashboard/gis-page",
      activePage: "gis-page",
      icon: "analytics",
    },
    {
      name: "Settings",
      route: "/dashboard/settings",
      activePage: "settings",
      icon: "settings",
    },
  ],
};

export const userStats = [
  {
    title: "Users",
    count: "2,453",
    icon: "users",
  },
  {
    title: "Active Users",
    count: "2,453",
    icon: "active-users",
  },
  {
    title: "Users with Loans",
    count: "12,453",
    icon: "users-with-loans",
  },
  {
    title: "Users with Savings",
    count: "102,453",
    icon: "users-with-savings",
  },
];

export const USER_DATA = [
  {
    header: "Personal Information",
    max_items: 5,
    items: [
      { label: "Full Name", value: "Grace Effiom" },
      { label: "Phone Number", value: "07060780922" },
      { label: "Email Address", value: "grace@gmail.com" },
      { label: "BVN", value: "07060780922" },
      { label: "Gender", value: "Female" },
      { label: "Marital Status", value: "Single" },
      { label: "Children", value: "None" },
      { label: "Type of Residence", value: "Parent’s Apartment" },
    ],
  },
  {
    header: "Education and Employment",
    max_items: 4,

    items: [
      { label: "Level of Education", value: "B.Sc" },
      { label: "Employment Status", value: "Employed" },
      { label: "Sector of Employment", value: "FinTech" },
      { label: "Duration of Employment", value: "2 years" },
      { label: "Office Email", value: "grace@lendsqr.com" },
      { label: "Monthly Income", value: "₦200,000.00 - ₦400,000.00" },
      { label: "Loan Repayment", value: "40,000" },
    ],
  },
  {
    header: "Socials",
    max_items: 5,

    items: [
      { label: "Twitter", value: "@grace_effiom" },
      { label: "Facebook", value: "Grace Effiom" },
      { label: "Instagram", value: "@grace_effiom" },
    ],
  },
  {
    header: "Guarantor",
    max_items: 5,

    items: [
      { label: "Full Name", value: "Debby Ogana" },
      { label: "Phone Number", value: "07060780922" },
      { label: "Email Address", value: "debby@gmail.com" },
      { label: "Relationship", value: "Sister" },
    ],
  },
  {
    header: "",
    max_items: 5,

    items: [
      { label: "Full Name", value: "Debby Ogana" },
      { label: "Phone Number", value: "07060780922" },
      { label: "Email Address", value: "debby@gmail.com" },
      { label: "Relationship", value: "Sister" },
    ],
  },
];

export const USER_INFO_CATEGORIES_MENU = [
  { name: "General Details" },
  { name: "Documents" },
  { name: "Bank Details" },
  { name: "Loans" },
  { name: "Savings" },
  { name: "App and System" },
];
