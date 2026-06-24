import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import satori from "satori";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const dmSansRegular = await readFile(
  join(root, "node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff"),
);
const dmSansMedium = await readFile(
  join(root, "node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff"),
);
const frauncesMedium = await readFile(
  join(root, "node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff"),
);
const frauncesItalic = await readFile(
  join(root, "node_modules/@fontsource/fraunces/files/fraunces-latin-500-italic.woff"),
);

const WIDTH = 1200;
const HEIGHT = 630;
const BG = "#FAFAFA";
const INK = "#18181B";
const INK_MUTED = "#52525B";
const INK_SUBTLE = "#A1A1AA";
const ACCENT = "#2563EB";
const LINE = "#E4E4E7";

const node = {
  type: "div",
  props: {
    style: {
      width: WIDTH,
      height: HEIGHT,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: BG,
      padding: "72px 80px",
      fontFamily: "DM Sans",
      color: INK,
      position: "relative",
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 18,
            color: INK_SUBTLE,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          },
          children: [
            {
              type: "div",
              props: {
                style: { display: "flex", alignItems: "center" },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        width: 10,
                        height: 10,
                        borderRadius: 9999,
                        backgroundColor: ACCENT,
                        marginRight: 14,
                      },
                    },
                  },
                  "Portfolio · Bishoftu, Ethiopia",
                ],
              },
            },
            {
              type: "div",
              props: {
                style: { fontWeight: 500, color: INK },
                children: "cherinet.dev",
              },
            },
          ],
        },
      },
      {
        type: "div",
        props: {
          style: { display: "flex", flexDirection: "column" },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontFamily: "Fraunces",
                  fontWeight: 500,
                  fontSize: 144,
                  lineHeight: 1.0,
                  letterSpacing: "-0.035em",
                  color: INK,
                  display: "flex",
                },
                children: "Cherinet",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontFamily: "Fraunces",
                  fontWeight: 500,
                  fontSize: 144,
                  lineHeight: 1.0,
                  letterSpacing: "-0.035em",
                  fontStyle: "italic",
                  color: INK_MUTED,
                  display: "flex",
                  marginTop: 4,
                },
                children: "Demeke.",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginTop: 36,
                  fontFamily: "DM Sans",
                  fontWeight: 500,
                  fontSize: 30,
                  color: INK,
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        height: 28,
                        width: 6,
                        borderRadius: 9999,
                        backgroundColor: ACCENT,
                        marginRight: 18,
                      },
                    },
                  },
                  "Senior frontend engineer & designer",
                ],
              },
            },
          ],
        },
      },
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 22,
          },
          children: [
            {
              type: "div",
              props: {
                style: { color: INK_MUTED, display: "flex" },
                children:
                  "Figma to React. React to React Native. Built end-to-end.",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Fraunces",
                  fontStyle: "italic",
                  fontSize: 26,
                  color: INK,
                },
                children: "cd.",
              },
            },
          ],
        },
      },
    ],
  },
};

const svg = await satori(node, {
  width: WIDTH,
  height: HEIGHT,
  fonts: [
    { name: "DM Sans", data: dmSansRegular, weight: 400, style: "normal" },
    { name: "DM Sans", data: dmSansMedium, weight: 500, style: "normal" },
    { name: "Fraunces", data: frauncesMedium, weight: 500, style: "normal" },
    { name: "Fraunces", data: frauncesItalic, weight: 500, style: "italic" },
  ],
});

await mkdir(join(root, "public"), { recursive: true });
const out = join(root, "public", "og.png");
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
