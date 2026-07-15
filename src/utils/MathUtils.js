const MathUtils = {

    percentage(value, total, decimals = 1) {

        if (total === 0) {
            return 0;
        }

        return Number(
            ((value / total) * 100).toFixed(decimals)
        );

    },

};

export default MathUtils;