const { V4 } = require("paseto");
async function generateKeyPair() {
    try {
        // Generate the key
        const key = await V4.generateKey('public');
        
        // Extract private and public keys
        const privateKey = key;
        const publicKey = key.export({
            type: 'pkcs8',
            format: 'pem',
        });

        console.log("Key pair generated successfully");
        console.log(privateKey,publicKey)
        return { privateKey, publicKey };
    } catch (err) {
        console.error("Error generating key pair:", err);
        throw err; // Re-throw the error for better handling by the caller
    }
}

// Export the function
module.exports = generateKeyPair;