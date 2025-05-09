import {englishToNepali,nepaliToEnglish} from "@utils/formatDate";

/**
 * Convert English date string to Nepali date string
 *
 * @param date - English date string (with optional time component)
 * @param format - Output format (default: "YYYY-MM-DD")
 * @returns Nepali date string in the specified format
 */
const englishToNepaliDate = (date: string, format: string = "YYYY-MM-DD"): string => {
    try {
        // Split date and time components
        const [datePart, timePart] = date.split(' ');
        const time = timePart || null;

        const dateObj = new Date(datePart);

        // Check if date is valid
        if (isNaN(dateObj.getTime())) {
            throw new Error('Invalid date format');
        }

        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();

        // Convert to Nepali date
        const npDate = englishToNepali(year, month, day);

        // Ensure npDate properties are numbers before using padStart
        const nepYear = npDate.year !== null ? npDate.year.toString() : '0000';
        const nepMonth = npDate.month !== null ? String(npDate.month).padStart(2, '0') : '00';
        const nepDay = npDate.date !== null ? String(npDate.date).padStart(2, '0') : '00';

        // Format the Nepali date according to the specified format
        const finalDate = `${nepYear}-${nepMonth}-${nepDay}`;

        // Return with time component if present
        return time ? `${finalDate} ${time}` : finalDate;
    } catch (error) {
        console.error('Error converting date:', error);
        return date;
    }
};

/**
 * Convert Nepali date string to English date string
 *
 * @param date - Nepali date string (with optional time component)
 * @param format - Output format (default: "YYYY-MM-DD")
 * @returns English date string in the specified format
 */
const nepaliToEnglishDate = (date: string, format: string = "YYYY-MM-DD"): string => {
    try {
        // Split date and time components
        const [datePart, timePart] = date.split(' ');
        const time = timePart || null;

        // Split Nepali date (Y-m-d)
        const [nepYear, nepMonth, nepDay] = datePart.split('-').map(Number);

        // Convert to English date
        const engDate = nepaliToEnglish(nepYear, nepMonth, nepDay);

        // Format the English date according to the specified format
        const finalDate = `${engDate.year}-${String(engDate.month).padStart(2, '0')}-${String(engDate.date).padStart(2, '0')}`;

        // Return with time component if present
        return time ? `${finalDate} ${time}` : finalDate;
    } catch (error) {
        console.error('Error converting date:', error);
        return date;
    }
};

export {
    englishToNepaliDate as ADToBS,
    nepaliToEnglishDate as BSToAD
};
