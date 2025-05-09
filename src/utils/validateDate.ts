const validateEnglishDateRange = (yy: number, mm: number, dd: number): boolean => {
    if (yy < 1944 || yy > 2100) return false;
    if (mm < 1 || mm > 12) return false;
    return !(dd < 1 || dd > 31);
};

const validateNepaliDateRange = (yy: number, mm: number, dd: number): boolean => {
    if (yy < 2000 || yy > 2089) return false;
    if (mm < 1 || mm > 12) return false;
    return !(dd < 1 || dd > 31);

};

const validateLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export {
    validateEnglishDateRange,
    validateNepaliDateRange,
    validateLeapYear
}
