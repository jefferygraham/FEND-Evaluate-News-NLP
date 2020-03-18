function checkURL(inputURL) {
    console.log("::: Checking URL :::", inputURL);
    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    return regex.test(inputURL);
}

export { checkURL }
