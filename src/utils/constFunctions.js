import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const discountedPrice = (base_price, discount) => {
    return Math.round(base_price - ((discount / 100) * base_price));
}
export const formatUnit = (unit) => {
    if (!unit) return ""; // Return empty string if null or undefined

    return unit
        .toLowerCase()
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/(\d+)\s*point\s*(\d+)/g, "$1.$2") // Convert "TWO_POINT_FIVE" to "2.5"
        .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b/gi, (match) => {
            const numberMap = {
                one: "1", two: "2", three: "3", four: "4", five: "5",
                six: "6", seven: "7", eight: "8", nine: "9", ten: "10",
                eleven: "11", twelve: "12"
            };
            return numberMap[match.toLowerCase()];
        })
        .replace(/\b(hundred|thousand)\b/gi, (match) => {
            const numberMap = { hundred: "00", thousand: "000" };
            return numberMap[match.toLowerCase()];
        })
        .replace(/\b(kg|g|lb|ml|l|gallon|quart|pack|unit|meter|yard|feet|piece|set|box|bottle|bag|carton|roll|sleeve)\b/gi, (match) => match.toLowerCase())
        .replace(/\s+/g, "") // Remove all spaces for units like 500g
};
export const getUserId = () => {
    const token = Cookies.get('authToken'); // Get token from cookies
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        return decoded.id || decoded.sub; // Adjust based on token payload
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
export const encryptId = (id) => {
    const numId = BigInt(id); // Handle large numbers
    const base64Id = btoa(numId.toString())
        .replace(/\+/g, '-') // Replace '+' with '-'
        .replace(/\//g, '_') // Replace '/' with '_'
        .replace(/=+$/, ''); // Remove '=' padding
    return base64Id.split('').reverse().join(''); // Reverse for extra obfuscation
};

export const decryptId = (encryptedString) => {
    // Reverse back the Base64 string
    const reversedBase64 = encryptedString.split('').reverse().join('');

    // Make Base64 string regular by replacing URL-safe characters
    const base64Id = reversedBase64
        .replace(/-/g, '+') // Replace '-' with '+'
        .replace(/_/g, '/'); // Replace '_' with '/'

    // Decode Base64 to get original number
    const originalId = atob(base64Id);

    return BigInt(originalId).toString(); // Convert back to string for safety
};