import {validateEnglishDateRange,validateLeapYear,validateNepaliDateRange} from "./validateDate";
import calendarData from "./calendarData";
import {EnglishDate,NepaliDate} from "./types";

const getDayOfTheWeek = (day: number): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day - 1];
};

const getEnglishMonthName = (month: number): string => {
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1];
}

const getNepaliMonthName = (month: number): string => {
    const months = [
        'Baishakh', 'Jestha', 'Asar', 'Shrawan', 'Bhadra', 'Ashwin',
        'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
    ];
    return months[month - 1];
};

/**
 * currently can only calculate the date between AD 1944-2033...
 * Convert English (Gregorian) date to Nepali (Bikram Sambat) date
 */
const englishToNepali = (yy: number, mm: number, dd: number): NepaliDate => {
    const nepaliDate: NepaliDate = {
        year: null,
        month: null,
        date: null,
        day: null,
        nmonth: null,
        num_day: null,
    };

    if (!validateEnglishDateRange(yy, mm, dd)) {
        return nepaliDate;
    }

    // Constants for initial reference date
    const referenceEnglishYear = 1944;
    const referenceNepaliYear = 2000;
    const referenceNepaliMonth = 9;
    const referenceNepaliDay = 17-1

    // Standard and leap year month days
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapMonthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Calculate total days from reference date
    let totalEnglishDays = referenceNepaliDay;

    // Add days for years
    for (let i = 0; i < (yy - referenceEnglishYear); i++) {
        const yearToCheck = referenceEnglishYear + i;
        const daysInYear = validateLeapYear(yearToCheck) ? 366 : 365;
        totalEnglishDays += daysInYear;
    }

    // Add days for months in the target year
    for (let i = 0; i < (mm - 1); i++) {
        totalEnglishDays += validateLeapYear(yy) ? leapMonthDays[i] : monthDays[i];
    }

    // Add remaining days
    totalEnglishDays += dd;

    let nepYear = referenceNepaliYear;
    let nepMonth = referenceNepaliMonth;
    let nepDay = 0;
    let dayOfWeek = 1; // Start with reference day of week

    // Calendar data array index
    let bsCalendarIndex = 0;

    // Count nepali date from array
    while (totalEnglishDays > 0) {
        // Get days in current Nepali month
        const daysInMonth: number = calendarData[bsCalendarIndex][nepMonth];

        // Increment day and handle month/year transitions
        nepDay++;
        dayOfWeek = dayOfWeek % 7 + 1;

        if (nepDay > daysInMonth) {
            nepMonth++;
            nepDay = 1;

            if (nepMonth > 12) {
                nepYear++;
                nepMonth = 1;
                bsCalendarIndex++;
            }
        }

        totalEnglishDays--;
    }

    return {
        year: nepYear,
        month: nepMonth,
        date: nepDay,
        day: getDayOfTheWeek(dayOfWeek),
        nmonth: getNepaliMonthName(nepMonth),
        num_day: dayOfWeek
    };
};

/**
 * Currently can only calculate the date between BS 2009 and 2089
 * Convert Nepali (Bikram Sambat) date to English (Gregorian) date
 */
const nepaliToEnglish = (yy: number, mm: number, dd: number): EnglishDate => {
    // Initial reference dates
    const referenceEnglishYear = 1943;
    const referenceEnglishMonth = 4;
    const referenceEnglishDay = 13; // 14-1, the initial English date
    const referenceNepaliYear = 2000;
    // const referenceNepaliMonth = 1;
    // const referenceNepaliDay = 1; // initial equivalent Nepali date

    // Month days for regular and leap years
    const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapMonthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if date is in valid range
    if (!validateNepaliDateRange(yy, mm, dd)) {
        throw new Error("Date out of range");
    }

    // Count total days from the reference date
    let totalNepaliDays = 0;

    // Count days for years
    for (let i = 0; i < (yy - referenceNepaliYear); i++) {
        const yearIndex = i;
        // Add days for all 12 months of each year
        for (let j = 1; j <= 12; j++) {
            totalNepaliDays += calendarData[yearIndex][j];
        }
    }

    // Count days for months in the target year
    const yearIndex = yy - referenceNepaliYear;
    for (let j = 1; j < mm; j++) {
        totalNepaliDays += calendarData[yearIndex][j];
    }

    // Add days of the target month
    totalNepaliDays += dd;

    // Calculate equivalent English date
    let englishDay = referenceEnglishDay;
    let englishMonth = referenceEnglishMonth;
    let englishYear = referenceEnglishYear;
    let dayOfWeek = 3; // Reference day was 4-1 (Wednesday)

    // Calculate the English date
    while (totalNepaliDays !== 0) {
        // Determine days in current English month
        const daysInMonth = validateLeapYear(englishYear)
            ? leapMonthDays[englishMonth]
            : monthDays[englishMonth];

        englishDay++;
        dayOfWeek++;

        // Handle month and year transitions
        if (englishDay > daysInMonth) {
            englishMonth++;
            englishDay = 1;

            if (englishMonth > 12) {
                englishYear++;
                englishMonth = 1;
            }
        }

        // Reset day of week
        if (dayOfWeek > 7) {
            dayOfWeek = 1;
        }

        totalNepaliDays--;
    }

    return {
        year: englishYear,
        month: englishMonth,
        date: englishDay,
        day: getDayOfTheWeek(dayOfWeek),
        nmonth: getEnglishMonthName(englishMonth),
        num_day: dayOfWeek
    };
};

export {
    englishToNepali,
    nepaliToEnglish
}
