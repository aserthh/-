const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:,.<>?';
const shuffled = 'oqJgLdFmzIuEBNnVPtyb0DxY1aZ9fjvU7hcXsKiAWHGM42e3R5pLQ6STCw8kObYrZ!@#$%^&*()-_+=[]{}|;:,.<>?';

function generateNoise(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function encrypt(text) {
    let encryptedText = '';
    
    for (let char of text) {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            encryptedText += shuffled[index];
        } else {
            encryptedText += char;
        }
    }
    
    encryptedText = encryptedText.split('').reverse().join('');  // Transposição
    encryptedText = generateNoise(5) + encryptedText + generateNoise(5);  // Adicionar ruído

    return encryptedText;
}

module.exports = { encrypt };
