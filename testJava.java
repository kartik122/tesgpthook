import org.h2.security.SHA256;

inputString = "s3cr37";
byte[] key = inputString.getBytes();

SHA256.getHMAC(key, message)