// import fs from 'fs-plus';
// import path from 'path';
// import glob from 'glob';
// import * as util from './util';
// import childProcess from 'child_process';
// import BufferedProcess from './bufferred-process';
//
// export default async function execute(args) {
//
//   process.chdir(args.cwd);
//   let exitcode = await util.executeWithProgress('gradlew.bat',
//   ['test',
//   `-DjdkSource="${args.jdk_source.replace(/\\/g, '/')}"`,
//   `-DextLib="${args.lib.replace(/\\/g, '/')}"`],  (data)=> {
//     console.log(data);
//   });
//    if (exitcode !== 0) {
//       throw new Error(`gradle failure with error code ${exitcode}`);
//   }
// }


console.log(/^java\.lang\.String\[0\]$/.exec('java.lang.String[0]'));