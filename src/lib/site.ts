// Single source of truth for studio contact details — the footer, contact
// page, about page and contact form all read from here, so a change only
// ever needs to happen once.
export const site = {
  name: "Beurant",
  founder: "Bevan David",
  email: "bevan@beurant.com",
  phone: "+94 77 299 0570",
  phoneHref: "tel:+94772990570",
  location: "Wattala (Greater Colombo), Sri Lanka",
  founded: "2018",
  socials: [
    { label: "Instagram", href: "https://instagram.com/Beurant" },
    { label: "Facebook", href: "https://facebook.com/Beurant" },
  ],
} as const;

// Web3Forms access key (https://web3forms.com). Public by design — it only
// allows sending to the inbox it was issued for. Leave unset and the contact
// form falls back to opening the visitor's email app.
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
