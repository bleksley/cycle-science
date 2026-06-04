import fs from "fs";
import path from "path";

const colors = {
  zingela: ["#3d3026", "#5c4a3a", "#8b6914"],
  drakensberg: ["#2a3d4a", "#4a6b7a", "#7a9eb0"],
  karkloof: ["#2d4a35", "#4a6b52", "#6b8f6b"],
  home: ["#3d3026", "#c45c2a", "#5c4a3a"],
  gallery: ["#5c4a3a", "#c45c2a", "#3d3026"],
};

function svg(label, w, h, c1, c2) {
  const size = Math.min(w, h) / 14;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#f7f3ee" font-family="system-ui" font-size="${size}" opacity="0.9">${label}</text></svg>`;
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

for (const slug of ["zingela", "drakensberg", "karkloof"]) {
  const c = colors[slug];
  write(
    `public/images/destinations/${slug}/hero.svg`,
    svg(`${slug} hero`, 1920, 1080, c[0], c[1]),
  );
  for (let i = 1; i <= 4; i++) {
    write(
      `public/images/destinations/${slug}/gallery-${i}.svg`,
      svg(`${slug} ${i}`, 800, 600, c[1], c[2]),
    );
  }
}

write(
  "public/images/home/hero.svg",
  svg("Cycle Science", 1920, 1080, colors.home[0], colors.home[1]),
);

for (let i = 1; i <= 8; i++) {
  write(
    `public/images/gallery/global-${i}.svg`,
    svg(`Gallery ${i}`, 800, 600, colors.gallery[i % 3], colors.gallery[(i + 1) % 3]),
  );
}

console.log("Placeholders generated.");
