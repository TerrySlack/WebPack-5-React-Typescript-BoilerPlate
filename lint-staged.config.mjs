const CHUNK = 25;

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const quote = (f) => `"${f}"`;

const config = {
  "*.{js,jsx,ts,tsx}": (files) =>
    chunk(files, CHUNK).map(
      (group) =>
        `eslint --cache --max-warnings=0 ${group.map(quote).join(" ")}`,
    ),
  "*.{js,jsx,ts,tsx,json,css,md}": (files) =>
    chunk(files, CHUNK).map(
      (group) => `prettier --write ${group.map(quote).join(" ")}`,
    ),
};

export default config;