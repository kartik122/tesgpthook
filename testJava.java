import org.h2.security.SHA256;

inpString = "xkag124jf1j1231asfas";
byte[] key = inpString.getBytes();

SHA256.getHMAC(key, message)