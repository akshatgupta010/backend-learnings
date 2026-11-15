const ImageKit = require("@imagekit/nodejs");


const ImageKitClient = new ImageKit ({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file) {
    const result = await ImageKitClient.files.upload({
        file,
        filename: "music_" + Date.now(),
        folder: "backend-learnings/music"
    })

    return result;
}

module.exports = { uploadFile };