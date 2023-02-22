import org.h2.security.SHA256;

inpString = "xkag124jf1j123";
byte[] key = inpString.getBytes();

SHA256.getHMAC(key, message)