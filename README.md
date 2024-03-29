# MAS Sprite Schema

This project is aimed to provide precise JSON schema files for static analysis and validation of Monika After Story
spritepack JSON files without a need to test them by launching the mod.


## Coverage

Currently, all schema files were tested against official spritepack JSON files. Schema files work fine
with examples shown on [Monika After Story wiki page](https://github.com/Monika-After-Story/MonikaModDev/wiki/Adding-Sprite-Objects#json-format).

For more details, see action runs and `test/` directory with test scripts.

## Usage

Pick one of the available schema files ([ACS (Regular)](acs.schema.json), [ACS (Split)](acs-split.schema.json),
[Clothes](clothes.schema.json), [Hair](hair.schema.json)), and feed its content to any JSON schema validator along
with your spritepack JSON file.
