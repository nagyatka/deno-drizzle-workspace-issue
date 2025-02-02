import { varchar } from "drizzle-orm/pg-core";
import { nanoid as commonNanoid } from "@my-project/common";

const NANOID_LENGTH = 16;

export const nanoid = () => {
  return varchar({
    length: NANOID_LENGTH,
  }).$defaultFn(() => commonNanoid(NANOID_LENGTH));
};
