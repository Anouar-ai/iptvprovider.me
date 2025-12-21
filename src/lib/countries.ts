
export type Country = {
  id: string;
  name: string;
  code: string;
  timezone: string; // Primary timezone (e.g., "UTC-5", "UTC+1")
  currency: string; // Primary currency (e.g., "USD", "EUR")
  language: string; // Primary language (e.g., "English", "Spanish")
};

// Extended country data: [name, code, timezone, currency, language]
const countryData: [string, string, string, string, string][] = [
  ["Afghanistan", "af", "UTC+4:30", "AFN", "Pashto/Dari"], ["Albania", "al", "UTC+1", "ALL", "Albanian"], ["Algeria", "dz", "UTC+1", "DZD", "Arabic"], ["Andorra", "ad", "UTC+1", "EUR", "Catalan"], ["Angola", "ao", "UTC+1", "AOA", "Portuguese"], ["Antigua and Barbuda", "ag", "UTC-4", "XCD", "English"],
  ["Argentina", "ar", "UTC-3", "ARS", "Spanish"], ["Armenia", "am", "UTC+4", "AMD", "Armenian"], ["Australia", "au", "UTC+10", "AUD", "English"], ["Austria", "at", "UTC+1", "EUR", "German"], ["Azerbaijan", "az", "UTC+4", "AZN", "Azerbaijani"], ["Bahamas", "bs", "UTC-5", "BSD", "English"],
  ["Bahrain", "bh", "UTC+3", "BHD", "Arabic"], ["Bangladesh", "bd", "UTC+6", "BDT", "Bengali"], ["Barbados", "bb", "UTC-4", "BBD", "English"], ["Belarus", "by", "UTC+3", "BYN", "Belarusian/Russian"], ["Belgium", "be", "UTC+1", "EUR", "Dutch/French"], ["Belize", "bz", "UTC-6", "BZD", "English"],
  ["Benin", "bj", "UTC+1", "XOF", "French"], ["Bhutan", "bt", "UTC+6", "BTN", "Dzongkha"], ["Bolivia", "bo", "UTC-4", "BOB", "Spanish"], ["Bosnia and Herzegovina", "ba", "UTC+1", "BAM", "Bosnian/Serbian"], ["Botswana", "bw", "UTC+2", "BWP", "English"], ["Brazil", "br", "UTC-3", "BRL", "Portuguese"],
  ["Brunei", "bn", "UTC+8", "BND", "Malay"], ["Bulgaria", "bg", "UTC+2", "BGN", "Bulgarian"], ["Burkina Faso", "bf", "UTC+0", "XOF", "French"], ["Myanmar", "mm", "UTC+6:30", "MMK", "Burmese"], ["Burundi", "bi", "UTC+2", "BIF", "Kirundi/French"], ["Cabo Verde", "cv", "UTC-1", "CVE", "Portuguese"],
  ["Cambodia", "kh", "UTC+7", "KHR", "Khmer"], ["Cameroon", "cm", "UTC+1", "XAF", "French/English"], ["Canada", "ca", "UTC-5", "CAD", "English/French"], ["Cayman Islands", "ky", "UTC-5", "KYD", "English"], ["Central African Republic", "cf", "UTC+1", "XAF", "French"],
  ["Chad", "td", "UTC+1", "XAF", "French/Arabic"], ["Chile", "cl", "UTC-3", "CLP", "Spanish"], ["China", "cn", "UTC+8", "CNY", "Mandarin"], ["Colombia", "co", "UTC-5", "COP", "Spanish"], ["Comoros", "km", "UTC+3", "KMF", "Arabic/French"],
  ["Cook Islands", "ck", "UTC-10", "NZD", "English"], ["Costa Rica", "cr", "UTC-6", "CRC", "Spanish"], ["Cote d'Ivoire (Ivory Coast)", "ci", "UTC+0", "XOF", "French"], ["Croatia", "hr", "UTC+1", "EUR", "Croatian"], ["Cuba", "cu", "UTC-5", "CUP", "Spanish"],
  ["Cyprus", "cy", "UTC+2", "EUR", "Greek/Turkish"], ["Czechia", "cz", "UTC+1", "CZK", "Czech"], ["Democratic Republic of the Congo", "cd", "UTC+1", "CDF", "French"], ["Denmark", "dk", "UTC+1", "DKK", "Danish"], ["Djibouti", "dj", "UTC+3", "DJF", "French/Arabic"],
  ["Dominica", "dm", "UTC-4", "XCD", "English"], ["Dominican Republic", "do", "UTC-4", "DOP", "Spanish"], ["Ecuador", "ec", "UTC-5", "USD", "Spanish"], ["Egypt", "eg", "UTC+2", "EGP", "Arabic"],
  ["El Salvador", "sv", "UTC-6", "USD", "Spanish"], ["Equatorial Guinea", "gq", "UTC+1", "XAF", "Spanish"], ["Eritrea", "er", "UTC+3", "ERN", "Tigrinya"], ["Estonia", "ee", "UTC+2", "EUR", "Estonian"], ["Eswatini", "sz", "UTC+2", "SZL", "English/Swazi"], ["Ethiopia", "et", "UTC+3", "ETB", "Amharic"],
  ["Fiji", "fj", "UTC+12", "FJD", "English/Fijian"], ["Finland", "fi", "UTC+2", "EUR", "Finnish"], ["France", "fr", "UTC+1", "EUR", "French"], ["Gabon", "ga", "UTC+1", "XAF", "French"], ["Gambia", "gm", "UTC+0", "GMD", "English"], ["Georgia", "ge", "UTC+4", "GEL", "Georgian"], ["Germany", "de", "UTC+1", "EUR", "German"],
  ["Ghana", "gh", "UTC+0", "GHS", "English"], ["Greece", "gr", "UTC+2", "EUR", "Greek"], ["Grenada", "gd", "UTC-4", "XCD", "English"], ["Guatemala", "gt", "UTC-6", "GTQ", "Spanish"], ["Guinea", "gn", "UTC+0", "GNF", "French"], ["Guinea-Bissau", "gw", "UTC+0", "XOF", "Portuguese"],
  ["Guyana", "gy", "UTC-4", "GYD", "English"], ["Haiti", "ht", "UTC-5", "HTG", "French/Creole"], ["Holy See", "va", "UTC+1", "EUR", "Italian/Latin"], ["Honduras", "hn", "UTC-6", "HNL", "Spanish"], ["Hungary", "hu", "UTC+1", "HUF", "Hungarian"], ["Iceland", "is", "UTC+0", "ISK", "Icelandic"], ["India", "in", "UTC+5:30", "INR", "Hindi/English"],
  ["Indonesia", "id", "UTC+7", "IDR", "Indonesian"], ["Iran", "ir", "UTC+3:30", "IRR", "Persian"], ["Iraq", "iq", "UTC+3", "IQD", "Arabic/Kurdish"], ["Ireland", "ie", "UTC+0", "EUR", "English/Irish"], ["Israel", "il", "UTC+2", "ILS", "Hebrew"], ["Italy", "it", "UTC+1", "EUR", "Italian"], ["Jamaica", "jm", "UTC-5", "JMD", "English"],
  ["Japan", "jp", "UTC+9", "JPY", "Japanese"], ["Jordan", "jo", "UTC+2", "JOD", "Arabic"], ["Kazakhstan", "kz", "UTC+6", "KZT", "Kazakh/Russian"], ["Kenya", "ke", "UTC+3", "KES", "English/Swahili"], ["Kiribati", "ki", "UTC+12", "AUD", "English"], ["South Korea", "kr", "UTC+9", "KRW", "Korean"], ["Kosovo", "xk", "UTC+1", "EUR", "Albanian/Serbian"],
  ["Kuwait", "kw", "UTC+3", "KWD", "Arabic"], ["Kyrgyzstan", "kg", "UTC+6", "KGS", "Kyrgyz/Russian"], ["Laos", "la", "UTC+7", "LAK", "Lao"], ["Latvia", "lv", "UTC+2", "EUR", "Latvian"], ["Lebanon", "lb", "UTC+2", "LBP", "Arabic"], ["Lesotho", "ls", "UTC+2", "LSL", "English/Sesotho"], ["Liberia", "lr", "UTC+0", "LRD", "English"],
  ["Libya", "ly", "UTC+2", "LYD", "Arabic"], ["Liechtenstein", "li", "UTC+1", "CHF", "German"], ["Lithuania", "lt", "UTC+2", "EUR", "Lithuanian"], ["Luxembourg", "lu", "UTC+1", "EUR", "Luxembourgish"], ["Madagascar", "mg", "UTC+3", "MGA", "Malagasy/French"], ["Malawi", "mw", "UTC+2", "MWK", "English/Chichewa"],
  ["Malaysia", "my", "UTC+8", "MYR", "Malay"], ["Maldives", "mv", "UTC+5", "MVR", "Dhivehi"], ["Mali", "ml", "UTC+0", "XOF", "French"], ["Malta", "mt", "UTC+1", "EUR", "Maltese/English"], ["Marshall Islands", "mh", "UTC+12", "USD", "Marshallese/English"], ["Mauritania", "mr", "UTC+0", "MRU", "Arabic"],
  ["Mauritius", "mu", "UTC+4", "MUR", "English/French"], ["Mexico", "mx", "UTC-6", "MXN", "Spanish"], ["Micronesia", "fm", "UTC+10", "USD", "English"], ["Moldova", "md", "UTC+2", "MDL", "Romanian"], ["Monaco", "mc", "UTC+1", "EUR", "French"], ["Mongolia", "mn", "UTC+8", "MNT", "Mongolian"],
  ["Montenegro", "me", "UTC+1", "EUR", "Montenegrin"], ["Morocco", "ma", "UTC+0", "MAD", "Arabic"], ["Mozambique", "mz", "UTC+2", "MZN", "Portuguese"], ["Namibia", "na", "UTC+2", "NAD", "English"], ["Nauru", "nr", "UTC+12", "AUD", "Nauruan/English"], ["Nepal", "np", "UTC+5:45", "NPR", "Nepali"],
  ["Netherlands", "nl", "UTC+1", "EUR", "Dutch"], ["New Zealand", "nz", "UTC+12", "NZD", "English"], ["Nicaragua", "ni", "UTC-6", "NIO", "Spanish"], ["Niger", "ne", "UTC+1", "XOF", "French"], ["Nigeria", "ng", "UTC+1", "NGN", "English"], ["Niue", "nu", "UTC-11", "NZD", "English"],
  ["North Macedonia", "mk", "UTC+1", "MKD", "Macedonian"], ["Norway", "no", "UTC+1", "NOK", "Norwegian"], ["Oman", "om", "UTC+4", "OMR", "Arabic"], ["Pakistan", "pk", "UTC+5", "PKR", "Urdu/English"], ["Palau", "pw", "UTC+9", "USD", "English/Palauan"], ["Panama", "pa", "UTC-5", "PAB", "Spanish"],
  ["Papua New Guinea", "pg", "UTC+10", "PGK", "English"], ["Paraguay", "py", "UTC-4", "PYG", "Spanish/Guarani"], ["Peru", "pe", "UTC-5", "PEN", "Spanish"], ["Philippines", "ph", "UTC+8", "PHP", "Filipino/English"], ["Poland", "pl", "UTC+1", "PLN", "Polish"], ["Portugal", "pt", "UTC+0", "EUR", "Portuguese"],
  ["Qatar", "qa", "UTC+3", "QAR", "Arabic"], ["Republic of the Congo", "cg", "UTC+1", "XAF", "French"], ["Romania", "ro", "UTC+2", "RON", "Romanian"], ["Russia", "ru", "UTC+3", "RUB", "Russian"], ["Rwanda", "rw", "UTC+2", "RWF", "Kinyarwanda"], ["Saint Kitts and Nevis", "kn", "UTC-4", "XCD", "English"],
  ["Saint Lucia", "lc", "UTC-4", "XCD", "English"], ["Saint Vincent and the Grenadines", "vc", "UTC-4", "XCD", "English"], ["Samoa", "ws", "UTC+13", "WST", "Samoan/English"], ["San Marino", "sm", "UTC+1", "EUR", "Italian"],
  ["Sao Tome and Principe", "st", "UTC+0", "STN", "Portuguese"], ["Saudi Arabia", "sa", "UTC+3", "SAR", "Arabic"], ["Senegal", "sn", "UTC+0", "XOF", "French"], ["Serbia", "rs", "UTC+1", "RSD", "Serbian"], ["Seychelles", "sc", "UTC+4", "SCR", "English/French"],
  ["Sierra Leone", "sl", "UTC+0", "SLL", "English"], ["Singapore", "sg", "UTC+8", "SGD", "English/Malay"], ["Slovakia", "sk", "UTC+1", "EUR", "Slovak"], ["Slovenia", "si", "UTC+1", "EUR", "Slovenian"], ["Solomon Islands", "sb", "UTC+11", "SBD", "English"],
  ["Somalia", "so", "UTC+3", "SOS", "Somali/Arabic"], ["South Africa", "za", "UTC+2", "ZAR", "English"], ["South Sudan", "ss", "UTC+3", "SSP", "English"], ["Spain", "es", "UTC+1", "EUR", "Spanish"], ["Sri Lanka", "lk", "UTC+5:30", "LKR", "Sinhala/Tamil"], ["Sudan", "sd", "UTC+2", "SDG", "Arabic"],
  ["Suriname", "sr", "UTC-3", "SRD", "Dutch"], ["Sweden", "se", "UTC+1", "SEK", "Swedish"], ["Switzerland", "ch", "UTC+1", "CHF", "German/French"], ["Syria", "sy", "UTC+2", "SYP", "Arabic"], ["Tajikistan", "tj", "UTC+5", "TJS", "Tajik"], ["Tanzania", "tz", "UTC+3", "TZS", "Swahili/English"],
  ["Thailand", "th", "UTC+7", "THB", "Thai"], ["Timor-Leste", "tl", "UTC+9", "USD", "Portuguese/Tetum"], ["Togo", "tg", "UTC+0", "XOF", "French"], ["Tonga", "to", "UTC+13", "TOP", "Tongan/English"], ["Trinidad and Tobago", "tt", "UTC-4", "TTD", "English"], ["Tunisia", "tn", "UTC+1", "TND", "Arabic"],
  ["Turkey", "tr", "UTC+3", "TRY", "Turkish"], ["Turkmenistan", "tm", "UTC+5", "TMT", "Turkmen"], ["Tuvalu", "tv", "UTC+12", "AUD", "Tuvaluan/English"], ["Uganda", "ug", "UTC+3", "UGX", "English/Swahili"], ["Ukraine", "ua", "UTC+2", "UAH", "Ukrainian"], ["United Arab Emirates", "ae", "UTC+4", "AED", "Arabic"],
  ["United Kingdom", "gb", "UTC+0", "GBP", "English"], ["United States", "us", "UTC-5", "USD", "English"], ["Uruguay", "uy", "UTC-3", "UYU", "Spanish"], ["Uzbekistan", "uz", "UTC+5", "UZS", "Uzbek"], ["Vanuatu", "vu", "UTC+11", "VUV", "Bislama/English"], ["Venezuela", "ve", "UTC-4", "VES", "Spanish"], ["Vietnam", "vn", "UTC+7", "VND", "Vietnamese"],
  ["Yemen", "ye", "UTC+3", "YER", "Arabic"], ["Zambia", "zm", "UTC+2", "ZMW", "English"], ["Zimbabwe", "zw", "UTC+2", "ZWL", "English"]
];

function createId(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\(.*\)/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

export const allCountries: Country[] = countryData.map(([name, code, timezone, currency, language]) => ({
  name,
  id: createId(name),
  code,
  timezone,
  currency,
  language,
}));

export function getCountryById(id: string): Country | undefined {
  return allCountries.find(c => c.id === id);
}

export async function generateStaticParams() {
  return allCountries.map((country) => ({
    country: country.id,
  }));
}
