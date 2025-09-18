import { FirebaseError } from "firebase/app";

export function parseFirebaseError(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/invalid-credential":
      case "auth/invalid-email":
        return "Credential not valid.";
      case "auth/user-not-found":
        return "User not found.";
      case "auth/wrong-password":
        return "Wrong password.";
      case "auth/email-already-in-use":
        return "Email already registered.";
      case "auth/weak-password":
        return "Weak password (minimum 6 characters).";
      case "auth/too-many-requests":
        return "Too many attempts: please try again later.";
      case "auth/popup-closed-by-user":
        return "Login canceled by user.";
      default:
        return err.message || "Unknown error.";
    }
  }
  return "Unknown error.";
}