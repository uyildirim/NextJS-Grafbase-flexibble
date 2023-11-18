import { g, config } from "@grafbase/sdk";

g.type("Post", {
  title: g.string(),
});

export default config({
  schema: g,
});
