const checkURL = require('../src/client/js/checkURL');
// const handleSubmit = require('../src/client/js/formHandler')

describe("Check URL", () => {
    test("see if entry is a valid URL", () => {
        const input = 'https://www.url1.dev';

        const output = true;

        expect(checkURL(input, "https://www.url1.dev")).toEqual(output);

    });
});

// describe('Contact API', () => {
//     test('see if app gets a response from Aylien API'), () => {
//         const input = 'https://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate/';

//         const output = true;

//         expect(handleSubmit())
//     }
// })
