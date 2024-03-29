import { stat } from "fs/promises";
import { exec } from "child_process";
import { glob } from "glob";

const masGitUrl = "https://github.com/Monika-After-Story/MonikaModDev.git";
const masGitDir = "mas_git";

async function isMasGitPresent() {
    try {
        await stat(masGitDir);
        return true;
    } catch (e) {
        if (e.code === "ENOENT") return false;
        throw e;
    }
}

async function cloneMasGit() {
    return await new Promise((resolve, reject) => {
        exec(`git clone --depth=1 ${masGitUrl} ${masGitDir}`, (err) => {
            if (!err) resolve();
            else reject(err);
        });
    });
}

async function updateMasGit() {
    return await new Promise((resolve, reject) => {
        exec(`git pull origin master`, { cwd: masGitDir }, (err) => {
            if (!err) resolve();
            else reject(err);
        })
    });
}

export async function syncMasGit() {
    const exists = await isMasGitPresent();
    if (!exists) await cloneMasGit();
    else await updateMasGit();
}

export async function getJsonList(type = "released") {
    return await glob(`${masGitDir}/spritepacks/${type}/**/*.json`);
}