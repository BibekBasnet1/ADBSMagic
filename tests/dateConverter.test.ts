import {ADToBS,BSToAD} from "../src";

describe('Date Conversion Tests', () => {

    test('should convert AD to BS correctly', () => {
        // April 12, 2024 is expected to be Baisakh 12 in BS
        const nepaliDate = ADToBS("2024-04-24");
        expect(nepaliDate).toBe("2081-01-12");

        // October 1, 2023 is expected to be Ashwin 15 in BS
        const nepaliDate2 = ADToBS("2023-10-01");
        expect(nepaliDate2).toBe("2080-06-14");
    });

    test('should convert BS to AD correctly', () => {
        const englishDate = BSToAD("2080-06-14");
        expect(englishDate).toBe("2023-10-01");
    });

});
