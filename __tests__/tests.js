import { checkURL } from '../src/client/js/checkURL';
import { handleSubmit } from '../src/client/js/formHandler';


describe("Check URL", () => {
    test("see if entry is a valid URL", () => {
        const input = 'https://www.url1.dev';

        const output = true;

        expect(checkURL(input, "https://www.url1.dev")).toEqual(output);

    });
});

describe('Test, the function "handleSubmit()" should exist', () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

