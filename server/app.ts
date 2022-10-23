import config from "./config";
import { createServer } from "./server";

const app = createServer();
app.listen(config.port);

export default app;
