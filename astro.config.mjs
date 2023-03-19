import { defineConfig } from "astro/config";
import { presetWind, theme } from "@unocss/preset-wind";
import presetAttributify from "@unocss/preset-attributify";
import unocss from "@unocss/astro";
import transformerDirectives from "@unocss/transformer-directives";
import { astroImageTools } from "astro-imagetools";
import svelte from "@astrojs/svelte";
const sizes = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
];
// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      presets: [presetWind({}), presetAttributify({})],
      rules: [
        [
          "font-display",
          {
            "font-family": `"Inter", Roboto, sans-serif`,
          },
        ],
      ],
      theme: {
        colors: {
          primary: "#5c2ab3",
        },
      },
      shortcuts: [
        {
          "gradient-primary": "bg-gradient-to-br from-[#401ED6] to-[#6F00FF]",
          "gradient-blue": "bg-gradient-to-br to-[#0FA9CC] from-[#07565F]",
          "gradient-red": "bg-gradient-to-br to-[#CC0000] from-[#730D0D]",
          "gradient-green": "bg-gradient-to-br to-[#00FF87] from-[#62BD92]",
        },
        [
          /responsive:text-(?:xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl)/,
          (match, context) => {
            match = match[0];
            const size = sizes.indexOf(match.substr(16)) + 1;
            return `${match.substr(11)} md:text-${sizes[size + 1]} lg:text-${
              sizes[size + 1]
            }`;
          },
        ],
      ],
      transformers: [transformerDirectives()],
    }),
    astroImageTools,
    svelte(),
  ],
  vite: {
    plugins: [],
  },
});
