import type { InternalOptions } from "../../types";
import type { Cookie } from "../../lib/cookie";
/**
 * Starts an e-mail login flow, by generating a token,
 * and sending it to the user's e-mail (with the help of a DB adapter)
 */
export default function email(identifier: string, options: InternalOptions<"email">): Promise<{
    redirect: string;
    cookies?: Cookie[];
}>;
//# sourceMappingURL=signin.d.ts.map