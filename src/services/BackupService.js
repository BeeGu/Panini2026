// import * as FileSystem from "expo-file-system/legacy";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as DocumentPicker from "expo-document-picker";

import BackupValidator from "../utils/BackupValidator";
import BackupRepository from "../database/repositories/BackupRepository";

// ⚠️ Înainte de versiunea 1.0.0 stabilă: migrăm toate operațiile pe noul API File/Directory.

const BackupService = {
/*
    async exportBackup() {

        // const backup = {
        //     app: "Panini Tracker 2026",
        //     version: 1,
        //     createdAt: new Date().toISOString(),
        //     collection: BackupRepository.exportCollection(),
        // };
        const backup = {
            app: "Panini Tracker 2026",
            album: "FIFA World Cup 2026",
            version: 1,
            createdAt: new Date().toISOString(),
            stats: BackupRepository.getBackupStats(),
            collection: BackupRepository.exportCollection(),
        };

        const path =
            FileSystem.cacheDirectory +
            "PaniniTracker2026_backup.json";

        await FileSystem.writeAsStringAsync(
            path,
            JSON.stringify(
                backup,
                null,
                2
            )

        );

        await Sharing.shareAsync(path);

        // const file = new File(
        //     Paths.cache,
        //     "PaniniTracker2026_backup.json"
        // );
        
        // file.write(JSON.stringify(backup, null, 2));
        
        // await Sharing.shareAsync(file.uri);

    },
*/
async exportBackup() {

    const backup = {

        app: "Panini Tracker 2026",
        album: "FIFA World Cup 2026",

        version: 1,

        createdAt: new Date().toISOString(),

        stats: BackupRepository.getBackupStats(),

        collection: BackupRepository.exportCollection(),

    };

    const file = new File(
        Paths.cache,
        "PaniniTracker2026_backup.json"
    );

    file.write(
        JSON.stringify(
            backup,
            null,
            2
        )
    );

    await Sharing.shareAsync(
        file.uri
    );

},
  
/*
    async loadBackup() {
  
      const result =
          await DocumentPicker.getDocumentAsync({
              type: "application/json",
              copyToCacheDirectory: true,
          });
  
      if (result.canceled)
          return null;
  
      const json =
          await FileSystem.readAsStringAsync(
              result.assets[0].uri
          );
  
      const backup = JSON.parse(json);
  
      BackupValidator.validate(backup);
  
      return backup;
  
    },
*/
/*
async loadBackup() {

    console.log("1. Opening picker");

    const result = await DocumentPicker.getDocumentAsync({
        type: "application/json",
        copyToCacheDirectory: true,
    });

    console.log("2. Picker result", result);

    if (result.canceled)
        return null;

    const uri = result.assets[0].uri;

//     console.log("3. URI", uri);

// // console.log(FileSystem);
// // console.log(typeof FileSystem.readAsStringAsync);
// // console.log(FileSystem.readAsStringAsync);
  
//     const json = await FileSystem.readAsStringAsync(uri);

//     console.log("4. JSON read");

//     const backup = JSON.parse(json);

//     console.log("5. Parsed", backup);


console.log("3. URI", uri);

try {

    const info = await FileSystem.getInfoAsync(uri);

    console.log("FILE INFO", info);
    console.log("EncodingType", FileSystem.EncodingType);

    const json = await FileSystem.readAsStringAsync(
        uri,
        {
            encoding: FileSystem.EncodingType.UTF8,
        }
    );

    console.log("4. JSON length", json.length);

    const backup = JSON.parse(json);

    console.log("5. Parsed");

    return backup;

} catch (e) {

    console.log("READ ERROR");
    console.log(e);
    console.log(e?.message);
    console.log(e?.stack);

    throw e;

}
  
    BackupValidator.validate(backup);

    console.log("6. Validated");

    return backup;
},
*/

async loadBackup() {

    const result =
        await DocumentPicker.getDocumentAsync({

            type: "application/json",

            copyToCacheDirectory: true,

        });

    if (result.canceled)
        return null;

    const asset = result.assets[0];

    const file = new File(asset);

    const json = file.text();

    const backup = JSON.parse(json);

    BackupValidator.validate(backup);

    return backup;

},
  
    async restoreBackup(backup) {
      BackupRepository.importCollection(
          backup.collection
      );
    },

};

export default BackupService;
