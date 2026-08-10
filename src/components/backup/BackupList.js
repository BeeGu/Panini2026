import { FlatList } from "react-native";

import BackupCard from "./BackupCard";
import BackupEmpty from "./BackupEmpty";

export default function BackupList({ backups, onRestore, onShare, onDelete }) {
  return (
    <FlatList
      data={backups}
      keyExtractor={(item) => item.uri}
      contentContainerStyle={{
        paddingVertical: 16,
        paddingBottom: 32,
        flexGrow: 1,
      }}
      ListEmptyComponent={BackupEmpty}
      renderItem={({ item }) => (
        <BackupCard
          backup={item}
          onRestore={() => onRestore(item)}
          onShare={() => onShare(item.uri)}
          onDelete={() => onDelete(item)}
        />
      )}
    />
  );
}
