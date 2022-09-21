import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Pick<User, "firstName" | "lastName">;
// type MyType = {User["firstName"] + User["lastName"]}

const test: MyType = { firstName: "foo", lastName: "b" };

console.log(typeof test);

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
