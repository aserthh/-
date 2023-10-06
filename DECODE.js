const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:,.<>?';
const shuffled = 'oqJgLdFmzIuEBNnVPtyb0DxY1aZ9fjvU7hcXsKiAWHGM42e3R5pLQ6STCw8kObYrZ!@#$%^&*()-_+=[]{}|;:,.<>?';

function decrypt(encryptedText) {
    let decryptedText = '';
    encryptedText = encryptedText.slice(5, encryptedText.length - 5);  // Remover ruído
    encryptedText = encryptedText.split('').reverse().join('');  // Reverter transposição
    
    for (let char of encryptedText) {
        const index = shuffled.indexOf(char);
        if (index !== -1) {
            decryptedText += alphabet[index];
        } else {
            decryptedText += char;
        }
    }
    
    return decryptedText;
}

module.exports = { decrypt };
