import { getJsonList, syncMasGit } from "./git.js";
import { inferSchema, readJson } from "./schema.js";

function testJson(path, json) {
    test(path, () => {
        const validate = inferSchema(json);
        const pass = validate(json);
        const errors = validate.errors ?? [];
        const message = JSON.stringify(errors, null, 2);
        expect(pass, message, { showPrefix: false }).toBeTruthy();
    });
}

await syncMasGit();
await Promise.all((await getJsonList())
    .map(async (it) => {
        const json = await readJson(it);
        testJson(it, json);
    }));