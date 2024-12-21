import argon2d from "argon2";

export async function hashPassword(plainPassword: string): Promise<string> {
  try {
    const hashedPassword = await argon2d.hash(plainPassword);
    console.log('Hashed password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
      console.error('Error hashing password:', error);
    throw error;
  }
}

export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  try {
    const isMatch = await argon2d.verify(hashedPassword, plainPassword);
    console.log('Password match:', isMatch);
    return isMatch;
  } catch (error) {
      console.error('Error verifying password:', error);
    throw error;
  }
}