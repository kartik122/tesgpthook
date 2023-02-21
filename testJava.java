import org.h2.security.SHA256;

inputString = "xkag124jmgmg";
byte[] key = inputString.getBytes();

SHA256.getHMAC(key, message)