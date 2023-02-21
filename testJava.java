import org.h2.security.SHA256;

inputString = "s3cr";
byte[] key = inputString.getBytes();

SHA256.getHMAC(key, message)