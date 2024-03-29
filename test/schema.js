import { readFile } from "fs/promises";
import Ajv from "ajv";

const ajv = new Ajv({
    allowMatchingProperties: true,
    allowUnionTypes: true,
    allErrors: true,
    strict: false
});

async function compileSchemaJson(name) {
    const json = await readFile(`../${name}.schema.json`, { encoding: "utf-8" });
    return ajv.compile(JSON.parse(json));
}

const schema = {};
schema["0"] = await compileSchemaJson("acs");
schema["0-split"] = await compileSchemaJson("acs-split");
schema["1"] = await compileSchemaJson("hair");
schema["2"] = await compileSchemaJson("clothes");

export function inferSchema(json) {
    const { type, arm_split } = json;
    if (type === 0) return schema[!!arm_split ? "0-split" : "0"];
    return schema[type];
}

export async function readJson(path) {
    const json = await readFile(path, { encoding: "utf-8" });
    return JSON.parse(json);
}