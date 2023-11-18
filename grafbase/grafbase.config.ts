// g is a schema generator, config the final object to return
import { g, config } from "@grafbase/sdk";

// types are generated with the `type` method,
// followed by the name and fields.
const profile = g.type("Profile", {
  address: g.string(),
});

// models can be generated with the `model` method
const user = g.model("User", {
  name: g.string(),
  age: g.int().optional(),
  profile: g.ref(profile).optional(),
  parent: g.relation(() => user).optional(),
});

// finally we export the default config
export default config({
  schema: g,
});
