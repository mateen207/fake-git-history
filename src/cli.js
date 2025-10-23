#!/usr/bin/env node

const meow = require("meow");
const fgh = require("./index");

const cli = meow(
  `
    Usage
      $ fake-git-history-fa [options]
 
    Options
      --workdaysOnly, -w Use this option if you don't want to commit on weekends.
      --commitsPerDay, -c Customize how many commits a day to make.
      --startDate, -s Start date in yyyy/MM/dd format.
      --endDate, -e End date yyyy/MM/dd format.
      
    Examples
      $ fake-git-history-fa --workdaysOnly
      $ fake-git-history-fa --commitsPerDay "0,3"
      $ fake-git-history-fa --startDate yyyy/MM/dd --endDate yyyy/MM/dd
`,
  {
    flags: {
      startDate: {
        type: "string",
        alias: "s"
      },
      endDate: {
        type: "string",
        alias: "e"
      },
      workdaysOnly: {
        type: "boolean",
        alias: "w",
        default: "true"
      },
      commitsPerDay: {
        type: "string",
        alias: "c",
        default: "0,3"
      }
    }
  }
);

fgh(cli.flags);
