const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;
const TB = GB * 1024;

const FileUtils = {

    formatSize(bytes = 0, decimals = 1) {

        if (!bytes) {
            return "0 B";
        }

        if (bytes < KB) {
            return `${bytes} B`;
        }

        if (bytes < MB) {
            return `${(bytes / KB).toFixed(decimals)} KB`;
        }

        if (bytes < GB) {
            return `${(bytes / MB).toFixed(decimals)} MB`;
        }

        if (bytes < TB) {
            return `${(bytes / GB).toFixed(decimals)} GB`;
        }

        return `${(bytes / TB).toFixed(decimals)} TB`;

    },

    extension(filename = "") {

        const index = filename.lastIndexOf(".");

        if (index === -1) {
            return "";
        }

        return filename.substring(index + 1).toLowerCase();

    },

    filename(path = "") {

        return path.split("/").pop() ?? "";

    },

    filenameWithoutExtension(path = "") {

        const file = this.filename(path);

        const index = file.lastIndexOf(".");

        if (index === -1) {
            return file;
        }

        return file.substring(0, index);

    },

    isJson(filename = "") {

        return this.extension(filename) === "json";

    },

    isImage(filename = "") {

        return [
            "png",
            "jpg",
            "jpeg",
            "gif",
            "webp",
        ].includes(
            this.extension(filename)
        );

    },

};

export default FileUtils;