import { createFileRoute } from "@tanstack/react-router";
import { AltirynExperience } from "@/components/altiryn/AltirynExperience";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "ALTIRYN — Thesis" },
      {
        name: "description",
        content:
          "Explore ALTIRYN, Tejes J's cinematic conceptual study of orbital solar energy and modular battery return logistics.",
      },
      { property: "og:title", content: "ALTIRYN — Thesis" },
      {
        property: "og:description",
        content:
          "A cinematic 3D interpretation of orbital solar energy and modular battery return logistics, made by Tes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AltirynExperience,
});
