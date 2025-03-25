---
title: 
description: 
aliases: []
tags: []
created: 2024-11-23T13:40:44
modified: 2025-02-09T15:53:42
permalink:
---

```dataviewjs
async function fetchregex(directory,regexstring) {
  // user regex constructor, documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
  // "s" allows the `.` to match newlines, "g" matches all instead of stopping at the first match, "i" ignores letter casing differences, "m" to treat beginning and end assertions (`^` and `$`) as working over multiple lines
  const regex = new RegExp(regexstring, 'sigm');
  for (const p of dv.pages(`"${directory}"`).sort(x => x.file.name, 'desc')) {
    const f = app.vault.getAbstractFileByPath(p.file.path)
    const c = await app.vault.read(f)
    const s = c.match(regex);
      if (s) {
        // f.path is the path, f.basename is the filename
        dv.header(3, `[[${f.basename}]] @ [[${f.path}]]`);
        dv.paragraph(s);
      }
    }
}

fetchregex("/","> ..lyrics\].+?\S.+?(?:^$|\Z)");
```
