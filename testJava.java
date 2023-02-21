import org.h2.security.SHA256;

inpString = "xkag124jmgmg";
byte[] key = inpString.getBytes();

SHA256.getHMAC(key, message)