import { createPreference } from "../controllers/payment.controller";
import router from "./router";

router.post("/create-preference", createPreference);

export default router;